import { GameProvider, useGame } from '../contexts/GameContext';
import { GameInterface } from '../components/GameInterface';
import { CharacterCreation } from '../components/CharacterCreation';
import { GameStateModal } from '../components/GameStateModal';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

function GameContent() {
  const { gameState } = useGame();
  const [showLoadModal, setShowLoadModal] = useState(false);
  
  useEffect(() => {
    // Check if we should show load modal based on URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('load') === 'true') {
      setShowLoadModal(true);
      // Clean up URL
      window.history.replaceState({}, '', '/game');
    }
  }, []);
  
  if (!gameState.isCharacterCreated) {
    return (
      <>
        <CharacterCreation />
        <GameStateModal 
          isOpen={showLoadModal} 
          onClose={() => setShowLoadModal(false)} 
          mode="load" 
        />
      </>
    );
  }
  
  return (
    <>
      <GameInterface />
      <GameStateModal 
        isOpen={showLoadModal} 
        onClose={() => setShowLoadModal(false)} 
        mode="load" 
      />
    </>
  );
}

export default function Game(): JSX.Element {
  return (
    <GameProvider>
      <ErrorBoundary
        fallback={(error, errorInfo, reset) => (
          <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-2xl w-full bg-red-950/20 border border-red-500/30 rounded-lg p-8 space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold text-red-200">Game Error</h1>
                <p className="text-gray-300">
                  The game encountered an error and couldn't continue. Your progress has been auto-saved.
                </p>
              </div>

              <div className="bg-black/40 p-4 rounded border border-red-500/20">
                <p className="text-sm text-red-300 font-mono">{error.message}</p>
              </div>

              <div className="flex gap-3">
                <Button
                  onClick={reset}
                  variant="outline"
                  className="border-red-500/30 text-red-200 hover:bg-red-500/20"
                >
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.href = '/'}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Return to Title Screen
                </Button>
              </div>
            </div>
          </div>
        )}
      >
        <GameContent />
      </ErrorBoundary>
    </GameProvider>
  );
}
