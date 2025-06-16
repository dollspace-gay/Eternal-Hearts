import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { PlayerTrait, PlayerFlaw, PlayerBoon, PlayerCharacter } from '../types/game';
import { availableTraits, availableFlaws, availableBoons, startingPoints } from '../data/characterCreation';
import { useGame } from '../contexts/GameContext';
import { Heart, User, Zap, Shield, Star, AlertTriangle } from 'lucide-react';

export function CharacterCreation() {
  const { createCharacter } = useGame();
  const [playerName, setPlayerName] = useState('');
  const [selectedTraits, setSelectedTraits] = useState<PlayerTrait[]>([]);
  const [selectedFlaws, setSelectedFlaws] = useState<PlayerFlaw[]>([]);
  const [selectedBoons, setSelectedBoons] = useState<PlayerBoon[]>([]);
  
  const flawPoints = selectedFlaws.reduce((sum, flaw) => sum + flaw.points, 0);
  const boonCost = selectedBoons.reduce((sum, boon) => sum + boon.cost, 0);
  const availablePoints = startingPoints + flawPoints;
  const remainingPoints = availablePoints - boonCost;
  
  const toggleTrait = (trait: PlayerTrait) => {
    const existingIndex = selectedTraits.findIndex(t => t.category === trait.category);
    if (existingIndex >= 0) {
      if (selectedTraits[existingIndex].id === trait.id) {
        setSelectedTraits(selectedTraits.filter((_, i) => i !== existingIndex));
      } else {
        const newTraits = [...selectedTraits];
        newTraits[existingIndex] = trait;
        setSelectedTraits(newTraits);
      }
    } else {
      setSelectedTraits([...selectedTraits, trait]);
    }
  };
  
  const toggleFlaw = (flaw: PlayerFlaw) => {
    if (selectedFlaws.find(f => f.id === flaw.id)) {
      setSelectedFlaws(selectedFlaws.filter(f => f.id !== flaw.id));
    } else {
      setSelectedFlaws([...selectedFlaws, flaw]);
    }
  };
  
  const toggleBoon = (boon: PlayerBoon) => {
    if (selectedBoons.find(b => b.id === boon.id)) {
      setSelectedBoons(selectedBoons.filter(b => b.id !== boon.id));
    } else if (remainingPoints >= boon.cost) {
      setSelectedBoons([...selectedBoons, boon]);
    }
  };
  
  const canFinishCreation = () => {
    return playerName.trim() !== '' && 
           selectedTraits.length === 3 && // One from each category
           remainingPoints >= 0;
  };
  
  const handleCreateCharacter = () => {
    if (!canFinishCreation()) return;
    
    const character: PlayerCharacter = {
      name: playerName.trim(),
      traits: selectedTraits,
      flaws: selectedFlaws,
      boons: selectedBoons,
      availablePoints: remainingPoints
    };
    
    createCharacter(character);
  };
  
  const getTraitIcon = (category: string) => {
    switch (category) {
      case 'physical': return Shield;
      case 'social': return Heart;
      case 'mental': return Zap;
      default: return Star;
    }
  };
  
  return (
    <div className="min-h-screen bg-midnight relative overflow-hidden">
      {/* Gothic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-purple-900/20 to-red-900/30"></div>
      
      <div className="relative z-10 p-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="font-story text-4xl font-bold text-white text-shadow mb-2">
            <User className="inline-block text-red-400 mr-3 h-8 w-8" />
            Create Your Character
          </h1>
          <p className="text-gray-300 text-lg font-ui">
            Shape the mortal woman who will enter the world of vampires
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Character Name */}
          <div className="lg:col-span-3">
            <Card className="bg-gray-900/80 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white font-story">Character Name</CardTitle>
                <CardDescription className="text-gray-300">What is your name?</CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter your character's name..."
                  className="bg-gray-800/70 border-red-500/30 text-white placeholder:text-gray-400"
                />
              </CardContent>
            </Card>
          </div>
          
          {/* Traits */}
          <Card className="bg-gray-900/80 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white font-story">Core Traits</CardTitle>
              <CardDescription className="text-gray-300">
                Choose one trait from each category (Physical, Social, Mental)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {['physical', 'social', 'mental'].map(category => (
                <div key={category}>
                  <h4 className="text-white font-semibold mb-2 capitalize flex items-center">
                    {React.createElement(getTraitIcon(category), { className: "h-4 w-4 text-red-400 mr-2" })}
                    {category}
                  </h4>
                  <div className="space-y-2">
                    {availableTraits.filter(trait => trait.category === category).map(trait => (
                      <div
                        key={trait.id}
                        onClick={() => toggleTrait(trait)}
                        className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                          selectedTraits.find(t => t.id === trait.id)
                            ? 'bg-red-600/20 border-red-400/50'
                            : 'bg-gray-800/50 border-gray-600/30 hover:border-red-500/30'
                        }`}
                      >
                        <div className="font-semibold text-white text-sm">{trait.name}</div>
                        <div className="text-xs text-gray-300 mt-1">{trait.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Flaws */}
          <Card className="bg-gray-900/80 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white font-story flex items-center">
                <AlertTriangle className="h-5 w-5 text-orange-400 mr-2" />
                Flaws
              </CardTitle>
              <CardDescription className="text-gray-300">
                Take drawbacks to gain points for boons
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableFlaws.map(flaw => (
                <div
                  key={flaw.id}
                  onClick={() => toggleFlaw(flaw)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedFlaws.find(f => f.id === flaw.id)
                      ? 'bg-orange-600/20 border-orange-400/50'
                      : 'bg-gray-800/50 border-gray-600/30 hover:border-orange-500/30'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{flaw.name}</div>
                      <div className="text-xs text-gray-300 mt-1">{flaw.description}</div>
                    </div>
                    <Badge variant="outline" className="ml-2 text-orange-400 border-orange-400/50">
                      +{flaw.points}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Boons */}
          <Card className="bg-gray-900/80 border-red-500/30">
            <CardHeader>
              <CardTitle className="text-white font-story flex items-center">
                <Star className="h-5 w-5 text-blue-400 mr-2" />
                Boons
              </CardTitle>
              <CardDescription className="text-gray-300">
                Spend points on special abilities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {availableBoons.map(boon => (
                <div
                  key={boon.id}
                  onClick={() => toggleBoon(boon)}
                  className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
                    selectedBoons.find(b => b.id === boon.id)
                      ? 'bg-blue-600/20 border-blue-400/50'
                      : remainingPoints >= boon.cost
                        ? 'bg-gray-800/50 border-gray-600/30 hover:border-blue-500/30'
                        : 'bg-gray-800/30 border-gray-700/30 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">{boon.name}</div>
                      <div className="text-xs text-gray-300 mt-1">{boon.description}</div>
                    </div>
                    <Badge variant="outline" className="ml-2 text-blue-400 border-blue-400/50">
                      {boon.cost}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Summary & Finish */}
          <div className="lg:col-span-3">
            <Card className="bg-gray-900/80 border-red-500/30">
              <CardHeader>
                <CardTitle className="text-white font-story">Character Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-white">
                    <span className="text-gray-300">Available Points: </span>
                    <span className={remainingPoints >= 0 ? 'text-green-400' : 'text-red-400'}>
                      {remainingPoints}
                    </span>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Base: {startingPoints} + Flaws: {flawPoints} - Boons: {boonCost}
                  </div>
                </div>
                
                <Separator className="my-4 bg-gray-700" />
                
                <Button
                  onClick={handleCreateCharacter}
                  disabled={!canFinishCreation()}
                  className="w-full bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 text-white disabled:opacity-50"
                  size="lg"
                >
                  Begin Your Story
                </Button>
                
                {!canFinishCreation() && (
                  <p className="text-red-400 text-sm mt-2 text-center">
                    Please enter a name, select one trait from each category, and balance your points.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}