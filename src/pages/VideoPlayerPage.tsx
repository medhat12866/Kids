import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import ReactPlayer from "react-player";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  ArrowRight,
  Heart,
  Check,
  Lightbulb,
  Puzzle,
} from "lucide-react";
import { videos } from "../data/sampleData";

interface VideoPlayerPageProps {
  videoId?: number;
  onNavigate: (page: string) => void;
}

export function VideoPlayerPage({
  videoId = 1,
  onNavigate,
}: VideoPlayerPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);

  const video = videos.find((v) => v.id === videoId) || videos[0];

  return (
    <div className="space-y-6">
      {/* Back Button */}
      <div className="px-4">
        <Button
          variant="ghost"
          onClick={() => onNavigate("videos")}
          className="h-11 rounded-full"
        >
          <ArrowRight className="w-5 h-5 ml-2" />
          <span>العودة إلى المكتبة</span>
        </Button>
      </div>

      {/* Video Player */}

      <ReactPlayer
        src={video.url}
        playing={isPlaying}
        muted={isMuted}
        width="60%"
        height="70vh"
        controls={true}
        className="w-full h-full mx-auto mt-10 object-cover rounded-lg"
      />
      {/* Video Info and Tabs */}
      <div className="px-4">
        <Card className="border-0 shadow-lg p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4 gap-4">
            <div className="flex-1">
              <h2 className="mb-3">{video.title}</h2>
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
                <Badge variant="outline" className="rounded-full">
                  {video.duration}
                </Badge>
              </div>
            </div>

            <div className="flex gap-2 flex-shrink-0">
              <Button
                onClick={() => setIsFavorite(!isFavorite)}
                variant="outline"
                className="h-12 w-12 rounded-full p-0 border-2"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? "fill-current text-[#FF6B9D]" : ""
                  }`}
                />
              </Button>

              <Button
                onClick={() => setIsWatched(!isWatched)}
                variant="outline"
                className="h-12 w-12 rounded-full p-0 border-2"
              >
                <Check
                  className={`w-5 h-5 ${isWatched ? "text-[#5FD08A]" : ""}`}
                />
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="description" dir="rtl">
            <TabsList className="w-full justify-start mb-6">
              <TabsTrigger value="description">الوصف</TabsTrigger>
              <TabsTrigger value="lessons">الدروس المستفادة</TabsTrigger>
              <TabsTrigger value="activities">أنشطة</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {video.description}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                هذا الفيديو التعليمي مصمم خصيصاً للأطفال من سن {video.ageRange}{" "}
                ويقدم محتوى تعليمي ممتع وآمن يساعد على تنمية مهارات الطفل وقيمه
                الأخلاقية.
              </p>
            </TabsContent>

            <TabsContent value="lessons" className="space-y-4">
              <div className="space-y-3">
                {[
                  "أهمية الصدق في حياتنا اليومية",
                  "كيف يبني الصدق الثقة بين الناس",
                  "عواقب الكذب على العلاقات",
                ].map((lesson, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-[#9C6FFF]/10 to-[#4ECAFF]/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#9C6FFF] to-[#4ECAFF] flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <p className="flex-1 pt-1">{lesson}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activities" className="space-y-4">
              <p className="text-muted-foreground mb-4">
                جرب هذه الأنشطة لتعزيز ما تعلمته من الفيديو
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-4 border-2 hover:border-[#9C6FFF] transition-colors cursor-pointer">
                  <h4 className="mb-2">ورقة عمل: قصص الصدق</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    اكتب قصة قصيرة عن موقف كنت فيه صادقاً
                  </p>
                  <Button
                    className="w-full h-10 rounded-full"
                    variant="outline"
                  >
                    تحميل PDF
                  </Button>
                </Card>

                <Card className="p-4 border-2 hover:border-[#9C6FFF] transition-colors cursor-pointer">
                  <h4 className="mb-2">لعبة: اختبر معلوماتك</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    أسئلة ممتعة حول الفيديو
                  </p>
                  <Button className="w-full h-10 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF]">
                    ابدأ اللعبة
                  </Button>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
