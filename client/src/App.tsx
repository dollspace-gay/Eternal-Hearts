import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TitleScreen from "@/pages/TitleScreen";
import Game from "@/pages/Game";
import NotFound from "@/pages/not-found";
import StoryTreeDev from "@/pages/StoryTreeDev";

function Router() {
  return (
    <Switch>
      <Route path="/" component={TitleScreen} />
      <Route path="/game" component={Game} />
      <Route path="/dev" component={StoryTreeDev} />
      <Route path="/dev/story-tree" component={StoryTreeDev} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
