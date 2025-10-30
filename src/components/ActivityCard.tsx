import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Download, List } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

interface ActivityCardProps {
  activity: {
    id: number;
    title: string;
    difficulty: string;
    category: string;
    thumbnail: string;
    steps: number;
    printable: boolean;
  };
  onStart?: () => void;
}

export function ActivityCard({ activity, onStart }: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
          <ImageWithFallback
            src={activity.thumbnail}
            alt={activity.title}
            className="w-full h-full object-cover"
          />

          {/* Category badge */}
          <div className="absolute top-3 right-3 bg-white/95 px-3 py-1 rounded-full text-sm">
            {activity.category}
          </div>

          {/* Printable indicator */}
          {activity.printable && (
            <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center">
              <Download className="w-4 h-4 text-[#9C6FFF]" />
            </div>
          )}
        </div>

        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <h4 className="line-clamp-2">{activity.title}</h4>
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="rounded-full">
                {activity.difficulty}
              </Badge>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <List className="w-4 h-4" />
                <span>{activity.steps} خطوات</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={onStart}
              className="flex-1 h-11 rounded-full bg-gradient-to-r from-[#FFB84D] to-[#FF8B67] hover:opacity-90"
            >
              <span>ابدأ النشاط</span>
            </Button>
            
            {activity.printable && (
              <Button
                variant="outline"
                className="h-11 w-11 rounded-full p-0 border-2"
              >
                <Download className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
