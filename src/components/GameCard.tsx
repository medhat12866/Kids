import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Calculator, Book, Palette, Brain, Star, Trophy } from "lucide-react";
import { motion } from "motion/react";

interface GameCardProps {
  game: {
    id: number;
    title: string;
    icon: string;
    difficulty: string;
    xpReward: number;
    progress: number;
    color: string;
    category: string;
  };
  onPlay?: () => void;
}

const iconMap = {
  calculator: Calculator,
  book: Book,
  palette: Palette,
  brain: Brain
};

export function GameCard({ game, onPlay }: GameCardProps) {
  const Icon = iconMap[game.icon as keyof typeof iconMap] || Star;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Header with gradient and icon */}
        <div className={`relative p-6 bg-gradient-to-br ${game.color}`}>
          <div className="flex items-start justify-between">
            <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            
            <Badge className="bg-white/20 backdrop-blur-sm text-white border-0 hover:bg-white/30">
              {game.difficulty}
            </Badge>
          </div>

          {/* XP Reward */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
            <Trophy className="w-5 h-5" />
            <span className="text-lg">+{game.xpReward} XP</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3>{game.title}</h3>
            <p className="text-sm text-muted-foreground">{game.category}</p>
          </div>

          {/* Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">التقدم</span>
              <span className="text-[#9C6FFF]">{game.progress}%</span>
            </div>
            <Progress value={game.progress} className="h-2" />
          </div>

          <Button
            onClick={onPlay}
            className={`w-full h-12 rounded-full bg-gradient-to-r ${game.color} hover:opacity-90`}
          >
            <span>{game.progress === 100 ? "العب مرة أخرى" : "ابدأ اللعب"}</span>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
