import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { useGame } from '../contexts/GameContext';
import { Settings, Users, Heart, Save, FolderOpen, RotateCcw, X, Code } from 'lucide-react';
import { useLocation } from 'wouter';

interface SettingsMenuProps {
  onShowSaveModal: () => void;
  onShowLoadModal: () => void;
  onToggleSidebar: () => void;
}

export function SettingsMenu({ onShowSaveModal, onShowLoadModal, onToggleSidebar }: SettingsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { gameState, resetGame } = useGame();
  const [location, navigate] = useLocation();
  
  const handleNewGame = () => {
    if (confirm('Are you sure you want to start a new game? This will erase your current progress.')) {
      resetGame();
      setIsOpen(false);
    }
  };
  
  return (
    <>
      {/* Settings Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        size="sm"
        className="fixed top-4 right-4 z-50 bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-white"
      >
        <Settings className="h-4 w-4" />
      </Button>
      
      {/* Settings Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="bg-gradient-to-br from-red-900 to-purple-900 border-red-500/30 max-w-md w-full max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-story text-xl font-bold text-white flex items-center justify-between">
              <span className="flex items-center">
                <Settings className="h-5 w-5 text-red-400 mr-2" />
                Game Menu
              </span>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="sm"
                className="text-gray-300 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* View Options */}
            <div>
              <h3 className="font-ui font-semibold text-white mb-3 flex items-center">
                View Options
              </h3>
              <div className="space-y-2">
                <Button 
                  onClick={() => { onToggleSidebar(); setIsOpen(false); }}
                  className="w-full bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-sm text-white"
                  variant="outline"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Relationships & Insights
                </Button>
              </div>
            </div>

            {/* Game Controls */}
            <div>
              <h3 className="font-ui font-semibold text-white mb-3 flex items-center">
                Game Controls
              </h3>
              <div className="space-y-2">
                <Button 
                  onClick={() => { onShowSaveModal(); setIsOpen(false); }}
                  className="w-full bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-sm text-white"
                  variant="outline"
                >
                  <Save className="mr-2 h-4 w-4" />
                  Save Game
                </Button>
                
                <Button 
                  onClick={() => { onShowLoadModal(); setIsOpen(false); }}
                  className="w-full bg-gray-800/70 hover:bg-red-600/50 border border-red-500/30 text-sm text-white"
                  variant="outline"
                >
                  <FolderOpen className="mr-2 h-4 w-4" />
                  Load Game
                </Button>
                
                <Button 
                  onClick={handleNewGame}
                  className="w-full bg-gray-800/70 hover:bg-orange-600/50 border border-orange-500/30 text-sm text-white"
                  variant="outline"
                >
                  <RotateCcw className="mr-2 h-4 w-4" />
                  New Game
                </Button>
                
                <Button 
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload();
                  }}
                  className="w-full bg-red-800/70 hover:bg-red-600/50 border border-red-500/30 text-xs text-white"
                  variant="outline"
                >
                  Clear All Data & Restart
                </Button>
              </div>
            </div>

            {/* Developer Mode */}
            <div>
              <h3 className="font-ui font-semibold text-white mb-3 flex items-center">
                <Code className="text-purple-400 mr-2 h-5 w-5" />
                Developer Tools
              </h3>
              <div className="space-y-2">
                <Button 
                  onClick={() => { 
                    navigate('/dev/story-tree'); 
                    setIsOpen(false); 
                  }}
                  className="w-full bg-purple-800/70 hover:bg-purple-600/50 border border-purple-500/30 text-sm text-white"
                  variant="outline"
                >
                  <Code className="mr-2 h-4 w-4" />
                  Story Tree Visualizer
                </Button>
                
                {location !== '/' && (
                  <Button 
                    onClick={() => { 
                      navigate('/'); 
                      setIsOpen(false); 
                    }}
                    className="w-full bg-gray-800/70 hover:bg-gray-600/50 border border-gray-500/30 text-sm text-white"
                    variant="outline"
                  >
                    Back to Game
                  </Button>
                )}
              </div>
            </div>
            
            <Separator className="bg-gray-700" />
            
            {/* Character Relationships - Only show in game mode */}
            {location === '/' && (
              <>
                <div>
                  <h3 className="font-ui font-semibold text-white mb-3 flex items-center">
                    <Users className="text-red-400 mr-2 h-5 w-5" />
                    Relationships
                  </h3>
                  
                  <div className="space-y-3">
                    {Object.values(gameState.characters).map((character) => (
                      <div key={character.id} className="bg-gray-800/50 rounded-lg p-3 border border-red-500/20">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                            <Heart className="h-4 w-4 text-white" />
                          </div>
                          <span className="font-story font-semibold text-white">{character.name}</span>
                        </div>
                        <Progress 
                          value={character.affection} 
                          className="w-full h-2 mb-1 bg-gray-700/70"
                        />
                        <span className="text-xs text-gray-300">{character.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="bg-gray-700" />
                
                {/* Player Stats */}
                <div>
                  <h3 className="font-ui font-semibold text-white mb-3">Your Status</h3>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <div className="space-y-2 text-xs">
                      <div className="flex">
                        <span className="text-gray-300">Health: </span>
                        <span className={`${gameState.playerStats.health > 75 ? 'text-green-400' : 
                          gameState.playerStats.health > 50 ? 'text-yellow-400' : 
                          gameState.playerStats.health > 25 ? 'text-orange-400' : 'text-red-400'}`}>
                          {gameState.playerStats.health}/100
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-300">Sanity: </span>
                        <span className={`${gameState.playerStats.sanity > 75 ? 'text-green-400' : 
                          gameState.playerStats.sanity > 50 ? 'text-yellow-400' : 
                          gameState.playerStats.sanity > 25 ? 'text-orange-400' : 'text-red-400'}`}>
                          {gameState.playerStats.sanity}/100
                        </span>
                      </div>
                      <div className="flex">
                        <span className="text-gray-300">Location: </span>
                        <span className="text-white">{gameState.playerStats.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}