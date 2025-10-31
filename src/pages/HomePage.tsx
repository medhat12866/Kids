import { HeroSection } from "../components/HeroSection";
import { CategoryCarousel } from "../components/CategoryCarousel";
import { VideoCard } from "../components/VideoCard";
import { StoryCard } from "../components/StoryCard";
import { GameCard } from "../components/GameCard";
import { ActivityCard } from "../components/ActivityCard";
import { videos, stories, games, activities } from "../data/sampleData";

interface HomePageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="space-y-8 md:space-y-12">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Navigation Carousel */}
      <CategoryCarousel />
      
      {/* Latest Video */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2>أحدث الفيديوهات</h2>
          <button 
            onClick={() => onNavigate("videos")}
            className="text-[#9C6FFF] hover:underline"
          >
            عرض الكل
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.slice(0, 3).map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onPlay={() => onNavigate("video-player", video.id)}
            />
          ))}
        </div>
      </section>

      {/* Story of the Day */}
      <section className="px-4">
        <h2 className="mb-6">قصة اليوم</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stories.slice(0, 4).map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onRead={() => onNavigate("story-reader", story.id)}
              onListen={() => onNavigate("story-reader", story.id)}
            />
          ))}
        </div>
      </section>

      {/* Featured Game */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2>الألعاب المميزة</h2>
          <button 
            onClick={() => onNavigate("games")}
            className="text-[#9C6FFF] hover:underline"
          >
            عرض الكل
          </button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.slice(0, 3).map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onPlay={() => console.log("Play game:", game.id)}
            />
          ))}
        </div>
      </section>

      {/* Creative Activity */}
      <section className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h2>أنشطة إبداعية</h2>
          <button 
            onClick={() => onNavigate("activities")}
            className="text-[#9C6FFF] hover:underline"
          >
            عرض الكل
          </button>
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
      </section>
    </div>
  );
}
