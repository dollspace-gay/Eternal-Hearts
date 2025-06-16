import { useGame } from '@/contexts/GameContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Heart, AlertTriangle, Info } from 'lucide-react';

interface HintData {
  type: 'relationship' | 'story' | 'warning' | 'opportunity';
  title: string;
  description: string;
  character?: string;
  priority: 'low' | 'medium' | 'high';
}

export function StoryHints() {
  const { gameState, currentScene } = useGame();

  const generateHints = (): HintData[] => {
    const hints: HintData[] = [];
    
    // Check character relationship levels and provide hints
    Object.values(gameState.characters).forEach(character => {
      if (character.affection >= 80) {
        hints.push({
          type: 'relationship',
          title: 'Deep Connection',
          description: `Your bond with ${character.name} has grown incredibly strong. Major story paths may be opening.`,
          character: character.id,
          priority: 'high'
        });
      } else if (character.affection >= 60) {
        hints.push({
          type: 'relationship',
          title: 'Growing Bond',
          description: `${character.name} is developing strong feelings. Continue showing interest to deepen this relationship.`,
          character: character.id,
          priority: 'medium'
        });
      } else if (character.affection <= 20 && character.affection > 0) {
        hints.push({
          type: 'warning',
          title: 'Strained Relationship',
          description: `Your relationship with ${character.name} seems distant. Consider choices that align with their values.`,
          character: character.id,
          priority: 'medium'
        });
      }
    });

    // Scene-specific hints based on current location
    if (currentScene?.choices) {
      const hasRomanticChoice = currentScene.choices.some((choice: any) => 
        choice.consequence.toLowerCase().includes('romantic') || 
        choice.consequence.toLowerCase().includes('attraction')
      );
      
      const hasRiskyChoice = currentScene.choices.some((choice: any) =>
        choice.consequence.toLowerCase().includes('risk') ||
        choice.consequence.toLowerCase().includes('danger') ||
        choice.effects.some((effect: any) => effect.affectionChange < -5)
      );

      if (hasRomanticChoice) {
        hints.push({
          type: 'opportunity',
          title: 'Romantic Moment',
          description: 'This scene offers opportunities to express romantic interest. Consider your feelings carefully.',
          priority: 'medium'
        });
      }

      if (hasRiskyChoice) {
        hints.push({
          type: 'warning',
          title: 'Careful Consideration',
          description: 'Some choices here may significantly impact your relationships. Think about long-term consequences.',
          priority: 'high'
        });
      }
    }

    // Character-specific storyline hints
    if (gameState.characters.lilith.affection >= 50) {
      hints.push({
        type: 'story',
        title: 'Vampire Lore',
        description: 'Lilith may be willing to share deeper secrets about vampire nature and transformation.',
        character: 'lilith',
        priority: 'medium'
      });
    }

    if (gameState.characters.morgana.affection >= 40) {
      hints.push({
        type: 'opportunity',
        title: 'Artistic Connection',
        description: 'Morgana appreciates those who understand her music. Show interest in her artistic expression.',
        character: 'morgana',
        priority: 'low'
      });
    }

    if (gameState.characters.seraphina.affection >= 45) {
      hints.push({
        type: 'story',
        title: 'Divine Mysteries',
        description: 'Seraphina may reveal more about her angelic past and the choices that led her here.',
        character: 'seraphina',
        priority: 'medium'
      });
    }

    // Transformation readiness hints
    const totalAffection = Object.values(gameState.characters).reduce((sum, char) => sum + char.affection, 0);
    const maxAffection = Math.max(...Object.values(gameState.characters).map(char => char.affection));
    
    if (maxAffection >= 90 && totalAffection >= 200) {
      hints.push({
        type: 'opportunity',
        title: 'Deepest Bonds',
        description: 'Your connections have reached extraordinary depths. Profound choices may become available.',
        priority: 'high'
      });
    }

    // Advanced player choice pattern analysis
    const choiceHistory = gameState.choiceHistory || [];
    if (choiceHistory.length >= 3) {
      const recentChoices = choiceHistory.slice(-5);
      
      // Analyze choice consequences for patterns
      const romanticChoices = recentChoices.filter(choice => 
        choice.consequence.toLowerCase().includes('romantic') ||
        choice.consequence.toLowerCase().includes('attraction') ||
        choice.consequence.toLowerCase().includes('love')
      );
      
      const cautiousChoices = recentChoices.filter(choice =>
        choice.consequence.toLowerCase().includes('cautious') ||
        choice.consequence.toLowerCase().includes('wisdom') ||
        choice.consequence.toLowerCase().includes('practical')
      );
      
      const boldChoices = recentChoices.filter(choice =>
        choice.consequence.toLowerCase().includes('bold') ||
        choice.consequence.toLowerCase().includes('confident') ||
        choice.consequence.toLowerCase().includes('commit')
      );

      // Identify player's dominant choice pattern
      if (romanticChoices.length >= 3) {
        hints.push({
          type: 'opportunity',
          title: 'Romantic Heart',
          description: 'You consistently choose love and connection. This path may lead to deep, transformative relationships.',
          priority: 'medium'
        });
      }
      
      if (cautiousChoices.length >= 3) {
        hints.push({
          type: 'story',
          title: 'Thoughtful Approach',
          description: 'Your careful consideration is building trust slowly but surely. Patience often yields the deepest bonds.',
          priority: 'medium'
        });
      }
      
      if (boldChoices.length >= 3) {
        hints.push({
          type: 'warning',
          title: 'Bold Path',
          description: 'Your confident choices create strong impressions. Some characters may find this attractive, others overwhelming.',
          priority: 'medium'
        });
      }

      // Character focus analysis
      const characterChoiceCount: Record<string, number> = {};
      recentChoices.forEach(choice => {
        choice.characterEffects.forEach(effect => {
          if (effect.affectionChange > 0) {
            characterChoiceCount[effect.characterId] = (characterChoiceCount[effect.characterId] || 0) + 1;
          }
        });
      });

      const focusedCharacter = Object.entries(characterChoiceCount)
        .reduce((max, [char, count]) => count > (max[1] || 0) ? [char, count] : max, ['', 0]);

      if (focusedCharacter[1] >= 3 && gameState.characters[focusedCharacter[0]]) {
        const character = gameState.characters[focusedCharacter[0]];
        hints.push({
          type: 'relationship',
          title: 'Focused Affection',
          description: `You're clearly drawn to ${character.name}. Continue this path to unlock their unique storyline.`,
          character: focusedCharacter[0],
          priority: 'medium'
        });
      }
    }

    // Relationship momentum analysis
    if (choiceHistory.length >= 2) {
      const recentAffectionChanges: Record<string, number[]> = {};
      choiceHistory.slice(-3).forEach(choice => {
        choice.characterEffects.forEach(effect => {
          if (!recentAffectionChanges[effect.characterId]) {
            recentAffectionChanges[effect.characterId] = [];
          }
          recentAffectionChanges[effect.characterId].push(effect.affectionChange);
        });
      });

      Object.entries(recentAffectionChanges).forEach(([characterId, changes]) => {
        const totalChange = changes.reduce((sum, change) => sum + change, 0);
        const character = gameState.characters[characterId];
        
        if (totalChange >= 15 && character) {
          hints.push({
            type: 'opportunity',
            title: 'Building Momentum',
            description: `Your relationship with ${character.name} is gaining momentum. Major story developments may be ahead.`,
            character: characterId,
            priority: 'high'
          });
        } else if (totalChange <= -10 && character) {
          hints.push({
            type: 'warning',
            title: 'Relationship Strain',
            description: `Recent choices have created tension with ${character.name}. Consider their values in future decisions.`,
            character: characterId,
            priority: 'high'
          });
        }
      });
    }

    // Sort by priority and limit to most relevant hints
    return hints
      .sort((a, b) => {
        const priorityOrder = { high: 3, medium: 2, low: 1 };
        return priorityOrder[b.priority] - priorityOrder[a.priority];
      })
      .slice(0, 4); // Show max 4 hints to avoid overwhelming
  };

  const hints = generateHints();
  
  if (hints.length === 0) {
    return null;
  }

  const getHintIcon = (type: HintData['type']) => {
    switch (type) {
      case 'relationship':
        return <Heart className="w-4 h-4" />;
      case 'story':
        return <Info className="w-4 h-4" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4" />;
      case 'opportunity':
        return <Lightbulb className="w-4 h-4" />;
    }
  };

  const getHintColor = (type: HintData['type']) => {
    switch (type) {
      case 'relationship':
        return 'bg-rose-500/20 text-rose-200 border-rose-500/30';
      case 'story':
        return 'bg-blue-500/20 text-blue-200 border-blue-500/30';
      case 'warning':
        return 'bg-amber-500/20 text-amber-200 border-amber-500/30';
      case 'opportunity':
        return 'bg-emerald-500/20 text-emerald-200 border-emerald-500/30';
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
        <Lightbulb className="w-4 h-4" />
        Story Insights
      </h3>
      <div className="space-y-2">
        {hints.map((hint, index) => (
          <Card 
            key={index} 
            className={`border transition-all duration-200 hover:border-opacity-60 ${getHintColor(hint.type)}`}
          >
            <CardContent className="p-3">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-0.5">
                  {getHintIcon(hint.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xs font-medium truncate">{hint.title}</h4>
                    {hint.character && (
                      <Badge variant="outline" className="text-xs px-1 py-0">
                        {gameState.characters[hint.character]?.name}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {hint.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}