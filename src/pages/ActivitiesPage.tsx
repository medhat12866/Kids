import { ActivityCard } from "../components/ActivityCard";
import { activities } from "../data/sampleData";
import { Palette, Sparkles } from "lucide-react";

interface ActivitiesPageProps {
  onNavigate: (page: string) => void;
}

export function ActivitiesPage({ onNavigate }: ActivitiesPageProps) {
  return (
    <div className="space-y-6 px-4">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1>الأنشطة الإبداعية</h1>
            <p className="text-muted-foreground">
              استكشف أنشطة ممتعة وإبداعية
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-gradient-to-br from-[#9C6FFF]/10 to-[#4ECAFF]/10 border-2 border-[#9C6FFF]/20">
          <div className="flex items-start gap-3">
            <Sparkles className="w-6 h-6 text-[#9C6FFF] flex-shrink-0 mt-1" />
            <div>
              <h4 className="mb-1">نصيحة اليوم</h4>
              <p className="text-sm text-muted-foreground">
                جرب نشاطاً جديداً اليوم واكتشف موهبتك الإبداعية!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <ActivityCard
            key={activity.id}
            activity={activity}
            onStart={() => console.log("Start activity:", activity.id)}
          />
        ))}
      </div>
    </div>
  );
}
