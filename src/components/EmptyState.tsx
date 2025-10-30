import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ 
  icon: Icon, 
  title, 
  description, 
  actionLabel, 
  onAction 
}: EmptyStateProps) {
  return (
    <div className="text-center py-16 px-4">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#9C6FFF]/10 to-[#4ECAFF]/10 flex items-center justify-center">
        <Icon className="w-12 h-12 text-muted-foreground" />
      </div>
      <h3 className="text-muted-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {description}
      </p>
      {actionLabel && onAction && (
        <Button 
          onClick={onAction}
          className="h-12 px-8 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] hover:opacity-90"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
