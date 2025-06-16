import { useGame } from '../contexts/GameContext';
import { getAvailableRecoveryActions } from '../data/recoveryActions';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Heart, Brain, Clock, MapPin, Users } from 'lucide-react';

const typeIcons = {
  rest: Heart,
  meditation: Brain,
  social: Users,
  mystical: MapPin
};

export function RecoveryPanel() {
  const { gameState, performRecoveryAction } = useGame();
  const availableActions = getAvailableRecoveryActions(gameState);

  const formatCooldown = (actionId: string, cooldownHours: number) => {
    const lastUsed = gameState.lastRecoveryTimes[actionId];
    if (!lastUsed) return 'Ready';
    
    const now = Date.now();
    const cooldownMs = cooldownHours * 60 * 60 * 1000;
    const timeSinceUse = now - lastUsed;
    
    if (timeSinceUse >= cooldownMs) return 'Ready';
    
    const remaining = cooldownMs - timeSinceUse;
    const hoursRemaining = Math.ceil(remaining / (60 * 60 * 1000));
    return `${hoursRemaining}h remaining`;
  };

  const getHealthColor = (health: number) => {
    if (health >= 80) return 'text-green-400';
    if (health >= 60) return 'text-yellow-400';
    if (health >= 40) return 'text-orange-400';
    return 'text-red-400';
  };

  const getSanityColor = (sanity: number) => {
    if (sanity >= 80) return 'text-blue-400';
    if (sanity >= 60) return 'text-cyan-400';
    if (sanity >= 40) return 'text-purple-400';
    return 'text-pink-400';
  };

  return (
    <div className="space-y-6">
      {/* Player Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Your Current Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Health</span>
                <span className={`text-sm font-bold ${getHealthColor(gameState.playerStats.health)}`}>
                  {gameState.playerStats.health}/{gameState.playerStats.maxHealth}
                </span>
              </div>
              <Progress 
                value={gameState.playerStats.health} 
                max={gameState.playerStats.maxHealth}
                className="h-2"
              />
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Sanity</span>
                <span className={`text-sm font-bold ${getSanityColor(gameState.playerStats.sanity)}`}>
                  {gameState.playerStats.sanity}/{gameState.playerStats.maxSanity}
                </span>
              </div>
              <Progress 
                value={gameState.playerStats.sanity} 
                max={gameState.playerStats.maxSanity}
                className="h-2"
              />
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Times Rested:</span>
              <span className="ml-2 text-green-400">{gameState.playerStats.restCount}</span>
            </div>
            <div>
              <span className="text-gray-400">Times Meditated:</span>
              <span className="ml-2 text-blue-400">{gameState.playerStats.meditationCount}</span>
            </div>
          </div>
          
          <div className="mt-2 text-sm">
            <span className="text-gray-400">Current Location:</span>
            <span className="ml-2 text-purple-400 capitalize">
              {gameState.playerStats.location.replace(/_/g, ' ')}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Available Recovery Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Recovery Options</CardTitle>
          <p className="text-sm text-gray-400">
            Choose an action to restore your health and sanity
          </p>
        </CardHeader>
        <CardContent>
          {availableActions.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <Clock className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No recovery actions available right now.</p>
              <p className="text-xs mt-1">Try changing locations or wait for cooldowns.</p>
            </div>
          ) : (
            <div className="grid gap-3">
              {availableActions.map((action) => {
                const Icon = typeIcons[action.type];
                const cooldownStatus = formatCooldown(action.id, action.cooldown);
                const isReady = cooldownStatus === 'Ready';
                
                return (
                  <Card 
                    key={action.id}
                    className={`transition-colors ${isReady ? 'hover:bg-gray-800/50' : 'opacity-60'}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3 flex-1">
                          <Icon className="w-5 h-5 mt-1 text-purple-400" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="font-medium">{action.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {action.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-300 mb-3">
                              {action.description}
                            </p>
                            
                            <div className="flex items-center gap-4 text-xs">
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3 text-red-400" />
                                <span className="text-green-400">+{action.healthRestore}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Brain className="w-3 h-3 text-blue-400" />
                                <span className="text-blue-400">+{action.sanityRestore}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-400" />
                                <span className="text-gray-400">{action.cooldown}h cooldown</span>
                              </div>
                            </div>
                            
                            {action.requirements && (
                              <div className="mt-2 text-xs text-gray-400">
                                Requirements: {
                                  Object.entries(action.requirements).map(([key, value]) => {
                                    if (key === 'location') return `Location: ${String(value).replace(/_/g, ' ')}`;
                                    if (key === 'characterPresent') return `With: ${String(value).replace(/_/g, ' ')}`;
                                    if (key === 'minAffection') return `Affection: ${value}+`;
                                    return `${key}: ${value}`;
                                  }).join(', ')
                                }
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xs text-gray-400 mb-2">
                            {cooldownStatus}
                          </div>
                          <Button
                            size="sm"
                            disabled={!isReady}
                            onClick={() => performRecoveryAction(action.id)}
                            className="w-20"
                          >
                            {isReady ? 'Use' : 'Wait'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recovery Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Recovery Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-gray-400 space-y-1">
            <p>• Different locations offer unique recovery options</p>
            <p>• Building relationships unlocks social recovery methods</p>
            <p>• Meditation is more effective for sanity, rest for health</p>
            <p>• Some actions require specific characters to be present</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}