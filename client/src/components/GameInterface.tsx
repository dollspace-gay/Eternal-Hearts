import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { StoryPanel } from './StoryPanel';
import { ChoicePanel } from './ChoicePanel';
import { GameStateModal } from './GameStateModal';
import { SettingsMenu } from './SettingsMenu';

export function GameInterface() {
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  
  return (
    <div className="min-h-screen relative overflow-hidden bg-midnight">
      {/* Gothic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-gothic-purple/20 to-vampire-red/30"></div>
      
      {/* Settings Menu */}
      <SettingsMenu 
        onShowSaveModal={() => setShowSaveModal(true)}
        onShowLoadModal={() => setShowLoadModal(true)}
        onToggleSidebar={() => setShowSidebar(!showSidebar)}
      />
      
      {/* Main Game Interface */}
      <div className="relative z-10 flex min-h-screen">
        {/* Collapsible Sidebar */}
        {showSidebar && (
          <div className="fixed inset-0 z-40 lg:relative lg:inset-auto lg:w-80">
            <div className="absolute inset-0 bg-black/50 lg:hidden" onClick={() => setShowSidebar(false)} />
            <div className="relative z-50 h-full">
              <Sidebar onClose={() => setShowSidebar(false)} />
            </div>
          </div>
        )}
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <StoryPanel />
          <ChoicePanel />
        </div>
      </div>
      
      {/* Save Modal */}
      <GameStateModal
        isOpen={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        mode="save"
      />
      
      {/* Load Modal */}
      <GameStateModal
        isOpen={showLoadModal}
        onClose={() => setShowLoadModal(false)}
        mode="load"
      />
    </div>
  );
}
