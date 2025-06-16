import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertGameStateSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get game states for a user (for now, use user ID 1 as default)
  app.get("/api/game-states", async (req, res) => {
    try {
      const userId = 1; // For now, using a default user
      const gameStates = await storage.getGameStates(userId);
      res.json(gameStates);
    } catch (error) {
      res.status(500).json({ message: "Failed to get game states" });
    }
  });

  // Save game state
  app.post("/api/game-states", async (req, res) => {
    try {
      const userId = 1; // For now, using a default user
      const validatedData = insertGameStateSchema.parse({
        ...req.body,
        userId,
      });
      
      const gameState = await storage.saveGameState(validatedData);
      res.json(gameState);
    } catch (error) {
      res.status(400).json({ message: "Invalid game state data" });
    }
  });

  // Delete game state
  app.delete("/api/game-states/:id", async (req, res) => {
    try {
      const userId = 1; // For now, using a default user
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid game state ID" });
      }

      const deleted = await storage.deleteGameState(id, userId);
      if (deleted) {
        res.json({ message: "Game state deleted successfully" });
      } else {
        res.status(404).json({ message: "Game state not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to delete game state" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
