import { PlayerTrait, PlayerFlaw, PlayerBoon } from '../types/game';

export const availableTraits: PlayerTrait[] = [
  // Physical Traits
  {
    id: 'athletic',
    name: 'Athletic',
    description: 'You are in excellent physical condition, giving you stamina and grace in dangerous situations.',
    category: 'physical'
  },
  {
    id: 'fragile',
    name: 'Delicate',
    description: 'Your ethereal beauty is matched by a fragile constitution that vampires find irresistible.',
    category: 'physical'
  },
  {
    id: 'striking',
    name: 'Striking',
    description: 'Your unusual beauty draws attention wherever you go, for better or worse.',
    category: 'physical'
  },
  {
    id: 'plain',
    name: 'Unassuming',
    description: 'You blend into crowds easily, making you skilled at observation and avoiding unwanted attention.',
    category: 'physical'
  },

  // Social Traits
  {
    id: 'charismatic',
    name: 'Charismatic',
    description: 'You have a natural magnetism that draws others to you and makes them want to trust you.',
    category: 'social'
  },
  {
    id: 'empathetic',
    name: 'Empathetic',
    description: 'You have an uncanny ability to understand and connect with others\' emotions.',
    category: 'social'
  },
  {
    id: 'intimidating',
    name: 'Intimidating',
    description: 'There\'s something about your presence that makes others think twice before crossing you.',
    category: 'social'
  },
  {
    id: 'shy',
    name: 'Reserved',
    description: 'You prefer to observe rather than participate, which often reveals hidden truths.',
    category: 'social'
  },

  // Mental Traits
  {
    id: 'intelligent',
    name: 'Brilliant',
    description: 'Your sharp intellect allows you to solve complex problems and see through deceptions.',
    category: 'mental'
  },
  {
    id: 'intuitive',
    name: 'Intuitive',
    description: 'You have an almost supernatural ability to sense danger and read between the lines.',
    category: 'mental'
  },
  {
    id: 'stubborn',
    name: 'Determined',
    description: 'Once you set your mind to something, nothing can deter you from your path.',
    category: 'mental'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Your artistic soul sees beauty and solutions where others see only problems.',
    category: 'mental'
  }
];

export const availableFlaws: PlayerFlaw[] = [
  {
    id: 'bloodphobia',
    name: 'Hemophobia',
    description: 'The sight of blood makes you queasy and weak, a problematic trait in a world of vampires.',
    points: 3
  },
  {
    id: 'nightmares',
    name: 'Haunted Dreams',
    description: 'Disturbing nightmares plague your sleep, leaving you tired and on edge.',
    points: 2
  },
  {
    id: 'trusting',
    name: 'Overly Trusting',
    description: 'You see the best in everyone, sometimes to your detriment.',
    points: 2
  },
  {
    id: 'reckless',
    name: 'Reckless',
    description: 'You often act without thinking, rushing into dangerous situations.',
    points: 2
  },
  {
    id: 'curious',
    name: 'Dangerously Curious',
    description: 'Your insatiable curiosity often leads you into trouble you should avoid.',
    points: 2
  },
  {
    id: 'isolated',
    name: 'Socially Isolated',
    description: 'You have few connections to the mortal world, making you more vulnerable but also less tied down.',
    points: 3
  },
  {
    id: 'haunted',
    name: 'Haunted Past',
    description: 'A dark secret from your past occasionally resurfaces to complicate your life.',
    points: 4
  }
];

export const availableBoons: PlayerBoon[] = [
  {
    id: 'psychic',
    name: 'Psychic Sensitivity',
    description: 'You can sense supernatural presences and sometimes glimpse the future in dreams.',
    cost: 4
  },
  {
    id: 'resistance',
    name: 'Mental Fortitude',
    description: 'Your mind is unusually resistant to supernatural influence and mind control.',
    cost: 3
  },
  {
    id: 'healing',
    name: 'Quick Recovery',
    description: 'You heal from injuries faster than normal humans.',
    cost: 3
  },
  {
    id: 'charm',
    name: 'Natural Charm',
    description: 'There\'s something supernaturally appealing about you that draws others in.',
    cost: 2
  },
  {
    id: 'courage',
    name: 'Fearless',
    description: 'You rarely feel fear, even in the most terrifying situations.',
    cost: 2
  },
  {
    id: 'lucky',
    name: 'Unnaturally Lucky',
    description: 'Fortune seems to favor you in critical moments.',
    cost: 3
  },
  {
    id: 'bloodsight',
    name: 'Blood Sight',
    description: 'You can see the supernatural nature of beings by looking at them closely.',
    cost: 4
  },
  {
    id: 'willpower',
    name: 'Iron Will',
    description: 'Your determination can overcome almost any obstacle or temptation.',
    cost: 2
  }
];

export const startingPoints = 5;