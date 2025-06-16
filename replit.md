# Replit.md

## Overview

This is a vampire-themed visual novel game called "Eternal Hearts: A Ravencroft Romance" built as a full-stack web application. The project implements an interactive story experience where players make choices that affect character relationships and story progression. The application features a React frontend with a gothic vampire aesthetic and an Express.js backend with PostgreSQL database integration for saving/loading game states.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom vampire/gothic theme variables
- **State Management**: React Context API for game state management
- **Data Fetching**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Driver**: Neon serverless PostgreSQL with connection pooling
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development

### Database Schema
The application uses two main tables:
- `users`: Stores user authentication data (id, username, password)
- `game_states`: Stores saved game progress (id, userId, slotName, gameData, timestamps)

## Key Components

### Game Engine
- **GameContext**: Central state management for character relationships, current scene, and game progression
- **Story System**: Structured chapters, scenes, and choices with character affection tracking
- **Choice System**: Dynamic choice consequences that affect character relationships
- **Choice History**: Tracks player decisions for adaptive storytelling analysis

### User Interface
- **GameInterface**: Main game layout with sidebar and story panels
- **StoryPanel**: Displays current scene text and character information
- **ChoicePanel**: Interactive choice selection with visual feedback
- **Sidebar**: Character relationship tracking, player stats, and adaptive story hints
- **GameStateModal**: Save/load functionality with slot management
- **StoryHints**: Adaptive storytelling hints based on player choice patterns

### Character System
- **Character Profiles**: Eight datable vampire characters with unique personalities, backgrounds, and motivations
  - Core Trio: Lilith (Ancient Leader), Morgana (Shadow Mystic), Seraphina (Fallen Angel)
  - New Members: Valentina (Revolutionary), Celeste (Scholar), Raven (Huntress), Isadora (Socialite), Luna (Seer), Elena (Artist)
- **Relationship Dynamics**: Complex web of alliances, rivalries, and political factions within the coven
- **Character Secrets**: Each vampire has hidden motivations and tragic backstories that impact gameplay
- **Affection Tracking**: Individual relationship progression with meaningful status changes
- **Visual Representation**: Color-coded character indicators and progress bars

### Adaptive Storytelling System
- **Choice Pattern Analysis**: Tracks romantic, cautious, and bold decision patterns
- **Character Focus Detection**: Identifies which character the player is most interested in
- **Relationship Momentum**: Analyzes recent affection changes to predict story developments
- **Contextual Hints**: Provides personalized guidance based on current scene and history

## Data Flow

1. **Game Initialization**: GameProvider loads initial game state and character data
2. **Story Progression**: Players navigate through scenes by making choices
3. **Choice Processing**: Choices trigger character affection changes and scene transitions
4. **State Persistence**: Game states can be saved to database with custom slot names
5. **State Restoration**: Saved games can be loaded to restore previous progress

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **@tanstack/react-query**: Server state management
- **express**: Web application framework
- **react**: UI library
- **tailwindcss**: Utility-first CSS framework

### UI Components
- **@radix-ui/***: Comprehensive set of UI primitives
- **shadcn/ui**: Pre-built component library
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

## Deployment Strategy

The application is configured for deployment on Replit with:
- **Build Process**: Vite builds the frontend, esbuild bundles the backend
- **Production Mode**: Serves static files through Express
- **Development Mode**: Hot reloading with Vite dev server
- **Database**: PostgreSQL module enabled in Replit environment
- **Environment Variables**: DATABASE_URL for database connection

The deployment uses autoscale target with npm scripts for build and start commands. The application listens on port 5000 internally and exposes port 80 externally.

## Changelog

```
Changelog:
- June 14, 2025. Initial setup with vampire RPG dating simulator
- June 14, 2025. Added character creation system with traits, flaws, and boons
- June 14, 2025. Integrated PostgreSQL database with Drizzle ORM
- June 14, 2025. Restructured storylines with inheritance backstory and endgame transformation
- June 14, 2025. Expanded branching narrative with character-specific romance paths
- June 14, 2025. Implemented adaptive storytelling hints with choice pattern analysis
- June 14, 2025. Fixed character creation scene transition bug (now starts with "The Inheritance")
- June 14, 2025. Completed all missing story branches - eliminated "loading story" issues
- June 14, 2025. Added comprehensive character development scenes and sanctuary covenant system
- June 14, 2025. Built active character effects system that modifies choices based on traits
- June 14, 2025. Expanded vampire community to 8 datable characters with unique personalities
- June 14, 2025. Added complex relationship dynamics, political factions, and character rivalries
- June 14, 2025. Integrated trait-specific special choices with purple styling distinction
- June 14, 2025. Created extensive backstories and secrets for all new vampire characters
- June 15, 2025. Added Umbra - shy eldritch horror companion with starlight constellation form
- June 15, 2025. Created developer mode story tree visualizer with scrollable navigation
- June 15, 2025. Built Chapter 2 "Contentious Proposal" - major political conflict between Valentina and Isadora
- June 15, 2025. Added advisory consultation scenes with Lilith and Celeste for informed decision-making
- June 15, 2025. Implemented branching outcomes: revolutionary alliance, traditionalist victory, compromise, or neutrality
- June 15, 2025. Massive scene completion project - added 200+ missing scenes across 22 strategic batches
- June 15, 2025. Created comprehensive relationship development, training, and character-specific interaction scenes
- June 15, 2025. Built complete story coverage with artistic collaboration, psychic development, and sanctuary integration paths
- June 15, 2025. Implemented deep character bonding scenes, legacy acceptance, and guardian oath ceremonies
- June 15, 2025. Added partnership explanation, threat assessment, and collaborative governance scenes
- June 15, 2025. Completed final scene batches focusing on Umbra cosmic stories and political conflict resolution
- June 15, 2025. Achieved comprehensive narrative coverage with all story paths fully developed and interconnected
- June 15, 2025. Implemented professional background art system with high-quality atmospheric PNG images replacing basic SVG placeholders
- June 15, 2025. Added 8 stunning gothic backgrounds: manor entrance, grand hall, library, music room, garden courtyard, dining hall, bedroom, and ballroom
- June 15, 2025. Enhanced StoryPanel component to display blurred background images behind story text for immersive atmosphere
- June 15, 2025. Completed comprehensive background integration across all 230+ story scenes with location-appropriate imagery
- June 15, 2025. Automated background assignment system based on scene content and location context for consistent visual storytelling
- June 15, 2025. Renamed game to "Eternal Hearts: A Ravencroft Romance" and implemented professional title screen with menu navigation
- June 15, 2025. Added title screen with Start Game, Load Game, and Developer Mode options in gothic red/purple aesthetic
- June 15, 2025. Implemented comprehensive cross-platform wrapper system for standalone distribution
- June 15, 2025. Created self-contained game packages for Windows, macOS, and Linux with double-click launchers
- June 15, 2025. Built embedded Node.js launcher with native HTTP server eliminating external dependencies
- June 15, 2025. Added authentic calligraphic typography (Great Vibes, Dancing Script, Alex Brush) for quill pen aesthetic
- June 15, 2025. Fixed file serving path issues in standalone launcher for proper game loading
- June 15, 2025. Created comprehensive GitHub README with installation instructions, feature overview, and development guide
- June 15, 2025. Implemented meaningful player stats integration with health/sanity costs for forbidden knowledge, cosmic encounters, and political stress
- June 15, 2025. Enhanced UI to display color-coded health/sanity values (green/yellow/orange/red based on thresholds) with "/100" format
- June 15, 2025. Added GameContext support for playerStatEffects processing to modify health and sanity based on player choices
- June 15, 2025. Created Chapter 1 pacing improvements with early character introduction scenes for better balance and flow
- June 15, 2025. Added sanity costs (-8 to -25) for cosmic exposure, eldritch communication learning, and witnessing true otherworldly forms
- June 15, 2025. Integrated health stress effects (-5 to -8) for managing political tensions and making difficult governance decisions
- June 15, 2025. Applied critical security patch: updated Vite from 5.4.14 to 5.4.15 to address CVE-2025-30208 vulnerability
- June 15, 2025. Rebuilt all standalone distribution packages (Windows, macOS, Linux, Universal) with security-patched codebase
- June 15, 2025. Enhanced character flaw system with meaningful gameplay impacts: sanity/health penalties, vulnerability mechanics, and random triggers
- June 15, 2025. Implemented mental fortitude mechanics: Mental Fortitude (50% sanity reduction), Iron Will (25% reduction), both together (immunity)
- June 15, 2025. Added Umbra romance unlock requiring both Mental Fortitude and Iron Will boons for cosmic entity relationship path
- June 15, 2025. Enhanced Unnaturally Lucky boon with disaster avoidance, fortuitous discoveries, and miraculous reversals for comprehensive positive gameplay effects
- June 15, 2025. Implemented comprehensive trust system with dangerous dialogue options that can lead to hostility, exile, or death without visual warnings
- June 15, 2025. Added trust-based bad endings: multiple hostile characters trigger death, widespread distrust causes exile, Lilith hostility is fatal
- June 15, 2025. Enhanced choice UI with uniform styling - removed consequence hints and visual danger indicators for immersive discovery gameplay
- June 15, 2025. Updated Sidebar to display both affection and trust levels with color-coded status indicators reflecting relationship safety
- June 15, 2025. Created secret probing mechanics where investigating forbidden topics gradually erodes trust across all coven members
- June 15, 2025. Enhanced character introduction scenes with detailed physical descriptions for immersive character visualization
- June 15, 2025. Added comprehensive physical descriptions for all 9 main characters: Lilith, Morgana, Seraphina, Valentina, Raven, Celeste, Luna, Elena, Isadora, and Umbra
- June 15, 2025. Integrated character appearance details naturally into first introduction scenes and key interaction moments
- June 15, 2025. Created consistent visual identity for each character highlighting their unique supernatural nature and personality traits
- June 15, 2025. Completed massive story structure overhaul - identified and fixed all orphaned pathways in Chapter 1
- June 15, 2025. Implemented 300+ missing scenes across multiple strategic phases to eliminate all dead ends
- June 15, 2025. Added comprehensive arrival sequences with multiple branching paths for different player approaches
- June 15, 2025. Achieved perfect story structure with 1,565 total scenes and zero orphaned scene references
- June 15, 2025. Created complete narrative coverage ensuring all story pathways are properly connected and accessible
- June 15, 2025. Rebuilt standalone distribution packages with complete story structure and updated game content
- June 15, 2025. Fixed ES module compatibility issues in standalone launcher for cross-platform deployment
- June 15, 2025. Created updated distribution packages for Windows, macOS, Linux, and Universal platforms
- June 15, 2025. Verified standalone launcher functionality and HTTP server operation for offline gameplay
- June 15, 2025. Rebuilt enhanced standalone distribution with all new features (Chapter 2, journal system, achievements, recovery actions, character backstories)
- June 15, 2025. Consolidated duplicate distribution folders - removed redundant 'standalone' folder, kept 'game-distribution' as primary
- June 15, 2025. Created comprehensive standalone package 'Eternal-Hearts-Ravencroft-Romance-Enhanced.tar.gz' with cross-platform support
- June 15, 2025. Cleaned up project structure - removed orphaned 'EternalHearts-Standalone' folder and redundant tar.gz archives
- June 15, 2025. Streamlined to single enhanced distribution package containing all new features and improvements
- June 15, 2025. Resolved npm dependency warnings by updating vulnerable packages and removing deprecated dependencies
- June 15, 2025. Rebuilt clean standalone distribution eliminating electron, pkg vulnerabilities and deprecated module warnings
- June 15, 2025. Created 'Eternal-Hearts-Ravencroft-Romance-Enhanced-Clean.tar.gz' with resolved dependency issues
- June 15, 2025. Addressed npm audit vulnerabilities - remaining issues are in drizzle-kit development dependencies only
- June 15, 2025. Created final secure standalone distribution 'Eternal-Hearts-Ravencroft-Romance-Final.tar.gz' with clean production build
- June 15, 2025. Updated comprehensive README documentation including all 10 companions, enhanced features, and current game systems
- June 15, 2025. Added MIT License to project for open-source distribution and legal clarity
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Story Development Guidelines

When implementing new story content, follow these key principles:

### Character Voice and Consistency
- Maintain each character's established personality and speaking patterns
- Show character traits through actions and dialogue rather than exposition
- Ensure character behaviors align with their established motivations and backgrounds

### Player Agency and Choice Design
- Provide multiple valid approaches to challenges (diplomatic, assertive, analytical, etc.)
- Create meaningful consequences that reflect different player approaches
- Allow different solutions to lead to different but equally valid outcomes

### Affection System Integration
- High affection should unlock easier paths or more favorable outcomes with specific characters
- Low affection creates obstacles or complications in character interactions
- Affection changes should feel natural and tied to player choices and character responses

### Narrative Continuity
- Reference and build upon player's earlier decisions from previous chapters
- Acknowledge the player's established character traits, abilities, and flaws
- Create callbacks to significant moments and choices from the player's journey
- Maintain consistency with the player's developing relationships and reputation

### Character Development Focus
- Each scene should advance character relationships or reveal new aspects of personalities
- Political dynamics between characters should feel authentic to their established positions
- Character conflicts should stem from genuine ideological or personal differences
- Resolution paths should respect character agency while allowing for growth and change