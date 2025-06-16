import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { GameState, Choice, PlayerCharacter, JournalEntry, Achievement, RecoveryAction } from '../types/game';
import { initialGameState, gameData } from '../data/gameData';
import { achievements, checkAchievements } from '../data/achievements';
import { checkBackstoryUnlocks } from '../data/characterBackstories';
import { applyCharacterEffects } from '../utils/characterEffects';

interface GameContextType {
  gameState: GameState;
  currentScene: any;
  makeChoice: (choice: Choice) => void;
  createCharacter: (character: PlayerCharacter) => void;
  saveGame: (slotName: string) => void;
  loadGame: (gameState: GameState) => void;
  resetGame: () => void;
  addJournalEntry: (entry: JournalEntry) => void;
  unlockAchievement: (achievementId: string) => void;
  performRecoveryAction: (actionId: string) => void;
  unlockBackstory: (backstoryId: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

type GameAction = 
  | { type: 'MAKE_CHOICE'; payload: Choice }
  | { type: 'CREATE_CHARACTER'; payload: PlayerCharacter }
  | { type: 'LOAD_GAME'; payload: GameState }
  | { type: 'RESET_GAME' }
  | { type: 'UPDATE_AFFECTION'; payload: { characterId: string; change: number } }
  | { type: 'UPDATE_TRUST'; payload: { characterId: string; change: number } }
  | { type: 'ADD_JOURNAL_ENTRY'; payload: JournalEntry }
  | { type: 'UNLOCK_ACHIEVEMENT'; payload: string }
  | { type: 'PERFORM_RECOVERY'; payload: { actionId: string; healthRestore: number; sanityRestore: number } }
  | { type: 'UNLOCK_BACKSTORY'; payload: string }
  | { type: 'UPDATE_PLAYER_STATS'; payload: { health?: number; sanity?: number; location?: string } };

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'CREATE_CHARACTER':
      return {
        ...state,
        playerCharacter: action.payload,
        isCharacterCreated: true,
        currentScene: 'arrival',
        playerStats: {
          ...state.playerStats,
          location: 'Ravencroft Manor Gates'
        }
      };
      
    case 'MAKE_CHOICE':
      const choice = action.payload;
      const newState = { ...state };
      
      // Apply character affection and trust changes
      choice.effects.forEach(effect => {
        if (newState.characters[effect.characterId]) {
          newState.characters[effect.characterId].affection = Math.max(
            0, 
            Math.min(100, newState.characters[effect.characterId].affection + effect.affectionChange)
          );
          
          // Apply trust changes if specified
          if (effect.trustChange !== undefined) {
            newState.characters[effect.characterId].trust = Math.max(
              0, 
              Math.min(100, newState.characters[effect.characterId].trust + effect.trustChange)
            );
          }
          
          // Update character status based on affection and trust levels
          const affection = newState.characters[effect.characterId].affection;
          const trust = newState.characters[effect.characterId].trust;
          
          // Trust-based danger states override normal affection states
          if (trust <= 10) {
            newState.characters[effect.characterId].status = 'Hostile';
          } else if (trust <= 20) {
            newState.characters[effect.characterId].status = 'Deeply Suspicious';
          } else if (trust <= 30) {
            newState.characters[effect.characterId].status = 'Distrustful';
          } else if (trust <= 40) {
            newState.characters[effect.characterId].status = 'Wary';
          } else {
            // Normal affection-based states when trust is adequate
            if (affection >= 80) {
              newState.characters[effect.characterId].status = 'Deeply in Love';
            } else if (affection >= 60) {
              newState.characters[effect.characterId].status = 'Smitten';
            } else if (affection >= 40) {
              newState.characters[effect.characterId].status = 'Interested';
            } else if (affection >= 20) {
              newState.characters[effect.characterId].status = 'Curious';
            } else {
              newState.characters[effect.characterId].status = 'Neutral';
            }
          }
        }
      });

      // Apply player stat effects (health and sanity changes)
      if (choice.playerStatEffects) {
        if (choice.playerStatEffects.healthChange) {
          newState.playerStats.health = Math.max(
            0,
            Math.min(100, newState.playerStats.health + choice.playerStatEffects.healthChange)
          );
        }
        if (choice.playerStatEffects.sanityChange) {
          newState.playerStats.sanity = Math.max(
            0,
            Math.min(100, newState.playerStats.sanity + choice.playerStatEffects.sanityChange)
          );
        }
      }

      // Check for dangerous trust levels and trigger bad endings
      const hostileCharacters = Object.values(newState.characters).filter(char => char.trust <= 10);
      const deeplyMistrustfulCharacters = Object.values(newState.characters).filter(char => char.trust <= 20);
      
      if (hostileCharacters.length >= 2) {
        // Multiple characters are hostile - trigger immediate bad ending
        newState.currentScene = 'multiple_hostility_bad_end';
        newState.playerStats.health = 0;
        return newState;
      } else if (hostileCharacters.length === 1 && hostileCharacters[0].id === 'lilith') {
        // Lilith specifically is hostile - leader's wrath bad ending
        newState.currentScene = 'lilith_hostility_bad_end';
        newState.playerStats.health = 0;
        return newState;
      } else if (deeplyMistrustfulCharacters.length >= 4) {
        // Widespread distrust - exile bad ending
        newState.currentScene = 'widespread_distrust_bad_end';
        return newState;
      }

      // Track secrets probed for cumulative distrust
      if (choice.secretsProbed) {
        choice.secretsProbed.forEach(secret => {
          if (!newState.flags[`secret_${secret}_probed`]) {
            newState.flags[`secret_${secret}_probed`] = true;
            // Apply trust penalties for probing dangerous secrets
            Object.keys(newState.characters).forEach(charId => {
              if (newState.characters[charId].trust > 30) {
                newState.characters[charId].trust = Math.max(
                  20, 
                  newState.characters[charId].trust - Math.floor(Math.random() * 8 + 3)
                );
              }
            });
          }
        });
      }

      // Store choice in history with trust tracking
      newState.choiceHistory.push({
        sceneId: newState.currentScene,
        choiceId: choice.id,
        choiceText: choice.text,
        consequence: choice.consequence,
        timestamp: Date.now(),
        characterEffects: choice.effects
      });
      
      // Progress to next scene if specified
      if (choice.nextScene) {
        newState.currentScene = choice.nextScene;
        newState.completedScenes.push(state.currentScene);
      }
      
      return newState;
      
    case 'UPDATE_AFFECTION':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.characterId]: {
            ...state.characters[action.payload.characterId],
            affection: Math.max(
              0, 
              Math.min(100, state.characters[action.payload.characterId].affection + action.payload.change)
            )
          }
        }
      };
      
    case 'UPDATE_TRUST':
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.characterId]: {
            ...state.characters[action.payload.characterId],
            trust: Math.max(
              0, 
              Math.min(100, state.characters[action.payload.characterId].trust + action.payload.change)
            )
          }
        }
      };
      
    case 'ADD_JOURNAL_ENTRY':
      return {
        ...state,
        journal: [...state.journal, action.payload]
      };
      
    case 'UNLOCK_ACHIEVEMENT':
      return {
        ...state,
        achievements: state.achievements.map(achievement =>
          achievement.id === action.payload
            ? { ...achievement, unlocked: true, unlockedAt: Date.now() }
            : achievement
        )
      };
      
    case 'PERFORM_RECOVERY':
      return {
        ...state,
        playerStats: {
          ...state.playerStats,
          health: Math.min(state.playerStats.maxHealth, state.playerStats.health + action.payload.healthRestore),
          sanity: Math.min(state.playerStats.maxSanity, state.playerStats.sanity + action.payload.sanityRestore),
          restCount: action.payload.actionId === 'basic_rest' ? state.playerStats.restCount + 1 : state.playerStats.restCount,
          meditationCount: action.payload.actionId === 'meditation' ? state.playerStats.meditationCount + 1 : state.playerStats.meditationCount
        },
        lastRecoveryTimes: {
          ...state.lastRecoveryTimes,
          [action.payload.actionId]: Date.now()
        }
      };
      
    case 'UNLOCK_BACKSTORY':
      return {
        ...state,
        unlockedBackstories: [...state.unlockedBackstories, action.payload]
      };
      
    case 'UPDATE_PLAYER_STATS':
      return {
        ...state,
        playerStats: {
          ...state.playerStats,
          ...action.payload
        }
      };
      
    case 'LOAD_GAME':
      return action.payload;
      
    case 'RESET_GAME':
      return initialGameState;
      
    default:
      return state;
  }
}

export function GameProvider({ children }: { children: ReactNode }) {
  // Initialize achievements in the game state
  const initialStateWithAchievements = {
    ...initialGameState,
    achievements: achievements.map(achievement => ({
      ...achievement,
      unlocked: false
    }))
  };
  
  const [gameState, dispatch] = useReducer(gameReducer, initialStateWithAchievements);
  
  // Auto-save functionality
  useEffect(() => {
    const autoSave = () => {
      localStorage.setItem('crimsonEmbrace_autoSave', JSON.stringify(gameState));
    };
    
    const interval = setInterval(autoSave, 30000); // Auto-save every 30 seconds
    return () => clearInterval(interval);
  }, [gameState]);
  
  // Load auto-save on mount only if it exists and is valid
  useEffect(() => {
    const autoSaveData = localStorage.getItem('crimsonEmbrace_autoSave');
    if (autoSaveData) {
      try {
        const savedState = JSON.parse(autoSaveData);
        // Only load if the save has actual story progress (completed scenes)
        if (savedState.isCharacterCreated && savedState.completedScenes.length > 0) {
          dispatch({ type: 'LOAD_GAME', payload: savedState });
        } else {
          // Clear invalid save data to ensure fresh start
          localStorage.removeItem('crimsonEmbrace_autoSave');
        }
      } catch (error) {
        console.error('Failed to load auto-save:', error);
        localStorage.removeItem('crimsonEmbrace_autoSave');
      }
    }
  }, []);
  
  const getCurrentScene = () => {
    const chapter = gameData[gameState.currentChapter];
    return chapter?.scenes.find(scene => scene.id === gameState.currentScene);
  };
  
  const makeChoice = (choice: Choice) => {
    // Apply character trait effects to choice
    const modifiedChoice = gameState.playerCharacter 
      ? applyCharacterEffects([choice], gameState.playerCharacter)[0]
      : choice;
    
    dispatch({ type: 'MAKE_CHOICE', payload: modifiedChoice });
    
    // Add journal entry for choice
    const journalEntry: JournalEntry = {
      id: `choice_${Date.now()}`,
      type: 'choice',
      title: modifiedChoice.text,
      description: modifiedChoice.consequence || 'Made a significant decision',
      timestamp: Date.now(),
      sceneId: gameState.currentScene,
      metadata: {
        effects: modifiedChoice.effects,
        playerStatEffects: modifiedChoice.playerStatEffects
      }
    };
    addJournalEntry(journalEntry);
    
    // Check for achievement unlocks
    setTimeout(() => {
      const newAchievements = checkAchievements(gameState);
      newAchievements.forEach(achievementId => {
        unlockAchievement(achievementId);
      });
      
      // Check for backstory unlocks
      const newBackstories = checkBackstoryUnlocks(gameState);
      newBackstories.forEach(backstoryId => {
        unlockBackstory(backstoryId);
        
        // Add journal entry for backstory unlock
        const backstoryEntry: JournalEntry = {
          id: `backstory_${Date.now()}`,
          type: 'backstory',
          title: 'Character Story Unlocked',
          description: `A character has shared more of their past with you`,
          timestamp: Date.now(),
          metadata: { backstoryId }
        };
        addJournalEntry(backstoryEntry);
      });
    }, 100);
  };
  
  const createCharacter = (character: PlayerCharacter) => {
    dispatch({ type: 'CREATE_CHARACTER', payload: character });
  };
  
  const saveGame = (slotName: string) => {
    const saveData = {
      ...gameState,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(`crimsonEmbrace_save_${slotName}`, JSON.stringify(saveData));
  };
  
  const loadGame = (loadedGameState: GameState) => {
    dispatch({ type: 'LOAD_GAME', payload: loadedGameState });
  };
  
  const resetGame = () => {
    // Clear auto-save data to ensure fresh start
    localStorage.removeItem('crimsonEmbrace_autoSave');
    dispatch({ type: 'RESET_GAME' });
  };

  const addJournalEntry = (entry: JournalEntry) => {
    dispatch({ type: 'ADD_JOURNAL_ENTRY', payload: entry });
  };

  const unlockAchievement = (achievementId: string) => {
    dispatch({ type: 'UNLOCK_ACHIEVEMENT', payload: achievementId });
  };

  const performRecoveryAction = (actionId: string) => {
    // Will implement recovery action logic later
    const healthRestore = actionId === 'basic_rest' ? 20 : actionId === 'meditation' ? 15 : 10;
    const sanityRestore = actionId === 'meditation' ? 25 : actionId === 'basic_rest' ? 10 : 15;
    
    dispatch({ 
      type: 'PERFORM_RECOVERY', 
      payload: { actionId, healthRestore, sanityRestore } 
    });

    // Add journal entry for recovery action
    const entry: JournalEntry = {
      id: `recovery_${Date.now()}`,
      type: 'recovery',
      title: `Recovery: ${actionId.replace('_', ' ').toUpperCase()}`,
      description: `Restored ${healthRestore} health and ${sanityRestore} sanity through ${actionId.replace('_', ' ')}.`,
      timestamp: Date.now()
    };
    addJournalEntry(entry);
  };

  const unlockBackstory = (backstoryId: string) => {
    dispatch({ type: 'UNLOCK_BACKSTORY', payload: backstoryId });
  };
  
  return (
    <GameContext.Provider value={{
      gameState,
      currentScene: getCurrentScene(),
      makeChoice,
      createCharacter,
      saveGame,
      loadGame,
      resetGame,
      addJournalEntry,
      unlockAchievement,
      performRecoveryAction,
      unlockBackstory
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
