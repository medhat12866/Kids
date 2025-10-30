import { GameCard } from "../components/GameCard";
import { games } from "../data/sampleData";
import { Trophy, Target } from "lucide-react";
import { Card } from "../components/ui/card";

interface GamesPageProps {
  onNavigate: (page: string) => void;
}

export function GamesPage({ onNavigate }: GamesPageProps) {
  const totalXP = games.reduce((sum, game) => sum + (game.progress === 100 ? game.xpReward : 0), 0);
  const completedGames = games.filter(game => game.progress === 100).length;

  return (
    <div className="space-y-6 px-4">
      {/* Header Stats */}
      <div className="space-y-4">
        <h1>مركز الألعاب التعليمية</h1>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 border-0 shadow-md bg-gradient-to-br from-[#FFB84D]/10 to-[#FF8B67]/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl text-[#FF8B67]">{totalXP}</p>
                <p className="text-sm text-muted-foreground">نقاط الخبرة</p>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-0 shadow-md bg-gradient-to-br from-[#4ECAFF]/10 to-[#5FD08A]/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#4ECAFF] to-[#5FD08A] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl text-[#4ECAFF]">{completedGames}/{games.length}</p>
                <p className="text-sm text-muted-foreground">ألعاب مكتملة</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Games Grid */}
      <div className="space-y-4">
        <h2>جميع الألعاب</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onPlay={() => console.log("Play game:", game.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
