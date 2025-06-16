import { Button } from '@/components/ui/button';
import { useGame } from '../contexts/GameContext';
import { Crosshair } from 'lucide-react';
import { applyCharacterEffects, generateTraitSpecificChoices } from '../utils/characterEffects';

export function ChoicePanel() {
  const { currentScene, makeChoice, gameState } = useGame();
  
  if (!currentScene || !currentScene.choices.length) {
    return null;
  }
  
  // Apply character effects to choices and add trait-specific options
  const baseChoices = applyCharacterEffects(currentScene.choices, gameState.playerCharacter);
  const traitChoices = generateTraitSpecificChoices(gameState.playerCharacter);
  const allChoices = [...baseChoices, ...traitChoices];
  


  const getChoiceStyles = (choice: any) => {
    const isTraitChoice = choice.text.includes('[');
    
    let baseClasses = "group w-full text-center p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 active:scale-95 min-h-[60px] flex items-center justify-center";
    
    if (isTraitChoice) {
      return baseClasses + " bg-gradient-to-r from-purple-900 to-purple-800 border-purple-600 hover:border-purple-400 text-white hover:shadow-purple-500/50 hover:shadow-lg";
    } else {
      return baseClasses + " bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:border-gray-400 text-white hover:shadow-white/20 hover:shadow-lg";
    }
  };
  
  return (
    <div className="bg-gradient-to-t from-red-900/90 to-purple-900/90 backdrop-blur-sm border-t border-red-500/30 p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="font-ui font-semibold text-white mb-4 flex items-center">
          <Crosshair className="text-red-400 mr-2 h-5 w-5" />
          Choose your response:
        </h3>
        
        <div className="space-y-3">
          {allChoices.map((choice, index) => {
            const isTraitChoice = choice.text.includes('[');
            
            return (
              <Button
                key={choice.id}
                onClick={() => makeChoice(choice)}
                className={getChoiceStyles(choice)}
                variant="outline"
              >
                <div className="w-full">
                  <p className="font-story text-white leading-relaxed text-center">
                    {choice.text}
                  </p>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
