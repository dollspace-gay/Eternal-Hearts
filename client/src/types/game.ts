export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  affection: number;
  trust: number;
  status: string;
  avatar: string;
  color: string;
}

export interface Choice {
  id: string;
  text: string;
  consequence: string;
  effects: {
    characterId: string;
    affectionChange: number;
    trustChange?: number;
  }[];
  playerStatEffects?: {
    healthChange?: number;
    sanityChange?: number;
  };
  nextScene?: string;
  requirements?: {
    characterId: string;
    minAffection?: number;
    minTrust?: number;
  }[];
  dangerLevel?: 'low' | 'medium' | 'high' | 'lethal';
  secretsProbed?: string[];
}

export interface Scene {
  id: string;
  title: string;
  text: string[];
  character?: Character;
  choices: Choice[];
  background?: string;
}

export interface Chapter {
  id: string;
  title: string;
  scenes: Scene[];
}

export interface PlayerTrait {
  id: string;
  name: string;
  description: string;
  category: 'physical' | 'social' | 'mental';
}

export interface PlayerFlaw {
  id: string;
  name: string;
  description: string;
  points: number;
}

export interface PlayerBoon {
  id: string;
  name: string;
  description: string;
  cost: number;
}

export interface PlayerCharacter {
  name: string;
  traits: PlayerTrait[];
  flaws: PlayerFlaw[];
  boons: PlayerBoon[];
  availablePoints: number;
}

export interface PlayerStats {
  health: number;
  sanity: number;
  location: string;
  maxHealth: number;
  maxSanity: number;
  restCount: number;
  meditationCount: number;
  lastRestTime?: number;
}

export interface ChoiceHistory {
  sceneId: string;
  choiceId: string;
  choiceText: string;
  consequence: string;
  timestamp: number;
  characterEffects: { characterId: string; affectionChange: number }[];
}

export interface JournalEntry {
  id: string;
  type: 'choice' | 'relationship' | 'discovery' | 'backstory' | 'recovery';
  title: string;
  description: string;
  timestamp: number;
  sceneId?: string;
  characterId?: string;
  metadata?: Record<string, any>;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: number;
  category: 'story' | 'relationship' | 'exploration' | 'survival';
  icon: string;
}

export interface CharacterBackstory {
  id: string;
  characterId: string;
  title: string;
  scenes: Scene[];
  unlockRequirement: {
    minAffection?: number;
    minTrust?: number;
    requiredFlags?: string[];
  };
  unlocked: boolean;
}

export interface RecoveryAction {
  id: string;
  name: string;
  type: 'rest' | 'meditation' | 'social' | 'mystical';
  healthRestore: number;
  sanityRestore: number;
  cooldown: number; // hours
  requirements?: {
    location?: string;
    characterPresent?: string;
    minAffection?: number;
  };
  description: string;
}

export interface GameState {
  currentChapter: number;
  currentScene: string;
  characters: Record<string, Character>;
  playerCharacter?: PlayerCharacter;
  playerStats: PlayerStats;
  inventory: string[];
  flags: Record<string, boolean>;
  completedScenes: string[];
  choiceHistory: ChoiceHistory[];
  isCharacterCreated: boolean;
  journal: JournalEntry[];
  achievements: Achievement[];
  unlockedBackstories: string[];
  availableRecoveryActions: string[];
  lastRecoveryTimes: Record<string, number>;
}

export interface SaveSlot {
  id: number;
  name: string;
  gameData: GameState;
  timestamp: string;
}
