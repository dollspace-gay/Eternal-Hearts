import { PlayerCharacter, Choice, PlayerTrait, PlayerFlaw, PlayerBoon } from '../types/game';

// Check if player has a specific trait, flaw, or boon
export function hasPlayerTrait(character: PlayerCharacter | undefined, traitId: string): boolean {
  return character?.traits?.some(trait => trait.id === traitId) || false;
}

export function hasPlayerFlaw(character: PlayerCharacter | undefined, flawId: string): boolean {
  return character?.flaws?.some(flaw => flaw.id === flawId) || false;
}

export function hasPlayerBoon(character: PlayerCharacter | undefined, boonId: string): boolean {
  return character?.boons?.some(boon => boon.id === boonId) || false;
}

// Helper functions to identify choice types
function isPhysicalChoice(choice: Choice): boolean {
  const physicalKeywords = ['fight', 'run', 'athletic', 'physical', 'strength', 'endurance', 'chase', 'escape'];
  return physicalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSocialChoice(choice: Choice): boolean {
  const socialKeywords = ['charm', 'persuade', 'talk', 'convince', 'social', 'conversation', 'diplomacy', 'negotiate'];
  return socialKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isEmotionalChoice(choice: Choice): boolean {
  const emotionalKeywords = ['feel', 'emotion', 'heart', 'love', 'comfort', 'empathy', 'understand', 'connect', 'vulnerable'];
  return emotionalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isAnalyticalChoice(choice: Choice): boolean {
  const analyticalKeywords = ['analyze', 'think', 'reason', 'logic', 'deduce', 'solve', 'question', 'investigate'];
  return analyticalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isArtisticChoice(choice: Choice): boolean {
  const artisticKeywords = ['art', 'music', 'create', 'beauty', 'aesthetic', 'compose', 'artistic', 'creative'];
  return artisticKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isAssertiveChoice(choice: Choice): boolean {
  const assertiveKeywords = ['demand', 'insist', 'firm', 'assertive', 'bold', 'confident', 'direct', 'command'];
  return assertiveKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isObservationalChoice(choice: Choice): boolean {
  const observationalKeywords = ['observe', 'watch', 'notice', 'silent', 'quiet', 'listen', 'wait', 'study'];
  return observationalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isBloodRelatedChoice(choice: Choice): boolean {
  const bloodKeywords = ['blood', 'bite', 'feed', 'vampire', 'fang', 'neck', 'vein', 'drain'];
  return bloodKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isTrustingChoice(choice: Choice): boolean {
  const trustKeywords = ['trust', 'believe', 'faith', 'accept', 'honest', 'open', 'vulnerable'];
  return trustKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSuspiciousChoice(choice: Choice): boolean {
  const suspiciousKeywords = ['suspect', 'doubt', 'cautious', 'wary', 'suspicious', 'distrust', 'question'];
  return suspiciousKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isRecklessChoice(choice: Choice): boolean {
  const recklessKeywords = ['bold', 'reckless', 'rush', 'immediate', 'without thinking', 'impulsive', 'dare'];
  return recklessKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isCautiousChoice(choice: Choice): boolean {
  const cautiousKeywords = ['careful', 'cautious', 'slow', 'think', 'consider', 'deliberate', 'wait'];
  return cautiousKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isInvestigativeChoice(choice: Choice): boolean {
  const investigativeKeywords = ['investigate', 'explore', 'discover', 'search', 'find out', 'learn', 'curious'];
  return investigativeKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSupernaturalChoice(choice: Choice): boolean {
  const supernaturalKeywords = ['supernatural', 'magic', 'vampire', 'angel', 'divine', 'mystical', 'otherworldly'];
  return supernaturalKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isResistanceChoice(choice: Choice): boolean {
  const resistanceKeywords = ['resist', 'fight', 'oppose', 'refuse', 'reject', 'deny', 'stand against'];
  return resistanceKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isBraveChoice(choice: Choice): boolean {
  const braveKeywords = ['brave', 'courage', 'fearless', 'bold', 'face', 'confront', 'stand up'];
  return braveKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDetectionChoice(choice: Choice): boolean {
  const detectionKeywords = ['see', 'detect', 'sense', 'perceive', 'notice', 'observe', 'identify'];
  return detectionKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDeterminationChoice(choice: Choice): boolean {
  const determinationKeywords = ['determined', 'persist', 'will', 'resolve', 'steadfast', 'unwavering', 'committed'];
  return determinationKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

// Additional helper functions for enhanced flaw effects
function isRestChoice(choice: Choice): boolean {
  const restKeywords = ['rest', 'sleep', 'recover', 'relax', 'calm', 'peaceful', 'meditate', 'retreat'];
  return restKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDeceptionChoice(choice: Choice): boolean {
  const deceptionKeywords = ['lie', 'deceive', 'trick', 'manipulate', 'betray', 'false', 'mislead', 'dishonest'];
  return deceptionKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDangerousChoice(choice: Choice): boolean {
  const dangerousKeywords = ['dangerous', 'risk', 'peril', 'hazard', 'threat', 'unsafe', 'reckless', 'deadly'];
  return dangerousKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isGroupChoice(choice: Choice): boolean {
  const groupKeywords = ['group', 'everyone', 'together', 'gathering', 'crowd', 'assembly', 'meeting', 'social'];
  return groupKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isSolitaryChoice(choice: Choice): boolean {
  const solitaryKeywords = ['alone', 'solitary', 'private', 'isolated', 'individual', 'personal', 'solo', 'single'];
  return solitaryKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isPastRelatedChoice(choice: Choice): boolean {
  const pastKeywords = ['past', 'memory', 'remember', 'history', 'before', 'previous', 'former', 'childhood'];
  return pastKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isLuckyChoice(choice: Choice): boolean {
  const luckyKeywords = ['luck', 'fortune', 'chance', 'gamble', 'risk', 'random', 'serendipity', 'fate'];
  return luckyKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

function isDiscoveryChoice(choice: Choice): boolean {
  const discoveryKeywords = ['discover', 'find', 'uncover', 'reveal', 'stumble', 'happen upon', 'come across'];
  return discoveryKeywords.some(keyword => 
    choice.text.toLowerCase().includes(keyword) || 
    choice.consequence.toLowerCase().includes(keyword)
  );
}

// Apply character effects to choices
export function applyCharacterEffects(choices: Choice[], character: PlayerCharacter | undefined): Choice[] {
  if (!character) return choices;

  return choices.map(choice => {
    let modifiedChoice = { ...choice };
    
    // Apply trait effects
    modifiedChoice = applyTraitEffects(modifiedChoice, character);
    
    // Apply flaw effects
    modifiedChoice = applyFlawEffects(modifiedChoice, character);
    
    // Apply boon effects
    modifiedChoice = applyBoonEffects(modifiedChoice, character);
    
    return modifiedChoice;
  });
}

function applyTraitEffects(choice: Choice, character: PlayerCharacter): Choice {
  let modifiedChoice = { ...choice };
  
  // Athletic trait - bonus to physical actions
  if (hasPlayerTrait(character, 'athletic') && isPhysicalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Athletic bonus';
  }
  
  // Charismatic trait - bonus to social interactions
  if (hasPlayerTrait(character, 'charismatic') && isSocialChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Charismatic bonus';
  }
  
  // Empathetic trait - bonus to emotional connections
  if (hasPlayerTrait(character, 'empathetic') && isEmotionalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 4
    }));
    modifiedChoice.consequence += ' • Empathetic insight';
  }
  
  // Intelligent trait - bonus to analytical choices
  if (hasPlayerTrait(character, 'intelligent') && isAnalyticalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Brilliant deduction';
  }
  
  // Creative trait - bonus to artistic interactions
  if (hasPlayerTrait(character, 'creative') && isArtisticChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 5
    }));
    modifiedChoice.consequence += ' • Creative connection';
  }
  
  // Intimidating trait - bonus to assertive choices
  if (hasPlayerTrait(character, 'intimidating') && isAssertiveChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Intimidating presence';
  }
  
  // Reserved trait - bonus to observational choices
  if (hasPlayerTrait(character, 'shy') && isObservationalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Observant nature';
  }
  
  return modifiedChoice;
}

function applyFlawEffects(choice: Choice, character: PlayerCharacter): Choice {
  let modifiedChoice = { ...choice };
  
  // Hemophobia - penalty to blood-related scenes, extra sanity loss
  if (hasPlayerFlaw(character, 'bloodphobia') && isBloodRelatedChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: Math.max(0, effect.affectionChange - 3)
    }));
    modifiedChoice.playerStatEffects = {
      ...modifiedChoice.playerStatEffects,
      sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 5
    };
    modifiedChoice.consequence += ' • Hemophobia distress';
  }
  
  // Haunted Dreams - penalty to rest and recovery, occasional random sanity loss
  if (hasPlayerFlaw(character, 'nightmares')) {
    if (isRestChoice(choice)) {
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        healthChange: Math.max(-5, (modifiedChoice.playerStatEffects?.healthChange || 0) - 3),
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 2
      };
      modifiedChoice.consequence += ' • Nightmares haunt your rest';
    }
    // Random nightmare trigger (10% chance on any choice)
    if (Math.random() < 0.1) {
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 3
      };
      modifiedChoice.consequence += ' • Sudden nightmare flashback';
    }
  }
  
  // Overly Trusting - bonus to trust choices but penalty to suspicious ones, vulnerable to deception
  if (hasPlayerFlaw(character, 'trusting')) {
    if (isTrustingChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 2
      }));
      modifiedChoice.consequence += ' • Trusting nature';
    } else if (isSuspiciousChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange - 2)
      }));
      modifiedChoice.consequence += ' • Struggles with suspicion';
    }
    // Penalty when dealing with deceptive characters
    if (isDeceptionChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange - 4)
      }));
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 3
      };
      modifiedChoice.consequence += ' • Trusting nature exploited';
    }
  }
  
  // Reckless - bonus to bold choices, penalty to cautious ones, health risks
  if (hasPlayerFlaw(character, 'reckless')) {
    if (isRecklessChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 2
      }));
      modifiedChoice.consequence += ' • Reckless enthusiasm';
      // But with health risk
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        healthChange: (modifiedChoice.playerStatEffects?.healthChange || 0) - 2
      };
    } else if (isCautiousChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange - 1)
      }));
      modifiedChoice.consequence += ' • Restraint is difficult';
    }
  }
  
  // Dangerously Curious - bonus to investigative choices, but compulsive exploration
  if (hasPlayerFlaw(character, 'curious') && isInvestigativeChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Irresistible curiosity';
    // But curiosity can be dangerous
    if (isDangerousChoice(choice)) {
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        healthChange: (modifiedChoice.playerStatEffects?.healthChange || 0) - 3,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 2
      };
    }
  }
  
  // Socially Isolated - penalty to group interactions, bonus to solitary actions
  if (hasPlayerFlaw(character, 'isolated')) {
    if (isGroupChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange - 2)
      }));
      modifiedChoice.consequence += ' • Social isolation shows';
    } else if (isSolitaryChoice(choice)) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 2
      }));
      modifiedChoice.consequence += ' • Comfortable alone';
    }
  }
  
  // Haunted Past - occasional trauma triggers, complications from past
  if (hasPlayerFlaw(character, 'haunted')) {
    if (isPastRelatedChoice(choice)) {
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 8
      };
      modifiedChoice.consequence += ' • Haunted past resurfaces';
    }
    // Random trauma trigger (5% chance on any choice)
    if (Math.random() < 0.05) {
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) - 5
      };
      modifiedChoice.consequence += ' • Past trauma triggered';
    }
  }
  
  return modifiedChoice;
}

function applyBoonEffects(choice: Choice, character: PlayerCharacter): Choice {
  let modifiedChoice = { ...choice };
  
  // Mental Fortitude and Iron Will - sanity protection mechanics
  const hasMentalFortitude = hasPlayerBoon(character, 'resistance');
  const hasIronWill = hasPlayerBoon(character, 'willpower');
  
  // Apply sanity loss reduction/immunity
  if (modifiedChoice.playerStatEffects?.sanityChange && modifiedChoice.playerStatEffects.sanityChange < 0) {
    if (hasMentalFortitude && hasIronWill) {
      // Complete immunity to sanity loss
      modifiedChoice.playerStatEffects.sanityChange = 0;
      modifiedChoice.consequence += ' • Mental fortitude & iron will provide complete protection';
    } else if (hasMentalFortitude) {
      // 50% reduction in sanity loss
      modifiedChoice.playerStatEffects.sanityChange = Math.ceil(modifiedChoice.playerStatEffects.sanityChange / 2);
      modifiedChoice.consequence += ' • Mental fortitude reduces psychological impact';
    } else if (hasIronWill) {
      // 25% reduction in sanity loss
      modifiedChoice.playerStatEffects.sanityChange = Math.ceil(modifiedChoice.playerStatEffects.sanityChange * 0.75);
      modifiedChoice.consequence += ' • Iron will provides some protection';
    }
  }
  
  // Psychic Sensitivity - bonus to supernatural awareness
  if (hasPlayerBoon(character, 'psychic') && isSupernaturalChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 4
    }));
    modifiedChoice.consequence += ' • Psychic insight';
  }
  
  // Mental Fortitude - bonus to resistance choices
  if (hasPlayerBoon(character, 'resistance') && isResistanceChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Mental resistance';
  }
  
  // Natural Charm - bonus to all social interactions
  if (hasPlayerBoon(character, 'charm') && isSocialChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Natural charm';
  }
  
  // Fearless - bonus to brave choices
  if (hasPlayerBoon(character, 'courage') && isBraveChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Fearless courage';
  }
  
  // Blood Sight - bonus to supernatural detection
  if (hasPlayerBoon(character, 'bloodsight') && isDetectionChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 3
    }));
    modifiedChoice.consequence += ' • Blood sight reveals truth';
  }
  
  // Iron Will - bonus to determination choices
  if (hasPlayerBoon(character, 'willpower') && isDeterminationChoice(choice)) {
    modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
      ...effect,
      affectionChange: effect.affectionChange + 2
    }));
    modifiedChoice.consequence += ' • Iron will prevails';
  }
  
  // Unnaturally Lucky - miraculous saves and fortuitous discoveries
  if (hasPlayerBoon(character, 'lucky')) {
    // 15% chance to avoid negative consequences entirely
    if (modifiedChoice.playerStatEffects?.sanityChange && modifiedChoice.playerStatEffects.sanityChange < 0 && Math.random() < 0.15) {
      modifiedChoice.playerStatEffects.sanityChange = 0;
      modifiedChoice.consequence += ' • Lucky escape from psychological harm';
    }
    
    if (modifiedChoice.playerStatEffects?.healthChange && modifiedChoice.playerStatEffects.healthChange < 0 && Math.random() < 0.15) {
      modifiedChoice.playerStatEffects.healthChange = 0;
      modifiedChoice.consequence += ' • Miraculous avoidance of injury';
    }
    
    // 20% chance to discover hidden information or opportunities
    if (isInvestigativeChoice(choice) && Math.random() < 0.2) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 5
      }));
      modifiedChoice.consequence += ' • Lucky discovery reveals hidden secrets';
    }
    
    // 10% chance to turn dangerous situations into opportunities
    if (isDangerousChoice(choice) && Math.random() < 0.1) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 8
      }));
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        healthChange: (modifiedChoice.playerStatEffects?.healthChange || 0) + 5,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) + 3
      };
      modifiedChoice.consequence += ' • Incredible luck turns danger into triumph';
    }
    
    // 25% chance for serendipitous social encounters
    if (isSocialChoice(choice) && Math.random() < 0.25) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 3
      }));
      modifiedChoice.consequence += ' • Fortuitous timing improves social outcome';
    }
    
    // 12% chance to avoid negative affection changes
    const hasNegativeAffection = modifiedChoice.effects.some(effect => effect.affectionChange < 0);
    if (hasNegativeAffection && Math.random() < 0.12) {
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: Math.max(0, effect.affectionChange)
      }));
      modifiedChoice.consequence += ' • Lucky circumstances prevent relationship damage';
    }
    
    // Enhanced effects for specific choice types
    if (isLuckyChoice(choice)) {
      // Extra bonus when explicitly choosing luck-based options
      modifiedChoice.effects = modifiedChoice.effects.map(effect => ({
        ...effect,
        affectionChange: effect.affectionChange + 4
      }));
      modifiedChoice.consequence += ' • Supernatural luck amplifies fortune';
    }
    
    if (isDiscoveryChoice(choice) && Math.random() < 0.3) {
      // Higher chance for discovery bonuses
      modifiedChoice.consequence += ' • Luck leads to unexpected findings';
      modifiedChoice.playerStatEffects = {
        ...modifiedChoice.playerStatEffects,
        sanityChange: (modifiedChoice.playerStatEffects?.sanityChange || 0) + 2
      };
    }
    
    // 8% chance for miraculous reversals in any negative situation
    const hasNegativeStats = (modifiedChoice.playerStatEffects?.healthChange && modifiedChoice.playerStatEffects.healthChange < -3) ||
                            (modifiedChoice.playerStatEffects?.sanityChange && modifiedChoice.playerStatEffects.sanityChange < -5);
    if (hasNegativeStats && Math.random() < 0.08) {
      modifiedChoice.playerStatEffects = {
        healthChange: Math.abs(modifiedChoice.playerStatEffects?.healthChange || 0),
        sanityChange: Math.abs(modifiedChoice.playerStatEffects?.sanityChange || 0)
      };
      modifiedChoice.consequence += ' • Miraculous luck reverses misfortune into blessing';
    }
  }
  
  return modifiedChoice;
}

// Generate special choices based on character traits
export function generateTraitSpecificChoices(character: PlayerCharacter | undefined): Choice[] {
  if (!character) return [];
  
  const specialChoices: Choice[] = [];
  
  // Psychic Sensitivity - add supernatural insight choices
  if (hasPlayerBoon(character, 'psychic')) {
    specialChoices.push({
      id: 'psychic_insight',
      text: '[Psychic] Focus your supernatural senses to read the area before proceeding.',
      consequence: 'Psychic insight • Gathers information then returns to door choices',
      effects: [],
      nextScene: 'psychic_door_insight'
    });
  }
  
  // Blood Sight - add detection choices
  if (hasPlayerBoon(character, 'bloodsight')) {
    specialChoices.push({
      id: 'blood_sight_analysis',
      text: '[Blood Sight] Use your rare gift to examine supernatural presences before entering.',
      consequence: 'Blood sight • Detects supernatural nature then returns to door choices',
      effects: [],
      nextScene: 'blood_sight_door_analysis'
    });
  }
  
  // Athletic trait - add physical option
  if (hasPlayerTrait(character, 'athletic')) {
    specialChoices.push({
      id: 'athletic_approach',
      text: '[Athletic] Use your physical prowess to demonstrate confidence.',
      consequence: 'Athletic demonstration • Shows physical capability',
      effects: [{ characterId: 'lilith', affectionChange: 8 }],
      nextScene: 'athletic_demonstration'
    });
  }
  
  // Creative trait - add artistic option
  if (hasPlayerTrait(character, 'creative')) {
    specialChoices.push({
      id: 'creative_perspective',
      text: '[Creative] Offer a unique artistic perspective on the situation.',
      consequence: 'Creative insight • Shows artistic soul and unique viewpoint',
      effects: [{ characterId: 'morgana', affectionChange: 10 }, { characterId: 'elena', affectionChange: 15 }],
      nextScene: 'creative_insight'
    });
  }

  // Charismatic trait - add social manipulation option
  if (hasPlayerTrait(character, 'charismatic')) {
    specialChoices.push({
      id: 'charismatic_influence',
      text: '[Charismatic] Use your natural charm to influence the social dynamics.',
      consequence: 'Social influence • Affects group relationships',
      effects: [{ characterId: 'isadora', affectionChange: 20 }, { characterId: 'valentina', affectionChange: 10 }],
      nextScene: 'charismatic_manipulation'
    });
  }

  // Intelligent trait - add analytical approach
  if (hasPlayerTrait(character, 'intelligent')) {
    specialChoices.push({
      id: 'analytical_approach',
      text: '[Intelligent] Analyze the underlying motivations and power structures at play.',
      consequence: 'Strategic analysis • Reveals hidden agendas',
      effects: [{ characterId: 'celeste', affectionChange: 25 }, { characterId: 'luna', affectionChange: 15 }],
      nextScene: 'analytical_revelation'
    });
  }

  // Empathetic trait - add emotional connection option
  if (hasPlayerTrait(character, 'empathetic')) {
    specialChoices.push({
      id: 'empathetic_understanding',
      text: '[Empathetic] Sense the emotional undercurrents and address them directly.',
      consequence: 'Emotional insight • Connects with hidden pain',
      effects: [{ characterId: 'elena', affectionChange: 30 }, { characterId: 'seraphina', affectionChange: 20 }],
      nextScene: 'empathetic_breakthrough'
    });
  }

  // Intimidating trait - add dominance assertion
  if (hasPlayerTrait(character, 'intimidating')) {
    specialChoices.push({
      id: 'intimidating_presence',
      text: '[Intimidating] Assert your presence to command respect and attention.',
      consequence: 'Dominant display • Forces acknowledgment of strength',
      effects: [{ characterId: 'raven', affectionChange: 25 }, { characterId: 'valentina', affectionChange: 20 }],
      nextScene: 'dominance_established'
    });
  }

  // Unnaturally Lucky - add serendipitous discovery options
  if (hasPlayerBoon(character, 'lucky')) {
    specialChoices.push({
      id: 'lucky_discovery',
      text: '[Lucky] Trust in your supernatural fortune to guide you to something important.',
      consequence: 'Serendipitous discovery • Fortune reveals hidden opportunities',
      effects: [{ characterId: 'luna', affectionChange: 20 }, { characterId: 'celeste', affectionChange: 15 }],
      nextScene: 'fortuitous_revelation'
    });

    specialChoices.push({
      id: 'lucky_escape',
      text: '[Lucky] Take a seemingly risky path, trusting luck to see you through safely.',
      consequence: 'Miraculous escape • Danger becomes opportunity through fortune',
      effects: [{ characterId: 'raven', affectionChange: 18 }, { characterId: 'morgana', affectionChange: 12 }],
      playerStatEffects: { healthChange: 5, sanityChange: 3 },
      nextScene: 'lucky_breakthrough'
    });
  }
  
  return specialChoices;
}

// Special function to check if player can romance Umbra
export function canRomanceUmbra(character: PlayerCharacter | undefined): boolean {
  if (!character) return false;
  return hasPlayerBoon(character, 'resistance') && hasPlayerBoon(character, 'willpower');
}

// Function to unlock Umbra romance path when both mental boons are present
export function addUmbraRomanceChoices(choices: Choice[], character: PlayerCharacter | undefined): Choice[] {
  if (!canRomanceUmbra(character)) return choices;
  
  // Add special Umbra romance choices to cosmic/otherworldly scenes
  const umbraChoices: Choice[] = [
    {
      id: 'umbra_cosmic_connection',
      text: '[Mental Immunity] Reach out to the cosmic presence without fear of sanity loss.',
      consequence: 'Complete mental protection • Opens path to cosmic romance',
      effects: [{ characterId: 'umbra', affectionChange: 25 }],
      nextScene: 'umbra_first_contact'
    }
  ];
  
  return [...choices, ...umbraChoices];
}