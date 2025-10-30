import { AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
}

export function ErrorState({ 
  title = "حدث خطأ!", 
  message, 
  onRetry 
}: ErrorStateProps) {
  return (
    <div className="max-w-md mx-auto p-4">
      <Alert variant="destructive" className="rounded-2xl">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="mt-2">
          {message}
        </AlertDescription>
        {onRetry && (
          <Button 
            onClick={onRetry}
            variant="outline"
            className="mt-4 w-full h-11 rounded-full"
          >
            حاول مرة أخرى
          </Button>
        )}
      </Alert>
    </div>
  );
}
