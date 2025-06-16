import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useGame } from '../contexts/GameContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { X, Save, FolderOpen, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SaveSlot {
  id: number;
  slotName: string;
  gameData: any;
  createdAt: string;
  updatedAt: string;
}

interface GameStateModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'save' | 'load';
}

export function GameStateModal({ isOpen, onClose, mode }: GameStateModalProps) {
  const { gameState, loadGame, saveGame } = useGame();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [newSlotName, setNewSlotName] = useState('');
  
  const { data: saveSlots = [], isLoading } = useQuery<SaveSlot[]>({
    queryKey: ['/api/game-states'],
    enabled: isOpen,
  });
  
  const saveMutation = useMutation({
    mutationFn: async (data: { slotName: string; gameData: any }) => {
      const response = await apiRequest('POST', '/api/game-states', data);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/game-states'] });
      toast({
        title: "Game Saved",
        description: "Your game has been saved successfully.",
      });
      setNewSlotName('');
    },
    onError: () => {
      toast({
        title: "Save Failed",
        description: "Failed to save your game. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest('DELETE', `/api/game-states/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/game-states'] });
      toast({
        title: "Save Deleted",
        description: "Save file has been deleted successfully.",
      });
    },
    onError: () => {
      toast({
        title: "Delete Failed",
        description: "Failed to delete save file. Please try again.",
        variant: "destructive",
      });
    },
  });
  
  const handleSave = () => {
    if (!newSlotName.trim()) {
      toast({
        title: "Enter Slot Name",
        description: "Please enter a name for your save slot.",
        variant: "destructive",
      });
      return;
    }
    
    saveMutation.mutate({
      slotName: newSlotName,
      gameData: gameState,
    });
  };
  
  const handleLoad = (slot: SaveSlot) => {
    loadGame(slot.gameData);
    onClose();
    toast({
      title: "Game Loaded",
      description: `Loaded save: ${slot.slotName}`,
    });
  };
  
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  
  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };
  
  // Also handle localStorage saves for backward compatibility
  const getLocalStorageSaves = () => {
    const saves = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('crimsonEmbrace_save_')) {
        const slotName = key.replace('crimsonEmbrace_save_', '');
        const data = localStorage.getItem(key);
        if (data) {
          try {
            const gameData = JSON.parse(data);
            saves.push({
              id: `local_${slotName}`,
              slotName,
              gameData,
              timestamp: gameData.timestamp || 'Unknown',
              isLocal: true
            });
          } catch (e) {
            // Ignore invalid saves
          }
        }
      }
    }
    return saves;
  };
  
  const localSaves = getLocalStorageSaves();
  const allSaves = [...saveSlots, ...localSaves];
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-vampire-red to-gothic-purple border-blood-red/30 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-story text-xl font-bold text-parchment flex items-center justify-between">
            {mode === 'save' ? 'Save Game' : 'Load Game'}
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="text-moonlight hover:text-parchment"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>
        
        {mode === 'save' && (
          <div className="mb-4">
            <div className="flex gap-2">
              <Input
                value={newSlotName}
                onChange={(e) => setNewSlotName(e.target.value)}
                placeholder="Enter save name..."
                className="bg-midnight/70 border-blood-red/30 text-parchment placeholder:text-moonlight/50"
              />
              <Button
                onClick={handleSave}
                disabled={saveMutation.isPending}
                className="bg-blood-red/20 hover:bg-blood-red/40"
              >
                <Save className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
        
        <div className="space-y-3">
          {isLoading ? (
            <div className="text-center text-parchment">Loading saves...</div>
          ) : allSaves.length === 0 ? (
            <div className="text-center text-moonlight/70">No save files found</div>
          ) : (
            allSaves.map((slot: any) => (
              <div key={slot.id} className="bg-midnight/70 rounded-lg p-3 border border-blood-red/20">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="font-ui font-semibold text-sm text-parchment">
                      {slot.slotName}
                    </p>
                    <p className="text-xs text-moonlight/70">
                      {slot.isLocal ? formatTimestamp(slot.timestamp) : formatTimestamp(slot.updatedAt)}
                      {slot.isLocal && ' (Local)'}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    {mode === 'load' && (
                      <Button
                        onClick={() => handleLoad(slot)}
                        size="sm"
                        className="bg-blood-red/20 hover:bg-blood-red/40 text-xs"
                      >
                        <FolderOpen className="h-3 w-3 mr-1" />
                        Load
                      </Button>
                    )}
                    {mode === 'save' && (
                      <Button
                        onClick={() => {
                          saveMutation.mutate({
                            slotName: slot.slotName,
                            gameData: gameState,
                          });
                        }}
                        size="sm"
                        className="bg-vampire-red/20 hover:bg-vampire-red/40 text-xs"
                        disabled={saveMutation.isPending}
                      >
                        <Save className="h-3 w-3 mr-1" />
                        Overwrite
                      </Button>
                    )}
                    {!slot.isLocal && (
                      <Button
                        onClick={() => handleDelete(slot.id)}
                        size="sm"
                        variant="destructive"
                        className="text-xs"
                        disabled={deleteMutation.isPending}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
