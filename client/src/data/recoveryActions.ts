import { RecoveryAction } from '../types/game';

export const recoveryActions: Record<string, RecoveryAction> = {
  basic_rest: {
    id: 'basic_rest',
    name: 'Rest',
    type: 'rest',
    healthRestore: 20,
    sanityRestore: 10,
    cooldown: 4, // 4 hours
    description: 'Take time to rest and recover your strength. Restores moderate health and some sanity.'
  },
  
  meditation: {
    id: 'meditation',
    name: 'Meditate',
    type: 'meditation',
    healthRestore: 15,
    sanityRestore: 25,
    cooldown: 6, // 6 hours
    description: 'Center your mind through meditation. Restores significant sanity and some health.'
  },
  
  social_recovery: {
    id: 'social_recovery',
    name: 'Seek Comfort',
    type: 'social',
    healthRestore: 10,
    sanityRestore: 15,
    cooldown: 3, // 3 hours
    requirements: {
      minAffection: 30
    },
    description: 'Find comfort in the company of a trusted companion. Requires good relationship with at least one character.'
  },
  
  library_study: {
    id: 'library_study',
    name: 'Study in Library',
    type: 'mystical',
    healthRestore: 5,
    sanityRestore: 20,
    cooldown: 8, // 8 hours
    requirements: {
      location: 'library'
    },
    description: 'Study ancient texts to understand your situation better. Available only in the library.'
  },
  
  garden_walk: {
    id: 'garden_walk',
    name: 'Walk in Gardens',
    type: 'rest',
    healthRestore: 15,
    sanityRestore: 18,
    cooldown: 2, // 2 hours
    requirements: {
      location: 'garden'
    },
    description: 'Take a peaceful walk through the manor gardens. Available only in the garden courtyard.'
  },
  
  music_therapy: {
    id: 'music_therapy',
    name: 'Listen to Music',
    type: 'social',
    healthRestore: 8,
    sanityRestore: 22,
    cooldown: 4, // 4 hours
    requirements: {
      location: 'music_room',
      characterPresent: 'elena'
    },
    description: 'Let Elena\'s music soothe your troubled mind. Requires Elena\'s presence in the music room.'
  },
  
  morgana_guidance: {
    id: 'morgana_guidance',
    name: 'Seek Morgana\'s Guidance',
    type: 'mystical',
    healthRestore: 12,
    sanityRestore: 30,
    cooldown: 12, // 12 hours
    requirements: {
      characterPresent: 'morgana',
      minAffection: 50
    },
    description: 'Morgana helps you understand and cope with supernatural stress. Requires high affection with Morgana.'
  },
  
  seraphina_blessing: {
    id: 'seraphina_blessing',
    name: 'Receive Seraphina\'s Blessing',
    type: 'mystical',
    healthRestore: 25,
    sanityRestore: 20,
    cooldown: 24, // 24 hours
    requirements: {
      characterPresent: 'seraphina',
      minAffection: 60
    },
    description: 'Seraphina\'s divine nature provides powerful healing. Requires very high affection with Seraphina.'
  }
};

export const getAvailableRecoveryActions = (gameState: any): RecoveryAction[] => {
  const now = Date.now();
  
  return Object.values(recoveryActions).filter(action => {
    // Check cooldown
    const lastUsed = gameState.lastRecoveryTimes[action.id] || 0;
    const cooldownMs = action.cooldown * 60 * 60 * 1000; // Convert hours to milliseconds
    if (now - lastUsed < cooldownMs) {
      return false;
    }
    
    // Check requirements
    if (action.requirements) {
      if (action.requirements.location && gameState.playerStats.location !== action.requirements.location) {
        return false;
      }
      
      if (action.requirements.minAffection) {
        const hasRequiredAffection = Object.values(gameState.characters).some(
          (character: any) => character.affection >= action.requirements!.minAffection!
        );
        if (!hasRequiredAffection) {
          return false;
        }
      }
      
      if (action.requirements.characterPresent) {
        // For now, assume character is present if affection is high enough
        const character = gameState.characters[action.requirements.characterPresent];
        if (!character || character.affection < 30) {
          return false;
        }
      }
    }
    
    return true;
  });
};