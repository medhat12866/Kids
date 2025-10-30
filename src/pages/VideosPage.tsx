import { useState, useMemo, useCallback } from "react";
import { VideoCard } from "../components/VideoCard";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Search, Filter } from "lucide-react";
import { videos } from "../data/sampleData";
import { debounce } from "../utils/debounce";

interface VideosPageProps {
  onNavigate: (page: string, id?: number) => void;
}

export function VideosPage({ onNavigate }: VideosPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [ageFilter, setAgeFilter] = useState("all");
  const [topicFilter, setTopicFilter] = useState("all");

  // Debounced search handler
  const handleSearchDebounced = useCallback(
    debounce((value: string) => {
      setDebouncedQuery(value);
    }, 300),
    []
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    handleSearchDebounced(value);
  };

  // Memoize filtered results
  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const matchesSearch = video.title.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchesAge = ageFilter === "all" || video.ageRange === ageFilter;
      const matchesTopic = topicFilter === "all" || video.topic === topicFilter;
      return matchesSearch && matchesAge && matchesTopic;
    });
  }, [debouncedQuery, ageFilter, topicFilter]);

  return (
    <div className="space-y-6 px-4">
      <div className="space-y-4">
        <h1>مكتبة الفيديوهات</h1>
        
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="ابحث عن فيديو..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-14 pr-12 rounded-full border-2 focus-visible:ring-[#9C6FFF]"
          />
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap items-center">
          <Filter className="w-5 h-5 text-muted-foreground" />
          
          <Select value={ageFilter} onValueChange={setAgeFilter}>
            <SelectTrigger className="w-[160px] h-11 rounded-full border-2">
              <SelectValue placeholder="العمر" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع الأعمار</SelectItem>
              <SelectItem value="6-7 سنوات">6-7 سنوات</SelectItem>
              <SelectItem value="6-8 سنوات">6-8 سنوات</SelectItem>
              <SelectItem value="8-10 سنوات">8-10 سنوات</SelectItem>
            </SelectContent>
          </Select>

          <Select value={topicFilter} onValueChange={setTopicFilter}>
            <SelectTrigger className="w-[160px] h-11 rounded-full border-2">
              <SelectValue placeholder="الموضوع" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">جميع المواضيع</SelectItem>
              <SelectItem value="القيم">القيم</SelectItem>
              <SelectItem value="اللغة">اللغة</SelectItem>
              <SelectItem value="الرياضيات">الرياضيات</SelectItem>
              <SelectItem value="العلوم">العلوم</SelectItem>
              <SelectItem value="القصص الدينية">القصص الدينية</SelectItem>
              <SelectItem value="الحيوانات">الحيوانات</SelectItem>
            </SelectContent>
          </Select>

          {(ageFilter !== "all" || topicFilter !== "all") && (
            <Button
              variant="ghost"
              onClick={() => {
                setAgeFilter("all");
                setTopicFilter("all");
              }}
              className="h-11 rounded-full"
            >
              إعادة تعيين
            </Button>
          )}
        </div>

        <p className="text-muted-foreground">
          {filteredVideos.length} فيديو متاح
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onPlay={() => onNavigate("video-player", video.id)}
          />
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#9C6FFF]/10 to-[#4ECAFF]/10 flex items-center justify-center">
            <Search className="w-12 h-12 text-muted-foreground" />
          </div>
          <h3 className="text-muted-foreground mb-2">لم نجد نتائج</h3>
          <p className="text-muted-foreground">جرب البحث بكلمات مختلفة</p>
        </div>
      )}
    </div>
  );
}
