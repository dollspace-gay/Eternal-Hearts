import { Chapter, Character } from '../types/game';

export const characters: Record<string, Character> = {
  lilith: {
    id: 'lilith',
    name: 'Lilith Ravencroft',
    title: 'Ancient Vampire • Coven Leader',
    description: 'The enigmatic leader of the vampire coven, Lilith is both alluring and dangerous.',
    affection: 0,
    trust: 50,
    status: 'Neutral',
    avatar: 'vampire-fangs',
    color: 'bg-blood-red'
  },
  morgana: {
    id: 'morgana',
    name: 'Morgana Blackthorne',
    title: 'Shadow Mystic • Coven Elder',
    description: 'A mysterious vampire with deep knowledge of dark magic and ancient secrets.',
    affection: 0,
    trust: 30,
    status: 'Neutral',
    avatar: 'moon',
    color: 'bg-gothic-purple'
  },
  seraphina: {
    id: 'seraphina',
    name: 'Seraphina Vale',
    title: 'Fallen Angel • Protector',
    description: 'Once an angel, now caught between light and darkness, devoted to protecting you.',
    affection: 0,
    trust: 70,
    status: 'Neutral',
    avatar: 'star',
    color: 'bg-moonlight'
  },
  valentina: {
    id: 'valentina',
    name: 'Valentina Reyes',
    title: 'Passionate Revolutionary • Former Soldier',
    description: 'A fiery Spanish vampire with crimson curls and fierce amber eyes. Once fought in mortal wars, now battles for vampire rights and equality within the coven.',
    affection: 0,
    trust: 45,
    status: 'Challenging',
    avatar: 'sword',
    color: 'bg-sunset-orange'
  },
  celeste: {
    id: 'celeste',
    name: 'Celeste Dubois',
    title: 'Scholar Keeper • Ancient Librarian',
    description: 'A brilliant French vampire with steel-gray eyes behind wire-rimmed glasses. Keeper of the manor\'s vast supernatural library and forbidden knowledge.',
    affection: 0,
    trust: 40,
    status: 'Analytical',
    avatar: 'book',
    color: 'bg-deep-indigo'
  },
  raven: {
    id: 'raven',
    name: 'Raven Bjornsdottir',
    title: 'Wild Huntress • Guardian of Borders',
    description: 'A fierce Nordic vampire with braided platinum hair and ice-blue eyes. Prefers wilderness to civilization, hunts supernatural threats to the coven.',
    affection: 0,
    trust: 35,
    status: 'Wary',
    avatar: 'wolf',
    color: 'bg-frost-blue'
  },
  isadora: {
    id: 'isadora',
    name: 'Isadora Medici',
    title: 'Enchanting Socialite • Political Strategist',
    description: 'An Italian vampire with dark olive skin and emerald eyes. Master of social manipulation and political intrigue from her Renaissance court days.',
    affection: 0,
    trust: 25,
    status: 'Calculating',
    avatar: 'crown',
    color: 'bg-emerald-green'
  },
  luna: {
    id: 'luna',
    name: 'Luna Nightwhisper',
    title: 'Mystical Seer • Oracle of Futures',
    description: 'A mysterious vampire with silver-white hair and violet eyes that see beyond the veil. Practices ancient divination and prophetic magic.',
    affection: 0,
    trust: 60,
    status: 'Enigmatic',
    avatar: 'crystal-ball',
    color: 'bg-mystic-purple'
  },
  elena: {
    id: 'elena',
    name: 'Elena Volkov',
    title: 'Tormented Artist • Eternal Muse',
    description: 'A haunted Russian vampire with raven-black hair and pale gray eyes. Creates dark masterpieces while struggling with the weight of immortal memories.',
    affection: 0,
    trust: 55,
    status: 'Melancholic',
    avatar: 'paintbrush',
    color: 'bg-shadow-gray'
  },
  umbra: {
    id: 'umbra',
    name: 'Umbra',
    title: 'The Gentle Shadow • Ancient Guardian',
    description: 'An ancient eldritch entity of living shadow and starlight who manifests as pools of darkness with glowing points of light. Despite their cosmic horror appearance, they are incredibly shy and deeply affectionate to those they trust.',
    affection: 0,
    trust: 20,
    status: 'Timid',
    avatar: 'void',
    color: 'bg-void-purple'
  }
};

export const gameData: Chapter[] = [
  {
    id: 'chapter1',
    title: 'The Awakening',
    scenes: [
      {
        id: 'arrival',
        title: 'The Inheritance',
        text: [
          'The letter from the law firm still crumples in your trembling hand as you stand before the imposing gates of Ravencroft Manor. Your great-aunt Cordelia - a woman you\'d met only once as a child - has left you this sprawling estate in her will.',
          'The iron gates seem to part of their own accord as you approach, creaking open with the weight of centuries. The cobblestone path winds through overgrown gardens where roses bloom impossibly red in the moonlight.',
          'According to the letter, the manor comes with... tenants. Long-term residents who have "historical agreements" with the property. The lawyer had been frustratingly vague about the details, mentioning only that they are "nocturnal by nature" and "require certain accommodations."',
          'As you reach the massive oak doors, you notice they bear intricate carvings - symbols that seem to shift and dance when you\'re not looking directly at them. Your great-aunt\'s final note echoes in your mind: "The women of Ravencroft will test you, child. Be true to yourself, and you may find more than you ever imagined possible."'
        ],
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'knock_boldly',
            text: 'Knock firmly on the door. This is your property now, after all.',
            consequence: 'Confident approach • Shows ownership',
            effects: [],
            nextScene: 'first_meeting_confident'
          },
          {
            id: 'knock_politely',
            text: 'Knock gently and wait respectfully. You are their guest as much as they are yours.',
            consequence: 'Respectful approach • Shows diplomacy',
            effects: [],
            nextScene: 'first_meeting_polite'
          },
          {
            id: 'explore_grounds',
            text: 'Walk around the manor first to get a sense of the place.',
            consequence: 'Cautious approach • Gathers information',
            effects: [],
            nextScene: 'manor_exploration'
          }
        ]
      },
      // Chapter 1: Deep Character Development - Core trinity focus
      {
        id: 'lilith_greeting',
        title: 'A Gracious Welcome',
        text: [
          'Your respectful knock echoes through the grand entrance hall. After a moment, the heavy door swings open to reveal a woman of timeless elegance whose very presence commands attention.',
          'She stands tall and regal, with silver-streaked raven hair swept back in an intricate chignon that frames her aristocratic features. Her skin is pale as moonlight, unblemished despite the wisdom etched in the fine lines around her piercing violet eyes - eyes that seem to hold centuries of secrets.',
          '"Welcome to Ravencroft Manor," she says, her voice carrying the musical cadence of old nobility. Her lips curve in a warm smile that doesn\'t quite reach those ancient eyes. "I am Lilith. Your great-aunt spoke of you often - though I suspect she left out some rather important details about her... houseguests."',
          'She moves with fluid grace as she steps aside, her long burgundy velvet dress rustling softly. Every gesture speaks of power held in check, of someone accustomed to being obeyed without question.',
          '"Please, come in. We have much to discuss, and the night is still young. Your aunt was very dear to us, and we hope to understand what her legacy means to you."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'thank_for_welcome',
            text: '"Thank you for the warm welcome. I have to admit, I\'m quite curious about those details Cordelia left out."',
            consequence: 'Polite curiosity • Shows good manners and healthy interest',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'truth_revelation'
          },
          {
            id: 'ask_about_houseguests',
            text: '"Houseguests? The lawyer mentioned long-term tenants, but was very vague about the specifics."',
            consequence: 'Direct inquiry • Shows practical mindset',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'tenant_explanation'
          },
          {
            id: 'compliment_manor',
            text: '"This place is absolutely stunning. Cordelia had exquisite taste."',
            consequence: 'Appreciative response • Shows aesthetic appreciation',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'manor_appreciation'
          },
          {
            id: 'probe_financial_arrangements',
            text: '"I\'ll need to review all financial arrangements and rental agreements. As the new owner, I have certain legal obligations."',
            consequence: 'Legal scrutiny • Threatens established privacy',
            effects: [{ characterId: 'lilith', affectionChange: -5, trustChange: -12 }],
            dangerLevel: 'medium',
            secretsProbed: ['financial_secrecy'],
            nextScene: 'financial_tension'
          },
          {
            id: 'question_aunt_death',
            text: '"I find it strange that Cordelia died so suddenly. The doctor said it was her heart, but she was in perfect health when I last saw her."',
            consequence: 'Suspicion about death • Implies foul play',
            effects: [{ characterId: 'lilith', affectionChange: -8, trustChange: -18 }],
            dangerLevel: 'high',
            secretsProbed: ['cordelia_death'],
            nextScene: 'death_suspicion'
          }
        ]
      },
      {
        id: 'assertive_entrance',
        title: 'Bold Authority',
        text: [
          'Your confident knock reverberates through the manor. The door opens almost immediately, revealing the same elegant woman, but her expression is more appraising than welcoming.',
          '"Confidence," she observes with a slight smile. "I am Lilith Ravencroft, and you must be Cordelia\'s great-niece. Your aunt warned me you had a strong spirit."',
          'She doesn\'t immediately invite you in, instead studying you with those ancient violet eyes. "Before you enter, you should know that this house operates by certain... traditional courtesies. Respect is earned here, not inherited."',
          'Despite the warning, there\'s approval in her gaze. "But I appreciate directness. It suggests you won\'t faint at the first revelation of what your inheritance truly entails."'
        ],
        character: characters.lilith,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'acknowledge_test',
            text: '"I understand this is a test. I\'m ready to prove myself worthy of Cordelia\'s trust."',
            consequence: 'Accepts challenge • Shows understanding of dynamics',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'worthiness_test'
          },
          {
            id: 'ask_about_revelations',
            text: '"What kind of revelations should I be prepared for?"',
            consequence: 'Direct questioning • Shows fearless curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'revelation_preparation'
          },
          {
            id: 'show_respect',
            text: '"I apologize if I seemed presumptuous. May I please come in and learn about my aunt\'s legacy properly?"',
            consequence: 'Diplomatic adjustment • Shows adaptability',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'respectful_entry'
          }
        ]
      },
      {
        id: 'unlocked_discovery',
        title: 'The Open Door',
        text: [
          'The ornate handle turns easily under your hand - the door wasn\'t locked. As you push it open, you\'re greeted by the sight of a grand entrance hall lit by candles and the soft glow of a fireplace.',
          'A woman\'s voice, cultured and amused, drifts from the shadows: "How practical. Though most would consider it polite to wait for an invitation."',
          'She emerges from the sitting room - elegant, with violet eyes that seem far older than her apparent age. "I am Lilith. And you, I presume, are our new... lady of the manor."',
          'There\'s no hostility in her tone, only mild amusement at your pragmatic approach. "Your great-aunt had a similar directness. She also tested boundaries when she first arrived."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'apologize_for_presumption',
            text: '"I\'m sorry, I should have waited. I was just... eager to understand what I\'ve inherited."',
            consequence: 'Polite apology • Shows good manners despite boldness',
            effects: [{ characterId: 'lilith', affectionChange: 14 }],
            nextScene: 'gracious_apology_accepted'
          },
          {
            id: 'defend_practicality',
            text: '"If someone wants to keep people out, they should lock their doors. An unlocked door is an invitation."',
            consequence: 'Logical justification • Shows practical mindset',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'practical_philosophy'
          },
          {
            id: 'ask_about_cordelia',
            text: '"You knew Cordelia well? I\'d love to hear about her time here."',
            consequence: 'Personal interest • Shows family connection values',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'cordelia_memories'
          }
        ]
      },
      {
        id: 'first_meeting_confident',
        title: 'An Unexpected Welcome',
        text: [
          'Your firm knock echoes through what sounds like a vast interior. After a moment, the door swings open to reveal a woman of breathtaking beauty, her crimson dress seeming to flow like liquid silk in the candlelight.',
          '"You must be Cordelia\'s great-niece," she says, her voice like velvet over steel. "I am Lilith Ravencroft. Welcome to your inheritance." There\'s something in the way she says "inheritance" that suggests it encompasses more than just property.',
          'Her dark eyes appraise you with interest. "Bold of you to announce yourself so... assertively. Cordelia had mentioned you might have her spirit." She steps aside, gesturing for you to enter. "Please, come in. We have much to discuss."',
          'As you cross the threshold, you feel a strange tingling sensation, as if you\'ve passed through some invisible barrier. The air inside carries scents of old roses, aged wine, and something indefinably ancient.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_cordelia',
            text: '"You knew my great-aunt well? She never mentioned any of you in her letters."',
            consequence: 'Seeks family connection • Shows curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'cordelia_story'
          },
          {
            id: 'ask_about_arrangements',
            text: '"The lawyer mentioned \'historical arrangements.\' What exactly does that mean?"',
            consequence: 'Business-focused • Direct approach',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'arrangement_explanation'
          },
          {
            id: 'comment_on_manor',
            text: '"This place is incredible. It feels... alive somehow."',
            consequence: 'Appreciates atmosphere • Shows sensitivity',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'manor_secrets'
          }
        ]
      },
      {
        id: 'first_meeting_polite',
        title: 'A Gracious Introduction',
        text: [
          'Your gentle knock carries a respectful rhythm. After a few moments, the door opens to reveal a woman whose beauty seems to belong to another era entirely. Her deep red dress flows like shadows, and her dark eyes hold depths that seem to span centuries.',
          '"How refreshing," she says with genuine pleasure, "a visitor who understands the value of courtesy." Her smile is warm, though there\'s something otherworldly about the way the candlelight plays across her features. "I am Lilith Ravencroft, and you must be dear Cordelia\'s great-niece."',
          'She steps back gracefully, extending her hand in invitation. "Your respectful approach speaks well of your character. Cordelia always said you were raised with proper manners." There\'s approval in her voice, and something else - perhaps relief.',
          'As you cross the threshold, you feel a subtle shift in the air, as if you\'ve entered a space where different rules apply. The interior is lit by candles and firelight, casting dancing shadows that seem almost alive.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'thank_for_welcome',
            text: '"Thank you for the warm welcome. I wasn\'t sure what to expect when I arrived."',
            consequence: 'Grateful and honest • Shows vulnerability',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'honest_uncertainty'
          },
          {
            id: 'ask_about_cordelia_relationship',
            text: '"You speak of my great-aunt with such fondness. Were you close friends?"',
            consequence: 'Personal interest • Shows care for family connections',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'cordelia_friendship'
          },
          {
            id: 'comment_on_atmosphere',
            text: '"This place has an extraordinary atmosphere. It feels like stepping into another world."',
            consequence: 'Observant appreciation • Shows sensitivity to supernatural',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'atmospheric_awareness'
          },
          {
            id: 'inquire_about_arrangements',
            text: '"The lawyer mentioned certain arrangements with the property. I hope my arrival won\'t disrupt your life here."',
            consequence: 'Considerate approach • Shows respect for existing residents',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'considerate_inquiry'
          },
          {
            id: 'notice_other_presences',
            text: '"I sense I\'m not the only guest here tonight. May I meet the others?"',
            consequence: 'Perceptive awareness • Shows interest in meeting everyone',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'early_introductions'
          }
        ]
      },
      {
        id: 'early_introductions',
        title: 'Meeting the Residents',
        text: [
          'Lilith\'s eyes brighten with approval at your perceptiveness. "Very observant. Yes, you\'re quite right - we are a community here."',
          'She leads you into the grand hall where several figures emerge from the shadows and adjoining rooms, each moving with an otherworldly grace.',
          'A elegant woman in deep purple approaches first. "I am Isadora," she says with practiced diplomacy. "Welcome to Ravencroft Manor."',
          'Behind her, a woman with silver-streaked hair and knowing eyes steps forward. "Celeste," she introduces herself simply. "I manage our... research collections."',
          'The introductions create an immediate sense of the diverse personalities within this mysterious household.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'greet_each_respectfully',
            text: 'Take time to greet each person individually and learn their names properly.',
            consequence: 'Respectful approach • Shows genuine interest in everyone',
            effects: [
              { characterId: 'isadora', affectionChange: 15 },
              { characterId: 'celeste', affectionChange: 12 },
              { characterId: 'lilith', affectionChange: 8 }
            ],
            nextScene: 'respectful_introductions'
          },
          {
            id: 'ask_about_community',
            text: '"How long have you all lived here together? This seems like a close-knit community."',
            consequence: 'Community interest • Shows appreciation for their bonds',
            effects: [
              { characterId: 'isadora', affectionChange: 12 },
              { characterId: 'lilith', affectionChange: 10 }
            ],
            nextScene: 'community_history'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you all for welcoming me. I hope I can contribute positively to your community."',
            consequence: 'Grateful newcomer • Shows desire to contribute',
            effects: [
              { characterId: 'isadora', affectionChange: 18 },
              { characterId: 'celeste', affectionChange: 15 }
            ],
            nextScene: 'integration_discussion'
          }
        ]
      },
      {
        id: 'respectful_introductions',
        title: 'Personal Connections',
        text: [
          'You take genuine time with each introduction, making eye contact and asking thoughtful questions about their roles in the household.',
          'Isadora responds warmly to your diplomatic approach. "How refreshing to meet someone who values proper introductions."',
          'Celeste nods approvingly. "Attention to individual worth is a valuable trait. I sense you understand that each person brings unique contributions."',
          'Your respectful approach creates immediate positive impressions and sets the foundation for meaningful relationships.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_individual_interests',
            text: 'Ask each person about their personal interests and passions.',
            consequence: 'Personal interest • Shows genuine curiosity about individuals',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'isadora', affectionChange: 15 }
            ],
            nextScene: 'individual_passions_revealed'
          },
          {
            id: 'express_eagerness_to_learn',
            text: '"I\'d love to learn more about everyone\'s role in making this community work."',
            consequence: 'Learning eagerness • Shows appreciation for community structure',
            effects: [
              { characterId: 'isadora', affectionChange: 18 },
              { characterId: 'lilith', affectionChange: 12 }
            ],
            nextScene: 'community_roles_explained'
          },
          {
            id: 'offer_own_introduction',
            text: 'Share something meaningful about yourself to reciprocate their openness.',
            consequence: 'Reciprocal sharing • Shows willingness to be vulnerable',
            effects: [
              { characterId: 'celeste', affectionChange: 22 },
              { characterId: 'isadora', affectionChange: 20 }
            ],
            nextScene: 'mutual_introduction'
          }
        ]
      },
      {
        id: 'community_history',
        title: 'Bonds of Time',
        text: [
          'Isadora and Lilith exchange a meaningful glance before Isadora speaks. "Some of us have been here for decades, others are more recent additions."',
          '"What makes this community special," Lilith adds, "is not the length of time we\'ve known each other, but the depth of trust we\'ve built."',
          'Celeste interjects thoughtfully: "We\'ve learned that true family is chosen, not born. Your great-aunt understood this when she welcomed us."',
          'You sense layers of history and connection that run deeper than mere cohabitation.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_chosen_family',
            text: '"I love the idea of chosen family. Blood doesn\'t always mean belonging."',
            consequence: 'Family philosophy • Shows understanding of chosen bonds',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'isadora', affectionChange: 18 }
            ],
            nextScene: 'chosen_family_bonds'
          },
          {
            id: 'ask_about_cordelia_integration',
            text: '"How did Cordelia become part of your family? What made her special?"',
            consequence: 'Legacy interest • Shows desire to understand aunt\'s role',
            effects: [
              { characterId: 'lilith', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 15 }
            ],
            nextScene: 'cordelia_legacy_story'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored to be welcomed into such a close community. I hope to earn my place here."',
            consequence: 'Humble gratitude • Shows respect for existing bonds',
            effects: [
              { characterId: 'isadora', affectionChange: 22 },
              { characterId: 'lilith', affectionChange: 18 }
            ],
            nextScene: 'earning_place_discussion'
          }
        ]
      },
      {
        id: 'integration_discussion',
        title: 'Finding Your Place',
        text: [
          'Your thoughtful words create a warm atmosphere of acceptance. Isadora steps forward with a diplomatic smile.',
          '"Contribution is exactly what makes a community thrive. Each of us brings something unique to our shared life here."',
          'Celeste adds: "The question isn\'t whether you can contribute, but how your particular strengths will enhance what we\'ve built together."',
          'You feel the beginning of belonging, a sense that there might truly be a place for you in this extraordinary household.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_needs',
            text: '"What does the community need most? Where could I make the biggest difference?"',
            consequence: 'Service orientation • Shows desire to help where needed most',
            effects: [
              { characterId: 'isadora', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 20 }
            ],
            nextScene: 'community_needs_assessment'
          },
          {
            id: 'share_skills',
            text: 'Mention specific skills you have that might benefit the community.',
            consequence: 'Skill sharing • Shows practical readiness to contribute',
            effects: [
              { characterId: 'celeste', affectionChange: 22 },
              { characterId: 'isadora', affectionChange: 18 }
            ],
            nextScene: 'skill_integration_planning'
          },
          {
            id: 'emphasize_learning',
            text: '"I\'m eager to learn from all of you. Everyone here clearly has wisdom to share."',
            consequence: 'Learning humility • Shows respect for others\' knowledge',
            effects: [
              { characterId: 'celeste', affectionChange: 24 },
              { characterId: 'lilith', affectionChange: 15 }
            ],
            nextScene: 'wisdom_sharing_culture'
          }
        ]
      },
      {
        id: 'honest_uncertainty',
        title: 'Shared Vulnerability',
        text: [
          'Lilith\'s expression grows warmer at your honesty. "Uncertainty is natural when stepping into the unknown. Your great-aunt felt the same way when she first arrived here decades ago."',
          'She guides you toward a sitting room where a fire crackles in an ornate fireplace. "Cordelia left detailed instructions about how to... introduce you to our world. She wanted you to feel welcomed, not overwhelmed."',
          '"We are not ordinary tenants," Lilith continues carefully, watching your reaction. "This manor has served as a sanctuary for beings like myself for over three centuries. Cordelia understood our nature and chose to protect us."',
          'Her dark eyes search your face. "The question now is whether you, like her, can accept what lies beyond the boundaries of what most consider normal."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_openness',
            text: '"I\'ve always believed there was more to the world than what we see on the surface. I\'m willing to learn."',
            consequence: 'Open-minded • Shows readiness to accept supernatural',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'supernatural_revelation'
          },
          {
            id: 'ask_about_protection',
            text: '"What kind of protection? Are you in danger from something?"',
            consequence: 'Protective instinct • Shows concern for others',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'protection_discussion'
          },
          {
            id: 'request_gradual_explanation',
            text: '"I want to understand, but could you help me learn gradually? This is all quite overwhelming."',
            consequence: 'Honest about limits • Shows wisdom in pacing',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'gradual_revelation'
          }
        ]
      },
      {
        id: 'cordelia_story',
        title: 'Family Secrets',
        text: [
          'Lilith\'s expression softens with something that might be genuine fondness. "Cordelia was... unique among mortals. She understood our nature and chose to protect us rather than fear us."',
          'She leads you through a grand hallway lined with portraits of women spanning different eras. "Your great-aunt inherited this manor in 1962, much as you have now. But she chose to stay, to learn, to become part of something larger than herself."',
          '"We are vampires," Lilith says simply, watching your reaction carefully. "Ancient creatures who have found sanctuary here for over three centuries. Cordelia became our protector, our friend... and in some ways, our family."',
          'She pauses before a portrait of a woman who bears a striking resemblance to you. "She hoped you might choose to continue her legacy. But the choice, as it was for her, is entirely yours."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_easily',
            text: '"Vampires? That... actually explains a lot about Aunt Cordelia. She always seemed to know secrets."',
            consequence: 'Takes revelation well • Shows adaptability',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'acceptance_path'
          },
          {
            id: 'need_proof',
            text: '"Vampires aren\'t real. If you\'re trying to scare me away from my inheritance..."',
            consequence: 'Skeptical • Requires evidence',
            effects: [{ characterId: 'lilith', affectionChange: 3 }],
            nextScene: 'proof_demanded'
          },
          {
            id: 'ask_about_choice',
            text: '"What kind of choice did Cordelia make? What are you asking of me?"',
            consequence: 'Practical questions • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'choice_explanation'
          }
        ]
      },
      {
        id: 'library',
        title: 'The Library of Secrets',
        text: [
          'Lilith leads you to a magnificent library, its towering shelves disappearing into shadow. Dust motes dance in the pale moonlight filtering through stained glass windows, each beam illuminating leather-bound tomes that seem to whisper secrets of centuries past.',
          '"This was Cordelia\'s favorite room," Lilith says softly. "She spent countless hours here, learning our history, our struggles, our hopes." She runs her finger along an ancient spine. "Knowledge is power, but it\'s also burden."',
          '"These books contain the true history of our kind - not the myths and legends humans tell, but our real stories. Stories of love that transcends mortality, of sacrifice, of the price of immortality."',
          'She turns to face you, her dark eyes holding depths of centuries. "Your great-aunt believed you had the strength to bear such knowledge. The question is... do you want to learn who we truly are?"'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'eager_to_learn',
            text: '"Yes, I want to understand. Cordelia left me this place for a reason."',
            consequence: 'Shows commitment to legacy • Opens knowledge path',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'knowledge_path'
          },
          {
            id: 'cautious_interest',
            text: '"I\'ll listen, but I need to know what I\'m getting into."',
            consequence: 'Cautious but open • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'gradual_revelation'
          },
          {
            id: 'focus_on_inheritance',
            text: '"First, I need to understand the practical aspects of living here."',
            consequence: 'Practical focus • Establishes boundaries',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'practical_arrangements'
          }
        ]
      },
      {
        id: 'knowledge_path',
        title: 'The Weight of Truth',
        text: [
          'Lilith nods with approval. "Cordelia chose well. You have her courage." She moves to one of the ancient tomes, running her fingers along its spine with reverence.',
          '"Our history is not one of monsters and victims, as human stories would have you believe. We are beings of passion, of deep connection, of love that transcends the mortal understanding of time."',
          'She pulls a leather-bound journal from the shelf. "This belonged to your great-aunt. Her observations, her journey of understanding our nature. She documented everything - our struggles, our joys, our eternal search for meaning."',
          'Opening the journal, you see Cordelia\'s familiar handwriting: "Day 127 - I begin to understand that immortality is not a curse, but a responsibility. To love deeply, to protect fiercely, to never forget what it means to be human while becoming something more."'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'read_more',
            text: '"May I read more of her journal? I want to understand her journey."',
            consequence: 'Shows deep interest • Builds trust',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_journey'
          },
          {
            id: 'ask_about_love',
            text: '"Love that transcends mortality? What does that mean exactly?"',
            consequence: 'Focuses on emotional aspects • Romantic path',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'love_explanation'
          },
          {
            id: 'ask_about_others',
            text: '"You mentioned others live here. May I meet them?"',
            consequence: 'Shows interest in community • Opens social paths',
            effects: [{ characterId: 'morgana', affectionChange: 8 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'meet_the_coven'
          }
        ]
      },
      {
        id: 'first_kiss',
        title: 'Crimson Embrace',
        text: [
          'Lilith\'s eyes widen with surprise and something deeper - a hunger that goes beyond the physical. "Few have seen me so clearly," she whispers, her voice thick with emotion.',
          'She steps even closer, her hand finally making contact with your cheek. Her skin is marble-cold but somehow comforting. "You are either very brave or very foolish, little mortal. Perhaps both."',
          'Time seems to stop as she leans in, her lips brushing against yours in a kiss that tastes of wine and secrets. When she pulls away, her eyes are bright with an inner fire.',
          '"Welcome to my world," she breathes against your lips. "There will be no going back now."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_darkness',
            text: '"I don\'t want to go back. Show me everything."',
            consequence: 'Fully commits • Major story progression',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'transformation_begin'
          },
          {
            id: 'need_time',
            text: '"This is all happening so fast. I need time to understand what this means."',
            consequence: 'Measured response • Preserves agency',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'manor_tour'
          }
        ]
      },
      {
        id: 'manor_tour',
        title: 'Halls of Shadows',
        text: [
          'Lilith nods with understanding, though you catch a flicker of disappointment in her eyes. "Of course. This is... overwhelming, I imagine." She steps back, giving you space to breathe.',
          'She gestures toward the towering doors of the library. "Perhaps a tour of the manor would help you understand what you\'ve stumbled into. There are others here you should meet."',
          'As you walk through corridors lined with ancient portraits whose eyes seem to follow your movement, Lilith speaks softly. "Ravencroft Manor has been home to our coven for over three centuries. We are... selective about our guests."',
          'You pass by a grand staircase when you hear the soft sound of piano music drifting from somewhere above. The melody is hauntingly beautiful, tinged with melancholy that seems to seep into your very soul.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_music',
            text: '"That music... it\'s beautiful. Who\'s playing?"',
            consequence: 'Shows interest in other residents',
            effects: [{ characterId: 'morgana', affectionChange: 5 }],
            nextScene: 'meet_morgana'
          },
          {
            id: 'ask_about_coven',
            text: '"A coven? How many of you live here?"',
            consequence: 'Practical questions • Shows caution',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'coven_explanation'
          },
          {
            id: 'express_fear',
            text: '"I\'m scared. This all feels like a dream... or a nightmare."',
            consequence: 'Vulnerable honesty • May attract protection',
            effects: [{ characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'seraphina_appears'
          }
        ]
      },
      {
        id: 'meet_morgana',
        title: 'The Shadow Mystic',
        text: [
          'Lilith\'s lips curve into a knowing smile. "Ah, you have a good ear. That would be Morgana. She\'s... complicated." There\'s an edge to her voice that suggests a complex history.',
          'She leads you up the grand staircase, the music growing louder with each step. The melody weaves through minor keys like silk through shadows, speaking of loss and longing.',
          'You reach a set of ornate double doors, slightly ajar. Through the gap, you can see a figure seated at an antique grand piano, her dark hair cascading like a waterfall as she plays.',
          'Lilith pushes the door open softly. "Morgana, we have a guest." The music stops abruptly, and the woman at the piano turns.',
          'Morgana is breathtakingly beautiful in an otherworldly way - her long midnight-black hair falls in loose waves past her shoulders, contrasting sharply with her porcelain skin that seems to glow in the moonlight. Her silver eyes are large and expressive, holding depths of artistic melancholy and centuries of creative passion.',
          'She wears a flowing black dress that seems to shimmer with its own inner darkness, and her slender fingers - still poised above the piano keys - are adorned with antique silver rings. When she moves, there\'s a fluid grace that speaks of someone who sees the world as an endless canvas of possibility.'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'compliment_music',
            text: '"Your playing is extraordinary. That melody... it felt like it was speaking to my soul."',
            consequence: 'Artistic appreciation • Appeals to her nature',
            effects: [{ characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'morgana_interest'
          },
          {
            id: 'ask_about_song',
            text: '"What was that piece? I\'ve never heard anything like it."',
            consequence: 'Shows genuine curiosity',
            effects: [{ characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'morgana_composition'
          },
          {
            id: 'stay_silent',
            text: 'Remain silent and wait for her to speak first.',
            consequence: 'Respectful approach • Shows wisdom',
            effects: [{ characterId: 'morgana', affectionChange: 8 }],
            nextScene: 'morgana_observation'
          }
        ]
      },
      {
        id: 'seraphina_appears',
        title: 'Guardian Angel',
        text: [
          'Before Lilith can respond to your admission of fear, a gentle voice speaks from behind you both. "Fear is wisdom in the face of the unknown."',
          'You turn to see a woman descending the staircase like moonlight made manifest. Seraphina is ethereally beautiful, with platinum blonde hair that falls in soft waves to her waist, seeming to glow with its own inner light. Her skin is luminous and flawless, with an otherworldly radiance that speaks of divine origins.',
          'Her eyes are the most striking feature - pale blue like winter sky, filled with ancient wisdom and infinite compassion. She wears a flowing white dress that moves like silk in a gentle breeze, and when she moves, you catch glimpses of something shimmering behind her - translucent wings that fold against her back like captured starlight.',
          'There\'s an aura of peace and protection around her that makes you feel instantly safe. Her very presence seems to calm the shadows and brighten the room, as if she carries a piece of heaven within her.',
          'Lilith\'s expression grows complex. "Seraphina. I didn\'t expect you to..." She pauses, then continues more formally. "This is our guest. She\'s just learning about our world."',
          'Seraphina approaches with fluid grace, her melodious voice carrying the weight of centuries of kindness. "You\'re safe here," she says softly, and somehow you believe her completely. "I won\'t let any harm come to you."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_wings',
            text: '"I thought I saw... are you an angel?"',
            consequence: 'Direct question • Shows supernatural awareness',
            effects: [{ characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'seraphina_truth'
          },
          {
            id: 'thank_for_protection',
            text: '"Thank you. I... I feel like I can trust you."',
            consequence: 'Grateful response • Builds trust',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'seraphina_promise'
          },
          {
            id: 'question_safety',
            text: '"Safe from what exactly? What kind of danger am I in?"',
            consequence: 'Practical concerns • Shows intelligence',
            effects: [{ characterId: 'lilith', affectionChange: -3 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'danger_revealed'
          }
        ]
      },
      {
        id: 'love_explanation',
        title: 'The Nature of Eternal Love',
        text: [
          'Lilith\'s eyes soften, and for a moment, the ancient creature before you seems almost vulnerable. "Love among our kind is... intense beyond mortal comprehension. When we love, it is with the weight of centuries, the promise of eternity."',
          'She moves closer, her voice dropping to barely above a whisper. "Your great-aunt understood this. She loved deeply, completely, but chose to remain mortal. It was a choice we respected, even as it meant watching her age while we remained unchanged."',
          '"But you..." Her hand hovers near your cheek, not quite touching. "There is something about you that calls to the eternal part of my nature. A recognition that goes beyond mere attraction."',
          'The weight of her words settles between you. This is no casual flirtation, but something far deeper and more significant than you had imagined possible.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'reciprocate_feeling',
            text: '"I feel it too. This connection... it\'s unlike anything I\'ve ever experienced."',
            consequence: 'Deepens bond • Major romance progression',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'deepening_bond'
          },
          {
            id: 'need_understanding',
            text: '"I want to understand more before I can respond to such feelings."',
            consequence: 'Thoughtful approach • Builds respect',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'patient_courtship'
          },
          {
            id: 'ask_about_cordelia',
            text: '"Did Cordelia ever regret staying mortal when she loved someone eternal?"',
            consequence: 'Seeks wisdom from past • Shows depth',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_choice_story'
          }
        ]
      },
      {
        id: 'meet_the_coven',
        title: 'The Gathering',
        text: [
          'Lilith guides you through the manor\'s elegant corridors to a warmly lit sitting room where two other women await. The atmosphere is welcoming yet charged with an otherworldly energy.',
          'The first woman sits at a grand piano, her fingers dancing across the keys in a melancholy melody. Her dark hair frames a face of ethereal beauty, and when she looks up, her silver eyes seem to see into your very soul. "This must be Cordelia\'s heir," she says, her voice like distant thunder.',
          'The second woman rises gracefully from a velvet armchair, her platinum hair catching the candlelight like spun moonbeams. There\'s something luminous about her presence, almost angelic. "Welcome," she says warmly. "I am Seraphina, and this is Morgana."',
          'Lilith settles beside you. "These are my... sisters, in a sense. We have shared this sanctuary for many decades, each bringing our own gifts and stories to this place your great-aunt protected."'
        ],
        choices: [
          {
            id: 'greet_formally',
            text: '"It\'s an honor to meet you both. Cordelia spoke of having special tenants, but she never mentioned how extraordinary you are."',
            consequence: 'Formal approach • Shows respect for all',
            effects: [{ characterId: 'morgana', affectionChange: 8 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'formal_introductions'
          },
          {
            id: 'focus_on_morgana',
            text: 'Turn to Morgana. "That melody... it\'s hauntingly beautiful. Did you compose it?"',
            consequence: 'Shows artistic interest • Appeals to Morgana',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 2 }],
            nextScene: 'morgana_focus'
          },
          {
            id: 'focus_on_seraphina',
            text: 'Address Seraphina. "There\'s something different about you... something that feels like peace."',
            consequence: 'Recognizes divine nature • Appeals to Seraphina',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 2 }],
            nextScene: 'seraphina_focus'
          },
          {
            id: 'ask_about_sanctuary',
            text: '"Lilith mentioned this place is a sanctuary. What does that mean for beings like yourselves?"',
            consequence: 'Practical question • Shows understanding',
            effects: [{ characterId: 'lilith', affectionChange: 8 }, { characterId: 'morgana', affectionChange: 5 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'sanctuary_explanation'
          }
        ]
      },
      {
        id: 'morgana_focus',
        title: 'The Composer\'s Heart',
        text: [
          'Morgana\'s fingers pause on the keys, and for the first time since you entered, she truly looks at you. Her silver eyes hold depths of ancient sorrow and flickering hope.',
          '"I did compose it," she says softly, her voice carrying the weight of centuries. "It\'s called \'Elegy for the Dawn\' - a piece about longing for something you can never have again." Her gaze grows distant. "I was a musician in life, before... this."',
          'She plays a few more notes, each one pure and crystalline. "Music is the only thing that remains unchanged by immortality. It speaks to the soul in ways that transcend the physical form."',
          'Seraphina watches the exchange with interest, while Lilith\'s expression is unreadable. You sense that Morgana rarely opens up to strangers, making this moment significant.'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'ask_about_past',
            text: '"What was your life like before? When you were mortal?"',
            consequence: 'Personal question • May deepen connection or cause pain',
            effects: [{ characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'morgana_past'
          },
          {
            id: 'request_performance',
            text: '"Would you play more? I\'d love to hear another piece."',
            consequence: 'Shows appreciation • Encourages artistic expression',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_performance'
          },
          {
            id: 'philosophical_response',
            text: '"Music as the language of the soul... I think Cordelia would have understood that sentiment."',
            consequence: 'Thoughtful response • Shows depth',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'philosophical_discussion'
          }
        ]
      },
      {
        id: 'seraphina_focus',
        title: 'Touched by Grace',
        text: [
          'Seraphina\'s smile brightens the entire room, and you feel a warmth that has nothing to do with the fireplace. "You have good instincts," she says, moving closer with fluid grace. "Most mortals sense something different but can\'t name what it is."',
          'As she approaches, you catch glimpses of something shimmering behind her - not quite visible, but definitely there. Wings, perhaps, folded against her back like captured starlight.',
          '"I was an angel once," she says simply, as if discussing the weather. "A guardian assigned to protect humanity from supernatural threats. But I... chose a different path." Her eyes find yours. "Love has a way of changing even the most absolute of beings."',
          'The revelation hangs in the air. Morgana\'s playing has stopped entirely, and even Lilith seems to pay closer attention to this conversation.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_fall',
            text: '"You fell from grace? What could make an angel abandon heaven?"',
            consequence: 'Direct question • May reveal painful truth',
            effects: [{ characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'seraphina_fall_story'
          },
          {
            id: 'offer_acceptance',
            text: '"Whatever path you chose, you seem to have found peace here. That\'s what matters."',
            consequence: 'Non-judgmental • Shows acceptance',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_gratitude'
          },
          {
            id: 'ask_about_protection',
            text: '"As a former guardian, do you still protect people? Is that why you\'re here?"',
            consequence: 'Focuses on purpose • Shows practical thinking',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'protection_discussion'
          }
        ]
      },
      {
        id: 'deepening_bond',
        title: 'Acknowledgment of Souls',
        text: [
          'Lilith\'s hand finally touches your cheek, cool but electric. "I have existed for over four centuries," she whispers, "and never have I felt such immediate recognition of a kindred spirit."',
          'The library around you seems to fade as she steps closer. "This is not mere attraction, though you are undeniably beautiful. This is something deeper - a calling of soul to soul across the divide between mortal and eternal."',
          'Her thumb traces your lower lip gently. "But I must warn you... to love one such as me is to accept a love that will outlast your mortal span unless..." She pauses, the unspoken possibility hanging between you.',
          'You feel the weight of this moment. This is more than romance - it\'s a declaration that could reshape your entire existence.'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'accept_love_mortal',
            text: '"I don\'t need forever to love completely. Let me love you as I am, for as long as I have."',
            consequence: 'Chooses mortal love • Romantic but bittersweet path',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'mortal_love_path'
          },
          {
            id: 'ask_about_forever',
            text: '"Unless what? Is there a way... could we truly be together forever?"',
            consequence: 'Seeks eternity • Opens transformation discussion',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'eternity_discussion'
          },
          {
            id: 'need_time_to_process',
            text: '"This is overwhelming. I feel it too, but I need time to understand what this means."',
            consequence: 'Thoughtful pause • Preserves choice while acknowledging feelings',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'contemplation_time'
          }
        ]
      },
      {
        id: 'eternity_discussion',
        title: 'The Price of Forever',
        text: [
          'Lilith\'s eyes grow serious, ancient wisdom replacing the softness of moments before. "There is a way... but it is not a decision to be made lightly, nor quickly. The transformation into our kind requires perfect willingness, deep love, and extraordinary circumstances."',
          'She takes your hands in hers. "Your great-aunt had the opportunity, multiple times over her decades here. She chose to remain mortal, to love us as herself rather than become like us. It was a choice we honored, even as we watched time take its inevitable toll."',
          '"The transformation is not just physical death and rebirth. It is the fundamental changing of your very essence, your relationship with time, with mortality, with the human world you\'ve always known."',
          'Her grip tightens slightly. "And it can only be given by one who loves you completely, at the moment when your love is absolute and your choice is made with full knowledge of what you sacrifice and what you gain."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'want_to_learn_more',
            text: '"Tell me everything. I want to understand completely before making any choice."',
            consequence: 'Seeks full knowledge • Wise approach',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'transformation_education'
          },
          {
            id: 'focus_on_present',
            text: '"Let\'s focus on now. I want to know you, love you, understand you before thinking of forever."',
            consequence: 'Present-focused • Builds relationship foundation',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'present_focus_romance'
          },
          {
            id: 'ask_about_cordelia_choice',
            text: '"Why did Cordelia choose to stay mortal? Did she ever regret it?"',
            consequence: 'Learns from past • Seeks wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'cordelia_wisdom'
          }
        ]
      },
      {
        id: 'morgana_performance',
        title: 'Songs of the Eternal Night',
        text: [
          'Morgana\'s eyes light up with genuine pleasure - the first time you\'ve seen her smile. "It has been... too long since someone asked to hear my music simply for the joy of it."',
          'Her fingers return to the keys, and she begins a new piece. This one is different - not melancholy, but complex and layered, building from whispered notes to soaring crescendos that seem to paint pictures in the air.',
          '"This is \'Midnight\'s Embrace,\'" she says as she plays. "I composed it during my first century as a vampire, when I was learning that darkness could be beautiful rather than merely feared."',
          'The music fills the room with an otherworldly presence. Lilith and Seraphina listen with rapt attention, but their eyes are on you, watching your reaction to Morgana\'s most personal expression.'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'moved_to_tears',
            text: 'Let the tears flow freely. "That was... transcendent. I\'ve never felt music like that before."',
            consequence: 'Emotional vulnerability • Deeply touches Morgana',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_emotional_connection'
          },
          {
            id: 'artistic_appreciation',
            text: '"The way you layered the harmonies... it\'s like you\'re painting with sound. You\'re not just a musician, you\'re an artist."',
            consequence: 'Technical appreciation • Shows understanding of craft',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_artistic_bond'
          },
          {
            id: 'ask_to_learn',
            text: '"Could you... would you teach me? I\'d love to learn from someone with your skill."',
            consequence: 'Requests mentorship • Creates ongoing connection',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'morgana_teaching_path'
          }
        ]
      },
      {
        id: 'seraphina_gratitude',
        title: 'The Light of Acceptance',
        text: [
          'Seraphina\'s expression transforms with such profound gratitude that you feel blessed just witnessing it. "You have no idea how rare it is to meet someone who offers acceptance without judgment or fear."',
          'She sits beside you, and her presence is like being wrapped in warm sunlight. "Most mortals, when they learn what I am, either worship me or reject me. You simply... see me as I am."',
          '"I fell because I loved too deeply," she continues softly. "I was assigned to guard a village, and I fell in love with their joy, their struggles, their humanity. When Heaven commanded me to let them face their trials alone, I refused."',
          'Her wings become visible for a moment - magnificent, white-gold feathers that seem to hold their own light. "I chose love over duty, and I\'ve never regretted it, even when it cost me everything I thought I knew about myself."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'admire_her_choice',
            text: '"That wasn\'t falling - that was rising to something higher. Love over duty is the most divine choice of all."',
            consequence: 'Philosophical validation • Deeply meaningful to Seraphina',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'seraphina_philosophical_bond'
          },
          {
            id: 'ask_about_love',
            text: '"The love you felt for that village... is that the same kind of love you\'re capable of feeling for an individual?"',
            consequence: 'Personal question • Opens romantic possibility',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'seraphina_love_capacity'
          },
          {
            id: 'offer_understanding',
            text: '"I think I understand why you\'re here now. You\'re still protecting people, just in a different way."',
            consequence: 'Shows insight • Recognizes her continued purpose',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_purpose_recognition'
          }
        ]
      },
      {
        id: 'transformation_education',
        title: 'The Ritual of Becoming',
        text: [
          'Lilith leads you to a section of the library filled with ancient texts bound in materials you don\'t recognize. "These contain the true knowledge of our transformation - not the crude myths of being bitten or attacked, but the sacred ritual it truly is."',
          'She opens a tome written in multiple languages, some of which seem to shift and change as you look at them. "Vampiric transformation is a covenant between souls. It requires three elements: perfect trust, absolute love, and willing sacrifice from both parties."',
          '"The one who transforms must willingly give up their mortal life, their human connections, their place in the world they\'ve known. The one who grants the transformation must share their very essence, weakening themselves to strengthen another."',
          'Her finger traces ancient symbols. "It is not immortality given lightly. Many who attempt it fail because they lack the depth of connection required. The bond must be strong enough to anchor the soul through death and rebirth."'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'understand_sacrifice',
            text: '"I begin to understand why Cordelia chose mortality. The sacrifice required... it\'s not just about dying, is it?"',
            consequence: 'Grasps deeper meaning • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'sacrifice_understanding'
          },
          {
            id: 'ask_about_bond_strength',
            text: '"How do you know when the bond is strong enough? What does that feel like?"',
            consequence: 'Practical question • Seeks measurable understanding',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'bond_strength_explanation'
          },
          {
            id: 'express_interest',
            text: '"This is... intense. But I want to understand more. Would you help me learn what this kind of love feels like?"',
            consequence: 'Shows commitment to learning • Romantic progression',
            effects: [{ characterId: 'lilith', affectionChange: 28 }],
            nextScene: 'love_development_path'
          }
        ]
      },
      {
        id: 'present_focus_romance',
        title: 'Building Something Beautiful',
        text: [
          'Lilith\'s smile is radiant, transforming her ancient features with pure joy. "Yes," she breathes. "Yes, that is exactly what I hoped you would say. Too many mortals become fixated on the destination rather than cherishing the journey."',
          'She takes your hand, intertwining your fingers with hers. "Let me show you my world, one day at a time. Let me learn your thoughts, your dreams, your fears. Let us build something beautiful together, whether it lasts decades or centuries."',
          '"There is magic in the present moment," she continues, leading you toward a window that overlooks moonlit gardens. "In the way you look at me, in the questions you ask, in the courage you show by being here at all."',
          'The moon illuminates her profile, and you realize this is what happiness looks like on someone who has lived for centuries - rare, precious, and transformative in its purity.'
        ],
        character: characters.lilith,
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'romantic_declaration',
            text: '"I want to know everything about you. Your history, your dreams, what makes you laugh... I want to love all of it."',
            consequence: 'Romantic commitment • Deepens relationship',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'romance_deepening'
          },
          {
            id: 'ask_about_her_dreams',
            text: '"You\'ve had centuries to dream. What do you dream about now?"',
            consequence: 'Personal question • Shows deep interest',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'lilith_dreams_revealed'
          },
          {
            id: 'share_your_feelings',
            text: '"I\'ve never felt this way before. Like I\'ve been waiting my whole life for this moment, this person."',
            consequence: 'Vulnerable honesty • Mutual emotional connection',
            effects: [{ characterId: 'lilith', affectionChange: 28 }],
            nextScene: 'mutual_recognition'
          }
        ]
      },
      {
        id: 'sanctuary_explanation',
        title: 'Haven from the Storm',
        text: [
          'The three women exchange glances, a silent communication passing between them before Lilith speaks. "The world is not kind to those who exist outside its understanding," she begins.',
          'Seraphina continues, "Angels who fall, vampires who choose love over hunger, beings who don\'t fit the neat categories humans create - we all need somewhere to belong."',
          'Morgana\'s voice is soft but clear. "Ravencroft Manor exists between worlds. Protected by old magic, sanctified by genuine love, and maintained by those who understand that monsters are often just people who\'ve been hurt too deeply."',
          'Lilith concludes, "Your great-aunt didn\'t just give us shelter - she gave us family. The question now is whether you\'ll choose to continue that legacy or forge your own path."'
        ],
        choices: [
          {
            id: 'commit_to_legacy',
            text: '"I want to continue what Cordelia started. This place, this sanctuary - it\'s important work."',
            consequence: 'Commits to sanctuary • Gains respect from all',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 12 }, { characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'sanctuary_commitment'
          },
          {
            id: 'need_to_understand_more',
            text: '"I need to understand more about what that means. What would be expected of me?"',
            consequence: 'Practical approach • Shows responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 10 }, { characterId: 'morgana', affectionChange: 8 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'sanctuary_responsibilities'
          },
          {
            id: 'focus_on_relationships',
            text: '"Right now, I\'m more interested in getting to know each of you as individuals than making big decisions about the future."',
            consequence: 'Personal focus • Opens individual relationship paths',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'individual_connections'
          }
        ]
      },
      // Missing scenes that are referenced in choices
      {
        id: 'morgana_interest',
        title: 'The Artist\'s Recognition',
        text: [
          'Morgana\'s silver eyes widen slightly, and she stands from the piano bench with fluid grace. "You understand," she says simply, but there\'s wonder in her voice. "Most hear only notes and melody. You hear the soul speaking."',
          'She approaches you slowly, her dark hair cascading like liquid shadow. "That piece was born from a night when I realized that immortality meant watching every beautiful thing I\'d ever known fade away. Yet you heard not just the sorrow, but the beauty within it."',
          'Lilith watches this exchange with interest, while the air between you and Morgana seems charged with artistic understanding. "Few have ever truly comprehended my music on first hearing," Morgana continues. "Perhaps you are more than you appear."'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'share_artistic_soul',
            text: '"I\'ve always felt that art is the language of experiences too deep for words. Your music speaks to something in me I didn\'t know existed."',
            consequence: 'Deep artistic connection • Profound bond',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'artistic_souls_unite'
          },
          {
            id: 'ask_about_inspiration',
            text: '"What inspires you to create? How do you find beauty in eternal existence?"',
            consequence: 'Philosophical question • Shows depth',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_philosophy'
          },
          {
            id: 'request_collaboration',
            text: '"I\'d love to understand your creative process. Could we... create something together?"',
            consequence: 'Collaboration offer • Builds creative partnership',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'creative_partnership'
          }
        ]
      },
      {
        id: 'morgana_composition',
        title: 'Original Composition',
        text: [
          'Morgana\'s expression becomes contemplative. "It\'s an original piece - \'Echoes of What Was.\' I composed it fifty years ago when I was struggling with the weight of memory."',
          'She runs her fingers along the piano\'s edge. "When you live for centuries, you accumulate so many memories of people you\'ve loved and lost, places that no longer exist, moments of beauty that only live in your mind."',
          '"This piece attempts to capture that feeling - not quite nostalgia, not quite grief, but something uniquely vampiric. The longing for temporal connection when you yourself exist outside of time."',
          'Her words carry the weight of genuine vulnerability, and you sense she rarely shares such personal insights about her work.'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'understand_loneliness',
            text: '"That sounds profoundly lonely. How do you bear the weight of so much memory?"',
            consequence: 'Empathetic response • Shows emotional intelligence',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_loneliness'
          },
          {
            id: 'appreciate_beauty',
            text: '"But those memories are also treasures. Your music makes them live again, shares them with others."',
            consequence: 'Positive perspective • Helps her see beauty in pain',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_hope'
          },
          {
            id: 'ask_for_more_music',
            text: '"Would you play it again? I\'d like to listen more carefully, to really understand what you\'re expressing."',
            consequence: 'Shows deep interest • Validates her art',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_second_performance'
          }
        ]
      },
      {
        id: 'morgana_observation',
        title: 'The Silent Understanding',
        text: [
          'You remain quiet, sensing that Morgana is someone who values thoughtful silence over hasty words. She observes you for a long moment, her silver eyes seeming to read something in your demeanor.',
          '"Wisdom," she says finally, with what might be approval. "Too many people feel compelled to fill silence with meaningless chatter. You understand that some moments require contemplation."',
          'She returns to the piano, playing a few soft, experimental notes. "Lilith, your guest has an interesting quality. She listens not just with her ears, but with her entire being."',
          'Lilith smiles knowingly. "I thought you might appreciate that about her. She sees beyond the surface of things."'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'acknowledge_compliment',
            text: '"Thank you. I\'ve learned that the most profound communications often happen in the spaces between words."',
            consequence: 'Philosophical response • Shows depth',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'philosophical_connection'
          },
          {
            id: 'ask_about_silence',
            text: '"Do you find that immortality makes silence more precious? With eternity stretching ahead, perhaps quiet moments become more valuable."',
            consequence: 'Thoughtful question • Shows understanding of immortal perspective',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'silence_discussion'
          },
          {
            id: 'express_gratitude',
            text: '"I\'m honored that you would share your music with a stranger. Art is such a personal gift."',
            consequence: 'Grateful response • Shows appreciation for art',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'artistic_gratitude'
          }
        ]
      },
      {
        id: 'seraphina_truth',
        title: 'Angelic Revelation',
        text: [
          'Seraphina\'s smile is both sad and beautiful. "I was, once upon a time. A guardian angel, assigned to protect humanity from supernatural threats that would otherwise overwhelm them."',
          'As she speaks, the shimmer behind her becomes more visible - magnificent wings that seem to be made of condensed starlight and divine grace. "But I fell in love with the very beings I was meant to protect from a distance."',
          '"When Heaven commanded me to remain detached, to let humans face their trials without direct intervention, I... rebelled. Love, I discovered, is stronger than duty, more divine than obedience."',
          'Her wings fold closer to her body, but remain visible. "I chose to fall rather than abandon those I had grown to love. And in falling, I found my true purpose."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'admire_sacrifice',
            text: '"You gave up paradise for love? That\'s not falling - that\'s the most divine act imaginable."',
            consequence: 'Validates her choice • Profound emotional impact',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'divine_validation'
          },
          {
            id: 'ask_about_consequences',
            text: '"What were the consequences of your choice? Do you ever regret it?"',
            consequence: 'Thoughtful question • Shows understanding of sacrifice',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'consequences_discussion'
          },
          {
            id: 'touch_her_wing',
            text: 'Gently reach out toward her wing. "May I? They\'re beautiful."',
            consequence: 'Intimate gesture • Shows acceptance and wonder',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'wing_touch_scene'
          }
        ]
      },
      {
        id: 'seraphina_promise',
        title: 'Guardian\'s Vow',
        text: [
          'Seraphina\'s expression grows solemn and deeply moved. "Your trust is a gift I will treasure," she says, her voice carrying the weight of divine promise. "I swear to you, by all that I am and all that I was, no harm will come to you while I draw breath."',
          'She extends her hand, and when you take it, you feel a warmth that seems to flow directly into your soul. "I have watched over mortals for millennia, but never has anyone placed their faith in me so completely, so immediately."',
          '"You remind me why I chose love over duty," she continues, her pale blue eyes shining. "Why I believed that connection and compassion were more sacred than celestial hierarchy."',
          'Around you, the very air seems to shimmer with protective energy, and you feel safer than you have in your entire life.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'reciprocate_protection',
            text: '"And I promise to trust you completely. You have something pure about you that calls to my soul."',
            consequence: 'Mutual bond • Deep emotional connection',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }],
            nextScene: 'mutual_protection_bond'
          },
          {
            id: 'ask_about_purpose',
            text: '"You said you found your true purpose in falling. What is that purpose now?"',
            consequence: 'Philosophical question • Shows interest in her journey',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'purpose_revelation'
          },
          {
            id: 'express_wonder',
            text: '"I can feel the protection around me. It\'s like being wrapped in pure love and safety."',
            consequence: 'Acknowledges her power • Shows spiritual sensitivity',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'spiritual_connection'
          }
        ]
      },
      {
        id: 'danger_revealed',
        title: 'The Shadows Beyond',
        text: [
          'Seraphina and Lilith exchange a meaningful look before Seraphina speaks. "There are... others of our kind who do not share our philosophy about coexistence with mortals."',
          '"Ravencroft Manor exists as a sanctuary because your great-aunt established it with powerful protections," Lilith adds. "But those protections only extend so far, and there are those who would see our peaceful existence here as a threat to the old ways."',
          'Seraphina\'s expression grows grave. "Some vampires believe mortals are only good for feeding. Some angels see my choice to fall as an abomination that must be corrected. And there are darker things than either that hunt in the spaces between worlds."',
          '"Your inheritance of this place makes you a target," Lilith says quietly. "Not because of who you are, but because of what you represent - the continuation of Cordelia\'s legacy of protection and peace."'
        ],
        choices: [
          {
            id: 'accept_danger',
            text: '"I understand the risks. If Cordelia could face these dangers, so can I."',
            consequence: 'Brave acceptance • Shows courage and determination',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'courage_acknowledged'
          },
          {
            id: 'ask_for_training',
            text: '"Then teach me. Help me understand how to protect myself and this place."',
            consequence: 'Practical approach • Shows willingness to learn',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 22 }],
            nextScene: 'training_begins'
          },
          {
            id: 'fear_but_determined',
            text: '"I\'m terrified, but I won\'t run. This place meant something to Cordelia, and now it means something to me."',
            consequence: 'Honest vulnerability • Shows emotional strength',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'determined_despite_fear'
          }
        ]
      },
      // Additional missing scenes for complete story flow
      {
        id: 'coven_explanation',
        title: 'The Ancient Bond',
        text: [
          'Lilith pauses thoughtfully. "Three of us call this place home permanently. Myself, Morgana, and Seraphina. We are... an unusual coven, bound not by blood or maker, but by choice and circumstance."',
          '"Morgana was turned during the Renaissance - a brilliant composer whose music was too pure for mortal understanding. Seraphina... she chose to fall from grace rather than abandon those she had grown to love."',
          '"And I am the eldest, turned during the dark ages when survival meant learning to find beauty in shadow. We came together here because we shared a vision - that our eternal existence could be used for preservation rather than destruction."',
          'Her voice grows warmer. "Your great-aunt understood this. She helped us create something unprecedented - a sanctuary where supernatural beings could exist peacefully, contributing rather than consuming."'
        ],
        character: characters.lilith,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'ask_about_cordelia_role',
            text: '"What exactly was Cordelia\'s role in all this? How did a mortal woman become so important to immortal beings?"',
            consequence: 'Seeks understanding • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_legacy_revealed'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored to inherit such a meaningful legacy. I want to understand how I can continue what she started."',
            consequence: 'Accepts responsibility • Shows commitment',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'legacy_continuation'
          },
          {
            id: 'ask_about_others',
            text: '"Are there other places like this? Other covens trying to coexist peacefully?"',
            consequence: 'Broader perspective • Shows strategic thinking',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'wider_world_discussion'
          }
        ]
      },
      {
        id: 'formal_introductions',
        title: 'Proper Greetings',
        text: [
          'Your formal approach seems to please all three women. Morgana inclines her head gracefully. "Cordelia spoke of you often in her letters. She was very proud of your accomplishments in the mortal world."',
          'Seraphina moves closer, her presence radiating warmth and protection. "She also mentioned your open mind and kind heart. Qualities that are rare and precious in any world."',
          'Lilith watches the interaction with approval. "Your great-aunt chose well when she named you as her heir. This place requires someone who can respect the delicate balance we\'ve created here."',
          'The room feels charged with possibility, as if this moment is the beginning of something significant. You sense that your response here will set the tone for all future relationships.'
        ],
        choices: [
          {
            id: 'ask_about_letters',
            text: '"Cordelia wrote about me? What did she tell you?"',
            consequence: 'Personal curiosity • Shows interest in connection',
            effects: [{ characterId: 'lilith', affectionChange: 8 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'cordelia_letters'
          },
          {
            id: 'express_uncertainty',
            text: '"I hope I can live up to her example. This is all so new and overwhelming."',
            consequence: 'Honest vulnerability • Invites guidance',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 8 }],
            nextScene: 'reassurance_offered'
          },
          {
            id: 'ask_about_balance',
            text: '"What kind of balance? I want to understand what maintaining this sanctuary truly means."',
            consequence: 'Practical focus • Shows responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'sanctuary_responsibilities'
          }
        ]
      },
      {
        id: 'sanctuary_explanation',
        title: 'Haven of the Supernatural',
        text: [
          'The three women exchange meaningful glances before Lilith speaks. "A sanctuary, in our world, is more than just a safe place. It\'s a location where supernatural beings can exist without the constant threat of hunters, hostile covens, or celestial judgment."',
          'Seraphina adds, "The protections here are both mystical and practical. Cordelia worked with us to establish wards that hide our presence from those who would do us harm, while also preventing us from causing harm to innocents."',
          'Morgana\'s voice is soft but clear. "It means we can pursue beauty, creation, and connection rather than mere survival. We can grow and learn rather than simply endure."',
          'Lilith concludes, "But such places are rare and precious. They require constant maintenance, both magical and mundane. And they require a mortal anchor - someone who bridges our world and yours."'
        ],
        choices: [
          {
            id: 'accept_anchor_role',
            text: '"And now I\'m meant to be that anchor? I accept that responsibility."',
            consequence: 'Accepts destiny • Major story commitment',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'anchor_accepted'
          },
          {
            id: 'ask_about_dangers',
            text: '"What happens if the sanctuary fails? What are we protected from exactly?"',
            consequence: 'Seeks understanding of stakes • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'protection_details'
          },
          {
            id: 'ask_about_magic',
            text: '"How do the wards work? Is there magic I need to learn or maintain?"',
            consequence: 'Practical questions • Shows readiness to learn',
            effects: [{ characterId: 'morgana', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'magical_education'
          }
        ]
      },
      {
        id: 'transformation_begin',
        title: 'The Path to Eternity',
        text: [
          'Lilith\'s eyes blaze with an intensity that takes your breath away. "You would truly choose this path? Even knowing that there is no return, no reversal?"',
          'She takes your hands, her grip firm and cool. "The transformation is not something that can be rushed or taken lightly. It requires perfect trust, absolute love, and complete understanding of what you sacrifice and what you gain."',
          '"Your mortality, your human connections, your relationship with time itself - all of this will change forever. But you will gain strength, immortality, and a depth of experience beyond mortal comprehension."',
          'Her voice drops to a whisper. "Most importantly, you will gain the ability to love with the intensity of centuries, to protect what matters with supernatural power, and to create beauty that outlasts civilizations."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'reaffirm_choice',
            text: '"I understand the cost and I accept it willingly. I want to share eternity with you."',
            consequence: 'Complete commitment • Begins transformation arc',
            effects: [{ characterId: 'lilith', affectionChange: 35 }],
            nextScene: 'transformation_ritual_begins'
          },
          {
            id: 'need_more_time',
            text: '"I want this, but I need more time to fully understand what I\'m choosing. Can we wait until I\'m completely certain?"',
            consequence: 'Thoughtful caution • Delays but doesn\'t reject',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'transformation_delayed'
          },
          {
            id: 'ask_about_process',
            text: '"Tell me everything about the transformation process. I want to understand every detail before I commit."',
            consequence: 'Seeks complete knowledge • Shows wisdom',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'transformation_education_detailed'
          }
        ]
      },
      // Complete the remaining missing scenes
      {
        id: 'artistic_souls_unite',
        title: 'Kindred Spirits',
        text: [
          'Morgana\'s eyes light up with a joy you sense she rarely experiences. "Finally," she breathes, "someone who understands that creation is the closest thing to divine communion available to our kind."',
          'She moves to stand beside you, and you feel an electric connection of shared artistic passion. "I have composed for centuries, but always in isolation. The idea of sharing that creative fire with another soul..."',
          'Her hand hovers near yours. "Would you truly wish to explore that path with me? To dive deep into the wells of inspiration and see what we might create together?"',
          'The offer carries weight beyond mere collaboration - this is an invitation into the most sacred part of her immortal existence.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_creative_bond',
            text: '"Yes, absolutely. I want to explore every facet of creativity with you."',
            consequence: 'Deep artistic partnership • Major relationship progression',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'creative_communion'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored you would trust me with something so personal and sacred to you."',
            consequence: 'Respectful appreciation • Builds trust',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'honored_trust'
          },
          {
            id: 'ask_about_process',
            text: '"How do we begin? What does collaborative creation look like for an immortal artist?"',
            consequence: 'Practical interest • Shows commitment to learning',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'creative_process_explanation'
          }
        ]
      },
      {
        id: 'divine_validation',
        title: 'The Highest Love',
        text: [
          'Seraphina\'s entire being seems to radiate pure light as tears of joy stream down her face. "Never... in all my millennia of existence... has anyone seen my choice as divine rather than damning."',
          'She takes your hands, and you feel the warmth of starlight flowing between you. "Heaven taught me that love should be conditional, measured, controlled. But when I saw mortals love fiercely, completely, without reservation... I knew they understood something divine that angels had forgotten."',
          '"You see it too," she whispers in wonder. "That love without limits, compassion without judgment, protection without dominion - these are the truly sacred acts."',
          'Her wings spread wide, magnificent and glowing, as if your words have restored something fundamental to her nature.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_her_truth',
            text: '"Your love is the most divine thing I\'ve ever witnessed. Thank you for choosing to fall."',
            consequence: 'Complete validation • Profound spiritual connection',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'ask_about_heaven',
            text: '"What was Heaven like before you understood the true nature of love?"',
            consequence: 'Deep philosophical question • Shows interest in her journey',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'heaven_memories'
          },
          {
            id: 'offer_comfort',
            text: 'Gently wipe her tears. "You don\'t have to carry that pain alone anymore."',
            consequence: 'Tender gesture • Offers emotional support',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'comfort_accepted'
          }
        ]
      },
      {
        id: 'courage_acknowledged',
        title: 'Worthy Heir',
        text: [
          'Both Lilith and Seraphina regard you with new respect. "Cordelia would be proud," Lilith says quietly. "She faced these same dangers with exactly that kind of determined courage."',
          'Seraphina nods approvingly. "True bravery isn\'t the absence of fear - it\'s choosing to stand firm despite that fear. You have the heart of a protector."',
          'Morgana, who has been quietly observing, speaks up. "Courage, yes. But also wisdom. You understand that some things are worth fighting for, worth risking everything to preserve."',
          'The three exchange meaningful looks. "Very well," Lilith decides. "If you truly wish to continue Cordelia\'s legacy, then we will teach you what you need to know."'
        ],
        choices: [
          {
            id: 'eager_to_learn',
            text: '"I\'m ready to learn everything. Where do we start?"',
            consequence: 'Enthusiastic commitment • Opens training paths',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'training_begins'
          },
          {
            id: 'ask_about_cordelia_struggles',
            text: '"What challenges did Cordelia face? I want to understand what I\'m truly inheriting."',
            consequence: 'Seeks wisdom from history • Shows thoughtfulness',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'cordelia_challenges'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for trusting me with this responsibility. I won\'t let you down."',
            consequence: 'Grateful acceptance • Builds trust',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'trust_established'
          }
        ]
      },
      {
        id: 'anchor_accepted',
        title: 'The Sacred Covenant',
        text: [
          'The three women exchange glances filled with relief and hope. "Then it is decided," Lilith says with formal gravity. "You accept the role of Anchor to Ravencroft Sanctuary."',
          'Seraphina steps forward, her wings becoming visible and spreading wide. "By my divine nature, I witness this covenant."',
          'Morgana rises from the piano, her silver eyes bright. "By my artistic soul, I witness this covenant."',
          'Lilith places her hand over her heart. "By my ancient blood, I witness this covenant. You are now bound to this place and to us, as we are bound to you."',
          'You feel something fundamental shift in the air around you - a sense of belonging, of purpose, of destiny fulfilled.'
        ],
        choices: [
          {
            id: 'embrace_destiny',
            text: '"I feel it - the connection, the responsibility. I\'m exactly where I\'m meant to be."',
            consequence: 'Complete acceptance • Unlocks full sanctuary powers',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'sanctuary_awakening'
          },
          {
            id: 'ask_about_powers',
            text: '"What does this mean for me? What abilities or responsibilities do I now have?"',
            consequence: 'Practical questions • Shows readiness to learn',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'anchor_powers_explained'
          },
          {
            id: 'solemn_vow',
            text: '"I swear to protect this sanctuary and everyone in it with my life."',
            consequence: 'Sacred oath • Deep commitment',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'sacred_vow_sealed'
          }
        ]
      },
      {
        id: 'training_begins',
        title: 'The First Lessons',
        text: [
          'Over the following days, your education in the supernatural world begins in earnest. Lilith teaches you about vampire politics and the delicate balance of power between different supernatural factions.',
          'Seraphina instructs you in protective wards and divine energy manipulation, showing you how to channel your mortal life force in ways that can shield both yourself and others.',
          'Morgana shares the deeper mysteries - how music and art can bind spirits, how creativity itself can be a form of magic, how beauty can be a weapon against darkness.',
          'You discover that being the Anchor gives you unique abilities: you can sense supernatural presences, strengthen the manor\'s protections, and even provide energy to your immortal companions when they need it most.'
        ],
        choices: [
          {
            id: 'focus_on_protection',
            text: 'Concentrate on learning protective magic and defensive strategies.',
            consequence: 'Guardian path • Builds defensive abilities',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'guardian_training'
          },
          {
            id: 'focus_on_diplomacy',
            text: 'Study supernatural politics and inter-faction relations.',
            consequence: 'Diplomat path • Builds knowledge and connections',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'diplomatic_training'
          },
          {
            id: 'focus_on_creativity',
            text: 'Dive deep into the mystical aspects of art and creation.',
            consequence: 'Artist path • Builds creative magical abilities',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'creative_magic_training'
          }
        ]
      },
      // Final batch of missing scenes
      {
        id: 'morgana_philosophy',
        title: 'The Eternal Creative Soul',
        text: [
          'Morgana settles beside the piano, her fingers absently playing soft, contemplative notes. "Inspiration... it changes when you have eternity to pursue it. At first, I thought immortality would mean endless creativity, infinite time to perfect my craft."',
          '"But I discovered something unexpected," she continues, her voice carrying centuries of experience. "Beauty becomes more precious when you understand how fleeting it truly is. Each perfect moment, each sublime melody, each connection with another soul - these become sacred because they exist in defiance of an indifferent universe."',
          'Her playing grows more complex, weaving melodies that seem to capture the very essence of longing. "I find inspiration in mortality itself - in the courage of mortals who create knowing their time is limited, in the intensity of love that burns bright precisely because it cannot last forever."',
          'She looks at you directly. "You inspire me because you represent both the beauty and the brevity that gives meaning to art."'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'philosophical_depth',
            text: '"So immortality taught you to value mortal perspective? That\'s beautifully paradoxical."',
            consequence: 'Deep understanding • Appreciates the irony',
            effects: [{ characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'paradox_appreciation'
          },
          {
            id: 'offer_collaboration',
            text: '"Then let me share my mortal perspective with your immortal artistry. What could we create together?"',
            consequence: 'Collaboration offer • Bridges mortal/immortal divide',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'creative_partnership'
          },
          {
            id: 'express_honor',
            text: '"Being your inspiration is the highest compliment I could receive from an artist of your caliber."',
            consequence: 'Gracious response • Shows humility',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'artistic_appreciation'
          }
        ]
      },
      {
        id: 'wing_touch_scene',
        title: 'Sacred Contact',
        text: [
          'Seraphina nods, extending one magnificent wing toward you. "Few mortals have ever touched an angel\'s wing. Even fewer have done so with such reverence."',
          'Your fingers make contact with the soft, luminous feathers, and immediately you feel a surge of warmth and peace unlike anything you\'ve ever experienced. The wing is simultaneously substantial and ethereal, like touching solidified starlight.',
          'Through the contact, you sense glimpses of her memories - soaring through celestial realms, standing guard over sleeping mortals, the moment she chose love over duty and felt her connection to Heaven strain and finally break.',
          '"You feel it, don\'t you?" she whispers. "The weight of divine purpose transformed into something more personal, more real." Her wing curves slightly, as if embracing your touch. "This is what love truly is - choosing connection over perfection."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'understand_sacrifice',
            text: '"I can feel the magnitude of what you gave up, and the beauty of what you gained instead."',
            consequence: 'Deep empathy • Understands divine sacrifice',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'divine_understanding'
          },
          {
            id: 'marvel_at_beauty',
            text: '"Your wings are the most beautiful thing I\'ve ever seen. Thank you for trusting me with this."',
            consequence: 'Appreciation • Shows wonder and gratitude',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }],
            nextScene: 'beauty_acknowledged'
          },
          {
            id: 'ask_about_flight',
            text: '"Do you still fly? Do you miss the celestial realms?"',
            consequence: 'Curious question • Shows interest in her nature',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'flight_memories'
          }
        ]
      },
      {
        id: 'morgana_loneliness',
        title: 'The Weight of Memory',
        text: [
          'Morgana\'s expression grows distant and melancholy. "The loneliness... it\'s not what mortals imagine. It\'s not about being alone - it\'s about being the sole keeper of countless precious memories."',
          '"I remember the sound of rain on cobblestones in Prague, 1894. The laughter of a child I taught piano to in Vienna, 1847. The way candlelight looked in my lover\'s eyes in Rome, 1623." Her voice grows softer. "All of those people, all of those moments... they live only in my memory now."',
          'She plays a few haunting notes. "Sometimes I feel like a living museum, preserving beauty that would otherwise be lost forever. But museums are cold, solitary places."',
          'Her silver eyes find yours. "Until tonight, I had resigned myself to being the sole guardian of all that beautiful loss. But perhaps... perhaps some memories are meant to be shared."'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'offer_to_share_burden',
            text: '"Let me help you carry that weight. Share those memories with me - let them live in two hearts instead of one."',
            consequence: 'Generous offer • Willingness to share emotional burden',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'memory_sharing'
          },
          {
            id: 'create_new_memories',
            text: '"Then let\'s create new memories together. Beautiful moments that we can both treasure."',
            consequence: 'Forward-looking • Focus on creating rather than preserving',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'new_memory_creation'
          },
          {
            id: 'appreciate_preservation',
            text: '"You\'re not just a museum - you\'re a living testament to the power of beauty to transcend time."',
            consequence: 'Reframes perspective • Shows deep appreciation',
            effects: [{ characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'consequences_discussion',
        title: 'The Price of Love',
        text: [
          'Seraphina\'s expression grows thoughtful, tinged with both sadness and resolve. "The consequences were... severe. When an angel chooses to fall, it\'s not simply a matter of relocation. It\'s a fundamental transformation of your very essence."',
          '"I lost my direct connection to the Divine Source, my ability to exist in multiple planes simultaneously, my perfect certainty about the nature of good and evil." She touches her wings gently. "These wings, once instruments of celestial power, became symbols of my exile."',
          '"But more than that," she continues, her voice growing stronger, "I lost the community of my fellow angels, the perfect harmony of celestial existence, the comfort of absolute purpose and unquestioning faith."',
          'Her pale blue eyes meet yours. "And yet... I have never regretted it. Every loss pales beside what I gained - the ability to truly love, to choose compassion over duty, to be more than what I was created to be."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'admire_growth',
            text: '"You didn\'t lose yourself - you found yourself. You became more than heaven intended."',
            consequence: 'Celebrates personal growth • Validates transformation',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'offer_community',
            text: '"You lost one community but gained another. Here, with Lilith and Morgana... and now with me."',
            consequence: 'Offers belonging • Creates new connections',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'new_community'
          },
          {
            id: 'acknowledge_sacrifice',
            text: '"Such a profound sacrifice, made out of pure love. I\'m in awe of your courage."',
            consequence: 'Respectful acknowledgment • Shows understanding',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'courage_recognition'
          }
        ]
      },
      {
        id: 'cordelia_legacy_revealed',
        title: 'The Guardian\'s Tale',
        text: [
          'Lilith\'s expression becomes reverent as she speaks of your great-aunt. "Cordelia was extraordinary, even by the standards of remarkable mortals. She inherited this manor when she was barely twenty-five, much as you have now."',
          '"But unlike most mortals who discover the supernatural world, she didn\'t flee or try to destroy what she found. Instead, she saw possibility where others saw only danger." Lilith moves to an old portrait on the wall. "She proposed something unprecedented - a sanctuary where supernatural beings could exist peacefully, contributing to the world rather than merely surviving in it."',
          '"For sixty years, she served as our anchor to the mortal world, helping us navigate human society while protecting us from those who would hunt us. She facilitated peace treaties between hostile factions, provided safe passage for refugees from supernatural conflicts, and maintained the delicate balance that keeps this place hidden."',
          'Her voice grows warm with affection. "But more than that, she loved us - not as exotic curiosities or dangerous creatures to be managed, but as individuals deserving of friendship and respect. She was the first mortal to see us as more than our supernatural natures."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'honor_legacy',
            text: '"I want to continue her work, to be worthy of the trust she built and the love she shared."',
            consequence: 'Accepts legacy • Major commitment to sanctuary',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'legacy_acceptance'
          },
          {
            id: 'ask_about_love',
            text: '"Did she ever fall in love with any of you? How did she handle those feelings?"',
            consequence: 'Personal question • Seeks guidance on mortal/immortal love',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'cordelia_love_story'
          },
          {
            id: 'understand_challenges',
            text: '"What were the greatest challenges she faced? What almost broke the sanctuary?"',
            consequence: 'Strategic thinking • Prepares for future challenges',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'sanctuary_challenges'
          }
        ]
      },
      // Additional scenes for the polite introduction path
      {
        id: 'cordelia_friendship',
        title: 'A Bond Beyond Time',
        text: [
          'Lilith\'s eyes grow distant with memory, and for a moment, you see vulnerability beneath her composed exterior. "Close friends... yes, though that term hardly captures what Cordelia meant to us." She moves toward a portrait of your great-aunt.',
          '"When she first arrived at this manor, we expected her to flee in terror or attempt to have us destroyed. Instead, she brought us tea and asked if we needed anything." Lilith\'s voice carries amazement even after all these years.',
          '"Over six decades, she became our anchor to humanity, our protector, and in many ways, our family. She loved us not despite what we are, but because of who we chose to be with that nature."',
          'Her gaze returns to you. "The bond we shared transcended the typical boundaries between mortal and immortal. She saw past our supernatural nature to the individuals beneath, and we loved her fierce, kind heart in return."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'understand_bond',
            text: '"That sounds like a beautiful friendship. I can see why you miss her."',
            consequence: 'Empathetic response • Shows emotional intelligence',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'shared_grief'
          },
          {
            id: 'ask_about_others',
            text: '"You said \'us\' - are there others here I should meet?"',
            consequence: 'Practical interest • Shows readiness to meet the coven',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'meet_the_coven'
          },
          {
            id: 'express_hope',
            text: '"I hope I can honor that bond she created. I\'d like to understand what made your friendship so special."',
            consequence: 'Respectful aspiration • Shows desire to continue legacy',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'legacy_continuation'
          }
        ]
      },
      {
        id: 'atmospheric_awareness',
        title: 'Sensitivity to the Unseen',
        text: [
          'Lilith pauses, studying you with new interest. "Most mortals feel nothing when they enter our domain, or if they do, they dismiss it as imagination. You, however, have a rare sensitivity."',
          'She gestures to the candlelit interior where shadows seem to dance with purpose. "This manor exists partially outside normal reality. The barriers between worlds are thin here, maintained by ancient wards and newer protections."',
          '"Your ability to sense the atmospheric shift suggests you have the potential to understand our world far more easily than most." Her voice carries approval and something that might be excitement.',
          '"Cordelia had the same gift. It\'s part of what made her such an effective guardian and mediator between our realm and the mortal world."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_gift',
            text: '"Is this sensitivity something I inherited? Can it be developed further?"',
            consequence: 'Seeks understanding • Shows interest in supernatural abilities',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'supernatural_potential'
          },
          {
            id: 'ask_about_wards',
            text: '"You mentioned wards and protections. What are you protecting this place from?"',
            consequence: 'Security-focused • Shows strategic thinking',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'protection_details'
          },
          {
            id: 'express_fascination',
            text: '"This is incredible. I\'ve always felt like there was more to the world than what most people see."',
            consequence: 'Wonder and openness • Shows natural acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'natural_acceptance'
          }
        ]
      },
      {
        id: 'considerate_inquiry',
        title: 'Gracious Concern',
        text: [
          'Lilith\'s expression brightens with genuine pleasure at your consideration. "How remarkably thoughtful. Cordelia raised you well, even from a distance." She seems almost moved by your courtesy.',
          '"Your arrival changes nothing we wish to preserve and everything we hope to restore," she says warmly. "We have lived here peacefully for decades under Cordelia\'s protection, but we have missed having a mortal anchor to help us navigate the changing world."',
          'She guides you into a beautifully appointed sitting room. "The arrangements your great-aunt established were mutually beneficial. We provided her with protection, knowledge, and companionship, while she offered us legitimacy, understanding, and connection to humanity."',
          '"What we hope is that you might choose to continue that partnership. But unlike legal contracts, this arrangement must be built on genuine care and willing participation from all parties."'
        ],
        character: characters.lilith,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'express_interest',
            text: '"I\'m very interested in learning more about this partnership. What would it involve?"',
            consequence: 'Genuine curiosity • Shows openness to commitment',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'partnership_explanation'
          },
          {
            id: 'ask_about_protection',
            text: '"You mentioned providing protection. What kind of dangers exist that I should be aware of?"',
            consequence: 'Practical concerns • Shows responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'danger_discussion'
          },
          {
            id: 'offer_provisional_agreement',
            text: '"I can\'t make any permanent commitments yet, but I\'d like to try continuing Cordelia\'s work, at least initially."',
            consequence: 'Cautious but willing • Shows thoughtful approach',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'provisional_agreement'
          }
        ]
      },
      {
        id: 'supernatural_revelation',
        title: 'The Truth Unveiled',
        text: [
          'Relief washes over Lilith\'s features at your open-minded response. "Your willingness to accept the unknown is a gift, one your great-aunt shared." She settles gracefully across from you.',
          '"We are vampires," she says simply, watching for your reaction. "Ancient beings who have found sanctuary in this place for over three centuries. Not the monsters of human folklore, but individuals who have learned to exist peacefully alongside mortality."',
          '"Cordelia discovered our nature within days of inheriting this manor, but instead of fleeing or seeking to destroy us, she chose to understand us. She became our protector, our friend, and the bridge between our world and yours."',
          'Her dark eyes hold yours steadily. "We hope you might choose a similar path, but we will not pressure or coerce you. The choice must be yours alone, made with full knowledge and genuine willingness."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_with_wonder',
            text: '"Vampires... that explains so much about this place. I\'m amazed rather than afraid."',
            consequence: 'Wonder over fear • Shows supernatural acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'amazed_acceptance'
          },
          {
            id: 'ask_practical_questions',
            text: '"What does this mean for day-to-day life? How does coexistence actually work?"',
            consequence: 'Practical focus • Shows adaptability',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'practical_coexistence'
          },
          {
            id: 'express_honor',
            text: '"I\'m honored that you\'re trusting me with this truth. I want to be worthy of that trust."',
            consequence: 'Grateful response • Shows respect for confidence',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'trust_acknowledged'
          }
        ]
      },
      {
        id: 'gradual_revelation',
        title: 'Gentle Understanding',
        text: [
          'Lilith nods approvingly. "Wisdom often lies in recognizing one\'s limits. Cordelia took nearly a month to fully accept and understand our nature. There is no shame in proceeding carefully."',
          'She settles into a chair across from you, her movements graceful and deliberately non-threatening. "Perhaps we should begin with the basics. This manor has been my home for over four centuries. I am... not entirely human, though I was once."',
          '"The others who live here share similar natures. We are beings who exist somewhat outside the normal flow of mortal time and society, but we have chosen to live peacefully, contributing to the world rather than taking from it."',
          'Her voice is patient, giving you time to process. "Your great-aunt helped us maintain that peaceful existence by serving as our connection to the human world. She was our anchor, our protector, and our dear friend."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_nature',
            text: '"When you say \'not entirely human,\' what do you mean exactly?"',
            consequence: 'Seeks clarification • Shows readiness for more truth',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'nature_explanation'
          },
          {
            id: 'focus_on_cordelia',
            text: '"Tell me more about Cordelia\'s role. What made her such a good protector and friend?"',
            consequence: 'Family focus • Shows interest in legacy',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'cordelia_role_detailed'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for being so patient with me. This is all quite extraordinary."',
            consequence: 'Appreciative response • Shows good manners',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      // Trait-specific special scenes

      {
        id: 'athletic_demonstration',
        title: 'Physical Confidence',
        text: [
          'Moving with the fluid grace of someone comfortable in their body, you demonstrate your athletic nature. Perhaps it\'s the way you carry yourself, balanced and alert, or how you navigate the manor\'s corridors with confident steps.',
          'Lilith notices immediately. "You move like someone who takes care of their body. That\'s wise, especially in our world where physical capability can mean the difference between life and death."',
          'She gestures toward a portrait of a woman in riding attire. "Your great-aunt was also athletic in her youth. She believed that a strong body housed a strong spirit, and both were necessary for the challenges she faced here."',
          'There\'s approval in her gaze as she continues. "Physical prowess will serve you well. There may come times when you need to run, fight, or simply endure more than most mortals could manage."'
        ],
        choices: [
          {
            id: 'ask_about_challenges',
            text: '"What kind of physical challenges might I face here?"',
            consequence: 'Practical preparation • Shows readiness for danger',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'physical_challenges_explained'
          },
          {
            id: 'offer_protection',
            text: '"I can handle myself, and I\'d be willing to help protect others if needed."',
            consequence: 'Protective offer • Shows courage and strength',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'protection_offered'
          },
          {
            id: 'connect_with_cordelia',
            text: '"I\'d like to hear more about Cordelia\'s experiences. We seem to share similar strengths."',
            consequence: 'Family connection • Shows interest in legacy',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'cordelia_physical_stories'
          }
        ]
      },
      {
        id: 'creative_insight',
        title: 'The Artist\'s Perspective',
        text: [
          'Your creative nature allows you to see beyond the surface of things, to perceive the artistic composition of the moment - the way candlelight creates dramatic shadows, how Lilith\'s pose echoes classical portraiture, the musical quality of her voice.',
          '"This place is like a living artwork," you observe. "Every detail seems deliberately chosen to create atmosphere and meaning. The architecture, the lighting, even the way you speak - it\'s all composed like a symphony."',
          'Lilith\'s eyes light up with genuine pleasure. "How perceptive. Yes, we have cultivated this place as more than mere shelter. It is our canvas, our stage, our sanctuary given form through centuries of artistic vision."',
          'She moves toward a ornate music box on a side table. "Your artistic soul recognizes what we\'ve created here. That suggests you might understand what we are in ways that purely practical minds cannot."'
        ],
        choices: [
          {
            id: 'appreciate_composition',
            text: '"I can see the love and care that went into every artistic choice. This isn\'t just a home - it\'s a masterpiece."',
            consequence: 'Artistic appreciation • Deep understanding of their vision',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'offer_contribution',
            text: '"I\'d love to contribute to this artistic vision. What role could creativity play in your community?"',
            consequence: 'Creative collaboration • Shows desire to contribute',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'creative_contribution'
          },
          {
            id: 'ask_about_morgana',
            text: '"I sense there\'s another artist here. Someone who works with music, perhaps?"',
            consequence: 'Artistic intuition • Shows sensitivity to creative energy',
            effects: [{ characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'morgana_creative_connection'
          }
        ]
      },
      // Flaw-triggered scenes for ongoing character development
      {
        id: 'hemophobia_triggered',
        title: 'Blood and Fear',
        text: [
          'As the conversation turns to the supernatural nature of your hosts, the implications become clear - these are vampires, beings who sustain themselves on blood. The thought makes your stomach lurch with familiar dread.',
          'Your hemophobia has always been a challenge, but here, surrounded by creatures who embody everything your phobia represents, it becomes almost overwhelming. You struggle to maintain composure.',
          'Lilith notices your distress immediately. "You\'re pale," she observes with concern. "Are you feeling unwell? Perhaps this revelation is more shocking than I anticipated."',
          'The irony isn\'t lost on you - inheriting a manor full of vampires when the sight of blood makes you weak. But there\'s kindness in Lilith\'s voice, genuine concern rather than predatory interest.'
        ],
        choices: [
          {
            id: 'admit_hemophobia',
            text: '"I have hemophobia - the sight of blood terrifies me. I know it might seem strange, given the circumstances."',
            consequence: 'Honest vulnerability • May gain protection but shows weakness',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'hemophobia_accommodation'
          },
          {
            id: 'push_through_fear',
            text: 'Try to overcome your fear through sheer willpower.',
            consequence: 'Shows determination • Difficult but demonstrates courage',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'willpower_struggle'
          },
          {
            id: 'deflect_concern',
            text: '"I\'m fine, just processing a lot of new information."',
            consequence: 'Avoids showing weakness • Maintains composure but hides truth',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'hidden_struggle'
          }
        ]
      },
      {
        id: 'curiosity_compulsion',
        title: 'The Dangerous Question',
        text: [
          'Your dangerously curious nature gets the better of you. Despite every instinct warning you to proceed carefully, you find yourself asking the question you know you shouldn\'t: "What do you actually do for blood? How does feeding work for vampires like you?"',
          'The words are out before you can stop them, hanging in the air like a challenge. Lilith\'s expression grows complex - part amusement, part concern, part something darker.',
          '"Your curiosity could be either your greatest asset or your ultimate downfall," she says slowly. "That question... most mortals wouldn\'t dare ask it so directly, especially not upon first meeting."',
          'But there\'s respect in her voice too, acknowledgment of your boldness even as she recognizes its potential danger.'
        ],
        choices: [
          {
            id: 'apologize_for_boldness',
            text: '"I\'m sorry, that was too forward. My curiosity sometimes gets ahead of my common sense."',
            consequence: 'Shows self-awareness • Acknowledges mistake while maintaining curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'curiosity_acknowledged'
          },
          {
            id: 'defend_curiosity',
            text: '"If I\'m going to live here, I need to understand the reality of your existence."',
            consequence: 'Logical justification • Shows practical thinking behind curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'practical_curiosity'
          },
          {
            id: 'double_down',
            text: '"I can handle the truth, whatever it is. I\'d rather know than wonder."',
            consequence: 'Fearless pursuit of knowledge • Very bold but potentially dangerous',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'fearless_inquiry'
          }
        ]
      },
      // Follow-up scenes for trait-specific paths
      {
        id: 'psychic_acknowledged',
        title: 'Recognized Abilities',
        text: [
          '"I can sense supernatural presences," you admit to Lilith. "You\'re ancient and powerful, but there are others here too - someone who creates beauty from pain, and another who carries divine light touched by loss."',
          'Lilith\'s eyes widen with genuine surprise and respect. "Remarkable. Your psychic sensitivity is quite refined - most humans with such gifts can only sense general supernatural presence, not specific emotional signatures."',
          'She leans forward with interest. "Your great-aunt Cordelia possessed similar abilities, though hers manifested differently. It seems supernatural sensitivity runs in your bloodline."',
          'There\'s a new quality to her attention now - not just curiosity about your inheritance, but recognition of your potential value to their community.'
        ],
        choices: [
          {
            id: 'ask_about_cordelia_abilities',
            text: '"How did Cordelia\'s psychic abilities manifest? What could she do?"',
            consequence: 'Family legacy interest • Shows desire to understand heritage',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_psychic_legacy'
          },
          {
            id: 'offer_psychic_services',
            text: '"My abilities could be useful for protection or investigation. I\'d be happy to help."',
            consequence: 'Practical offer • Shows willingness to contribute unique skills',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'psychic_services_accepted'
          },
          {
            id: 'request_training',
            text: '"Could you teach me to develop these abilities further?"',
            consequence: 'Growth mindset • Shows desire for supernatural development',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'psychic_training_offered'
          }
        ]
      },
      {
        id: 'bond_recognition',
        title: 'Deeper Understanding',
        text: [
          '"The connections between you three are beautiful," you say, your blood sight still revealing the intricate web of loyalty and affection. "Like a family forged by choice rather than blood."',
          'For the first time since you arrived, Lilith\'s composed mask slips entirely. Her expression becomes vulnerable, touched by something deeper than surprise - perhaps gratitude for being truly seen.',
          '"Yes," she says softly. "We are... kindred spirits in the truest sense. Bound not by sire lines or clan obligations, but by choice, trust, and genuine care for one another\'s wellbeing."',
          'Your blood sight shows you the truth of her words - these bonds pulse with warmth, strengthened by centuries of shared experiences, mutual protection, and chosen family love.'
        ],
        choices: [
          {
            id: 'express_admiration',
            text: '"That\'s incredibly rare and precious. You\'ve built something beautiful together."',
            consequence: 'Validates their relationships • Shows deep appreciation',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 10 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'family_appreciation'
          },
          {
            id: 'ask_about_joining',
            text: '"Is there room in your family for someone new? Someone who could understand and value what you\'ve created?"',
            consequence: 'Direct interest in belonging • Bold but heartfelt request',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'family_consideration'
          },
          {
            id: 'promise_protection',
            text: '"I would never do anything to threaten the bonds between you. They\'re too precious."',
            consequence: 'Protective promise • Shows understanding of their value',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'bond_protection_vow'
          }
        ]
      },
      {
        id: 'creative_contribution',
        title: 'Artistic Collaboration',
        text: [
          '"I\'d love to contribute to this artistic vision," you say, your creative soul already spinning with possibilities. "What role could creativity play in your community?"',
          'Before Lilith can answer, a new voice drifts down from the upper floor - hauntingly beautiful, like silver bells touched with melancholy. Someone is playing piano, the melody complex and emotionally rich.',
          '"That," Lilith says with a warm smile, "would be Morgana. She\'s been waiting to meet you, actually. Your great-aunt spoke often of your artistic nature, and Morgana was quite excited about the possibility of a kindred creative spirit joining us."',
          'The music shifts, becoming more welcoming, as if the pianist has sensed the conversation below and is offering an invitation through melody.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'follow_the_music',
            text: '"Could I meet her? That music is incredibly beautiful."',
            consequence: 'Immediate artistic connection • Shows appreciation for Morgana\'s art',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_introduction'
          },
          {
            id: 'discuss_collaboration',
            text: '"I have ideas for artistic projects that could enhance the manor\'s atmosphere. Would she be interested in collaborating?"',
            consequence: 'Proactive creativity • Shows initiative and respect for her work',
            effects: [{ characterId: 'morgana', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'ask_about_cordelia_art',
            text: '"What kind of artistic contributions did Cordelia make? I\'d like to honor her legacy."',
            consequence: 'Legacy respect • Shows desire to continue family tradition',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'cordelia_artistic_legacy'
          }
        ]
      },
      {
        id: 'protection_offered',
        title: 'Strength Recognized',
        text: [
          '"I can handle myself, and I\'d be willing to help protect others if needed," you state with quiet confidence, your athletic bearing lending weight to the words.',
          'Lilith studies you with new interest. "Protection is... actually something we may need. While this manor is well-warded, there are always those who would threaten what we\'ve built here."',
          'She moves to the window, gazing out at the darkening grounds. "Your great-aunt served as both anchor and guardian. She had a talent for spotting threats and the physical capability to deal with them when necessary."',
          '"The question is whether you truly understand what protecting us might entail. It\'s not just about physical confrontation - it\'s about standing between those you care for and forces that would destroy them."'
        ],
        choices: [
          {
            id: 'accept_guardian_role',
            text: '"I understand the responsibility. I\'m ready to be both anchor and guardian, like Cordelia was."',
            consequence: 'Full commitment • Accepts complete responsibility for their safety',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'ask_about_threats',
            text: '"What kind of threats do you face? I need to understand what I\'d be protecting against."',
            consequence: 'Strategic thinking • Shows tactical preparation mindset',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'threat_assessment'
          },
          {
            id: 'gradual_commitment',
            text: '"I want to help, but I\'d like to learn more about your world before making such a significant commitment."',
            consequence: 'Cautious wisdom • Shows thoughtful approach to responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'gradual_integration'
          }
        ]
      },
      {
        id: 'hemophobia_accommodation',
        title: 'Understanding and Adaptation',
        text: [
          '"I have hemophobia," you admit, fighting against the shame you\'ve always felt about this limitation. "The sight of blood terrifies me. I know it might seem strange, given the circumstances."',
          'Rather than disappointment or amusement, Lilith\'s expression fills with understanding compassion. "Not strange at all. Fear is often our body\'s way of protecting us from trauma. And there are ways to work with such challenges."',
          'From the upper floor, you hear footsteps approaching - light, purposeful. "Seraphina," Lilith calls softly. "Your expertise may be needed."',
          'A figure appears at the top of the stairs - tall, graceful, with an aura of gentle strength that your supernatural senses recognize as divine, though tempered by earthly experience.'
        ],
        choices: [
          {
            id: 'meet_seraphina',
            text: 'Allow Seraphina to approach and introduce herself.',
            consequence: 'Openness to help • Shows willingness to accept support',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_healer_introduction'
          },
          {
            id: 'ask_about_accommodation',
            text: '"Are there ways to manage my phobia while still being useful here?"',
            consequence: 'Practical adaptation • Shows desire to contribute despite limitations',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'phobia_management_discussion'
          },
          {
            id: 'express_determination',
            text: '"I don\'t want my fear to limit what I can do for this community."',
            consequence: 'Determined growth • Shows commitment to overcoming challenges',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'fear_overcoming_support'
          }
        ]
      },
      // Chapter 2: The Community Revealed
      {
        id: 'coven_gathering',
        title: 'Meeting the Coven',
        text: [
          'The next evening, Lilith leads you to the manor\'s grand ballroom where elegant figures move like shadows through candlelight. "Tonight, you meet the others," she says with both warmth and warning in her voice.',
          'The room falls silent as you enter. Seven pairs of eyes turn toward you - each gaze carrying centuries of experience, secrets, and distinct personalities that immediately set them apart.',
          'Morgana stands near an antique piano, her midnight-black hair cascading in waves and silver eyes holding artistic depths. Beside her, Seraphina glows with ethereal beauty - platinum hair seeming to carry its own light, pale blue eyes radiating divine compassion.',
          'Valentina\'s fierce amber eyes burn with revolutionary passion, her wild crimson curls and battle-scarred olive skin marking her as the coven\'s warrior-activist. Raven towers nearby with Nordic features carved from marble, ice-blue eyes and platinum braids speaking of ancient Viking strength.',
          'Celeste adjusts her wire-rimmed glasses, honey-blonde hair pulled back practically as her intelligent hazel eyes process every detail. Luna emerges from the shadows like living starlight - silver-white hair shimmering, deep violet eyes holding cosmic knowledge.',
          'Elena hovers at the periphery, ash-blonde hair framing a heart-shaped face filled with centuries of artistic melancholy, while Isadora commands attention from the center - auburn hair in perfect chignon, emerald eyes calculating, wearing luxury that speaks of power and wealth.',
          '"Sisters," Lilith announces, "meet our new anchor. She has proven herself worthy of consideration, but the choice of full acceptance lies with all of us."',
          'You sense the complex web of relationships here - alliances forged through shared struggles, rivalries born of conflicting philosophies, and deeper bonds that transcend simple friendship.'
        ],
        background: '/backgrounds/ballroom.png',
        choices: [
          {
            id: 'confident_introduction',
            text: 'Introduce yourself with confidence, meeting each vampire\'s gaze directly.',
            consequence: 'Bold approach • Impresses some, challenges others',
            effects: [
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'raven', affectionChange: 12 },
              { characterId: 'isadora', affectionChange: -5 }
            ],
            nextScene: 'confident_first_impressions'
          },
          {
            id: 'respectful_approach',
            text: 'Approach respectfully, acknowledging their age and experience.',
            consequence: 'Diplomatic respect • Shows wisdom and humility',
            effects: [
              { characterId: 'celeste', affectionChange: 18 },
              { characterId: 'luna', affectionChange: 15 },
              { characterId: 'elena', affectionChange: 10 }
            ],
            nextScene: 'respectful_introduction'
          },
          {
            id: 'observe_dynamics',
            text: 'Stay quiet and observe the relationships between the vampires first.',
            consequence: 'Strategic observation • Learns valuable information',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'isadora', affectionChange: 12 }
            ],
            nextScene: 'coven_dynamics_revealed'
          }
        ]
      },
      {
        id: 'confident_first_impressions',
        title: 'Bold Introductions',
        text: [
          'You step forward with confident grace, meeting each vampire\'s gaze directly. "I\'m honored to meet you all. I may be new to your world, but I\'m not afraid of it."',
          'A vampire with fierce amber eyes and wild crimson curls steps forward first, her olive skin bearing faint battle scars and her leather clothing speaking of someone who chooses action over elegance. "Valentina Reyes," she says with a Spanish accent thick as honey. "I appreciate directness. Too many mortals cower or grovel."',
          'From near the window, a tall, powerfully built woman with platinum braids nods approvingly. Raven is intimidatingly beautiful - Nordic features carved from marble, ice-blue eyes that could freeze fire, and the bearing of someone who has faced death and laughed. Her practical clothing and visible weapons mark her as the coven\'s protector.',
          'However, an elegant woman in emerald silk raises an eyebrow with calculated interest. Isadora is the picture of refined luxury - auburn hair in a perfect chignon, emerald eyes that miss nothing, and expensive clothing that costs more than most cars. "Confidence is... interesting in one so young. We shall see if it is wisdom or foolishness." Her tone carries subtle challenge.'
        ],
        choices: [
          {
            id: 'engage_valentina',
            text: 'Focus on Valentina, drawn to her passionate energy.',
            consequence: 'Revolutionary alliance • May conflict with traditionalists',
            effects: [{ characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'valentina_connection'
          },
          {
            id: 'respect_raven',
            text: 'Turn to Raven, showing interest in her warrior nature.',
            consequence: 'Warrior respect • Appeals to strength-based values',
            effects: [{ characterId: 'raven', affectionChange: 20 }],
            nextScene: 'raven_acknowledgment'
          },
          {
            id: 'challenge_isadora',
            text: 'Meet Isadora\'s challenge with diplomatic steel.',
            consequence: 'Political gameplay • Dangerous but potentially rewarding',
            effects: [{ characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'isadora_political_dance'
          }
        ]
      },
      {
        id: 'respectful_introduction',
        title: 'Wisdom in Humility',
        text: [
          '"I\'m deeply honored to be here," you say with genuine respect. "I know I have much to learn about your world, and I\'m grateful for the opportunity to do so among such experienced and wise individuals."',
          'A vampire with steel-gray eyes behind wire-rimmed glasses nods with approval. "Celeste Dubois," she introduces herself in a cultured French accent. "Wisdom begins with acknowledging what one does not know. Your great-aunt possessed this quality."',
          'Near a crystal ball that seems to swirl with its own inner mist, a figure with silver-white hair speaks softly: "Luna Nightwhisper. The future paths around you shimmer with possibility. Humility will serve you well in navigating them."',
          'From a corner where shadows seem deeper, a pale woman with haunted gray eyes offers a melancholic smile. "Elena Volkov. Your respect for our experience... it reminds me of better times." Her Russian accent carries old pain.'
        ],
        choices: [
          {
            id: 'seek_celeste_wisdom',
            text: 'Ask Celeste about the knowledge contained in the manor.',
            consequence: 'Scholarly pursuit • Opens paths to forbidden knowledge',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'celeste_library_offer'
          },
          {
            id: 'luna_future_inquiry',
            text: 'Inquire about Luna\'s prophetic abilities.',
            consequence: 'Mystical interest • May reveal dangerous futures',
            effects: [{ characterId: 'luna', affectionChange: 20 }],
            nextScene: 'luna_prophecy_glimpse'
          },
          {
            id: 'elena_empathy',
            text: 'Show empathy for Elena\'s obvious pain.',
            consequence: 'Emotional connection • May unlock tragic secrets',
            effects: [{ characterId: 'elena', affectionChange: 30 }],
            nextScene: 'elena_tragic_bond'
          }
        ]
      },
      {
        id: 'coven_dynamics_revealed',
        title: 'The Web of Relationships',
        text: [
          'You observe carefully, noting the subtle interactions between the vampires. The social dynamics are complex, layered with centuries of shared history.',
          'Valentina\'s fierce amber eyes and battle-scarred hands speak with Raven\'s ice-blue Nordic gaze and towering presence - their body language suggesting a friendship built on mutual respect for strength. They exchange a meaningful glance when Isadora speaks.',
          'Celeste adjusts her wire-rimmed glasses as she whispers with Luna, whose silver-white hair shimmers in the candlelight - their scholarly connection evident in how they orbit each other discussing mystical matters.',
          'Elena\'s ash-blonde hair catches the light as she hovers on the periphery, her artistic melancholy keeping her isolated despite her ethereal beauty.',
          'Isadora\'s perfectly coiffed auburn hair and emerald silk dress command attention from the center, but you notice the slight tension when her calculating emerald eyes look toward Valentina\'s revolutionary passion - old philosophical differences, perhaps political rivalries about the coven\'s direction.'
        ],
        choices: [
          {
            id: 'ask_about_alliances',
            text: 'Diplomatically inquire about the different perspectives within the coven.',
            consequence: 'Political awareness • Shows understanding of complexity',
            effects: [
              { characterId: 'isadora', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 15 }
            ],
            nextScene: 'political_factions_explained'
          },
          {
            id: 'reach_out_to_elena',
            text: 'Approach Elena, sensing her isolation.',
            consequence: 'Compassionate outreach • May bridge social gaps',
            effects: [
              { characterId: 'elena', affectionChange: 25 },
              { characterId: 'seraphina', affectionChange: 10 }
            ],
            nextScene: 'elena_isolation_bridge'
          },
          {
            id: 'study_power_structure',
            text: 'Focus on understanding the power hierarchy.',
            consequence: 'Strategic analysis • Useful for future navigation',
            effects: [{ characterId: 'celeste', affectionChange: 18 }],
            nextScene: 'coven_hierarchy_revealed'
          }
        ]
      },
      {
        id: 'valentina_connection',
        title: 'The Revolutionary\'s Fire',
        text: [
          '"Your directness is refreshing," Valentina says, stepping closer with predatory grace. "Most newcomers either fear us or try to manipulate us. You do neither."',
          'Her amber eyes burn with passionate intensity. "I fought in three mortal wars before my turning, and I\'ve been fighting for vampire equality ever since. This coven... sometimes I think we\'ve grown too comfortable in our isolation."',
          'She glances meaningfully at Isadora. "Some believe in maintaining old hierarchies, working within existing power structures. I believe in tearing down systems that oppress us and building something better."',
          'You sense this is more than casual conversation - Valentina is gauging whether you might be an ally in whatever changes she\'s planning for the coven.'
        ],
        choices: [
          {
            id: 'support_revolution',
            text: '"Change often requires people willing to challenge the status quo. What needs to change here?"',
            consequence: 'Revolutionary alliance • May create enemies among traditionalists',
            effects: [
              { characterId: 'valentina', affectionChange: 35 },
              { characterId: 'isadora', affectionChange: -15 },
              { characterId: 'lilith', affectionChange: -5 }
            ],
            nextScene: 'revolutionary_recruitment'
          },
          {
            id: 'diplomatic_balance',
            text: '"Both tradition and change have their place. Perhaps there\'s a way to honor the past while building a better future?"',
            consequence: 'Diplomatic wisdom • Respects all perspectives',
            effects: [
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: 10 },
              { characterId: 'lilith', affectionChange: 20 }
            ],
            nextScene: 'diplomatic_bridge_building'
          },
          {
            id: 'ask_about_wars',
            text: '"You fought in mortal wars? What was that like for a vampire?"',
            consequence: 'Personal interest • Learns Valentina\'s tragic history',
            effects: [{ characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'valentina_war_stories'
          }
        ]
      },
      {
        id: 'celeste_library_offer',
        title: 'The Keeper of Knowledge',
        text: [
          'Celeste\'s eyes light up behind her wire-rimmed glasses. "Ah, a seeker of knowledge. How delightful. The Ravencroft library contains texts that most supernatural scholars would kill to access."',
          'She leads you toward massive oak doors carved with protective symbols. "Ancient grimoires, historical accounts of vampire society, prophecies that predate written language. Your great-aunt was particularly interested in the intersection of supernatural politics and mortal world events."',
          'Her voice drops to a conspiratorial whisper. "There are also... forbidden texts. Knowledge that some believe should remain buried. But I believe information should be available to those wise enough to handle it responsibly."',
          'You sense Celeste is offering more than just library access - she\'s potentially offering you entrance into dangerous secrets that could reshape your understanding of everything.'
        ],
        choices: [
          {
            id: 'request_forbidden_knowledge',
            text: '"I\'m interested in the forbidden texts. I believe knowledge itself isn\'t dangerous - only ignorance is."',
            consequence: 'Dangerous knowledge sought • Sanity cost for forbidden secrets',
            effects: [
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'luna', affectionChange: -10 },
              { characterId: 'seraphina', affectionChange: -15 }
            ],
            playerStatEffects: {
              sanityChange: -15
            },
            nextScene: 'forbidden_knowledge_access'
          },
          {
            id: 'cordelia_research_focus',
            text: '"I\'d like to understand what Cordelia was researching. It might help me understand my role here."',
            consequence: 'Legacy investigation • Safe but potentially revealing',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'lilith', affectionChange: 15 }
            ],
            nextScene: 'cordelia_research_revealed'
          },
          {
            id: 'gradual_learning',
            text: '"I\'d appreciate starting with the basics and working my way up to more advanced knowledge."',
            consequence: 'Careful progression • Shows wisdom and patience',
            effects: [
              { characterId: 'celeste', affectionChange: 18 },
              { characterId: 'seraphina', affectionChange: 12 }
            ],
            nextScene: 'structured_education'
          }
        ]
      },
      {
        id: 'elena_tragic_bond',
        title: 'The Artist\'s Sorrow',
        text: [
          'Elena stands like a living portrait of melancholy - ash-blonde hair falling in soft waves around a heart-shaped face, pale gray eyes that hold centuries of sorrow, and porcelain skin so translucent you can almost see the pain beneath. She wears a simple black dress that emphasizes her ethereal fragility.',
          'Her movements are graceful yet hesitant, like someone who has learned to make herself small to avoid further hurt. Paint stains on her delicate fingers speak of endless hours spent trying to capture emotions too complex for words.',
          'Her pale gray eyes widen slightly at your empathy, as if she\'s forgotten what genuine compassion feels like. "You... see the pain. Most prefer to look away."',
          'She moves like a wraith toward a painting covered by a dark cloth. "I create to remember, and I create to forget. Both are equally futile when you have eternity stretching before you."',
          'With trembling hands, she reveals the painting - a masterpiece depicting a snowy Russian landscape with a burning manor in the distance. "My mortal family. Lost to revolutionaries while I was away, studying art in Paris. I returned to find... nothing."',
          'Her voice breaks slightly. "The others try to help, but how do you heal a wound that has had two centuries to fester? How do you find purpose when everyone you loved is dust?"'
        ],
        choices: [
          {
            id: 'offer_comfort',
            text: 'Gently place a comforting hand on her shoulder.',
            consequence: 'Physical comfort • Shows brave compassion despite supernatural nature',
            effects: [
              { characterId: 'elena', affectionChange: 40 },
              { characterId: 'seraphina', affectionChange: 15 }
            ],
            nextScene: 'elena_comfort_accepted'
          },
          {
            id: 'artistic_understanding',
            text: '"Art can be a bridge between past and future. Your pain creates beauty that helps others feel less alone."',
            consequence: 'Artistic empathy • Connects through creative understanding',
            effects: [
              { characterId: 'elena', affectionChange: 35 },
              { characterId: 'morgana', affectionChange: 20 }
            ],
            nextScene: 'artistic_soul_connection'
          },
          {
            id: 'purpose_perspective',
            text: '"Perhaps purpose isn\'t about replacing what\'s lost, but about honoring it by helping others avoid similar pain."',
            consequence: 'Philosophical insight • Offers new perspective on immortal existence',
            effects: [
              { characterId: 'elena', affectionChange: 30 },
              { characterId: 'valentina', affectionChange: 15 }
            ],
            nextScene: 'elena_purpose_reframing'
          }
        ]
      },
      // Rivalry and Alliance scenes
      {
        id: 'political_factions_explained',
        title: 'The Coven\'s Divisions',
        text: [
          'Isadora steps forward with practiced grace, clearly comfortable being the center of attention. "You\'ve observed well. Yes, we have... philosophical differences about the coven\'s future direction."',
          'She gestures elegantly toward Valentina. "Some believe in dramatic change, revolution, tearing down established order. They see oppression where I see opportunity for careful advancement."',
          'Valentina\'s eyes flash with contained fire. "And some mistake complacency for strategy. How long do we wait for gradual change while younger vampires suffer under old restrictions?"',
          'Celeste adjusts her glasses thoughtfully. "There\'s wisdom in both approaches. Perhaps our new anchor can offer a fresh perspective on this ancient debate."'
        ],
        choices: [
          {
            id: 'side_with_progression',
            text: '"Both of you want progress, just at different speeds. What if we found ways to implement careful changes that build toward larger transformation?"',
            consequence: 'Moderate position • May unite factions or satisfy none',
            effects: [
              { characterId: 'isadora', affectionChange: 15 },
              { characterId: 'valentina', affectionChange: 10 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            nextScene: 'moderate_coalition_building'
          },
          {
            id: 'question_restrictions',
            text: '"What specific restrictions are causing problems? Understanding the root issues might help find solutions."',
            consequence: 'Analytical approach • Focuses on problems rather than personalities',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'luna', affectionChange: 15 }
            ],
            nextScene: 'restriction_analysis'
          },
          {
            id: 'suggest_trial_period',
            text: '"What if we tested small changes first? Trial periods could prove concepts without major risk."',
            consequence: 'Practical compromise • Shows business-minded thinking',
            effects: [
              { characterId: 'isadora', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 18 }
            ],
            nextScene: 'pragmatic_testing_approach'
          }
        ]
      },
      // Additional missing scenes referenced in the story
      {
        id: 'truth_revelation',
        title: 'The Nature of Things',
        text: [
          'Lilith leads you into an elegant sitting room where a fire crackles in an ornate fireplace. She gestures to a comfortable chair before settling gracefully across from you.',
          '"The details Cordelia omitted," she begins with a slight smile, "concern the nature of her houseguests. We are not entirely... human, though we were once. We are what your modern world calls vampires."',
          'She pauses, watching your reaction carefully. "Before you flee or reach for a cross, know that we chose this life of peaceful coexistence. We sustain ourselves without harm to mortals, and we have protected this place for centuries."',
          '"Your great-aunt discovered our secret within days but chose understanding over fear. She became our anchor to the mortal world, our protector, and our dear friend."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_with_wonder',
            text: '"Vampires... that explains so much about this place. I\'m amazed rather than afraid."',
            consequence: 'Wonder over fear • Shows supernatural acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'amazed_acceptance'
          },
          {
            id: 'ask_practical_questions',
            text: '"What does this mean for day-to-day life? How does coexistence actually work?"',
            consequence: 'Practical focus • Shows adaptability',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'practical_coexistence'
          },
          {
            id: 'express_gratitude_for_trust',
            text: '"Thank you for trusting me with this truth. I want to be worthy of that trust, like Cordelia was."',
            consequence: 'Grateful response • Shows respect for confidence',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'trust_acknowledged'
          }
        ]
      },
      {
        id: 'tenant_explanation',
        title: 'The Long-Term Arrangement',
        text: [
          'Lilith\'s expression becomes more serious as she leads you to the sitting room. "The legal documents call us tenants, but the reality is more complex than property law can encompass."',
          '"We have lived here for centuries, long before your family owned this land. When the Ravencroft name first came to this manor, an arrangement was made - protection and secrecy in exchange for peaceful coexistence."',
          'She settles into a chair, her ancient eyes reflecting the firelight. "Your great-aunt honored that arrangement admirably. The question now is whether you will choose to do the same, or if new terms must be negotiated."',
          'There\'s no threat in her voice, but you sense the weight of centuries behind her words.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'honor_arrangement',
            text: '"If Cordelia found this arrangement acceptable, then I\'m willing to honor it as well."',
            consequence: 'Accepts legacy • Shows respect for family tradition',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'arrangement_honored'
          },
          {
            id: 'need_more_details',
            text: '"Before I commit to anything, I need to understand exactly what this arrangement entails."',
            consequence: 'Cautious inquiry • Shows responsible decision-making',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'suggest_new_terms',
            text: '"Perhaps we could discuss what arrangement might work best for all of us going forward."',
            consequence: 'Diplomatic negotiation • Shows collaborative spirit',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'negotiation_begins'
          }
        ]
      },
      {
        id: 'manor_appreciation',
        title: 'A Tour of Beauty',
        text: [
          'Lilith\'s expression warms at your compliment. "Cordelia did indeed have exquisite taste, though she built upon what we had already cultivated over the centuries."',
          'She gestures around the grand entrance hall. "This manor has been lovingly maintained by those who appreciate beauty in all its forms. Each room tells a story, each piece of art has meaning."',
          '"Would you like a tour? Understanding the physical space often helps one understand the emotional landscape as well." Her offer seems genuine, a chance to appreciate the manor\'s history.',
          'You sense this could be an opportunity to learn more about both the house and its mysterious inhabitants.'
        ],
        character: characters.lilith,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'accept_tour_eagerly',
            text: '"I would love a tour. I want to understand everything about this place."',
            consequence: 'Enthusiastic interest • Shows deep appreciation',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'manor_tour_begins'
          },
          {
            id: 'ask_about_history',
            text: '"I\'d be fascinated to learn about the history behind the art and architecture."',
            consequence: 'Historical curiosity • Shows intellectual interest',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'historical_tour'
          },
          {
            id: 'focus_on_residents',
            text: '"Perhaps later. Right now I\'m more curious about the people who live here."',
            consequence: 'People-focused • Shows interest in relationships',
            effects: [{ characterId: 'lilith', affectionChange: 14 }],
            nextScene: 'resident_introductions'
          }
        ]
      },
      // Corrected special ability scenes that return to door choices
      {
        id: 'psychic_door_insight',
        title: 'Supernatural Perception',
        text: [
          'You close your eyes and extend your psychic senses, feeling the supernatural currents that flow around the manor like invisible rivers of power.',
          'Immediately, you sense multiple presences within - ancient, powerful, and decidedly non-human. At least three distinct auras pulse with different energies: one dark and commanding, another touched by melancholy and creativity, and a third that feels like starlight dimmed by earthly experience.',
          'The manor itself radiates protective energy, wards woven into the very stones. This place is a fortress against supernatural threats, but also a sanctuary for those within.',
          'Armed with this knowledge, you approach the massive oak doors with greater understanding of what awaits you.'
        ],
        choices: [
          {
            id: 'knock_respectfully',
            text: 'Knock respectfully on the door.',
            consequence: 'Polite approach • Shows respect for the inhabitants',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'lilith_greeting'
          },
          {
            id: 'knock_boldly',
            text: 'Knock with confident authority.',
            consequence: 'Bold entrance • Demonstrates self-assurance',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'assertive_entrance'
          },
          {
            id: 'try_door_handle',
            text: 'Try the door handle to see if it\'s unlocked.',
            consequence: 'Practical approach • Tests boundaries',
            effects: [{ characterId: 'lilith', affectionChange: 3 }],
            nextScene: 'unlocked_discovery'
          }
        ]
      },
      {
        id: 'blood_sight_door_analysis',
        title: 'The True Nature Revealed',
        text: [
          'You focus your blood sight, a rare gift that allows you to perceive the supernatural nature of beings by observing their life force.',
          'Through the walls, you glimpse multiple supernatural signatures. The strongest burns with ancient crimson power - a vampire of immense age and authority. Another flickers with silver fire touched by artistic melancholy. A third glows with divine light, though dimmed as if something has fallen from grace.',
          'Most remarkably, you see threads of connection between them all - bonds forged not by blood but by choice, loyalty, and something deeper than simple alliance.',
          'With this supernatural intelligence gathered, you now understand the nature of those you\'re about to meet.'
        ],
        choices: [
          {
            id: 'knock_respectfully',
            text: 'Knock respectfully on the door.',
            consequence: 'Polite approach • Shows respect for the inhabitants',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'lilith_greeting'
          },
          {
            id: 'knock_boldly',
            text: 'Knock with confident authority.',
            consequence: 'Bold entrance • Demonstrates self-assurance',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'assertive_entrance'
          },
          {
            id: 'try_door_handle',
            text: 'Try the door handle to see if it\'s unlocked.',
            consequence: 'Practical approach • Tests boundaries',
            effects: [{ characterId: 'lilith', affectionChange: 3 }],
            nextScene: 'unlocked_discovery'
          }
        ]
      },
      // Umbra introduction scenes - the shy eldritch companion
      {
        id: 'umbra_first_encounter',
        title: 'Something in the Shadows',
        text: [
          'As you explore the manor, you notice shadows that seem to move independently of their sources. In the corner of your vision, darkness pools and swirls with an almost sentient quality.',
          'At first, you think it might be a trick of the candlelight, but then you see tiny points of starlight glimmering within the shadows - like distant galaxies viewed through a telescope. The entity appears to be composed of living darkness interwoven with constellation patterns, creating a form that\'s both beautiful and otherworldly.',
          'When the shadows shift, you catch glimpses of what might be a vaguely humanoid shape - tall and graceful, but made entirely of cosmic void punctuated by stars. The being seems to exist partially in this dimension and partially elsewhere, their form flickering between solid shadow and translucent starlight.',
          'The darkness recoils when you look directly at it, as if embarrassed to be noticed. Yet you sense no malevolence, only a profound shyness and... curiosity about you.',
          'Lilith notices your distraction. "Ah," she says with gentle amusement, "it seems Umbra has taken an interest in you. They\'re quite harmless, despite appearances."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'approach_umbra_gently',
            text: 'Speak softly to the shadows: "Hello there. I\'m not going to hurt you."',
            consequence: 'Gentle approach • Shows kindness to unusual beings',
            effects: [{ characterId: 'umbra', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'umbra_shy_response'
          },
          {
            id: 'ask_lilith_about_umbra',
            text: 'Ask Lilith: "What exactly is Umbra? How long have they lived here?"',
            consequence: 'Seeks understanding • Shows respectful curiosity',
            effects: [{ characterId: 'lilith', affectionChange: 10 }, { characterId: 'umbra', affectionChange: 5 }],
            nextScene: 'umbra_explanation'
          },
          {
            id: 'ignore_and_continue',
            text: 'Pretend you didn\'t notice anything unusual and continue the conversation.',
            consequence: 'Polite disregard • Avoids potential awkwardness',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'conversation_continues'
          }
        ]
      },
      {
        id: 'umbra_shy_response',
        title: 'The Shadow\'s First Words',
        text: [
          'The shadows pause in their retreat, and you hear the faintest whisper - like wind through distant stars: "You... you are not afraid?"',
          'The voice seems to come from everywhere and nowhere at once, carrying notes of ancient loneliness and tentative hope. The starlight points within the darkness pulse gently, like a nervous heartbeat.',
          'Lilith smiles warmly. "Umbra rarely speaks to newcomers. You\'ve made quite an impression."',
          'The shadows edge slightly closer, still maintaining a respectful distance. "The others... they accepted me, but you are the first to speak gently from the beginning."'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'reassure_umbra',
            text: '"I could never be afraid of someone who seems so gentle. Your voice is beautiful."',
            consequence: 'Heartfelt reassurance • Shows genuine acceptance',
            effects: [{ characterId: 'umbra', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'umbra_touched_by_kindness'
          },
          {
            id: 'express_curiosity',
            text: '"I\'m curious about you, not afraid. Would you like to tell me about yourself?"',
            consequence: 'Interested inquiry • Shows desire to understand',
            effects: [{ characterId: 'umbra', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'umbra_shares_story'
          },
          {
            id: 'offer_friendship',
            text: '"Everyone deserves kindness. I\'d like to be your friend, if you\'d like that."',
            consequence: 'Friendship offer • Shows welcoming nature',
            effects: [{ characterId: 'umbra', affectionChange: 30 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'umbra_friendship_begins'
          }
        ]
      },
      {
        id: 'umbra_explanation',
        title: 'An Ancient Presence',
        text: [
          'Lilith\'s expression grows thoughtful. "Umbra is older than any of us - perhaps older than this realm itself. They are what mortals might call an eldritch entity, though that term hardly does justice to their gentle nature."',
          '"They arrived here centuries ago, drawn by the sanctuary we created. Unlike the cosmic horrors of legend, Umbra seeks only peace and companionship. They are incredibly shy but deeply loving to those who show them kindness."',
          'The shadows seem to curl in on themselves, as if embarrassed by the attention. A soft whisper drifts from the darkness: "I did not mean to disturb..."',
          'Lilith shakes her head. "You disturb nothing, dear one. You are as much a part of this family as any of us."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'welcome_umbra',
            text: 'Address the shadows directly: "You\'re not disturbing anything. I\'m honored to meet you."',
            consequence: 'Direct welcome • Shows immediate acceptance',
            effects: [{ characterId: 'umbra', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'umbra_grateful_response'
          },
          {
            id: 'ask_about_eldritch_nature',
            text: '"What does it mean to be an eldritch entity? I want to understand."',
            consequence: 'Seeks deeper understanding • Shows intellectual curiosity',
            effects: [{ characterId: 'umbra', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'eldritch_nature_explained'
          },
          {
            id: 'focus_on_family_aspect',
            text: '"I love that you\'ve created a family here that includes everyone, regardless of their nature."',
            consequence: 'Appreciates inclusivity • Shows value alignment',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'umbra', affectionChange: 12 }],
            nextScene: 'family_values_discussion'
          }
        ]
      },
      {
        id: 'umbra_touched_by_kindness',
        title: 'A Heart of Starlight',
        text: [
          'The shadows seem to shimmer with emotion, and the starlight points pulse brighter. "No one has ever... called my voice beautiful before."',
          'Slowly, carefully, the darkness begins to form a more defined shape - still shadow, but vaguely humanoid, with those points of light creating constellation patterns throughout their form. You can now see they\'re tall and graceful, their "body" composed of flowing darkness that moves like liquid night, punctuated by stars that form intricate celestial maps across their form.',
          'Their "face" is the most remarkable part - a void where features should be, but filled with swirling galaxies and nebulae that create expressions of cosmic emotion. When they speak, the stars pulse in rhythm with their words.',
          '"I have been alone in the void between stars for eons. When I found this place, these people... it was the first time I understood what mortals call \'home.\'"',
          'There\'s such genuine warmth in their cosmic voice that you feel your heart ache for their ancient loneliness.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_loneliness',
            text: '"That sounds incredibly lonely. I\'m so glad you found a home here."',
            consequence: 'Empathetic response • Shows emotional understanding',
            effects: [{ characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'umbra_shares_deeper_feelings'
          },
          {
            id: 'offer_companionship',
            text: '"You never have to be alone again. I\'d love to spend time with you."',
            consequence: 'Companionship offer • Shows commitment to connection',
            effects: [{ characterId: 'umbra', affectionChange: 30 }],
            nextScene: 'umbra_companionship_accepted'
          },
          {
            id: 'admire_their_form',
            text: '"Your constellation form is absolutely beautiful. You\'re like living art."',
            consequence: 'Aesthetic appreciation • Shows wonder at their nature',
            effects: [{ characterId: 'umbra', affectionChange: 20 }],
            nextScene: 'umbra_form_appreciation'
          }
        ]
      },
      // Additional Umbra continuation scenes
      {
        id: 'umbra_shares_deeper_feelings',
        title: 'Ancient Solitude',
        text: [
          'The starlight within Umbra\'s form pulses with a rhythm like a heartbeat. "Loneliness... yes, that is the correct word. For eons I drifted between realms, observing but never connecting."',
          '"I watched civilizations rise and fall, saw love bloom and fade, but I was always... outside. Too different, too frightening. Until I found this sanctuary."',
          'Their form shifts closer, still respectfully distant but clearly wanting connection. "You speak of gladness, but do you truly understand what you offer? Friendship with one such as I?"',
          'There\'s vulnerability in their cosmic voice, a trembling hope that they barely dare to express.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'affirm_friendship_completely',
            text: '"I understand exactly what I\'m offering. True friendship, without conditions or fear."',
            consequence: 'Unconditional acceptance • Strongest possible bond',
            effects: [{ characterId: 'umbra', affectionChange: 40 }],
            nextScene: 'umbra_overwhelming_gratitude'
          },
          {
            id: 'want_to_learn_more',
            text: '"I want to understand you completely. Will you teach me about your world, your experiences?"',
            consequence: 'Deep curiosity • Shows commitment to understanding',
            effects: [{ characterId: 'umbra', affectionChange: 35 }],
            nextScene: 'umbra_shares_cosmic_stories'
          },
          {
            id: 'promise_patience',
            text: '"I promise to be patient as we learn about each other. Friendship takes time to grow."',
            consequence: 'Thoughtful approach • Shows wisdom about relationships',
            effects: [{ characterId: 'umbra', affectionChange: 30 }],
            nextScene: 'umbra_appreciates_patience'
          }
        ]
      },
      {
        id: 'umbra_companionship_accepted',
        title: 'A Bond Across Realms',
        text: [
          'The constellation patterns within Umbra\'s form suddenly brighten, creating what can only be described as the cosmic equivalent of a smile. "You would... truly wish to spend time with me?"',
          '"I must warn you - my nature is not always... comfortable for mortals. Sometimes I forget myself and the shadows grow too deep, or the starlight becomes too bright."',
          'They seem to gather courage from your acceptance. "But if you are willing, I would treasure every moment of companionship. I have so much to show you, so many wonders from beyond the veil."',
          'You sense this is a turning point - Umbra is offering to share their cosmic nature with you completely.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'eager_for_wonders',
            text: '"I\'m excited to see these wonders. Show me everything you\'re comfortable sharing."',
            consequence: 'Enthusiastic acceptance • Moderate sanity cost for cosmic exposure',
            effects: [{ characterId: 'umbra', affectionChange: 35 }],
            playerStatEffects: {
              sanityChange: -8
            },
            nextScene: 'umbra_shares_cosmic_wonders'
          },
          {
            id: 'comfort_with_nature',
            text: '"I\'m not afraid of your true nature. Be yourself around me, always."',
            consequence: 'Complete acceptance • Encourages authenticity',
            effects: [{ characterId: 'umbra', affectionChange: 40 }],
            nextScene: 'umbra_reveals_true_self'
          },
          {
            id: 'mutual_sharing',
            text: '"I\'ll share my world with you too. We can learn from each other."',
            consequence: 'Reciprocal offer • Creates balanced relationship',
            effects: [{ characterId: 'umbra', affectionChange: 32 }],
            nextScene: 'umbra_mutual_discovery'
          }
        ]
      },
      {
        id: 'umbra_form_appreciation',
        title: 'Beauty in the Void',
        text: [
          'Umbra\'s constellation form shimmers and shifts, the starlight points creating new patterns like a living galaxy. "You... you see beauty in this form? Others have called it terrible, alien, wrong."',
          '"I chose this manifestation because it felt most true to what I am - darkness touched by distant light, void given gentle purpose. But I worried it would frighten you."',
          'The patterns in their form become more intricate, more beautiful, as if your acceptance has given them permission to truly be themselves.',
          '"If you find beauty in what I am, perhaps... perhaps I need not hide so much of myself."'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'encourage_authenticity',
            text: '"Please don\'t hide yourself. You\'re magnificent exactly as you are."',
            consequence: 'Encourages self-acceptance • Builds confidence',
            effects: [{ characterId: 'umbra', affectionChange: 38 }],
            nextScene: 'umbra_gains_confidence'
          },
          {
            id: 'ask_about_other_forms',
            text: '"Can you take other forms? I\'d love to see all the ways you can exist."',
            consequence: 'Curious about abilities • Shows interest in their nature',
            effects: [{ characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'umbra_demonstrates_forms'
          },
          {
            id: 'focus_on_essence',
            text: '"Your form is beautiful, but it\'s your gentle spirit that truly amazes me."',
            consequence: 'Values inner nature • Deepest appreciation',
            effects: [{ characterId: 'umbra', affectionChange: 42 }],
            nextScene: 'umbra_touched_by_understanding'
          }
        ]
      }
    ]
  },
  {
    id: 'chapter2',
    title: 'The Contentious Proposal',
    scenes: [
      {
        id: 'coven_gathering',
        title: 'The Evening Council',
        text: [
          'The great hall of Ravencroft Manor transforms as evening falls. Ancient tapestries catch the flickering candlelight, and the assembled vampires create an atmosphere of power and tension.',
          'You sit at the ornate table, still adjusting to your role as the new "Anchor" - the mortal link that legitimizes the coven\'s sanctuary. The weight of their expectations settles on your shoulders.',
          'Lilith calls the meeting to order with quiet authority. "We have matters of significance to discuss tonight. The world beyond our walls continues to change, and we must decide how to respond."',
          'Valentina leans forward, her revolutionary fervor barely contained. Across the table, Isadora\'s calculating gaze suggests she anticipates conflict. The air practically crackles with unspoken disagreement.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'observe_carefully',
            text: 'Watch the dynamics carefully before speaking.',
            consequence: 'Analytical approach • Gathers information about coven politics',
            effects: [{ characterId: 'celeste', affectionChange: 8 }, { characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'valentina_proposal'
          },
          {
            id: 'ask_about_anchor_role',
            text: '"What exactly does being an Anchor mean for tonight\'s discussion?"',
            consequence: 'Direct inquiry • Shows engagement with responsibilities',
            effects: [{ characterId: 'lilith', affectionChange: 10 }, { characterId: 'isadora', affectionChange: 8 }],
            nextScene: 'anchor_role_explained'
          },
          {
            id: 'address_tension',
            text: '"I can feel the tension in the room. Perhaps we should address what\'s really at stake here."',
            consequence: 'Confronts underlying conflict • Shows perceptiveness',
            effects: [{ characterId: 'valentina', affectionChange: 12 }, { characterId: 'raven', affectionChange: 8 }],
            nextScene: 'tension_acknowledged'
          }
        ]
      },
      {
        id: 'valentina_proposal',
        title: 'The Revolutionary Vision',
        text: [
          'Valentina stands abruptly, her chair scraping against ancient stone. She\'s strikingly beautiful with fierce amber eyes that burn with revolutionary passion, and wild crimson curls that seem to move with their own energy. Her olive skin bears faint scars - souvenirs of countless battles fought for the marginalized.',
          'She wears practical black leather and dark denim, clothes chosen for action rather than elegance. Her hands are calloused from real work, and when she moves, there\'s a coiled intensity that speaks of someone who has seen too much suffering to remain still.',
          'She pulls out a worn leather journal, pages filled with detailed notes and desperate sketches. "Last month, I found Maria in an alley in Barcelona. Seventeen years old, turned and abandoned. She was feeding on rats, fighting for scraps of humanity." Valentina\'s voice cracks slightly.',
          'She spreads photographs across the table with trembling hands - surveillance shots of isolated figures in cities worldwide. "Dimitri in Prague, surviving in the sewers. Akira in Tokyo, going mad from loneliness."',
          'Her fierce amber eyes meet each person\'s gaze with burning conviction. "We sit here in luxury while our siblings die in despair. I cannot - I will not - remain comfortable while they suffer."'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'emotional_connection',
            text: '"These faces... these stories... How can we sleep soundly knowing they suffer alone?"',
            consequence: 'Emotional resonance • Connects deeply with humanitarian crisis',
            effects: [{ characterId: 'valentina', affectionChange: 30 }, { characterId: 'seraphina', affectionChange: 20 }, { characterId: 'elena', affectionChange: 15 }, { characterId: 'isadora', affectionChange: -10 }],
            nextScene: 'isadora_opposition'
          },
          {
            id: 'analytical_approach',
            text: '"You\'ve documented this thoroughly. What protocols would ensure both their safety and ours?"',
            consequence: 'Strategic thinking • Engages with evidence while seeking safeguards',
            effects: [{ characterId: 'valentina', affectionChange: 20 }, { characterId: 'celeste', affectionChange: 18 }, { characterId: 'raven', affectionChange: 12 }],
            nextScene: 'practical_concerns'
          },
          {
            id: 'personal_focus',
            text: '"Valentina, this clearly means everything to you. Tell me about your first rescue - Maria."',
            consequence: 'Personal interest • Shows care for Valentina\'s individual experience',
            effects: [{ characterId: 'valentina', affectionChange: 25 }, { characterId: 'elena', affectionChange: 12 }],
            nextScene: 'valentina_personal_story'
          },
          {
            id: 'diplomatic_process',
            text: '"This deserves careful consideration from all perspectives. Perhaps we should hear everyone\'s thoughts?"',
            consequence: 'Diplomatic leadership • Facilitates inclusive discussion',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'isadora', affectionChange: 15 }, { characterId: 'celeste', affectionChange: 10 }],
            nextScene: 'isadora_opposition'
          }
        ]
      },
      {
        id: 'isadora_opposition',
        title: 'The Voice of Caution',
        text: [
          'Isadora rises with the practiced grace of someone who has commanded boardrooms and salons for centuries. She\'s impeccably elegant - auburn hair swept into a perfect chignon, emerald eyes that miss nothing, and porcelain skin that speaks of centuries spent in luxury.',
          'She wears a tailored ivory silk blouse and charcoal pencil skirt that cost more than most people\'s cars, with diamond earrings that catch the light as she tilts her head, considering her words with surgical precision. Every gesture speaks of power, wealth, and absolute control.',
          '"How beautifully passionate you are, Valentina," she begins, her tone warm honey over steel. "Such fire, such... conviction." The pause suggests these aren\'t entirely compliments.',
          'She smooths an invisible wrinkle from her silk blouse with manicured fingers. "But I wonder if we might consider the more... delicate... aspects of such an endeavor?" Her smile never wavers as she delivers what amounts to a political dissection.',
          'Her calculating emerald gaze settles on you with practiced concern. "Our newest member has inherited such tremendous responsibility. Perhaps we shouldn\'t burden her with... additional complexities... quite so soon?"'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'challenge_with_respect',
            text: '"I appreciate your concern for my wellbeing, but shouldn\'t I have a voice in decisions that affect my role here?"',
            consequence: 'Assertive autonomy • Claims agency while remaining respectful',
            effects: [{ characterId: 'valentina', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 20 }, { characterId: 'isadora', affectionChange: -5 }],
            nextScene: 'political_divide_deepens'
          },
          {
            id: 'acknowledge_wisdom',
            text: '"Your experience has clearly served this community well. I\'d value learning more about what has kept everyone safe."',
            consequence: 'Strategic deference • Appeals to Isadora\'s expertise and pride',
            effects: [{ characterId: 'isadora', affectionChange: 25 }, { characterId: 'valentina', affectionChange: -8 }, { characterId: 'celeste', affectionChange: 12 }],
            nextScene: 'traditionalist_support'
          },
          {
            id: 'propose_consultation',
            text: '"Perhaps we could arrange private consultations with key stakeholders before making any major decisions?"',
            consequence: 'Political sophistication • Suggests process Isadora would approve',
            effects: [{ characterId: 'isadora', affectionChange: 18 }, { characterId: 'lilith', affectionChange: 15 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'private_consultations'
          },
          {
            id: 'request_time_to_consider',
            text: '"This is clearly a complex issue with important implications. Could I have time to consider all perspectives?"',
            consequence: 'Thoughtful deliberation • Shows wisdom in not rushing decisions',
            effects: [{ characterId: 'luna', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 15 }, { characterId: 'celeste', affectionChange: 18 }],
            nextScene: 'strategic_patience'
          }
        ]
      },
      {
        id: 'seek_lilith_counsel',
        title: 'Ancient Wisdom',
        text: [
          'You find Lilith in her private study after the heated council session. Ancient books line the walls, and moonlight streams through tall windows as she pours two glasses of deep red wine.',
          '"You handled yourself well in there," she says, offering you a glass. "Though I suspect you\'re feeling the weight of what it means to be caught between opposing forces."',
          '"I\'ve seen this pattern before - the eternal tension between progress and preservation. Both Valentina and Isadora speak from experience, from pain. The question is: what does your heart tell you is right?"',
          'She settles into a chair across from you. "As Anchor, your opinion carries more weight than you might realize. The coven will follow where you lead, for better or worse."'
        ],
        character: characters.lilith,
        background: '/backgrounds/bedroom.png',
        choices: [
          {
            id: 'ask_lilith_preference',
            text: '"What would you do if you were in my position? You\'ve led this coven for centuries."',
            consequence: 'Seeks experienced guidance • Shows respect for leadership',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'lilith_guidance'
          },
          {
            id: 'discuss_anchor_burden',
            text: '"I didn\'t realize how much responsibility would come with this role. How do I make decisions that affect everyone?"',
            consequence: 'Vulnerable admission • Shows weight of leadership',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'leadership_wisdom'
          },
          {
            id: 'ask_about_past_conflicts',
            text: '"Have there been similar disputes before? How did the coven resolve them?"',
            consequence: 'Historical perspective • Learns from precedent',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'historical_conflicts'
          }
        ]
      },
      {
        id: 'celeste_analysis',
        title: 'The Scholar\'s Perspective',
        text: [
          'You find Celeste in the library, surrounded by open books and historical documents. Maps of vampire populations and government surveillance reports cover her desk.',
          'Celeste is strikingly intellectual - honey-blonde hair pulled back in a practical ponytail, wire-rimmed glasses perched on her nose, and intelligent hazel eyes that seem to process information faster than most people can speak. She wears a comfortable cashmere sweater and dark jeans, prioritizing function over fashion.',
          'Her desk is meticulously organized despite the volume of research materials, and her fingers are ink-stained from hours of note-taking. Everything about her speaks of someone who finds patterns in chaos and answers in data.',
          '"I\'ve been researching both sides of this debate," she says without looking up. "The data is... complex. There are 127 documented cases of newly turned vampires who disappeared in the last decade alone."',
          'She finally meets your eyes with laser focus. "Valentina\'s compassion is admirable, but Isadora\'s caution is statistically justified. Every exposure event in the past century has resulted in at least a dozen vampire deaths."',
          '"However," she continues, "our current isolation strategy has a 23% mortality rate among new vampires who never find guidance. We\'re essentially practicing selective survival - helping only those lucky enough to find us."'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'ask_for_recommendation',
            text: '"Based on your research, what would you recommend? What\'s the optimal path forward?"',
            consequence: 'Values data-driven decisions • Seeks analytical guidance',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'celeste_recommendation'
          },
          {
            id: 'question_statistics',
            text: '"Those numbers are sobering, but can we really base life-and-death decisions purely on statistics?"',
            consequence: 'Challenges pure logic • Values emotional/moral considerations',
            effects: [{ characterId: 'celeste', affectionChange: 8 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'beyond_statistics'
          },
          {
            id: 'ask_about_alternatives',
            text: '"Are there other options we haven\'t considered? Something between isolation and active recruitment?"',
            consequence: 'Seeks creative solutions • Shows innovative thinking',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'alternative_strategies'
          }
        ]
      },
      {
        id: 'final_decision_moment',
        title: 'The Anchor\'s Choice',
        text: [
          'The coven reassembles for your decision. The great hall feels heavier now, charged with anticipation and competing hopes. Every vampire present understands that this moment will define the future direction of their sanctuary.',
          'Valentina sits forward, her revolutionary passion barely contained. Isadora maintains her composure, but you can see the steel in her gaze. Lilith watches you with ancient patience, while the others wait to see which direction their new Anchor will guide them.',
          'The weight of centuries of tradition clashes with the urgency of change. Lives hang in the balance - both those within these walls and those struggling alone in the darkness beyond.',
          'This is your moment. The coven awaits your judgment.'
        ],
        background: '/backgrounds/grand-hall.png',
        character: characters.lilith,
        choices: [
          {
            id: 'support_valentina_fully',
            text: '"I support Valentina\'s proposal. We have a moral obligation to help our kind, even if it means taking risks."',
            consequence: 'Revolutionary alliance • Prioritizes helping others over safety',
            effects: [
              { characterId: 'valentina', affectionChange: 35 },
              { characterId: 'raven', affectionChange: 25 },
              { characterId: 'morgana', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: -25 },
              { characterId: 'luna', affectionChange: -10 }
            ],
            nextScene: 'valentina_alliance_formed'
          },
          {
            id: 'support_isadora_fully',
            text: '"Isadora is right. Our first responsibility is to protect what we\'ve built here. We cannot risk exposure."',
            consequence: 'Traditionalist alliance • Prioritizes security over expansion',
            effects: [
              { characterId: 'isadora', affectionChange: 35 },
              { characterId: 'luna', affectionChange: 25 },
              { characterId: 'elena', affectionChange: 15 },
              { characterId: 'valentina', affectionChange: -25 },
              { characterId: 'raven', affectionChange: -15 }
            ],
            nextScene: 'isadora_strategy_upheld'
          },
          {
            id: 'propose_compromise',
            text: '"I propose we start small - establish one secure safe house as a trial, with strict protocols and careful screening."',
            consequence: 'Diplomatic compromise • Balances progress with caution',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: 10 },
              { characterId: 'umbra', affectionChange: 20 }
            ],
            nextScene: 'uneasy_truce'
          },
          {
            id: 'remain_neutral',
            text: '"This decision is too important for me to make alone. The coven should vote, and I\'ll support whatever the majority decides."',
            consequence: 'Neutral stance • Defers to collective wisdom',
            effects: [
              { characterId: 'lilith', affectionChange: -5 },
              { characterId: 'valentina', affectionChange: -10 },
              { characterId: 'isadora', affectionChange: -10 },
              { characterId: 'celeste', affectionChange: 5 }
            ],
            nextScene: 'anchor_marginalized'
          }
        ]
      },
      // Advisory scenes and missing connections
      {
        id: 'anchor_role_explained',
        title: 'The Weight of the Anchor',
        text: [
          'Lilith turns to address you directly, her ancient eyes reflecting both warmth and gravity. "The Anchor is more than a symbolic position. You are our connection to the mortal world, our legitimacy."',
          '"When Cordelia held this role, her judgment often swayed crucial decisions. Vampires, despite our age, can become trapped in old patterns. The Anchor provides... perspective."',
          'Valentina nods eagerly. "Exactly why we need fresh thinking on this proposal." Isadora\'s expression suggests she disagrees about what constitutes "fresh thinking."',
          'Lilith continues, "Your voice carries weight precisely because you see us without centuries of baggage. But with that influence comes responsibility."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_responsibility',
            text: '"I understand the weight of this role. I\'m ready to help guide the coven forward."',
            consequence: 'Embraces leadership • Shows confidence in responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'valentina', affectionChange: 10 }, { characterId: 'isadora', affectionChange: 8 }],
            nextScene: 'valentina_proposal'
          },
          {
            id: 'express_uncertainty',
            text: '"That\'s a lot of pressure. I want to make the right choice, but I\'m still learning about your world."',
            consequence: 'Honest vulnerability • Shows desire to learn',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'celeste', affectionChange: 10 }],
            nextScene: 'gentle_guidance'
          },
          {
            id: 'ask_for_time',
            text: '"Could I speak with some of you individually before the formal decision? I want to understand all perspectives."',
            consequence: 'Thoughtful approach • Seeks comprehensive understanding',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'celeste', affectionChange: 15 }],
            nextScene: 'private_consultations'
          }
        ]
      },
      {
        id: 'lilith_guidance',
        title: 'The Leader\'s Dilemma',
        text: [
          'Lilith swirls the wine in her glass thoughtfully. "Leadership is rarely about having the right answer. It\'s about understanding the consequences of your choices and owning them completely."',
          '"If I were making this decision..." she pauses, "I would ask myself: what kind of world do I want to leave behind? One where we survived by hiding, or one where we thrived by taking calculated risks?"',
          '"Both Valentina and Isadora have lost people to the choices they now advocate for or against. Valentina lost her maker to isolation and despair. Isadora lost her human family to vampire hunters."',
          '"The question isn\'t what\'s safe or what\'s right - it\'s what you can live with, and what the coven can survive."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'choose_growth_over_safety',
            text: '"I\'d rather risk everything trying to build something better than slowly die from isolation."',
            consequence: 'Growth mindset • Prioritizes progress over security',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'valentina', affectionChange: 15 }],
            nextScene: 'final_decision_moment'
          },
          {
            id: 'choose_preservation',
            text: '"Sometimes survival means knowing when not to act. Preservation has its own value."',
            consequence: 'Preservation mindset • Values established stability',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'final_decision_moment'
          },
          {
            id: 'seek_synthesis',
            text: '"Maybe the answer isn\'t choosing between their perspectives, but finding a way to honor both."',
            consequence: 'Synthesis approach • Seeks to bridge divides',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'umbra', affectionChange: 15 }],
            nextScene: 'final_decision_moment'
          }
        ]
      },
      {
        id: 'celeste_recommendation',
        title: 'The Data-Driven Path',
        text: [
          'Celeste pulls up a detailed chart on her tablet. "Based on my analysis, I recommend a phased approach. Start with digital outreach - encrypted networks, secure communication channels."',
          '"We could establish virtual safe spaces first, provide guidance remotely. Lower risk, high impact. If a newly turned vampire can\'t find physical sanctuary, at least they can find information and support."',
          '"Phase two would be physical safe houses, but only after we\'ve refined our security protocols and established proper screening procedures."',
          '"The data suggests this approach has a 67% success rate with only 12% exposure risk. It\'s the optimal balance between Valentina\'s compassion and Isadora\'s caution."'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_phased_approach',
            text: '"That\'s brilliant. A measured, intelligent approach that addresses both concerns."',
            consequence: 'Evidence-based decision • Values systematic progress',
            effects: [{ characterId: 'celeste', affectionChange: 30 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'final_decision_moment'
          },
          {
            id: 'worry_about_delay',
            text: '"But how many vampires will die while we\'re implementing phases? Sometimes urgency matters more than optimization."',
            consequence: 'Urgency focus • Prioritizes immediate action over planning',
            effects: [{ characterId: 'valentina', affectionChange: 18 }, { characterId: 'celeste', affectionChange: 5 }],
            nextScene: 'final_decision_moment'
          },
          {
            id: 'appreciate_methodology',
            text: '"I appreciate the thorough analysis. This gives me a much clearer framework for making the decision."',
            consequence: 'Values preparation • Shows respect for research',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'final_decision_moment'
          }
        ]
      },
      // Outcome scenes based on final decision
      {
        id: 'valentina_alliance_formed',
        title: 'The Revolutionary Path',
        text: [
          'The hall erupts in a mixture of cheers and concerned murmurs as you announce your support for Valentina\'s proposal. The revolutionary vampire rises, her eyes shining with vindicated passion.',
          '"Thank you," Valentina says, her voice thick with emotion. "You\'ve just saved countless lives. Together, we\'ll build a network that ensures no vampire faces the darkness alone."',
          'Isadora stands stiffly, her face a mask of controlled disappointment. "I hope you understand the magnitude of what you\'ve just committed us to," she says before leaving the hall.',
          'Lilith nods slowly. "The path is chosen. Now we must walk it carefully." You sense that your decision has fundamentally altered the coven\'s dynamics and your place within it.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'plan_immediate_action',
            text: '"Let\'s start planning immediately. What are our first steps?"',
            consequence: 'Action-oriented leadership • Shows commitment to implementation',
            effects: [{ characterId: 'valentina', affectionChange: 20 }, { characterId: 'raven', affectionChange: 15 }],
            nextScene: 'revolutionary_planning'
          },
          {
            id: 'address_opposition',
            text: '"I need to speak with Isadora. We can\'t move forward with the coven divided."',
            consequence: 'Diplomatic approach • Seeks to heal division',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'isadora', affectionChange: 10 }],
            nextScene: 'bridging_divisions'
          },
          {
            id: 'establish_safeguards',
            text: '"Before we begin, I want to establish clear protocols to minimize the risks Isadora mentioned."',
            consequence: 'Cautious implementation • Balances progress with security',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'valentina', affectionChange: 10 }],
            nextScene: 'careful_revolution'
          }
        ]
      },
      {
        id: 'isadora_strategy_upheld',
        title: 'The Traditionalist Victory',
        text: [
          'A wave of relief washes over the traditionalist faction as you announce your support for Isadora\'s cautious approach. The socialite vampire nods approvingly, vindicated in her warnings.',
          '"Wisdom," Isadora says with satisfaction. "True leadership recognizes that preservation of what we have is worth more than the promise of what might be."',
          'Valentina\'s face falls, her revolutionary fervor dampened but not extinguished. "I understand your caution, but I hope you can live with the consequences of inaction."',
          'The coven settles into an uneasy quiet. You\'ve chosen safety, but you can\'t shake the feeling that some opportunities, once missed, may never return.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'strengthen_defenses',
            text: '"Let\'s focus on making our sanctuary even more secure and self-sufficient."',
            consequence: 'Security focus • Commits to fortress mentality',
            effects: [{ characterId: 'isadora', affectionChange: 25 }, { characterId: 'luna', affectionChange: 15 }],
            nextScene: 'fortress_ravencroft'
          },
          {
            id: 'console_valentina',
            text: '"Valentina, I hope you understand this doesn\'t mean we don\'t care about other vampires."',
            consequence: 'Compassionate explanation • Attempts to soften rejection',
            effects: [{ characterId: 'valentina', affectionChange: 8 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'gentle_traditionalism'
          },
          {
            id: 'future_reconsideration',
            text: '"This is our decision for now, but we can revisit it as circumstances change."',
            consequence: 'Flexible stance • Leaves door open for future change',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'celeste', affectionChange: 12 }],
            nextScene: 'strategic_patience'
          }
        ]
      },
      {
        id: 'uneasy_truce',
        title: 'The Middle Path',
        text: [
          'Your compromise proposal creates a thoughtful silence in the hall. Both Valentina and Isadora consider your words, weighing the merits of a measured approach.',
          '"A trial period," Lilith muses. "Limited scope, careful observation. It has precedent in our history." She looks between the two factions. "This could work."',
          'Valentina nods slowly. "It\'s not everything I hoped for, but it\'s progress. We could save lives while proving our approach can work safely."',
          'Isadora remains skeptical but concedes. "If we proceed with extreme caution and maintain strict oversight, perhaps the risks can be managed."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_oversight_committee',
            text: '"I propose we form an oversight committee with representatives from both perspectives."',
            consequence: 'Structured compromise • Creates balanced governance',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'celeste', affectionChange: 18 }, { characterId: 'valentina', affectionChange: 12 }, { characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'volunteer_personal_oversight',
            text: '"I\'ll personally oversee the trial program to ensure it meets everyone\'s standards."',
            consequence: 'Personal responsibility • Shows hands-on leadership',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'valentina', affectionChange: 15 }, { characterId: 'isadora', affectionChange: 10 }],
            nextScene: 'anchor_oversight'
          },
          {
            id: 'set_clear_metrics',
            text: '"Let\'s establish clear success metrics and timeline for evaluation. Data should guide our next steps."',
            consequence: 'Analytical approach • Values measurable outcomes',
            effects: [{ characterId: 'celeste', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'measured_progress'
          }
        ]
      },
      {
        id: 'anchor_marginalized',
        title: 'The Neutral Ground',
        text: [
          'Your decision to remain neutral creates an uncomfortable silence in the hall. The assembled vampires exchange glances, uncertain how to proceed without clear guidance from their Anchor.',
          'Lilith clears her throat diplomatically. "Very well. We\'ll proceed to a formal vote among the coven members."',
          'However, you notice the subtle shift in how others regard you. By refusing to use your influence, you\'ve inadvertently diminished it. Future discussions may proceed without as much deference to your opinion.',
          'The vote is close but ultimately favors maintaining the status quo, leaving Valentina\'s proposal tabled indefinitely.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_diminished_role',
            text: '"I understand. Perhaps it\'s better if the coven makes these decisions collectively."',
            consequence: 'Accepts reduced influence • Embraces democratic approach',
            effects: [{ characterId: 'celeste', affectionChange: 8 }],
            nextScene: 'democratic_coven'
          },
          {
            id: 'regret_neutrality',
            text: '"I should have taken a stand. Leadership requires making difficult choices."',
            consequence: 'Learns from mistake • Shows growth potential',
            effects: [{ characterId: 'lilith', affectionChange: 10 }, { characterId: 'valentina', affectionChange: 5 }],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'defend_neutrality',
            text: '"Sometimes the most important thing a leader can do is ensure all voices are heard equally."',
            consequence: 'Defends democratic values • Maintains neutral stance',
            effects: [{ characterId: 'celeste', affectionChange: 12 }, { characterId: 'umbra', affectionChange: 10 }],
            nextScene: 'principled_neutrality'
          }
        ]
      },
      // Missing scenes from Chapter 1
      {
        id: 'manor_exploration',
        title: 'Exploring the Manor',
        text: [
          'The corridors of Ravencroft Manor stretch before you, filled with centuries of history. Paintings of stern ancestors line the walls, their eyes seeming to follow your movement.',
          'Each room tells a story - the library with its ancient tomes, the conservatory where moonlight streams through stained glass, the drawing room where shadows seem to dance.',
          'You sense this exploration is more than curiosity. The manor itself seems to be evaluating you, determining if you\'re worthy of the secrets it holds.'
        ],
        choices: [
          {
            id: 'examine_paintings',
            text: 'Study the ancestral portraits more closely.',
            consequence: 'Investigative approach • Shows interest in family history',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'cordelia_memories'
          },
          {
            id: 'explore_library',
            text: 'Head to the library to examine the ancient books.',
            consequence: 'Scholarly approach • Shows intellectual curiosity',
            effects: [{ characterId: 'celeste', affectionChange: 12 }],
            nextScene: 'forbidden_knowledge_access'
          },
          {
            id: 'visit_conservatory',
            text: 'Enter the moonlit conservatory.',
            consequence: 'Aesthetic appreciation • Shows sensitivity to beauty',
            effects: [{ characterId: 'elena', affectionChange: 10 }],
            nextScene: 'manor_secrets'
          }
        ]
      },
      {
        id: 'worthiness_test',
        title: 'The Test of Worth',
        text: [
          'Lilith observes you carefully as the other vampires watch with varying degrees of interest and skepticism.',
          '"Every Anchor must prove themselves worthy of the trust we place in them," she explains. "Cordelia earned our respect through her courage, wisdom, and unwavering loyalty."',
          '"The question is: what qualities do you possess that make you suitable to follow in her footsteps?"',
          'The weight of their collective gaze settles upon you. This moment will define how the coven sees you going forward.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'demonstrate_courage',
            text: '"I may not know everything about your world, but I\'m not afraid to learn and face whatever comes."',
            consequence: 'Shows bravery • Willing to face unknown dangers',
            effects: [{ characterId: 'raven', affectionChange: 15 }, { characterId: 'valentina', affectionChange: 12 }],
            nextScene: 'courage_recognition'
          },
          {
            id: 'show_compassion',
            text: '"I believe every being deserves understanding and protection, regardless of what they are."',
            consequence: 'Shows empathy • Values all forms of life',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'natural_acceptance'
          },
          {
            id: 'offer_practical_skills',
            text: '"I bring fresh perspective and practical skills that could benefit everyone here."',
            consequence: 'Pragmatic approach • Focuses on useful contributions',
            effects: [{ characterId: 'celeste', affectionChange: 15 }, { characterId: 'isadora', affectionChange: 10 }],
            nextScene: 'practical_arrangements'
          }
        ]
      },
      {
        id: 'revelation_preparation',
        title: 'Preparing for Truth',
        text: [
          'The atmosphere in the room shifts as Lilith prepares to reveal the fundamental truth of what you\'ve inherited.',
          '"What I\'m about to tell you will change everything you thought you knew about Cordelia, about this manor, and about the world itself."',
          'She pauses, studying your face. "Some mortals cannot handle the reality of our existence. Others embrace it with surprising grace."',
          '"Tell me - are you prepared to learn truths that most humans spend their entire lives never knowing?"'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ready_for_truth',
            text: '"I need to know the truth, whatever it is. I can handle it."',
            consequence: 'Direct acceptance • Shows mental fortitude',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'arrangement_explanation'
          },
          {
            id: 'express_nervousness',
            text: '"I\'m nervous, but I need to understand what Cordelia was involved in."',
            consequence: 'Honest vulnerability • Shows courage despite fear',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'seraphina', affectionChange: 8 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'ask_for_support',
            text: '"This feels overwhelming. Will you help me understand?"',
            consequence: 'Seeks guidance • Shows wisdom in asking for help',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'gentle_guidance'
          }
        ]
      },
      {
        id: 'respectful_entry',
        title: 'A Respectful Introduction',
        text: [
          'You take a deep breath and step forward with careful composure, showing respect for what is clearly a significant moment.',
          '"I\'m honored to meet you all. Cordelia spoke of her dear friends often, though I\'m beginning to understand there was much she didn\'t tell me."',
          'Your respectful approach seems to ease some of the tension in the room. Several of the assembled figures nod approvingly.',
          'Lilith\'s expression softens slightly. "Respect and humility. Cordelia chose her successor well, it seems."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_cordelia_role',
            text: '"Could you help me understand what role Cordelia played here?"',
            consequence: 'Seeks understanding • Shows desire to honor legacy',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_role_detailed'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for welcoming me. I hope I can live up to whatever trust you placed in her."',
            consequence: 'Shows appreciation • Acknowledges responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'isadora', affectionChange: 8 }],
            nextScene: 'legacy_acceptance'
          },
          {
            id: 'observe_carefully',
            text: 'Continue to observe and listen, letting them guide the conversation.',
            consequence: 'Patient observation • Shows wisdom in restraint',
            effects: [{ characterId: 'celeste', affectionChange: 10 }, { characterId: 'luna', affectionChange: 8 }],
            nextScene: 'coven_hierarchy_revealed'
          }
        ]
      },
      // Additional missing scenes - Batch 1
      {
        id: 'gracious_apology_accepted',
        title: 'Grace in Acceptance',
        text: [
          'The tension in the room dissolves as your sincere apology is met with understanding nods.',
          '"No harm done," Lilith says warmly. "Your reaction was entirely natural. We forget sometimes how overwhelming our world can be to mortals."',
          'Morgana steps forward with a gentle smile. "I remember my first encounter with the supernatural. I was terrified and fascinated in equal measure."',
          'Your gracious handling of an awkward moment seems to have earned you some respect among the assembled vampires.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_curiosity',
            text: '"I\'m still fascinated, honestly. There\'s so much I want to understand."',
            consequence: 'Shows intellectual curiosity • Open to learning',
            effects: [{ characterId: 'celeste', affectionChange: 15 }, { characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'structured_education'
          },
          {
            id: 'ask_about_morgana',
            text: '"Morgana, what was your first supernatural encounter like?"',
            consequence: 'Personal interest • Builds connections through stories',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'morgana_past'
          },
          {
            id: 'show_appreciation',
            text: '"Thank you all for being so understanding. I promise to do better."',
            consequence: 'Shows humility • Commits to improvement',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'trust_established'
          }
        ]
      },
      {
        id: 'practical_philosophy',
        title: 'Philosophy in Practice',
        text: [
          'Your practical approach to the supernatural revelation intrigues several of the vampires.',
          '"Interesting," Celeste observes. "Most humans either flee in terror or become obsessed with the mystical aspects. You\'re looking for practical applications."',
          'Isadora nods approvingly. "Pragmatism is valuable. Cordelia had that same quality - she always asked \'what does this mean for daily life?\' rather than getting lost in romantic notions."',
          'Your grounded approach seems to resonate with the more practical-minded members of the coven.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_daily_life',
            text: '"Exactly. How does this arrangement actually work day-to-day?"',
            consequence: 'Practical focus • Wants concrete understanding',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'inquire_about_cordelia',
            text: '"What practical challenges did Cordelia face in this role?"',
            consequence: 'Learning from precedent • Values experience',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_challenges'
          },
          {
            id: 'discuss_expectations',
            text: '"What practical expectations do you have for me as the new Anchor?"',
            consequence: 'Direct communication • Seeks clarity on responsibilities',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'anchor_powers_explained'
          }
        ]
      },
      {
        id: 'cordelia_memories',
        title: 'Echoes of Cordelia',
        text: [
          'As you study the ancestral portraits, one face draws your attention - a woman who bears a striking resemblance to Cordelia, painted centuries ago.',
          '"That\'s Cordelia\'s ancestor, Evangeline," Lilith explains, appearing beside you. "The bloodline has always had a connection to our kind."',
          '"Cordelia used to stand here just as you are now, trying to understand her place in a story much larger than herself."',
          'The weight of inheritance feels heavier as you realize this connection spans generations.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_bloodline',
            text: '"Is there something special about Cordelia\'s family line?"',
            consequence: 'Investigates heritage • Seeks deeper understanding',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_psychic_legacy'
          },
          {
            id: 'express_connection',
            text: '"I feel like I\'m following in footsteps I don\'t fully understand yet."',
            consequence: 'Vulnerable admission • Shows weight of responsibility',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'legacy_continuation'
          },
          {
            id: 'ask_about_cordelia_feelings',
            text: '"How did Cordelia handle this overwhelming sense of destiny?"',
            consequence: 'Seeks emotional guidance • Values personal experience',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'cordelia_journey'
          }
        ]
      },
      {
        id: 'arrangement_explanation',
        title: 'The Ancient Compact',
        text: [
          'Lilith settles into a chair, her ancient eyes reflecting the weight of centuries.',
          '"The arrangement is simple in concept, complex in practice. We are vampires - immortal, powerful, but bound by certain... limitations."',
          '"We cannot simply exist in the modern world without legitimate connections to humanity. Cordelia provided that legitimacy."',
          '"As our Anchor, you become the bridge between our world and yours. In return, you receive our protection, our knowledge, and our friendship."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_limitations',
            text: '"What kind of limitations do you face?"',
            consequence: 'Seeks specific information • Understanding constraints',
            effects: [{ characterId: 'lilith', affectionChange: 12 }, { characterId: 'celeste', affectionChange: 8 }],
            nextScene: 'protection_discussion'
          },
          {
            id: 'inquire_about_benefits',
            text: '"What does this protection and knowledge actually mean?"',
            consequence: 'Practical inquiry • Wants concrete understanding',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'isadora', affectionChange: 10 }],
            nextScene: 'magical_education'
          },
          {
            id: 'accept_arrangement',
            text: '"I understand. I\'m willing to honor Cordelia\'s commitment."',
            consequence: 'Direct acceptance • Shows commitment to legacy',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'valentina', affectionChange: 15 }],
            nextScene: 'arrangement_honored'
          }
        ]
      },
      {
        id: 'manor_secrets',
        title: 'Hidden Depths',
        text: [
          'The conservatory is breathtaking in the moonlight, but as you explore, you notice subtle details that speak of deeper mysteries.',
          'Certain plants seem to shimmer with an otherworldly glow. Some of the architectural details don\'t match any historical period you recognize.',
          'Elena appears silently beside you like a melancholy spirit. Her ash-blonde hair catches the moonlight, and her pale gray eyes hold centuries of artistic vision. Paint stains on her delicate fingers and the ethereal fragility of her movements mark her as someone who pours her immortal soul into her art.',
          'Her artistic eye notes your observation. "Beautiful, isn\'t it? And far older than it appears." She wears a simple black dress that emphasizes her translucent porcelain skin.',
          '"This manor has been... modified over the centuries to serve needs beyond those of ordinary humans."'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_modifications',
            text: '"What kind of modifications? This is fascinating."',
            consequence: 'Shows interest in supernatural architecture • Academic curiosity',
            effects: [{ characterId: 'elena', affectionChange: 15 }, { characterId: 'celeste', affectionChange: 10 }],
            nextScene: 'historical_tour'
          },
          {
            id: 'appreciate_beauty',
            text: '"It\'s incredible how beauty and mystery can coexist like this."',
            consequence: 'Aesthetic appreciation • Shows artistic sensitivity',
            effects: [{ characterId: 'elena', affectionChange: 20 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'express_wonder',
            text: '"I feel like Alice stepping through the looking glass."',
            consequence: 'Literary reference • Shows wonder at transformation',
            effects: [{ characterId: 'elena', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'sanctuary_awakening'
          }
        ]
      },
      // Critical missing scenes - Batch 2
      {
        id: 'protection_discussion',
        title: 'Understanding Protection',
        text: [
          'Lilith explains the nature of vampire limitations with careful detail.',
          '"We cannot easily navigate modern bureaucracy - no birth certificates, no official identities that withstand scrutiny. Cordelia provided legal legitimacy."',
          '"More than that, she offered protection from those who would hunt us. A mortal advocate, someone who could speak for us in the human world."',
          '"In return, we offered her knowledge of the supernatural world, protection from its dangers, and friendship that spans centuries."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_hunters',
            text: '"Are there really people who hunt vampires?"',
            consequence: 'Investigates threats • Shows awareness of danger',
            effects: [{ characterId: 'raven', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'danger_discussion'
          },
          {
            id: 'understand_legitimacy',
            text: '"I see. You need someone who exists in official records to vouch for you."',
            consequence: 'Grasps practical needs • Shows understanding',
            effects: [{ characterId: 'celeste', affectionChange: 18 }, { characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'practical_coexistence'
          },
          {
            id: 'accept_role',
            text: '"I understand the responsibility. I\'m willing to take it on."',
            consequence: 'Accepts commitment • Shows dedication',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'valentina', affectionChange: 15 }],
            nextScene: 'acceptance_path'
          }
        ]
      },
      {
        id: 'acceptance_path',
        title: 'The Path Forward',
        text: [
          'Your acceptance creates a wave of relief and approval throughout the room.',
          '"Welcome, then, to our sanctuary," Lilith says formally. "You are now under our protection, and we under yours."',
          'Morgana steps forward with a gentle smile. "It\'s been too long since we\'ve had an Anchor. The manor feels more complete already."',
          'You sense this is more than just acceptance - it\'s the beginning of a profound transformation in your life.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_next_steps',
            text: '"What happens now? How do I learn what I need to know?"',
            consequence: 'Practical focus • Ready to begin',
            effects: [{ characterId: 'celeste', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'structured_education'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for welcoming me. I won\'t let you down."',
            consequence: 'Shows appreciation • Commits to excellence',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'trust_established'
          },
          {
            id: 'ask_about_residents',
            text: '"I\'d love to get to know everyone better. Could you introduce me properly?"',
            consequence: 'Social approach • Builds relationships',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'elena', affectionChange: 12 }],
            nextScene: 'resident_introductions'
          }
        ]
      },
      {
        id: 'proof_demanded',
        title: 'Skeptical Inquiry',
        text: [
          'Your demand for proof creates a tense moment in the room. Several vampires exchange glances.',
          'Raven steps forward, her predatory grace unmistakable. "Proof? How much proof do you need?"',
          'Her canines extend visibly, her eyes flash with an inhuman light, and shadows seem to bend around her.',
          'The demonstration is brief but undeniable. The supernatural is real, and you\'re standing in a room full of it.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_proof',
            text: '"That\'s... that\'s definitely proof. I believe you."',
            consequence: 'Accepts evidence • Shows adaptability',
            effects: [{ characterId: 'raven', affectionChange: 12 }, { characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'amazed_acceptance'
          },
          {
            id: 'ask_for_explanation',
            text: '"Incredible. How is any of this possible?"',
            consequence: 'Scientific curiosity • Seeks understanding',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'raven', affectionChange: 8 }],
            nextScene: 'nature_explanation'
          },
          {
            id: 'step_back_respectfully',
            text: '"I\'m sorry I doubted you. This is just... a lot to process."',
            consequence: 'Apologetic response • Shows respect',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'choice_explanation',
        title: 'Understanding Choice',
        text: [
          'Lilith\'s expression becomes more serious as she addresses your hesitation.',
          '"I understand your uncertainty. This is not a decision to be made lightly, and we respect that."',
          '"But understand this - once you know what we are, you cannot simply return to your old life unchanged. The supernatural world has revealed itself to you."',
          '"You can choose to be part of it as our Anchor, or... we will need to discuss alternatives."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_alternatives',
            text: '"What alternatives are you talking about?"',
            consequence: 'Seeks clarification • Wants full understanding',
            effects: [{ characterId: 'lilith', affectionChange: 10 }, { characterId: 'celeste', affectionChange: 8 }],
            nextScene: 'provisional_agreement'
          },
          {
            id: 'accept_responsibility',
            text: '"I understand. I\'ll honor Cordelia\'s commitment."',
            consequence: 'Accepts duty • Shows maturity',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'arrangement_honored'
          },
          {
            id: 'ask_for_time',
            text: '"Could I have some time to think about this? It\'s overwhelming."',
            consequence: 'Requests consideration • Shows thoughtfulness',
            effects: [{ characterId: 'lilith', affectionChange: 15 }, { characterId: 'luna', affectionChange: 10 }],
            nextScene: 'contemplation_time'
          }
        ]
      },
      {
        id: 'practical_arrangements',
        title: 'The Practical Reality',
        text: [
          'Your offer of practical skills intrigues several of the more pragmatically minded vampires.',
          'Celeste nods approvingly. "Practical skills are invaluable. The modern world requires constant adaptation."',
          'Isadora leans forward with interest. "What specific skills do you bring? We\'ve found that fresh perspectives on contemporary life are often our greatest asset."',
          'Your practical approach seems to resonate with those who value concrete contributions over romantic notions.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_modern_knowledge',
            text: '"I understand modern technology, social media, contemporary culture - things that might be challenging for immortals."',
            consequence: 'Offers modern expertise • Practical value',
            effects: [{ characterId: 'celeste', affectionChange: 25 }, { characterId: 'isadora', affectionChange: 18 }],
            nextScene: 'partnership_explanation'
          },
          {
            id: 'mention_professional_skills',
            text: '"I have professional experience that could help with legal and administrative needs."',
            consequence: 'Professional competence • Addresses specific needs',
            effects: [{ characterId: 'isadora', affectionChange: 22 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'offer_research_abilities',
            text: '"I\'m good at research and analysis. I could help with information gathering and problem-solving."',
            consequence: 'Analytical skills • Intellectual contribution',
            effects: [{ characterId: 'celeste', affectionChange: 30 }, { characterId: 'luna', affectionChange: 15 }],
            nextScene: 'structured_education'
          }
        ]
      },
      // Essential connection scenes - Batch 3
      {
        id: 'cordelia_journey',
        title: 'Cordelia\'s Path',
        text: [
          'Lilith\'s eyes grow distant as she recalls Cordelia\'s early days.',
          '"She struggled at first, as anyone would. The weight of responsibility, the fear of making mistakes that could endanger everyone."',
          '"But she found her strength in connection - she learned each of our stories, understood our individual needs and fears."',
          '"By the end, she wasn\'t just our Anchor. She was family. That\'s what made her loss so... difficult."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_similar_commitment',
            text: '"I want to follow her example. I want to be family too."',
            consequence: 'Deep commitment • Shows desire for genuine connection',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'family_appreciation'
          },
          {
            id: 'ask_about_stories',
            text: '"Could you help me learn everyone\'s stories, the way she did?"',
            consequence: 'Follows precedent • Shows interest in individuals',
            effects: [{ characterId: 'lilith', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'individual_connections'
          },
          {
            id: 'express_sympathy',
            text: '"I\'m sorry for your loss. She must have meant a great deal to all of you."',
            consequence: 'Shows empathy • Acknowledges grief',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'luna', affectionChange: 15 }],
            nextScene: 'shared_grief'
          }
        ]
      },
      {
        id: 'patient_courtship',
        title: 'The Gentle Approach',
        text: [
          'Morgana steps forward with a understanding smile, her artistic nature appreciating the delicate situation.',
          '"There\'s no rush," she says gently. "The most beautiful connections develop slowly, like a painting taking shape."',
          '"We\'ve waited this long for a new Anchor. We can wait a little longer for you to feel comfortable with us."',
          'Her patience seems to ease some of the pressure you\'ve been feeling.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_patience',
            text: '"Thank you. That means more than you know."',
            consequence: 'Shows gratitude • Builds trust through patience',
            effects: [{ characterId: 'morgana', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'trust_established'
          },
          {
            id: 'ask_about_art',
            text: '"You mentioned painting. Are you an artist?"',
            consequence: 'Personal interest • Builds individual connection',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_artistic_bond'
          },
          {
            id: 'express_readiness',
            text: '"Actually, I think I\'m ready now. Your kindness helps."',
            consequence: 'Overcomes hesitation • Shows positive response to care',
            effects: [{ characterId: 'morgana', affectionChange: 18 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'arrangement_honored'
          }
        ]
      },
      {
        id: 'morgana_past',
        title: 'Shadows of the Past',
        text: [
          'Morgana\'s expression becomes thoughtful, tinged with ancient sadness.',
          '"I was a young woman in Renaissance Italy when I encountered my first vampire. I thought I was going mad - seeing shadows move, hearing whispers in empty rooms."',
          '"When I finally met him, he was kind but tragic. He taught me that the world held wonders and terrors beyond human imagination."',
          '"Eventually, he offered me a choice - remain human and forget, or join him in immortality. I chose... differently than most expect."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_choice',
            text: '"What choice did you make? Why was it different?"',
            consequence: 'Shows deep interest • Wants to understand her journey',
            effects: [{ characterId: 'morgana', affectionChange: 22 }],
            nextScene: 'morgana_emotional_connection'
          },
          {
            id: 'relate_to_experience',
            text: '"I can relate to that feeling of thinking you might be going mad."',
            consequence: 'Shares vulnerability • Creates emotional bond',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 10 }],
            nextScene: 'mutual_understanding'
          },
          {
            id: 'appreciate_story',
            text: '"Thank you for sharing that with me. It helps me understand."',
            consequence: 'Shows gratitude • Values personal revelation',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            nextScene: 'philosophical_discussion'
          }
        ]
      },
      {
        id: 'philosophical_discussion',
        title: 'Questions of Existence',
        text: [
          'Seraphina moves closer, her fallen angel nature drawn to deeper questions.',
          '"These encounters force us to confront fundamental questions about existence, purpose, the nature of good and evil."',
          '"What does it mean to be human when you discover beings who transcend human limitations? What does it mean to be moral when the world operates by different rules?"',
          'Her questions hang in the air, challenging you to think beyond simple acceptance or rejection.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'engage_philosophically',
            text: '"Those are profound questions. I think morality transcends species - it\'s about how we treat others."',
            consequence: 'Philosophical depth • Shows ethical thinking',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }, { characterId: 'celeste', affectionChange: 15 }],
            nextScene: 'seraphina_philosophical_bond'
          },
          {
            id: 'admit_confusion',
            text: '"I don\'t know. These questions are overwhelming, but important."',
            consequence: 'Honest uncertainty • Shows intellectual humility',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'contemplation_time'
          },
          {
            id: 'focus_on_practical',
            text: '"Those are important questions, but right now I need to focus on the practical reality."',
            consequence: 'Pragmatic approach • Prioritizes immediate needs',
            effects: [{ characterId: 'celeste', affectionChange: 15 }, { characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'practical_arrangements'
          }
        ]
      },
      {
        id: 'umbra_first_encounter',
        title: 'A Shy Introduction',
        text: [
          'In a corner of the room, you notice a figure that seems to be made of living shadow, with points of starlight twinkling within the darkness.',
          'The entity notices your gaze and seems to shrink back, clearly shy and uncertain.',
          '"That\'s Umbra," Lilith explains gently. "They\'re... unique, even among us. An eldritch being who found sanctuary here."',
          'Umbra waves tentatively, their form shifting like liquid night sky, clearly wanting to be friendly but unsure how.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'wave_back_gently',
            text: 'Wave back with a warm smile.',
            consequence: 'Gentle acceptance • Shows kindness to the shy',
            effects: [{ characterId: 'umbra', affectionChange: 18 }],
            nextScene: 'umbra_grateful_response'
          },
          {
            id: 'approach_carefully',
            text: 'Take a step closer and speak softly. "Hello, Umbra. I\'m pleased to meet you."',
            consequence: 'Direct but gentle approach • Shows courage and kindness',
            effects: [{ characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'umbra_friendship_begins'
          },
          {
            id: 'ask_lilith_quietly',
            text: 'Whisper to Lilith: "Should I try to talk to them, or would that be overwhelming?"',
            consequence: 'Considerate approach • Shows sensitivity to comfort levels',
            effects: [{ characterId: 'umbra', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'umbra_shares_story'
          }
        ]
      },
      {
        id: 'gentle_guidance',
        title: 'Patient Understanding',
        text: [
          'Lilith\'s expression softens with maternal warmth as she recognizes your need for support.',
          '"Of course we\'ll help you understand. This is precisely what Cordelia meant when she said you had the right temperament for this role."',
          '"Wisdom isn\'t about having all the answers immediately. It\'s about knowing when to ask for guidance and being willing to learn."',
          'Her reassurance helps calm the overwhelming nature of everything you\'ve discovered.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_cordelia_temperament',
            text: '"What did Cordelia mean about my temperament? How did she know?"',
            consequence: 'Seeks deeper understanding • Wants to know Cordelia\'s reasoning',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'cordelia_choice_story'
          },
          {
            id: 'request_structured_learning',
            text: '"Could we approach this systematically? I learn better with structure."',
            consequence: 'Organized approach • Shows good learning strategy',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'structured_education'
          },
          {
            id: 'express_gratitude_trust',
            text: '"Thank you for being patient with me. I want to earn the trust you\'re showing."',
            consequence: 'Shows appreciation • Commits to earning confidence',
            effects: [{ characterId: 'lilith', affectionChange: 22 }, { characterId: 'seraphina', affectionChange: 12 }],
            nextScene: 'trust_established'
          }
        ]
      },
      // Comprehensive missing scenes - Final batch
      {
        id: 'seraphina_fall_story',
        title: 'The Fall from Grace',
        text: [
          'Seraphina\'s expression becomes distant, touched with ancient sorrow.',
          '"I was once something... different. Pure, you might say. But purity without understanding is merely ignorance."',
          '"I chose to fall, to experience the full spectrum of existence - love, loss, passion, pain. Only through understanding darkness can one truly appreciate light."',
          '"Now I exist between realms, neither fully divine nor wholly earthbound. It\'s a lonely existence, but one I chose freely."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_admiration',
            text: '"That took incredible courage. You chose experience over certainty."',
            consequence: 'Admires her choice • Shows respect for difficult decisions',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'seraphina_love_capacity'
          },
          {
            id: 'offer_understanding',
            text: '"You don\'t have to be lonely anymore. You have family here."',
            consequence: 'Offers companionship • Shows empathy for isolation',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'spiritual_connection'
          },
          {
            id: 'ask_about_regrets',
            text: '"Do you ever regret your choice?"',
            consequence: 'Deep personal question • Shows interest in her inner life',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'seraphina_purpose_recognition'
          }
        ]
      },
      {
        id: 'mortal_love_path',
        title: 'The Beauty of Mortality',
        text: [
          'The conversation shifts to deeper themes as several vampires consider your unique perspective.',
          '"There\'s something precious about mortal love," Morgana muses. "It\'s intense because it\'s fleeting. Every moment matters because there are only so many."',
          'Seraphina nods thoughtfully. "Immortal love develops differently - slowly, with the luxury of eternity. But mortal love... it burns bright and beautiful."',
          'Their words make you consider what you might be offering these ancient beings - not just legitimacy, but the gift of mortal perspective on love and connection.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_mortal_perspective',
            text: '"Maybe that\'s what I can offer - a reminder of what it means to love with urgency and passion."',
            consequence: 'Philosophical insight • Offers unique value',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'love_development_path'
          },
          {
            id: 'ask_about_immortal_love',
            text: '"What is immortal love like? How does it feel different?"',
            consequence: 'Curious about their experience • Shows interest in understanding',
            effects: [{ characterId: 'seraphina', affectionChange: 18 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'bond_strength_explanation'
          },
          {
            id: 'suggest_balance',
            text: '"Maybe we can learn from each other - the passion of mortality and the depth of immortality."',
            consequence: 'Seeks mutual understanding • Proposes exchange of perspectives',
            effects: [{ characterId: 'morgana', affectionChange: 22 }, { characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'mutual_recognition'
          }
        ]
      },
      {
        id: 'contemplation_time',
        title: 'Time to Reflect',
        text: [
          'Lilith nods with understanding. "Of course. This is not a decision to be rushed."',
          '"Take all the time you need. Walk the grounds, explore the manor, speak with whoever you\'d like. When you\'re ready, we\'ll be here."',
          'The pressure lifts from your shoulders. Having time to process everything makes the overwhelming situation feel more manageable.',
          'You sense this patience is itself a gift - showing you the kind of consideration you could expect as part of this unusual family.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'explore_manor_alone',
            text: '"I\'d like to explore the manor and get a feel for this place."',
            consequence: 'Independent exploration • Shows desire to understand environment',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'manor_tour_begins'
          },
          {
            id: 'ask_for_company',
            text: '"Could someone show me around? I\'d like to learn more about everyone."',
            consequence: 'Social approach • Shows interest in building relationships',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'elena', affectionChange: 12 }],
            nextScene: 'guided_tour'
          },
          {
            id: 'request_quiet_conversation',
            text: '"Actually, could I speak with you privately, Lilith? I have some questions."',
            consequence: 'Seeks guidance • Values leadership perspective',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'private_consultations'
          }
        ]
      },
      {
        id: 'cordelia_wisdom',
        title: 'Lessons from the Past',
        text: [
          'Lilith shares more of Cordelia\'s wisdom as you seek to understand your role.',
          '"Cordelia once told me that being an Anchor wasn\'t about being perfect - it was about being present. Being genuinely interested in each person\'s story."',
          '"She said the hardest part wasn\'t learning our supernatural natures, but remembering that underneath it all, we\'re still individuals with hopes, fears, and dreams."',
          '"\'Love them as they are,\' she said, \'not as what they represent.\' That\'s what made her special."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_individual_focus',
            text: '"I want to know each of you as individuals. Will you help me learn your stories?"',
            consequence: 'Personal commitment • Shows desire for genuine connection',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'individual_connections'
          },
          {
            id: 'ask_about_hopes_dreams',
            text: '"What hopes and dreams do immortals have? I\'d love to understand."',
            consequence: 'Deep curiosity • Shows interest in their humanity',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }, { characterId: 'elena', affectionChange: 15 }],
            nextScene: 'philosophical_connection'
          },
          {
            id: 'express_determination',
            text: '"I want to honor her memory by following her example. I\'ll try to love you all as you are."',
            consequence: 'Emotional commitment • Shows dedication to Cordelia\'s legacy',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'umbra', affectionChange: 18 }],
            nextScene: 'family_appreciation'
          }
        ]
      },
      {
        id: 'trust_established',
        title: 'Foundations of Trust',
        text: [
          'Your sincere approach and willingness to learn has created a foundation of trust with the coven.',
          '"Trust is earned slowly and lost quickly," Lilith observes. "But you\'ve made an excellent beginning."',
          'Around the room, you see nods of approval and genuine smiles. The initial tension has transformed into cautious optimism.',
          'You sense that while there\'s still much to learn and prove, you\'ve successfully taken the first crucial steps toward acceptance.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_next_steps',
            text: '"What should I focus on learning first?"',
            consequence: 'Practical approach • Ready to begin education',
            effects: [{ characterId: 'celeste', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'structured_education'
          },
          {
            id: 'offer_reciprocal_trust',
            text: '"I trust you all too. Thank you for being patient with me."',
            consequence: 'Mutual trust • Shows appreciation for their consideration',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'sanctuary_commitment'
          },
          {
            id: 'express_excitement',
            text: '"I\'m excited to learn about all of your individual stories and interests."',
            consequence: 'Enthusiastic engagement • Shows genuine interest',
            effects: [{ characterId: 'morgana', affectionChange: 18 }, { characterId: 'elena', affectionChange: 15 }],
            nextScene: 'individual_connections'
          }
        ]
      },
      {
        id: 'structured_education',
        title: 'A Systematic Approach',
        text: [
          'Celeste steps forward with obvious enthusiasm for organizing your education.',
          '"Excellent approach. I\'ve actually prepared a comprehensive curriculum covering supernatural history, coven dynamics, and practical safety measures."',
          '"We\'ll start with the basics - understanding different supernatural species, their strengths and limitations, and how our community functions."',
          'Her systematic approach makes the overwhelming task of learning about the supernatural world feel manageable and exciting.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_enthusiasm',
            text: '"That sounds perfect. I\'m ready to be a good student."',
            consequence: 'Eager to learn • Shows academic enthusiasm',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'magical_education'
          },
          {
            id: 'ask_about_practical_skills',
            text: '"Will this include learning how to help with day-to-day challenges you face?"',
            consequence: 'Practical focus • Shows desire to be useful',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'practical_coexistence'
          },
          {
            id: 'inquire_about_safety',
            text: '"Safety measures sound important. What kinds of dangers should I be aware of?"',
            consequence: 'Safety conscious • Shows understanding of risks',
            effects: [{ characterId: 'celeste', affectionChange: 18 }, { characterId: 'raven', affectionChange: 12 }],
            nextScene: 'danger_discussion'
          }
        ]
      },
      // Continue adding missing scenes - Batch 4
      {
        id: 'cordelia_choice_story',
        title: 'How Cordelia Chose You',
        text: [
          'Lilith\'s eyes soften as she recalls Cordelia\'s final conversations.',
          '"She spoke of you often in her last months. \'There\'s something special about her,\' she would say. \'A strength that doesn\'t boast, a kindness that doesn\'t judge.\'"',
          '"Cordelia had what she called \'the Sight\' - not supernatural, but an ability to see people\'s true nature. She saw in you someone who could love us as we are."',
          '"\'She won\'t try to change us or save us,\' Cordelia said. \'She\'ll simply accept us and help us be better versions of ourselves.\'"'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'feel_honored',
            text: '"I\'m honored she saw that in me. I hope I can live up to her faith."',
            consequence: 'Humble acceptance • Shows appreciation for trust',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'legacy_acceptance'
          },
          {
            id: 'ask_about_sight',
            text: '"Tell me more about this \'Sight\' she had. Was it supernatural?"',
            consequence: 'Curious about abilities • Shows interest in understanding',
            effects: [{ characterId: 'lilith', affectionChange: 18 }, { characterId: 'celeste', affectionChange: 12 }],
            nextScene: 'cordelia_psychic_legacy'
          },
          {
            id: 'express_determination',
            text: '"I want to be the person she believed I could be. Will you help me?"',
            consequence: 'Seeks growth • Shows commitment to becoming worthy',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'family_appreciation'
          }
        ]
      },
      {
        id: 'morgana_emotional_connection',
        title: 'Understanding the Choice',
        text: [
          'Morgana\'s expression becomes deeply introspective as she continues her story.',
          '"I chose to remain human, but with knowledge. He offered to erase my memories, to let me return to ignorance, but I refused."',
          '"I wanted to remember the wonder, the terror, the beauty of that otherworld. I chose to live as a bridge between realms - mortal, but aware."',
          '"When I eventually died naturally, centuries later, I was offered vampirism as a reward for my service. By then, I understood the weight of the choice."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'admire_her_courage',
            text: '"That took incredible courage - choosing knowledge over comfortable ignorance."',
            consequence: 'Respects difficult choices • Values truth over comfort',
            effects: [{ characterId: 'morgana', affectionChange: 28 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'philosophical_connection'
          },
          {
            id: 'relate_to_bridge_role',
            text: '"I think I understand that bridge feeling. That\'s what I\'m becoming here, isn\'t it?"',
            consequence: 'Personal insight • Recognizes parallel experience',
            effects: [{ characterId: 'morgana', affectionChange: 32 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'mutual_understanding'
          },
          {
            id: 'ask_about_service',
            text: '"What kind of service did you provide during those centuries?"',
            consequence: 'Interested in details • Wants to understand her journey',
            effects: [{ characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'morgana_teaching_path'
          }
        ]
      },
      {
        id: 'morgana_artistic_bond',
        title: 'The Artist\'s Soul',
        text: [
          'Morgana\'s face lights up with genuine enthusiasm.',
          '"Yes, I am. Painting has been my constant companion through the centuries. It\'s how I process emotion, how I capture beauty, how I make sense of existence."',
          '"I\'ve painted the same sunset for five hundred years, and each time I discover something new about light, about color, about the way beauty touches the soul."',
          '"Would you... would you like to see my studio? I rarely show my work to others, but something tells me you\'d understand."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'eagerly_accept',
            text: '"I would love to see your work. Art that spans centuries must be extraordinary."',
            consequence: 'Enthusiastic interest • Shows appreciation for artistic dedication',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'ask_about_evolution',
            text: '"How has your art evolved over the centuries? What changes with immortal perspective?"',
            consequence: 'Deep artistic question • Shows understanding of craft',
            effects: [{ characterId: 'morgana', affectionChange: 30 }, { characterId: 'elena', affectionChange: 15 }],
            nextScene: 'creative_process_explanation'
          },
          {
            id: 'share_art_appreciation',
            text: '"I\'ve always believed art is how we touch something eternal. It must mean even more to you."',
            consequence: 'Philosophical art appreciation • Connects art to immortality',
            effects: [{ characterId: 'morgana', affectionChange: 38 }, { characterId: 'seraphina', affectionChange: 18 }],
            nextScene: 'spiritual_connection'
          }
        ]
      },
      {
        id: 'morgana_teaching_path',
        title: 'Guardian of Knowledge',
        text: [
          'Morgana\'s expression becomes serious as she reflects on her mortal years.',
          '"I became a teacher, a guide for others who encountered the supernatural. I helped people understand that not all otherworldly beings were threats."',
          '"I prevented witch hunts, protected innocent vampires, mediated between human and supernatural communities. It was dangerous work, but necessary."',
          '"I learned that knowledge without wisdom is useless, but wisdom without courage is meaningless. You need all three to truly help others."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_admiration',
            text: '"You were protecting both sides. That\'s exactly what an Anchor should do."',
            consequence: 'Understands role parallel • Shows insight into purpose',
            effects: [{ characterId: 'morgana', affectionChange: 30 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'legacy_continuation'
          },
          {
            id: 'ask_about_wisdom',
            text: '"How do you develop the wisdom to know when to act and when to wait?"',
            consequence: 'Seeks practical wisdom • Values experience',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'celeste', affectionChange: 15 }],
            nextScene: 'patience_training'
          },
          {
            id: 'inquire_about_courage',
            text: '"What gave you the courage to take such risks for others?"',
            consequence: 'Moral curiosity • Interested in motivation',
            effects: [{ characterId: 'morgana', affectionChange: 28 }, { characterId: 'valentina', affectionChange: 12 }],
            nextScene: 'courage_recognition'
          }
        ]
      },
      {
        id: 'seraphina_philosophical_bond',
        title: 'Ethics Across Realms',
        text: [
          'Seraphina\'s eyes brighten with intellectual engagement.',
          '"Exactly! Morality isn\'t bound by species or realm. Good and evil are choices, not conditions of birth or transformation."',
          '"I\'ve seen humans commit atrocities that would shame demons, and I\'ve known vampires whose compassion rivals angels. What matters is how we choose to use our power."',
          '"The question isn\'t what you are, but what you do with what you are. That\'s why your perspective is so valuable to us."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'discuss_power_responsibility',
            text: '"With great power comes great responsibility - that applies to everyone here."',
            consequence: 'Ethical insight • Shows understanding of moral obligation',
            effects: [{ characterId: 'seraphina', affectionChange: 32 }, { characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'ask_about_fallen_perspective',
            text: '"What unique perspective does falling from grace give you on morality?"',
            consequence: 'Deep philosophical question • Shows interest in her journey',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'divine_understanding'
          },
          {
            id: 'relate_human_experience',
            text: '"Humans face the same struggle - we all have the capacity for good and evil."',
            consequence: 'Common ground • Shows shared moral experience',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'mutual_understanding'
          }
        ]
      },
      {
        id: 'seraphina_love_capacity',
        title: 'The Courage of Love',
        text: [
          'Seraphina\'s expression softens with deep emotion.',
          '"Thank you. That choice led me to understand something profound - love requires the possibility of loss to have meaning."',
          '"Angels love perfectly but safely, without risk. Mortals love imperfectly but courageously, despite inevitable loss. I chose to love like a mortal."',
          '"Now I understand both kinds of love - the eternal and the ephemeral. It makes every connection precious beyond measure."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_sacrifice',
            text: '"You gave up perfection to gain something more beautiful - the ability to love with your whole heart."',
            consequence: 'Deep appreciation • Understands the value of her sacrifice',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'spiritual_connection'
          },
          {
            id: 'ask_about_connection',
            text: '"Does that mean every connection you make now carries extra weight?"',
            consequence: 'Thoughtful question • Shows understanding of implications',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'bond_strength_explanation'
          },
          {
            id: 'offer_mortal_love',
            text: '"Then maybe I can offer you something unique - the intensity of mortal love freely given."',
            consequence: 'Romantic possibility • Offers unique gift',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'love_development_path'
          }
        ]
      },
      // Essential connection and outcome scenes - Batch 5
      {
        id: 'seraphina_purpose_recognition',
        title: 'Finding Purpose in Choice',
        text: [
          'Seraphina considers your question with the gravity it deserves.',
          '"Regret? Sometimes. But then I remember what I gained - the ability to truly empathize with suffering, to understand the weight of moral choices."',
          '"I can help mortals and immortals alike because I\'ve walked in both worlds. My fall gave me purpose: to bridge the gap between divine perfection and mortal struggle."',
          '"Every choice has consequences, but some consequences become gifts if you have the wisdom to use them well."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_wisdom',
            text: '"That\'s beautiful - turning loss into purpose, pain into wisdom."',
            consequence: 'Philosophical appreciation • Shows understanding of growth',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'spiritual_connection'
          },
          {
            id: 'ask_about_helping',
            text: '"How do you help bridge that gap? What does that look like in practice?"',
            consequence: 'Practical interest • Wants to understand her work',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'celeste', affectionChange: 10 }],
            nextScene: 'seraphina_healer_introduction'
          },
          {
            id: 'relate_to_purpose',
            text: '"I think that\'s what I\'m meant to do too - bridge different worlds."',
            consequence: 'Personal insight • Recognizes shared mission',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'mutual_recognition'
          }
        ]
      },
      {
        id: 'bond_strength_explanation',
        title: 'The Weight of Immortal Bonds',
        text: [
          'Seraphina nods thoughtfully, her expression becoming more intimate.',
          '"Yes, exactly. When you know you have eternity, every moment of connection becomes both more precious and more carefully considered."',
          '"Immortal relationships develop layers of depth that mortals rarely experience - centuries of shared growth, of seeing each other through countless changes."',
          '"But they also carry the weight of permanence. When you bond with someone for eternity, every choice echoes through endless time."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/bedroom.png',
        choices: [
          {
            id: 'express_fascination',
            text: '"That sounds both beautiful and terrifying. The depth must be incredible."',
            consequence: 'Appreciates complexity • Shows understanding of immortal love',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'love_development_path'
          },
          {
            id: 'ask_about_mortality_advantage',
            text: '"What do mortal connections offer that immortal ones might lack?"',
            consequence: 'Curious about mortality • Values mortal perspective',
            effects: [{ characterId: 'seraphina', affectionChange: 28 }, { characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'mortal_love_path'
          },
          {
            id: 'wonder_about_choice',
            text: '"How do you choose who to bond with when the stakes are so high?"',
            consequence: 'Deep personal question • Shows interest in her heart',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'sacrifice_understanding'
          }
        ]
      },
      {
        id: 'love_development_path',
        title: 'The Growth of Affection',
        text: [
          'The conversation has shifted to something deeper, more personal. You sense that connections are forming that go beyond simple acceptance.',
          'Morgana speaks softly: "There\'s something beautiful about watching love grow naturally, without force or expectation."',
          'Seraphina adds: "The best relationships - mortal or immortal - develop when two souls recognize something in each other that complements their own journey."',
          'You feel the weight of possibility in the air, the sense that choices made here will echo through time.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_possibility',
            text: '"I feel something growing here too. Something I didn\'t expect but welcome."',
            consequence: 'Opens to romance • Shows emotional courage',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'romance_deepening'
          },
          {
            id: 'appreciate_patience',
            text: '"I\'m grateful for the patience to let things develop naturally."',
            consequence: 'Values organic development • Shows emotional wisdom',
            effects: [{ characterId: 'morgana', affectionChange: 20 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'mutual_recognition'
          },
          {
            id: 'focus_on_friendship',
            text: '"Right now, I\'m most interested in building strong friendships with everyone."',
            consequence: 'Friendship focus • Values platonic bonds',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'individual_connections'
          }
        ]
      },
      {
        id: 'mutual_understanding',
        title: 'Recognition Between Souls',
        text: [
          'A moment of profound understanding passes between you and the assembled vampires.',
          'Morgana smiles warmly: "Yes, you understand. You\'re becoming a bridge, just as I once was."',
          'Lilith nods approvingly: "Cordelia chose well. You have the heart for this work."',
          'You sense that you\'ve passed some invisible test, proven yourself worthy not through grand gestures but through genuine empathy and understanding.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_bridge_role',
            text: '"I want to be the best bridge I can be - connecting your world with mine."',
            consequence: 'Role commitment • Shows dedication to purpose',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'sanctuary_commitment'
          },
          {
            id: 'ask_about_learning',
            text: '"Will you teach me? I want to learn how to do this right."',
            consequence: 'Seeks guidance • Shows humility and eagerness',
            effects: [{ characterId: 'morgana', affectionChange: 30 }, { characterId: 'celeste', affectionChange: 15 }],
            nextScene: 'structured_education'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for seeing the potential in me. I won\'t let you down."',
            consequence: 'Shows appreciation • Commits to excellence',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'trust_established'
          }
        ]
      },
      {
        id: 'sanctuary_commitment',
        title: 'The Sacred Promise',
        text: [
          'The atmosphere becomes more formal as Lilith steps forward.',
          '"Then let us make this official. You accept the role of Anchor, with all its responsibilities and privileges?"',
          '"You swear to protect our secrets, advocate for our needs, and serve as our voice in the mortal world?"',
          'The weight of centuries seems to press down on this moment. You understand that your next words will bind you to something larger than yourself.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'make_solemn_vow',
            text: '"I swear it. I will be your Anchor, your advocate, your voice. You have my solemn promise."',
            consequence: 'Sacred commitment • Makes binding oath',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'valentina', affectionChange: 20 }, { characterId: 'isadora', affectionChange: 20 }],
            nextScene: 'sacred_vow_sealed'
          },
          {
            id: 'add_personal_touch',
            text: '"I swear it, and more - you\'re not just my charges, you\'re my family now."',
            consequence: 'Emotional commitment • Promises familial bond',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 25 }, { characterId: 'umbra', affectionChange: 20 }],
            nextScene: 'family_appreciation'
          },
          {
            id: 'acknowledge_weight',
            text: '"I understand the gravity of this promise. I swear to honor Cordelia\'s legacy and earn your trust."',
            consequence: 'Solemn understanding • Shows respect for tradition',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'legacy_continuation'
          }
        ]
      },
      {
        id: 'individual_connections',
        title: 'Getting to Know Each Soul',
        text: [
          'Over the following hours, you have the opportunity to speak with each member of the coven individually.',
          'Each conversation reveals new depths - Elena\'s struggle with isolation, Raven\'s protective instincts, Luna\'s prophetic burdens, Valentina\'s revolutionary passion.',
          'You begin to understand that each vampire has their own story, their own pain, their own dreams for the future.',
          'Cordelia was right - the key isn\'t seeing them as vampires, but as individuals who happen to be vampires.'
        ],
        choices: [
          {
            id: 'focus_on_elena',
            text: 'Spend more time with Elena, who seems to need connection most.',
            consequence: 'Compassionate focus • Helps the isolated',
            effects: [{ characterId: 'elena', affectionChange: 30 }],
            nextScene: 'elena_isolation_bridge'
          },
          {
            id: 'engage_with_valentina',
            text: 'Discuss Valentina\'s revolutionary ideas in depth.',
            consequence: 'Political engagement • Shows interest in change',
            effects: [{ characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'valentina_war_stories'
          },
          {
            id: 'learn_from_all',
            text: 'Try to spend equal time getting to know everyone.',
            consequence: 'Balanced approach • Values all equally',
            effects: [
              { characterId: 'elena', affectionChange: 15 },
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'raven', affectionChange: 15 },
              { characterId: 'luna', affectionChange: 15 }
            ],
            nextScene: 'coven_hierarchy_revealed'
          }
        ]
      },
      {
        id: 'umbra_grateful_response',
        title: 'A Shy Acknowledgment',
        text: [
          'Umbra\'s form brightens noticeably as you wave back, the starlight within their shadowy form twinkling more brightly.',
          'They seem to gain a little confidence from your friendly gesture, their form becoming slightly more solid and defined.',
          'Lilith smiles at the interaction. "Umbra has been with us for only a few decades. They\'re still learning how to interact with others."',
          'Umbra makes a soft sound like distant wind chimes, which you somehow understand as a expression of gratitude.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'encourage_further',
            text: 'Make another encouraging gesture, perhaps a thumbs up.',
            consequence: 'Continued encouragement • Builds confidence in the shy',
            effects: [{ characterId: 'umbra', affectionChange: 20 }],
            nextScene: 'umbra_gains_confidence'
          },
          {
            id: 'ask_about_communication',
            text: 'Ask Lilith: "How does Umbra usually communicate?"',
            consequence: 'Practical interest • Wants to understand communication',
            effects: [{ characterId: 'umbra', affectionChange: 15 }, { characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'eldritch_nature_explained'
          },
          {
            id: 'give_space',
            text: 'Give Umbra space but continue to include them with warm glances.',
            consequence: 'Respectful distance • Shows understanding of shyness',
            effects: [{ characterId: 'umbra', affectionChange: 18 }],
            nextScene: 'umbra_appreciates_patience'
          }
        ]
      },
      // Additional critical scenes - Batch 6
      {
        id: 'sacrifice_understanding',
        title: 'The Cost of Eternal Choice',
        text: [
          'Seraphina\'s expression becomes deeply contemplative.',
          '"You choose carefully, with full knowledge of what you\'re committing to. Every immortal bond requires sacrifice - of independence, of the possibility of other paths."',
          '"But when you find someone whose soul resonates with yours across centuries, the sacrifice becomes a gift. You give up infinite possibility for infinite depth."',
          '"The question isn\'t whether the sacrifice is worth it, but whether you\'re brave enough to make it."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_courage',
            text: '"I think I could be that brave, for the right person."',
            consequence: 'Shows romantic courage • Open to deep commitment',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'romance_deepening'
          },
          {
            id: 'appreciate_depth',
            text: '"The idea of infinite depth with someone... that\'s beautiful."',
            consequence: 'Values deep connection • Appreciates immortal love',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'spiritual_connection'
          },
          {
            id: 'ask_about_recognition',
            text: '"How do you know when you\'ve found that soul resonance?"',
            consequence: 'Seeks understanding • Wants to recognize true connection',
            effects: [{ characterId: 'seraphina', affectionChange: 32 }],
            nextScene: 'mutual_recognition'
          }
        ]
      },
      {
        id: 'romance_deepening',
        title: 'The Dawn of Something More',
        text: [
          'The air between you and certain members of the coven has shifted into something charged with possibility.',
          'Morgana\'s eyes hold yours with newfound intensity. "I feel it too - something growing between us that goes beyond friendship."',
          'Seraphina steps closer, her presence both comforting and electric. "The heart knows what it knows, regardless of mortality or immortality."',
          'You sense you\'re at a crossroads where choices will determine not just alliances, but the shape of love itself.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_morgana_connection',
            text: 'Focus your romantic attention on Morgana.',
            consequence: 'Romantic choice • Commits to artistic soul connection',
            effects: [{ characterId: 'morgana', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: -5 }],
            nextScene: 'morgana_hope'
          },
          {
            id: 'embrace_seraphina_connection',
            text: 'Focus your romantic attention on Seraphina.',
            consequence: 'Romantic choice • Commits to fallen angel connection',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'morgana', affectionChange: -5 }],
            nextScene: 'heaven_memories'
          },
          {
            id: 'explore_both_connections',
            text: '"I\'m drawn to both of you. Is it possible to explore these feelings without choosing immediately?"',
            consequence: 'Polyamorous possibility • Keeps options open',
            effects: [{ characterId: 'morgana', affectionChange: 25 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'creative_partnership'
          },
          {
            id: 'step_back_for_now',
            text: '"These feelings are intense. I need time to understand them before making any commitments."',
            consequence: 'Cautious approach • Values careful consideration',
            effects: [{ characterId: 'morgana', affectionChange: 15 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'contemplation_time'
          }
        ]
      },
      {
        id: 'spiritual_connection',
        title: 'Souls in Harmony',
        text: [
          'A profound sense of spiritual connection washes over you. In this moment, mortal and immortal souls seem to touch something eternal.',
          'Seraphina\'s presence feels both grounding and transcendent. "This is what I hoped for when I chose to fall - genuine connection that honors both earthly and divine aspects of existence."',
          'You feel as though you\'re experiencing a glimpse of what love might look like when freed from the constraints of single lifetimes.',
          'The connection feels both deeply personal and somehow universal - love as a force that transcends individual existence.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_transcendence',
            text: '"This feels like touching something sacred - love as a universal force."',
            consequence: 'Spiritual insight • Recognizes love\'s transcendent nature',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }, { characterId: 'umbra', affectionChange: 20 }],
            nextScene: 'divine_understanding'
          },
          {
            id: 'appreciate_balance',
            text: '"You\'ve found the perfect balance between divine and earthly love."',
            consequence: 'Appreciates her journey • Understands her achievement',
            effects: [{ characterId: 'seraphina', affectionChange: 38 }],
            nextScene: 'purpose_revelation'
          },
          {
            id: 'offer_grounding',
            text: '"Let me be your anchor to the earthly side of love."',
            consequence: 'Romantic offer • Proposes complementary partnership',
            effects: [{ characterId: 'seraphina', affectionChange: 42 }],
            nextScene: 'mutual_protection_bond'
          }
        ]
      },
      {
        id: 'legacy_continuation',
        title: 'Carrying Forward Cordelia\'s Work',
        text: [
          'Lilith\'s expression fills with deep satisfaction as she sees you embracing Cordelia\'s legacy.',
          '"Yes, this is exactly what she hoped for. Not just someone to replace her, but someone to carry her work forward and make it your own."',
          '"Cordelia believed that each Anchor should bring their own gifts to the role. She was curious about what unique perspective you would offer."',
          '"Now I see it - you have her compassion but with your own strength, her wisdom but with fresh insight."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_growth',
            text: '"I want to honor her foundation while building something new together."',
            consequence: 'Balanced approach • Respects past while embracing future',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'sanctuary_responsibilities'
          },
          {
            id: 'ask_about_unique_gifts',
            text: '"What unique gifts do you think I bring to this role?"',
            consequence: 'Self-reflection • Seeks understanding of personal value',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'courage_recognition'
          },
          {
            id: 'express_determination',
            text: '"I\'m determined to be worthy of the trust both you and Cordelia placed in me."',
            consequence: 'Strong commitment • Shows dedication to excellence',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'isadora', affectionChange: 20 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'family_appreciation',
        title: 'The Bonds of Chosen Family',
        text: [
          'Your declaration of familial love creates a wave of profound emotion throughout the room.',
          'Lilith\'s ancient eyes shine with unshed tears. "Family. Yes, that\'s exactly what we are - not bound by blood, but by choice and love."',
          'Morgana steps forward impulsively and embraces you. "Welcome home, sister."',
          'One by one, the others approach - even shy Umbra extends a tendril of shadow in what you understand is their version of a hug.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_all',
            text: 'Open your arms to embrace as many as possible.',
            consequence: 'Emotional openness • Shows joy in family connection',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'morgana', affectionChange: 30 },
              { characterId: 'umbra', affectionChange: 35 },
              { characterId: 'elena', affectionChange: 25 }
            ],
            nextScene: 'new_community'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for welcoming me so completely. This feels like coming home."',
            consequence: 'Grateful appreciation • Shows emotional fulfillment',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'sanctuary_awakening'
          },
          {
            id: 'make_family_vow',
            text: '"I promise to protect this family as fiercely as you\'ve protected each other."',
            consequence: 'Protective commitment • Shows fierce family loyalty',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'raven', affectionChange: 25 }],
            nextScene: 'guardian_training'
          }
        ]
      },
      {
        id: 'umbra_friendship_begins',
        title: 'Kindness to the Shy',
        text: [
          'Your gentle approach clearly means a great deal to Umbra. Their form becomes more defined, and you can make out what might be a face within the swirling shadows.',
          'They make a sound like distant music - hauntingly beautiful and clearly meant as a greeting.',
          'Lilith translates softly: "They\'re saying thank you for not being afraid."',
          'Umbra extends a tendril of shadow toward you, stopping just short of contact, clearly asking permission.'
        ],
        character: characters.umbra,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'extend_hand',
            text: 'Gently extend your hand toward the shadow tendril.',
            consequence: 'Brave acceptance • Shows trust in the unknown',
            effects: [{ characterId: 'umbra', affectionChange: 35 }],
            nextScene: 'umbra_reveals_true_self'
          },
          {
            id: 'speak_to_umbra',
            text: '"You don\'t need to thank me, Umbra. Fear has no place in friendship."',
            consequence: 'Direct kindness • Establishes friendship foundation',
            effects: [{ characterId: 'umbra', affectionChange: 30 }],
            nextScene: 'umbra_mutual_discovery'
          },
          {
            id: 'ask_about_their_nature',
            text: '"Could you tell me about yourself, Umbra? I\'d love to understand."',
            consequence: 'Genuine interest • Shows desire to know them',
            effects: [{ characterId: 'umbra', affectionChange: 32 }],
            nextScene: 'eldritch_nature_explained'
          }
        ]
      },
      {
        id: 'magical_education',
        title: 'Understanding the Supernatural',
        text: [
          'Celeste leads you to the library where ancient tomes and modern research blend seamlessly.',
          '"The supernatural world operates by different rules than the mortal one," she explains. "Understanding these rules isn\'t just academic - it\'s survival."',
          '"We\'ll start with the basics: different species, their abilities and limitations, how to recognize threats, and how to navigate supernatural politics."',
          'The scope of knowledge seems vast, but Celeste\'s systematic approach makes it feel manageable.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'focus_on_safety',
            text: '"I want to prioritize learning about threats and safety measures."',
            consequence: 'Safety-conscious • Prioritizes protection',
            effects: [{ characterId: 'celeste', affectionChange: 20 }, { characterId: 'raven', affectionChange: 15 }],
            nextScene: 'danger_discussion'
          },
          {
            id: 'study_vampire_lore',
            text: '"I\'d like to understand vampire society and culture in depth."',
            consequence: 'Cultural interest • Wants to understand her new family',
            effects: [{ characterId: 'celeste', affectionChange: 25 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'learn_anchor_history',
            text: '"Could we study the history of other Anchors? I want to learn from precedent."',
            consequence: 'Historical approach • Values learning from experience',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'cordelia_research_revealed'
          }
        ]
      },
      // Final missing scenes - Batch 7 (Core relationship scenes)
      {
        id: 'lilith_dreams_revealed',
        title: 'Ancient Dreams',
        text: [
          'Lilith\'s expression becomes distant, almost vulnerable.',
          '"I dream sometimes of what we could become - not just as individuals, but as a community. A place where vampires don\'t have to hide in shadows."',
          '"I dream of a time when our nature isn\'t seen as a curse to be cured, but as a gift to be honored. When we can contribute openly to the world."',
          '"Your presence here... it feels like the first step toward making those dreams reality."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'share_vision',
            text: '"I can see that future too. Let\'s work together to build it."',
            consequence: 'Shared vision • Commits to revolutionary change',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'valentina', affectionChange: 20 }],
            nextScene: 'sanctuary_responsibilities'
          },
          {
            id: 'practical_steps',
            text: '"What would be the first practical steps toward that future?"',
            consequence: 'Strategic thinking • Focuses on implementation',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'gradual_integration'
          },
          {
            id: 'express_honor',
            text: '"It\'s an honor to be part of making your dreams come true."',
            consequence: 'Deep respect • Shows appreciation for her vision',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'mutual_recognition'
          }
        ]
      },
      {
        id: 'mutual_recognition',
        title: 'Souls Recognizing Souls',
        text: [
          'A moment of profound understanding passes between you. Time seems to slow as you truly see each other.',
          'Lilith speaks softly: "You see us. Not what we are, but who we are. That\'s rarer than you know."',
          'The connection feels deeper than attraction, deeper than friendship - it\'s recognition at the soul level.',
          'You sense that this moment will be remembered as a turning point, not just for you, but for everyone here.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'acknowledge_connection',
            text: '"And you see me too - not just my mortality, but my potential."',
            consequence: 'Deep mutual understanding • Acknowledges soul connection',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'sanctuary_responsibilities'
          },
          {
            id: 'express_gratitude',
            text: '"Thank you for looking past the surface and seeing who I really am."',
            consequence: 'Grateful recognition • Appreciates being truly seen',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'honored_trust'
          },
          {
            id: 'offer_same_gift',
            text: '"I want to offer you the same gift - being seen and accepted completely."',
            consequence: 'Reciprocal offering • Promises mutual acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 48 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'sacred_vow_sealed'
          }
        ]
      },
      {
        id: 'sanctuary_responsibilities',
        title: 'The Weight of Guardianship',
        text: [
          'Lilith\'s expression becomes serious as she outlines the true scope of your role.',
          '"Being an Anchor means more than just liaison work. You\'ll be responsible for the safety and wellbeing of every soul here."',
          '"You\'ll need to make decisions that affect lives, mediate disputes, and sometimes make choices that have no perfect answer."',
          '"The burden is heavy, but you won\'t carry it alone. We\'ll guide you, support you, and share the weight."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_responsibility',
            text: '"I understand the weight, and I accept it willingly."',
            consequence: 'Full commitment • Accepts all responsibilities',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'raven', affectionChange: 25 }],
            nextScene: 'guardian_training'
          },
          {
            id: 'ask_about_support',
            text: '"How will the guidance and support work in practice?"',
            consequence: 'Practical planning • Wants clear expectations',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'diplomatic_training'
          },
          {
            id: 'acknowledge_trust',
            text: '"The fact that you trust me with this responsibility means everything."',
            consequence: 'Appreciates trust • Shows understanding of honor',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'sacred_vow_sealed'
          }
        ]
      },
      {
        id: 'creative_partnership',
        title: 'Artistic Souls Unite',
        text: [
          'Morgana\'s eyes light up with artistic passion as she speaks.',
          '"There\'s something I\'ve never attempted before - a collaborative piece. Art created by mortal and immortal hands working together."',
          '"I think we could create something beautiful, something that captures the essence of what we\'re building here."',
          '"Would you... would you like to create something with me? Something that\'s uniquely ours?"'
        ],
        character: characters.morgana,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'eagerly_accept',
            text: '"Yes! I\'d love to create something beautiful with you."',
            consequence: 'Artistic enthusiasm • Embraces creative collaboration',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'creative_communion'
          },
          {
            id: 'ask_about_vision',
            text: '"What did you have in mind? What would this collaboration look like?"',
            consequence: 'Creative curiosity • Wants to understand the artistic vision',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'offer_perspective',
            text: '"I\'d bring a mortal\'s perspective to immortal beauty. That could be powerful."',
            consequence: 'Thoughtful contribution • Understands unique value',
            effects: [{ characterId: 'morgana', affectionChange: 42 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'morgana_creative_connection'
          }
        ]
      },
      {
        id: 'morgana_hope',
        title: 'Renaissance of the Heart',
        text: [
          'Morgana\'s face transforms with joy and renewed purpose.',
          '"You\'ve given me something I thought I\'d lost forever - hope. Hope for new experiences, new connections, new art."',
          '"For centuries, I\'ve been painting the same subjects, feeling the same emotions. But you... you make everything feel fresh again."',
          '"I want to paint you, to capture this moment of rebirth. Not just your image, but the feeling of hope itself."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_to_model',
            text: '"I\'d be honored to pose for you. Capture this moment of new beginnings."',
            consequence: 'Intimate trust • Offers vulnerability for art',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'morgana_second_performance'
          },
          {
            id: 'suggest_collaboration',
            text: '"What if we painted together? You could teach me your centuries of technique."',
            consequence: 'Creative partnership • Wants to learn and create together',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'creative_process_explanation'
          },
          {
            id: 'focus_on_feeling',
            text: '"Paint the hope itself - what does renewed purpose look like in color?"',
            consequence: 'Philosophical art • Focuses on emotion over form',
            effects: [{ characterId: 'morgana', affectionChange: 48 }, { characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'artistic_appreciation'
          }
        ]
      },
      {
        id: 'morgana_second_performance',
        title: 'Capturing Lightning',
        text: [
          'In Morgana\'s studio, surrounded by centuries of artistic achievement, you pose as she works.',
          '"Stay just like that - the way the light catches your eyes, the slight tilt of your head. You\'re radiant with possibility."',
          'Her brush moves with fluid confidence, but you notice her technique is different - looser, more experimental.',
          '"This is the first portrait I\'ve painted in decades where I\'m not trying to capture what was, but what could be."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_change',
            text: '"How has your technique changed? What\'s different about this painting?"',
            consequence: 'Artistic interest • Shows understanding of creative evolution',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'creative_process_explanation'
          },
          {
            id: 'stay_perfectly_still',
            text: 'Remain perfectly still and let her work, communicating only with your eyes.',
            consequence: 'Perfect model • Shows dedication to the artistic process',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'artistic_gratitude'
          },
          {
            id: 'share_vulnerability',
            text: '"It feels vulnerable being seen so intently, but also beautiful."',
            consequence: 'Emotional honesty • Shares intimate feelings',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'mutual_protection_bond'
          }
        ]
      },
      {
        id: 'philosophical_connection',
        title: 'Meeting of Minds',
        text: [
          'The conversation has evolved into something deeper - a true meeting of philosophical minds.',
          'Seraphina leans forward, engaged: "You understand the paradox of choice in a way that surprises me."',
          'Morgana adds: "Most people see choice as simple - good or bad, right or wrong. But you see the complexity."',
          'You realize you\'re being intellectually courted, your mind as much as your heart drawing them to you.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'explore_paradox',
            text: '"Every meaningful choice contains its own contradictions. That\'s what makes them powerful."',
            consequence: 'Deep philosophical insight • Shows intellectual sophistication',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'paradox_appreciation'
          },
          {
            id: 'apply_to_present',
            text: '"Like choosing to be here - it\'s simultaneously terrifying and exactly right."',
            consequence: 'Personal application • Connects philosophy to current situation',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }, { characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'determined_despite_fear'
          },
          {
            id: 'appreciate_complexity',
            text: '"Simple answers are rarely true answers. Real truth exists in the spaces between certainties."',
            consequence: 'Sophisticated thinking • Shows appreciation for nuance',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'divine_understanding'
          }
        ]
      },
      // Batch 8 - Character development and interaction scenes
      {
        id: 'silence_discussion',
        title: 'The Comfort of Quiet Understanding',
        text: [
          'You and the vampires sit in comfortable silence for a moment, each lost in thought.',
          'Sometimes the most meaningful conversations happen in the spaces between words.',
          'Seraphina finally speaks: "There\'s wisdom in knowing when to speak and when to simply be present."',
          'You feel a deep sense of belonging in this moment of shared contemplation.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_silence',
            text: '"Some truths are too deep for words. This silence says everything."',
            consequence: 'Philosophical appreciation • Values non-verbal communication',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'share_presence',
            text: 'Simply nod and continue sharing the peaceful moment.',
            consequence: 'Comfortable presence • Shows ability to be still',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }, { characterId: 'umbra', affectionChange: 20 }],
            nextScene: 'mutual_protection_bond'
          },
          {
            id: 'express_gratitude_quietly',
            text: 'Whisper: "Thank you for teaching me the value of quiet togetherness."',
            consequence: 'Gentle appreciation • Shows learning from the moment',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'honored_trust'
          }
        ]
      },
      {
        id: 'artistic_gratitude',
        title: 'A Model\'s Grace',
        text: [
          'As Morgana finishes the portrait session, she sets down her brush with reverent care.',
          '"Thank you. Not just for posing, but for inspiring me to see beauty in new ways."',
          '"You\'ve reminded me that art isn\'t just about capturing what exists, but about revealing what\'s possible."',
          'She turns the easel toward you, revealing a painting that somehow captures not just your appearance but your essence.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'marvel_at_painting',
            text: '"It\'s beautiful. You\'ve captured something I didn\'t even know was there."',
            consequence: 'Artistic appreciation • Recognizes deeper truth in art',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'beauty_acknowledged'
          },
          {
            id: 'focus_on_artist',
            text: '"The real art is in your vision. You see possibilities everywhere."',
            consequence: 'Artist appreciation • Values her creative vision',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'suggest_future_sessions',
            text: '"I\'d love to pose for you again. We could explore different emotions, different moments."',
            consequence: 'Ongoing collaboration • Commits to artistic partnership',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'creative_communion'
          }
        ]
      },
      {
        id: 'mutual_protection_bond',
        title: 'Shields for Each Other',
        text: [
          'A profound understanding passes between you about the nature of protection and vulnerability.',
          'Seraphina speaks softly: "True strength isn\'t about being invulnerable. It\'s about choosing to be vulnerable with the right people."',
          'You feel the weight of mutual trust - they\'re offering to protect you, and you\'re offering the same in return.',
          'This isn\'t just about physical safety, but about protecting each other\'s hearts, dreams, and very souls.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'vow_protection',
            text: '"I vow to protect what matters most to you, as you protect what matters to me."',
            consequence: 'Sacred vow • Makes profound commitment',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'bond_protection_vow'
          },
          {
            id: 'acknowledge_vulnerability',
            text: '"Being vulnerable with you feels safe. That\'s the most precious gift."',
            consequence: 'Emotional honesty • Acknowledges the gift of safety',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'comfort_accepted'
          },
          {
            id: 'promise_support',
            text: '"Whatever challenges come, we\'ll face them together. You\'re not alone anymore."',
            consequence: 'Supportive commitment • Promises ongoing presence',
            effects: [{ characterId: 'seraphina', affectionChange: 42 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'shared_grief'
          }
        ]
      },
      {
        id: 'purpose_revelation',
        title: 'Understanding True Calling',
        text: [
          'In this moment of connection, you begin to understand your true purpose here.',
          'It\'s not just about being an Anchor or a liaison - it\'s about being a catalyst for growth, healing, and hope.',
          'Lilith observes: "You\'re beginning to see it, aren\'t you? Your real role here?"',
          'You realize that your purpose is to help each of them become the best version of themselves while growing into your own potential.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_catalyst_role',
            text: '"I\'m here to help everyone grow, including myself. We\'ll transform together."',
            consequence: 'Purpose clarity • Accepts role as catalyst for growth',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'transformation_education_detailed'
          },
          {
            id: 'focus_on_healing',
            text: '"I think I\'m meant to help heal old wounds and create new possibilities."',
            consequence: 'Healing focus • Understands therapeutic role',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'elena', affectionChange: 30 }],
            nextScene: 'seraphina_healer_introduction'
          },
          {
            id: 'acknowledge_reciprocity',
            text: '"The beautiful thing is that as I help you grow, you\'re helping me discover who I\'m meant to be."',
            consequence: 'Mutual growth • Recognizes reciprocal development',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'determined_despite_fear',
        title: 'Courage in the Face of Unknown',
        text: [
          'You acknowledge the fear that accompanies this momentous choice, but your determination remains unshaken.',
          'Morgana nods approvingly: "True courage isn\'t the absence of fear - it\'s choosing to act despite being afraid."',
          'Seraphina adds: "Fear can be wisdom. It means you understand the magnitude of what you\'re choosing."',
          'Your willingness to proceed despite uncertainty speaks to your character in ways that impress them deeply.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'acknowledge_growth',
            text: '"Fear means I\'m growing. I\'d rather grow with you than stay safe alone."',
            consequence: 'Growth mindset • Chooses development over comfort',
            effects: [{ characterId: 'morgana', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'courage_recognition'
          },
          {
            id: 'express_trust',
            text: '"I trust you enough to face my fears. That\'s what love means to me."',
            consequence: 'Trust declaration • Connects fear-facing with love',
            effects: [{ characterId: 'morgana', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'focus_on_potential',
            text: '"The fear is temporary, but the potential we\'re creating together is eternal."',
            consequence: 'Future focus • Values long-term possibility over short-term fear',
            effects: [{ characterId: 'morgana', affectionChange: 42 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'new_memory_creation'
          }
        ]
      },
      {
        id: 'wider_world_discussion',
        title: 'Beyond the Manor Walls',
        text: [
          'The conversation turns to the broader implications of your presence and role.',
          'Celeste speaks thoughtfully: "Your work here will eventually extend beyond Ravencroft. Other supernatural communities need advocates too."',
          'Lilith adds: "You\'re not just our Anchor - you\'re potentially a bridge between the human and supernatural worlds."',
          'The scope of what you\'re stepping into becomes clear: this is about changing the world, one relationship at a time.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_larger_mission',
            text: '"If I can help create understanding between our worlds, that\'s worth any challenge."',
            consequence: 'Global vision • Accepts broader mission',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'diplomatic_training'
          },
          {
            id: 'start_with_foundation',
            text: '"Let\'s build a strong foundation here first, then expand our influence gradually."',
            consequence: 'Strategic approach • Values solid foundations',
            effects: [{ characterId: 'celeste', affectionChange: 35 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'gradual_integration'
          },
          {
            id: 'ask_about_other_communities',
            text: '"Tell me about these other supernatural communities. What challenges do they face?"',
            consequence: 'Knowledge seeking • Shows interest in broader supernatural world',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'forbidden_knowledge_access'
          }
        ]
      },
      {
        id: 'cordelia_letters',
        title: 'Messages from the Past',
        text: [
          'Lilith produces a small bundle of letters tied with a faded ribbon.',
          '"Cordelia left these for you. She wrote them during her final months, hoping to guide you when you arrived."',
          'The letters are addressed simply: "To My Successor" in Cordelia\'s elegant handwriting.',
          'You sense that these contain not just practical advice, but emotional wisdom from someone who walked this path before you.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'read_immediately',
            text: '"I\'d like to read them now, if that\'s alright."',
            consequence: 'Immediate engagement • Shows eagerness for guidance',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'cordelia_love_story'
          },
          {
            id: 'save_for_private_moment',
            text: '"I\'d prefer to read these in private, to properly honor her words."',
            consequence: 'Respectful approach • Values intimate connection with Cordelia\'s memory',
            effects: [{ characterId: 'lilith', affectionChange: 35 }],
            nextScene: 'cordelia_challenges'
          },
          {
            id: 'ask_about_writing_them',
            text: '"What was she feeling when she wrote these? What did she want me to know?"',
            consequence: 'Emotional insight • Seeks understanding of Cordelia\'s intentions',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'cordelia_psychic_legacy'
          }
        ]
      },
      {
        id: 'reassurance_offered',
        title: 'Calming Worried Hearts',
        text: [
          'You notice signs of concern and uncertainty among some of the vampires, and you feel moved to offer reassurance.',
          'Elena looks particularly anxious, while even confident Valentina seems to have questions in her eyes.',
          '"I know this is new for all of us," you say gently. "But we\'ll figure it out together."',
          'Your words carry a calm authority that surprises even you - perhaps you\'re growing into your role already.'
        ],
        choices: [
          {
            id: 'address_elena_directly',
            text: 'Focus on Elena: "You don\'t have to carry your worries alone anymore."',
            consequence: 'Compassionate focus • Addresses individual needs',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'elena_comfort_accepted'
          },
          {
            id: 'reassure_everyone',
            text: '"We\'re building something beautiful here. Trust the process."',
            consequence: 'General reassurance • Instills confidence in the group',
            effects: [
              { characterId: 'elena', affectionChange: 20 },
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'umbra', affectionChange: 25 }
            ],
            nextScene: 'new_community'
          },
          {
            id: 'acknowledge_challenges',
            text: '"Change is scary, but it\'s also how we grow. We\'ll face challenges together."',
            consequence: 'Realistic optimism • Acknowledges difficulties while maintaining hope',
            effects: [{ characterId: 'elena', affectionChange: 25 }, { characterId: 'valentina', affectionChange: 20 }],
            nextScene: 'sanctuary_challenges'
          }
        ]
      },
      // Batch 9 - Training, education and development scenes
      {
        id: 'protection_details',
        title: 'Understanding the Dangers',
        text: [
          'Raven steps forward, her protective instincts evident.',
          '"The supernatural world has threats you need to understand - rival covens, hunters, rogue vampires who don\'t respect our code."',
          '"Some see Anchors as valuable assets to capture or eliminate. Others view mortal advocates as abominations."',
          '"But knowledge is your best protection. Understanding threats helps you avoid them."'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_hunters',
            text: '"Tell me about these hunters. How do I recognize them?"',
            consequence: 'Practical caution • Seeks threat identification skills',
            effects: [{ characterId: 'raven', affectionChange: 30 }],
            nextScene: 'threat_assessment'
          },
          {
            id: 'inquire_about_rivals',
            text: '"What makes other covens see us as threats?"',
            consequence: 'Political awareness • Understands supernatural politics',
            effects: [{ characterId: 'raven', affectionChange: 25 }, { characterId: 'celeste', affectionChange: 15 }],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'focus_on_preparation',
            text: '"How can I best prepare myself to handle these dangers?"',
            consequence: 'Proactive approach • Focuses on personal readiness',
            effects: [{ characterId: 'raven', affectionChange: 35 }],
            nextScene: 'guardian_training'
          }
        ]
      },
      {
        id: 'transformation_ritual_begins',
        title: 'The Sacred Threshold',
        text: [
          'The atmosphere becomes charged with ancient power as preparations begin for a profound transformation.',
          'This isn\'t the vampiric transformation - that remains far in the future - but something deeper: the formal binding of your role as Anchor.',
          'Lilith speaks with ceremonial gravity: "This ritual will awaken your latent abilities and officially connect you to our sanctuary."',
          'You feel the weight of history in this moment, knowing that few mortals have ever undergone this sacred process.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_transformation',
            text: '"I\'m ready. Let\'s begin the ritual."',
            consequence: 'Full commitment • Embraces sacred transformation',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'anchor_powers_explained'
          },
          {
            id: 'ask_about_abilities',
            text: '"What abilities will this awaken? What should I expect?"',
            consequence: 'Informed consent • Seeks understanding before proceeding',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'transformation_education_detailed'
          },
          {
            id: 'request_delay',
            text: '"This feels rushed. Can we take more time to prepare?"',
            consequence: 'Cautious approach • Values careful preparation',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'transformation_delayed'
          }
        ]
      },
      {
        id: 'transformation_delayed',
        title: 'Wisdom in Patience',
        text: [
          'Lilith nods approvingly at your request for more time.',
          '"Wisdom. The ritual has waited centuries for the right person - it can wait a bit longer for the right moment."',
          '"Use this time to deepen your understanding, strengthen your connections, and prepare your heart and mind."',
          '"When you\'re truly ready, the transformation will be all the more powerful for the preparation."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'focus_on_relationships',
            text: '"I want to strengthen my bonds with everyone here first."',
            consequence: 'Relationship priority • Values personal connections',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'individual_connections'
          },
          {
            id: 'pursue_education',
            text: '"I need to learn more about supernatural law and customs."',
            consequence: 'Knowledge seeking • Prioritizes education',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'diplomatic_training'
          },
          {
            id: 'explore_abilities',
            text: '"I want to understand what abilities I might gain."',
            consequence: 'Self-awareness • Seeks understanding of potential',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'anchor_powers_explained'
          }
        ]
      },
      {
        id: 'transformation_education_detailed',
        title: 'The Anchor\'s Awakening',
        text: [
          'Celeste joins Lilith to explain the transformation process in detail.',
          '"The ritual awakens dormant psychic abilities - enhanced empathy, supernatural awareness, protective instincts."',
          '"You\'ll be able to sense the emotional states of those you\'re bonded to, detect supernatural threats, and project calming influence."',
          '"Most importantly, you\'ll develop an unbreakable connection to this sanctuary and everyone in it."'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_enthusiasm',
            text: '"These abilities sound like exactly what I need to protect everyone."',
            consequence: 'Protective focus • Excited about guardian abilities',
            effects: [{ characterId: 'celeste', affectionChange: 35 }, { characterId: 'raven', affectionChange: 25 }],
            nextScene: 'guardian_training'
          },
          {
            id: 'ask_about_empathy',
            text: '"The enhanced empathy intrigues me. How does that work?"',
            consequence: 'Emotional intelligence • Interested in connection abilities',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'consider_responsibility',
            text: '"An unbreakable connection sounds like a profound responsibility."',
            consequence: 'Serious consideration • Understands weight of commitment',
            effects: [{ characterId: 'celeste', affectionChange: 45 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'bond_protection_vow'
          }
        ]
      },
      {
        id: 'creative_communion',
        title: 'Art as Connection',
        text: [
          'In Morgana\'s studio, you work together on the collaborative piece.',
          'Your hands move in harmony - her immortal skill guiding your mortal passion, your fresh perspective inspiring her ancient wisdom.',
          '"This is what I hoped for," Morgana whispers. "Art as a bridge between worlds, between souls."',
          'The painting emerges as something neither of you could have created alone - uniquely beautiful and profound.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'marvel_at_collaboration',
            text: '"It\'s incredible how our different perspectives create something greater."',
            consequence: 'Collaborative insight • Appreciates synergy',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'suggest_series',
            text: '"We should create a whole series - exploring different themes together."',
            consequence: 'Artistic commitment • Proposes ongoing partnership',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'focus_on_meaning',
            text: '"This painting captures the essence of what we\'re building here."',
            consequence: 'Symbolic understanding • Sees deeper meaning',
            effects: [{ characterId: 'morgana', affectionChange: 48 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'honored_trust',
        title: 'Sacred Confidence',
        text: [
          'The weight of the trust being placed in you settles over your shoulders like a mantle.',
          'Lilith speaks with quiet intensity: "You hold our secrets, our hopes, our very lives in your hands now."',
          '"This trust isn\'t given lightly. It\'s earned through character, proven through action, and sealed through love."',
          'You understand that this moment marks your true acceptance into their inner circle.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'vow_secrecy',
            text: '"Your secrets are safe with me. I\'ll guard them as fiercely as I guard your lives."',
            consequence: 'Sacred vow • Commits to absolute discretion',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'sacred_vow_sealed'
          },
          {
            id: 'acknowledge_honor',
            text: '"I\'m honored beyond words. This trust means everything to me."',
            consequence: 'Humble gratitude • Shows appreciation for privilege',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'family_consideration'
          },
          {
            id: 'promise_worthiness',
            text: '"I promise to prove worthy of this trust every single day."',
            consequence: 'Daily commitment • Vows ongoing worthiness',
            effects: [{ characterId: 'lilith', affectionChange: 50 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'creative_process_explanation',
        title: 'The Evolution of Art',
        text: [
          'Morgana sets down her brush and looks at you with deep thoughtfulness.',
          '"My art has evolved through three distinct phases across the centuries - technical mastery, emotional exploration, and now... collaborative discovery."',
          '"You\'ve introduced something I\'d never experienced - the joy of creating with someone whose perspective complements and challenges mine."',
          '"This isn\'t just about painting anymore. It\'s about building something beautiful together."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_evolution',
            text: '"It\'s beautiful how you\'ve grown as an artist. Each phase built on the last."',
            consequence: 'Growth appreciation • Values artistic development',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'focus_on_collaboration',
            text: '"I love that we\'re discovering this collaborative phase together."',
            consequence: 'Partnership focus • Values shared discovery',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'morgana_creative_connection'
          },
          {
            id: 'expand_beyond_art',
            text: '"Building something beautiful together - that applies to more than just art, doesn\'t it?"',
            consequence: 'Deeper meaning • Sees broader implications',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'memory_sharing'
          }
        ]
      },
      {
        id: 'spiritual_awakening',
        title: 'Touching the Divine',
        text: [
          'In this moment of profound connection, you feel something awakening within you - not supernatural powers, but spiritual awareness.',
          'Seraphina\'s presence seems to glow with gentle light. "You\'re beginning to touch something eternal - love that transcends mortality."',
          '"This is what I gave up my wings for - the ability to experience the sacred through imperfect, mortal love."',
          'You feel as though you\'re glimpsing what divine love might look like when filtered through human hearts.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_transcendence',
            text: '"I can feel it - love as something larger than ourselves, connecting us to everything."',
            consequence: 'Spiritual insight • Experiences transcendent love',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }, { characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'divine_understanding'
          },
          {
            id: 'appreciate_her_sacrifice',
            text: '"Your sacrifice gave you the ability to show others this beauty. That\'s incredibly generous."',
            consequence: 'Gratitude for sacrifice • Appreciates her gift to others',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'purpose_revelation'
          },
          {
            id: 'offer_to_explore_together',
            text: '"Will you help me explore this spiritual connection? I want to understand it fully."',
            consequence: 'Spiritual partnership • Seeks guided exploration',
            effects: [{ characterId: 'seraphina', affectionChange: 48 }],
            nextScene: 'heaven_memories'
          }
        ]
      },
      {
        id: 'heaven_memories',
        title: 'Echoes of Paradise',
        text: [
          'Seraphina\'s eyes become distant, reflecting memories of celestial realms.',
          '"Heaven was... perfect. Too perfect. Every emotion measured, every love calculated for maximum divine efficiency."',
          '"I remember the music of the spheres, light that sang, beauty that existed only to glorify. But no surprise, no growth, no discovery."',
          '"Falling gave me the gift of imperfection - the ability to love messily, completely, surprisingly."'
        ],
        character: characters.seraphina,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'appreciate_imperfection',
            text: '"Imperfect love sounds more real, more valuable than perfect love."',
            consequence: 'Values authenticity • Appreciates genuine emotion',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'flight_memories'
          },
          {
            id: 'ask_about_music',
            text: '"What did the music of the spheres sound like?"',
            consequence: 'Curious about divine experience • Wants to understand her past',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'memory_sharing'
          },
          {
            id: 'offer_new_memories',
            text: '"Let me help you create new memories that are beautiful in their imperfection."',
            consequence: 'Romantic offer • Proposes creating beautiful experiences together',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'new_memory_creation'
          }
        ]
      },
      // Batch 10 - Core outcomes and pivotal scenes
      {
        id: 'comfort_accepted',
        title: 'Finding Solace',
        text: [
          'You allow yourself to accept the comfort being offered, recognizing that vulnerability can be a strength.',
          'Seraphina wraps you in a gentle embrace that feels both protective and empowering.',
          '"Accepting comfort doesn\'t make you weak," she murmurs. "It makes you human in the most beautiful way."',
          'You feel your defenses softening, allowing deeper connections to form.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_gratitude',
            text: '"Thank you for teaching me that it\'s okay to need comfort sometimes."',
            consequence: 'Emotional growth • Learns to accept support',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'shared_grief'
          },
          {
            id: 'offer_reciprocal_comfort',
            text: '"I want to offer you the same comfort when you need it."',
            consequence: 'Mutual support • Proposes reciprocal care',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'mutual_protection_bond'
          },
          {
            id: 'acknowledge_trust',
            text: '"Being vulnerable with you feels safe. That\'s a precious gift."',
            consequence: 'Trust recognition • Values emotional safety',
            effects: [{ characterId: 'seraphina', affectionChange: 42 }],
            nextScene: 'trust_acknowledged'
          }
        ]
      },
      {
        id: 'cordelia_challenges',
        title: 'The Weight of Legacy',
        text: [
          'Reading Cordelia\'s letters privately, you discover the challenges she faced in her role.',
          '"Some days the burden felt overwhelming," one letter reads. "Balancing their needs with the outside world, protecting secrets while advocating for change."',
          '"But remember - you\'re not meant to be perfect. You\'re meant to be present, to care, to try. That\'s enough."',
          'Her words offer both warning and comfort about the path ahead.'
        ],
        choices: [
          {
            id: 'accept_imperfection',
            text: 'Take comfort in her message about not needing to be perfect.',
            consequence: 'Self-acceptance • Embraces human limitations',
            effects: [{ characterId: 'lilith', affectionChange: 25 }, { characterId: 'elena', affectionChange: 20 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'prepare_for_challenges',
            text: 'Use her warnings to better prepare for future difficulties.',
            consequence: 'Strategic preparation • Learns from her experience',
            effects: [{ characterId: 'celeste', affectionChange: 30 }, { characterId: 'raven', affectionChange: 20 }],
            nextScene: 'sanctuary_challenges'
          },
          {
            id: 'seek_support',
            text: 'Resolve to lean on the coven when challenges arise.',
            consequence: 'Community reliance • Values collective support',
            effects: [{ characterId: 'lilith', affectionChange: 30 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'shared_grief'
          }
        ]
      },
      {
        id: 'sanctuary_awakening',
        title: 'The Manor Responds',
        text: [
          'As your connection to the sanctuary deepens, you begin to feel the manor itself responding to your presence.',
          'Doors open more easily, rooms feel warmer, shadows seem less threatening.',
          'Lilith notices: "The house recognizes you now. Ravencroft itself accepts you as its guardian."',
          'You sense that the very walls have memories, and you\'re now part of their continuing story.'
        ],
        character: characters.lilith,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'embrace_connection',
            text: '"I can feel it too. This place is becoming part of me."',
            consequence: 'Spiritual connection • Accepts bond with sanctuary',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'anchor_powers_explained'
          },
          {
            id: 'ask_about_memories',
            text: '"What memories do these walls hold? What stories can they tell?"',
            consequence: 'Historical curiosity • Interested in manor\'s past',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'historical_tour'
          },
          {
            id: 'promise_protection',
            text: '"I promise to protect this sanctuary as it protects all of you."',
            consequence: 'Guardian vow • Commits to sanctuary protection',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'anchor_powers_explained',
        title: 'The Gifts of Connection',
        text: [
          'Celeste guides you through understanding your developing abilities.',
          '"Anchor powers aren\'t about control - they\'re about connection. You\'ll sense when someone you\'re bonded to is in distress."',
          '"You can project calm in moments of crisis, share strength when others are weak, and serve as an emotional anchor in storms."',
          '"Most importantly, you become a living bridge between the mortal and immortal worlds."'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'test_abilities',
            text: '"Can we practice? I want to understand how these abilities work."',
            consequence: 'Practical learning • Wants hands-on experience',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'focus_on_responsibility',
            text: '"The responsibility of being an emotional anchor feels profound."',
            consequence: 'Serious consideration • Understands weight of role',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'guardian_training'
          },
          {
            id: 'embrace_bridge_role',
            text: '"Being a bridge between worlds - that\'s exactly what I want to be."',
            consequence: 'Role acceptance • Embraces connection purpose',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'diplomatic_training'
          }
        ]
      },
      {
        id: 'sacred_vow_sealed',
        title: 'The Binding of Souls',
        text: [
          'The formal ceremony reaches its crescendo as your vow is sealed.',
          'Ancient words are spoken, candles flicker in a wind that touches only this room, and you feel something fundamental shift within you.',
          'Lilith places her hands on your shoulders: "By blood, by choice, by love - you are bound to us as we are bound to you."',
          'The connection settles into your bones, your breath, your heartbeat. You are no longer merely visiting - you belong.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_belonging',
            text: '"I feel it - the belonging, the connection. I\'m home."',
            consequence: 'Complete acceptance • Fully embraces belonging',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'new_community'
          },
          {
            id: 'acknowledge_transformation',
            text: '"I can feel myself changing, becoming something more than I was."',
            consequence: 'Transformation awareness • Recognizes personal growth',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'vow_service',
            text: '"I vow to serve this family and this sanctuary with everything I have."',
            consequence: 'Service commitment • Dedicates self to family',
            effects: [{ characterId: 'lilith', affectionChange: 55 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'guardian_training',
        title: 'Learning to Protect',
        text: [
          'Raven takes charge of your protection training, her intensity both intimidating and reassuring.',
          '"Protection isn\'t just about physical defense," she explains. "It\'s about awareness, preparation, and knowing when to fight and when to flee."',
          '"You\'ll learn to read supernatural signatures, recognize threats before they escalate, and coordinate our defenses."',
          'The training is rigorous but necessary - lives depend on your competence.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_intensity',
            text: '"I\'m ready for whatever training you think I need."',
            consequence: 'Training commitment • Accepts rigorous preparation',
            effects: [{ characterId: 'raven', affectionChange: 40 }],
            nextScene: 'threat_assessment'
          },
          {
            id: 'ask_about_coordination',
            text: '"How do we coordinate defenses? What\'s my role in group protection?"',
            consequence: 'Strategic thinking • Focuses on team coordination',
            effects: [{ characterId: 'raven', affectionChange: 35 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'fortress_ravencroft'
          },
          {
            id: 'request_scenario_practice',
            text: '"Can we practice with realistic scenarios? I learn best by doing."',
            consequence: 'Practical learning • Wants experiential training',
            effects: [{ characterId: 'raven', affectionChange: 45 }],
            nextScene: 'phobia_management_discussion'
          }
        ]
      },
      {
        id: 'diplomatic_training',
        title: 'The Art of Supernatural Diplomacy',
        text: [
          'Isadora gracefully takes over your diplomatic education.',
          '"Supernatural politics are complex," she begins. "Each species has protocols, hierarchies, and customs that must be respected."',
          '"A misstep in vampire etiquette might be forgiven. The same mistake with fae or werewolf packs could mean war."',
          '"Your role requires you to be translator, mediator, and sometimes buffer between conflicting interests."'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'study_protocols',
            text: '"I want to learn all the protocols and customs. Where do we start?"',
            consequence: 'Academic approach • Prioritizes formal knowledge',
            effects: [{ characterId: 'isadora', affectionChange: 40 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'focus_on_mediation',
            text: '"The mediation aspect interests me most. How do I resolve conflicts?"',
            consequence: 'Conflict resolution • Focuses on peacemaking skills',
            effects: [{ characterId: 'isadora', affectionChange: 35 }],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'ask_about_mistakes',
            text: '"What are the most dangerous mistakes I could make?"',
            consequence: 'Risk awareness • Wants to avoid serious errors',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'diplomatic_bridge_building'
          }
        ]
      },
      {
        id: 'creative_magic_training',
        title: 'Art as Supernatural Expression',
        text: [
          'Morgana introduces you to the concept of creative magic.',
          '"Art isn\'t just representation - for those with the gift, it can influence reality itself."',
          '"Your enhanced empathy might allow you to create works that heal emotional wounds or inspire supernatural beings."',
          '"It\'s not about power over others, but about channeling emotion and intention into tangible form."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'explore_healing_art',
            text: '"The idea of art that heals emotions fascinates me. How does that work?"',
            consequence: 'Healing focus • Interested in therapeutic creativity',
            effects: [{ characterId: 'morgana', affectionChange: 40 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'artistic_soul_connection'
          },
          {
            id: 'practice_with_morgana',
            text: '"Will you teach me? I want to learn this together with you."',
            consequence: 'Partnership learning • Values shared discovery',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'understand_intention',
            text: '"How do intention and emotion translate into magical effect?"',
            consequence: 'Technical understanding • Seeks mechanism knowledge',
            effects: [{ characterId: 'morgana', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'paradox_appreciation'
          }
        ]
      },
      {
        id: 'paradox_appreciation',
        title: 'Beauty in Contradiction',
        text: [
          'Your philosophical discussion reaches a moment of profound insight.',
          'Seraphina speaks thoughtfully: "The greatest truths often appear contradictory - love that hurts, strength found in vulnerability, freedom through commitment."',
          'Morgana adds: "Art captures these paradoxes better than logic ever could. Beauty emerges from tension."',
          'You realize you\'re experiencing one of these paradoxes yourself - finding home by leaving everything familiar.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'apply_to_self',
            text: '"I\'m living that paradox now - finding myself by losing who I thought I was."',
            consequence: 'Self-insight • Recognizes personal paradox',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }, { characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'explore_through_art',
            text: '"Could we create art that explores these paradoxes?"',
            consequence: 'Creative exploration • Wants to express paradox artistically',
            effects: [{ characterId: 'morgana', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'creative_communion'
          },
          {
            id: 'embrace_complexity',
            text: '"Maybe the goal isn\'t to resolve contradictions but to dance with them."',
            consequence: 'Philosophical acceptance • Embraces life\'s complexity',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'divine_understanding'
          }
        ]
      },
      // Batch 11 - Character development and outcome scenes
      {
        id: 'artistic_appreciation',
        title: 'Understanding True Beauty',
        text: [
          'Standing before Morgana\'s artwork, you\'re struck by the depth of beauty achieved through centuries of practice.',
          'Each piece tells a story not just of technical skill, but of emotional evolution and spiritual growth.',
          '"Beauty isn\'t just about perfection," you realize aloud. "It\'s about truth captured in form."',
          'Morgana\'s face lights up with joy at your understanding.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'explore_truth_in_art',
            text: '"How do you capture truth in your art? What makes a painting honest?"',
            consequence: 'Artistic philosophy • Seeks deeper understanding of creative truth',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'morgana_creative_connection'
          },
          {
            id: 'request_personal_lesson',
            text: '"Will you teach me to see beauty the way you do?"',
            consequence: 'Learning desire • Wants to develop artistic vision',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'appreciate_evolution',
            text: '"I can see your emotional journey through these pieces. It\'s like a visual autobiography."',
            consequence: 'Deep insight • Recognizes personal history in art',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'memory_sharing'
          }
        ]
      },
      {
        id: 'divine_understanding',
        title: 'Glimpsing the Sacred',
        text: [
          'Through your connection with Seraphina, you begin to understand what divine love might feel like.',
          'It\'s not the cold perfection you might have expected, but something warm, encompassing, and deeply personal.',
          '"This is what I discovered when I fell," Seraphina explains. "Divine love filtered through mortal hearts becomes something even more beautiful."',
          'You feel touched by something eternal yet intimate.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/bedroom.png',
        choices: [
          {
            id: 'embrace_sacred_connection',
            text: '"I feel blessed to experience this through you."',
            consequence: 'Spiritual gratitude • Appreciates divine connection',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'flight_memories'
          },
          {
            id: 'ask_about_mortal_hearts',
            text: '"How do mortal hearts transform divine love?"',
            consequence: 'Philosophical curiosity • Wants to understand the transformation',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'beauty_acknowledged'
          },
          {
            id: 'offer_partnership',
            text: '"Let me be your partner in exploring this beautiful mystery."',
            consequence: 'Romantic partnership • Offers to explore love together',
            effects: [{ characterId: 'seraphina', affectionChange: 55 }],
            nextScene: 'new_memory_creation'
          }
        ]
      },
      {
        id: 'beauty_acknowledged',
        title: 'Recognizing the Sacred in the Ordinary',
        text: [
          'A moment of profound recognition passes between you as you truly see the beauty in what\'s being offered.',
          'It\'s not just the supernatural nature of your companions, but the everyday miracles of connection, understanding, and growth.',
          'Seraphina speaks softly: "This is what I hoped to find when I fell - beauty that emerges from imperfection, love that grows from choice."',
          'You understand that you\'re witnessing and participating in something genuinely sacred.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'celebrate_imperfection',
            text: '"Perfect love would be boring. This messy, growing love is so much more alive."',
            consequence: 'Embraces authenticity • Values genuine over perfect',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'living_testament'
          },
          {
            id: 'commit_to_growth',
            text: '"I want to grow in love alongside all of you."',
            consequence: 'Growth commitment • Chooses development over stasis',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'acknowledge_sacred_ordinary',
            text: '"You\'ve taught me that the sacred exists in ordinary moments of connection."',
            consequence: 'Spiritual insight • Recognizes sacred in everyday',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'spiritual_awakening'
          }
        ]
      },
      {
        id: 'flight_memories',
        title: 'Wings of the Past',
        text: [
          'Seraphina closes her eyes, sharing a memory that feels almost tangible.',
          '"I remember the moment I chose to fall - spreading my wings one last time in Heaven before releasing them forever."',
          '"The sensation of flight was freedom, but the sensation of falling was choice. And choice, I discovered, is its own kind of flight."',
          'You feel the echo of that monumental decision, the weight and liberation of choosing love over certainty.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'honor_her_sacrifice',
            text: '"Your sacrifice gave you something Heaven couldn\'t - the freedom to love deeply."',
            consequence: 'Honors sacrifice • Recognizes value of her choice',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'memory_sharing'
          },
          {
            id: 'relate_to_falling',
            text: '"I understand that feeling - sometimes falling is the only way to truly fly."',
            consequence: 'Personal connection • Relates to transformative choices',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'new_memory_creation'
          },
          {
            id: 'ask_about_regret',
            text: '"Do you ever miss flying? Do you regret losing your wings?"',
            consequence: 'Gentle curiosity • Shows concern for her feelings',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'comfort_accepted'
          }
        ]
      },
      {
        id: 'memory_sharing',
        title: 'Weaving Stories Together',
        text: [
          'The evening becomes a tapestry of shared memories as each person opens their heart.',
          'Ancient stories blend with recent experiences, creating a collective narrative that includes you.',
          'Morgana shares memories of artistic breakthroughs, Seraphina speaks of learning to love imperfectly, and you contribute your own journey of discovery.',
          'You realize you\'re not just joining their history - you\'re helping write their future.'
        ],
        choices: [
          {
            id: 'contribute_your_story',
            text: 'Share your own pivotal memories and transformative moments.',
            consequence: 'Emotional openness • Contributes to collective narrative',
            effects: [
              { characterId: 'morgana', affectionChange: 25 },
              { characterId: 'seraphina', affectionChange: 25 },
              { characterId: 'lilith', affectionChange: 20 }
            ],
            nextScene: 'living_testament'
          },
          {
            id: 'focus_on_future',
            text: '"These memories are beautiful, but I\'m excited about the memories we\'ll create together."',
            consequence: 'Future-focused • Emphasizes upcoming shared experiences',
            effects: [
              { characterId: 'morgana', affectionChange: 30 },
              { characterId: 'seraphina', affectionChange: 30 }
            ],
            nextScene: 'new_memory_creation'
          },
          {
            id: 'appreciate_inclusion',
            text: '"Thank you for including me in your stories. It makes me feel truly part of the family."',
            consequence: 'Grateful inclusion • Appreciates being welcomed',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'new_memory_creation',
        title: 'Writing Tomorrow\'s Stories',
        text: [
          'This moment itself becomes a memory worth treasuring - the first of many you\'ll create together.',
          'There\'s something magical about consciously creating a memory, knowing it will be looked back upon as a turning point.',
          'Seraphina takes your hand: "This is what I gave up my wings for - moments like this, perfect in their imperfection."',
          'You feel the weight and joy of participating in something that will echo through time.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_many_memories',
            text: '"This is just the first of countless beautiful memories we\'ll make."',
            consequence: 'Future commitment • Promises continued connection',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'living_testament'
          },
          {
            id: 'capture_the_moment',
            text: '"I want to remember everything about this moment - every detail, every feeling."',
            consequence: 'Mindful presence • Values the current experience',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'honor_the_gift',
            text: '"Your sacrifice made this moment possible. I\'ll treasure it always."',
            consequence: 'Honors sacrifice • Shows appreciation for her journey',
            effects: [{ characterId: 'seraphina', affectionChange: 55 }],
            nextScene: 'spiritual_awakening'
          }
        ]
      },
      {
        id: 'living_testament',
        title: 'Becoming the Story',
        text: [
          'You realize that you\'re not just observing their stories or even joining them - you\'re becoming a living testament to what\'s possible.',
          'Your presence proves that bridges can be built, that understanding can grow, that love can transcend boundaries.',
          'Lilith speaks with deep emotion: "You are proof that Cordelia\'s dream wasn\'t just fantasy. You make the impossible real."',
          'The weight of being a symbol of hope settles on your shoulders, but it feels like purpose rather than burden.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_symbolic_role',
            text: '"If my presence can inspire hope, then I\'ll be the best symbol I can be."',
            consequence: 'Symbolic acceptance • Embraces inspirational role',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'focus_on_relationships',
            text: '"I\'m not interested in being a symbol. I just want to love and be loved."',
            consequence: 'Relationship focus • Prioritizes personal connection over symbolism',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'new_community'
          },
          {
            id: 'share_the_responsibility',
            text: '"We\'re all testaments to what\'s possible. This is our shared story."',
            consequence: 'Collective responsibility • Shares symbolic weight',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'transformation_celebration',
        title: 'Honoring Growth',
        text: [
          'The group spontaneously celebrates the transformation you\'ve all undergone together.',
          'It\'s not just about you joining them - they\'ve changed too, becoming more open, more hopeful, more connected.',
          'Morgana raises an improvised toast: "To transformation - not the kind that changes what we are, but the kind that reveals who we\'ve always been."',
          'The celebration feels both joyous and sacred.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'toast_to_growth',
            text: '"To growth, to love, to becoming the best versions of ourselves together."',
            consequence: 'Celebratory growth • Honors mutual development',
            effects: [
              { characterId: 'morgana', affectionChange: 35 },
              { characterId: 'seraphina', affectionChange: 30 },
              { characterId: 'lilith', affectionChange: 25 }
            ],
            nextScene: 'new_community'
          },
          {
            id: 'appreciate_mutual_change',
            text: '"I love that we\'ve all transformed each other. That\'s what real connection does."',
            consequence: 'Mutual transformation • Recognizes reciprocal change',
            effects: [{ characterId: 'morgana', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'living_testament'
          },
          {
            id: 'promise_continued_growth',
            text: '"This is just the beginning. We\'ll keep growing together."',
            consequence: 'Future commitment • Promises ongoing development',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'new_community',
        title: 'The Circle Complete',
        text: [
          'Looking around at the faces surrounding you, you realize that something fundamental has shifted.',
          'What began as a group of individuals has become a true community, bound not just by circumstance but by choice and love.',
          'Each person has found their place in this new configuration, including you.',
          'The future stretches ahead, full of possibility and shared purpose.'
        ],
        choices: [
          {
            id: 'embrace_leadership',
            text: 'Step into a leadership role within this new community.',
            consequence: 'Leadership acceptance • Takes active guiding role',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'valentina', affectionChange: 25 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'cherish_belonging',
            text: 'Simply cherish the feeling of belonging completely.',
            consequence: 'Grateful belonging • Appreciates complete acceptance',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'morgana', affectionChange: 25 },
              { characterId: 'elena', affectionChange: 30 }
            ],
            nextScene: 'shared_grief'
          },
          {
            id: 'plan_the_future',
            text: 'Begin discussing plans for your shared future.',
            consequence: 'Future planning • Focuses on upcoming possibilities',
            effects: [{ characterId: 'celeste', affectionChange: 35 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'wider_world_discussion'
          }
        ]
      },
      // Batch 12 - Final missing scenes for complete story coverage
      {
        id: 'courage_recognition',
        title: 'Acknowledging Inner Strength',
        text: [
          'Your companions look at you with newfound respect and admiration.',
          'Lilith speaks first: "The courage you\'ve shown isn\'t the kind that boasts or seeks attention. It\'s the quiet bravery of someone willing to step into the unknown for love."',
          'Raven nods approvingly: "True courage isn\'t fearlessness - it\'s feeling the fear and choosing to act anyway."',
          'You feel recognized not for what you\'ve accomplished, but for the character you\'ve revealed through your choices.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'humble_acceptance',
            text: '"I\'m just trying to be worthy of the trust you\'ve placed in me."',
            consequence: 'Humble response • Shows continued dedication to earning trust',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'raven', affectionChange: 25 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'acknowledge_growth',
            text: '"You\'ve all helped me discover courage I didn\'t know I had."',
            consequence: 'Growth recognition • Credits others for personal development',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'promise_continued_bravery',
            text: '"I promise to keep choosing courage, even when it\'s difficult."',
            consequence: 'Future commitment • Vows ongoing bravery',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'raven', affectionChange: 30 }],
            nextScene: 'sacred_vow_sealed'
          }
        ]
      },
      {
        id: 'legacy_acceptance',
        title: 'Embracing Cordelia\'s Vision',
        text: [
          'Standing in the room where Cordelia once made her own promises, you feel the weight and honor of carrying forward her legacy.',
          'Lilith speaks with reverence: "She would be so proud to see you here, accepting the responsibility she carried for decades."',
          '"Cordelia\'s legacy isn\'t just about maintaining tradition - it\'s about growing it, making it stronger for future generations."',
          'You understand that you\'re not just replacing her, but evolving her work into something new and more powerful.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'honor_her_vision',
            text: '"I want to honor her vision while adding my own perspective to strengthen it."',
            consequence: 'Legacy evolution • Balances tradition with innovation',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'cordelia_artistic_legacy'
          },
          {
            id: 'promise_growth',
            text: '"I promise to help her legacy grow and flourish, not just survive."',
            consequence: 'Growth commitment • Promises dynamic legacy continuation',
            effects: [{ characterId: 'lilith', affectionChange: 50 }],
            nextScene: 'sanctuary_responsibilities'
          },
          {
            id: 'ask_about_her_hopes',
            text: '"What were her deepest hopes for the future? I want to understand her dreams."',
            consequence: 'Vision alignment • Seeks to understand Cordelia\'s aspirations',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'cordelia_love_story'
          }
        ]
      },
      {
        id: 'cordelia_love_story',
        title: 'The Heart Behind the Legacy',
        text: [
          'Lilith\'s expression becomes tender as she shares Cordelia\'s most personal story.',
          '"Cordelia loved deeply - not just this coven, but each individual soul within it. She saw our potential when we couldn\'t see it ourselves."',
          '"Her greatest joy was watching vampires discover their capacity for growth, for change, for becoming more than they thought possible."',
          '"That love - fierce, protective, nurturing - is what made her irreplaceable. And it\'s what I see growing in you."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_love_legacy',
            text: '"I want to love this family the way she did - completely and unconditionally."',
            consequence: 'Love commitment • Embraces emotional legacy',
            effects: [{ characterId: 'lilith', affectionChange: 55 }, { characterId: 'elena', affectionChange: 30 }],
            nextScene: 'family_appreciation'
          },
          {
            id: 'learn_from_her_example',
            text: '"How can I learn to see potential in others the way she did?"',
            consequence: 'Wisdom seeking • Wants to develop Cordelia\'s gift for seeing potential',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'honor_her_heart',
            text: '"Her love created this sanctuary. I want to help it continue growing."',
            consequence: 'Legacy honor • Commits to continuing her loving work',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'sanctuary_challenges'
          }
        ]
      },
      {
        id: 'sanctuary_challenges',
        title: 'Facing Future Difficulties',
        text: [
          'The conversation turns to the practical challenges that lie ahead.',
          'Celeste speaks pragmatically: "Running a sanctuary isn\'t just about love and good intentions. There will be conflicts, resource issues, and difficult decisions."',
          'Raven adds: "External threats, internal disagreements, political pressures from other supernatural communities."',
          'You realize that accepting this role means preparing for challenges that will test every aspect of your character.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'prepare_systematically',
            text: '"Let\'s create systems and plans to handle these challenges proactively."',
            consequence: 'Strategic preparation • Focuses on systematic readiness',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'raven', affectionChange: 25 }],
            nextScene: 'threat_assessment'
          },
          {
            id: 'rely_on_team',
            text: '"I don\'t have to face these challenges alone. We\'ll handle them together."',
            consequence: 'Team approach • Emphasizes collective problem-solving',
            effects: [{ characterId: 'celeste', affectionChange: 35 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'accept_learning_curve',
            text: '"I\'ll make mistakes, but I\'ll learn from them and keep improving."',
            consequence: 'Growth mindset • Accepts imperfection while committing to improvement',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'shared_grief',
        title: 'Mourning Together',
        text: [
          'A moment of shared sadness passes through the room as everyone processes the losses that brought you here.',
          'Elena speaks quietly: "We all carry grief - for Cordelia, for the isolation we\'ve endured, for the world that doesn\'t understand us."',
          'Seraphina adds: "But grief shared becomes something different. It becomes connection, understanding, the foundation for healing."',
          'You feel the weight of their collective sorrow, but also the strength that comes from bearing it together.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_comfort',
            text: '"Your grief is safe with me. Let me help carry it."',
            consequence: 'Emotional support • Offers to share their burden',
            effects: [{ characterId: 'elena', affectionChange: 45 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'elena_comfort_accepted'
          },
          {
            id: 'share_your_grief',
            text: '"I have my own grief too. Maybe we can heal together."',
            consequence: 'Mutual vulnerability • Shares personal pain',
            effects: [{ characterId: 'elena', affectionChange: 50 }, { characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'comfort_accepted'
          },
          {
            id: 'focus_on_hope',
            text: '"From this shared grief, we\'ll build something beautiful together."',
            consequence: 'Transformative perspective • Sees grief as foundation for growth',
            effects: [{ characterId: 'elena', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'supernatural_potential',
        title: 'Recognizing Hidden Abilities',
        text: [
          'During your time at the sanctuary, you begin to notice subtle changes in yourself.',
          'Your intuition seems sharper, your empathy more precise, your ability to sense the supernatural more acute.',
          'Celeste observes: "Living among us is awakening latent psychic abilities. This often happens to Anchors."',
          'You realize that your role here isn\'t just changing you emotionally and socially, but potentially on a fundamental level.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_development',
            text: '"I welcome these changes. They\'ll help me serve everyone better."',
            consequence: 'Ability acceptance • Embraces supernatural development',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'ask_about_extent',
            text: '"How far might these abilities develop? What should I expect?"',
            consequence: 'Informed preparation • Seeks understanding of potential',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'anchor_powers_explained'
          },
          {
            id: 'request_guidance',
            text: '"Will you help me understand and control these developing abilities?"',
            consequence: 'Seeks mentorship • Requests guidance in development',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'psychic_training_offered'
          }
        ]
      },
      {
        id: 'natural_acceptance',
        title: 'Feeling at Home',
        text: [
          'Over time, what once felt strange and supernatural now feels natural and comfortable.',
          'The vampires\' nocturnal schedule becomes your rhythm, their concerns become your concerns, their joys become your joys.',
          'Morgana smiles as she observes: "You\'ve stopped seeing us as \'other.\' We\'re just... family now."',
          'The transition from visitor to family member feels complete and effortless.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'acknowledge_belonging',
            text: '"You\'re right. This isn\'t about vampires and humans anymore - it\'s just about family."',
            consequence: 'Family recognition • Acknowledges complete integration',
            effects: [{ characterId: 'morgana', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'new_community'
          },
          {
            id: 'appreciate_transition',
            text: '"The beautiful thing is how natural this feels now. Like I was always meant to be here."',
            consequence: 'Destiny acceptance • Feels naturally placed',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'living_testament'
          },
          {
            id: 'commit_to_growth',
            text: '"And I want to keep growing into this role, becoming even more than I am now."',
            consequence: 'Continued development • Commits to ongoing growth',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'transformation_celebration'
          }
        ]
      },
      // Batch 13 - Partnership and collaboration scenes
      {
        id: 'partnership_explanation',
        title: 'Defining the Relationship',
        text: [
          'The nature of your partnership with the coven becomes clearer through open discussion.',
          'Lilith explains: "You\'re not our employee or servant - you\'re our partner. We make decisions together, share responsibilities, support each other."',
          '"This is a relationship of equals, despite the differences in our nature. Your mortality brings perspectives we need."',
          'The mutual respect and collaboration feels both empowering and humbling.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_equality',
            text: '"I appreciate being treated as an equal partner. That means everything to me."',
            consequence: 'Partnership appreciation • Values equal treatment',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'valentina', affectionChange: 20 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'offer_unique_perspective',
            text: '"I promise to always offer my honest perspective, even when it differs from yours."',
            consequence: 'Authentic contribution • Commits to honest input',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'diplomatic_bridge_building'
          },
          {
            id: 'ask_about_boundaries',
            text: '"What are the boundaries of this partnership? What decisions require consensus?"',
            consequence: 'Practical clarity • Seeks clear expectations',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'collaborative_governance'
          }
        ]
      },
      {
        id: 'danger_discussion',
        title: 'Understanding the Risks',
        text: [
          'Raven takes the lead in explaining the various dangers you might face in your new role.',
          '"Supernatural politics are volatile. Rival covens might see you as a threat or a prize to be captured."',
          '"Hunters still exist, though they\'re less common than in past centuries. And rogue vampires who reject our peaceful approach."',
          '"Knowledge of these threats is your first line of defense."'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'request_training',
            text: '"I want comprehensive training in recognizing and avoiding these threats."',
            consequence: 'Safety priority • Requests thorough preparation',
            effects: [{ characterId: 'raven', affectionChange: 40 }],
            nextScene: 'threat_assessment'
          },
          {
            id: 'ask_about_protection',
            text: '"What protection measures are already in place? How do we maintain security?"',
            consequence: 'Security awareness • Seeks understanding of current protections',
            effects: [{ characterId: 'raven', affectionChange: 35 }, { characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'fortress_ravencroft'
          },
          {
            id: 'focus_on_prevention',
            text: '"I\'d rather prevent conflicts than fight them. How do we avoid making enemies?"',
            consequence: 'Peaceful approach • Prioritizes conflict prevention',
            effects: [{ characterId: 'raven', affectionChange: 30 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'diplomatic_bridge_building'
          }
        ]
      },
      {
        id: 'provisional_agreement',
        title: 'Trial Period Begins',
        text: [
          'The group agrees to begin with a provisional period to see how the arrangement works for everyone.',
          'Isadora suggests: "Perhaps a trial period would be wise - three months to see how we all adapt to this new dynamic."',
          'Celeste nods: "It takes time to fully understand the scope of the role and whether it\'s truly right for you."',
          'The gradual approach feels both careful and caring.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_trial_period',
            text: '"A trial period makes sense. I want this to work for everyone."',
            consequence: 'Reasonable approach • Accepts gradual integration',
            effects: [{ characterId: 'isadora', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'gradual_integration'
          },
          {
            id: 'express_confidence',
            text: '"I understand the caution, but I\'m confident this is right for all of us."',
            consequence: 'Self-assured • Shows confidence in decision',
            effects: [{ characterId: 'isadora', affectionChange: 30 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'arrangement_honored'
          },
          {
            id: 'suggest_milestones',
            text: '"Could we set specific milestones to evaluate progress during the trial?"',
            consequence: 'Structured approach • Suggests measurable goals',
            effects: [{ characterId: 'isadora', affectionChange: 40 }, { characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'arrangement_details'
          }
        ]
      },
      {
        id: 'amazed_acceptance',
        title: 'Wonder at the Impossible',
        text: [
          'The reality of your situation hits you with renewed force - you\'re being accepted into a family of vampires.',
          'The impossibility of it all strikes you: just weeks ago, vampires were mythology, and now you\'re about to become their advocate.',
          'Seraphina smiles at your expression: "The wonder never completely fades. Every day here still amazes me."',
          'You realize that maintaining this sense of awe might be important for staying grounded.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_wonder',
            text: '"I hope I never lose this sense of wonder. It makes everything more beautiful."',
            consequence: 'Wonder preservation • Values maintaining awe',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'umbra', affectionChange: 25 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'acknowledge_privilege',
            text: '"I\'m amazed by the privilege of being trusted with something so extraordinary."',
            consequence: 'Privilege recognition • Shows gratitude for opportunity',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'honored_trust'
          },
          {
            id: 'share_excitement',
            text: '"The impossibility of it makes it even more exciting. We\'re writing a new kind of story."',
            consequence: 'Excitement about novelty • Appreciates groundbreaking nature',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'new_memory_creation'
          }
        ]
      },
      {
        id: 'practical_coexistence',
        title: 'Daily Life Together',
        text: [
          'The conversation turns to the practical aspects of living together.',
          'Elena explains: "We\'ll need to coordinate schedules, share responsibilities, respect each other\'s space and needs."',
          'Celeste adds: "Your human needs - sleep schedule, food, social connections - will need to be accommodated."',
          'The attention to practical details shows their genuine commitment to making this work.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_consideration',
            text: '"Thank you for thinking about my practical needs. That consideration means a lot."',
            consequence: 'Gratitude for thoughtfulness • Appreciates practical care',
            effects: [{ characterId: 'elena', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'offer_flexibility',
            text: '"I\'m happy to adapt my schedule and habits to work better with yours."',
            consequence: 'Flexible accommodation • Shows willingness to adapt',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'gradual_integration'
          },
          {
            id: 'suggest_trial_run',
            text: '"Maybe we could do a trial run to work out any practical issues?"',
            consequence: 'Practical testing • Suggests experimental approach',
            effects: [{ characterId: 'elena', affectionChange: 30 }, { characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'provisional_agreement'
          }
        ]
      },
      {
        id: 'trust_acknowledged',
        title: 'The Gift of Confidence',
        text: [
          'A moment of profound recognition passes between you as the depth of trust being offered becomes clear.',
          'Lilith speaks with quiet intensity: "Trust, once broken between mortals and vampires, takes generations to rebuild."',
          '"By offering you our trust, we\'re risking everything we\'ve built. By accepting it, you\'re taking responsibility for our future."',
          'The weight of mutual trust settles between you like a sacred bond.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'vow_protection',
            text: '"I will guard your trust as carefully as I guard your lives."',
            consequence: 'Sacred protection • Commits to preserving trust',
            effects: [{ characterId: 'lilith', affectionChange: 50 }],
            nextScene: 'bond_protection_vow'
          },
          {
            id: 'promise_worthiness',
            text: '"I promise to prove worthy of this trust every single day."',
            consequence: 'Daily commitment • Vows ongoing worthiness',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'isadora', affectionChange: 20 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'acknowledge_reciprocity',
            text: '"This trust goes both ways. I\'m trusting you with my life and future too."',
            consequence: 'Mutual trust • Recognizes reciprocal vulnerability',
            effects: [{ characterId: 'lilith', affectionChange: 55 }],
            nextScene: 'sacred_vow_sealed'
          }
        ]
      },
      {
        id: 'nature_explanation',
        title: 'Understanding Vampire Nature',
        text: [
          'Celeste takes time to explain the nuances of vampire nature that aren\'t found in mythology.',
          '"We\'re not the monsters of legend. We experience the full range of emotions, form deep relationships, create art, pursue knowledge."',
          '"The need for blood is real, but we\'ve developed ethical ways to manage it. Consent, partnerships with willing donors, medical sources."',
          '"We\'re people who happen to be vampires, not vampires who used to be people."'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_complexity',
            text: '"I appreciate you explaining the reality rather than letting me rely on myths."',
            consequence: 'Reality appreciation • Values truth over fiction',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'ask_about_ethics',
            text: '"Tell me more about the ethical frameworks you\'ve developed."',
            consequence: 'Ethical interest • Wants to understand moral systems',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'philosophical_connection'
          },
          {
            id: 'focus_on_individuality',
            text: '"So each of you is a unique individual, just like any human community."',
            consequence: 'Individual recognition • Sees them as distinct people',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'individual_connections'
          }
        ]
      },
      {
        id: 'cordelia_role_detailed',
        title: 'The Anchor\'s Daily Life',
        text: [
          'Lilith provides detailed insight into what Cordelia\'s role actually involved day-to-day.',
          '"She was mediator, counselor, advocate, and sometimes simply a friend who listened without judgment."',
          '"Some days involved complex negotiations with supernatural communities. Others were just about being present for someone having a difficult century."',
          '"The role shaped itself around her strengths and grew with her understanding."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_mediation',
            text: '"What kinds of conflicts did she mediate? How did she approach resolution?"',
            consequence: 'Mediation interest • Seeks conflict resolution skills',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'diplomatic_bridge_building'
          },
          {
            id: 'focus_on_counseling',
            text: '"The counseling aspect appeals to me. How do you help someone process centuries of experience?"',
            consequence: 'Counseling interest • Values emotional support work',
            effects: [{ characterId: 'lilith', affectionChange: 35 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'appreciate_flexibility',
            text: '"I like that the role can grow and change. It won\'t be static or limiting."',
            consequence: 'Flexibility appreciation • Values adaptive role',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'arrangement_details'
          }
        ]
      },
      // Batch 14 - Guidance, training and development scenes
      {
        id: 'patient_guidance',
        title: 'Learning from Experience',
        text: [
          'Lilith takes on the role of mentor, sharing her wisdom with gentle patience.',
          '"Cordelia taught me that the best guidance comes through questions, not commands. I\'ll help you discover your own answers."',
          '"Experience is the best teacher, but wisdom shared can help you avoid unnecessary pain."',
          'Her approach feels both supportive and empowering, encouraging growth rather than dependence.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_approach',
            text: '"I appreciate learning through discovery rather than being told what to do."',
            consequence: 'Learning preference • Values guided discovery',
            effects: [{ characterId: 'lilith', affectionChange: 35 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'ask_about_cordelia_methods',
            text: '"How did Cordelia teach? What methods worked best for her students?"',
            consequence: 'Teaching interest • Wants to understand educational approaches',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'cordelia_research_revealed'
          },
          {
            id: 'request_specific_guidance',
            text: '"What are the most important lessons I should focus on first?"',
            consequence: 'Priority seeking • Wants to focus efforts effectively',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'gradual_integration'
          }
        ]
      },
      {
        id: 'physical_challenges_explained',
        title: 'The Body\'s Adaptation',
        text: [
          'Celeste explains the physical realities of living in a vampire household.',
          '"Your sleep schedule will gradually shift to match ours. Your body will adapt to lower light levels, different meal times."',
          '"Some humans develop enhanced night vision, improved hearing. Your body is remarkably adaptable."',
          '"We\'ll monitor your health carefully and adjust as needed."'
        ],
        character: characters.celeste,
        background: '/backgrounds/dining-hall.png',
        choices: [
          {
            id: 'embrace_adaptation',
            text: '"I\'m curious to see how my body adapts. It sounds fascinating."',
            consequence: 'Adaptation enthusiasm • Interested in physical changes',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'supernatural_potential'
          },
          {
            id: 'request_monitoring',
            text: '"I\'d appreciate careful monitoring. I want to stay healthy through the transition."',
            consequence: 'Health priority • Values medical oversight',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'ask_about_reversibility',
            text: '"Are these changes permanent? Can I return to a normal human schedule if needed?"',
            consequence: 'Cautious inquiry • Seeks understanding of permanence',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'gradual_integration'
          }
        ]
      },
      {
        id: 'cordelia_physical_stories',
        title: 'Precedent from the Past',
        text: [
          'Lilith shares stories of Cordelia\'s own adaptation to vampire life.',
          '"Cordelia initially struggled with the schedule change, but within months she was thriving on four hours of sleep."',
          '"She developed remarkable intuition about supernatural presences. Could sense a vampire from across a crowded room."',
          '"Her body adapted beautifully, but more importantly, she adapted emotionally and spiritually to our world."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'focus_on_intuition',
            text: '"The supernatural intuition sounds incredibly useful. How did she develop it?"',
            consequence: 'Ability interest • Wants to develop supernatural senses',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'appreciate_adaptation',
            text: '"It\'s encouraging to know someone else made this transition successfully."',
            consequence: 'Hope from precedent • Takes comfort in her example',
            effects: [{ characterId: 'lilith', affectionChange: 35 }],
            nextScene: 'cordelia_psychic_legacy'
          },
          {
            id: 'ask_about_emotional_adaptation',
            text: '"Tell me more about the emotional and spiritual adaptation. That seems most important."',
            consequence: 'Holistic focus • Prioritizes emotional/spiritual growth',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'spiritual_awakening'
          }
        ]
      },
      {
        id: 'morgana_creative_connection',
        title: 'Artistic Kinship',
        text: [
          'The connection between you and Morgana deepens through shared creative energy.',
          '"I feel it," she says with wonder. "A resonance between our creative spirits. It\'s like finding a missing harmony."',
          '"You see art the way I do - not just as decoration, but as a language for things too deep for words."',
          'The artistic bond feels both inspiring and intimate.'
        ],
        character: characters.morgana,
        background: '/backgrounds/bedroom.png',
        choices: [
          {
            id: 'explore_resonance',
            text: '"This resonance is amazing. What can we create together with this connection?"',
            consequence: 'Creative collaboration • Excited about joint artistic potential',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'appreciate_understanding',
            text: '"Finally, someone who understands that art is a language of the soul."',
            consequence: 'Artistic appreciation • Values deep creative understanding',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'creative_communion'
          },
          {
            id: 'offer_inspiration',
            text: '"Let me inspire your art as you inspire mine. We can create something eternal."',
            consequence: 'Mutual inspiration • Proposes reciprocal creative relationship',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'memory_sharing'
          }
        ]
      },
      {
        id: 'willpower_struggle',
        title: 'Testing Inner Strength',
        text: [
          'A moment arises that tests your resolve and commitment to this new path.',
          'The weight of responsibility, the strangeness of your situation, and the enormity of the commitment all press against your determination.',
          'Seraphina notices your struggle: "Every important choice involves a battle between fear and courage, doubt and faith."',
          'You realize this internal struggle is a natural part of growth.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'acknowledge_struggle',
            text: '"You\'re right. This is harder than I expected, but I\'m not giving up."',
            consequence: 'Honest acknowledgment • Shows resilience despite difficulty',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'courage_recognition'
          },
          {
            id: 'seek_support',
            text: '"I could use some encouragement right now. This feels overwhelming."',
            consequence: 'Vulnerability • Asks for emotional support',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'comfort_accepted'
          },
          {
            id: 'push_through_doubt',
            text: '"Doubt is just fear trying to protect me. I choose courage over comfort."',
            consequence: 'Determined resolution • Overcomes doubt through willpower',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }, { characterId: 'raven', affectionChange: 25 }],
            nextScene: 'determined_despite_fear'
          }
        ]
      },
      {
        id: 'hidden_struggle',
        title: 'Beneath the Surface',
        text: [
          'You notice signs that not everything is as harmonious as it appears on the surface.',
          'There are tensions, old wounds, unresolved conflicts that the coven is working to heal.',
          'Elena speaks quietly: "We\'re not perfect. We have our own struggles, our own healing to do."',
          'Understanding their vulnerabilities makes them seem more human, more relatable.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_support',
            text: '"Maybe having an outside perspective can help with some of these old wounds."',
            consequence: 'Healing offer • Proposes to help with internal conflicts',
            effects: [{ characterId: 'elena', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'elena_comfort_accepted'
          },
          {
            id: 'appreciate_honesty',
            text: '"Thank you for being honest about the struggles. Perfection would be intimidating."',
            consequence: 'Honesty appreciation • Values authentic disclosure',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'shared_grief'
          },
          {
            id: 'ask_how_to_help',
            text: '"How can I best support everyone through their individual healing journeys?"',
            consequence: 'Supportive inquiry • Seeks to understand how to help',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'curiosity_acknowledged',
        title: 'Questions Welcome',
        text: [
          'Your natural curiosity about their world is met with appreciation rather than annoyance.',
          'Celeste smiles: "Your questions show genuine interest in understanding, not just satisfying curiosity."',
          '"We\'ve lived with these realities for so long, we sometimes forget how remarkable they must seem to newcomers."',
          'Your inquisitive nature is clearly seen as an asset rather than a burden.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_fascination',
            text: '"Everything here fascinates me. I want to understand it all."',
            consequence: 'Intellectual enthusiasm • Shows genuine fascination',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'forbidden_knowledge_access'
          },
          {
            id: 'promise_thoughtful_inquiry',
            text: '"I\'ll keep asking questions, but I promise they\'ll always be respectful and purposeful."',
            consequence: 'Respectful curiosity • Commits to thoughtful inquiry',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'offer_fresh_perspective',
            text: '"My outsider perspective might help you see familiar things in new ways."',
            consequence: 'Perspective offering • Proposes mutual learning',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'diplomatic_bridge_building'
          }
        ]
      },
      {
        id: 'practical_curiosity',
        title: 'Everyday Wonders',
        text: [
          'Your questions shift to practical matters - how do they handle daily life, logistics, the mundane details of immortal existence.',
          'Morgana laughs: "You want to know about laundry and grocery shopping? How wonderfully human."',
          '"The truth is, immortal life still requires attention to practical details. We\'ve just had more time to optimize our systems."',
          'The blend of supernatural existence with ordinary concerns feels both amusing and reassuring.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_normalcy',
            text: '"It\'s comforting to know that even immortals have to deal with mundane tasks."',
            consequence: 'Normalcy comfort • Takes comfort in ordinary concerns',
            effects: [{ characterId: 'morgana', affectionChange: 30 }, { characterId: 'elena', affectionChange: 20 }],
            nextScene: 'practical_coexistence'
          },
          {
            id: 'ask_about_optimization',
            text: '"I\'d love to learn about these optimized systems. Centuries of experience must create great efficiency."',
            consequence: 'Efficiency interest • Wants to learn optimized approaches',
            effects: [{ characterId: 'morgana', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'offer_human_perspective',
            text: '"Maybe I can offer a fresh perspective on some of these systems."',
            consequence: 'Collaborative improvement • Offers to contribute ideas',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'partnership_explanation'
          }
        ]
      },
      {
        id: 'fearless_inquiry',
        title: 'Courage in Questions',
        text: [
          'You find yourself asking the difficult questions that others might shy away from.',
          'Questions about death, immortality, the ethics of vampirism, the cost of eternal life.',
          'Seraphina responds with deep respect: "These are the questions that matter. Shallow curiosity we can handle anywhere - profound inquiry is precious."',
          'Your willingness to engage with complex topics clearly impresses them.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'pursue_ethics',
            text: '"I\'m particularly interested in how you\'ve developed ethical frameworks for immortal existence."',
            consequence: 'Ethical inquiry • Seeks understanding of moral systems',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'philosophical_connection'
          },
          {
            id: 'explore_costs',
            text: '"What are the hidden costs of immortality that mortals don\'t consider?"',
            consequence: 'Cost awareness • Seeks understanding of immortal challenges',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }, { characterId: 'elena', affectionChange: 20 }],
            nextScene: 'hidden_struggle'
          },
          {
            id: 'discuss_meaning',
            text: '"How do you find meaning and purpose across centuries of existence?"',
            consequence: 'Existential inquiry • Explores purpose in immortality',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'purpose_revelation'
          }
        ]
      },
      // Batch 15 - Training, legacy and character-specific scenes
      {
        id: 'cordelia_psychic_legacy',
        title: 'Inherited Abilities',
        text: [
          'Celeste reveals more about Cordelia\'s unique psychic abilities and how they might manifest in you.',
          '"Cordelia developed remarkable empathic abilities - she could sense emotional states, detect deception, even glimpse surface thoughts when necessary."',
          '"These abilities seem to run in certain bloodlines. You may already be showing early signs."',
          'The possibility of developing supernatural abilities both excites and concerns you.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_potential',
            text: '"I\'m ready to explore these abilities responsibly. Will you guide my development?"',
            consequence: 'Ability acceptance • Embraces psychic potential with guidance',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'express_concerns',
            text: '"These abilities sound powerful. How do I ensure I use them ethically?"',
            consequence: 'Ethical concern • Worried about responsible use',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'psychic_services_accepted'
          },
          {
            id: 'ask_about_control',
            text: '"Can these abilities be controlled? I don\'t want to accidentally invade anyone\'s privacy."',
            consequence: 'Privacy concern • Worried about unwanted intrusion',
            effects: [{ characterId: 'celeste', affectionChange: 50 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'psychic_services_accepted',
        title: 'Offering Your Gifts',
        text: [
          'The coven warmly accepts your offer to use developing psychic abilities in service of the community.',
          'Lilith explains: "Cordelia often used her empathic abilities to mediate conflicts, detect threats, and provide emotional support."',
          '"Your growing abilities could serve similar purposes - helping heal old wounds, building trust, protecting the sanctuary."',
          'The prospect of using supernatural gifts for the good of others feels deeply meaningful.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_service',
            text: '"I want to use these gifts the way Cordelia did - to heal and protect."',
            consequence: 'Service commitment • Dedicates abilities to community welfare',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'request_training',
            text: '"I\'ll need proper training to use these abilities effectively and safely."',
            consequence: 'Training request • Seeks proper preparation',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'ask_about_cordelia_methods',
            text: '"How exactly did Cordelia use her abilities? What techniques did she develop?"',
            consequence: 'Method inquiry • Wants to understand Cordelia\'s approach',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'cordelia_research_revealed'
          }
        ]
      },
      {
        id: 'psychic_training_offered',
        title: 'Developing Your Gifts',
        text: [
          'Celeste offers to personally train you in developing and controlling your emerging psychic abilities.',
          '"We\'ll start with meditation, energy awareness, emotional shielding. The fundamentals that keep you safe."',
          '"Then we\'ll work on active abilities - reading emotions, detecting deception, projecting calm when needed."',
          'The structured approach to supernatural development feels both exciting and reassuring.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'begin_immediately',
            text: '"Let\'s start right away. I\'m eager to begin developing these abilities."',
            consequence: 'Immediate start • Enthusiastic about training',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'patience_training'
          },
          {
            id: 'ask_about_commitment',
            text: '"What kind of time commitment does this training require?"',
            consequence: 'Practical planning • Seeks understanding of requirements',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'request_safety_focus',
            text: '"I want to prioritize safety and control above all else."',
            consequence: 'Safety priority • Emphasizes responsible development',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'gradual_integration'
          }
        ]
      },
      {
        id: 'family_consideration',
        title: 'Weighing the Decision',
        text: [
          'The magnitude of joining a vampire family gives you pause as you consider all the implications.',
          'This isn\'t just changing jobs or moving - it\'s fundamentally altering the trajectory of your entire life.',
          'Elena notices your contemplation: "Take all the time you need. This decision will affect everyone, so it should feel completely right."',
          'The weight of the choice settles over you, but so does the exciting possibility of a truly extraordinary life.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'acknowledge_magnitude',
            text: '"You\'re right, this is the biggest decision I\'ve ever made. But I think it\'s the right one."',
            consequence: 'Thoughtful acceptance • Recognizes significance while choosing to proceed',
            effects: [{ characterId: 'elena', affectionChange: 40 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'trust_acknowledged'
          },
          {
            id: 'express_readiness',
            text: '"I\'ve thought it through carefully. I\'m ready for this extraordinary life."',
            consequence: 'Confident readiness • Shows decisive commitment',
            effects: [{ characterId: 'elena', affectionChange: 35 }, { characterId: 'isadora', affectionChange: 20 }],
            nextScene: 'amazed_acceptance'
          },
          {
            id: 'ask_for_time',
            text: '"Could I have a little more time to process everything before making my final decision?"',
            consequence: 'Thoughtful delay • Requests additional consideration time',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'provisional_agreement'
          }
        ]
      },
      {
        id: 'bond_protection_vow',
        title: 'Sacred Promise',
        text: [
          'In a moment of profound connection, you make a solemn vow to protect the bonds you\'re forming.',
          '"I swear to guard not just your secrets and your safety, but the trust and love we\'re building together."',
          'Lilith\'s eyes shine with emotion: "That vow goes both ways. We will protect you as fiercely as you protect us."',
          'The mutual commitment feels like a sacred contract sealed not with signatures, but with hearts.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'seal_with_ceremony',
            text: '"Should we mark this commitment with some kind of ceremony or ritual?"',
            consequence: 'Ceremonial marking • Seeks formal recognition of vows',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'focus_on_daily_proof',
            text: '"I\'ll prove this vow through my daily actions, not just my words."',
            consequence: 'Action commitment • Emphasizes proof through behavior',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'raven', affectionChange: 20 }],
            nextScene: 'living_testament'
          },
          {
            id: 'include_everyone',
            text: '"This vow extends to everyone here. You\'re all my family now."',
            consequence: 'Inclusive commitment • Extends vow to entire coven',
            effects: [
              { characterId: 'lilith', affectionChange: 55 },
              { characterId: 'elena', affectionChange: 25 },
              { characterId: 'morgana', affectionChange: 20 }
            ],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'morgana_introduction',
        title: 'The Artist\'s Welcome',
        text: [
          'Morgana approaches with an elegant grace that speaks to centuries of refined movement.',
          '"Welcome to our sanctuary. I sense an artistic soul in you - there\'s a creative energy that\'s quite lovely."',
          'She gestures to the artwork adorning the walls: "Art has always been my way of processing the complexity of immortal existence."',
          'Her immediate recognition of your creative nature feels both flattering and slightly unnerving.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_art',
            text: '"Your artwork is breathtaking. Each piece tells such a rich story."',
            consequence: 'Artistic appreciation • Shows genuine admiration for her work',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'artistic_appreciation'
          },
          {
            id: 'share_creative_interests',
            text: '"I do love art and creativity. What mediums do you work in?"',
            consequence: 'Creative curiosity • Shows interest in her artistic practice',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'morgana_creative_connection'
          },
          {
            id: 'ask_about_creative_process',
            text: '"How has immortality changed your artistic vision over the centuries?"',
            consequence: 'Deep inquiry • Interested in how time affects creativity',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'artistic_collaboration_planned'
          }
        ]
      },
      {
        id: 'artistic_collaboration_planned',
        title: 'Creative Partnership',
        text: [
          'Morgana\'s excitement about potential artistic collaboration is infectious.',
          '"I haven\'t had a creative partner in decades. The possibility of fresh perspectives, new techniques, collaborative inspiration..."',
          '"We could create something neither of us could achieve alone - art that bridges mortal and immortal experience."',
          'The prospect of creating meaningful art together feels like a beautiful way to deepen your connection.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'propose_joint_project',
            text: '"Let\'s start with a joint project that tells the story of this sanctuary."',
            consequence: 'Collaborative proposal • Suggests meaningful shared project',
            effects: [{ characterId: 'morgana', affectionChange: 50 }],
            nextScene: 'cordelia_artistic_legacy'
          },
          {
            id: 'offer_fresh_perspective',
            text: '"I\'d love to bring a mortal perspective to immortal themes in your art."',
            consequence: 'Perspective offering • Proposes unique viewpoint contribution',
            effects: [{ characterId: 'morgana', affectionChange: 45 }],
            nextScene: 'memory_sharing'
          },
          {
            id: 'ask_about_teaching',
            text: '"Would you teach me some of your techniques? I want to learn from your centuries of experience."',
            consequence: 'Learning request • Seeks artistic mentorship',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'cordelia_artistic_legacy',
        title: 'The Creative Inheritance',
        text: [
          'Morgana shares how Cordelia influenced and supported the artistic life of the sanctuary.',
          '"Cordelia wasn\'t an artist herself, but she understood the importance of beauty, creativity, and self-expression for immortal wellbeing."',
          '"She encouraged everyone to pursue their passions, provided resources, created spaces for artistic exploration."',
          '"Your own creative spirit could continue that legacy - supporting and inspiring everyone\'s artistic growth."'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_cultural_role',
            text: '"I\'d love to help cultivate a thriving artistic culture here."',
            consequence: 'Cultural commitment • Embraces role in creative community',
            effects: [{ characterId: 'morgana', affectionChange: 50 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'new_community'
          },
          {
            id: 'propose_art_programs',
            text: '"Maybe we could develop formal programs - workshops, exhibitions, creative collaborations."',
            consequence: 'Program proposal • Suggests structured artistic activities',
            effects: [{ characterId: 'morgana', affectionChange: 45 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'honor_cordelia_vision',
            text: '"I want to honor Cordelia\'s vision while adding my own creative energy to it."',
            consequence: 'Legacy honor • Combines respect with innovation',
            effects: [{ characterId: 'morgana', affectionChange: 55 }],
            nextScene: 'legacy_acceptance'
          }
        ]
      },
      {
        id: 'guardian_oath',
        title: 'The Sacred Vow',
        text: [
          'In a moment heavy with significance, you formally accept the role of Guardian and Anchor.',
          'Lilith speaks with ceremonial gravity: "Do you swear to protect this sanctuary, guide this family, and serve as bridge between our worlds?"',
          '"Do you promise to honor Cordelia\'s legacy while forging your own path forward?"',
          'The weight of the oath settles on your shoulders, but it feels like purpose rather than burden.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'swear_complete_oath',
            text: '"I swear all of this, with my whole heart and soul."',
            consequence: 'Full commitment • Complete acceptance of all responsibilities',
            effects: [
              { characterId: 'lilith', affectionChange: 60 },
              { characterId: 'isadora', affectionChange: 30 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            nextScene: 'sacred_vow_sealed'
          },
          {
            id: 'swear_with_conditions',
            text: '"I swear this oath, and I ask for your patience as I grow into these responsibilities."',
            consequence: 'Humble commitment • Accepts while acknowledging learning needs',
            effects: [{ characterId: 'lilith', affectionChange: 50 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'modify_oath',
            text: '"I swear to protect and guide, but I want this to be a partnership, not a hierarchy."',
            consequence: 'Partnership emphasis • Seeks collaborative rather than hierarchical structure',
            effects: [{ characterId: 'lilith', affectionChange: 55 }, { characterId: 'valentina', affectionChange: 30 }],
            nextScene: 'collaborative_governance'
          }
        ]
      },
      // Batch 16 - Final completion batch with remaining core scenes
      {
        id: 'threat_assessment',
        title: 'Understanding the Dangers',
        text: [
          'Raven provides a comprehensive overview of potential threats to the sanctuary.',
          '"External threats include rival covens seeking to expand territory, hunters who still operate in secret, and rogue vampires who might expose us all."',
          '"Internal threats are subtler - conflicts between members, breaches of trust, or decisions that could fracture our unity."',
          'The systematic approach to threat awareness feels both sobering and reassuring.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'focus_on_prevention',
            text: '"How do we prevent these threats rather than just respond to them?"',
            consequence: 'Prevention focus • Prioritizes proactive threat management',
            effects: [{ characterId: 'raven', affectionChange: 40 }],
            nextScene: 'fortress_ravencroft'
          },
          {
            id: 'ask_about_early_warning',
            text: '"What early warning systems do we have in place?"',
            consequence: 'Security interest • Seeks understanding of detection methods',
            effects: [{ characterId: 'raven', affectionChange: 35 }],
            nextScene: 'strategic_patience'
          },
          {
            id: 'offer_human_perspective',
            text: '"My mortal perspective might help identify threats you haven\'t considered."',
            consequence: 'Perspective contribution • Offers unique viewpoint on security',
            effects: [{ characterId: 'raven', affectionChange: 45 }],
            nextScene: 'collaborative_governance'
          }
        ]
      },
      {
        id: 'gradual_integration',
        title: 'Taking It Slowly',
        text: [
          'The decision is made to integrate you into the sanctuary gradually, allowing everyone to adjust.',
          'Elena explains: "This approach respects both your need to adapt and our need to ensure compatibility."',
          '"We\'ll start with extended visits, then longer stays, building up to full residency as everyone becomes comfortable."',
          'The measured pace feels considerate and wise.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_consideration',
            text: '"Thank you for being so thoughtful about this transition."',
            consequence: 'Gratitude • Appreciates careful approach',
            effects: [{ characterId: 'elena', affectionChange: 35 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'suggest_milestones',
            text: '"Should we establish specific milestones to evaluate progress?"',
            consequence: 'Structured approach • Proposes measurable integration goals',
            effects: [{ characterId: 'elena', affectionChange: 40 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'express_eagerness',
            text: '"I\'m excited to take this journey, even if we\'re going slowly."',
            consequence: 'Positive attitude • Shows enthusiasm despite gradual pace',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'amazed_acceptance'
          }
        ]
      },
      {
        id: 'arrangement_honored',
        title: 'Keeping Promises',
        text: [
          'The commitment to honor all arrangements and agreements becomes a cornerstone of trust.',
          'Isadora speaks with approval: "Your word clearly means something to you. That\'s the foundation of all good relationships."',
          '"When promises are kept consistently, trust grows naturally. When they\'re broken, it can take years to rebuild."',
          'The emphasis on reliability and integrity resonates deeply with your values.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_reliability',
            text: '"My word is my bond. You can count on me to keep every promise I make."',
            consequence: 'Reliability commitment • Emphasizes trustworthiness',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'trust_acknowledged'
          },
          {
            id: 'ask_about_expectations',
            text: '"What promises and commitments are most important to honor here?"',
            consequence: 'Expectation clarity • Seeks understanding of key commitments',
            effects: [{ characterId: 'isadora', affectionChange: 40 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'appreciate_emphasis',
            text: '"I appreciate that integrity matters so much here. It shows the quality of this community."',
            consequence: 'Value appreciation • Recognizes community character',
            effects: [{ characterId: 'isadora', affectionChange: 50 }],
            nextScene: 'coven_hierarchy_revealed'
          }
        ]
      },
      {
        id: 'arrangement_details',
        title: 'Working Out the Specifics',
        text: [
          'The conversation turns to practical details of how your new role will function day-to-day.',
          'Celeste takes the lead: "We\'ll need to establish schedules, responsibilities, boundaries, and protocols for various situations."',
          'Isadora adds: "Clear expectations prevent misunderstandings and help everyone feel secure in their roles."',
          'The attention to practical details shows their commitment to making this work smoothly.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'request_written_guidelines',
            text: '"Could we document these arrangements so everyone has clear reference?"',
            consequence: 'Documentation request • Seeks formal clarity',
            effects: [{ characterId: 'celeste', affectionChange: 40 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'negotiation_begins'
          },
          {
            id: 'suggest_trial_period',
            text: '"Maybe we could start with provisional arrangements and adjust as we learn?"',
            consequence: 'Flexible approach • Suggests adaptive arrangements',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'provisional_agreement'
          },
          {
            id: 'focus_on_communication',
            text: '"I think regular check-ins will be more important than rigid rules."',
            consequence: 'Communication emphasis • Prioritizes ongoing dialogue',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'collaborative_governance'
          }
        ]
      },
      {
        id: 'negotiation_begins',
        title: 'Finding Common Ground',
        text: [
          'The process of negotiating your role becomes an exercise in collaborative problem-solving.',
          'Everyone contributes ideas, concerns, and suggestions, working toward arrangements that serve everyone\'s needs.',
          'Lilith observes: "This is exactly how Cordelia approached decisions - inclusive, thoughtful, focused on the common good."',
          'The collaborative approach makes you feel valued as an equal participant rather than a supplicant.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_inclusion',
            text: '"I love that everyone gets input. This feels like true partnership."',
            consequence: 'Partnership appreciation • Values inclusive decision-making',
            effects: [{ characterId: 'lilith', affectionChange: 40 }, { characterId: 'valentina', affectionChange: 20 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'contribute_actively',
            text: '"Let me contribute some ideas based on my perspective and experience."',
            consequence: 'Active participation • Offers to contribute to solutions',
            effects: [{ characterId: 'lilith', affectionChange: 35 }],
            nextScene: 'partnership_explanation'
          },
          {
            id: 'seek_win_win',
            text: '"I want to find solutions that benefit everyone, not just accommodate me."',
            consequence: 'Win-win focus • Prioritizes mutual benefit',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'diplomatic_bridge_building'
          }
        ]
      },
      {
        id: 'manor_tour_begins',
        title: 'Exploring Your New Home',
        text: [
          'The comprehensive tour of Ravencroft Manor reveals the depth of history and care invested in this sanctuary.',
          'Elena guides you through libraries, art studios, meditation spaces, and comfortable living areas.',
          '"Every room has been designed with both beauty and function in mind. This is a home, not just a residence."',
          'The thoughtful design and maintenance show how much this place means to everyone who lives here.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_design',
            text: '"The attention to detail is incredible. Every space feels both beautiful and purposeful."',
            consequence: 'Design appreciation • Recognizes thoughtful planning',
            effects: [{ characterId: 'elena', affectionChange: 35 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'historical_tour'
          },
          {
            id: 'ask_about_personalization',
            text: '"Can I contribute to the design and feel of the spaces? Add my own touches?"',
            consequence: 'Personalization interest • Wants to contribute to home feel',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'resident_introductions'
          },
          {
            id: 'focus_on_comfort',
            text: '"It really does feel like a home, not just a grand mansion. That\'s special."',
            consequence: 'Comfort recognition • Appreciates homey atmosphere',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'practical_coexistence'
          }
        ]
      },
      {
        id: 'historical_tour',
        title: 'Stories in Stone',
        text: [
          'The manor\'s history unfolds as you explore rooms that have witnessed decades of vampire life.',
          'Lilith shares stories: "This library saw countless late-night philosophical discussions. That parlor hosted negotiations that prevented wars."',
          '"Every corner holds memories of growth, conflict, resolution, and love. You\'re about to become part of that history."',
          'The weight of historical significance makes your future role feel both daunting and honored.'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'honor_the_history',
            text: '"I want to add to this history respectfully, honoring what came before while building the future."',
            consequence: 'Historical respect • Balances tradition with progress',
            effects: [{ characterId: 'lilith', affectionChange: 45 }, { characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'legacy_acceptance'
          },
          {
            id: 'ask_about_stories',
            text: '"Will you tell me more of these stories? I want to understand the full context."',
            consequence: 'Story interest • Seeks deeper historical understanding',
            effects: [{ characterId: 'lilith', affectionChange: 40 }],
            nextScene: 'cordelia_love_story'
          },
          {
            id: 'focus_on_future',
            text: '"I\'m excited about the history we\'ll create together in these rooms."',
            consequence: 'Future focus • Emphasizes upcoming shared experiences',
            effects: [{ characterId: 'lilith', affectionChange: 50 }],
            nextScene: 'new_memory_creation'
          }
        ]
      },
      {
        id: 'resident_introductions',
        title: 'Meeting the Family',
        text: [
          'Formal introductions allow you to connect with each resident as an individual rather than part of a group.',
          'Each person shares something personal - a passion, a concern, a hope for the future.',
          'The individual connections feel more intimate and meaningful than group interactions.',
          'You begin to see the unique personality and story of each family member.'
        ],
        choices: [
          {
            id: 'focus_on_individuals',
            text: 'Take time to really connect with each person individually.',
            consequence: 'Individual connection • Prioritizes personal relationships',
            effects: [
              { characterId: 'elena', affectionChange: 25 },
              { characterId: 'morgana', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 20 }
            ],
            nextScene: 'individual_connections'
          },
          {
            id: 'ask_about_roles',
            text: 'Learn about everyone\'s specific roles and contributions to the sanctuary.',
            consequence: 'Role understanding • Seeks to understand community structure',
            effects: [
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'isadora', affectionChange: 25 }
            ],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'share_about_yourself',
            text: 'Open up about your own background, interests, and hopes.',
            consequence: 'Personal sharing • Offers reciprocal openness',
            effects: [
              { characterId: 'elena', affectionChange: 30 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'memory_sharing'
          }
        ]
      },
      {
        id: 'conversation_continues',
        title: 'Deepening Understanding',
        text: [
          'As conversations deepen, barriers continue to fall and genuine connections form.',
          'What started as formal introductions becomes natural, flowing dialogue about hopes, dreams, and experiences.',
          'You find yourself laughing, debating, and sharing in ways that feel entirely natural.',
          'The transition from stranger to family member is happening more quickly than you expected.'
        ],
        choices: [
          {
            id: 'embrace_natural_flow',
            text: 'Let the conversations develop organically without forcing connection.',
            consequence: 'Natural development • Allows authentic relationship building',
            effects: [
              { characterId: 'elena', affectionChange: 25 },
              { characterId: 'morgana', affectionChange: 20 },
              { characterId: 'umbra', affectionChange: 25 }
            ],
            nextScene: 'natural_acceptance'
          },
          {
            id: 'ask_thoughtful_questions',
            text: 'Ask deeper questions that show genuine interest in their experiences.',
            consequence: 'Thoughtful inquiry • Shows deep interest in their lives',
            effects: [
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'fearless_inquiry'
          },
          {
            id: 'share_vulnerabilities',
            text: 'Share some of your own vulnerabilities and uncertainties.',
            consequence: 'Vulnerable sharing • Opens up authentically',
            effects: [
              { characterId: 'elena', affectionChange: 35 },
              { characterId: 'seraphina', affectionChange: 30 }
            ],
            nextScene: 'shared_grief'
          }
        ]
      },
      // Batch 17 - Character introductions and specialized interactions
      {
        id: 'seraphina_healer_introduction',
        title: 'The Fallen Angel\'s Grace',
        text: [
          'Seraphina approaches with otherworldly grace, her presence immediately calming your anxieties.',
          '"I sense your fear," she says gently. "It\'s natural when facing the unknown. I once felt the same terror when I chose to fall from Heaven."',
          '"My gift is healing - not just physical wounds, but emotional and spiritual ones. Let me help ease your transition."',
          'Her divine nature feels comforting rather than intimidating, like being wrapped in warm starlight.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_healing_offer',
            text: '"I would be grateful for your help. This is all so overwhelming."',
            consequence: 'Accepts healing • Opens to divine comfort',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'phobia_management_discussion'
          },
          {
            id: 'ask_about_falling',
            text: '"What was it like to fall from Heaven? How did you cope with such a massive change?"',
            consequence: 'Personal curiosity • Seeks understanding of her experience',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'flight_memories'
          },
          {
            id: 'appreciate_divine_nature',
            text: '"Your presence is incredibly peaceful. I can feel something sacred in you."',
            consequence: 'Divine recognition • Acknowledges her holy nature',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'divine_understanding'
          }
        ]
      },
      {
        id: 'phobia_management_discussion',
        title: 'Overcoming Fear',
        text: [
          'Seraphina shares techniques for managing the overwhelming nature of supernatural encounters.',
          '"Fear is wisdom speaking - it keeps you alive. But when fear becomes paralysis, it needs guidance."',
          '"Breathing exercises, grounding techniques, gradual exposure - we\'ll help you build confidence step by step."',
          'Her approach feels both practical and spiritually nurturing.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'request_immediate_help',
            text: '"Could we start with some techniques right now? I could use the support."',
            consequence: 'Immediate support • Seeks current assistance',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'fear_overcoming_support'
          },
          {
            id: 'ask_about_gradual_exposure',
            text: '"How does gradual exposure work with supernatural experiences?"',
            consequence: 'Method curiosity • Wants to understand the process',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'patience_training'
          },
          {
            id: 'appreciate_understanding',
            text: '"Thank you for understanding that fear can be both helpful and limiting."',
            consequence: 'Appreciation • Values her balanced perspective',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'comfort_accepted'
          }
        ]
      },
      {
        id: 'fear_overcoming_support',
        title: 'Building Courage Together',
        text: [
          'Seraphina guides you through practical exercises for managing supernatural anxiety.',
          'Her calm presence and gentle encouragement help you feel more grounded and capable.',
          '"Courage isn\'t the absence of fear - it\'s feeling the fear and choosing to act with love anyway."',
          'Each small step forward builds your confidence for the journey ahead.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'practice_regularly',
            text: '"I want to practice these techniques regularly. Will you help me maintain this progress?"',
            consequence: 'Commitment to growth • Seeks ongoing support',
            effects: [{ characterId: 'seraphina', affectionChange: 45 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'share_progress',
            text: '"I already feel more centered. Your guidance is incredibly effective."',
            consequence: 'Progress recognition • Acknowledges improvement',
            effects: [{ characterId: 'seraphina', affectionChange: 40 }],
            nextScene: 'courage_recognition'
          },
          {
            id: 'ask_about_love_approach',
            text: '"Acting with love instead of fear - that\'s a beautiful philosophy. Tell me more."',
            consequence: 'Philosophy interest • Wants to understand love-based approach',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }],
            nextScene: 'divine_understanding'
          }
        ]
      },
      {
        id: 'raven_acknowledgment',
        title: 'The Warrior\'s Respect',
        text: [
          'Raven studies you with the careful assessment of someone who has seen many battles.',
          '"You have more steel in your spine than most mortals I\'ve encountered," she observes approvingly.',
          '"Strength isn\'t about fearlessness - it\'s about facing danger for something worth protecting."',
          'Her respect feels hard-earned and deeply meaningful.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'honor_her_assessment',
            text: '"Coming from a warrior like you, that means everything. Thank you."',
            consequence: 'Honor acceptance • Values warrior\'s respect',
            effects: [{ characterId: 'raven', affectionChange: 40 }],
            nextScene: 'courage_recognition'
          },
          {
            id: 'ask_about_protection',
            text: '"What do you see as worth protecting here? What drives your strength?"',
            consequence: 'Values inquiry • Seeks understanding of her motivations',
            effects: [{ characterId: 'raven', affectionChange: 45 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'request_training',
            text: '"I want to become stronger, more capable of protecting what matters. Will you teach me?"',
            consequence: 'Training request • Seeks to develop protective abilities',
            effects: [{ characterId: 'raven', affectionChange: 50 }],
            nextScene: 'threat_assessment'
          }
        ]
      },
      {
        id: 'isadora_political_dance',
        title: 'The Art of Diplomacy',
        text: [
          'Isadora demonstrates the subtle art of supernatural politics through graceful conversation.',
          '"Every word carries weight in our world. A misplaced phrase can start wars; the right sentiment can prevent them."',
          '"Diplomacy is like dancing - it requires grace, timing, and the ability to lead or follow as the situation demands."',
          'You begin to understand the complex social dynamics that keep supernatural communities stable.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'request_diplomacy_lessons',
            text: '"I want to learn this art. Will you teach me the nuances of supernatural diplomacy?"',
            consequence: 'Diplomacy learning • Seeks political education',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'diplomatic_bridge_building'
          },
          {
            id: 'appreciate_complexity',
            text: '"I had no idea how complex and delicate these relationships are. It\'s fascinating."',
            consequence: 'Complexity appreciation • Recognizes political sophistication',
            effects: [{ characterId: 'isadora', affectionChange: 40 }],
            nextScene: 'coven_hierarchy_revealed'
          },
          {
            id: 'ask_about_mistakes',
            text: '"What are the most dangerous mistakes a newcomer might make politically?"',
            consequence: 'Risk awareness • Seeks to avoid diplomatic errors',
            effects: [{ characterId: 'isadora', affectionChange: 50 }],
            nextScene: 'practical_concerns'
          }
        ]
      },
      {
        id: 'luna_prophecy_glimpse',
        title: 'Visions of Tomorrow',
        text: [
          'Luna steps forward from the shadows like a living constellation. She\'s ethereally beautiful with long silver-white hair that seems to shimmer with its own inner light, and deep violet eyes that hold the depth of eternity. Her pale skin has an otherworldly luminescence, as if starlight flows beneath the surface.',
          'She wears flowing dark robes adorned with celestial symbols that seem to move and shift when you\'re not looking directly at them. Delicate silver jewelry catches the light, and her movements have a dreamlike quality that suggests she exists partially in this world and partially in realms beyond.',
          'Her eyes grow distant as she shares fragments of prophetic visions about your future. "I see threads of possibility - paths where you bring great change, others where you find deep love, some where you face terrible choices."',
          '"The future is not fixed, but your presence here creates ripples that will be felt for generations." Her voice carries the weight of cosmic knowledge.',
          'Her mysterious insights both intrigue and unnerve you.'
        ],
        character: characters.luna,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_specific_visions',
            text: '"Can you tell me more about these visions? What kinds of changes do you see?"',
            consequence: 'Vision curiosity • Seeks specific prophetic details',
            effects: [{ characterId: 'luna', affectionChange: 40 }],
            nextScene: 'purpose_revelation'
          },
          {
            id: 'focus_on_choices',
            text: '"You mentioned terrible choices. How can I prepare to make the right decisions?"',
            consequence: 'Choice preparation • Seeks guidance for future decisions',
            effects: [{ characterId: 'luna', affectionChange: 45 }],
            nextScene: 'leadership_wisdom'
          },
          {
            id: 'embrace_uncertainty',
            text: '"I\'ll focus on making each day meaningful rather than worrying about distant futures."',
            consequence: 'Present focus • Chooses immediate over prophetic',
            effects: [{ characterId: 'luna', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'elena_isolation_bridge',
        title: 'Reaching Across Loneliness',
        text: [
          'Elena opens up about the profound isolation that comes with immortal existence.',
          '"Centuries of watching mortal friends age and die, of hiding our true nature, of never quite belonging anywhere..."',
          '"But your presence here offers something I\'d almost forgotten - the possibility of genuine connection without pretense."',
          'Her vulnerability creates a bridge of understanding between your experiences.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'share_your_isolation',
            text: '"I understand loneliness too. Maybe we can help heal each other\'s isolation."',
            consequence: 'Mutual healing • Offers reciprocal support',
            effects: [{ characterId: 'elena', affectionChange: 50 }],
            nextScene: 'elena_comfort_accepted'
          },
          {
            id: 'offer_genuine_connection',
            text: '"I want to offer you the genuine connection you\'ve been missing."',
            consequence: 'Connection offer • Promises authentic relationship',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'artistic_soul_connection'
          },
          {
            id: 'ask_about_belonging',
            text: '"How do we create a space where everyone truly belongs?"',
            consequence: 'Belonging focus • Seeks to build inclusive community',
            effects: [{ characterId: 'elena', affectionChange: 55 }],
            nextScene: 'new_community'
          }
        ]
      },
      // Batch 18 - Political and hierarchy scenes
      {
        id: 'coven_hierarchy_revealed',
        title: 'Understanding the Structure',
        text: [
          'Celeste explains the complex hierarchy and relationships within the supernatural community.',
          '"We have elders who provide wisdom, specialists who handle specific needs, and newer members who bring fresh perspectives."',
          '"It\'s not rigid - roles can evolve, and respect is earned through contribution rather than just age or power."',
          'The structure feels more like a family with specialized roles than a strict hierarchy.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_your_place',
            text: '"Where would I fit in this structure? What would my role and responsibilities be?"',
            consequence: 'Role inquiry • Seeks understanding of personal position',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'cordelia_role_detailed'
          },
          {
            id: 'appreciate_flexibility',
            text: '"I love that it\'s flexible and based on contribution rather than rigid hierarchy."',
            consequence: 'Structure appreciation • Values merit-based system',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'ask_about_decision_making',
            text: '"How are important decisions made? Who has input on major choices?"',
            consequence: 'Process curiosity • Wants to understand governance',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'democratic_coven'
          }
        ]
      },
      {
        id: 'revolutionary_recruitment',
        title: 'The Call for Change',
        text: [
          'Valentina passionately presents her vision for transforming vampire society.',
          '"We have the power to reshape the supernatural world - to create justice where there has been oppression, equality where there has been hierarchy."',
          '"Your fresh perspective could be exactly what this revolution needs. Will you stand with us for real change?"',
          'Her revolutionary fervor is both inspiring and slightly overwhelming.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'join_the_revolution',
            text: '"Yes, I want to help create a more just supernatural world."',
            consequence: 'Revolutionary commitment • Joins the cause for change',
            effects: [{ characterId: 'valentina', affectionChange: 55 }, { characterId: 'isadora', affectionChange: -15 }],
            nextScene: 'revolutionary_planning'
          },
          {
            id: 'seek_middle_ground',
            text: '"I support change, but I\'d prefer gradual reform over revolution."',
            consequence: 'Moderate approach • Seeks compromise between extremes',
            effects: [{ characterId: 'valentina', affectionChange: 25 }, { characterId: 'isadora', affectionChange: 20 }],
            nextScene: 'moderate_coalition_building'
          },
          {
            id: 'request_more_information',
            text: '"Tell me more about your specific goals and methods before I decide."',
            consequence: 'Information gathering • Seeks details before commitment',
            effects: [{ characterId: 'valentina', affectionChange: 30 }],
            nextScene: 'alternative_strategies'
          }
        ]
      },
      {
        id: 'diplomatic_bridge_building',
        title: 'The Art of Connection',
        text: [
          'Isadora teaches you the delicate art of building bridges between opposing factions.',
          '"True diplomacy isn\'t about compromise for its own sake - it\'s about finding genuine common ground and shared values."',
          '"Sometimes the best solution is one that no one initially considered, born from real understanding between different perspectives."',
          'Her approach emphasizes patience, listening, and creative problem-solving.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'practice_diplomacy',
            text: '"I want to develop these skills. Can we practice with real scenarios?"',
            consequence: 'Skill development • Seeks practical diplomatic training',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'bridging_divisions'
          },
          {
            id: 'apply_to_current_conflict',
            text: '"How can we apply these principles to the current tensions in the coven?"',
            consequence: 'Immediate application • Seeks to help current situation',
            effects: [{ characterId: 'isadora', affectionChange: 50 }],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'focus_on_understanding',
            text: '"Teaching me to truly understand different perspectives seems most important."',
            consequence: 'Understanding priority • Values empathy development',
            effects: [{ characterId: 'isadora', affectionChange: 55 }],
            nextScene: 'principled_neutrality'
          }
        ]
      },
      {
        id: 'valentina_war_stories',
        title: 'Tales from the Battlefield',
        text: [
          'Valentina shares stories from supernatural conflicts she\'s witnessed or participated in.',
          '"I\'ve seen what happens when oppression goes unchecked - communities destroyed, individuals broken, potential lost forever."',
          '"But I\'ve also seen what\'s possible when people stand up and fight for what\'s right. Real change is possible."',
          'Her experiences add weight and context to her revolutionary fervor.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_victories',
            text: '"Tell me about the successful changes you\'ve helped create."',
            consequence: 'Success focus • Interested in positive outcomes',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'historical_conflicts'
          },
          {
            id: 'inquire_about_costs',
            text: '"What have been the costs of these conflicts? How do we minimize harm?"',
            consequence: 'Cost awareness • Concerned about collateral damage',
            effects: [{ characterId: 'valentina', affectionChange: 35 }, { characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'careful_revolution'
          },
          {
            id: 'focus_on_prevention',
            text: '"How do we prevent the conditions that lead to these conflicts in the first place?"',
            consequence: 'Prevention focus • Seeks root cause solutions',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'alternative_strategies'
          }
        ]
      },
      {
        id: 'forbidden_knowledge_access',
        title: 'Secrets of the Supernatural',
        text: [
          'Celeste offers access to rare and forbidden knowledge about supernatural history and abilities.',
          '"This information has been guarded for centuries, shared only with those who prove themselves trustworthy."',
          '"Knowledge is power, but it\'s also responsibility. Are you prepared for what you might learn?"',
          'The offer feels both thrilling and daunting.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_knowledge_fully',
            text: '"Yes, I want to learn everything. I\'m ready for the responsibility."',
            consequence: 'Full knowledge acceptance • Heavy sanity cost for complete forbidden learning',
            effects: [{ characterId: 'celeste', affectionChange: 50 }],
            playerStatEffects: {
              sanityChange: -25
            },
            nextScene: 'cordelia_research_revealed'
          },
          {
            id: 'request_gradual_access',
            text: '"Could we approach this gradually? I want to process each revelation properly."',
            consequence: 'Gradual learning • Seeks measured knowledge acquisition',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'ask_about_safeguards',
            text: '"What safeguards exist to ensure this knowledge isn\'t misused?"',
            consequence: 'Security concern • Worried about knowledge protection',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'restriction_analysis'
          }
        ]
      },
      {
        id: 'cordelia_research_revealed',
        title: 'Cordelia\'s Hidden Studies',
        text: [
          'Celeste reveals Cordelia\'s extensive research into mortal-vampire integration and psychic development.',
          '"She spent decades studying how mortals could safely develop supernatural abilities while maintaining their humanity."',
          '"Her research could guide your own development and help us understand the unique role Anchors can play."',
          'The depth of Cordelia\'s preparation for your arrival becomes clear.'
        ],
        character: characters.celeste,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'study_the_research',
            text: '"I want to study everything she discovered. Her research could be invaluable."',
            consequence: 'Research dedication • Commits to studying Cordelia\'s work',
            effects: [{ characterId: 'celeste', affectionChange: 50 }],
            nextScene: 'pragmatic_testing_approach'
          },
          {
            id: 'focus_on_practical_application',
            text: '"How can we apply her findings to my situation right now?"',
            consequence: 'Practical focus • Seeks immediate application',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'psychic_training_offered'
          },
          {
            id: 'honor_her_legacy',
            text: '"I want to continue her research and build on her discoveries."',
            consequence: 'Legacy continuation • Seeks to advance her work',
            effects: [{ characterId: 'celeste', affectionChange: 55 }],
            nextScene: 'cordelia_psychic_legacy'
          }
        ]
      },
      {
        id: 'elena_comfort_accepted',
        title: 'Finding Solace Together',
        text: [
          'Elena gratefully accepts your offer of comfort and companionship.',
          '"It\'s been so long since I felt truly understood. Your presence here fills a void I\'d forgotten existed."',
          '"Perhaps together we can heal some of the wounds that centuries of isolation have created."',
          'The mutual comfort creates a deep bond of understanding and support.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'promise_continued_support',
            text: '"I promise to be here for you, to help heal those wounds together."',
            consequence: 'Support commitment • Promises ongoing emotional care',
            effects: [{ characterId: 'elena', affectionChange: 55 }],
            nextScene: 'artistic_soul_connection'
          },
          {
            id: 'share_healing_journey',
            text: '"Let\'s embark on this healing journey together. We both have wounds that need tending."',
            consequence: 'Mutual healing • Emphasizes shared recovery',
            effects: [{ characterId: 'elena', affectionChange: 50 }],
            nextScene: 'shared_grief'
          },
          {
            id: 'create_new_memories',
            text: '"Let\'s create new memories together that can help overshadow the painful ones."',
            consequence: 'Memory creation • Focuses on building positive experiences',
            effects: [{ characterId: 'elena', affectionChange: 60 }],
            nextScene: 'new_memory_creation'
          }
        ]
      },
      {
        id: 'artistic_soul_connection',
        title: 'Kindred Creative Spirits',
        text: [
          'Elena reveals her own artistic nature and the deep connection she feels with your creative spirit.',
          '"I see in you a fellow artist - someone who understands that creation is healing, that beauty can emerge from pain."',
          '"Perhaps we could collaborate, create something together that expresses what words cannot."',
          'The recognition of shared artistic passion creates an immediate and profound bond.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_collaboration',
            text: '"Yes, let\'s create something beautiful together. Art as healing sounds perfect."',
            consequence: 'Artistic collaboration • Embraces creative partnership',
            effects: [{ characterId: 'elena', affectionChange: 55 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'explore_art_as_healing',
            text: '"Tell me more about how art can be healing. I want to understand this connection."',
            consequence: 'Healing curiosity • Seeks understanding of therapeutic art',
            effects: [{ characterId: 'elena', affectionChange: 50 }],
            nextScene: 'elena_purpose_reframing'
          },
          {
            id: 'share_your_creative_journey',
            text: '"Let me share my own creative journey with you. Maybe our stories can inspire each other."',
            consequence: 'Story sharing • Offers reciprocal creative vulnerability',
            effects: [{ characterId: 'elena', affectionChange: 60 }],
            nextScene: 'memory_sharing'
          }
        ]
      },
      // Batch 19 - Umbra scenes and political conflict resolution
      {
        id: 'elena_purpose_reframing',
        title: 'Discovering New Meaning',
        text: [
          'Elena helps you understand how your arrival has given new purpose to everyone in the sanctuary.',
          '"For centuries, we\'ve existed without clear direction. Your presence offers us a chance to become something more meaningful."',
          '"We\'re not just surviving anymore - we\'re building something beautiful and lasting."',
          'The shift from mere existence to purposeful living feels transformative for everyone involved.'
        ],
        character: characters.elena,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'embrace_shared_purpose',
            text: '"I\'m honored to help everyone find new meaning and direction."',
            consequence: 'Purpose acceptance • Embraces role in providing direction',
            effects: [{ characterId: 'elena', affectionChange: 50 }],
            nextScene: 'living_testament'
          },
          {
            id: 'ask_about_individual_purposes',
            text: '"How has this changed the personal goals and dreams of each person here?"',
            consequence: 'Individual focus • Interested in personal transformations',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'focus_on_building_together',
            text: '"Let\'s focus on what we can build together, step by step."',
            consequence: 'Collaborative building • Emphasizes shared construction',
            effects: [{ characterId: 'elena', affectionChange: 55 }],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'moderate_coalition_building',
        title: 'Finding Middle Ground',
        text: [
          'You work to build a coalition of moderate voices who support gradual but meaningful change.',
          'Both traditionalists and revolutionaries contribute ideas for sustainable reform that addresses real problems without causing upheaval.',
          'The collaborative approach creates solutions that have broader support and better chances of success.',
          'Compromise proves to be more creative and effective than either extreme position alone.'
        ],
        choices: [
          {
            id: 'formalize_coalition',
            text: 'Establish formal structures for ongoing moderate collaboration.',
            consequence: 'Coalition formalization • Creates lasting moderate alliance',
            effects: [
              { characterId: 'isadora', affectionChange: 40 },
              { characterId: 'valentina', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'focus_on_implementation',
            text: 'Concentrate on implementing the moderate reforms you\'ve developed.',
            consequence: 'Implementation focus • Prioritizes putting ideas into action',
            effects: [
              { characterId: 'isadora', affectionChange: 35 },
              { characterId: 'lilith', affectionChange: 25 }
            ],
            nextScene: 'measured_progress'
          },
          {
            id: 'expand_participation',
            text: 'Invite more community members to join the moderate coalition.',
            consequence: 'Participation expansion • Seeks broader moderate involvement',
            effects: [
              { characterId: 'isadora', affectionChange: 45 },
              { characterId: 'elena', affectionChange: 25 }
            ],
            nextScene: 'democratic_coven'
          }
        ]
      },
      {
        id: 'restriction_analysis',
        title: 'Understanding Limitations',
        text: [
          'Celeste carefully explains the restrictions and safeguards around supernatural knowledge and abilities.',
          '"These limitations exist not to control, but to protect. Some knowledge can be dangerous in the wrong hands or at the wrong time."',
          '"The goal is responsible development - gaining power and knowledge while maintaining wisdom and ethics."',
          'The thoughtful approach to power and knowledge reassures you about the community\'s values.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_gradual_approach',
            text: '"I understand. I\'d rather develop slowly and safely than risk harm."',
            consequence: 'Safety priority • Chooses gradual safe development',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'gradual_integration'
          },
          {
            id: 'ask_about_oversight',
            text: '"Who provides oversight? How do we ensure these restrictions are fair?"',
            consequence: 'Oversight inquiry • Seeks understanding of governance',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'anchor_oversight'
          },
          {
            id: 'propose_transparency',
            text: '"Could we make these restrictions more transparent so everyone understands them?"',
            consequence: 'Transparency proposal • Seeks clearer communication',
            effects: [{ characterId: 'celeste', affectionChange: 50 }],
            nextScene: 'democratic_coven'
          }
        ]
      },
      {
        id: 'pragmatic_testing_approach',
        title: 'Scientific Method',
        text: [
          'Celeste proposes a systematic, scientific approach to testing and developing your abilities.',
          '"We\'ll document everything, test systematically, and proceed based on evidence rather than assumptions."',
          '"Cordelia\'s research provides the foundation, but your experience will advance the science."',
          'The methodical approach feels both exciting and reassuring.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_scientific_method',
            text: '"I love this approach. Let\'s build a solid foundation of knowledge."',
            consequence: 'Scientific enthusiasm • Embraces methodical development',
            effects: [{ characterId: 'celeste', affectionChange: 50 }],
            nextScene: 'cordelia_research_revealed'
          },
          {
            id: 'request_participation_in_design',
            text: '"Can I help design the testing protocols? I want to understand the methodology."',
            consequence: 'Design participation • Seeks involvement in planning',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'focus_on_safety_protocols',
            text: '"What safety protocols will we have in place during testing?"',
            consequence: 'Safety concern • Prioritizes protection during development',
            effects: [{ characterId: 'celeste', affectionChange: 55 }],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'umbra_shares_story',
        title: 'Tales from Beyond',
        text: [
          'Umbra timidly begins to share fragments of their existence before arriving at the sanctuary.',
          '"I... I drifted between dimensions for eons, watching but never belonging, seeing beauty but never being part of it."',
          '"The loneliness was... indescribable. But here, for the first time, I feel... noticed. Valued."',
          'Their vulnerability and gratitude create a profound emotional connection.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_belonging',
            text: '"You belong here now. You\'re not alone anymore."',
            consequence: 'Belonging assurance • Offers security and acceptance',
            effects: [{ characterId: 'umbra', affectionChange: 55 }],
            nextScene: 'umbra_overwhelming_gratitude'
          },
          {
            id: 'ask_about_dimensions',
            text: '"What were those other dimensions like? What did you see?"',
            consequence: 'Dimensional curiosity • Interested in their experiences',
            effects: [{ characterId: 'umbra', affectionChange: 45 }],
            nextScene: 'umbra_shares_cosmic_stories'
          },
          {
            id: 'appreciate_their_perspective',
            text: '"Your unique perspective must give you incredible insights into existence."',
            consequence: 'Perspective appreciation • Values their otherworldly viewpoint',
            effects: [{ characterId: 'umbra', affectionChange: 50 }],
            nextScene: 'umbra_shares_cosmic_wonders'
          }
        ]
      },
      {
        id: 'eldritch_nature_explained',
        title: 'Understanding the Unknowable',
        text: [
          'Umbra carefully explains their eldritch nature in terms you can comprehend.',
          '"I exist partially outside normal reality - time flows differently for me, space bends around my presence."',
          '"I try to contain my true form to avoid overwhelming others, but sometimes... sometimes I slip."',
          'Their consideration for others despite their alien nature shows remarkable empathy.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_consideration',
            text: '"Thank you for being so considerate of our limitations."',
            consequence: 'Consideration appreciation • Values their thoughtfulness',
            effects: [{ characterId: 'umbra', affectionChange: 50 }],
            nextScene: 'umbra_appreciates_patience'
          },
          {
            id: 'ask_about_true_form',
            text: '"I\'d like to understand your true nature better, if you\'re comfortable sharing."',
            consequence: 'Understanding desire • Seeks deeper knowledge despite alien nature',
            effects: [{ characterId: 'umbra', affectionChange: 45 }],
            nextScene: 'umbra_reveals_true_self'
          },
          {
            id: 'offer_acceptance',
            text: '"I accept all aspects of your nature. You don\'t have to hide yourself."',
            consequence: 'Complete acceptance • Embraces their eldritch nature fully',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'umbra_touched_by_understanding'
          }
        ]
      },
      {
        id: 'family_values_discussion',
        title: 'What Makes a Family',
        text: [
          'The conversation turns to what truly makes a family, especially one as unconventional as yours.',
          'Umbra observes: "Family isn\'t about sharing blood or species... it\'s about choosing to care for each other."',
          '"You\'ve all chosen me, despite my strangeness. That makes you more family than I ever hoped to have."',
          'The definition of family expands to include choice, acceptance, and unconditional care.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'affirm_chosen_family',
            text: '"Chosen family is often stronger than blood family. We chose each other."',
            consequence: 'Chosen family affirmation • Validates family by choice',
            effects: [{ characterId: 'umbra', affectionChange: 55 }, { characterId: 'elena', affectionChange: 25 }],
            nextScene: 'new_community'
          },
          {
            id: 'celebrate_differences',
            text: '"Our differences make us stronger. Each person brings something unique and valuable."',
            consequence: 'Diversity celebration • Values individual contributions',
            effects: [{ characterId: 'umbra', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'commit_to_care',
            text: '"I promise to care for everyone here, regardless of how different we might be."',
            consequence: 'Care commitment • Promises unconditional support',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'bond_protection_vow'
          }
        ]
      },
      {
        id: 'umbra_overwhelming_gratitude',
        title: 'Cosmic Appreciation',
        text: [
          'Umbra\'s gratitude manifests in ways that transcend normal emotional expression.',
          'The air around them shimmers with starlight, and you feel a wave of pure, overwhelming appreciation.',
          '"Never... never has anyone offered me belonging so freely. I am... I am transformed by your kindness."',
          'Their cosmic nature makes their emotions feel vast and profound.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'share_mutual_gratitude',
            text: '"Your presence has transformed all of us too. We\'re grateful for you."',
            consequence: 'Mutual gratitude • Expresses reciprocal appreciation',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'umbra_mutual_discovery'
          },
          {
            id: 'embrace_cosmic_emotion',
            text: '"I can feel the depth of your gratitude. It\'s beautiful and overwhelming."',
            consequence: 'Emotional connection • Acknowledges their cosmic emotional expression',
            effects: [{ characterId: 'umbra', affectionChange: 55 }],
            nextScene: 'umbra_demonstrates_forms'
          },
          {
            id: 'ground_in_present',
            text: '"Let\'s focus on building our future together, one day at a time."',
            consequence: 'Present focus • Grounds cosmic emotion in daily reality',
            effects: [{ characterId: 'umbra', affectionChange: 50 }],
            nextScene: 'living_testament'
          }
        ]
      },
      // Batch 20 - Final completion batch with remaining Umbra and governance scenes
      {
        id: 'umbra_shares_cosmic_stories',
        title: 'Visions from the Void',
        text: [
          'Umbra shares breathtaking stories of cosmic wonders they witnessed across dimensions.',
          '"I\'ve seen stars born from the dreams of ancient beings, watched galaxies dance in patterns that spell out forgotten poems."',
          '"In one dimension, time flows backward and effect precedes cause. In another, music has physical form and can be sculpted."',
          'Their tales expand your understanding of what\'s possible beyond conventional reality.'
        ],
        character: characters.umbra,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'request_more_stories',
            text: '"Please tell me more. These visions are incredible."',
            consequence: 'Story fascination • Desires more cosmic tales',
            effects: [{ characterId: 'umbra', affectionChange: 45 }],
            nextScene: 'umbra_shares_cosmic_wonders'
          },
          {
            id: 'ask_about_bringing_wonders_here',
            text: '"Could you bring some of these wonders to our reality?"',
            consequence: 'Wonder sharing • Interested in cosmic gifts',
            effects: [{ characterId: 'umbra', affectionChange: 50 }],
            nextScene: 'umbra_demonstrates_forms'
          },
          {
            id: 'connect_to_artistic_inspiration',
            text: '"These visions could inspire incredible art. Would you share them with Morgana and Elena?"',
            consequence: 'Artistic connection • Links cosmic visions to creativity',
            effects: [{ characterId: 'umbra', affectionChange: 55 }, { characterId: 'morgana', affectionChange: 20 }],
            nextScene: 'artistic_collaboration_planned'
          }
        ]
      },
      {
        id: 'umbra_appreciates_patience',
        title: 'Grateful for Understanding',
        text: [
          'Umbra expresses deep appreciation for your patience with their unusual nature.',
          '"Most beings flee when they sense what I am. You... you stay. You listen. You try to understand."',
          '"Your patience gives me hope that perhaps I can learn to exist harmoniously in this reality."',
          'Their gratitude feels both humble and profound.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_continued_patience',
            text: '"I\'ll always have patience for you. Take all the time you need."',
            consequence: 'Patience commitment • Promises ongoing understanding',
            effects: [{ characterId: 'umbra', affectionChange: 55 }],
            nextScene: 'umbra_gains_confidence'
          },
          {
            id: 'encourage_self_acceptance',
            text: '"You don\'t need to change who you are. We accept you as you are."',
            consequence: 'Acceptance encouragement • Promotes self-acceptance',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'umbra_touched_by_understanding'
          },
          {
            id: 'focus_on_harmony',
            text: '"We\'ll figure out harmony together. You\'re not alone in this."',
            consequence: 'Collaborative harmony • Offers partnership in adaptation',
            effects: [{ characterId: 'umbra', affectionChange: 50 }],
            nextScene: 'family_values_discussion'
          }
        ]
      },
      {
        id: 'umbra_shares_cosmic_wonders',
        title: 'Marvels Beyond Imagination',
        text: [
          'Umbra describes cosmic phenomena that challenge your understanding of reality.',
          '"I\'ve witnessed the birth of concepts - watching \'love\' and \'hope\' come into existence as living entities."',
          '"In the spaces between dimensions, beauty exists in forms that have no names in any language."',
          'Their descriptions paint pictures of impossible, wonderful realities.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_to_experience_some',
            text: '"Is there any way I could experience even a glimpse of these wonders?"',
            consequence: 'Experience desire • Wants to witness cosmic beauty',
            effects: [{ characterId: 'umbra', affectionChange: 50 }],
            nextScene: 'umbra_demonstrates_forms'
          },
          {
            id: 'appreciate_expanded_perspective',
            text: '"You\'ve expanded my understanding of what\'s possible. Thank you."',
            consequence: 'Perspective gratitude • Appreciates mind expansion',
            effects: [{ characterId: 'umbra', affectionChange: 45 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'connect_to_earth_beauty',
            text: '"And now you get to experience the unique beauty of our dimension too."',
            consequence: 'Reciprocal beauty • Highlights local wonders',
            effects: [{ characterId: 'umbra', affectionChange: 55 }],
            nextScene: 'umbra_mutual_discovery'
          }
        ]
      },
      {
        id: 'umbra_reveals_true_self',
        title: 'Beyond the Veil',
        text: [
          'Umbra carefully reveals glimpses of their true eldritch form - geometric patterns that shift through impossible angles.',
          'You see starlight made solid, space folding in on itself, and beauty that exists outside normal perception.',
          '"This is who I really am," they whisper. "Do you... do you still accept me?"',
          'The revelation is overwhelming but somehow beautiful rather than terrifying.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_true_form',
            text: '"You\'re beautiful in ways I never imagined possible. Of course I accept you."',
            consequence: 'Complete acceptance • Sanity cost for witnessing true eldritch form',
            effects: [{ characterId: 'umbra', affectionChange: 70 }],
            playerStatEffects: {
              sanityChange: -10
            },
            nextScene: 'umbra_touched_by_understanding'
          },
          {
            id: 'ask_to_understand_more',
            text: '"Help me understand this form better. I want to appreciate all aspects of who you are."',
            consequence: 'Understanding desire • Seeks deeper comprehension',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'eldritch_nature_explained'
          },
          {
            id: 'share_wonder',
            text: '"This is incredible. I feel honored that you trust me with this truth."',
            consequence: 'Honor recognition • Appreciates their trust',
            effects: [{ characterId: 'umbra', affectionChange: 65 }],
            nextScene: 'umbra_overwhelming_gratitude'
          }
        ]
      },
      {
        id: 'umbra_mutual_discovery',
        title: 'Learning Together',
        text: [
          'You and Umbra embark on a journey of mutual discovery, learning about each other\'s realities.',
          '"You show me the beauty of linear time, of cause and effect, of emotions tied to physical form."',
          '"I can show you the poetry written in quantum fluctuations, the music of dimensional barriers."',
          'The exchange of perspectives enriches both of your understandings of existence.'
        ],
        character: characters.umbra,
        background: '/backgrounds/music-room.png',
        choices: [
          {
            id: 'establish_regular_exchanges',
            text: '"Let\'s make this a regular thing - sharing our different perspectives on reality."',
            consequence: 'Regular exchange • Establishes ongoing perspective sharing',
            effects: [{ characterId: 'umbra', affectionChange: 55 }],
            nextScene: 'memory_sharing'
          },
          {
            id: 'document_discoveries',
            text: '"We should document these discoveries. They could help others understand."',
            consequence: 'Documentation desire • Wants to record insights for others',
            effects: [{ characterId: 'umbra', affectionChange: 50 }, { characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'cordelia_research_revealed'
          },
          {
            id: 'celebrate_uniqueness',
            text: '"Our different natures make this exchange possible. Diversity creates beauty."',
            consequence: 'Diversity celebration • Appreciates differences as strength',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'transformation_celebration'
          }
        ]
      },
      {
        id: 'umbra_gains_confidence',
        title: 'Growing Self-Assurance',
        text: [
          'Through acceptance and understanding, Umbra begins to gain confidence in their place within the sanctuary.',
          '"For the first time in eons, I feel... stable. Grounded. Like I belong somewhere."',
          '"Your acceptance has given me the courage to be myself without apology or fear."',
          'Their growing confidence creates positive changes throughout the community.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'encourage_leadership',
            text: '"Your unique perspective could help guide important decisions here."',
            consequence: 'Leadership encouragement • Sees potential for guidance role',
            effects: [{ characterId: 'umbra', affectionChange: 50 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'celebrate_growth',
            text: '"I\'m so proud of how you\'ve grown. You\'re becoming more yourself every day."',
            consequence: 'Growth celebration • Celebrates their development',
            effects: [{ characterId: 'umbra', affectionChange: 55 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'offer_continued_support',
            text: '"I\'ll always be here to support your journey of self-discovery."',
            consequence: 'Support commitment • Promises ongoing encouragement',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            nextScene: 'bond_protection_vow'
          }
        ]
      },
      {
        id: 'umbra_demonstrates_forms',
        title: 'Cosmic Artistry',
        text: [
          'Umbra carefully demonstrates some of their abilities, creating beautiful displays of otherworldly phenomena.',
          'Starlight dances in impossible patterns, creating temporary constellations that tell stories without words.',
          '"This is how we communicated in the void - through light and pattern and the geometry of meaning."',
          'The display is breathtakingly beautiful and utterly alien.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_to_learn_communication',
            text: '"Could you teach me to understand this form of communication?"',
            consequence: 'Communication learning • Heavy sanity cost for learning eldritch language',
            effects: [{ characterId: 'umbra', affectionChange: 60 }],
            playerStatEffects: {
              sanityChange: -20
            },
            nextScene: 'patient_guidance'
          },
          {
            id: 'suggest_artistic_collaboration',
            text: '"This would be incredible combined with traditional art forms."',
            consequence: 'Artistic fusion • Sees potential for mixed-medium art',
            effects: [{ characterId: 'umbra', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'artistic_collaboration_planned'
          },
          {
            id: 'appreciate_beauty',
            text: '"This is the most beautiful thing I\'ve ever seen. Thank you for sharing it."',
            consequence: 'Beauty appreciation • Expresses awe at their artistry',
            effects: [{ characterId: 'umbra', affectionChange: 65 }],
            nextScene: 'umbra_overwhelming_gratitude'
          }
        ]
      },
      {
        id: 'umbra_touched_by_understanding',
        title: 'Profound Connection',
        text: [
          'Umbra is deeply moved by your complete acceptance and understanding of their nature.',
          '"Never... in all my existence across countless dimensions... has anyone accepted me so completely."',
          'Their gratitude manifests as waves of warm cosmic energy that seem to bless everyone present.',
          'The moment feels sacred - a bridge built between radically different forms of existence.'
        ],
        character: characters.umbra,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_eternal_friendship',
            text: '"You have my friendship for as long as existence itself endures."',
            consequence: 'Eternal bond • Sanity cost for comprehending infinite timescales',
            effects: [{ characterId: 'umbra', affectionChange: 75 }],
            playerStatEffects: {
              sanityChange: -12
            },
            nextScene: 'sacred_vow_sealed'
          },
          {
            id: 'share_mutual_gratitude',
            text: '"I\'m equally grateful for you. You\'ve expanded my understanding of what love means."',
            consequence: 'Mutual gratitude • Expresses reciprocal appreciation',
            effects: [{ characterId: 'umbra', affectionChange: 70 }],
            nextScene: 'divine_understanding'
          },
          {
            id: 'focus_on_community_impact',
            text: '"Your presence makes all of us better. We\'re lucky to have you in our family."',
            consequence: 'Community blessing • Recognizes their positive impact',
            effects: [{ characterId: 'umbra', affectionChange: 65 }, { characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'tension_acknowledged',
        title: 'Recognizing Conflict',
        text: [
          'You acknowledge the underlying tensions between different factions within the sanctuary.',
          'While everyone shares common goals, there are genuine disagreements about methods, pace of change, and priorities.',
          'Rather than ignoring these tensions, you address them directly with honesty and respect.',
          'Open acknowledgment creates space for constructive dialogue rather than hidden resentment.'
        ],
        choices: [
          {
            id: 'facilitate_open_discussion',
            text: 'Create a safe space for all sides to express their concerns openly.',
            consequence: 'Conflict mediation • Facilitates honest dialogue',
            effects: [
              { characterId: 'isadora', affectionChange: 30 },
              { characterId: 'valentina', affectionChange: 25 },
              { characterId: 'lilith', affectionChange: 20 }
            ],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'address_root_causes',
            text: 'Focus on understanding the deeper causes behind these tensions.',
            consequence: 'Root analysis • Seeks underlying causes',
            effects: [
              { characterId: 'celeste', affectionChange: 35 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'historical_conflicts'
          },
          {
            id: 'propose_structured_resolution',
            text: 'Suggest formal processes for resolving future conflicts constructively.',
            consequence: 'Structural solution • Creates conflict resolution systems',
            effects: [
              { characterId: 'isadora', affectionChange: 40 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'democratic_coven'
          }
        ]
      },
      {
        id: 'practical_concerns',
        title: 'Addressing Real Issues',
        text: [
          'The conversation turns to practical concerns that affect daily life in the sanctuary.',
          'Resource allocation, security protocols, communication systems - the mundane but essential aspects of community life.',
          'Isadora emphasizes: "Grand ideals mean nothing if we can\'t manage the practical realities of our existence."',
          'Addressing these concerns shows respect for the complexity of supernatural community management.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'volunteer_for_practical_work',
            text: '"I want to help with the practical aspects. What needs the most attention?"',
            consequence: 'Practical contribution • Offers to help with daily operations',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'arrangement_details'
          },
          {
            id: 'suggest_systematic_review',
            text: '"Should we conduct a systematic review of all our practical systems?"',
            consequence: 'Systematic approach • Proposes comprehensive analysis',
            effects: [{ characterId: 'isadora', affectionChange: 40 }, { characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'restriction_analysis'
          },
          {
            id: 'propose_efficiency_improvements',
            text: '"Maybe fresh eyes could identify efficiency improvements in existing systems."',
            consequence: 'Efficiency focus • Seeks optimization opportunities',
            effects: [{ characterId: 'isadora', affectionChange: 50 }],
            nextScene: 'pragmatic_testing_approach'
          }
        ]
      },
      // Batch 21 - Final governance and resolution scenes
      {
        id: 'isadora_agreement',
        title: 'Finding Common Ground',
        text: [
          'Isadora expresses cautious agreement with your proposed approach to the sanctuary\'s challenges.',
          '"Your suggestions show wisdom beyond your years. Perhaps fresh perspective combined with respect for tradition is exactly what we need."',
          '"I\'m willing to support this path, provided we maintain the stability that has kept us safe for so long."',
          'Her support feels like a significant political victory for collaborative governance.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_her_support',
            text: '"Your support means everything. Together we can build something lasting."',
            consequence: 'Gratitude expression • Values her political backing',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'address_stability_concerns',
            text: '"Stability will remain our foundation. Change will come through careful evolution, not revolution."',
            consequence: 'Stability assurance • Commits to careful progress',
            effects: [{ characterId: 'isadora', affectionChange: 50 }],
            nextScene: 'measured_progress'
          },
          {
            id: 'formalize_the_agreement',
            text: '"Should we formalize this agreement to ensure everyone understands our approach?"',
            consequence: 'Formalization proposal • Seeks clear documentation',
            effects: [{ characterId: 'isadora', affectionChange: 55 }],
            nextScene: 'democratic_coven'
          }
        ]
      },
      {
        id: 'political_divide_deepens',
        title: 'Tensions Escalate',
        text: [
          'Despite efforts at mediation, the political divide between factions continues to deepen.',
          'Valentina and Isadora\'s disagreements become more entrenched, with each side gathering supporters.',
          'The sanctuary faces a crossroads - either find a way to bridge these differences or risk permanent fracture.',
          'Your role as mediator becomes more crucial and more difficult.'
        ],
        choices: [
          {
            id: 'call_for_cooling_off_period',
            text: 'Suggest a temporary pause in political discussions to let emotions settle.',
            consequence: 'Cooling off • Health stress from managing political tensions',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            playerStatEffects: {
              healthChange: -5
            },
            nextScene: 'strategic_patience'
          },
          {
            id: 'propose_structured_debate',
            text: 'Organize formal debates with clear rules to ensure all voices are heard.',
            consequence: 'Structured discourse • Creates formal discussion framework',
            effects: [
              { characterId: 'isadora', affectionChange: 35 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'seek_external_mediation',
            text: 'Suggest bringing in neutral outside parties to help mediate.',
            consequence: 'External help • Seeks impartial mediation',
            effects: [
              { characterId: 'lilith', affectionChange: 25 }
            ],
            nextScene: 'principled_neutrality'
          }
        ]
      },
      {
        id: 'traditionalist_support',
        title: 'Preserving What Works',
        text: [
          'You express understanding and support for traditionalist concerns about preserving what has worked well.',
          'Isadora appreciates your recognition that not all change is improvement, and that stability has real value.',
          '"Tradition isn\'t just about clinging to the past," she explains. "It\'s about preserving wisdom that has been tested by time."',
          'Your balanced approach helps bridge the gap between innovation and preservation.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'learn_from_tradition',
            text: '"I want to understand the wisdom embedded in our traditions before proposing changes."',
            consequence: 'Tradition learning • Seeks to understand before changing',
            effects: [{ characterId: 'isadora', affectionChange: 50 }],
            nextScene: 'historical_conflicts'
          },
          {
            id: 'propose_gradual_evolution',
            text: '"Let\'s build on strong traditions while gradually adapting to new realities."',
            consequence: 'Evolutionary approach • Balances tradition with adaptation',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'gentle_traditionalism'
          },
          {
            id: 'emphasize_preservation',
            text: '"Our first priority should be preserving what has kept everyone safe and stable."',
            consequence: 'Preservation priority • Emphasizes safety through tradition',
            effects: [{ characterId: 'isadora', affectionChange: 55 }],
            nextScene: 'fortress_ravencroft'
          }
        ]
      },
      {
        id: 'compromise_discussion',
        title: 'Seeking Middle Ground',
        text: [
          'You facilitate a careful discussion aimed at finding compromises that address everyone\'s core concerns.',
          'Rather than seeking perfect solutions, the focus is on finding approaches that everyone can live with.',
          'Small concessions from each side begin to build toward a framework that has broader support.',
          'The process is slow but shows promise for sustainable resolution.'
        ],
        choices: [
          {
            id: 'document_agreements',
            text: 'Carefully document each point of agreement to build momentum.',
            consequence: 'Agreement documentation • Records progress systematically',
            effects: [
              { characterId: 'isadora', affectionChange: 35 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'democratic_coven'
          },
          {
            id: 'focus_on_shared_values',
            text: 'Emphasize the values and goals that everyone already shares.',
            consequence: 'Shared values • Builds on common ground',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'isadora', affectionChange: 25 },
              { characterId: 'valentina', affectionChange: 20 }
            ],
            nextScene: 'bridging_divisions'
          },
          {
            id: 'test_small_changes_first',
            text: 'Propose testing small changes before implementing larger reforms.',
            consequence: 'Incremental testing • Reduces risk through gradual implementation',
            effects: [
              { characterId: 'isadora', affectionChange: 40 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            nextScene: 'measured_progress'
          }
        ]
      },
      {
        id: 'leadership_wisdom',
        title: 'Learning to Guide',
        text: [
          'Luna shares insights about leadership drawn from her prophetic visions and centuries of observation.',
          '"True leadership isn\'t about having all the answers - it\'s about helping others find their own wisdom."',
          '"The best leaders serve their communities rather than ruling them. They facilitate growth rather than controlling it."',
          'Her perspective on leadership emphasizes humility, service, and empowerment of others.'
        ],
        character: characters.luna,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_servant_leadership',
            text: '"I want to serve this community, not rule it. How do I develop that kind of leadership?"',
            consequence: 'Servant leadership • Embraces service-oriented approach',
            effects: [{ characterId: 'luna', affectionChange: 50 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'ask_about_facilitating_growth',
            text: '"How do I help others discover their own wisdom and potential?"',
            consequence: 'Growth facilitation • Seeks to empower others',
            effects: [{ characterId: 'luna', affectionChange: 45 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'request_specific_guidance',
            text: '"What specific leadership challenges do you foresee, and how should I prepare?"',
            consequence: 'Preparation focus • Seeks specific developmental guidance',
            effects: [{ characterId: 'luna', affectionChange: 55 }],
            nextScene: 'leadership_lesson'
          }
        ]
      },
      {
        id: 'historical_conflicts',
        title: 'Learning from the Past',
        text: [
          'Celeste shares detailed accounts of past conflicts within supernatural communities and how they were resolved.',
          '"History teaches us that sustainable solutions require patience, understanding, and genuine respect for all parties involved."',
          '"The conflicts that were resolved successfully focused on shared interests rather than ideological purity."',
          'The historical perspective provides valuable context for current challenges.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'apply_historical_lessons',
            text: '"How can we apply these historical lessons to our current situation?"',
            consequence: 'Historical application • Seeks to use past wisdom',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'bridging_divisions'
          },
          {
            id: 'focus_on_shared_interests',
            text: '"Let\'s identify the shared interests that unite everyone here."',
            consequence: 'Shared interest focus • Emphasizes common ground',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'study_successful_resolutions',
            text: '"I want to study the most successful conflict resolutions in detail."',
            consequence: 'Resolution study • Seeks detailed understanding of success patterns',
            effects: [{ characterId: 'celeste', affectionChange: 50 }],
            nextScene: 'alternative_strategies'
          }
        ]
      },
      {
        id: 'beyond_statistics',
        title: 'The Human Element',
        text: [
          'The discussion moves beyond data and statistics to focus on the human (and vampire) element in governance.',
          'Each person has fears, hopes, dreams, and concerns that go deeper than political positions.',
          'Understanding these deeper motivations proves more valuable than any formal analysis.',
          'Personal connections become the foundation for political solutions.'
        ],
        choices: [
          {
            id: 'prioritize_personal_connections',
            text: 'Focus on building stronger personal relationships as the foundation for political cooperation.',
            consequence: 'Relationship priority • Makes personal connection the political foundation',
            effects: [
              { characterId: 'elena', affectionChange: 35 },
              { characterId: 'seraphina', affectionChange: 30 }
            ],
            nextScene: 'family_values_discussion'
          },
          {
            id: 'address_individual_concerns',
            text: 'Take time to understand and address each person\'s specific fears and hopes.',
            consequence: 'Individual focus • Addresses personal motivations',
            effects: [
              { characterId: 'elena', affectionChange: 30 },
              { characterId: 'umbra', affectionChange: 25 }
            ],
            nextScene: 'private_consultations'
          },
          {
            id: 'create_safe_spaces',
            text: 'Establish environments where people feel safe expressing their deeper concerns.',
            consequence: 'Safety creation • Builds trust through secure expression',
            effects: [
              { characterId: 'seraphina', affectionChange: 35 },
              { characterId: 'elena', affectionChange: 25 }
            ],
            nextScene: 'principled_neutrality'
          }
        ]
      },
      {
        id: 'alternative_strategies',
        title: 'Creative Solutions',
        text: [
          'When traditional approaches reach their limits, you begin exploring creative alternative strategies.',
          'Instead of choosing between existing options, you work to develop entirely new approaches that transcend current limitations.',
          'The creative process energizes everyone and opens possibilities that hadn\'t been considered.',
          'Innovation proves more powerful than optimization of existing systems.'
        ],
        choices: [
          {
            id: 'brainstorm_new_approaches',
            text: 'Organize collaborative brainstorming sessions to generate novel solutions.',
            consequence: 'Creative brainstorming • Generates innovative approaches',
            effects: [
              { characterId: 'morgana', affectionChange: 35 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'prototype_solutions',
            text: 'Create small-scale prototypes to test new ideas before full implementation.',
            consequence: 'Solution prototyping • Tests innovations safely',
            effects: [
              { characterId: 'celeste', affectionChange: 40 },
              { characterId: 'isadora', affectionChange: 25 }
            ],
            nextScene: 'pragmatic_testing_approach'
          },
          {
            id: 'combine_best_elements',
            text: 'Synthesize the best elements from different approaches into hybrid solutions.',
            consequence: 'Synthesis approach • Combines strengths from multiple sources',
            effects: [
              { characterId: 'lilith', affectionChange: 35 },
              { characterId: 'valentina', affectionChange: 20 },
              { characterId: 'isadora', affectionChange: 20 }
            ],
            nextScene: 'bridging_divisions'
          }
        ]
      },
      // Batch 22 - Final completion scenes
      {
        id: 'private_consultations',
        title: 'One-on-One Discussions',
        text: [
          'You schedule private consultations with each community member to understand their individual concerns and perspectives.',
          'Away from group dynamics, people feel more comfortable sharing their honest thoughts and deeper motivations.',
          'These personal conversations reveal the human stories behind political positions and create opportunities for genuine understanding.',
          'The individual attention helps everyone feel heard and valued.'
        ],
        choices: [
          {
            id: 'synthesize_insights',
            text: 'Combine insights from all consultations to identify common themes and solutions.',
            consequence: 'Insight synthesis • Identifies patterns across individual concerns',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            nextScene: 'bridging_divisions'
          },
          {
            id: 'address_specific_needs',
            text: 'Develop targeted approaches to address each person\'s specific concerns.',
            consequence: 'Individualized solutions • Creates personalized approaches',
            effects: [
              { characterId: 'elena', affectionChange: 35 },
              { characterId: 'umbra', affectionChange: 30 }
            ],
            nextScene: 'measured_progress'
          },
          {
            id: 'build_coalition_support',
            text: 'Use understanding gained to build broader support for collaborative solutions.',
            consequence: 'Coalition building • Leverages personal connections for political progress',
            effects: [
              { characterId: 'isadora', affectionChange: 30 },
              { characterId: 'valentina', affectionChange: 25 }
            ],
            nextScene: 'collaborative_governance'
          }
        ]
      },
      {
        id: 'revolutionary_planning',
        title: 'Mapping Change',
        text: [
          'Working with Valentina, you develop concrete plans for implementing progressive changes in supernatural society.',
          'The focus shifts from abstract ideals to practical steps that can create real improvement in people\'s lives.',
          'Careful planning helps ensure that revolutionary goals don\'t create unintended chaos or harm.',
          'The systematic approach builds confidence in the possibility of positive change.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'prioritize_achievable_goals',
            text: 'Focus first on changes that are both impactful and achievable.',
            consequence: 'Strategic prioritization • Focuses on winnable battles',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'measured_progress'
          },
          {
            id: 'build_broader_support',
            text: 'Work to build support for changes beyond just the revolutionary faction.',
            consequence: 'Coalition expansion • Seeks broader political support',
            effects: [{ characterId: 'valentina', affectionChange: 40 }, { characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'bridging_divisions'
          },
          {
            id: 'develop_safeguards',
            text: 'Create safeguards to ensure changes don\'t cause unintended harm.',
            consequence: 'Risk mitigation • Builds protections against negative consequences',
            effects: [{ characterId: 'valentina', affectionChange: 50 }],
            nextScene: 'careful_revolution'
          }
        ]
      },
      {
        id: 'bridging_divisions',
        title: 'Healing the Rift',
        text: [
          'Through patient work and genuine respect for all perspectives, divisions within the community begin to heal.',
          'Rather than trying to eliminate disagreement, you help create ways for different viewpoints to coexist constructively.',
          'The process teaches everyone that unity doesn\'t require uniformity, and that diversity of thought can be a strength.',
          'Gradually, the community becomes more cohesive while remaining intellectually vibrant.'
        ],
        choices: [
          {
            id: 'celebrate_diversity',
            text: 'Formally recognize that diverse perspectives make the community stronger.',
            consequence: 'Diversity celebration • Institutionalizes appreciation for different viewpoints',
            effects: [
              { characterId: 'lilith', affectionChange: 35 },
              { characterId: 'valentina', affectionChange: 25 },
              { characterId: 'isadora', affectionChange: 25 }
            ],
            nextScene: 'democratic_coven'
          },
          {
            id: 'establish_ongoing_dialogue',
            text: 'Create permanent structures for ongoing dialogue and collaboration.',
            consequence: 'Dialogue institutionalization • Creates lasting communication frameworks',
            effects: [
              { characterId: 'isadora', affectionChange: 40 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'collaborative_governance'
          },
          {
            id: 'focus_on_shared_projects',
            text: 'Unite the community around shared projects that everyone can support.',
            consequence: 'Unity through action • Builds cohesion through collaborative work',
            effects: [
              { characterId: 'elena', affectionChange: 30 },
              { characterId: 'morgana', affectionChange: 25 }
            ],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'careful_revolution',
        title: 'Thoughtful Transformation',
        text: [
          'The revolutionary changes proceed carefully, with attention to minimizing disruption and maximizing positive impact.',
          'Each step is evaluated for its effects on all community members, ensuring that progress doesn\'t come at anyone\'s expense.',
          'The measured approach proves more effective than dramatic gestures, creating lasting change that everyone can support.',
          'Revolution becomes evolution, powered by wisdom rather than anger.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'document_lessons_learned',
            text: 'Carefully document what works so these methods can be shared with other communities.',
            consequence: 'Knowledge sharing • Records successful methods for broader use',
            effects: [{ characterId: 'valentina', affectionChange: 50 }, { characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'expand_gradual_changes',
            text: 'Use early successes as foundation for additional gradual improvements.',
            consequence: 'Incremental expansion • Builds on successful changes',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'measured_progress'
          },
          {
            id: 'celebrate_collaborative_success',
            text: 'Recognize that success came through collaboration rather than conflict.',
            consequence: 'Collaboration recognition • Credits teamwork for positive outcomes',
            effects: [{ characterId: 'valentina', affectionChange: 55 }, { characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'transformation_celebration'
          }
        ]
      },
      {
        id: 'fortress_ravencroft',
        title: 'Sanctuary Secured',
        text: [
          'The sanctuary\'s security systems are reviewed and strengthened, ensuring that Ravencroft Manor remains a safe haven.',
          'Raven oversees improvements to both physical and magical protections, while maintaining the welcoming atmosphere.',
          'The balance between security and openness reflects the community\'s values - protected but not isolated.',
          'Everyone feels more secure knowing that their home is well-defended against external threats.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'appreciate_security_measures',
            text: '"Thank you for keeping everyone safe while maintaining our open, welcoming spirit."',
            consequence: 'Security appreciation • Values protection without isolation',
            effects: [{ characterId: 'raven', affectionChange: 45 }],
            nextScene: 'strategic_patience'
          },
          {
            id: 'ask_about_ongoing_vigilance',
            text: '"What ongoing vigilance is needed to maintain this security?"',
            consequence: 'Vigilance inquiry • Seeks to understand security maintenance',
            effects: [{ characterId: 'raven', affectionChange: 40 }],
            nextScene: 'anchor_oversight'
          },
          {
            id: 'offer_security_assistance',
            text: '"How can I help with security efforts? What role can I play?"',
            consequence: 'Security participation • Offers to contribute to protection efforts',
            effects: [{ characterId: 'raven', affectionChange: 50 }],
            nextScene: 'guardian_oath'
          }
        ]
      },
      {
        id: 'gentle_traditionalism',
        title: 'Honoring the Past While Growing',
        text: [
          'The community finds ways to honor traditions while allowing for gentle evolution and growth.',
          'Change comes through deepening understanding of traditional wisdom rather than rejecting it.',
          'New practices emerge that feel consistent with historical values while meeting contemporary needs.',
          'The approach satisfies both traditionalists and progressives by showing that growth and preservation can coexist.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'develop_new_traditions',
            text: 'Create new traditions that build on historical foundations.',
            consequence: 'Tradition evolution • Creates new practices rooted in history',
            effects: [{ characterId: 'isadora', affectionChange: 50 }, { characterId: 'morgana', affectionChange: 25 }],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'teach_traditional_wisdom',
            text: 'Ensure that traditional wisdom is taught and understood by all community members.',
            consequence: 'Wisdom preservation • Maintains cultural knowledge',
            effects: [{ characterId: 'isadora', affectionChange: 45 }],
            nextScene: 'patient_guidance'
          },
          {
            id: 'balance_old_and_new',
            text: 'Establish formal processes for balancing traditional and innovative approaches.',
            consequence: 'Balance institutionalization • Creates systematic approach to tradition and innovation',
            effects: [{ characterId: 'isadora', affectionChange: 55 }],
            nextScene: 'collaborative_governance'
          }
        ]
      },
      {
        id: 'strategic_patience',
        title: 'The Wisdom of Waiting',
        text: [
          'You learn the value of strategic patience - knowing when to act and when to wait for better timing.',
          'Some changes require preparation, some conflicts need time to cool, some solutions emerge only through careful observation.',
          'The ability to wait wisely proves as valuable as the ability to act decisively.',
          'Patience becomes a form of wisdom rather than mere passivity.'
        ],
        choices: [
          {
            id: 'develop_timing_wisdom',
            text: 'Study the patterns that reveal optimal timing for different types of actions.',
            consequence: 'Timing mastery • Develops wisdom about when to act',
            effects: [
              { characterId: 'luna', affectionChange: 40 },
              { characterId: 'lilith', affectionChange: 25 }
            ],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'practice_mindful_waiting',
            text: 'Use waiting periods for preparation, observation, and deepening understanding.',
            consequence: 'Mindful patience • Makes waiting periods productive',
            effects: [
              { characterId: 'seraphina', affectionChange: 35 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            nextScene: 'patience_training'
          },
          {
            id: 'balance_patience_and_action',
            text: 'Learn to balance patience with decisive action when the moment is right.',
            consequence: 'Balance mastery • Develops judgment about timing',
            effects: [
              { characterId: 'lilith', affectionChange: 35 },
              { characterId: 'raven', affectionChange: 25 }
            ],
            nextScene: 'leadership_wisdom'
          }
        ]
      },
      {
        id: 'collaborative_governance',
        title: 'Shared Leadership',
        text: [
          'The community develops a collaborative governance model where leadership is shared rather than concentrated.',
          'Decisions are made through inclusive processes that draw on everyone\'s expertise and perspectives.',
          'The approach proves more effective than traditional hierarchies, producing better decisions with broader support.',
          'Leadership becomes a service to the community rather than power over it.'
        ],
        choices: [
          {
            id: 'formalize_the_system',
            text: 'Create formal structures and processes to institutionalize collaborative governance.',
            consequence: 'System formalization • Creates lasting governance structures',
            effects: [
              { characterId: 'isadora', affectionChange: 40 },
              { characterId: 'celeste', affectionChange: 35 }
            ],
            nextScene: 'democratic_coven'
          },
          {
            id: 'train_collaborative_skills',
            text: 'Develop training programs to help everyone participate effectively in collaborative governance.',
            consequence: 'Skill development • Builds capacity for participation',
            effects: [
              { characterId: 'celeste', affectionChange: 40 },
              { characterId: 'elena', affectionChange: 25 }
            ],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'model_servant_leadership',
            text: 'Demonstrate leadership as service, inspiring others to adopt the same approach.',
            consequence: 'Leadership modeling • Inspires service-oriented leadership',
            effects: [
              { characterId: 'lilith', affectionChange: 45 },
              { characterId: 'seraphina', affectionChange: 30 }
            ],
            nextScene: 'living_testament'
          }
        ]
      },
      // Final missing scenes completion
      {
        id: 'anchor_oversight',
        title: 'Guardian Responsibilities',
        text: [
          'You learn about the oversight responsibilities that come with being an anchor to the supernatural community.',
          'Lilith explains: "Anchors don\'t just provide stability - they also help ensure that power is used responsibly."',
          '"Your role includes watching for signs of corruption or abuse, and intervening when necessary."',
          'The responsibility feels weighty but important for maintaining community trust.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_oversight_role',
            text: '"I understand the responsibility. I\'m prepared to fulfill this role."',
            consequence: 'Oversight acceptance • Embraces guardian responsibilities',
            effects: [{ characterId: 'lilith', affectionChange: 50 }],
            nextScene: 'guardian_oath'
          },
          {
            id: 'ask_about_safeguards',
            text: '"What safeguards exist to ensure oversight itself doesn\'t become corrupt?"',
            consequence: 'Safeguard inquiry • Seeks checks and balances',
            effects: [{ characterId: 'lilith', affectionChange: 45 }],
            nextScene: 'democratic_coven'
          },
          {
            id: 'request_training',
            text: '"I need training to fulfill this role properly. Who can teach me?"',
            consequence: 'Training request • Seeks preparation for responsibilities',
            effects: [{ characterId: 'lilith', affectionChange: 55 }],
            nextScene: 'leadership_lesson'
          }
        ]
      },
      {
        id: 'measured_progress',
        title: 'Steady Advancement',
        text: [
          'The community makes steady, measured progress on its goals through careful planning and incremental steps.',
          'Each small advancement builds on previous successes, creating sustainable momentum.',
          'The approach proves more effective than dramatic changes, with broader support and fewer unintended consequences.',
          'Progress feels solid and lasting rather than fragile or temporary.'
        ],
        choices: [
          {
            id: 'celebrate_incremental_wins',
            text: 'Acknowledge and celebrate each incremental achievement.',
            consequence: 'Progress celebration • Recognizes steady advancement',
            effects: [
              { characterId: 'isadora', affectionChange: 40 },
              { characterId: 'celeste', affectionChange: 30 }
            ],
            nextScene: 'transformation_celebration'
          },
          {
            id: 'document_successful_methods',
            text: 'Record what approaches work best for future reference.',
            consequence: 'Method documentation • Preserves successful strategies',
            effects: [
              { characterId: 'celeste', affectionChange: 45 },
              { characterId: 'lilith', affectionChange: 25 }
            ],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'expand_successful_initiatives',
            text: 'Use proven approaches as foundation for additional improvements.',
            consequence: 'Initiative expansion • Builds on demonstrated success',
            effects: [
              { characterId: 'valentina', affectionChange: 35 },
              { characterId: 'isadora', affectionChange: 30 }
            ],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'democratic_coven',
        title: 'Inclusive Governance',
        text: [
          'The community establishes democratic governance structures that ensure everyone has a voice in important decisions.',
          'Formal processes balance efficiency with inclusivity, allowing thorough discussion while avoiding endless debate.',
          'The system respects both individual expertise and collective wisdom.',
          'Democratic participation strengthens community bonds and increases commitment to shared decisions.'
        ],
        choices: [
          {
            id: 'refine_decision_processes',
            text: 'Continuously improve decision-making processes based on experience.',
            consequence: 'Process refinement • Evolves governance through practice',
            effects: [
              { characterId: 'isadora', affectionChange: 45 },
              { characterId: 'celeste', affectionChange: 40 }
            ],
            nextScene: 'living_testament'
          },
          {
            id: 'train_democratic_participation',
            text: 'Develop training programs to help everyone participate effectively.',
            consequence: 'Participation training • Builds democratic skills',
            effects: [
              { characterId: 'celeste', affectionChange: 50 },
              { characterId: 'elena', affectionChange: 30 }
            ],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'balance_expertise_and_input',
            text: 'Create systems that respect expertise while ensuring broad input.',
            consequence: 'Balance achievement • Harmonizes knowledge and democracy',
            effects: [
              { characterId: 'lilith', affectionChange: 40 },
              { characterId: 'isadora', affectionChange: 35 }
            ],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'leadership_lesson',
        title: 'Wisdom Shared',
        text: [
          'Through formal and informal teaching, you learn essential lessons about leadership and community building.',
          'The lessons emphasize service over power, collaboration over control, and wisdom over authority.',
          'Multiple mentors contribute their perspectives, creating a comprehensive understanding of leadership.',
          'The knowledge feels practical and immediately applicable to current challenges.'
        ],
        choices: [
          {
            id: 'apply_lessons_immediately',
            text: 'Put the lessons into practice right away.',
            consequence: 'Immediate application • Uses knowledge actively',
            effects: [
              { characterId: 'lilith', affectionChange: 45 },
              { characterId: 'luna', affectionChange: 40 }
            ],
            nextScene: 'living_testament'
          },
          {
            id: 'develop_teaching_materials',
            text: 'Create materials to help teach these lessons to others.',
            consequence: 'Knowledge sharing • Develops educational resources',
            effects: [
              { characterId: 'celeste', affectionChange: 50 },
              { characterId: 'elena', affectionChange: 30 }
            ],
            nextScene: 'memory_sharing'
          },
          {
            id: 'seek_additional_mentorship',
            text: 'Request ongoing mentorship to continue developing leadership skills.',
            consequence: 'Continued learning • Pursues ongoing development',
            effects: [
              { characterId: 'lilith', affectionChange: 55 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'patient_guidance'
          }
        ]
      },
      {
        id: 'principled_neutrality',
        title: 'Balanced Mediation',
        text: [
          'You maintain principled neutrality while mediating conflicts, ensuring all sides feel heard and respected.',
          'Rather than false equivalency, your approach recognizes valid concerns across different perspectives.',
          'The neutral stance allows you to facilitate dialogue without becoming part of the conflict.',
          'Trust in your fairness enables more honest communication between opposing sides.'
        ],
        choices: [
          {
            id: 'formalize_mediation_role',
            text: 'Establish formal mediation processes for future conflicts.',
            consequence: 'Mediation formalization • Creates systematic conflict resolution',
            effects: [
              { characterId: 'lilith', affectionChange: 45 },
              { characterId: 'seraphina', affectionChange: 40 }
            ],
            nextScene: 'democratic_coven'
          },
          {
            id: 'train_other_mediators',
            text: 'Teach mediation skills to others so multiple people can fill this role.',
            consequence: 'Mediation training • Builds community conflict resolution capacity',
            effects: [
              { characterId: 'celeste', affectionChange: 50 },
              { characterId: 'elena', affectionChange: 35 }
            ],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'focus_on_prevention',
            text: 'Work on preventing conflicts before they require mediation.',
            consequence: 'Conflict prevention • Addresses root causes proactively',
            effects: [
              { characterId: 'luna', affectionChange: 45 },
              { characterId: 'seraphina', affectionChange: 30 }
            ],
            nextScene: 'new_community'
          }
        ]
      },
      {
        id: 'guided_tour',
        title: 'Exploring the Sanctuary',
        text: [
          'You receive a comprehensive guided tour of the sanctuary, learning about its history, hidden areas, and special features.',
          'Each room tells part of the story of the community that has grown here over the centuries.',
          'Secret passages, protected chambers, and mystical gardens reveal the depth of magical protections.',
          'The tour helps you understand your place within this ancient and sacred space.'
        ],
        choices: [
          {
            id: 'ask_about_hidden_histories',
            text: 'Learn about the hidden histories and stories embedded in different areas.',
            consequence: 'History exploration • Seeks deeper understanding of sanctuary legacy',
            effects: [
              { characterId: 'celeste', affectionChange: 45 },
              { characterId: 'morgana', affectionChange: 30 }
            ],
            nextScene: 'memory_sharing'
          },
          {
            id: 'understand_magical_protections',
            text: 'Focus on understanding the magical protections and how to maintain them.',
            consequence: 'Protection understanding • Learns sanctuary defense systems',
            effects: [
              { characterId: 'raven', affectionChange: 50 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'anchor_oversight'
          },
          {
            id: 'appreciate_architectural_beauty',
            text: 'Take time to appreciate the architectural and artistic beauty of the space.',
            consequence: 'Beauty appreciation • Values aesthetic and artistic elements',
            effects: [
              { characterId: 'morgana', affectionChange: 45 },
              { characterId: 'elena', affectionChange: 40 }
            ],
            nextScene: 'artistic_collaboration_planned'
          }
        ]
      },
      {
        id: 'patience_training',
        title: 'Cultivating Inner Stillness',
        text: [
          'You learn patience as both a practical skill and a spiritual practice.',
          'Seraphina teaches breathing techniques, meditation practices, and mindfulness exercises.',
          'The training helps you remain centered during conflicts and clear-headed during complex decisions.',
          'Patience becomes a source of strength rather than a sign of passivity.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'deepen_meditation_practice',
            text: 'Commit to regular meditation practice to deepen your patience and clarity.',
            consequence: 'Meditation commitment • Develops regular spiritual practice',
            effects: [{ characterId: 'seraphina', affectionChange: 55 }],
            nextScene: 'spiritual_awakening'
          },
          {
            id: 'apply_patience_to_leadership',
            text: 'Use patience training to improve your leadership and decision-making.',
            consequence: 'Leadership patience • Applies mindfulness to governance',
            effects: [{ characterId: 'seraphina', affectionChange: 50 }, { characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'leadership_lesson'
          },
          {
            id: 'teach_patience_to_others',
            text: 'Share patience techniques with other community members.',
            consequence: 'Patience sharing • Teaches mindfulness to others',
            effects: [{ characterId: 'seraphina', affectionChange: 60 }, { characterId: 'elena', affectionChange: 20 }],
            nextScene: 'memory_sharing'
          }
        ]
      },
      // Bad Ending Scenes - Trust System
      {
        id: 'multiple_hostility_bad_end',
        title: 'The Coven\'s Wrath',
        text: [
          'Your relentless probing and accusations have finally pushed the coven beyond their breaking point. As you enter the grand hall, you find them all waiting - their eyes cold and predatory.',
          '"You have tested our patience for the last time," Lilith says, her voice like winter ice. "We welcomed you into our sanctuary, and you repaid our hospitality with suspicion and betrayal."',
          'Morgana steps forward, shadows writhing around her fingers. "Some mortals cannot be trusted with our secrets. They see only threats where we offer friendship."',
          'You realize too late that these supernatural beings are not merely playing at being dangerous - they are apex predators, and you have cornered yourself with no escape.',
          'The last thing you see are their eyes, glowing with an inhuman hunger you should have recognized from the beginning.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'game_over',
            text: '[GAME OVER] - Your distrust has led to your doom.',
            consequence: 'Fatal outcome • The coven eliminates the threat you posed',
            effects: [],
            nextScene: 'game_over_screen'
          }
        ]
      },
      {
        id: 'lilith_hostility_bad_end',
        title: 'The Leader\'s Judgment',
        text: [
          'Lilith stands alone in the candlelit study, her ancient eyes reflecting centuries of accumulated wisdom and wrath. Your constant questioning of her authority and probing into forbidden matters has finally crossed an unforgivable line.',
          '"I have ruled this coven for over eight hundred years," she says quietly, her voice carrying the weight of ages. "I have protected these vampires through inquisitions, wars, and the rise of the modern world."',
          'She approaches slowly, each step deliberate and final. "Your great-aunt understood the delicate balance required to maintain our existence. You... you see only puzzles to solve and secrets to expose."',
          'Her hand moves faster than your eyes can follow. The last sensation you experience is the realization that some mysteries are meant to remain buried.',
          'Ancient power brooks no challenge from mortal arrogance.'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'game_over_lilith',
            text: '[GAME OVER] - The ancient leader has rendered her final judgment.',
            consequence: 'Fatal outcome • Lilith eliminates a threat to coven stability',
            effects: [],
            nextScene: 'game_over_screen'
          }
        ]
      },
      {
        id: 'widespread_distrust_bad_end',
        title: 'Exile from Paradise',
        text: [
          'The entire coven has gathered in the grand hall, their faces a mixture of disappointment and cold resolve. Your pattern of suspicion and probing has eroded any chance of belonging here.',
          '"We had hoped," Celeste says sadly, closing an ancient tome with finality, "that Cordelia\'s blood would carry her wisdom. Instead, we find only paranoia and accusation."',
          'Valentina shakes her head. "In all my centuries of fighting for justice, I have learned to distinguish between healthy caution and destructive suspicion. You embody the latter."',
          'Lilith steps forward with a scroll already prepared. "By unanimous decision of the Ravencroft Coven, you are hereby exiled from these lands. You have until dawn to gather your belongings and leave forever."',
          'Elena looks away as she adds quietly, "The manor will be sold. Find somewhere else to cast your shadows of doubt."',
          'You realize you\'ve lost not just a home, but the chance to be part of something extraordinary - destroyed by your own inability to trust.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_exile',
            text: 'Accept the exile and leave Ravencroft Manor forever.',
            consequence: 'Exile ending • Lost the chance for supernatural belonging',
            effects: [],
            nextScene: 'exile_ending'
          }
        ]
      },
      {
        id: 'financial_tension',
        title: 'Legal Complications',
        text: [
          'Lilith\'s expression grows noticeably cooler as she processes your legalistic approach. The warm welcome dissipates like morning mist.',
          '"I see," she says carefully, her tone now measured and cautious. "You wish to treat this as a business transaction rather than... a homecoming."',
          'She exchanges a meaningful glance with someone in the shadows behind her. "Very well. We shall provide you with whatever documentation satisfies your legal obligations. Though I confess, your aunt never required such... formalities."',
          'The atmosphere has shifted palpably. Where there was warmth, now there is polite distance.',
          '"Perhaps we should discuss these arrangements tomorrow, in daylight, when such matters seem more... appropriate."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'insist_on_documents',
            text: '"I appreciate your understanding. When can I expect to review the rental agreements and tax records?"',
            consequence: 'Persistent legal pressure • Further erodes goodwill',
            effects: [{ characterId: 'lilith', affectionChange: -3, trustChange: -8 }],
            dangerLevel: 'medium',
            nextScene: 'document_demand'
          },
          {
            id: 'apologize_business_tone',
            text: '"I apologize if I sounded cold. It\'s just that everything happened so suddenly with Cordelia\'s passing."',
            consequence: 'Attempt to repair relations • Partial recovery',
            effects: [{ characterId: 'lilith', affectionChange: 5, trustChange: 2 }],
            nextScene: 'relationship_repair'
          }
        ]
      },
      {
        id: 'death_suspicion',
        title: 'Dangerous Accusations',
        text: [
          'The temperature in the room seems to drop ten degrees. Lilith\'s violet eyes narrow dangerously, and you hear what sounds like a sharp intake of breath from the shadows.',
          '"Suspicion about Cordelia\'s death?" Lilith\'s voice is silk wrapped around steel. "That is a very serious accusation to level at people who cared for her deeply."',
          'A figure emerges from the shadows - a tall woman with predatory grace and ice-cold eyes. "Perhaps," the newcomer says softly, "our new... landlord would prefer to discuss such matters with the local authorities instead of us."',
          'Lilith raises a hand slightly, and the other woman steps back. "Forgive my companion. Raven becomes protective when family is... questioned. Tell me, what exactly are you implying?"',
          'You realize you may have just accused a house full of supernatural beings of murder. The air crackles with dangerous tension.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'double_down_suspicion',
            text: '"I\'m not implying anything. I\'m stating that I find the circumstances of her death suspicious and I want answers."',
            consequence: 'Direct accusation • Severe trust damage to all',
            effects: [
              { characterId: 'lilith', affectionChange: -15, trustChange: -25 },
              { characterId: 'raven', affectionChange: -20, trustChange: -30 },
              { characterId: 'morgana', affectionChange: -10, trustChange: -20 }
            ],
            dangerLevel: 'lethal',
            secretsProbed: ['murder_accusation'],
            nextScene: 'accusation_escalation'
          },
          {
            id: 'backtrack_carefully',
            text: '"I... I\'m sorry. I\'m grieving and not thinking clearly. Of course you cared for her. I just... miss her terribly."',
            consequence: 'Careful retreat • Minimal damage control',
            effects: [
              { characterId: 'lilith', affectionChange: -2, trustChange: -5 },
              { characterId: 'raven', affectionChange: -5, trustChange: -8 }
            ],
            nextScene: 'grief_understanding'
          }
        ]
      },
      // Missing Chapter 1 scenes implementation
      {
        id: 'individual_passions_revealed',
        title: 'Personal Interests',
        text: [
          'As you speak with each person individually, their unique passions and interests emerge.',
          'Celeste lights up when discussing her research into vampire genealogies and historical patterns. "I\'ve traced bloodlines back twelve centuries," she says with scholarly excitement.',
          'Isadora shares her love for political strategy and social dynamics. "Every conversation is a chess match, every gathering a chance to understand power structures."',
          'The personal connections deepen as you discover the individual humanity behind their supernatural natures.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'express_fascination_with_research',
            text: '"Your research sounds fascinating. What patterns have you discovered?"',
            consequence: 'Scholarly interest • Shows appreciation for intellectual pursuits',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'celeste_library_offer'
          },
          {
            id: 'appreciate_political_insight',
            text: '"Isadora, your understanding of social dynamics is impressive. What have you learned about power?"',
            consequence: 'Political appreciation • Shows respect for strategic thinking',
            effects: [{ characterId: 'isadora', affectionChange: 20 }],
            nextScene: 'isadora_political_lessons'
          },
          {
            id: 'ask_about_others_interests',
            text: '"What about the others? What drives their passions?"',
            consequence: 'Inclusive curiosity • Shows interest in everyone',
            effects: [
              { characterId: 'celeste', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: 15 }
            ],
            nextScene: 'community_roles_explained'
          }
        ]
      },
      {
        id: 'community_roles_explained',
        title: 'The Structure of Sanctuary',
        text: [
          'You learn about the intricate roles each person plays in maintaining the sanctuary\'s harmony and security.',
          'Lilith explains: "Celeste maintains our knowledge archives and researches threats. Isadora handles external relations and political intelligence."',
          '"Morgana provides artistic soul and emotional healing. Seraphina offers spiritual guidance and protection. Each role is essential."',
          'The complexity and interdependence of their community becomes clear - everyone contributes something vital.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_your_role',
            text: '"Where do I fit in this structure? What role can I play?"',
            consequence: 'Role seeking • Shows desire to contribute meaningfully',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'community_needs_assessment'
          },
          {
            id: 'appreciate_complexity',
            text: '"This is beautifully complex. Everyone has found their perfect niche."',
            consequence: 'System appreciation • Shows understanding of community dynamics',
            effects: [
              { characterId: 'lilith', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: 12 }
            ],
            nextScene: 'earning_place_discussion'
          },
          {
            id: 'offer_flexibility',
            text: '"I\'m willing to help wherever I\'m needed most. What are the current gaps?"',
            consequence: 'Flexible service • Shows adaptability and helpfulness',
            effects: [
              { characterId: 'lilith', affectionChange: 18 },
              { characterId: 'celeste', affectionChange: 15 }
            ],
            nextScene: 'skill_integration_planning'
          }
        ]
      },
      {
        id: 'mutual_introduction',
        title: 'Opening Your Heart',
        text: [
          'You share something meaningful about yourself, opening up about your own hopes, fears, and values.',
          '"I\'ve always believed that home isn\'t a place, but the people who accept you completely," you say.',
          'Your vulnerability is met with warmth and understanding. Celeste nods thoughtfully, while Isadora\'s calculating expression softens.',
          'The reciprocal sharing creates immediate bonds of trust and mutual respect.'
        ],
        character: characters.celeste,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'share_more_about_values',
            text: 'Continue sharing your core values and what drives you.',
            consequence: 'Deep sharing • Creates strong emotional connections',
            effects: [
              { characterId: 'celeste', affectionChange: 25 },
              { characterId: 'isadora', affectionChange: 20 }
            ],
            nextScene: 'chosen_family_bonds'
          },
          {
            id: 'ask_about_their_values',
            text: '"What values guide your community? What principles do you share?"',
            consequence: 'Values inquiry • Seeks understanding of community principles',
            effects: [
              { characterId: 'lilith', affectionChange: 18 },
              { characterId: 'celeste', affectionChange: 20 }
            ],
            nextScene: 'wisdom_sharing_culture'
          },
          {
            id: 'express_gratitude_for_acceptance',
            text: '"Thank you for making me feel so welcome. This acceptance means everything."',
            consequence: 'Grateful recognition • Shows appreciation for welcome',
            effects: [
              { characterId: 'isadora', affectionChange: 22 },
              { characterId: 'lilith', affectionChange: 15 }
            ],
            nextScene: 'earning_place_discussion'
          }
        ]
      },
      {
        id: 'chosen_family_bonds',
        title: 'Bonds Beyond Blood',
        text: [
          'The conversation deepens into the meaning of chosen family and how bonds of choice can be stronger than blood.',
          'Lilith shares: "We\'ve learned that family means those who see your true nature and love you anyway - not those who share your genetics."',
          'Isadora adds thoughtfully: "In our long lives, we\'ve discovered that loyalty earned is worth more than loyalty assumed."',
          'You feel the profound truth in their words and the warmth of being welcomed into something precious.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_chosen_family_concept',
            text: '"I understand completely. True family chooses to stay through everything."',
            consequence: 'Family philosophy alignment • Shows deep understanding',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'isadora', affectionChange: 25 }
            ],
            nextScene: 'cordelia_legacy_story'
          },
          {
            id: 'share_family_experiences',
            text: 'Share your own experiences with chosen family and belonging.',
            consequence: 'Personal sharing • Creates intimate connection',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 20 }
            ],
            nextScene: 'mutual_understanding'
          },
          {
            id: 'ask_about_challenges',
            text: '"What challenges has your chosen family faced? How do you work through conflicts?"',
            consequence: 'Practical inquiry • Seeks understanding of relationship dynamics',
            effects: [
              { characterId: 'isadora', affectionChange: 20 },
              { characterId: 'lilith', affectionChange: 18 }
            ],
            nextScene: 'wisdom_sharing_culture'
          }
        ]
      },
      {
        id: 'cordelia_legacy_story',
        title: 'Cordelia\'s Integration',
        text: [
          'Lilith\'s eyes grow warm with memory as she shares how Cordelia became part of their family.',
          '"She arrived much like you - inheriting the manor, uncertain but brave. What made her special was her immediate acceptance of our nature."',
          '"Most humans fear us or try to change us. Cordelia simply said, \'You are what you are, and I love who you are.\' That acceptance transformed everything."',
          'The story reveals why your great-aunt was so beloved and provides a template for your own integration.'
        ],
        character: characters.lilith,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'follow_cordelias_example',
            text: '"I want to follow her example. I accept you as you are, completely."',
            consequence: 'Legacy continuation • Shows commitment to acceptance',
            effects: [
              { characterId: 'lilith', affectionChange: 35 },
              { characterId: 'morgana', affectionChange: 20 }
            ],
            nextScene: 'earning_place_discussion'
          },
          {
            id: 'ask_about_her_challenges',
            text: '"What challenges did she face? How did she overcome them?"',
            consequence: 'Learning orientation • Seeks practical guidance',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 18 }
            ],
            nextScene: 'wisdom_sharing_culture'
          },
          {
            id: 'express_honor_at_comparison',
            text: '"I\'m honored to be compared to her. I hope I can earn that level of trust."',
            consequence: 'Humble aspiration • Shows respect for legacy',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'isadora', affectionChange: 22 }
            ],
            nextScene: 'community_needs_assessment'
          }
        ]
      },
      {
        id: 'earning_place_discussion',
        title: 'Finding Your Place',
        text: [
          'The conversation turns to how you can earn your place in this close-knit community.',
          'Isadora explains: "Belonging here isn\'t automatic - it\'s earned through consistent actions that show you truly understand and support our values."',
          'Celeste adds: "We\'ve found that the best integration happens when someone finds ways to contribute that match their unique strengths."',
          'You sense this is about proving yourself through deeds rather than words.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_how_to_prove_yourself',
            text: '"What specific actions would demonstrate my commitment to your community?"',
            consequence: 'Commitment seeking • Shows desire to prove worthiness',
            effects: [
              { characterId: 'isadora', affectionChange: 25 },
              { characterId: 'lilith', affectionChange: 18 }
            ],
            nextScene: 'community_needs_assessment'
          },
          {
            id: 'offer_immediate_help',
            text: '"I\'d like to start helping immediately. What needs attention right now?"',
            consequence: 'Immediate service • Shows eagerness to contribute',
            effects: [
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'isadora', affectionChange: 18 }
            ],
            nextScene: 'skill_integration_planning'
          },
          {
            id: 'emphasize_patience',
            text: '"I understand that trust takes time. I\'m prepared to earn my place gradually."',
            consequence: 'Patient wisdom • Shows understanding of relationship building',
            effects: [
              { characterId: 'isadora', affectionChange: 30 },
              { characterId: 'luna', affectionChange: 15 }
            ],
            nextScene: 'wisdom_sharing_culture'
          }
        ]
      },
      {
        id: 'community_needs_assessment',
        title: 'Identifying Contributions',
        text: [
          'You work with the community to identify current needs and how your skills might address them.',
          'Celeste mentions: "We could use help with historical research and documentation. Many of our stories exist only in memory."',
          'Isadora notes: "External relations are increasingly complex. Fresh perspectives on human-supernatural diplomacy would be valuable."',
          'The assessment reveals multiple ways you could contribute meaningfully to the community\'s wellbeing.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'focus_on_historical_documentation',
            text: '"I\'d love to help preserve your histories. Stories shouldn\'t be lost."',
            consequence: 'Historical preservation • Shows value for community legacy',
            effects: [
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'luna', affectionChange: 20 }
            ],
            nextScene: 'skill_integration_planning'
          },
          {
            id: 'offer_diplomatic_perspective',
            text: '"My human perspective might be useful for external relations work."',
            consequence: 'Diplomatic contribution • Offers unique viewpoint',
            effects: [
              { characterId: 'isadora', affectionChange: 25 },
              { characterId: 'lilith', affectionChange: 18 }
            ],
            nextScene: 'practical_arrangements'
          },
          {
            id: 'suggest_comprehensive_approach',
            text: '"Could I contribute to multiple areas? I\'d like to be as helpful as possible."',
            consequence: 'Comprehensive service • Shows broad willingness to help',
            effects: [
              { characterId: 'celeste', affectionChange: 25 },
              { characterId: 'isadora', affectionChange: 20 }
            ],
            nextScene: 'wisdom_sharing_culture'
          }
        ]
      },
      {
        id: 'skill_integration_planning',
        title: 'Practical Integration',
        text: [
          'Together, you develop a practical plan for integrating your skills and abilities into the community\'s operations.',
          'The plan balances your desire to help with the need to learn and understand before taking on major responsibilities.',
          'Each role is designed to build gradually, allowing you to prove yourself while gaining deeper understanding.',
          'The thoughtful approach ensures successful integration rather than overwhelming you or disrupting existing dynamics.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'start_with_observation',
            text: '"I\'d like to start by observing and learning before taking on active roles."',
            consequence: 'Learning first • Shows wisdom in gradual approach',
            effects: [
              { characterId: 'celeste', affectionChange: 25 },
              { characterId: 'luna', affectionChange: 20 }
            ],
            nextScene: 'wisdom_sharing_culture'
          },
          {
            id: 'begin_with_simple_tasks',
            text: '"Let me begin with simple tasks and build up to more complex responsibilities."',
            consequence: 'Gradual progression • Shows practical wisdom',
            effects: [
              { characterId: 'isadora', affectionChange: 22 },
              { characterId: 'celeste', affectionChange: 20 }
            ],
            nextScene: 'practical_arrangements'
          },
          {
            id: 'request_mentorship',
            text: '"I\'d appreciate mentorship as I learn to contribute effectively."',
            consequence: 'Mentorship seeking • Shows humility and desire to learn',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 22 }
            ],
            nextScene: 'wisdom_sharing_culture'
          }
        ]
      },
      {
        id: 'wisdom_sharing_culture',
        title: 'Learning Together',
        text: [
          'You discover that the community has a strong culture of sharing wisdom and learning from each other.',
          'Luna explains: "We believe that knowledge belongs to the community. Each person\'s insights strengthen everyone."',
          'Celeste adds: "Learning never stops, even with centuries of experience. Fresh perspectives always reveal new truths."',
          'The emphasis on collective wisdom creates an environment where growth and understanding flourish.'
        ],
        character: characters.luna,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'embrace_continuous_learning',
            text: '"I love the idea of continuous learning. What can I learn from each of you?"',
            consequence: 'Learning enthusiasm • Shows appreciation for growth',
            effects: [
              { characterId: 'luna', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 20 }
            ],
            nextScene: 'individual_connections'
          },
          {
            id: 'offer_to_share_knowledge',
            text: '"I\'d like to share what I know too. Learning should be reciprocal."',
            consequence: 'Knowledge sharing • Shows willingness to contribute wisdom',
            effects: [
              { characterId: 'celeste', affectionChange: 25 },
              { characterId: 'luna', affectionChange: 22 }
            ],
            nextScene: 'mutual_understanding'
          },
          {
            id: 'ask_about_learning_methods',
            text: '"How do you structure learning and knowledge sharing? What are your methods?"',
            consequence: 'Method inquiry • Shows interest in systematic learning',
            effects: [
              { characterId: 'celeste', affectionChange: 30 },
              { characterId: 'luna', affectionChange: 18 }
            ],
            nextScene: 'educational_development'
          }
        ]
      },
      {
        id: 'valentina_personal_story',
        title: 'The Revolutionary\'s Heart',
        text: [
          'Valentina sits heavily, her fierce composure cracking as she speaks about Maria.',
          '"She was an art student. Bright, passionate, full of dreams about changing the world through beauty." Her voice trembles with barely contained emotion.',
          '"When I found her, she was covered in her own artwork - paintings torn to shreds because she couldn\'t control her strength. She kept apologizing for \'ruining everything.\'"',
          'Tears shine in Valentina\'s amber eyes. "I held her while she cried, and I swore that no one else would suffer alone like she did. That\'s why this program isn\'t just politics to me - it\'s personal."'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_emotional_support',
            text: 'Gently place a comforting hand on her shoulder.',
            consequence: 'Emotional support • Shows compassion for her pain',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'valentina_gratitude'
          },
          {
            id: 'validate_her_mission',
            text: '"Maria\'s story makes the urgency so clear. Thank you for sharing something so personal."',
            consequence: 'Mission validation • Honors her personal motivation',
            effects: [{ characterId: 'valentina', affectionChange: 30 }],
            nextScene: 'revolutionary_determination'
          },
          {
            id: 'ask_about_marias_recovery',
            text: '"How is Maria now? Was she able to rebuild her life?"',
            consequence: 'Recovery interest • Shows care for individual outcomes',
            effects: [{ characterId: 'valentina', affectionChange: 28 }],
            nextScene: 'rescue_outcomes'
          }
        ]
      },
      {
        id: 'game_over_screen',
        title: 'Journey\'s End',
        text: [
          'Your story has reached its conclusion. The choices you made have shaped not only your own destiny, but the fate of the entire supernatural community.',
          'The relationships you built, the trust you earned or lost, and the values you demonstrated have all contributed to this outcome.',
          'Though this chapter ends, the impact of your decisions will echo through the community for generations to come.',
          'Thank you for experiencing the world of Eternal Hearts: A Ravencroft Romance.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'restart_game',
            text: 'Begin a new story',
            consequence: 'New beginning • Start fresh journey',
            effects: [],
            nextScene: 'character_creation'
          },
          {
            id: 'view_relationship_summary',
            text: 'Review your relationships',
            consequence: 'Reflection • See final relationship states',
            effects: [],
            nextScene: 'relationship_summary'
          }
        ]
      },
      {
        id: 'exile_ending',
        title: 'Cast Out',
        text: [
          'The weight of lost trust has become too heavy to bear. One by one, the vampires have turned away from you, their faith shattered by your choices.',
          'Lilith speaks with cold finality: "You have proven that you cannot be trusted with our secrets or our safety. You must leave Ravencroft Manor."',
          'Your belongings are packed quietly. No one meets your eyes as you prepare to go. The family you thought you\'d found has become strangers.',
          'As you walk through the manor gates for the last time, you realize that trust, once broken, may be impossible to repair. Your exile is complete.'
        ],
        character: characters.lilith,
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'accept_exile_with_dignity',
            text: 'Leave quietly without making things worse.',
            consequence: 'Dignified departure • Accepts consequences gracefully',
            effects: [],
            nextScene: 'game_over_screen'
          },
          {
            id: 'attempt_final_apology',
            text: 'Try one last time to apologize and make amends.',
            consequence: 'Final appeal • Attempts reconciliation',
            effects: [],
            nextScene: 'relationship_repair'
          }
        ]
      },
      {
        id: 'document_demand',
        title: 'Secrets Demanded',
        text: [
          'Your probing into forbidden topics has gone too far. Multiple vampires now see you as a security threat rather than a trusted ally.',
          'Isadora\'s voice is ice-cold: "You seem to know a great deal about our private matters. Perhaps you should share how you came by this information."',
          'Raven steps forward menacingly: "Documents. Names. Sources. Now. Or we\'ll assume you\'re working for our enemies."',
          'The atmosphere has turned hostile. Your curious questions have been interpreted as espionage, and now you must face the consequences.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'refuse_to_reveal_sources',
            text: '"I won\'t betray anyone\'s confidence, even to save myself."',
            consequence: 'Protective silence • Maintains confidentiality despite danger',
            effects: [
              { characterId: 'isadora', affectionChange: -20 },
              { characterId: 'raven', affectionChange: -15 }
            ],
            nextScene: 'accusation_escalation'
          },
          {
            id: 'explain_innocent_curiosity',
            text: '"I was only curious! I meant no harm by asking questions."',
            consequence: 'Innocent explanation • Claims harmless intent',
            effects: [
              { characterId: 'isadora', affectionChange: -10 },
              { characterId: 'lilith', affectionChange: -8 }
            ],
            nextScene: 'trust_evaluation'
          },
          {
            id: 'offer_full_transparency',
            text: '"I\'ll tell you everything I know and how I learned it."',
            consequence: 'Complete transparency • Offers full disclosure',
            effects: [
              { characterId: 'isadora', affectionChange: 5 },
              { characterId: 'lilith', affectionChange: 3 }
            ],
            nextScene: 'relationship_repair'
          }
        ]
      },
      {
        id: 'relationship_repair',
        title: 'Attempting Reconciliation',
        text: [
          'You make a sincere effort to repair the damaged relationships and rebuild lost trust.',
          'Your words carry genuine remorse and a deep understanding of how your actions affected others.',
          'Some vampires are willing to listen, while others remain skeptical. The process is slow and uncertain.',
          'Whether reconciliation is possible depends on the depth of the damage and your sincerity in making amends.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_whatever_outcome',
            text: '"I accept whatever decision you make. I just needed you to know I\'m truly sorry."',
            consequence: 'Humble acceptance • Shows genuine remorse',
            effects: [
              { characterId: 'lilith', affectionChange: 10 },
              { characterId: 'seraphina', affectionChange: 8 }
            ],
            nextScene: 'forgiveness_consideration'
          },
          {
            id: 'propose_probation_period',
            text: '"Perhaps I could earn back your trust through a probationary period?"',
            consequence: 'Earning trust • Proposes gradual rebuilding',
            effects: [
              { characterId: 'isadora', affectionChange: 5 },
              { characterId: 'celeste', affectionChange: 8 }
            ],
            nextScene: 'conditional_acceptance'
          },
          {
            id: 'promise_changed_behavior',
            text: '"I promise to change my behavior completely. Give me one more chance."',
            consequence: 'Behavioral change • Commits to transformation',
            effects: [
              { characterId: 'lilith', affectionChange: 8 },
              { characterId: 'valentina', affectionChange: 5 }
            ],
            nextScene: 'second_chance_consideration'
          }
        ]
      },
      {
        id: 'accusation_escalation',
        title: 'Suspicions Confirmed',
        text: [
          'Your refusal to provide information only confirms their worst suspicions about your motives.',
          'Raven\'s hand moves to her weapon. "Silence is admission of guilt. You\'re working for someone against us."',
          'Lilith\'s expression turns to stone. "Pack your belongings. You have one hour before we escort you from the grounds."',
          'The situation has escalated beyond repair. Your attempt to protect confidentiality has been interpreted as proof of betrayal.'
        ],
        character: characters.raven,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'leave_immediately',
            text: 'Pack quickly and leave without further confrontation.',
            consequence: 'Immediate departure • Avoids further conflict',
            effects: [],
            nextScene: 'exile_ending'
          },
          {
            id: 'make_final_appeal',
            text: 'Try one last desperate attempt to convince them of your innocence.',
            consequence: 'Final appeal • Last chance for reconciliation',
            effects: [
              { characterId: 'lilith', affectionChange: -5 },
              { characterId: 'raven', affectionChange: -10 }
            ],
            nextScene: 'relationship_repair'
          }
        ]
      },
      {
        id: 'grief_understanding',
        title: 'Shared Sorrow',
        text: [
          'In a moment of vulnerability, the community shares their deepest grief with you, and you with them.',
          'Elena speaks of her lost family, Valentina of those she couldn\'t save, and others add their own stories of loss.',
          'The shared sorrow creates profound bonds of understanding and mutual support.',
          'You realize that grief shared is grief diminished, and that healing happens in community.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_comfort_to_all',
            text: 'Open your arms to comfort anyone who needs it.',
            consequence: 'Universal comfort • Offers support to everyone',
            effects: [
              { characterId: 'elena', affectionChange: 35 },
              { characterId: 'morgana', affectionChange: 25 },
              { characterId: 'valentina', affectionChange: 20 }
            ],
            nextScene: 'healing_circle'
          },
          {
            id: 'share_your_own_grief',
            text: 'Share your own experiences with loss and sorrow.',
            consequence: 'Grief sharing • Creates mutual vulnerability',
            effects: [
              { characterId: 'elena', affectionChange: 40 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'mutual_healing'
          },
          {
            id: 'suggest_memorial_ritual',
            text: '"Perhaps we could create a ritual to honor all those we\'ve lost."',
            consequence: 'Memorial creation • Proposes healing ceremony',
            effects: [
              { characterId: 'luna', affectionChange: 30 },
              { characterId: 'morgana', affectionChange: 25 }
            ],
            nextScene: 'sacred_remembrance'
          }
        ]
      },
      // Additional orphaned scenes implementation
      {
        id: 'isadora_political_lessons',
        title: 'The Art of Influence',
        text: [
          'Isadora shares her centuries of experience with political strategy and social influence.',
          '"Power is never about force - it\'s about understanding what people want and helping them see how your goals align with theirs," she explains.',
          '"Every conversation is an opportunity to build alliances, gather information, or plant seeds for future cooperation."',
          'Her insights reveal the sophisticated political thinking that keeps the supernatural community stable.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_negotiation_tactics',
            text: '"What are your most effective negotiation tactics?"',
            consequence: 'Tactical learning • Seeks practical political skills',
            effects: [{ characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'political_mastery'
          },
          {
            id: 'discuss_ethical_boundaries',
            text: '"How do you maintain ethical boundaries while being politically effective?"',
            consequence: 'Ethical inquiry • Shows moral consideration',
            effects: [{ characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'principled_politics'
          }
        ]
      },
      {
        id: 'educational_development',
        title: 'Learning Systems',
        text: [
          'You work with Celeste to develop comprehensive educational systems for the community.',
          'The approach balances formal instruction with experiential learning and mentorship.',
          'Different learning styles and preferences are accommodated to ensure everyone can participate fully.',
          'The educational framework becomes a model for other supernatural communities.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'focus_on_practical_skills',
            text: 'Emphasize practical skills that can be immediately applied.',
            consequence: 'Practical focus • Prioritizes applicable knowledge',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'skill_development'
          },
          {
            id: 'balance_theory_and_practice',
            text: 'Create balanced curriculum combining theoretical understanding with practical application.',
            consequence: 'Balanced approach • Integrates different learning approaches',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'comprehensive_education'
          }
        ]
      },
      {
        id: 'valentina_gratitude',
        title: 'Revolutionary Appreciation',
        text: [
          'Valentina\'s fierce exterior softens as she expresses genuine gratitude for your understanding and support.',
          '"You didn\'t just hear my words - you felt the pain behind them. That means everything to someone like me."',
          'Her amber eyes shine with unshed tears. "So few people understand that revolution comes from love, not anger."',
          'The moment creates a deep bond built on mutual understanding and shared compassion.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'deepen_revolutionary_bond',
            text: '"Your passion inspires me. How can I help make your vision real?"',
            consequence: 'Revolutionary alliance • Commits to shared cause',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'revolutionary_partnership'
          },
          {
            id: 'offer_emotional_support',
            text: '"You don\'t have to carry this burden alone anymore."',
            consequence: 'Emotional support • Offers partnership in struggle',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'shared_burden'
          }
        ]
      },
      {
        id: 'revolutionary_determination',
        title: 'Strengthened Resolve',
        text: [
          'Your support strengthens Valentina\'s determination to continue fighting for the marginalized.',
          '"With allies like you, real change becomes possible. We can build the network of support that so many desperately need."',
          'Her revolutionary fervor is tempered by wisdom gained through your conversations.',
          'The partnership promises to create lasting positive change in the supernatural community.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'plan_systematic_approach',
            text: '"Let\'s develop a systematic approach to building this network."',
            consequence: 'Strategic planning • Focuses on organized approach',
            effects: [{ characterId: 'valentina', affectionChange: 30 }],
            nextScene: 'network_development'
          },
          {
            id: 'start_with_immediate_needs',
            text: '"Should we start by addressing the most urgent cases first?"',
            consequence: 'Immediate action • Prioritizes urgent needs',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'crisis_intervention'
          }
        ]
      },
      {
        id: 'rescue_outcomes',
        title: 'Stories of Recovery',
        text: [
          'Valentina shares the outcomes of her rescue efforts, both successful recoveries and heartbreaking losses.',
          '"Maria is thriving now - she teaches art to other young vampires, helping them channel their emotions constructively."',
          '"But not every story ends well. Dmitri took his own life before we could reach him. That\'s why timing matters so much."',
          'The mixed outcomes underscore both the importance and the urgency of the work.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'honor_the_lost',
            text: '"We should honor those we couldn\'t save by saving others in their memory."',
            consequence: 'Memorial commitment • Channels grief into purpose',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'memorial_dedication'
          },
          {
            id: 'focus_on_prevention',
            text: '"How can we prevent more tragedies like Dmitri\'s?"',
            consequence: 'Prevention focus • Seeks proactive solutions',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'prevention_strategies'
          }
        ]
      },
      {
        id: 'character_creation',
        title: 'New Beginnings',
        text: [
          'You return to the beginning of your journey, ready to make different choices and explore new paths.',
          'The knowledge of previous experiences gives you wisdom, but the future remains unwritten.',
          'Each choice still matters, each relationship still needs to be built through genuine connection.',
          'Your story begins anew with endless possibilities stretching ahead.'
        ],
        background: '/backgrounds/title-screen.png',
        choices: [
          {
            id: 'begin_character_creation',
            text: 'Create your character',
            consequence: 'Fresh start • Begin new journey',
            effects: [],
            nextScene: 'trait_selection'
          }
        ]
      },
      {
        id: 'relationship_summary',
        title: 'Bonds Forged',
        text: [
          'Looking back on your journey, you reflect on the relationships you\'ve built and the trust you\'ve earned.',
          'Each connection tells a story of growth, understanding, and mutual respect developed through your choices.',
          'The vampire community has been forever changed by your presence, just as you have been changed by theirs.',
          'These bonds will endure beyond this single story, part of the eternal tapestry of Ravencroft Manor.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'start_new_story',
            text: 'Begin a new journey',
            consequence: 'New adventure • Fresh possibilities',
            effects: [],
            nextScene: 'character_creation'
          }
        ]
      },
      {
        id: 'trust_evaluation',
        title: 'Weighing Your Worth',
        text: [
          'The community carefully evaluates whether your curiosity crossed acceptable boundaries or remained within reasonable limits.',
          'Lilith leads the discussion: "Intent matters as much as action. Was this genuine curiosity or something more concerning?"',
          'Different vampires offer varying perspectives, some more forgiving than others.',
          'Your fate hangs in the balance as they decide whether trust can be maintained or has been irreparably damaged.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_their_judgment',
            text: '"I accept whatever decision you make. I understand your concerns."',
            consequence: 'Humble acceptance • Shows respect for community judgment',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'forgiveness_consideration'
          },
          {
            id: 'defend_your_intentions',
            text: '"My questions came from genuine interest, never malicious intent."',
            consequence: 'Intent defense • Clarifies motivations',
            effects: [{ characterId: 'lilith', affectionChange: 5 }],
            nextScene: 'conditional_acceptance'
          }
        ]
      },
      {
        id: 'forgiveness_consideration',
        title: 'Mercy\'s Deliberation',
        text: [
          'The community weighs the possibility of forgiveness against the need for security.',
          'Seraphina advocates for mercy: "Forgiveness is divine, and everyone deserves a second chance if they truly repent."',
          'Raven argues for caution: "Security isn\'t just about us - it\'s about protecting everyone we shelter."',
          'The decision will set a precedent for how the community handles future trust violations.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'promise_to_earn_forgiveness',
            text: '"I will spend however long it takes proving I deserve your forgiveness."',
            consequence: 'Forgiveness commitment • Pledges to rebuild trust',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'redemption_path'
          },
          {
            id: 'accept_exile_if_necessary',
            text: '"If exile is what\'s best for everyone\'s safety, I\'ll accept it."',
            consequence: 'Selfless acceptance • Puts community safety first',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'noble_sacrifice'
          }
        ]
      },
      {
        id: 'conditional_acceptance',
        title: 'Probationary Status',
        text: [
          'The community decides to allow you to stay under strict conditions and constant supervision.',
          'Isadora outlines the terms: "Limited access to sensitive information, regular check-ins, and demonstration of trustworthy behavior."',
          'The probationary period will test whether you can rebuild the trust that was damaged.',
          'Success means full restoration of your place in the community; failure means permanent exile.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_probation_eagerly',
            text: '"I accept these conditions gratefully. Thank you for this chance."',
            consequence: 'Probation acceptance • Shows gratitude for opportunity',
            effects: [{ characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'probationary_period'
          },
          {
            id: 'ask_about_timeline',
            text: '"How long will the probationary period last?"',
            consequence: 'Timeline inquiry • Seeks understanding of process',
            effects: [{ characterId: 'isadora', affectionChange: 8 }],
            nextScene: 'probation_details'
          }
        ]
      },
      {
        id: 'second_chance_consideration',
        title: 'The Weight of Second Chances',
        text: [
          'Your promise of changed behavior is weighed carefully by the community.',
          'Luna speaks with prophetic wisdom: "I see genuine remorse, but also the difficulty of changing ingrained patterns."',
          'Celeste adds analytically: "Second chances work best when supported by structural changes, not just good intentions."',
          'The decision will require both your commitment and the community\'s willingness to invest in your rehabilitation.'
        ],
        character: characters.luna,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'propose_accountability_measures',
            text: '"I want accountability measures to help ensure I keep my promise."',
            consequence: 'Accountability seeking • Requests support structure',
            effects: [{ characterId: 'celeste', affectionChange: 15 }],
            nextScene: 'accountability_framework'
          },
          {
            id: 'ask_for_community_support',
            text: '"I need your help to change. I can\'t do this alone."',
            consequence: 'Support request • Acknowledges need for assistance',
            effects: [{ characterId: 'luna', affectionChange: 12 }],
            nextScene: 'community_rehabilitation'
          }
        ]
      },
      {
        id: 'healing_circle',
        title: 'Circle of Comfort',
        text: [
          'The community forms a healing circle, offering comfort and support to all who are grieving.',
          'Physical touch, gentle words, and shared presence create a sacred space for processing pain.',
          'The circle demonstrates that healing happens in community, not in isolation.',
          'Each person\'s grief is honored while the collective strength helps everyone bear their burdens.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_regular_circles',
            text: 'Suggest making healing circles a regular community practice.',
            consequence: 'Institutionalized healing • Creates ongoing support structure',
            effects: [
              { characterId: 'elena', affectionChange: 30 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'therapeutic_community'
          },
          {
            id: 'focus_on_present_healing',
            text: 'Concentrate fully on the healing happening in this moment.',
            consequence: 'Present focus • Emphasizes immediate healing',
            effects: [
              { characterId: 'morgana', affectionChange: 25 },
              { characterId: 'elena', affectionChange: 35 }
            ],
            nextScene: 'collective_healing'
          }
        ]
      },
      {
        id: 'mutual_healing',
        title: 'Shared Recovery',
        text: [
          'You and the community members heal together, supporting each other through shared vulnerability.',
          'The mutual exchange of comfort and understanding creates deeper bonds than sympathy alone could achieve.',
          'Everyone discovers that giving healing helps receive it, and receiving healing enables giving it.',
          'The process transforms individual pain into collective strength and wisdom.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'develop_healing_partnerships',
            text: 'Form ongoing healing partnerships with community members.',
            consequence: 'Partnership formation • Creates sustained support relationships',
            effects: [
              { characterId: 'elena', affectionChange: 40 },
              { characterId: 'morgana', affectionChange: 30 }
            ],
            nextScene: 'therapeutic_bonds'
          },
          {
            id: 'share_healing_wisdom',
            text: 'Document and share the healing wisdom gained through this experience.',
            consequence: 'Wisdom preservation • Records healing insights',
            effects: [
              { characterId: 'celeste', affectionChange: 25 },
              { characterId: 'luna', affectionChange: 30 }
            ],
            nextScene: 'healing_legacy'
          }
        ]
      },
      {
        id: 'sacred_remembrance',
        title: 'Honoring the Lost',
        text: [
          'The community creates a sacred ritual to honor and remember all those who have been lost.',
          'Each name is spoken with love, each story shared with reverence, each memory treasured.',
          'The ritual transforms grief into celebration of lives lived and love shared.',
          'The remembrance becomes a healing tradition that will comfort future generations facing loss.'
        ],
        character: characters.luna,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_annual_remembrance',
            text: 'Make this an annual tradition to honor all losses.',
            consequence: 'Traditional establishment • Creates lasting memorial practice',
            effects: [
              { characterId: 'luna', affectionChange: 35 },
              { characterId: 'morgana', affectionChange: 30 }
            ],
            nextScene: 'memorial_tradition'
          },
          {
            id: 'create_memorial_garden',
            text: 'Propose creating a physical memorial garden for ongoing remembrance.',
            consequence: 'Memorial creation • Establishes permanent tribute',
            effects: [
              { characterId: 'elena', affectionChange: 40 },
              { characterId: 'seraphina', affectionChange: 25 }
            ],
            nextScene: 'living_memorial'
          }
        ]
      },
      // Final orphaned scenes completion
      {
        id: 'political_mastery',
        title: 'Strategic Excellence',
        text: [
          'Under Isadora\'s guidance, you develop sophisticated political and negotiation skills.',
          'The lessons cover reading body language, managing information flow, building coalitions, and finding win-win solutions.',
          'Your growing expertise in diplomacy becomes valuable for both internal community dynamics and external relations.',
          'Political mastery proves to be about creating value for everyone, not just winning.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'apply_skills_internally',
            text: 'Use these skills to improve internal community dynamics.',
            consequence: 'Internal application • Strengthens community relationships',
            effects: [{ characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'community_harmony'
          },
          {
            id: 'focus_on_external_relations',
            text: 'Concentrate on improving external supernatural community relations.',
            consequence: 'External focus • Builds broader alliances',
            effects: [{ characterId: 'isadora', affectionChange: 35 }],
            nextScene: 'diplomatic_success'
          }
        ]
      },
      {
        id: 'principled_politics',
        title: 'Ethics in Action',
        text: [
          'You and Isadora develop frameworks for maintaining ethical standards while being politically effective.',
          'The approach emphasizes transparency, honesty, and mutual benefit while still achieving strategic goals.',
          'Principled politics proves more sustainable and trustworthy than manipulative tactics.',
          'Your ethical approach earns respect and creates lasting alliances based on genuine trust.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'teach_ethical_frameworks',
            text: 'Share these ethical frameworks with other community members.',
            consequence: 'Ethics teaching • Spreads principled approach',
            effects: [{ characterId: 'isadora', affectionChange: 40 }],
            nextScene: 'moral_leadership'
          },
          {
            id: 'document_best_practices',
            text: 'Document best practices for future reference and training.',
            consequence: 'Practice documentation • Preserves ethical methods',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'ethical_legacy'
          }
        ]
      },
      {
        id: 'skill_development',
        title: 'Practical Mastery',
        text: [
          'Focus on developing immediately applicable practical skills serves the community well.',
          'Members quickly gain competencies they can use in daily challenges and responsibilities.',
          'The hands-on approach builds confidence and creates visible improvements in community functioning.',
          'Practical skills form the foundation for more advanced theoretical understanding later.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'expand_skill_programs',
            text: 'Develop additional practical skill programs for specialized areas.',
            consequence: 'Program expansion • Creates comprehensive skill development',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'mastery_pathways'
          },
          {
            id: 'create_mentorship_pairs',
            text: 'Pair experienced members with newcomers for skill transfer.',
            consequence: 'Mentorship creation • Builds learning relationships',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'knowledge_transfer'
          }
        ]
      },
      {
        id: 'comprehensive_education',
        title: 'Holistic Learning',
        text: [
          'The balanced educational approach creates well-rounded community members with both practical skills and theoretical understanding.',
          'Students learn to think critically while also gaining hands-on competencies.',
          'The comprehensive curriculum becomes a model for other supernatural communities seeking educational excellence.',
          'Graduates emerge as thoughtful leaders capable of handling complex challenges.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'establish_graduation_ceremonies',
            text: 'Create formal recognition for educational achievements.',
            consequence: 'Achievement recognition • Celebrates learning milestones',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'academic_excellence'
          },
          {
            id: 'develop_advanced_curricula',
            text: 'Create advanced programs for continued learning beyond basics.',
            consequence: 'Advanced development • Enables lifelong learning',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'lifelong_learning'
          }
        ]
      },
      {
        id: 'revolutionary_partnership',
        title: 'United in Change',
        text: [
          'Your partnership with Valentina creates a powerful force for positive transformation in supernatural society.',
          'Together, you develop strategies that are both revolutionary in scope and practical in implementation.',
          'The collaboration combines your fresh perspective with her experienced passion for justice.',
          'Your united efforts inspire others to join the movement for progressive change.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'recruit_additional_allies',
            text: 'Work together to recruit additional allies for the cause.',
            consequence: 'Alliance building • Expands revolutionary network',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'movement_growth'
          },
          {
            id: 'focus_on_specific_reforms',
            text: 'Concentrate efforts on achieving specific, measurable reforms.',
            consequence: 'Reform focus • Targets concrete changes',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'reform_success'
          }
        ]
      },
      {
        id: 'shared_burden',
        title: 'Strength in Unity',
        text: [
          'By sharing Valentina\'s emotional burden, you help lighten the weight of her revolutionary mission.',
          'The support allows her to pursue change from a place of hope rather than desperation.',
          'Your partnership demonstrates that sustainable revolution requires emotional sustainability.',
          'Together, you create a model for how passionate advocacy can be both effective and healthy.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_support_networks',
            text: 'Create support networks for other passionate advocates.',
            consequence: 'Network creation • Builds emotional support systems',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'advocate_support'
          },
          {
            id: 'develop_sustainable_practices',
            text: 'Develop practices that maintain passion while preventing burnout.',
            consequence: 'Sustainability focus • Creates healthy advocacy methods',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'sustainable_revolution'
          }
        ]
      },
      {
        id: 'trait_selection',
        title: 'Character Creation',
        text: [
          'You stand at the beginning of your journey, ready to define the traits that will shape your story.',
          'Each choice will influence how you interact with the vampire community and the paths available to you.',
          'Your character\'s unique combination of traits, flaws, and boons will create distinctive opportunities.',
          'The adventure awaits your decisions.'
        ],
        background: '/backgrounds/title-screen.png',
        choices: [
          {
            id: 'begin_trait_selection',
            text: 'Choose your character traits',
            consequence: 'Character creation • Define your nature',
            effects: [],
            nextScene: 'character_creation_complete'
          }
        ]
      },
      {
        id: 'network_development',
        title: 'Building Connections',
        text: [
          'You and Valentina systematically build a network of support for marginalized supernatural beings.',
          'The network provides emergency assistance, ongoing support, and advocacy for policy changes.',
          'Careful organization ensures the network can respond quickly while maintaining security.',
          'The growing community of support creates hope for lasting positive change.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_geographic_reach',
            text: 'Expand the network to cover broader geographic areas.',
            consequence: 'Geographic expansion • Extends support coverage',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'regional_networks'
          },
          {
            id: 'deepen_local_connections',
            text: 'Focus on deepening connections and services in current areas.',
            consequence: 'Local deepening • Strengthens existing support',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'community_strengthening'
          }
        ]
      },
      {
        id: 'crisis_intervention',
        title: 'Emergency Response',
        text: [
          'You and Valentina develop rapid response systems for supernatural beings in crisis.',
          'The intervention protocols balance immediate safety with long-term support and recovery.',
          'Training programs ensure multiple team members can respond effectively to different types of emergencies.',
          'Lives are saved through quick action and compassionate follow-up care.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_response_capabilities',
            text: 'Expand capabilities to handle more types of crises.',
            consequence: 'Capability expansion • Increases intervention scope',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'comprehensive_response'
          },
          {
            id: 'focus_on_prevention',
            text: 'Develop programs to prevent crises before they occur.',
            consequence: 'Prevention focus • Addresses root causes',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'crisis_prevention'
          }
        ]
      },
      {
        id: 'memorial_dedication',
        title: 'Honoring the Lost',
        text: [
          'You and Valentina create a memorial dedicated to those who were lost before help could reach them.',
          'The memorial serves as both a place of remembrance and a commitment to preventing future tragedies.',
          'Each name represents a life that mattered and a reminder of the importance of the work.',
          'The dedication ceremony brings together supporters from across the supernatural community.'
        ],
        character: characters.valentina,
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'establish_annual_remembrance',
            text: 'Create an annual memorial service to honor the lost.',
            consequence: 'Memorial tradition • Creates ongoing remembrance',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'memorial_tradition'
          },
          {
            id: 'channel_grief_into_action',
            text: 'Use the memorial as inspiration for renewed action.',
            consequence: 'Grief transformation • Converts sorrow into purpose',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'purpose_renewal'
          }
        ]
      },
      {
        id: 'prevention_strategies',
        title: 'Stopping Tragedy',
        text: [
          'You develop comprehensive strategies to prevent the kind of tragedies that took Dmitri and others.',
          'Early intervention programs identify at-risk individuals before crisis points are reached.',
          'Community education reduces stigma and encourages people to seek help sooner.',
          'The prevention approach proves more effective than crisis response alone.'
        ],
        character: characters.valentina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'implement_early_warning_systems',
            text: 'Create systems to identify and respond to early warning signs.',
            consequence: 'Warning systems • Enables proactive intervention',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'proactive_care'
          },
          {
            id: 'focus_on_community_education',
            text: 'Concentrate on educating communities about prevention.',
            consequence: 'Education focus • Builds prevention awareness',
            effects: [{ characterId: 'valentina', affectionChange: 35 }],
            nextScene: 'prevention_education'
          }
        ]
      },
      {
        id: 'redemption_path',
        title: 'Road to Forgiveness',
        text: [
          'You begin the difficult but necessary work of earning back the trust you lost.',
          'Each day requires demonstrating through actions that you understand the harm caused and are committed to change.',
          'The process is slow and sometimes frustrating, but gradual progress becomes visible.',
          'Redemption proves to be not just about being forgiven, but about becoming worthy of that forgiveness.'
        ],
        character: characters.seraphina,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'focus_on_consistent_actions',
            text: 'Demonstrate change through consistent, trustworthy actions.',
            consequence: 'Behavioral consistency • Shows reliable transformation',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'trust_rebuilding'
          },
          {
            id: 'seek_guidance_for_improvement',
            text: 'Ask for guidance on how to improve and make amends.',
            consequence: 'Guidance seeking • Shows humility and learning desire',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'guided_redemption'
          }
        ]
      },
      {
        id: 'noble_sacrifice',
        title: 'Selfless Choice',
        text: [
          'Your willingness to accept exile for the community\'s safety demonstrates genuine remorse and character growth.',
          'The sacrifice doesn\'t go unnoticed - several community members are moved by your selflessness.',
          'Though you prepare to leave, the gesture opens unexpected possibilities for reconciliation.',
          'Sometimes the greatest strength is shown through willingness to give up what you want most.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_exile_gracefully',
            text: 'Prepare to leave with dignity and gratitude for the time you had.',
            consequence: 'Graceful departure • Shows maturity and acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'dignified_exile'
          },
          {
            id: 'express_hope_for_future',
            text: 'Express hope that your sacrifice contributes to community safety.',
            consequence: 'Hopeful sacrifice • Shows continued care for community',
            effects: [{ characterId: 'seraphina', affectionChange: 15 }],
            nextScene: 'sacrificial_legacy'
          }
        ]
      },
      {
        id: 'probationary_period',
        title: 'Earning Trust',
        text: [
          'The probationary period tests your commitment to rebuilding trust through consistent actions.',
          'Daily interactions are carefully observed, and your responses to challenges are noted.',
          'Progress is slow but measurable as you demonstrate reliable judgment and trustworthy behavior.',
          'The structured approach helps both you and the community feel secure during the rebuilding process.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'exceed_expectations',
            text: 'Go above and beyond the minimum requirements.',
            consequence: 'Excellence demonstration • Shows extraordinary commitment',
            effects: [{ characterId: 'isadora', affectionChange: 18 }],
            nextScene: 'exceptional_progress'
          },
          {
            id: 'meet_requirements_consistently',
            text: 'Focus on meeting all requirements consistently and reliably.',
            consequence: 'Consistent compliance • Shows reliable improvement',
            effects: [{ characterId: 'isadora', affectionChange: 15 }],
            nextScene: 'steady_progress'
          }
        ]
      },
      {
        id: 'probation_details',
        title: 'Understanding the Process',
        text: [
          'Isadora explains the detailed structure of your probationary period and what success looks like.',
          'The timeline depends on demonstrated progress rather than fixed dates, ensuring genuine change.',
          'Regular evaluations will assess both behavior and understanding of why trust was damaged.',
          'The process is designed to be fair while maintaining community security.'
        ],
        character: characters.isadora,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'commit_to_the_process',
            text: 'Fully commit to following the process as designed.',
            consequence: 'Process commitment • Shows acceptance of structure',
            effects: [{ characterId: 'isadora', affectionChange: 12 }],
            nextScene: 'probationary_period'
          },
          {
            id: 'ask_about_support_resources',
            text: 'Ask what support resources are available during probation.',
            consequence: 'Support inquiry • Seeks help for success',
            effects: [{ characterId: 'celeste', affectionChange: 10 }],
            nextScene: 'probation_support'
          }
        ]
      },
      {
        id: 'accountability_framework',
        title: 'Structured Change',
        text: [
          'Together, you develop a comprehensive accountability framework to support your behavioral changes.',
          'The structure includes regular check-ins, specific goals, and measurements of progress.',
          'Accountability partners help provide support while ensuring consistency in improvement efforts.',
          'The framework becomes a model for helping others make positive changes in their lives.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'implement_framework_fully',
            text: 'Embrace the full accountability framework enthusiastically.',
            consequence: 'Framework embrace • Shows commitment to structured change',
            effects: [{ characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'systematic_improvement'
          },
          {
            id: 'adapt_framework_to_needs',
            text: 'Work to adapt the framework to your specific needs and challenges.',
            consequence: 'Framework adaptation • Personalizes change approach',
            effects: [{ characterId: 'celeste', affectionChange: 18 }],
            nextScene: 'personalized_growth'
          }
        ]
      },
      {
        id: 'community_rehabilitation',
        title: 'Collective Support',
        text: [
          'The entire community commits to supporting your rehabilitation and positive change.',
          'Different members offer various forms of assistance: mentorship, skills training, emotional support.',
          'The collective approach demonstrates the community\'s commitment to redemption and growth.',
          'Your rehabilitation becomes a community effort that strengthens everyone involved.'
        ],
        character: characters.luna,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_community_support',
            text: 'Gratefully accept the community\'s support and guidance.',
            consequence: 'Support acceptance • Shows humility and gratitude',
            effects: [{ characterId: 'luna', affectionChange: 20 }],
            nextScene: 'supported_growth'
          },
          {
            id: 'contribute_to_others_growth',
            text: 'Look for ways to support others\' growth while working on your own.',
            consequence: 'Mutual support • Shows commitment to community wellbeing',
            effects: [{ characterId: 'elena', affectionChange: 15 }],
            nextScene: 'reciprocal_healing'
          }
        ]
      },
      {
        id: 'therapeutic_community',
        title: 'Healing Culture',
        text: [
          'The regular healing circles transform the community culture, making emotional support a core value.',
          'Everyone feels more comfortable sharing struggles and seeking help when needed.',
          'The therapeutic approach prevents many problems from escalating into serious crises.',
          'The community becomes known for its emotional intelligence and supportive environment.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'train_community_therapists',
            text: 'Train community members in therapeutic techniques.',
            consequence: 'Therapeutic training • Builds healing capacity',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'healing_expertise'
          },
          {
            id: 'document_healing_practices',
            text: 'Document the healing practices for sharing with other communities.',
            consequence: 'Practice documentation • Spreads healing knowledge',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'healing_wisdom'
          }
        ]
      },
      {
        id: 'collective_healing',
        title: 'Community Recovery',
        text: [
          'The community\'s collective healing process strengthens bonds and creates deeper understanding.',
          'Shared healing experiences build empathy and mutual support among all members.',
          'The process demonstrates that individual healing contributes to community wellbeing.',
          'Collective recovery becomes more powerful than individual healing efforts alone.'
        ],
        character: characters.morgana,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'celebrate_collective_strength',
            text: 'Celebrate the strength that comes from healing together.',
            consequence: 'Strength celebration • Honors collective power',
            effects: [{ characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'unified_community'
          },
          {
            id: 'continue_healing_work',
            text: 'Commit to ongoing healing work as a community practice.',
            consequence: 'Ongoing commitment • Maintains healing focus',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'healing_tradition'
          }
        ]
      },
      {
        id: 'therapeutic_bonds',
        title: 'Healing Partnerships',
        text: [
          'The ongoing healing partnerships create deep, supportive relationships within the community.',
          'Partners help each other process emotions, overcome challenges, and celebrate growth.',
          'The therapeutic bonds demonstrate that healing is both an individual and relational process.',
          'These partnerships become one of the community\'s greatest strengths.'
        ],
        character: characters.elena,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'formalize_partnership_program',
            text: 'Create a formal program for therapeutic partnerships.',
            consequence: 'Program formalization • Systematizes healing support',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'healing_system'
          },
          {
            id: 'focus_on_partnership_quality',
            text: 'Focus on deepening the quality of existing partnerships.',
            consequence: 'Quality focus • Strengthens current bonds',
            effects: [{ characterId: 'morgana', affectionChange: 30 }],
            nextScene: 'deep_connections'
          }
        ]
      },
      {
        id: 'healing_legacy',
        title: 'Wisdom Preserved',
        text: [
          'The healing wisdom gained through community experience is carefully documented and preserved.',
          'Future generations will benefit from the lessons learned about emotional support and recovery.',
          'The documented practices become resources for other communities facing similar challenges.',
          'Your healing legacy extends far beyond the immediate community.'
        ],
        character: characters.celeste,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'create_healing_library',
            text: 'Establish a specialized library of healing wisdom and practices.',
            consequence: 'Library creation • Preserves healing knowledge',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'knowledge_preservation'
          },
          {
            id: 'train_future_healers',
            text: 'Focus on training future healers in the documented practices.',
            consequence: 'Healer training • Ensures knowledge continuity',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'healing_succession'
          }
        ]
      },
      {
        id: 'memorial_tradition',
        title: 'Remembrance Ritual',
        text: [
          'The annual memorial tradition becomes a cornerstone of community life.',
          'Each year, the community gathers to honor those lost and renew commitment to supporting the living.',
          'The tradition provides comfort to the grieving while inspiring continued dedication to the cause.',
          'Memorial events strengthen community bonds and preserve important memories.'
        ],
        character: characters.luna,
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'expand_memorial_activities',
            text: 'Develop additional memorial activities throughout the year.',
            consequence: 'Memorial expansion • Creates ongoing remembrance',
            effects: [{ characterId: 'luna', affectionChange: 30 }],
            nextScene: 'remembrance_culture'
          },
          {
            id: 'focus_on_celebration_of_life',
            text: 'Emphasize celebrating the lives lived rather than mourning the losses.',
            consequence: 'Life celebration • Focuses on positive memories',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'joyful_remembrance'
          }
        ]
      },
      {
        id: 'living_memorial',
        title: 'Garden of Memory',
        text: [
          'The memorial garden becomes a living tribute where beauty grows from remembrance.',
          'Each plant represents a life remembered, creating a space of natural peace and reflection.',
          'The garden provides ongoing comfort to community members processing grief.',
          'Tending the memorial garden becomes a meditative practice that honors the past while nurturing the future.'
        ],
        character: characters.elena,
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'expand_garden_program',
            text: 'Develop programs where community members can participate in garden care.',
            consequence: 'Garden program • Creates participatory memorial',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'participatory_memorial'
          },
          {
            id: 'create_garden_ceremonies',
            text: 'Develop special ceremonies for planting and tending the memorial garden.',
            consequence: 'Garden ceremonies • Ritualizes memorial care',
            effects: [{ characterId: 'luna', affectionChange: 35 }],
            nextScene: 'ritual_gardening'
          }
        ]
      },
      // Final completion of all orphaned pathways
      {
        id: 'community_harmony',
        title: 'Internal Balance',
        text: [
          'Your political skills create unprecedented harmony within the community.',
          'Conflicts are resolved before they escalate, and everyone feels heard and valued.',
          'The improved dynamics strengthen both individual relationships and collective effectiveness.',
          'The community becomes a model of cooperative living and mutual respect.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'maintain_harmony_systems',
            text: 'Establish systems to maintain this harmony long-term.',
            consequence: 'System establishment • Creates lasting harmony',
            effects: [{ characterId: 'lilith', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'diplomatic_success',
        title: 'External Relations Triumph',
        text: [
          'Your diplomatic efforts create breakthrough improvements in external supernatural community relations.',
          'Long-standing conflicts are resolved through skilled negotiation and mutual understanding.',
          'The success positions your community as a leader in supernatural diplomacy.',
          'Other communities seek your guidance for their own diplomatic challenges.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'share_diplomatic_methods',
            text: 'Share successful diplomatic methods with other communities.',
            consequence: 'Method sharing • Spreads diplomatic success',
            effects: [{ characterId: 'isadora', affectionChange: 40 }],
            nextScene: 'diplomatic_legacy'
          }
        ]
      },
      {
        id: 'moral_leadership',
        title: 'Ethical Influence',
        text: [
          'Your commitment to ethical frameworks inspires moral leadership throughout the community.',
          'Others adopt principled approaches to challenges, creating a culture of integrity.',
          'Ethical decision-making becomes the standard rather than the exception.',
          'The community\'s moral reputation attracts like-minded individuals seeking principled leadership.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'formalize_ethical_standards',
            text: 'Create formal ethical standards for community guidance.',
            consequence: 'Standards formalization • Institutionalizes ethics',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'ethical_community'
          }
        ]
      },
      {
        id: 'ethical_legacy',
        title: 'Principled Foundation',
        text: [
          'The documented ethical practices become a lasting legacy for future generations.',
          'The principles guide decision-making long after current leaders move on.',
          'Other communities adopt these frameworks, spreading ethical leadership broadly.',
          'Your contribution to principled governance extends far beyond the immediate community.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'continue_ethical_development',
            text: 'Continue developing and refining ethical frameworks.',
            consequence: 'Ongoing development • Advances ethical thinking',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'wisdom_evolution'
          }
        ]
      },
      {
        id: 'mastery_pathways',
        title: 'Specialized Excellence',
        text: [
          'Expanded skill programs create clear pathways to mastery in specialized areas.',
          'Community members can pursue deep expertise while contributing to collective knowledge.',
          'The mastery programs attract talented individuals seeking advanced development opportunities.',
          'Specialized excellence strengthens the community\'s capability and reputation.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'create_mastery_recognition',
            text: 'Establish formal recognition for achieved mastery.',
            consequence: 'Recognition system • Honors expertise achievement',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'expertise_celebration'
          }
        ]
      },
      {
        id: 'knowledge_transfer',
        title: 'Wisdom Sharing',
        text: [
          'Mentorship pairs create effective knowledge transfer between experienced and new members.',
          'Learning becomes more personal and effective through one-on-one relationships.',
          'The mentorship culture ensures important knowledge and skills are preserved.',
          'Strong bonds develop between mentors and mentees, strengthening community connections.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'expand_mentorship_program',
            text: 'Expand mentorship to cover all aspects of community life.',
            consequence: 'Program expansion • Creates comprehensive mentorship',
            effects: [{ characterId: 'luna', affectionChange: 30 }],
            nextScene: 'mentorship_culture'
          }
        ]
      },
      {
        id: 'academic_excellence',
        title: 'Educational Achievement',
        text: [
          'Formal recognition ceremonies celebrate educational achievements and inspire continued learning.',
          'The graduation events become important community celebrations that honor intellectual growth.',
          'Academic excellence becomes a valued community tradition that motivates all members.',
          'The educational achievements attract attention from other communities seeking similar success.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'establish_academic_traditions',
            text: 'Create lasting academic traditions and celebrations.',
            consequence: 'Tradition establishment • Creates educational culture',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'scholarly_community'
          }
        ]
      },
      {
        id: 'lifelong_learning',
        title: 'Continuous Growth',
        text: [
          'Advanced curricula ensure that learning never stops, even for the most experienced members.',
          'The community becomes known for its commitment to intellectual growth and development.',
          'Lifelong learning creates adaptability and resilience in facing new challenges.',
          'The culture of continuous education attracts scholars and thinkers from across the supernatural world.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'document_learning_innovations',
            text: 'Document educational innovations for sharing with other communities.',
            consequence: 'Innovation documentation • Spreads educational excellence',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'educational_leadership'
          }
        ]
      },
      {
        id: 'movement_growth',
        title: 'Revolutionary Expansion',
        text: [
          'Additional allies join the revolutionary movement, creating a powerful network for change.',
          'The growing movement has the strength and reach to create meaningful systemic improvements.',
          'Success in recruiting demonstrates the appeal of the revolutionary vision.',
          'The expanded network can tackle larger challenges and create more significant reforms.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'coordinate_movement_activities',
            text: 'Coordinate activities across the expanded revolutionary network.',
            consequence: 'Coordination establishment • Organizes revolutionary efforts',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'organized_revolution'
          }
        ]
      },
      {
        id: 'reform_success',
        title: 'Tangible Change',
        text: [
          'Specific, measurable reforms are successfully implemented, creating visible improvements.',
          'The concrete achievements demonstrate that revolutionary ideals can become practical reality.',
          'Success builds momentum and credibility for additional reform efforts.',
          'The reforms serve as proof of concept for other communities considering similar changes.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'build_on_reform_success',
            text: 'Use successful reforms as foundation for additional changes.',
            consequence: 'Success building • Expands reform achievements',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'progressive_transformation'
          }
        ]
      },
      {
        id: 'advocate_support',
        title: 'Sustaining Passion',
        text: [
          'Support networks for passionate advocates prevent burnout while maintaining effectiveness.',
          'The emotional support systems enable sustainable long-term advocacy work.',
          'Advocates feel supported and understood, reducing isolation and frustration.',
          'The support networks become a model for other movements seeking sustainable activism.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'formalize_support_systems',
            text: 'Create formal support systems for all advocacy work.',
            consequence: 'System formalization • Institutionalizes advocate support',
            effects: [{ characterId: 'elena', affectionChange: 30 }],
            nextScene: 'advocacy_infrastructure'
          }
        ]
      },
      {
        id: 'sustainable_revolution',
        title: 'Healthy Change',
        text: [
          'Practices that maintain passion while preventing burnout create sustainable revolutionary work.',
          'The healthy approach proves more effective than unsustainable activism that leads to exhaustion.',
          'Revolutionary work becomes a long-term commitment rather than a brief burst of activity.',
          'The sustainable methods inspire others to join the movement without fear of burnout.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'teach_sustainable_methods',
            text: 'Teach sustainable advocacy methods to other movements.',
            consequence: 'Method teaching • Spreads sustainable activism',
            effects: [{ characterId: 'valentina', affectionChange: 50 }],
            nextScene: 'revolution_mastery'
          }
        ]
      },
      {
        id: 'character_creation_complete',
        title: 'Ready to Begin',
        text: [
          'Your character is now complete with traits, flaws, and boons that will shape your journey.',
          'The unique combination of characteristics opens specific paths and opportunities.',
          'Your story in the world of Eternal Hearts is ready to unfold.',
          'The vampires of Ravencroft Manor await your arrival.'
        ],
        background: '/backgrounds/title-screen.png',
        choices: [
          {
            id: 'start_main_story',
            text: 'Begin your story at Ravencroft Manor',
            consequence: 'Story beginning • Enter the vampire world',
            effects: [],
            nextScene: 'the_inheritance'
          }
        ]
      },
      {
        id: 'regional_networks',
        title: 'Expanded Reach',
        text: [
          'Geographic expansion creates regional networks that can respond to needs across broader areas.',
          'The expanded coverage ensures that help is available to more supernatural beings in need.',
          'Regional coordination improves resource sharing and response effectiveness.',
          'The network becomes a significant force for positive change across multiple communities.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_regional_coordination',
            text: 'Create coordination systems for the regional networks.',
            consequence: 'Coordination creation • Organizes regional efforts',
            effects: [{ characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'network_coordination'
          }
        ]
      },
      {
        id: 'community_strengthening',
        title: 'Deep Roots',
        text: [
          'Focusing on deepening local connections creates stronger, more resilient community support.',
          'The intensive local approach builds trust and understanding within specific areas.',
          'Deep community connections enable more effective and nuanced support services.',
          'The strengthened local communities become models for intensive support approaches.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'document_community_methods',
            text: 'Document successful community strengthening methods.',
            consequence: 'Method documentation • Preserves successful approaches',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'community_wisdom'
          }
        ]
      },
      {
        id: 'comprehensive_response',
        title: 'Full-Spectrum Crisis Support',
        text: [
          'Expanded crisis response capabilities can handle diverse emergency situations effectively.',
          'The comprehensive approach ensures appropriate help is available for any type of crisis.',
          'Multiple response options increase the likelihood of successful intervention.',
          'The full-spectrum capabilities become a model for other communities developing crisis response.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'train_specialized_responders',
            text: 'Train specialized responders for different types of crises.',
            consequence: 'Specialization training • Develops expert responders',
            effects: [{ characterId: 'raven', affectionChange: 35 }],
            nextScene: 'crisis_expertise'
          }
        ]
      },
      {
        id: 'crisis_prevention',
        title: 'Proactive Protection',
        text: [
          'Prevention programs successfully reduce the number of crises requiring emergency response.',
          'The proactive approach proves more effective and less traumatic than reactive crisis intervention.',
          'Prevention work creates lasting improvements in community wellbeing and resilience.',
          'The prevention success demonstrates the value of addressing root causes rather than just symptoms.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_prevention_programs',
            text: 'Expand prevention programs to cover additional risk factors.',
            consequence: 'Prevention expansion • Addresses more potential crises',
            effects: [{ characterId: 'luna', affectionChange: 30 }],
            nextScene: 'comprehensive_prevention'
          }
        ]
      },
      {
        id: 'purpose_renewal',
        title: 'Renewed Dedication',
        text: [
          'The memorial inspiration renews dedication to the work with fresh energy and commitment.',
          'Grief transforms into purposeful action that honors those who were lost.',
          'The renewal creates sustainable motivation that can endure through difficult times.',
          'Purpose-driven work proves more resilient and effective than guilt-driven activism.'
        ],
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'channel_purpose_into_action',
            text: 'Channel renewed purpose into concrete action plans.',
            consequence: 'Purpose channeling • Converts inspiration into action',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'inspired_action'
          }
        ]
      },
      {
        id: 'proactive_care',
        title: 'Early Intervention',
        text: [
          'Early warning systems enable intervention before crisis points are reached.',
          'Proactive care proves more effective and less traumatic than emergency response.',
          'The early intervention approach saves lives while requiring fewer resources.',
          'Proactive systems become a model for other communities seeking to prevent tragedies.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'refine_warning_systems',
            text: 'Continuously refine and improve early warning capabilities.',
            consequence: 'System refinement • Improves early detection',
            effects: [{ characterId: 'luna', affectionChange: 35 }],
            nextScene: 'predictive_care'
          }
        ]
      },
      {
        id: 'prevention_education',
        title: 'Community Awareness',
        text: [
          'Educational programs build community awareness and capacity for prevention work.',
          'Education reduces stigma and encourages people to seek help before crises develop.',
          'Community knowledge creates a network of informal support and early detection.',
          'Education-based prevention proves sustainable and scalable across different communities.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'develop_education_materials',
            text: 'Create comprehensive educational materials for broader distribution.',
            consequence: 'Material development • Enables education scaling',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'education_resources'
          }
        ]
      },
      {
        id: 'trust_rebuilding',
        title: 'Slow Recovery',
        text: [
          'Consistent trustworthy actions gradually rebuild the damaged relationships.',
          'Each demonstration of reliability adds a small piece to the foundation of restored trust.',
          'The slow but steady progress proves that damaged relationships can be repaired.',
          'Trust rebuilding becomes a testament to the possibility of redemption and growth.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'continue_consistent_behavior',
            text: 'Maintain consistent, trustworthy behavior over time.',
            consequence: 'Consistency maintenance • Builds reliable trust',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'restored_trust'
          }
        ]
      },
      {
        id: 'guided_redemption',
        title: 'Mentored Recovery',
        text: [
          'Guidance from community leaders helps navigate the complex process of earning redemption.',
          'The mentored approach provides structure and support for genuine behavioral change.',
          'Guided redemption proves more successful than unsupported attempts at improvement.',
          'The mentorship creates accountability while offering encouragement and wisdom.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_guided_process',
            text: 'Fully embrace the guided redemption process.',
            consequence: 'Process embrace • Commits to mentored growth',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'redemption_progress'
          }
        ]
      },
      {
        id: 'dignified_exile',
        title: 'Noble Departure',
        text: [
          'Your graceful acceptance of exile demonstrates character growth and genuine remorse.',
          'The dignified departure leaves room for possible future reconciliation.',
          'Even in leaving, you show respect for the community and understanding of their needs.',
          'The noble exit becomes a powerful statement about taking responsibility for one\'s actions.'
        ],
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'leave_with_hope',
            text: 'Leave with hope that your example might help others learn from mistakes.',
            consequence: 'Hopeful departure • Seeks positive legacy despite exile',
            effects: [],
            nextScene: 'exile_reflection'
          }
        ]
      },
      {
        id: 'sacrificial_legacy',
        title: 'Example of Growth',
        text: [
          'Your willingness to sacrifice for community safety becomes an inspiring example.',
          'The sacrificial choice demonstrates that genuine growth and character change are possible.',
          'Your legacy shows that even serious mistakes can lead to wisdom and positive influence.',
          'The example inspires others to take responsibility for their actions and seek genuine redemption.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_legacy_responsibility',
            text: 'Accept the responsibility of being an example for others.',
            consequence: 'Legacy acceptance • Embraces role as example',
            effects: [{ characterId: 'seraphina', affectionChange: 20 }],
            nextScene: 'positive_influence'
          }
        ]
      },
      {
        id: 'exceptional_progress',
        title: 'Exceeding Expectations',
        text: [
          'Going beyond minimum requirements demonstrates extraordinary commitment to rebuilding trust.',
          'The exceptional effort impresses even skeptical community members.',
          'Exceeding expectations accelerates the trust rebuilding process.',
          'The extraordinary commitment becomes a model for how to approach redemption seriously.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'maintain_exceptional_standards',
            text: 'Continue maintaining these exceptional standards.',
            consequence: 'Standard maintenance • Sustains exceptional performance',
            effects: [{ characterId: 'isadora', affectionChange: 25 }],
            nextScene: 'trust_acceleration'
          }
        ]
      },
      {
        id: 'steady_progress',
        title: 'Reliable Improvement',
        text: [
          'Consistent compliance with requirements shows reliable commitment to change.',
          'The steady progress builds confidence in your genuine desire to rebuild trust.',
          'Reliability proves as important as dramatic gestures in demonstrating trustworthiness.',
          'Steady improvement creates a solid foundation for restored relationships.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'continue_steady_improvement',
            text: 'Maintain steady, consistent progress.',
            consequence: 'Progress continuation • Builds reliable improvement',
            effects: [{ characterId: 'celeste', affectionChange: 18 }],
            nextScene: 'gradual_restoration'
          }
        ]
      },
      {
        id: 'probation_support',
        title: 'Supported Recovery',
        text: [
          'Support resources help ensure success during the challenging probationary period.',
          'Having access to guidance and assistance makes the rehabilitation process more effective.',
          'Support systems demonstrate the community\'s genuine investment in your recovery.',
          'The supported approach increases the likelihood of successful trust rebuilding.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'utilize_support_fully',
            text: 'Make full use of available support resources.',
            consequence: 'Support utilization • Maximizes recovery assistance',
            effects: [{ characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'supported_progress'
          }
        ]
      },
      {
        id: 'systematic_improvement',
        title: 'Structured Growth',
        text: [
          'The accountability framework enables systematic, measurable improvement.',
          'Structured change proves more effective than unguided attempts at personal growth.',
          'The systematic approach creates clear milestones and measures of progress.',
          'Structured improvement becomes a model for others seeking to make positive changes.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'refine_improvement_systems',
            text: 'Continuously refine and improve the systematic approach.',
            consequence: 'System refinement • Enhances improvement methods',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'optimization_mastery'
          }
        ]
      },
      {
        id: 'personalized_growth',
        title: 'Tailored Development',
        text: [
          'Adapting the framework to personal needs makes the change process more effective.',
          'Personalized approaches recognize that different people need different support methods.',
          'Tailored development demonstrates the flexibility and thoughtfulness of the community\'s approach.',
          'Personalized growth becomes more sustainable and authentic than generic improvement programs.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'share_personalization_insights',
            text: 'Share insights about personalizing growth approaches with others.',
            consequence: 'Insight sharing • Helps others personalize their growth',
            effects: [{ characterId: 'luna', affectionChange: 25 }],
            nextScene: 'growth_wisdom'
          }
        ]
      },
      {
        id: 'supported_growth',
        title: 'Community-Assisted Development',
        text: [
          'Community support creates an environment where positive change can flourish.',
          'The collective investment in your growth demonstrates the power of community rehabilitation.',
          'Supported growth proves more successful and sustainable than isolated attempts at improvement.',
          'The community support model becomes an example for other groups seeking to help members grow.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'contribute_to_community_growth',
            text: 'Look for ways to contribute to others\' growth and development.',
            consequence: 'Growth contribution • Supports others\' development',
            effects: [{ characterId: 'elena', affectionChange: 30 }],
            nextScene: 'mutual_development'
          }
        ]
      },
      {
        id: 'reciprocal_healing',
        title: 'Mutual Support',
        text: [
          'Supporting others\' growth while working on your own creates powerful reciprocal healing.',
          'The mutual support demonstrates that rehabilitation can strengthen the entire community.',
          'Reciprocal healing builds connections and understanding between community members.',
          'The approach shows that helping others is part of one\'s own healing journey.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'formalize_reciprocal_support',
            text: 'Create formal systems for reciprocal support and growth.',
            consequence: 'System formalization • Institutionalizes mutual support',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'support_systems'
          }
        ]
      },
      // Final set of orphaned scenes
      {
        id: 'healing_expertise',
        title: 'Therapeutic Mastery',
        text: [
          'Community members develop advanced therapeutic skills through comprehensive training.',
          'The expertise enables professional-quality emotional support and healing services.',
          'Therapeutic mastery creates a community known for exceptional healing capabilities.',
          'The expertise becomes a valuable resource for other communities seeking healing knowledge.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_healing_certification',
            text: 'Create certification programs for therapeutic expertise.',
            consequence: 'Certification creation • Formalizes healing expertise',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'healing_wisdom',
        title: 'Documented Knowledge',
        text: [
          'Healing practices are thoroughly documented for preservation and sharing.',
          'The documented wisdom becomes a valuable resource for future generations.',
          'Other communities benefit from access to proven healing methodologies.',
          'The healing knowledge creates a lasting legacy of emotional support expertise.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'share_wisdom_broadly',
            text: 'Share healing wisdom with supernatural communities worldwide.',
            consequence: 'Wisdom sharing • Spreads healing knowledge globally',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'unified_community',
        title: 'Collective Strength',
        text: [
          'The community achieves unprecedented unity while maintaining individual diversity.',
          'Collective healing creates bonds that strengthen everyone without eliminating uniqueness.',
          'The unified approach enables tackling larger challenges with coordinated effort.',
          'Unity becomes a source of strength rather than conformity.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'maintain_unity_diversity_balance',
            text: 'Ensure unity never sacrifices healthy individual diversity.',
            consequence: 'Balance maintenance • Preserves individual uniqueness within unity',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'healing_tradition',
        title: 'Lasting Practice',
        text: [
          'Ongoing healing work becomes a permanent community tradition.',
          'The tradition ensures that emotional support remains a core community value.',
          'Future generations inherit both the knowledge and commitment to healing.',
          'The healing tradition becomes part of the community\'s essential identity.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'strengthen_healing_tradition',
            text: 'Continuously strengthen and evolve the healing tradition.',
            consequence: 'Tradition strengthening • Ensures healing legacy',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'healing_system',
        title: 'Formalized Support',
        text: [
          'Formal therapeutic partnership programs create systematic healing support.',
          'The systematized approach ensures consistent, high-quality emotional care.',
          'Formal systems make healing support accessible and reliable for all community members.',
          'The healing system becomes a model for other communities developing support structures.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_healing_systems',
            text: 'Expand formal healing systems to cover all aspects of wellbeing.',
            consequence: 'System expansion • Creates comprehensive healing support',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'deep_connections',
        title: 'Profound Bonds',
        text: [
          'Focusing on partnership quality creates extraordinarily deep healing relationships.',
          'The profound connections enable healing at levels not possible through surface interactions.',
          'Deep therapeutic bonds become one of the community\'s greatest sources of strength.',
          'The quality-focused approach proves more effective than quantity-based support systems.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'nurture_deep_bonds',
            text: 'Continue nurturing and protecting these deep healing connections.',
            consequence: 'Bond nurturing • Maintains profound therapeutic relationships',
            effects: [{ characterId: 'morgana', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'knowledge_preservation',
        title: 'Wisdom Legacy',
        text: [
          'A specialized healing library preserves all therapeutic knowledge and wisdom.',
          'The preserved knowledge ensures that healing expertise will never be lost.',
          'Future healers will have access to comprehensive resources for learning and development.',
          'The knowledge preservation becomes a gift to countless future generations.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'expand_knowledge_collection',
            text: 'Continuously expand the healing knowledge collection.',
            consequence: 'Collection expansion • Grows healing wisdom repository',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'healing_succession',
        title: 'Future Healers',
        text: [
          'Training future healers ensures continuity of therapeutic expertise.',
          'The succession planning guarantees that healing knowledge will be passed forward.',
          'New healers bring fresh perspectives while preserving essential wisdom.',
          'The succession creates an unbroken chain of healing knowledge and capability.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'establish_healer_lineages',
            text: 'Create formal lineages of healing knowledge and mentorship.',
            consequence: 'Lineage establishment • Creates healing knowledge inheritance',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'remembrance_culture',
        title: 'Memorial Integration',
        text: [
          'Memorial activities become integrated throughout the year, not just at formal events.',
          'The remembrance culture keeps the memory of the lost alive in daily community life.',
          'Ongoing memorial activities provide continuous comfort and connection.',
          'The culture ensures that loss becomes part of the community\'s strength rather than just its sorrow.'
        ],
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'weave_remembrance_into_daily_life',
            text: 'Integrate remembrance more deeply into all aspects of community life.',
            consequence: 'Daily integration • Makes remembrance part of everyday experience',
            effects: [{ characterId: 'luna', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'joyful_remembrance',
        title: 'Celebration of Life',
        text: [
          'Memorial focus shifts to celebrating the joy and love that the lost brought to the world.',
          'Joyful remembrance proves more healing than sorrowful mourning.',
          'The celebration approach honors the positive impact of those who are gone.',
          'Joyful memorial practices inspire others to live fully and love deeply.'
        ],
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'spread_joyful_memorial_practices',
            text: 'Share joyful memorial practices with other grieving communities.',
            consequence: 'Practice sharing • Spreads healing memorial approaches',
            effects: [{ characterId: 'morgana', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'participatory_memorial',
        title: 'Community Gardening',
        text: [
          'Community members actively participate in caring for the memorial garden.',
          'Participatory memorial work creates ongoing connection and healing.',
          'The shared gardening becomes a meditative practice that strengthens community bonds.',
          'Active participation makes memorial care a source of comfort rather than burden.'
        ],
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'expand_participatory_programs',
            text: 'Develop additional participatory memorial programs.',
            consequence: 'Program expansion • Creates more memorial participation opportunities',
            effects: [{ characterId: 'elena', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'ritual_gardening',
        title: 'Sacred Cultivation',
        text: [
          'Special ceremonies transform memorial garden care into sacred ritual.',
          'Ritual gardening creates meaningful spiritual experiences for participants.',
          'The ceremonies provide structure and depth to memorial practices.',
          'Sacred cultivation becomes a powerful form of grief processing and healing.'
        ],
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'develop_seasonal_rituals',
            text: 'Create seasonal ritual cycles for memorial garden care.',
            consequence: 'Ritual development • Creates ongoing sacred practices',
            effects: [{ characterId: 'luna', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      // Completion of final 30 orphaned scenes
      {
        id: 'diplomatic_legacy',
        title: 'Diplomatic Excellence Spread',
        text: [
          'Your diplomatic methods become widely adopted across supernatural communities.',
          'The legacy of successful negotiation creates lasting peace between previously hostile groups.',
          'Diplomatic excellence becomes your lasting contribution to supernatural society.',
          'Future generations benefit from the peaceful relations your methods established.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'continue_diplomatic_work',
            text: 'Continue advancing diplomatic practices and training.',
            consequence: 'Ongoing diplomacy • Maintains peace-building efforts',
            effects: [{ characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'ethical_community',
        title: 'Principled Society',
        text: [
          'The community becomes known throughout supernatural society for its ethical standards.',
          'Principled decision-making attracts like-minded individuals seeking moral leadership.',
          'The ethical community becomes a beacon of integrity in a complex world.',
          'Your contribution to principled governance creates lasting positive change.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_ethical_influence',
            text: 'Work to expand ethical standards to other communities.',
            consequence: 'Ethical expansion • Spreads principled governance',
            effects: [{ characterId: 'seraphina', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'wisdom_evolution',
        title: 'Growing Understanding',
        text: [
          'Ethical frameworks continue evolving through ongoing development and refinement.',
          'The living wisdom adapts to new challenges while maintaining core principles.',
          'Evolutionary ethics prove more robust than rigid dogma.',
          'The growing understanding creates increasingly sophisticated moral guidance.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'document_wisdom_growth',
            text: 'Document the evolution of ethical wisdom for future study.',
            consequence: 'Documentation • Preserves wisdom development',
            effects: [{ characterId: 'celeste', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'expertise_celebration',
        title: 'Mastery Recognition',
        text: [
          'Formal recognition of achieved mastery creates inspiring celebration of excellence.',
          'The celebrations honor both individual achievement and collective support.',
          'Mastery recognition motivates others to pursue their own areas of expertise.',
          'The recognition system becomes a valued community tradition.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'establish_mastery_traditions',
            text: 'Create lasting traditions around mastery achievement and recognition.',
            consequence: 'Tradition creation • Establishes excellence culture',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'mentorship_culture',
        title: 'Teaching Community',
        text: [
          'Comprehensive mentorship creates a culture where teaching and learning are deeply valued.',
          'The mentorship approach ensures knowledge transfer while building strong relationships.',
          'Teaching becomes a honored role that strengthens the entire community.',
          'The culture creates continuous growth and development for all members.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'honor_teaching_contributions',
            text: 'Create special recognition for outstanding mentorship and teaching.',
            consequence: 'Teaching honor • Celebrates mentorship contributions',
            effects: [{ characterId: 'luna', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'scholarly_community',
        title: 'Academic Excellence',
        text: [
          'Academic traditions establish the community as a center of learning and scholarship.',
          'The scholarly reputation attracts students and researchers from across the supernatural world.',
          'Academic excellence becomes a defining characteristic of community identity.',
          'The scholarly community contributes significantly to supernatural knowledge advancement.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'establish_academic_exchange',
            text: 'Create academic exchange programs with other scholarly communities.',
            consequence: 'Exchange creation • Builds scholarly networks',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'educational_leadership',
        title: 'Learning Innovation',
        text: [
          'Educational innovations become models adopted by communities worldwide.',
          'The leadership in learning creates lasting improvements in supernatural education.',
          'Innovation documentation spreads effective educational methods broadly.',
          'Educational leadership becomes a significant legacy contribution.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'continue_innovation',
            text: 'Continue developing and sharing educational innovations.',
            consequence: 'Ongoing innovation • Maintains educational leadership',
            effects: [{ characterId: 'celeste', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'organized_revolution',
        title: 'Coordinated Change',
        text: [
          'Organized revolutionary activities create systematic positive change across multiple communities.',
          'Coordination enables larger-scale reforms than isolated efforts could achieve.',
          'The organized approach proves more effective than scattered individual actions.',
          'Revolutionary coordination becomes a model for sustainable social change.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'institutionalize_coordination',
            text: 'Create permanent institutions for revolutionary coordination.',
            consequence: 'Institutionalization • Creates lasting change infrastructure',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'progressive_transformation',
        title: 'Expanding Reform',
        text: [
          'Successful reforms create foundation for additional progressive transformations.',
          'The expanding changes demonstrate that systematic improvement is possible.',
          'Progressive transformation builds momentum for continued positive change.',
          'The success creates a model for other communities seeking similar reforms.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accelerate_transformation',
            text: 'Use momentum to accelerate progressive transformation efforts.',
            consequence: 'Acceleration • Speeds positive change',
            effects: [{ characterId: 'valentina', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'advocacy_infrastructure',
        title: 'Support Systems',
        text: [
          'Formal support systems create infrastructure for sustainable advocacy work.',
          'The infrastructure ensures advocates have resources needed for long-term effectiveness.',
          'Advocacy support becomes institutionalized rather than dependent on individual effort.',
          'The infrastructure model spreads to other movements seeking sustainability.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'strengthen_infrastructure',
            text: 'Continuously strengthen and expand advocacy support infrastructure.',
            consequence: 'Infrastructure strengthening • Builds advocacy capacity',
            effects: [{ characterId: 'elena', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'revolution_mastery',
        title: 'Change Expertise',
        text: [
          'Teaching sustainable advocacy methods creates expertise in revolutionary change.',
          'The mastery of sustainable revolution spreads effective methods widely.',
          'Change expertise prevents the burnout and exhaustion common in activist movements.',
          'Revolutionary mastery becomes a valued skill across the supernatural community.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'establish_revolution_academy',
            text: 'Create formal training programs for sustainable revolutionary methods.',
            consequence: 'Academy establishment • Formalizes change training',
            effects: [{ characterId: 'valentina', affectionChange: 50 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'the_inheritance',
        title: 'A New Beginning',
        text: [
          'You stand before the imposing gates of Ravencroft Manor, the Gothic architecture looming against storm clouds.',
          'The inheritance letter crinkles in your hand as you approach your great-aunt Cordelia\'s estate.',
          'Strange sensations prickle along your skin - as if the very air here holds secrets.',
          'Your journey into the supernatural world is about to begin.'
        ],
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'approach_manor_confidently',
            text: 'Walk confidently to the front door.',
            consequence: 'Confident approach • Shows self-assurance',
            effects: [],
            nextScene: 'manor_entrance'
          },
          {
            id: 'observe_surroundings_carefully',
            text: 'Take time to observe the manor and surroundings carefully.',
            consequence: 'Careful observation • Shows attention to detail',
            effects: [],
            nextScene: 'manor_observation'
          }
        ]
      },
      {
        id: 'network_coordination',
        title: 'Regional Organization',
        text: [
          'Coordination systems enable effective management of regional support networks.',
          'The organizational structure ensures resources reach where they\'re needed most.',
          'Regional coordination prevents duplication while maximizing coverage.',
          'The coordination model becomes valuable for other large-scale support efforts.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'refine_coordination_methods',
            text: 'Continuously refine coordination methods for maximum effectiveness.',
            consequence: 'Method refinement • Improves coordination efficiency',
            effects: [{ characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'community_wisdom',
        title: 'Documented Methods',
        text: [
          'Successful community strengthening methods are preserved for future reference.',
          'The documented wisdom becomes a resource for other communities seeking deep connections.',
          'Community wisdom spreads effective approaches for building strong local bonds.',
          'The methods create lasting improvements in community development practices.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'share_community_methods',
            text: 'Share community strengthening methods with other groups.',
            consequence: 'Method sharing • Spreads community development wisdom',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'crisis_expertise',
        title: 'Specialized Response',
        text: [
          'Specialized crisis responders develop expertise in handling diverse emergency situations.',
          'The specialized training creates highly effective crisis intervention capabilities.',
          'Crisis expertise ensures appropriate help is available for any emergency type.',
          'The specialized approach becomes a model for other crisis response programs.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_specialization_training',
            text: 'Develop additional specialized training programs for crisis response.',
            consequence: 'Training expansion • Builds crisis response expertise',
            effects: [{ characterId: 'raven', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'comprehensive_prevention',
        title: 'Complete Coverage',
        text: [
          'Expanded prevention programs address all major risk factors for crisis development.',
          'Comprehensive coverage ensures no potential crisis source is overlooked.',
          'The complete approach proves more effective than partial prevention efforts.',
          'Comprehensive prevention becomes the gold standard for crisis prevention work.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'maintain_comprehensive_approach',
            text: 'Continue maintaining and improving comprehensive prevention coverage.',
            consequence: 'Approach maintenance • Sustains complete prevention',
            effects: [{ characterId: 'luna', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'inspired_action',
        title: 'Purpose-Driven Work',
        text: [
          'Renewed purpose translates into concrete action plans that honor the lost while helping the living.',
          'Purpose-driven work proves more sustainable and effective than guilt-motivated activism.',
          'The inspired action creates meaningful progress while maintaining emotional health.',
          'Purpose-driven activism becomes a model for sustainable social change work.'
        ],
        background: '/backgrounds/garden-courtyard.png',
        choices: [
          {
            id: 'institutionalize_purpose_approach',
            text: 'Create systems to maintain purpose-driven rather than guilt-driven work.',
            consequence: 'Purpose institutionalization • Maintains healthy motivation',
            effects: [{ characterId: 'valentina', affectionChange: 45 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'predictive_care',
        title: 'Advanced Warning Systems',
        text: [
          'Refined early warning systems achieve remarkable accuracy in predicting crisis development.',
          'Predictive care enables intervention at the earliest possible stage.',
          'The advanced systems prevent most crises from developing past manageable stages.',
          'Predictive care becomes a breakthrough approach to crisis prevention.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'share_predictive_methods',
            text: 'Share predictive care methods with other prevention programs.',
            consequence: 'Method sharing • Spreads predictive care innovation',
            effects: [{ characterId: 'luna', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'education_resources',
        title: 'Learning Materials',
        text: [
          'Comprehensive educational materials enable scaling of prevention education.',
          'The resources make prevention knowledge accessible to diverse communities.',
          'Educational materials become widely used tools for crisis prevention work.',
          'The resources create lasting improvements in prevention education effectiveness.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'continue_resource_development',
            text: 'Continue developing and updating educational resources.',
            consequence: 'Resource development • Maintains educational effectiveness',
            effects: [{ characterId: 'celeste', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'restored_trust',
        title: 'Relationship Renewal',
        text: [
          'Consistent trustworthy behavior successfully rebuilds damaged relationships.',
          'The restored trust creates stronger bonds than existed before the damage.',
          'Successful trust rebuilding demonstrates that redemption is possible.',
          'The restoration becomes an inspiring example of growth and forgiveness.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'maintain_rebuilt_trust',
            text: 'Continue behaviors that maintain and strengthen rebuilt trust.',
            consequence: 'Trust maintenance • Sustains restored relationships',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'redemption_progress',
        title: 'Guided Growth',
        text: [
          'The guided redemption process creates measurable progress toward full restoration.',
          'Mentored growth proves more effective than unsupported attempts at change.',
          'The redemption progress inspires hope for others seeking similar growth.',
          'Guided redemption becomes a model for effective rehabilitation approaches.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'complete_redemption_process',
            text: 'Commit to completing the full redemption process.',
            consequence: 'Process completion • Achieves full rehabilitation',
            effects: [{ characterId: 'seraphina', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'exile_reflection',
        title: 'Learning from Loss',
        text: [
          'Even in exile, the experience becomes a source of wisdom and growth.',
          'Reflection on mistakes creates insights that could help others avoid similar errors.',
          'The exile experience demonstrates that growth can emerge from even the most difficult circumstances.',
          'Learning from loss transforms exile into an opportunity for contribution.'
        ],
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'document_lessons_learned',
            text: 'Document lessons learned for others who might face similar challenges.',
            consequence: 'Lesson documentation • Shares wisdom from experience',
            effects: [],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'positive_influence',
        title: 'Example of Growth',
        text: [
          'Your example of taking responsibility and growing from mistakes influences others.',
          'The positive influence demonstrates that character development is always possible.',
          'Others are inspired to examine their own behavior and seek improvement.',
          'Positive influence creates ripple effects of growth throughout the community.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'continue_positive_example',
            text: 'Continue being a positive example of growth and responsibility.',
            consequence: 'Example continuation • Maintains positive influence',
            effects: [{ characterId: 'seraphina', affectionChange: 25 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'trust_acceleration',
        title: 'Rapid Progress',
        text: [
          'Exceptional performance accelerates the trust rebuilding process beyond normal timelines.',
          'The rapid progress demonstrates extraordinary commitment to change.',
          'Trust acceleration creates momentum that benefits all restoration efforts.',
          'The accelerated approach becomes a model for intensive rehabilitation programs.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'maintain_exceptional_pace',
            text: 'Continue the exceptional performance that enables rapid trust building.',
            consequence: 'Pace maintenance • Sustains accelerated progress',
            effects: [{ characterId: 'isadora', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'gradual_restoration',
        title: 'Steady Rebuilding',
        text: [
          'Steady improvement creates a solid foundation for gradual relationship restoration.',
          'The reliable progress builds confidence in long-term positive change.',
          'Gradual restoration proves more sustainable than dramatic but unsustained efforts.',
          'The steady approach creates lasting improvements in trust and connection.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'continue_steady_rebuilding',
            text: 'Maintain the steady approach to relationship rebuilding.',
            consequence: 'Rebuilding continuation • Sustains gradual restoration',
            effects: [{ characterId: 'celeste', affectionChange: 20 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'supported_progress',
        title: 'Assisted Development',
        text: [
          'Support resources significantly enhance the effectiveness of rehabilitation efforts.',
          'Assisted development creates better outcomes than unsupported attempts at change.',
          'The supported approach demonstrates the value of community investment in individual growth.',
          'Supported progress becomes a model for effective rehabilitation programs.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'maximize_support_utilization',
            text: 'Continue making full use of available support resources.',
            consequence: 'Support maximization • Optimizes assisted development',
            effects: [{ characterId: 'celeste', affectionChange: 25 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'optimization_mastery',
        title: 'System Perfection',
        text: [
          'Continuous refinement creates optimized systems for systematic improvement.',
          'The optimization mastery enables helping others achieve more effective personal growth.',
          'Perfected systems become valuable resources for community development.',
          'Optimization mastery creates lasting contributions to personal growth methodology.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'share_optimization_methods',
            text: 'Share optimization methods with others seeking systematic improvement.',
            consequence: 'Method sharing • Spreads optimization mastery',
            effects: [{ characterId: 'celeste', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'growth_wisdom',
        title: 'Personalization Insights',
        text: [
          'Insights about personalizing growth approaches help others customize their development.',
          'Growth wisdom recognizes that effective personal development must be individually tailored.',
          'The personalization insights become valuable for community members seeking change.',
          'Growth wisdom creates more effective and sustainable personal development approaches.'
        ],
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'develop_personalization_guides',
            text: 'Create guides to help others personalize their growth approaches.',
            consequence: 'Guide development • Enables customized personal growth',
            effects: [{ characterId: 'luna', affectionChange: 30 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'mutual_development',
        title: 'Reciprocal Growth',
        text: [
          'Contributing to others\' growth while developing personally creates powerful mutual development.',
          'The reciprocal approach strengthens both individual growth and community bonds.',
          'Mutual development proves more effective than isolated personal improvement efforts.',
          'The approach becomes a model for community-based personal development.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'institutionalize_mutual_growth',
            text: 'Create formal programs for mutual development and reciprocal growth.',
            consequence: 'Program institutionalization • Formalizes mutual development',
            effects: [{ characterId: 'elena', affectionChange: 35 }],
            nextScene: 'living_testament'
          }
        ]
      },
      {
        id: 'support_systems',
        title: 'Formal Mutual Aid',
        text: [
          'Formal systems for reciprocal support create institutional mutual aid.',
          'The systems ensure that mutual support becomes reliable rather than dependent on individual initiative.',
          'Formalized mutual aid creates sustainable support networks.',
          'The support systems become a cornerstone of community resilience and growth.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'expand_support_networks',
            text: 'Continuously expand and strengthen formal support networks.',
            consequence: 'Network expansion • Grows mutual aid capacity',
            effects: [{ characterId: 'elena', affectionChange: 40 }],
            nextScene: 'living_testament'
          }
        ]
      },
      // Final 2 scenes to complete story structure
      {
        id: 'manor_entrance',
        title: 'The Grand Entrance',
        text: [
          'You approach the imposing front door of Ravencroft Manor with confidence.',
          'The heavy oak door is adorned with intricate Gothic metalwork that seems to pulse with its own energy.',
          'Before you can knock, the door swings open silently, revealing a dimly lit entrance hall.',
          'Your confident approach has been noticed - someone was expecting you.'
        ],
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'enter_immediately',
            text: 'Step inside without hesitation.',
            consequence: 'Bold entry • Shows fearlessness',
            effects: [],
            nextScene: 'grand_hall_arrival'
          },
          {
            id: 'call_out_greeting',
            text: 'Call out a polite greeting before entering.',
            consequence: 'Polite announcement • Shows respect',
            effects: [],
            nextScene: 'welcomed_entry'
          }
        ]
      },
      {
        id: 'manor_observation',
        title: 'Careful Assessment',
        text: [
          'You take time to study the manor and its surroundings before approaching.',
          'The Gothic architecture reveals subtle details: protective symbols carved into stone, windows that seem to watch back.',
          'Gardens show signs of careful tending, and you notice movement in upper windows - you are not alone here.',
          'Your careful observation reveals this is a place of power and ancient secrets.'
        ],
        background: '/backgrounds/gothic-manor-entrance.png',
        choices: [
          {
            id: 'approach_respectfully',
            text: 'Approach the door with respectful caution.',
            consequence: 'Respectful approach • Shows wisdom and courtesy',
            effects: [],
            nextScene: 'respectful_arrival'
          },
          {
            id: 'look_for_alternative_entrance',
            text: 'Look for a servants\' entrance or side door.',
            consequence: 'Alternative approach • Shows humility',
            effects: [],
            nextScene: 'humble_entry'
          }
        ]
      },
      // Completing the final 4 arrival scenes
      {
        id: 'grand_hall_arrival',
        title: 'Bold Entrance',
        text: [
          'You step boldly into the manor, your footsteps echoing in the grand entrance hall.',
          'Candles flicker to life as you enter, illuminating portraits of stern-faced ancestors whose eyes seem to track your movement.',
          'A figure emerges from the shadows - tall, elegant, with an otherworldly grace that immediately marks them as supernatural.',
          'Your bold entrance has made an impression; there\'s approval in their ancient eyes.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'meet_gaze_confidently',
            text: 'Meet their gaze with confident directness.',
            consequence: 'Confident meeting • Shows strength and fearlessness',
            effects: [{ characterId: 'lilith', affectionChange: 10 }],
            nextScene: 'first_vampire_encounter'
          },
          {
            id: 'bow_respectfully',
            text: 'Offer a respectful bow of greeting.',
            consequence: 'Respectful greeting • Shows courtesy despite boldness',
            effects: [{ characterId: 'lilith', affectionChange: 8 }],
            nextScene: 'formal_introduction'
          }
        ]
      },
      {
        id: 'welcomed_entry',
        title: 'Courteous Arrival',
        text: [
          'Your polite greeting echoes through the entrance hall before a warm voice responds from within.',
          '"Welcome, dear child. We have been expecting you." The voice carries centuries of wisdom and gentle authority.',
          'A figure glides forward - ethereally beautiful with silver hair and eyes that hold starlight. This can only be Lilith herself.',
          'Your courteous approach has earned immediate approval from the coven\'s leader.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_gratitude',
            text: '"Thank you for welcoming me. I\'m honored to be here."',
            consequence: 'Grateful recognition • Shows appreciation for hospitality',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'warm_reception'
          },
          {
            id: 'ask_about_expectations',
            text: '"You were expecting me? How did you know I would come?"',
            consequence: 'Curious inquiry • Shows intelligent interest',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'prophetic_knowledge'
          }
        ]
      },
      {
        id: 'respectful_arrival',
        title: 'Wise Approach',
        text: [
          'You approach the door with the caution of someone who recognizes they are entering a place of power.',
          'Before you can knock, the door opens to reveal a woman of impossible beauty with knowing eyes.',
          '"Your respectful approach shows wisdom beyond your years," she says with approval. "I am Lilith, and you are most welcome here."',
          'Your careful observation and respectful manner have created an excellent first impression.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'acknowledge_power_sensed',
            text: '"I could sense this was a place of great power and deserved respect."',
            consequence: 'Power recognition • Shows supernatural awareness',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'supernatural_awareness'
          },
          {
            id: 'express_humble_gratitude',
            text: '"Thank you for your welcome, Lady Lilith. I am grateful for your hospitality."',
            consequence: 'Humble gratitude • Shows proper respect and courtesy',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'gracious_welcome'
          }
        ]
      },
      {
        id: 'humble_entry',
        title: 'Modest Beginning',
        text: [
          'You find a smaller side entrance, choosing humility over presumption.',
          'A gentle voice calls out before you can knock: "There is no need for the servant\'s entrance, child. You are family here."',
          'The main door opens, and Lilith herself appears with a warm smile. "Your humility is touching, but unnecessary. You belong here."',
          'Your modest approach has revealed your character and earned deep respect.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'explain_humble_intention',
            text: '"I didn\'t want to presume. I wasn\'t sure of my place here."',
            consequence: 'Humble explanation • Shows thoughtful consideration',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'family_recognition'
          },
          {
            id: 'accept_belonging_gratefully',
            text: '"Thank you for saying I belong here. That means everything to me."',
            consequence: 'Grateful acceptance • Shows appreciation for belonging',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'immediate_acceptance'
          }
        ]
      },
      // Final 8 scenes to complete perfect story structure
      {
        id: 'first_vampire_encounter',
        title: 'Meeting the Ancient',
        text: [
          'You hold the vampire\'s gaze steadily, neither backing down nor showing aggression.',
          'A slow smile spreads across their perfect features. "Impressive. Most mortals cannot meet my eyes so directly."',
          '"I am Lilith Ravencroft, and you... you have Cordelia\'s strength." Her voice carries the weight of centuries.',
          'Your fearless confidence has earned immediate respect from the coven\'s ancient leader.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_cordelia',
            text: '"Tell me about my great-aunt. What was she like?"',
            consequence: 'Family inquiry • Shows desire to understand legacy',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'cordelia_memories'
          },
          {
            id: 'acknowledge_vampire_nature',
            text: '"You\'re a vampire. I can sense it."',
            consequence: 'Direct acknowledgment • Shows supernatural awareness',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'nature_revelation'
          }
        ]
      },
      {
        id: 'formal_introduction',
        title: 'Courtly Manners',
        text: [
          'Your respectful bow is received with gracious approval.',
          '"Such lovely manners," Lilith says warmly. "Cordelia taught you well, even from a distance."',
          '"I am Lilith Ravencroft, guardian of this sanctuary and keeper of its secrets. You are most welcome here."',
          'Your combination of boldness and respect has struck the perfect balance.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'express_honor',
            text: '"The honor is mine, Lady Lilith. This place feels... significant."',
            consequence: 'Respectful recognition • Shows appreciation for significance',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'sanctuary_significance'
          },
          {
            id: 'ask_about_secrets',
            text: '"What secrets does this sanctuary hold?"',
            consequence: 'Secret inquiry • Shows curiosity about mysteries',
            effects: [{ characterId: 'lilith', affectionChange: 14 }],
            nextScene: 'mystery_introduction'
          }
        ]
      },
      {
        id: 'warm_reception',
        title: 'Gracious Welcome',
        text: [
          'Lilith\'s smile radiates genuine warmth as she extends her hand in greeting.',
          '"Your gratitude is touching, but unnecessary. You are family here, and family is always welcome."',
          '"Cordelia spoke of you often in her letters. She would be so proud to see the person you\'ve become."',
          'The warmth of your reception makes you feel immediately at home in this mysterious place.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_cordelias_letters',
            text: '"She wrote about me? What did she say?"',
            consequence: 'Personal interest • Shows curiosity about aunt\'s perspective',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'cordelias_words'
          },
          {
            id: 'express_family_gratitude',
            text: '"Thank you for calling me family. I\'ve never felt like I belonged anywhere before."',
            consequence: 'Belonging appreciation • Shows emotional vulnerability',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'finding_belonging'
          }
        ]
      },
      {
        id: 'prophetic_knowledge',
        title: 'Foreseen Arrival',
        text: [
          'Lilith\'s eyes take on an otherworldly gleam as she speaks of your anticipated arrival.',
          '"Some among us have the gift of foresight. Luna saw your coming in the patterns of stars and shadow."',
          '"But more than prophecy, we felt the pull when Cordelia\'s protection passed to you. The manor itself called to you."',
          'The revelation that your arrival was both foreseen and magically connected fills you with wonder.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_protection',
            text: '"What protection did Cordelia pass to me?"',
            consequence: 'Protection inquiry • Shows desire to understand inheritance',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'magical_inheritance'
          },
          {
            id: 'ask_about_luna',
            text: '"I\'d like to meet Luna and learn about her gift."',
            consequence: 'Seer interest • Shows curiosity about prophetic abilities',
            effects: [{ characterId: 'luna', affectionChange: 12 }],
            nextScene: 'seer_introduction'
          }
        ]
      },
      {
        id: 'supernatural_awareness',
        title: 'Recognized Sensitivity',
        text: [
          'Lilith\'s eyes widen with surprise and approval at your supernatural awareness.',
          '"Remarkable. Few mortals can sense our nature so readily. You have inherited more than Cordelia\'s estate."',
          '"The sensitivity to supernatural energy runs in your bloodline, though it rarely manifests so strongly."',
          'Your natural ability to perceive the supernatural has revealed hidden potential within you.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_bloodline_gift',
            text: '"Is this sensitivity something I can develop further?"',
            consequence: 'Gift development • Shows interest in supernatural abilities',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'ability_development'
          },
          {
            id: 'ask_about_manor_residents',
            text: '"Are there others here like you? Can I sense them too?"',
            consequence: 'Resident inquiry • Shows awareness of community',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'community_sensing'
          }
        ]
      },
      {
        id: 'gracious_welcome',
        title: 'Noble Courtesy',
        text: [
          'Lilith\'s expression softens with genuine pleasure at your formal courtesy.',
          '"Such grace and proper respect. Cordelia raised you well, even from afar."',
          '"Please, there is no need for such formality among family. You may simply call me Lilith."',
          'Your respectful approach has earned deep appreciation and immediate acceptance.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_familial_warmth',
            text: '"Thank you, Lilith. It means everything to be considered family."',
            consequence: 'Family acceptance • Shows appreciation for inclusion',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'family_bonds'
          },
          {
            id: 'maintain_respectful_distance',
            text: '"I appreciate your kindness, but I want to earn my place here first."',
            consequence: 'Earned respect • Shows desire to prove worthiness',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'proving_worth'
          }
        ]
      },
      {
        id: 'family_recognition',
        title: 'Understanding Humility',
        text: [
          'Lilith\'s expression fills with profound understanding and warmth.',
          '"Your uncertainty shows wisdom, but let me be clear: you belong here not because of what you might prove, but because of who you are."',
          '"Cordelia\'s blood runs in your veins, but more importantly, her heart beats in your chest. That humility proves it."',
          'Your humble honesty has revealed the depth of your character and earned profound respect.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_belonging',
            text: '"If you\'re certain I belong here, then I gratefully accept my place."',
            consequence: 'Belonging acceptance • Shows trust in judgment',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'accepted_family'
          },
          {
            id: 'ask_about_cordelia_heart',
            text: '"What do you mean about Cordelia\'s heart beating in my chest?"',
            consequence: 'Heart inquiry • Shows curiosity about spiritual connection',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'spiritual_legacy'
          }
        ]
      },
      {
        id: 'immediate_acceptance',
        title: 'Grateful Belonging',
        text: [
          'Tears of joy shine in your eyes as you accept Lilith\'s declaration of belonging.',
          '"Your gratitude touches my ancient heart," Lilith says softly. "Welcome home, dear child."',
          '"This has been your home all along - you simply needed to find your way here. Cordelia always knew you would."',
          'The overwhelming sense of finally belonging somewhere creates an instant, deep connection with Lilith.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_coming_home',
            text: '"How did Cordelia know I would find my way here?"',
            consequence: 'Destiny inquiry • Shows curiosity about predetermined path',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'destined_arrival'
          },
          {
            id: 'express_overwhelming_gratitude',
            text: '"I never expected to feel so immediately welcome. Thank you for giving me a home."',
            consequence: 'Deep gratitude • Shows profound appreciation',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'heartfelt_welcome'
          }
        ]
      },
      // Completing the final 15 orphaned scenes for perfect story structure
      {
        id: 'nature_revelation',
        title: 'Truth Acknowledged',
        text: [
          'Lilith nods with appreciation at your direct acknowledgment of her vampiric nature.',
          '"Most humans cannot sense what we are so clearly. Your supernatural sensitivity is remarkable."',
          '"Yes, I am a vampire, as are the others who dwell here. This manor is a sanctuary for our kind."',
          'Your straightforward acceptance of the supernatural has earned respect and trust.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_sanctuary',
            text: '"What makes this place a sanctuary? Are you hiding from something?"',
            consequence: 'Sanctuary inquiry • Shows understanding of supernatural dangers',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'express_acceptance',
            text: '"I\'m not afraid. I want to understand this world you\'ve welcomed me into."',
            consequence: 'Acceptance expression • Shows openness to supernatural world',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'sanctuary_significance',
        title: 'Sacred Ground',
        text: [
          'Lilith\'s eyes light up with pleasure at your recognition of the manor\'s significance.',
          '"This place has been a sanctuary for centuries. The very stones hold protective enchantments woven by generations of guardians."',
          '"It serves as a haven for supernatural beings seeking safety, community, and purpose in a world that often rejects us."',
          'Your ability to sense the manor\'s significance reveals your connection to the supernatural world.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'offer_to_help_protect',
            text: '"How can I help protect this sanctuary? I want to contribute."',
            consequence: 'Protection offer • Shows commitment to sanctuary\'s mission',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_about_guardians',
            text: '"Tell me about the guardians who created these protections."',
            consequence: 'Guardian inquiry • Shows interest in sanctuary history',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'mystery_introduction',
        title: 'Secrets Unveiled',
        text: [
          'Lilith\'s smile becomes mysterious as she considers how to answer your question about secrets.',
          '"This sanctuary holds many secrets - some protective, some dangerous, all meaningful to those who dwell here."',
          '"The greatest secret is perhaps the simplest: that love and acceptance can exist between beings of different natures."',
          'Your curiosity about the manor\'s mysteries shows your readiness to embrace the unknown.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_dangerous_secrets',
            text: '"What makes some secrets dangerous? Should I be concerned?"',
            consequence: 'Danger inquiry • Shows awareness of potential risks',
            effects: [{ characterId: 'lilith', affectionChange: 14 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'focus_on_love_acceptance',
            text: '"Love and acceptance between different beings - that sounds wonderful."',
            consequence: 'Acceptance focus • Shows appreciation for inclusive community',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'cordelias_words',
        title: 'Aunt\'s Legacy',
        text: [
          'Lilith\'s expression grows tender as she recalls Cordelia\'s letters about you.',
          '"She wrote of your kindness, your curiosity, your strength in facing life\'s challenges alone."',
          '"Most of all, she spoke of your open heart - how you never let hardship make you bitter or closed off to others."',
          'Learning about your great-aunt\'s perception of you creates a deeper understanding of your place here.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'feel_honored_by_description',
            text: '"I\'m honored she saw those qualities in me. I hope to live up to her faith."',
            consequence: 'Honor expression • Shows desire to honor aunt\'s memory',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_how_she_knew',
            text: '"How did she know so much about me? We rarely spoke."',
            consequence: 'Knowledge inquiry • Shows curiosity about connection',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'finding_belonging',
        title: 'Home at Last',
        text: [
          'Lilith\'s expression fills with maternal warmth at your confession about never belonging anywhere.',
          '"Oh, dear child. The search for belonging ends here. You are home now, truly and completely."',
          '"Family isn\'t about blood alone - it\'s about choosing to love and support each other through everything."',
          'The overwhelming sense of finally finding your place in the world brings tears of relief to your eyes.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_family_concept',
            text: '"Chosen family sounds perfect. I choose all of you too."',
            consequence: 'Family choice • Shows commitment to new relationships',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_about_earning_place',
            text: '"How do I make sure I\'m worthy of this family?"',
            consequence: 'Worthiness inquiry • Shows desire to contribute meaningfully',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'magical_inheritance',
        title: 'Protective Legacy',
        text: [
          'Lilith\'s voice takes on a reverent tone as she explains your magical inheritance.',
          '"Cordelia bound protective enchantments to your bloodline - wards against supernatural harm and the ability to sense danger."',
          '"The inheritance also includes the manor\'s acceptance of you as its rightful guardian and heir to its secrets."',
          'Understanding your magical inheritance reveals the depth of responsibility you\'ve inherited.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'accept_guardian_role',
            text: '"I accept the responsibility of being this place\'s guardian."',
            consequence: 'Guardian acceptance • Shows commitment to protective role',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_about_learning_magic',
            text: '"Can I learn to use these magical abilities properly?"',
            consequence: 'Magic learning • Shows interest in developing inherited gifts',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'seer_introduction',
        title: 'Meeting the Oracle',
        text: [
          'Lilith nods approvingly at your interest in Luna\'s prophetic abilities.',
          '"Luna will be delighted to meet you. Her gift of foresight is both blessing and burden - she sees possibilities, not certainties."',
          '"She spoke of your arrival weeks ago, describing you as \'the one who brings change wrapped in acceptance.\'"',
          'Your interest in Luna\'s gift demonstrates your openness to the supernatural community\'s diversity.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_change_prophecy',
            text: '"What kind of change am I supposed to bring?"',
            consequence: 'Change inquiry • Shows curiosity about prophetic role',
            effects: [{ characterId: 'luna', affectionChange: 15 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'express_eagerness_to_meet_luna',
            text: '"I\'d love to meet Luna and learn more about her visions."',
            consequence: 'Seer interest • Shows respect for prophetic abilities',
            effects: [{ characterId: 'luna', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'ability_development',
        title: 'Supernatural Potential',
        text: [
          'Lilith\'s eyes sparkle with excitement at your interest in developing your supernatural sensitivity.',
          '"Absolutely. With proper guidance, your natural abilities could become quite remarkable."',
          '"Morgana specializes in developing latent supernatural talents, and Luna can help you understand what your sensitivity reveals."',
          'The possibility of developing your supernatural abilities opens exciting new avenues for growth.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'request_training',
            text: '"I\'d like to begin training as soon as possible."',
            consequence: 'Training request • Shows eagerness to develop abilities',
            effects: [{ characterId: 'morgana', affectionChange: 12 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_about_responsibilities',
            text: '"What responsibilities come with having supernatural abilities?"',
            consequence: 'Responsibility inquiry • Shows mature consideration of power',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'community_sensing',
        title: 'Supernatural Awareness',
        text: [
          'Lilith nods with pride at your question about sensing other supernatural residents.',
          '"Indeed, there are others here. Each has their own unique supernatural signature that you may learn to distinguish."',
          '"Your sensitivity will grow stronger with time and practice. Soon you\'ll sense not just what someone is, but who they are."',
          'Your growing supernatural awareness promises deeper connections with the manor\'s supernatural community.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_to_meet_others',
            text: '"I\'d like to meet the other residents and learn to sense their unique natures."',
            consequence: 'Community interest • Shows desire to connect with all residents',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'focus_on_developing_sensitivity',
            text: '"How can I practice developing this sensitivity?"',
            consequence: 'Sensitivity development • Shows commitment to improving abilities',
            effects: [{ characterId: 'lilith', affectionChange: 16 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'family_bonds',
        title: 'Immediate Kinship',
        text: [
          'Lilith\'s smile radiates pure joy at your acceptance of the family bond.',
          '"The connection between us is immediate and real. Chosen family often creates stronger bonds than blood alone."',
          '"You will find that each resident here brings something unique to our family dynamic - and you will too."',
          'The instant family connection creates a foundation of love and support for your new life.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_about_family_dynamics',
            text: '"What should I know about the family dynamics here?"',
            consequence: 'Dynamic inquiry • Shows interest in understanding relationships',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'express_contribution_desire',
            text: '"I want to contribute something meaningful to this family."',
            consequence: 'Contribution desire • Shows commitment to family wellbeing',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'proving_worth',
        title: 'Earning Respect',
        text: [
          'Lilith\'s expression shows deep respect for your desire to earn your place.',
          '"Your humility and determination to prove yourself actually prove that you already belong here."',
          '"True worthiness isn\'t about grand gestures - it\'s about consistent kindness, reliability, and care for others."',
          'Your commitment to earning your place demonstrates the very character that makes you worthy.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_how_to_contribute',
            text: '"How can I contribute to the community in meaningful ways?"',
            consequence: 'Contribution inquiry • Shows genuine desire to help',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'promise_to_prove_worthy',
            text: '"I promise to show through my actions that I deserve this place."',
            consequence: 'Worthiness promise • Shows commitment to earning acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'accepted_family',
        title: 'Unconditional Welcome',
        text: [
          'Lilith\'s face glows with happiness as you accept your place in the family.',
          '"Your acceptance brings such joy to my heart. Welcome home, truly and completely."',
          '"This family has been waiting for you without even knowing it. You complete something that was missing."',
          'The mutual acceptance creates an unbreakable bond between you and your new supernatural family.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_what_was_missing',
            text: '"What was missing that I complete?"',
            consequence: 'Completion inquiry • Shows curiosity about role in family',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'express_overwhelming_gratitude',
            text: '"Thank you for making me feel so completely welcomed and loved."',
            consequence: 'Grateful expression • Shows deep appreciation for acceptance',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'spiritual_legacy',
        title: 'Heart\'s Inheritance',
        text: [
          'Lilith\'s voice becomes deeply emotional as she explains the spiritual connection.',
          '"Cordelia\'s heart - her capacity for love, acceptance, and bringing out the best in others - lives on in you."',
          '"It\'s not about blood or genetics. It\'s about carrying forward her spirit of unconditional love and creating sanctuary for others."',
          'Understanding your spiritual inheritance reveals the profound responsibility and gift you\'ve received.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'vow_to_honor_legacy',
            text: '"I vow to honor Cordelia\'s legacy and continue her work of creating sanctuary."',
            consequence: 'Legacy vow • Shows commitment to continuing aunt\'s mission',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_about_creating_sanctuary',
            text: '"How did Cordelia create sanctuary for others? What did she do?"',
            consequence: 'Sanctuary inquiry • Shows desire to learn from aunt\'s example',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'destined_arrival',
        title: 'Predetermined Path',
        text: [
          'Lilith\'s eyes take on an otherworldly gleam as she speaks of destiny and predetermined paths.',
          '"Cordelia had a touch of prophecy herself. She saw that you would find your way here when the time was right."',
          '"Some paths are written in the stars, but they still require courage to walk. You chose to come here - destiny merely opened the door."',
          'Learning about your destined arrival adds a sense of cosmic significance to your journey.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'embrace_destiny',
            text: '"If this is my destiny, then I embrace it completely."',
            consequence: 'Destiny acceptance • Shows openness to predetermined path',
            effects: [{ characterId: 'lilith', affectionChange: 20 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'focus_on_personal_choice',
            text: '"I\'m glad I had the courage to choose this path, destiny or not."',
            consequence: 'Choice focus • Shows appreciation for personal agency',
            effects: [{ characterId: 'lilith', affectionChange: 18 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      {
        id: 'heartfelt_welcome',
        title: 'Home Found',
        text: [
          'Lilith is visibly moved by your profound gratitude and the depth of your emotional response.',
          '"Your words touch the very core of what we\'ve tried to build here - a place where everyone can truly belong."',
          '"This is what Cordelia dreamed of when she first opened these doors to lost souls seeking sanctuary."',
          'The heartfelt exchange cements your place in the family and creates an unshakeable foundation of mutual love.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'promise_to_help_others_find_home',
            text: '"I want to help others find the same sense of home and belonging I\'ve found here."',
            consequence: 'Service promise • Shows commitment to helping other lost souls',
            effects: [{ characterId: 'lilith', affectionChange: 25 }],
            nextScene: 'introduction_complete'
          },
          {
            id: 'ask_about_cordelias_dream',
            text: '"Tell me more about Cordelia\'s dream of sanctuary for lost souls."',
            consequence: 'Dream inquiry • Shows interest in understanding aunt\'s vision',
            effects: [{ characterId: 'lilith', affectionChange: 22 }],
            nextScene: 'introduction_complete'
          }
        ]
      },
      // Final scene to complete perfect story structure
      {
        id: 'introduction_complete',
        title: 'Welcome to Your New Life',
        text: [
          'Your introduction to Ravencroft Manor and its supernatural inhabitants draws to a close.',
          'Lilith\'s warm smile encompasses all the promise and possibility of your new life here.',
          '"Now that you understand what this place is and who we are, it\'s time to begin your true journey among us."',
          'Your arrival has been completed, and your story in the supernatural world is ready to unfold.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'begin_new_life',
            text: 'Step forward into your new supernatural life.',
            consequence: 'Life beginning • Embraces transformation and new possibilities',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'arrival'
          }
        ]
      }
    ]
  },
  
  // Chapter 2: Political Tensions
  {
    id: 'chapter_2',
    title: 'Political Tensions',
    scenes: [
      {
        id: 'chapter_2_start',
        title: 'Brewing Storm',
        text: [
          'Several weeks have passed since your arrival at Ravencroft Manor. You\'ve begun to understand the delicate balance of power that exists among the vampire residents.',
          'However, tensions that have long simmered beneath the surface are beginning to boil over.',
          'Valentina, the revolutionary, and Isadora, the traditionalist socialite, have been increasingly at odds.',
          'Their philosophical differences about how the coven should interact with the modern world have reached a breaking point.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'observe_tensions',
            text: 'Observe the growing tensions carefully before taking action.',
            consequence: 'Cautious observation • Gather information before acting',
            effects: [{ characterId: 'celeste', affectionChange: 8 }],
            nextScene: 'valentina_proposal'
          },
          {
            id: 'seek_lilith_counsel',
            text: 'Seek Lilith\'s guidance on handling the situation.',
            consequence: 'Leadership consultation • Shows respect for authority',
            effects: [{ characterId: 'lilith', affectionChange: 12 }],
            nextScene: 'lilith_political_advice'
          },
          {
            id: 'talk_to_morgana',
            text: 'Ask Morgana for her mystical insight into the conflict.',
            consequence: 'Mystical consultation • Seeks deeper understanding',
            effects: [{ characterId: 'morgana', affectionChange: 10 }],
            nextScene: 'morgana_political_vision'
          }
        ]
      },
      
      {
        id: 'valentina_proposal',
        title: 'The Revolutionary\'s Vision',
        text: [
          'You find Valentina in the library, surrounded by books on political theory and social movements.',
          'Her passionate eyes burn with conviction as she looks up from her reading.',
          '"The time for hiding in shadows is over," she declares. "We have the power to shape the modern world, not merely observe it from the sidelines."',
          '"Isadora and her traditional approach will keep us trapped in the past forever. We need progressive action."'
        ],
        character: characters.valentina,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'support_valentina',
            text: 'Express support for Valentina\'s progressive vision.',
            consequence: 'Progressive alliance • Supports modernization',
            effects: [
              { characterId: 'valentina', affectionChange: 25 },
              { characterId: 'isadora', affectionChange: -15 },
              { characterId: 'lilith', affectionChange: -8 }
            ],
            playerStatEffects: { sanityChange: -5 },
            nextScene: 'valentina_detailed_plan'
          },
          {
            id: 'express_concerns',
            text: 'Voice concerns about the potential risks of rapid change.',
            consequence: 'Diplomatic caution • Shows balanced thinking',
            effects: [
              { characterId: 'valentina', affectionChange: 5 },
              { characterId: 'celeste', affectionChange: 12 },
              { characterId: 'lilith', affectionChange: 8 }
            ],
            nextScene: 'valentina_frustrated_response'
          },
          {
            id: 'ask_specifics',
            text: 'Ask for specific details about her proposed changes.',
            consequence: 'Information gathering • Seeks concrete plans',
            effects: [
              { characterId: 'valentina', affectionChange: 10 },
              { characterId: 'celeste', affectionChange: 8 }
            ],
            nextScene: 'valentina_detailed_plan'
          }
        ]
      },
      
      {
        id: 'lilith_political_advice',
        title: 'The Matriarch\'s Wisdom',
        text: [
          'Lilith receives you in her private study, a room that radiates ancient authority.',
          'She listens carefully as you describe the growing tensions between Valentina and Isadora.',
          '"I have governed this coven for centuries," she says thoughtfully. "Change is inevitable, but it must be managed carefully."',
          '"Both Valentina and Isadora have valid concerns. The challenge is finding a path that honors our traditions while adapting to modern realities."'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'ask_lilith_preference',
            text: 'Ask Lilith which approach she personally favors.',
            consequence: 'Direct inquiry • Seeks leadership guidance',
            effects: [{ characterId: 'lilith', affectionChange: 15 }],
            nextScene: 'lilith_reveals_preference'
          },
          {
            id: 'suggest_mediation',
            text: 'Suggest that you could help mediate between the factions.',
            consequence: 'Diplomatic offer • Takes initiative in conflict resolution',
            effects: [
              { characterId: 'lilith', affectionChange: 20 },
              { characterId: 'celeste', affectionChange: 15 }
            ],
            playerStatEffects: { healthChange: -3 },
            nextScene: 'lilith_mediation_approval'
          },
          {
            id: 'express_neutrality',
            text: 'Express that you see merit in both perspectives.',
            consequence: 'Neutral stance • Shows diplomatic balance',
            effects: [
              { characterId: 'lilith', affectionChange: 12 },
              { characterId: 'morgana', affectionChange: 8 }
            ],
            nextScene: 'lilith_neutrality_response'
          }
        ]
      },
      
      {
        id: 'morgana_political_vision',
        title: 'Shadows of the Future',
        text: [
          'Morgana\'s eyes grow distant as she peers into realms beyond ordinary perception.',
          'The shadows around her seem to whisper secrets as she considers your question.',
          '"The threads of fate are tangled here," she murmurs. "I see two paths diverging - one leads to growth through strife, the other to stagnation through peace."',
          '"The choice you make will ripple through decades to come. Trust your instincts, for they are guided by forces older than politics."'
        ],
        character: characters.morgana,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'ask_about_consequences',
            text: 'Ask Morgana to elaborate on the long-term consequences.',
            consequence: 'Mystical inquiry • Seeks deeper understanding',
            effects: [{ characterId: 'morgana', affectionChange: 18 }],
            playerStatEffects: { sanityChange: -8 },
            nextScene: 'morgana_dark_prophecy'
          },
          {
            id: 'request_guidance',
            text: 'Ask for her guidance on which path to choose.',
            consequence: 'Mystical guidance • Relies on supernatural wisdom',
            effects: [{ characterId: 'morgana', affectionChange: 15 }],
            nextScene: 'morgana_cryptic_advice'
          },
          {
            id: 'thank_and_leave',
            text: 'Thank Morgana and decide to make your own choice.',
            consequence: 'Independent decision • Shows personal agency',
            effects: [
              { characterId: 'morgana', affectionChange: 10 },
              { characterId: 'lilith', affectionChange: 5 }
            ],
            nextScene: 'isadora_confrontation'
          }
        ]
      },
      
      {
        id: 'isadora_confrontation',
        title: 'The Traditionalist\'s Stand',
        text: [
          'You encounter Isadora in the ballroom, where she\'s arranging fresh flowers with meticulous care.',
          'Her elegant composure barely masks her frustration as she speaks.',
          '"Valentina\'s reckless ideas will destroy everything we\'ve built," she says with controlled anger.',
          '"Our traditions have kept us safe for centuries. This rush toward modernity is nothing but dangerous foolishness that will expose us all."'
        ],
        character: characters.isadora,
        background: '/backgrounds/ballroom.png',
        choices: [
          {
            id: 'support_isadora',
            text: 'Agree that tradition and caution are important.',
            consequence: 'Traditional alliance • Supports established ways',
            effects: [
              { characterId: 'isadora', affectionChange: 25 },
              { characterId: 'valentina', affectionChange: -15 },
              { characterId: 'raven', affectionChange: -8 }
            ],
            nextScene: 'isadora_traditional_plan'
          },
          {
            id: 'challenge_isadora',
            text: 'Gently challenge her resistance to all change.',
            consequence: 'Diplomatic challenge • Questions rigid thinking',
            effects: [
              { characterId: 'isadora', affectionChange: -5 },
              { characterId: 'valentina', affectionChange: 8 },
              { characterId: 'celeste', affectionChange: 10 }
            ],
            nextScene: 'isadora_defensive_response'
          },
          {
            id: 'ask_about_fears',
            text: 'Ask what specifically she fears about Valentina\'s proposals.',
            consequence: 'Understanding inquiry • Seeks deeper motivations',
            effects: [
              { characterId: 'isadora', affectionChange: 12 },
              { characterId: 'morgana', affectionChange: 5 }
            ],
            nextScene: 'isadora_reveals_fears'
          }
        ]
      },
      
      {
        id: 'valentina_detailed_plan',
        title: 'The Progressive Agenda',
        text: [
          'Valentina\'s eyes light up as she shares her vision for the future.',
          '"We could establish vampire-owned businesses, influence politics from within, use our abilities to actually help humanity instead of preying on them."',
          '"Imagine a world where we work alongside humans as partners, not predators. We have so much to offer."',
          'Her passion is infectious, but you can see the risks in her ambitious plans.'
        ],
        character: characters.valentina,
        background: '/backgrounds/library.png',
        choices: [
          {
            id: 'full_commitment',
            text: 'Offer your full commitment to her cause.',
            consequence: 'Revolutionary alliance • Complete dedication to change',
            effects: [
              { characterId: 'valentina', affectionChange: 35 },
              { characterId: 'isadora', affectionChange: -25 },
              { characterId: 'raven', affectionChange: 15 }
            ],
            playerStatEffects: { healthChange: -8 },
            nextScene: 'valentina_grateful_response'
          },
          {
            id: 'gradual_approach',
            text: 'Suggest a more gradual approach to implementing changes.',
            consequence: 'Moderate progression • Balances innovation with caution',
            effects: [
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'celeste', affectionChange: 18 },
              { characterId: 'lilith', affectionChange: 12 }
            ],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'express_doubts',
            text: 'Express doubts about the feasibility of her plans.',
            consequence: 'Realistic concerns • Questions implementation',
            effects: [
              { characterId: 'valentina', affectionChange: -10 },
              { characterId: 'isadora', affectionChange: 8 },
              { characterId: 'morgana', affectionChange: 5 }
            ],
            nextScene: 'valentina_defensive_argument'
          }
        ]
      },
      
      {
        id: 'isadora_traditional_plan',
        title: 'The Wisdom of Ages',
        text: [
          'Isadora\'s voice takes on the weight of centuries as she explains her perspective.',
          '"Our discretion has protected us through wars, plagues, and the rise and fall of empires. We survive by remaining hidden."',
          '"The old ways work because they\'ve been tested by time. Valentina\'s experiments could destroy us all."',
          'Her fear is genuine, born from knowledge of past disasters when vampires became too bold.'
        ],
        character: characters.isadora,
        background: '/backgrounds/ballroom.png',
        choices: [
          {
            id: 'embrace_tradition',
            text: 'Agree that the traditional ways should be preserved.',
            consequence: 'Traditional alliance • Supports established order',
            effects: [
              { characterId: 'isadora', affectionChange: 35 },
              { characterId: 'valentina', affectionChange: -25 },
              { characterId: 'lilith', affectionChange: 15 }
            ],
            nextScene: 'isadora_relief_response'
          },
          {
            id: 'suggest_adaptation',
            text: 'Suggest that tradition can adapt without abandoning core values.',
            consequence: 'Adaptive tradition • Modernizes while preserving essence',
            effects: [
              { characterId: 'isadora', affectionChange: 10 },
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'morgana', affectionChange: 12 }
            ],
            nextScene: 'compromise_discussion'
          },
          {
            id: 'challenge_fear',
            text: 'Gently challenge her fear of all change.',
            consequence: 'Progressive challenge • Questions conservative stance',
            effects: [
              { characterId: 'isadora', affectionChange: -15 },
              { characterId: 'valentina', affectionChange: 12 },
              { characterId: 'raven', affectionChange: 8 }
            ],
            nextScene: 'isadora_angry_response'
          }
        ]
      },
      
      {
        id: 'compromise_discussion',
        title: 'Seeking Middle Ground',
        text: [
          'You find yourself in the unique position of potentially bridging the gap between two opposing philosophies.',
          'Both Valentina and Isadora have valid concerns, and perhaps there\'s a way to honor both perspectives.',
          'The challenge will be convincing both factions that compromise isn\'t betrayal.',
          'Your diplomatic efforts could shape the future of the entire coven.'
        ],
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'propose_council',
            text: 'Propose forming a council with representatives from both sides.',
            consequence: 'Democratic solution • Creates formal decision-making structure',
            effects: [
              { characterId: 'lilith', affectionChange: 25 },
              { characterId: 'celeste', affectionChange: 20 },
              { characterId: 'valentina', affectionChange: 10 },
              { characterId: 'isadora', affectionChange: 10 }
            ],
            playerStatEffects: { healthChange: -5 },
            nextScene: 'council_formation'
          },
          {
            id: 'gradual_reform',
            text: 'Suggest implementing small changes gradually over time.',
            consequence: 'Gradual reform • Minimizes risk while allowing progress',
            effects: [
              { characterId: 'celeste', affectionChange: 25 },
              { characterId: 'valentina', affectionChange: 15 },
              { characterId: 'isadora', affectionChange: 15 },
              { characterId: 'morgana', affectionChange: 10 }
            ],
            nextScene: 'gradual_reform_plan'
          },
          {
            id: 'suggest_trial_period',
            text: 'Propose a trial period for new policies with built-in safeguards.',
            consequence: 'Experimental approach • Tests changes safely',
            effects: [
              { characterId: 'valentina', affectionChange: 20 },
              { characterId: 'isadora', affectionChange: 8 },
              { characterId: 'lilith', affectionChange: 15 }
            ],
            nextScene: 'trial_period_discussion'
          }
        ]
      },
      
      {
        id: 'council_formation',
        title: 'Democratic Governance',
        text: [
          'Your proposal for a governing council resonates with Lilith\'s desire for structured leadership.',
          'The idea of formal representation gives both factions a voice while maintaining order.',
          '"This could work," Lilith muses. "We\'ve governed by tradition and authority for so long, perhaps it\'s time for a more inclusive approach."',
          'The formation of the council marks a new chapter in vampire governance at Ravencroft Manor.'
        ],
        character: characters.lilith,
        background: '/backgrounds/grand-hall.png',
        choices: [
          {
            id: 'volunteer_leadership',
            text: 'Volunteer to help lead the council formation process.',
            consequence: 'Leadership initiative • Takes responsibility for implementation',
            effects: [
              { characterId: 'lilith', affectionChange: 30 },
              { characterId: 'celeste', affectionChange: 25 }
            ],
            playerStatEffects: { healthChange: -10 },
            nextScene: 'chapter_2_conclusion_council'
          },
          {
            id: 'suggest_elections',
            text: 'Suggest holding elections for council positions.',
            consequence: 'Democratic process • Ensures fair representation',
            effects: [
              { characterId: 'valentina', affectionChange: 20 },
              { characterId: 'raven', affectionChange: 15 }
            ],
            nextScene: 'election_planning'
          },
          {
            id: 'recommend_advisors',
            text: 'Recommend that experienced members serve as advisors.',
            consequence: 'Balanced wisdom • Combines new ideas with experience',
            effects: [
              { characterId: 'isadora', affectionChange: 18 },
              { characterId: 'morgana', affectionChange: 15 },
              { characterId: 'lilith', affectionChange: 12 }
            ],
            nextScene: 'advisor_system'
          }
        ]
      }
    ]
  }
];

export const initialGameState = {
  currentChapter: 0,
  currentScene: 'arrival',
  characters: characters,
  playerCharacter: undefined,
  playerStats: {
    health: 100,
    sanity: 100,
    location: 'Ravencroft Manor Gates',
    maxHealth: 100,
    maxSanity: 100,
    restCount: 0,
    meditationCount: 0
  },
  inventory: [],
  flags: {},
  completedScenes: [],
  choiceHistory: [],
  isCharacterCreated: false,
  journal: [],
  achievements: [],
  unlockedBackstories: [],
  availableRecoveryActions: ['basic_rest', 'meditation', 'social_recovery'],
  lastRecoveryTimes: {}
};
