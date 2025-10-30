import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Gamepad2, Sparkles, Trophy, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const games = [
  {
    id: 1,
    title: "لعبة الذاكرة الممتعة",
    description: "اختبر ذاكرتك وابحث عن الصور المتطابقة",
    icon: Gamepad2,
    color: "from-[#4ECAFF] to-[#5FD08A]",
    image: "https://images.unsplash.com/photo-1644732542872-ad184959392a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBnYW1lfGVufDF8fHx8MTc2MTc1ODg0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    difficulty: "سهل"
  },
  {
    id: 2,
    title: "نشاط الرسم والتلوين",
    description: "أطلق العنان لإبداعك وارسم أجمل اللوحات",
    icon: Sparkles,
    color: "from-[#FFB84D] to-[#FF8B67]",
    image: "https://images.unsplash.com/photo-1744574005416-d558b1e44380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRlZCUyMGNoaWxkcmVuJTIwaWxsdXN0cmF0aW9ufGVufDF8fHx8MTc2MTc1ODg0N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    difficulty: "للجميع"
  }
];

export function FeaturedGame() {
  return (
    <section className="py-6 px-4">
      <div className="flex items-center justify-between mb-6">
        <h2>الألعاب والأنشطة المميزة</h2>
        <Trophy className="w-6 h-6 text-[#FFB84D]" />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                {/* Image with icon overlay */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  <ImageWithFallback
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${game.color} shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Difficulty badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-full flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#FFB84D]" fill="currentColor" />
                    <span className="text-sm">{game.difficulty}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3>{game.title}</h3>
                  
                  <p className="text-muted-foreground">
                    {game.description}
                  </p>
                  
                  <Button 
                    className={`w-full h-12 rounded-full bg-gradient-to-r ${game.color} hover:opacity-90 transition-opacity`}
                  >
                    <span>{game.id === 1 ? "العب الآن" : "جرّب الآن"}</span>
                  </Button>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
