import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Play, Clock, Heart, Check } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useApp } from "../contexts/AppContext";

interface VideoCardProps {
  video: {
    id: number;
    title: string;
    thumbnail: string;
    duration: string;
    ageRange: string;
    topic: string;
    watched?: boolean;
    favorite?: boolean;
  };
  onPlay?: () => void;
  onToggleFavorite?: () => void;
}

export function VideoCard({ video, onPlay, onToggleFavorite }: VideoCardProps) {
  const { isFavorite: checkFavorite, toggleFavorite, getProgress } = useApp();
  const isFavorite = checkFavorite(video.id, 'video');
  const progress = getProgress(video.id, 'video');
  const isWatched = progress?.completed || video.watched;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(video.id, 'video');
    onToggleFavorite?.();
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200" onClick={onPlay}>
          <ImageWithFallback
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          
          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg"
            >
              <Play className="w-6 h-6 text-[#FF6B9D] mr-1" fill="currentColor" />
            </motion.div>
          </div>

          {/* Watched indicator */}
          {isWatched && (
            <div className="absolute top-3 left-3 bg-[#5FD08A] text-white px-2 py-1 rounded-full flex items-center gap-1 text-xs">
              <Check className="w-3 h-3" />
              <span>شاهدت</span>
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "text-[#FF6B9D] fill-current" : "text-gray-400"
              }`}
            />
          </button>

          {/* Duration */}
          <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded-lg flex items-center gap-1 text-xs">
            <Clock className="w-3 h-3" />
            <span>{video.duration}</span>
          </div>
        </div>

        <div className="p-4 space-y-2">
          <h4 className="line-clamp-2">{video.title}</h4>
          
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="secondary" className="rounded-full">
              {video.ageRange}
            </Badge>
            <Badge 
              variant="outline" 
              className="rounded-full border-[#9C6FFF] text-[#9C6FFF]"
            >
              {video.topic}
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
