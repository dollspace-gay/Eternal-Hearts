import { Achievement } from '../types/game';

export const achievements: Achievement[] = [
  // Story Progress Achievements
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Complete character creation and enter Ravencroft Manor',
    unlocked: false,
    category: 'story',
    icon: 'Home'
  },
  {
    id: 'manor_explorer',
    name: 'Manor Explorer',
    description: 'Visit all major locations in Ravencroft Manor',
    unlocked: false,
    category: 'exploration',
    icon: 'Map'
  },
  {
    id: 'chapter_one_complete',
    name: 'Inheritance Accepted',
    description: 'Complete Chapter 1: The Inheritance',
    unlocked: false,
    category: 'story',
    icon: 'BookOpen'
  },
  {
    id: 'chapter_two_complete',
    name: 'Political Navigator',
    description: 'Complete Chapter 2: Political Tensions',
    unlocked: false,
    category: 'story',
    icon: 'Crown'
  },

  // Relationship Achievements
  {
    id: 'first_friend',
    name: 'First Friend',
    description: 'Reach 50+ affection with any character',
    unlocked: false,
    category: 'relationship',
    icon: 'Heart'
  },
  {
    id: 'trusted_ally',
    name: 'Trusted Ally',
    description: 'Reach 80+ affection and 70+ trust with any character',
    unlocked: false,
    category: 'relationship',
    icon: 'Shield'
  },
  {
    id: 'beloved',
    name: 'Beloved',
    description: 'Reach maximum affection (100) with any character',
    unlocked: false,
    category: 'relationship',
    icon: 'HeartHandshake'
  },
  {
    id: 'social_butterfly',
    name: 'Social Butterfly',
    description: 'Maintain 60+ affection with at least 5 characters',
    unlocked: false,
    category: 'relationship',
    icon: 'Users'
  },
  {
    id: 'lilith_confidant',
    name: 'Lilith\'s Confidant',
    description: 'Earn Lilith\'s complete trust and affection',
    unlocked: false,
    category: 'relationship',
    icon: 'Crown'
  },
  {
    id: 'morgana_mystic',
    name: 'Shadow Mystic',
    description: 'Unlock Morgana\'s deepest magical secrets',
    unlocked: false,
    category: 'relationship',
    icon: 'Sparkles'
  },

  // Survival Achievements
  {
    id: 'survivor',
    name: 'Survivor',
    description: 'Maintain health and sanity above 50 for 10 consecutive choices',
    unlocked: false,
    category: 'survival',
    icon: 'Heart'
  },
  {
    id: 'iron_will',
    name: 'Iron Will',
    description: 'Never let sanity drop below 25',
    unlocked: false,
    category: 'survival',
    icon: 'Brain'
  },
  {
    id: 'resilient',
    name: 'Resilient',
    description: 'Recover from critical health/sanity through rest and recovery',
    unlocked: false,
    category: 'survival',
    icon: 'RefreshCw'
  },
  {
    id: 'master_diplomat',
    name: 'Master Diplomat',
    description: 'Successfully navigate political crisis without losing any trust',
    unlocked: false,
    category: 'survival',
    icon: 'MessageCircle'
  },

  // Exploration Achievements
  {
    id: 'secret_keeper',
    name: 'Secret Keeper',
    description: 'Discover 5 character backstories',
    unlocked: false,
    category: 'exploration',
    icon: 'Eye'
  },
  {
    id: 'lore_master',
    name: 'Lore Master',
    description: 'Uncover the complete history of Ravencroft Manor',
    unlocked: false,
    category: 'exploration',
    icon: 'Scroll'
  },
  {
    id: 'truth_seeker',
    name: 'Truth Seeker',
    description: 'Make 25 investigative choices',
    unlocked: false,
    category: 'exploration',
    icon: 'Search'
  },
  {
    id: 'cosmic_witness',
    name: 'Cosmic Witness',
    description: 'Successfully communicate with Umbra',
    unlocked: false,
    category: 'exploration',
    icon: 'Star'
  },

  // Special Achievements
  {
    id: 'perfect_balance',
    name: 'Perfect Balance',
    description: 'Maintain 100 health and 100 sanity simultaneously',
    unlocked: false,
    category: 'survival',
    icon: 'Scale'
  },
  {
    id: 'peace_maker',
    name: 'Peace Maker',
    description: 'Successfully mediate between opposing faction members',
    unlocked: false,
    category: 'story',
    icon: 'Handshake'
  },
  {
    id: 'master_of_manor',
    name: 'Master of the Manor',
    description: 'Gain the respect and trust of all vampire residents',
    unlocked: false,
    category: 'relationship',
    icon: 'Castle'
  }
];

export const checkAchievements = (gameState: any): string[] => {
  const newlyUnlocked: string[] = [];
  
  achievements.forEach(achievement => {
    if (achievement.unlocked) return;
    
    let shouldUnlock = false;
    
    switch (achievement.id) {
      case 'first_steps':
        shouldUnlock = gameState.isCharacterCreated && gameState.completedScenes.length > 0;
        break;
        
      case 'manor_explorer':
        const locations = ['grand_hall', 'library', 'music_room', 'garden', 'dining_hall', 'ballroom'];
        const visitedLocations = gameState.completedScenes.filter((scene: string) => 
          locations.some(loc => scene.includes(loc))
        );
        shouldUnlock = visitedLocations.length >= 6;
        break;
        
      case 'chapter_one_complete':
        shouldUnlock = gameState.currentChapter >= 1;
        break;
        
      case 'chapter_two_complete':
        shouldUnlock = gameState.currentChapter >= 2;
        break;
        
      case 'first_friend':
        shouldUnlock = Object.values(gameState.characters).some((char: any) => char.affection >= 50);
        break;
        
      case 'trusted_ally':
        shouldUnlock = Object.values(gameState.characters).some((char: any) => 
          char.affection >= 80 && char.trust >= 70
        );
        break;
        
      case 'beloved':
        shouldUnlock = Object.values(gameState.characters).some((char: any) => char.affection >= 100);
        break;
        
      case 'social_butterfly':
        const highAffectionCount = Object.values(gameState.characters).filter(
          (char: any) => char.affection >= 60
        ).length;
        shouldUnlock = highAffectionCount >= 5;
        break;
        
      case 'survivor':
        // Check last 10 choices had health and sanity > 50
        const recentChoices = gameState.choiceHistory.slice(-10);
        shouldUnlock = recentChoices.length >= 10 && 
          recentChoices.every(() => gameState.playerStats.health > 50 && gameState.playerStats.sanity > 50);
        break;
        
      case 'iron_will':
        shouldUnlock = gameState.playerStats.sanity >= 25 && gameState.choiceHistory.length > 20;
        break;
        
      case 'perfect_balance':
        shouldUnlock = gameState.playerStats.health === 100 && gameState.playerStats.sanity === 100;
        break;
        
      case 'secret_keeper':
        shouldUnlock = gameState.unlockedBackstories.length >= 5;
        break;
        
      case 'cosmic_witness':
        shouldUnlock = gameState.characters.umbra && gameState.characters.umbra.affection >= 30;
        break;
    }
    
    if (shouldUnlock) {
      newlyUnlocked.push(achievement.id);
    }
  });
  
  return newlyUnlocked;
};