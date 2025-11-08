# Claude Code Instructions for Eternal Hearts

## Issue Tracking

**ALWAYS use `bd` (beads) for issue tracking.** This is the ONLY acceptable way to track bugs, features, and tasks.

### How to Use Beads

```bash
# List all issues
bd list

# Create a new issue
bd create -t "Issue title" -d "Description"

# Show issue details
bd show <issue-id>

# Update issue status
bd update <issue-id> -s in-progress
bd update <issue-id> -s closed

# Add labels
bd label add <issue-id> bug
bd label add <issue-id> critical

# Manage dependencies (issue A blocks issue B)
bd dep add <issue-A> <issue-B>

# Show ready work (no blockers)
bd ready

# Show blocked issues
bd blocked
```

### Common Labels to Use
- `critical` - Must fix immediately
- `bug` - Something is broken
- `performance` - Performance issue
- `security` - Security concern
- `typescript` - Type safety issue
- `react` - React-specific issue
- `enhancement` - New feature or improvement
- `refactor` - Code cleanup needed

## TypeScript Coding Standards

**NO SHORTCUTS. EVER.**

### Type Safety Rules (Non-Negotiable)

1. **NEVER use `any` type** - Always define proper types
2. **Always provide explicit return types** for functions
3. **Use strict type checking** - No type assertions without validation
4. **Define interfaces** for all data structures
5. **Use discriminated unions** for state management
6. **Enable strict null checks** - Handle undefined/null explicitly

### React Best Practices

1. **Always include all dependencies** in useEffect/useCallback/useMemo arrays
2. **Provide cleanup functions** for all effects with side effects
3. **Use proper key props** - Never use array index unless truly static
4. **Memoize expensive computations** with useMemo
5. **Memoize callbacks** passed to child components with useCallback
6. **Add error boundaries** for graceful error handling
7. **Avoid stale closures** - Use ref or functional setState when needed

### Code Quality Standards

1. **Error handling is mandatory** - Wrap all external operations in try-catch
2. **Validate all inputs** - Never trust data from props, state, or storage
3. **No magic numbers** - Use named constants
4. **No dead code** - Delete it, don't comment it out
5. **Immutability** - Never mutate objects/arrays, always create new ones
6. **Single responsibility** - Functions should do ONE thing
7. **DRY principle** - Don't repeat yourself
8. **Meaningful names** - No abbreviations, clear intent

### Naming Conventions

**Follow these conventions consistently across the codebase:**

#### Variables and Constants
- `gameState` - Current runtime state from Context/reducer
- `gameData` - Static/initial game content and configuration data
- `currentScene` - The active scene being displayed
- `choice` - A single choice object
- `choices` - Original array of choices from scene/data
- `allChoices` - Combined/modified array including trait-specific choices
- `modifiedChoice` - Choice object after applying character effects

#### Functions
- Use verb prefixes: `get`, `set`, `make`, `apply`, `check`, `handle`
- `getAvailableX()` - Returns filtered/available items
- `handleXAction()` - Event handler for user action
- `applyXEffects()` - Applies side effects/modifications
- `checkXCondition()` - Returns boolean for validation

#### React Components
- PascalCase for component names: `GameInterface`, `StoryPanel`
- camelCase for component instances: `<ErrorBoundary>`, `<Button>`
- Props interfaces: `ComponentNameProps`

#### Types and Interfaces
- PascalCase: `GameState`, `Choice`, `Character`
- Avoid generic names like `Data` or `Info`
- Use specific descriptors: `PlayerCharacter`, `RecoveryAction`

#### Files
- PascalCase for components: `GameInterface.tsx`, `StoryPanel.tsx`
- camelCase for utilities: `characterEffects.ts`, `recoveryActions.ts`
- kebab-case for config: `tailwind.config.ts`

#### CSS/Tailwind
- Game theme colors: `blood-red`, `vampire-red`, `gothic-purple`, `midnight`
- Use kebab-case for custom color names
- Prefer Tailwind utilities over custom classes

When adding new code, follow these patterns. When refactoring, migrate to these conventions.

### Performance Standards

1. **Profile before optimizing** - Measure, don't guess
2. **Avoid premature optimization** - But don't write obviously slow code
3. **Use React DevTools Profiler** - Identify unnecessary re-renders
4. **Lazy load** - Code-split large components
5. **Virtualize long lists** - Don't render thousands of DOM nodes
6. **Debounce/throttle** - User input and expensive operations

### State Management Rules

1. **Immutable updates** - Use spread operators or immer
2. **Normalize state** - Avoid deeply nested structures
3. **Derive don't store** - Compute values from state, don't duplicate
4. **Centralize complex state** - Use Context or state management library
5. **Local state first** - Only lift up when needed

### Security Requirements

1. **Sanitize all user input** - Prevent XSS attacks
2. **Validate data shapes** - Use zod or similar for runtime validation
3. **No inline event handlers** - Prevent XSS in React
4. **Content Security Policy** - Configure properly
5. **No sensitive data in localStorage** - It's not secure
6. **Rate limiting** - Prevent abuse

## Workflow

1. **Check ready work**: `bd ready`
2. **Pick an issue and mark it**: `bd update <id> -s in-progress`
3. **Fix the issue** following all coding standards above
4. **Test thoroughly** - Write tests if they don't exist
5. **Close the issue**: `bd update <id> -s closed`
6. **NEVER create separate TODO lists or markdown files** - Use `bd` only

## Documentation Standards

- **DO NOT** create README files, TODO lists, or documentation unless explicitly asked
- **DO** add clear JSDoc comments to complex functions
- **DO** update inline comments when code changes
- **DO** use self-documenting code (clear names > comments)

## When in Doubt

1. Check `bd list` for what needs to be done
2. Follow TypeScript strict mode - if it complains, fix it properly
3. Use `bd create` to track new issues as you discover them
4. Ask the user if you're unsure about approach
5. **NEVER take shortcuts** - Quality over speed, always
