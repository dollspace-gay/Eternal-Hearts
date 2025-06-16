import { useGame } from '../contexts/GameContext';
import { Heart } from 'lucide-react';

export function StoryPanel() {
  const { currentScene } = useGame();
  
  if (!currentScene) {
    return (
      <div className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-midnight/60 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-blood-red/20">
            <p className="font-story text-lg text-parchment text-center">
              Loading story...
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex-1 p-8 lg:p-12 overflow-y-auto relative">
      {/* Background Image */}
      {currentScene.background && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url(${currentScene.background})`,
            filter: 'blur(1px) brightness(0.4)'
          }}
        />
      )}
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Scene Header */}
        <div className="mb-8 animate-fade-in">
          <h2 className="font-story text-2xl lg:text-4xl font-bold text-white text-shadow mb-2">
            {currentScene.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
        </div>
        
        {/* Story Text */}
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 lg:p-12 border border-red-500/30 mb-8 animate-slide-up shadow-2xl">
          <div className="font-story text-lg lg:text-xl story-text text-white leading-relaxed">
            {currentScene.text.map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        
        {/* Character Portrait */}
        {currentScene.character && (
          <div className="mb-8 animate-fade-in">
            <div className="bg-gradient-to-br from-red-900/40 to-purple-900/40 rounded-xl p-6 border border-red-500/30">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 pulse-glow">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-story text-xl font-bold text-white mb-1">
                    {currentScene.character.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">
                    {currentScene.character.title}
                  </p>
                  <p className="text-gray-200 text-sm font-ui">
                    <Heart className="inline-block text-red-400 mr-1 h-4 w-4" />
                    Currently: {currentScene.character.status}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
