import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { 
  User, Edit, Trophy, Star, Award, Lock,
  Target, Book, Video, Gamepad2
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { childProfile, badges } from "../data/sampleData";

interface ProfilePageProps {
  onNavigate: (page: string) => void;
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const progressPercentage = (childProfile.xp / childProfile.nextLevelXp) * 100;

  return (
    <div className="space-y-6 px-4">
      {/* Profile Header */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className="h-32 bg-gradient-to-br from-[#FF6B9D] via-[#9C6FFF] to-[#4ECAFF]" />
        
        <div className="px-6 pb-6">
          <div className="flex items-end gap-4 -mt-16 mb-4">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-[#FFB84D] to-[#FF8B67]">
                <ImageWithFallback
                  src={childProfile.avatar}
                  alt={childProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-white">
                <Edit className="w-5 h-5 text-[#9C6FFF]" />
              </button>
            </div>

            <div className="flex-1 pb-2">
              <h2 className="text-white mb-1">{childProfile.name}</h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                  المستوى {childProfile.level}
                </Badge>
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                  <Trophy className="w-3 h-3 ml-1" />
                  {childProfile.xp} XP
                </Badge>
              </div>
            </div>
          </div>

          {/* Level Progress */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">التقدم إلى المستوى التالي</span>
              <span className="text-[#9C6FFF]">{childProfile.xp} / {childProfile.nextLevelXp} XP</span>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </div>
        </div>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 border-0 shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-[#FF6B9D] to-[#FF8B67] flex items-center justify-center">
            <Video className="w-6 h-6 text-white" />
          </div>
          <p className="text-2xl text-[#FF6B9D] mb-1">24</p>
          <p className="text-sm text-muted-foreground">فيديو</p>
        </Card>

        <Card className="p-4 border-0 shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-[#9C6FFF] to-[#B991FF] flex items-center justify-center">
            <Book className="w-6 h-6 text-white" />
          </div>
          <p className="text-2xl text-[#9C6FFF] mb-1">15</p>
          <p className="text-sm text-muted-foreground">قصة</p>
        </Card>

        <Card className="p-4 border-0 shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-[#4ECAFF] to-[#5FD08A] flex items-center justify-center">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <p className="text-2xl text-[#4ECAFF] mb-1">8</p>
          <p className="text-sm text-muted-foreground">لعبة</p>
        </Card>

        <Card className="p-4 border-0 shadow-md text-center">
          <div className="w-12 h-12 mx-auto mb-2 rounded-2xl bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <p className="text-2xl text-[#FFB84D] mb-1">5</p>
          <p className="text-sm text-muted-foreground">نشاط</p>
        </Card>
      </div>

      {/* Badges & Achievements */}
      <Card className="border-0 shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2>الشارات والإنجازات</h2>
          <Badge variant="secondary" className="rounded-full">
            {badges.filter(b => b.unlocked).length} / {badges.length}
          </Badge>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className={`relative p-4 rounded-2xl text-center transition-all ${
                badge.unlocked
                  ? "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-md"
                  : "bg-gray-100 opacity-50"
              }`}
            >
              {!badge.unlocked && (
                <div className="absolute top-2 right-2">
                  <Lock className="w-4 h-4 text-gray-400" />
                </div>
              )}
              
              <div 
                className={`w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center ${
                  badge.unlocked 
                    ? "bg-gradient-to-br shadow-lg" 
                    : "bg-gray-200"
                }`}
                style={badge.unlocked ? { 
                  backgroundImage: `linear-gradient(135deg, ${badge.color}, ${badge.color}DD)` 
                } : {}}
              >
                <Award className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-sm mb-1">{badge.name}</h4>
              {badge.unlocked && (
                <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                  <Star className="w-3 h-3 fill-current text-[#FFB84D]" />
                  <span>مكتسب</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <Card className="border-0 shadow-lg p-6">
        <h3 className="mb-4">الإعدادات</h3>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-full justify-start"
          >
            <User className="w-5 h-5 ml-3" />
            <span>تعديل الملف الشخصي</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full h-12 rounded-full justify-start"
            onClick={() => onNavigate("parent-dashboard")}
          >
            <Trophy className="w-5 h-5 ml-3" />
            <span>لوحة تحكم الأهل</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
