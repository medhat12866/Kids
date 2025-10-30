import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-4" style={{ direction: 'rtl' }}>
          <Card className="max-w-md w-full p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-red-500" />
            </div>
            
            <h1 className="text-2xl mb-3 text-gray-900">عذراً! حدث خطأ</h1>
            
            <p className="text-gray-600 mb-6">
              حدث خطأ غير متوقع. لا تقلق، يمكننا إصلاح ذلك!
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-6 p-4 bg-red-50 rounded-lg text-right">
                <p className="text-xs text-red-800 font-mono break-all">
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div className="space-y-3">
              <Button 
                onClick={this.handleReset}
                className="w-full h-12 rounded-full bg-gradient-to-l from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
              >
                <RefreshCw className="w-5 h-5 ml-2" />
                العودة للصفحة الرئيسية
              </Button>
              
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
                className="w-full h-12 rounded-full"
              >
                إعادة تحميل الصفحة
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>💜 نحن آسفون للإزعاج</p>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
