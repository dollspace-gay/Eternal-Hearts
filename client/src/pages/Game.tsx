import { GameProvider, useGame } from '../contexts/GameContext';
import { GameInterface } from '../components/GameInterface';
import { CharacterCreation } from '../components/CharacterCreation';
import { GameStateModal } from '../components/GameStateModal';
import { useEffect, useState } from 'react';

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

export default function Game() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}
