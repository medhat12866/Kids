import { StoryCard } from "../components/StoryCard";
import { stories } from "../data/sampleData";

interface StoriesPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function StoriesPage({ onNavigate }: StoriesPageProps) {
  return (
    <div className="space-y-6 px-4">
      <div className="space-y-2">
        <h1>مكتبة القصص</h1>
        <p className="text-muted-foreground">
          استمتع بقراءة أو الاستماع إلى قصص ممتعة ومفيدة
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            story={story}
            onRead={() => onNavigate("story-reader", story.id)}
            onListen={() => onNavigate("story-reader", story.id)}
          />
        ))}
      </div>
    </div>
  );
}
