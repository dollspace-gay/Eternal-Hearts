import { useState } from 'react';
import { useGame } from '../contexts/GameContext';
import { JournalEntry } from '../types/game';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, Heart, Eye, RefreshCw, Star } from 'lucide-react';

const typeIcons = {
  choice: BookOpen,
  relationship: Heart,
  discovery: Eye,
  backstory: Star,
  recovery: RefreshCw
};

const typeColors = {
  choice: 'bg-blue-500/20 text-blue-200',
  relationship: 'bg-red-500/20 text-red-200',
  discovery: 'bg-yellow-500/20 text-yellow-200',
  backstory: 'bg-purple-500/20 text-purple-200',
  recovery: 'bg-green-500/20 text-green-200'
};

export function Journal() {
  const { gameState } = useGame();
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  const sortedEntries = [...gameState.journal].sort((a, b) => b.timestamp - a.timestamp);
  
  const entriesByType = {
    all: sortedEntries,
    choice: sortedEntries.filter(entry => entry.type === 'choice'),
    relationship: sortedEntries.filter(entry => entry.type === 'relationship'),
    discovery: sortedEntries.filter(entry => entry.type === 'discovery'),
    backstory: sortedEntries.filter(entry => entry.type === 'backstory'),
    recovery: sortedEntries.filter(entry => entry.type === 'recovery')
  };

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const renderEntryList = (entries: JournalEntry[]) => (
    <ScrollArea className="h-96">
      <div className="space-y-2 p-2">
        {entries.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No entries of this type yet.</p>
        ) : (
          entries.map((entry) => {
            const Icon = typeIcons[entry.type];
            return (
              <Card 
                key={entry.id}
                className={`cursor-pointer transition-colors hover:bg-gray-800/50 ${
                  selectedEntry?.id === entry.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedEntry(entry)}
              >
                <CardContent className="p-3">
                  <div className="flex items-start gap-3">
                    <Icon className="w-4 h-4 mt-1 text-purple-400" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm truncate">{entry.title}</h4>
                        <Badge className={`text-xs ${typeColors[entry.type]}`}>
                          {entry.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {entry.description}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatTimestamp(entry.timestamp)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
    </ScrollArea>
  );

  return (
    <div className="flex h-full gap-4">
      {/* Entry List */}
      <div className="flex-1">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Personal Journal
            </CardTitle>
            <p className="text-sm text-gray-400">
              A record of your journey through Ravencroft Manor
            </p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="choice">Choices</TabsTrigger>
                <TabsTrigger value="relationship">Relations</TabsTrigger>
                <TabsTrigger value="discovery">Discoveries</TabsTrigger>
                <TabsTrigger value="backstory">Stories</TabsTrigger>
                <TabsTrigger value="recovery">Recovery</TabsTrigger>
              </TabsList>
              
              {Object.entries(entriesByType).map(([type, entries]) => (
                <TabsContent key={type} value={type}>
                  {renderEntryList(entries)}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Entry Detail */}
      <div className="w-80">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Entry Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedEntry ? (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    {(() => {
                      const Icon = typeIcons[selectedEntry.type];
                      return <Icon className="w-5 h-5 text-purple-400" />;
                    })()}
                    <Badge className={`${typeColors[selectedEntry.type]}`}>
                      {selectedEntry.type}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{selectedEntry.title}</h3>
                  <p className="text-sm text-gray-300 mb-3">{selectedEntry.description}</p>
                  
                  {selectedEntry.characterId && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-400 mb-1">Related Character:</p>
                      <p className="text-sm text-purple-300 capitalize">
                        {selectedEntry.characterId.replace('_', ' ')}
                      </p>
                    </div>
                  )}
                  
                  {selectedEntry.sceneId && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-400 mb-1">Scene:</p>
                      <p className="text-sm text-blue-300">
                        {selectedEntry.sceneId.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </p>
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-500">
                    {formatTimestamp(selectedEntry.timestamp)}
                  </div>
                  
                  {selectedEntry.metadata && Object.keys(selectedEntry.metadata).length > 0 && (
                    <div className="mt-4 p-3 bg-gray-800/50 rounded">
                      <p className="text-xs text-gray-400 mb-2">Additional Details:</p>
                      {Object.entries(selectedEntry.metadata).map(([key, value]) => (
                        <div key={key} className="text-xs">
                          <span className="text-gray-400">{key}:</span>{' '}
                          <span className="text-gray-200">{String(value)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center text-gray-400 py-8">
                <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Select an entry to view details</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}