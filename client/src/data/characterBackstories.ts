import { CharacterBackstory } from '../types/game';
import { characters } from './gameData';

export const characterBackstories: CharacterBackstory[] = [
  {
    id: 'lilith_origin',
    characterId: 'lilith',
    title: 'The Ancient Queen\'s Origin',
    unlockRequirement: {
      minAffection: 60,
      minTrust: 50
    },
    unlocked: false,
    scenes: [
      {
        id: 'lilith_backstory_1',
        title: 'Echoes of Ancient Babylon',
        text: [
          'Lilith\'s eyes grow distant as she shares a memory from millennia past.',
          '"I was not always as you see me now. Once, I ruled over vast cities in ancient Mesopotamia."',
          '"The mortals called me the Queen of the Night, though they never understood my true nature."',
          'She pauses, the weight of countless centuries evident in her expression.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_rule',
            text: 'Ask about her reign as queen.',
            consequence: 'Historical inquiry • Shows interest in her past power',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'lilith_backstory_2'
          },
          {
            id: 'ask_about_transformation',
            text: 'Ask about her transformation into a vampire.',
            consequence: 'Personal inquiry • Seeks understanding of her nature',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'lilith_transformation_story'
          }
        ]
      }
    ]
  },

  {
    id: 'morgana_shadow_magic',
    characterId: 'morgana',
    title: 'The Shadow Witch\'s Secret',
    unlockRequirement: {
      minAffection: 50,
      minTrust: 40
    },
    unlocked: false,
    scenes: [
      {
        id: 'morgana_backstory_1',
        title: 'The Salem Connection',
        text: [
          'Morgana\'s voice drops to a whisper as she reveals a closely guarded secret.',
          '"I was in Salem during the witch trials, but not as you might think."',
          '"I was the one they were truly hunting - a real witch with real power."',
          'The shadows around her seem to respond to her emotions, growing darker and more animated.'
        ],
        character: characters.morgana,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'ask_about_salem',
            text: 'Ask about her experiences during the trials.',
            consequence: 'Historical trauma • Shows empathy for her suffering',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_salem_survival'
          },
          {
            id: 'ask_about_powers',
            text: 'Ask about the true extent of her magical abilities.',
            consequence: 'Power inquiry • Shows interest in her capabilities',
            effects: [{ characterId: 'morgana', affectionChange: 15 }],
            playerStatEffects: { sanityChange: -5 },
            nextScene: 'morgana_power_demonstration'
          }
        ]
      }
    ]
  },

  {
    id: 'seraphina_fall',
    characterId: 'seraphina',
    title: 'The Fallen Angel\'s Tragedy',
    unlockRequirement: {
      minAffection: 55,
      minTrust: 60
    },
    unlocked: false,
    scenes: [
      {
        id: 'seraphina_backstory_1',
        title: 'Divine Punishment',
        text: [
          'Seraphina\'s ethereal beauty is tinged with profound sadness as she speaks.',
          '"I was cast out for loving too deeply, for caring too much about mortal suffering."',
          '"The other angels saw my compassion as weakness, my interventions as defiance."',
          'Her voice carries the weight of divine judgment and eternal exile.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'offer_comfort',
            text: 'Offer comfort for her loss of paradise.',
            consequence: 'Emotional support • Shows deep empathy',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'seraphina_gratitude'
          },
          {
            id: 'ask_about_powers',
            text: 'Ask if she retained any of her divine abilities.',
            consequence: 'Divine inquiry • Shows curiosity about her nature',
            effects: [{ characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'seraphina_remaining_grace'
          }
        ]
      }
    ]
  },

  {
    id: 'valentina_revolution',
    characterId: 'valentina',
    title: 'The Revolutionary\'s Fire',
    unlockRequirement: {
      minAffection: 45,
      requiredFlags: ['supported_progressive_ideas']
    },
    unlocked: false,
    scenes: [
      {
        id: 'valentina_backstory_1',
        title: 'Born in Revolution',
        text: [
          'Valentina\'s passionate nature becomes clearer as she shares her origins.',
          '"I was turned during the French Revolution, in the chaos of social upheaval."',
          '"My maker believed that vampires should be the vanguard of progress, not shadows hiding from history."',
          'Her revolutionary spirit was forged in the fires of one of history\'s greatest transformations.'
        ],
        character: characters.valentina,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'discuss_maker',
            text: 'Ask about her vampire maker.',
            consequence: 'Personal history • Shows interest in her transformation',
            effects: [{ characterId: 'valentina', affectionChange: 18 }],
            nextScene: 'valentina_maker_story'
          },
          {
            id: 'discuss_revolution',
            text: 'Discuss the parallels between then and now.',
            consequence: 'Revolutionary philosophy • Engages with her ideals',
            effects: [{ characterId: 'valentina', affectionChange: 20 }],
            nextScene: 'valentina_modern_revolution'
          }
        ]
      }
    ]
  },

  {
    id: 'raven_hunter_past',
    characterId: 'raven',
    title: 'The Huntress\'s Burden',
    unlockRequirement: {
      minAffection: 40,
      minTrust: 45
    },
    unlocked: false,
    scenes: [
      {
        id: 'raven_backstory_1',
        title: 'Hunter Becomes Hunted',
        text: [
          'Raven\'s stoic facade cracks slightly as she reveals her painful past.',
          '"I was a vampire hunter once, sworn to destroy the very creatures I now live among."',
          '"Irony has a cruel sense of humor - the monster I hunted most relentlessly was the one who turned me."',
          'The weight of her transformation from hunter to vampire has shaped every aspect of her existence.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_hunt',
            text: 'Ask about her time as a hunter.',
            consequence: 'Painful inquiry • Shows courage to face difficult truths',
            effects: [{ characterId: 'raven', affectionChange: 15 }],
            nextScene: 'raven_hunting_days'
          },
          {
            id: 'ask_about_maker',
            text: 'Ask about the vampire who turned her.',
            consequence: 'Transformation inquiry • Seeks understanding of her change',
            effects: [{ characterId: 'raven', affectionChange: 18 }],
            nextScene: 'raven_maker_confrontation'
          }
        ]
      }
    ]
  },

  {
    id: 'elena_musical_tragedy',
    characterId: 'elena',
    title: 'The Musician\'s Lost Symphony',
    unlockRequirement: {
      minAffection: 35,
      minTrust: 30
    },
    unlocked: false,
    scenes: [
      {
        id: 'elena_backstory_1',
        title: 'Silenced by Society',
        text: [
          'Elena\'s fingers pause on the piano keys as she shares her tragic tale.',
          '"I was a composer in Vienna, during an era when women were forbidden from such pursuits."',
          '"My music was published under men\'s names, my genius attributed to others."',
          'The pain of having her life\'s work stolen echoes in every note she plays.'
        ],
        character: characters.elena,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'express_outrage',
            text: 'Express outrage at the injustice she faced.',
            consequence: 'Emotional solidarity • Shows anger at historical wrongs',
            effects: [{ characterId: 'elena', affectionChange: 22 }],
            nextScene: 'elena_vindication'
          },
          {
            id: 'ask_about_music',
            text: 'Ask to hear some of her original compositions.',
            consequence: 'Artistic appreciation • Shows respect for her talent',
            effects: [{ characterId: 'elena', affectionChange: 20 }],
            nextScene: 'elena_private_concert'
          }
        ]
      }
    ]
  }
];

export const checkBackstoryUnlocks = (gameState: any): string[] => {
  const newlyUnlocked: string[] = [];
  
  characterBackstories.forEach(backstory => {
    if (gameState.unlockedBackstories.includes(backstory.id)) return;
    
    const character = gameState.characters[backstory.characterId];
    if (!character) return;
    
    let shouldUnlock = true;
    
    if (backstory.unlockRequirement.minAffection && 
        character.affection < backstory.unlockRequirement.minAffection) {
      shouldUnlock = false;
    }
    
    if (backstory.unlockRequirement.minTrust && 
        character.trust < backstory.unlockRequirement.minTrust) {
      shouldUnlock = false;
    }
    
    if (backstory.unlockRequirement.requiredFlags) {
      backstory.unlockRequirement.requiredFlags.forEach(flag => {
        if (!gameState.flags[flag]) {
          shouldUnlock = false;
        }
      });
    }
    
    if (shouldUnlock) {
      newlyUnlocked.push(backstory.id);
    }
  });
  
  return newlyUnlocked;
};