import { users, gameStates, type User, type InsertUser, type GameState, type InsertGameState } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getGameStates(userId: number): Promise<GameState[]>;
  saveGameState(gameState: InsertGameState): Promise<GameState>;
  deleteGameState(id: number, userId: number): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getGameStates(userId: number): Promise<GameState[]> {
    return await db.select().from(gameStates).where(eq(gameStates.userId, userId));
  }

  async saveGameState(insertGameState: InsertGameState): Promise<GameState> {
    const [gameState] = await db
      .insert(gameStates)
      .values({
        ...insertGameState,
        userId: insertGameState.userId || 1 // Default to user 1 for now
      })
      .returning();
    return gameState;
  }

  async deleteGameState(id: number, userId: number): Promise<boolean> {
    const result = await db
      .delete(gameStates)
      .where(eq(gameStates.id, id));
    return (result.rowCount || 0) > 0;
  }
}

export const storage = new DatabaseStorage();
