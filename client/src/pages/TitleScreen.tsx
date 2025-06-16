import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function TitleScreen() {
  const [, setLocation] = useLocation();

  const handleStartGame = () => {
    setLocation("/game");
  };

  const handleLoadGame = () => {
    setLocation("/game?load=true");
  };

  const handleDevMode = () => {
    setLocation("/dev");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/title-screen.png')",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center space-y-8 px-8 max-w-2xl">
        {/* Game Title */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-2xl" style={{ fontFamily: 'Great Vibes, cursive' }}>
            <span className="text-red-400">Eternal</span>{" "}
            <span className="text-purple-300">Hearts</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 drop-shadow-lg" style={{ fontFamily: 'Dancing Script, cursive' }}>
            A Ravencroft Romance
          </h2>
          <p className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed" style={{ fontFamily: 'Kaushan Script, cursive' }}>
            Enter a world of immortal passion, ancient secrets, and choices that will determine your eternal fate
          </p>
        </div>

        {/* Menu Buttons */}
        <div className="space-y-4 pt-8 flex flex-col items-center">
          <Button
            onClick={handleStartGame}
            className="w-full max-w-xs bg-red-700 hover:bg-red-600 text-white font-semibold py-4 text-lg border border-red-500 shadow-lg transition-all duration-300 hover:shadow-red-500/50 text-center justify-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Start New Game
          </Button>
          
          <Button
            onClick={handleLoadGame}
            variant="outline"
            className="w-full max-w-xs bg-purple-900/50 hover:bg-purple-800/70 text-purple-200 border-purple-400 font-semibold py-4 text-lg shadow-lg transition-all duration-300 hover:shadow-purple-500/50 text-center justify-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Load Game
          </Button>
          
          <Button
            onClick={handleDevMode}
            className="w-full max-w-xs bg-gray-800/50 hover:bg-gray-700/70 text-gray-300 hover:text-white border border-gray-600 font-medium py-3 text-base shadow-lg transition-all duration-300 hover:shadow-gray-500/50 text-center justify-center"
            style={{ fontFamily: 'Dancing Script, cursive' }}
          >
            Developer Mode
          </Button>
        </div>

        {/* Atmospheric Text */}
        <div className="pt-8 text-center">
          <p className="text-sm text-gray-500 italic" style={{ fontFamily: 'Alex Brush, cursive' }}>
            "In the shadows of Ravencroft Manor, love transcends mortality..."
          </p>
        </div>
      </div>
    </div>
  );
}