import { VideoCard } from "../components/VideoCard";
import { StoryCard } from "../components/StoryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Heart } from "lucide-react";
import { videos, stories } from "../data/sampleData";

interface FavoritesPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function FavoritesPage({ onNavigate }: FavoritesPageProps) {
  const favoriteVideos = videos.filter(v => v.favorite);
  const favoriteStories = stories.filter(s => s.favorite);

  return (
    <div className="space-y-6 px-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B9D] to-[#9C6FFF] flex items-center justify-center">
          <Heart className="w-6 h-6 text-white fill-current" />
        </div>
        <div>
          <h1>المفضلة</h1>
          <p className="text-muted-foreground">
            جميع الأشياء التي أحببتها
          </p>
        </div>
      </div>

      <Tabs defaultValue="videos" dir="rtl">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="videos">
            الفيديوهات ({favoriteVideos.length})
          </TabsTrigger>
          <TabsTrigger value="stories">
            القصص ({favoriteStories.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-6 mt-6">
          {favoriteVideos.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {favoriteVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onPlay={() => onNavigate("video-player", video.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF6B9D]/10 to-[#9C6FFF]/10 flex items-center justify-center">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-muted-foreground mb-2">لا توجد فيديوهات مفضلة بعد</h3>
              <p className="text-muted-foreground">
                ابدأ بإضافة فيديوهاتك المفضلة لتجدها هنا
              </p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="stories" className="space-y-6 mt-6">
          {favoriteStories.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {favoriteStories.map((story) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  onRead={() => onNavigate("story-reader", story.id)}
                  onListen={() => onNavigate("story-reader", story.id)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF6B9D]/10 to-[#9C6FFF]/10 flex items-center justify-center">
                <Heart className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-muted-foreground mb-2">لا توجد قصص مفضلة بعد</h3>
              <p className="text-muted-foreground">
                ابدأ بإضافة قصصك المفضلة لتجدها هنا
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
