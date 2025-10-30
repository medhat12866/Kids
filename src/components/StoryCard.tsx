import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, Volume2, Clock, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

interface StoryCardProps {
  story: {
    id: number;
    title: string;
    cover: string;
    narrator: string;
    duration: string;
    ageRange: string;
    description: string;
    favorite?: boolean;
  };
  onRead?: () => void;
  onListen?: () => void;
}

export function StoryCard({ story, onRead, onListen }: StoryCardProps) {
  const [isFavorite, setIsFavorite] = useState(story.favorite || false);

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-60 aspect-[3/4] bg-gradient-to-br from-[#FFB84D]/20 to-[#FF8B67]/20">
          <ImageWithFallback
            src={story.cover}
            alt={story.title}
            className="w-full h-full object-cover"
          />

          {/* Favorite button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "text-[#FF6B9D] fill-current" : "text-gray-400"
              }`}
            />
          </button>

          {/* Age badge */}
          <div className="absolute bottom-3 left-3 bg-white/95 px-3 py-1 rounded-full text-xs">
            {story.ageRange}
          </div>
        </div>

        <div className="p-4 space-y-3">
          <h4 className="line-clamp-2">{story.title}</h4>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="w-4 h-4" />
            <span>{story.narrator}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{story.duration}</span>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {story.description}
          </p>

          <div className="flex gap-2 pt-2">
            <Button
              onClick={onRead}
              className="flex-1 h-11 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] hover:opacity-90"
            >
              <BookOpen className="w-4 h-4 ml-2" />
              <span>اقرأ</span>
            </Button>

            <Button
              onClick={onListen}
              variant="outline"
              className="flex-1 h-11 rounded-full border-2"
            >
              <Volume2 className="w-4 h-4 ml-2" />
              <span>استمع</span>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
