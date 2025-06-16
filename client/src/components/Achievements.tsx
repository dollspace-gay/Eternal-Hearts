import { useGame } from '../contexts/GameContext';
import { achievements } from '../data/achievements';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Trophy, Lock, Star, Heart, BookOpen, Map, Shield } from 'lucide-react';

const categoryIcons = {
  story: BookOpen,
  relationship: Heart,
  exploration: Map,
  survival: Shield
};

const categoryColors = {
  story: 'text-blue-400',
  relationship: 'text-red-400',
  exploration: 'text-yellow-400',
  survival: 'text-green-400'
};

export function Achievements() {
  const { gameState } = useGame();

  const achievementsByCategory = {
    all: achievements,
    story: achievements.filter(a => a.category === 'story'),
    relationship: achievements.filter(a => a.category === 'relationship'),
    exploration: achievements.filter(a => a.category === 'exploration'),
    survival: achievements.filter(a => a.category === 'survival')
  };

  const unlockedCount = gameState.achievements.filter(a => a.unlocked).length;
  const totalCount = achievements.length;
  const progressPercentage = (unlockedCount / totalCount) * 100;

  const isUnlocked = (achievementId: string) => {
    return gameState.achievements.some(a => a.id === achievementId && a.unlocked);
  };

  const getUnlockDate = (achievementId: string) => {
    const achievement = gameState.achievements.find(a => a.id === achievementId && a.unlocked);
    return achievement?.unlockedAt ? new Date(achievement.unlockedAt).toLocaleDateString() : null;
  };

  const renderAchievementCard = (achievement: any) => {
    const unlocked = isUnlocked(achievement.id);
    const unlockDate = getUnlockDate(achievement.id);
    const CategoryIcon = categoryIcons[achievement.category as keyof typeof categoryIcons];

    return (
      <Card 
        key={achievement.id}
        className={`transition-all ${unlocked ? 'bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 border-yellow-500/30' : 'opacity-60'}`}
      >
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${unlocked ? 'bg-yellow-500/20' : 'bg-gray-800'}`}>
              {unlocked ? (
                <Trophy className="w-6 h-6 text-yellow-400" />
              ) : (
                <Lock className="w-6 h-6 text-gray-500" />
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className={`font-semibold ${unlocked ? 'text-yellow-200' : 'text-gray-400'}`}>
                  {achievement.name}
                </h3>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${categoryColors[achievement.category as keyof typeof categoryColors] || 'text-purple-300'}`}
                >
                  <CategoryIcon className="w-3 h-3 mr-1" />
                  {achievement.category}
                </Badge>
              </div>
              
              <p className={`text-sm mb-2 ${unlocked ? 'text-gray-200' : 'text-gray-500'}`}>
                {achievement.description}
              </p>
              
              {unlocked && unlockDate && (
                <div className="flex items-center gap-2 text-xs text-yellow-400">
                  <Star className="w-3 h-3" />
                  <span>Unlocked on {unlockDate}</span>
                </div>
              )}
              
              {!unlocked && (
                <div className="text-xs text-gray-500">
                  🔒 Keep playing to unlock this achievement
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-400" />
            Achievement Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm font-bold text-yellow-400">
                {unlockedCount} / {totalCount}
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
            
            <div className="grid grid-cols-4 gap-4 text-center">
              {Object.entries(categoryColors).map(([category, color]) => {
                const categoryAchievements = achievementsByCategory[category as keyof typeof achievementsByCategory];
                const categoryUnlocked = categoryAchievements.filter(a => isUnlocked(a.id)).length;
                const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
                
                return (
                  <div key={category} className="space-y-2">
                    <CategoryIcon className={`w-6 h-6 mx-auto ${categoryColors[category as keyof typeof categoryColors]}`} />
                    <div className="text-xs font-medium capitalize">{category}</div>
                    <div className="text-xs text-gray-400">
                      {categoryUnlocked} / {categoryAchievements.length}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements List */}
      <Card>
        <CardHeader>
          <CardTitle>All Achievements</CardTitle>
          <p className="text-sm text-gray-400">
            Discover and unlock achievements as you progress through your journey
          </p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="story">Story</TabsTrigger>
              <TabsTrigger value="relationship">Relationships</TabsTrigger>
              <TabsTrigger value="exploration">Exploration</TabsTrigger>
              <TabsTrigger value="survival">Survival</TabsTrigger>
            </TabsList>
            
            {Object.entries(achievementsByCategory).map(([category, categoryAchievements]) => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-3">
                  {categoryAchievements.map(renderAchievementCard)}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Recent Unlocks */}
      {gameState.achievements.some(a => a.unlocked) && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {gameState.achievements
                .filter(a => a.unlocked)
                .sort((a, b) => (b.unlockedAt || 0) - (a.unlockedAt || 0))
                .slice(0, 3)
                .map(achievement => {
                  const fullAchievement = achievements.find(a => a.id === achievement.id);
                  if (!fullAchievement) return null;
                  
                  return (
                    <div key={achievement.id} className="flex items-center gap-3 p-2 bg-yellow-900/10 rounded">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <div className="flex-1">
                        <span className="text-sm font-medium text-yellow-200">
                          {fullAchievement.name}
                        </span>
                        <div className="text-xs text-gray-400">
                          {achievement.unlockedAt && new Date(achievement.unlockedAt).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}