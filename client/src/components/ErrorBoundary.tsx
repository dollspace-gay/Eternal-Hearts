import React, { Component, ReactNode, ErrorInfo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

/**
 * Error Boundary component to catch React errors and display fallback UI
 * Prevents entire app from crashing when component errors occur
 *
 * Usage:
 * <ErrorBoundary>
 *   <YourComponent />
 * </ErrorBoundary>
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render shows the fallback UI
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console for debugging
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Update state with error details
    this.setState({
      error,
      errorInfo
    });

    // Call optional error handler prop
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  resetError = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback(
          this.state.error,
          this.state.errorInfo!,
          this.resetError
        );
      }

      // Default fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-black">
          <Card className="max-w-2xl w-full bg-red-950/20 border-red-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-red-200">
                <AlertTriangle className="w-6 h-6" />
                Something Went Wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300">
                An unexpected error occurred in the application. This has been logged
                and we apologize for the inconvenience.
              </p>

              <div className="bg-black/40 p-4 rounded-md border border-red-500/20">
                <p className="text-sm text-red-300 font-mono">
                  {this.state.error.message}
                </p>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                    Stack Trace (Development Only)
                  </summary>
                  <pre className="mt-2 text-xs text-gray-500 overflow-auto max-h-64 bg-black/60 p-4 rounded border border-gray-700">
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={this.resetError}
                  variant="outline"
                  className="border-red-500/30 text-red-200 hover:bg-red-500/20"
                >
                  Try Again
                </Button>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Reload Page
                </Button>
              </div>

              <p className="text-xs text-gray-500 pt-4">
                If this problem persists, try clearing your browser cache or starting
                a new game.
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Convenience wrapper for game-specific error boundary
 * Shows themed error UI consistent with game design
 */
export function GameErrorBoundary({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Could send to error tracking service here
        console.error('Game Error:', {
          error: error.message,
          stack: error.stack,
          componentStack: errorInfo.componentStack,
          timestamp: new Date().toISOString()
        });
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
