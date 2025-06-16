import { useState, useMemo } from 'react';
import { gameData } from '@/data/gameData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { GameProvider } from '@/contexts/GameContext';
import { useLocation } from 'wouter';

interface TreeNode {
  id: string;
  title: string;
  text: string[];
  choices: Array<{
    id: string;
    text: string;
    consequence: string;
    nextScene?: string;
    effects: Array<{ characterId: string; affectionChange: number }>;
  }>;
  children: TreeNode[];
  level: number;
}

function StoryTreeDevContent() {
  const [selectedScene, setSelectedScene] = useState<any>(null);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  const [location, navigate] = useLocation();

  // Build the story tree structure - show all scenes from all chapters
  const storyTree = useMemo(() => {
    const allScenes = gameData.flatMap(chapter => chapter.scenes);
    const sceneMap = new Map(allScenes.map(scene => [scene.id, scene]));
    
    const buildTree = (sceneId: string, level: number = 0, visited: Set<string> = new Set()): TreeNode | null => {
      if (visited.has(sceneId) || level > 10) return null; // Prevent infinite loops and allow deeper nesting
      
      const scene = sceneMap.get(sceneId);
      if (!scene) return null;
      
      visited.add(sceneId);
      
      const children: TreeNode[] = [];
      for (const choice of scene.choices) {
        if (choice.nextScene) {
          const childNode = buildTree(choice.nextScene, level + 1, new Set(visited));
          if (childNode) {
            children.push(childNode);
          }
        }
      }
      
      return {
        id: scene.id,
        title: scene.title,
        text: scene.text,
        choices: scene.choices,
        children,
        level
      };
    };

    // Build trees organized by chapters
    const chapterNodes: TreeNode[] = [];
    
    // Process each chapter
    gameData.forEach((chapter, chapterIndex) => {
      const chapterScenes: TreeNode[] = [];
      const processedScenes = new Set<string>();
      
      // Build trees for each scene in the chapter
      chapter.scenes.forEach(scene => {
        if (!processedScenes.has(scene.id)) {
          const sceneTree = buildTree(scene.id);
          if (sceneTree) {
            chapterScenes.push(sceneTree);
            // Mark all scenes in this tree as processed
            const markProcessed = (node: TreeNode) => {
              processedScenes.add(node.id);
              node.children.forEach(markProcessed);
            };
            markProcessed(sceneTree);
          }
        }
      });
      
      // Create chapter node
      if (chapterScenes.length > 0) {
        chapterNodes.push({
          id: `chapter_${chapterIndex}`,
          title: `${chapter.title} (${chapterScenes.length} scenes)`,
          text: [`Chapter ${chapterIndex + 1}: ${chapter.title}`],
          choices: [],
          children: chapterScenes,
          level: 0
        });
      }
    });
    
    // Find orphaned scenes (not in any chapter's scenes array)
    const allChapterSceneIds = new Set(gameData.flatMap(c => c.scenes.map(s => s.id)));
    const referencedSceneIds = new Set<string>();
    
    // Collect all scene IDs referenced in choices
    allScenes.forEach(scene => {
      scene.choices.forEach(choice => {
        if (choice.nextScene) {
          referencedSceneIds.add(choice.nextScene);
        }
      });
    });
    
    // Find orphaned scenes
    const orphanedScenes: TreeNode[] = [];
    referencedSceneIds.forEach(sceneId => {
      if (!allChapterSceneIds.has(sceneId) && sceneMap.has(sceneId)) {
        const orphanTree = buildTree(sceneId);
        if (orphanTree) {
          orphanedScenes.push(orphanTree);
        }
      }
    });
    
    // Add orphaned scenes as a separate chapter if any exist
    if (orphanedScenes.length > 0) {
      chapterNodes.push({
        id: 'orphaned_scenes',
        title: `Orphaned Scenes (${orphanedScenes.length} scenes)`,
        text: ['Scenes referenced in choices but not in chapter definitions'],
        choices: [],
        children: orphanedScenes,
        level: 0
      });
    }
    
    // Create a virtual root that contains all chapters
    return {
      id: 'root',
      title: `Story Tree (${chapterNodes.length} chapters, ${allScenes.length} total scenes)`,
      text: ['All story branches organized by chapters'],
      choices: [],
      children: chapterNodes,
      level: -1
    };
  }, []);

  const toggleExpanded = (nodeId: string) => {
    const newExpanded = new Set(expandedNodes);
    if (newExpanded.has(nodeId)) {
      newExpanded.delete(nodeId);
    } else {
      newExpanded.add(nodeId);
    }
    setExpandedNodes(newExpanded);
  };

  const jumpToScene = (sceneId: string) => {
    // For the developer tool, we'll navigate back to the game with a URL parameter
    // The main game can handle scene jumping through URL params or localStorage
    localStorage.setItem('devJumpToScene', sceneId);
    navigate('/');
  };

  const renderNode = (node: TreeNode, path: string = ''): JSX.Element => {
    const uniqueKey = `${path}-${node.id}`;
    const isExpanded = expandedNodes.has(node.id);
    const hasChildren = node.children.length > 0;
    
    return (
      <div key={uniqueKey} className="mb-1">
        <div 
          className="flex items-center gap-2 p-2 rounded hover:bg-muted/50 min-w-max"
          style={{ marginLeft: `${node.level * 24}px` }}
        >
          <div className="flex items-center gap-2 flex-shrink-0">
            {hasChildren ? (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleExpanded(node.id)}
                className="w-6 h-6 p-0 flex-shrink-0"
              >
                {isExpanded ? '−' : '+'}
              </Button>
            ) : (
              <div className="w-6 h-6 flex items-center justify-center text-muted-foreground">
                •
              </div>
            )}
            
            <Button
              variant={selectedScene?.id === node.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedScene(node)}
              className="text-left flex-shrink-0 max-w-[200px] truncate"
              title={node.title}
            >
              {node.title}
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={() => jumpToScene(node.id)}
              className="text-xs flex-shrink-0"
            >
              Jump
            </Button>
            
            <Badge variant="secondary" className="text-xs flex-shrink-0">
              {node.choices.length}
            </Badge>
          </div>
        </div>
        
        {isExpanded && hasChildren && (
          <div className="border-l border-muted/30" style={{ marginLeft: `${(node.level + 1) * 24 - 12}px` }}>
            {node.children.map((child, index) => renderNode(child, `${path}-${index}`))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen flex gap-4 p-4">
      {/* Story Tree Panel */}
      <div className="w-1/2 h-full flex flex-col">
        <Card className="h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-xl">Story Tree</CardTitle>
            <p className="text-sm text-muted-foreground">
              Click + to expand branches, scene names to view details, or "Jump" to test that path
            </p>
            <div className="flex gap-2 mt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpandedNodes(new Set())}
                className="text-xs"
              >
                Collapse All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // Safe expand all - only expand chapters and first level scenes
                  const safeExpansion = new Set<string>();
                  
                  if (storyTree) {
                    safeExpansion.add(storyTree.id); // root
                    
                    // Add all chapter nodes
                    storyTree.children.forEach(chapter => {
                      safeExpansion.add(chapter.id);
                      
                      // Add first level scenes in each chapter
                      chapter.children.forEach(scene => {
                        if (scene.children.length > 0) {
                          safeExpansion.add(scene.id);
                        }
                      });
                    });
                  }
                  
                  setExpandedNodes(safeExpansion);
                }}
                className="text-xs"
              >
                Expand All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  // Find missing scenes
                  const allScenes = gameData.flatMap(chapter => chapter.scenes);
                  const sceneMap = new Map(allScenes.map(scene => [scene.id, scene]));
                  const missing: string[] = [];
                  
                  allScenes.forEach(scene => {
                    scene.choices.forEach(choice => {
                      if (choice.nextScene && !sceneMap.has(choice.nextScene)) {
                        if (!missing.includes(choice.nextScene)) {
                          missing.push(choice.nextScene);
                        }
                      }
                    });
                  });
                  
                  if (missing.length > 0) {
                    // Create a dialog with selectable text
                    const dialog = document.createElement('div');
                    dialog.style.cssText = `
                      position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                      background: white; border: 2px solid #333; border-radius: 8px;
                      padding: 20px; max-width: 500px; max-height: 400px;
                      overflow-y: auto; z-index: 1000; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                      font-family: monospace;
                    `;
                    
                    const overlay = document.createElement('div');
                    overlay.style.cssText = `
                      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                      background: rgba(0,0,0,0.5); z-index: 999;
                    `;
                    
                    // Create elements safely without innerHTML
                    const title = document.createElement('h3');
                    title.style.cssText = 'margin: 0 0 15px 0; color: #333;';
                    title.textContent = `Missing Scenes (${missing.length})`;
                    
                    const contentDiv = document.createElement('div');
                    contentDiv.style.cssText = 'background: #f5f5f5; padding: 10px; border-radius: 4px; margin-bottom: 15px;';
                    
                    const preElement = document.createElement('pre');
                    preElement.style.cssText = 'margin: 0; white-space: pre-wrap; user-select: text;';
                    preElement.textContent = missing.join('\n');
                    contentDiv.appendChild(preElement);
                    
                    const copyBtn = document.createElement('button');
                    copyBtn.id = 'copyBtn';
                    copyBtn.style.cssText = 'margin-right: 10px; padding: 8px 16px; background: #007acc; color: white; border: none; border-radius: 4px; cursor: pointer;';
                    copyBtn.textContent = 'Copy to Clipboard';
                    
                    const closeBtn = document.createElement('button');
                    closeBtn.id = 'closeBtn';
                    closeBtn.style.cssText = 'padding: 8px 16px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;';
                    closeBtn.textContent = 'Close';
                    
                    dialog.appendChild(title);
                    dialog.appendChild(contentDiv);
                    dialog.appendChild(copyBtn);
                    dialog.appendChild(closeBtn);
                    
                    document.body.appendChild(overlay);
                    document.body.appendChild(dialog);
                    
                    document.getElementById('copyBtn')?.addEventListener('click', () => {
                      navigator.clipboard.writeText(missing.join('\n'));
                    });
                    
                    const closeDialog = () => {
                      document.body.removeChild(dialog);
                      document.body.removeChild(overlay);
                    };
                    
                    document.getElementById('closeBtn')?.addEventListener('click', closeDialog);
                    overlay.addEventListener('click', closeDialog);
                  } else {
                    alert('No missing scenes found! All story paths are complete.');
                  }
                }}
                className="text-xs"
              >
                Check Missing
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
            <div className="h-full overflow-auto">
              <div className="p-4 min-w-max">
                {storyTree && renderNode(storyTree)}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Scene Details Panel */}
      <div className="w-1/2 h-full flex flex-col">
        <Card className="h-full flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle className="text-xl">Scene Details</CardTitle>
            {selectedScene && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => jumpToScene(selectedScene.id)}
                  className="text-xs"
                >
                  Jump to This Scene
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const allScenes = gameData.flatMap(chapter => chapter.scenes);
                    const currentIndex = allScenes.findIndex(s => s.id === selectedScene.id);
                    if (currentIndex > 0) {
                      setSelectedScene(allScenes[currentIndex - 1]);
                    }
                  }}
                  className="text-xs"
                  disabled={!selectedScene}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const allScenes = gameData.flatMap(chapter => chapter.scenes);
                    const currentIndex = allScenes.findIndex(s => s.id === selectedScene.id);
                    if (currentIndex < allScenes.length - 1) {
                      setSelectedScene(allScenes[currentIndex + 1]);
                    }
                  }}
                  className="text-xs"
                  disabled={!selectedScene}
                >
                  Next
                </Button>
              </div>
            )}
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
            <div className="h-full overflow-auto p-4">
              {selectedScene ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{selectedScene.title}</h3>
                    <div className="flex gap-2 mb-2">
                      <Badge variant="outline">ID: {selectedScene.id}</Badge>
                      <Badge variant="outline">Level: {selectedScene.level || 0}</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Story Text:</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto bg-muted/10 p-3 rounded">
                      {selectedScene.text.map((paragraph: string, index: number) => (
                        <p key={index} className="text-sm text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-medium mb-2">Choices ({selectedScene.choices.length}):</h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {selectedScene.choices.map((choice: any, index: number) => (
                        <Card key={choice.id} className="p-3 hover:bg-muted/50">
                          <div className="space-y-2">
                            <p className="text-sm font-medium">{choice.text}</p>
                            <p className="text-xs text-blue-400">{choice.consequence}</p>
                            
                            <div className="flex flex-wrap gap-1">
                              {choice.nextScene && (
                                <Badge 
                                  variant="secondary" 
                                  className="text-xs cursor-pointer hover:bg-primary/20"
                                  onClick={() => {
                                    const allScenes = gameData.flatMap(chapter => chapter.scenes);
                                    const nextScene = allScenes.find(s => s.id === choice.nextScene);
                                    if (nextScene) setSelectedScene(nextScene);
                                  }}
                                >
                                  → {choice.nextScene}
                                </Badge>
                              )}
                              
                              {choice.effects.length > 0 && choice.effects.map((effect: any, i: number) => (
                                <Badge 
                                  key={i} 
                                  variant={effect.affectionChange > 0 ? "default" : "destructive"}
                                  className="text-xs"
                                >
                                  {effect.characterId}: {effect.affectionChange > 0 ? '+' : ''}{effect.affectionChange}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  Select a scene from the tree to view its details
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Wrap with GameProvider for compatibility but make it standalone
export default function StoryTreeDev() {
  return (
    <GameProvider>
      <StoryTreeDevContent />
    </GameProvider>
  );
}