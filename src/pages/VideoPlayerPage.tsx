import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Settings, 
  ArrowRight, Heart, Check, Lightbulb, Puzzle
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { videos } from "../data/sampleData";

interface VideoPlayerPageProps {
  videoId?: number;
  onNavigate: (page: string) => void;
}

export function VideoPlayerPage({ videoId = 1, onNavigate }: VideoPlayerPageProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);
  const [showCaptions, setShowCaptions] = useState(true);
  
  const video = videos.find(v => v.id === videoId) || videos[0];

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
      <div className="px-4">
        <Card className="overflow-hidden border-0 shadow-xl">
          <div className="relative aspect-video bg-black group">
            <ImageWithFallback
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover"
            />

            {/* Play/Pause Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-[#9C6FFF]" fill="currentColor" />
                ) : (
                  <Play className="w-10 h-10 text-[#9C6FFF] mr-1" fill="currentColor" />
                )}
              </button>
            </div>

            {/* Captions */}
            {showCaptions && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-lg max-w-[90%] text-center">
                <p>النص التوضيحي للفيديو يظهر هنا</p>
              </div>
            )}

            {/* Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-1/3 rounded-full" />
                </div>
              </div>

              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>

                  <span className="text-sm">5:30 / 15:00</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`px-3 h-8 rounded-full transition-colors ${
                      showCaptions ? "bg-white/20" : "hover:bg-white/20"
                    }`}
                  >
                    <span className="text-sm">CC</span>
                  </button>

                  <button className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Settings className="w-5 h-5" />
                  </button>

                  <button className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors">
                    <Maximize className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Quiz Popup (Example) */}
            {isPlaying && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-4 shadow-2xl max-w-md animate-in fade-in slide-in-from-top-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center flex-shrink-0">
                    <Puzzle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="mb-2">سؤال سريع!</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      ما هي القيمة المهمة التي تعلمناها؟
                    </p>
                    <div className="space-y-2">
                      <Button className="w-full h-10 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] hover:opacity-90 justify-start">
                        الصدق
                      </Button>
                      <Button variant="outline" className="w-full h-10 rounded-full justify-start">
                        الكذب
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>

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
                <Badge variant="outline" className="rounded-full border-[#9C6FFF] text-[#9C6FFF]">
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
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current text-[#FF6B9D]" : ""}`} />
              </Button>
              
              <Button
                onClick={() => setIsWatched(!isWatched)}
                variant="outline"
                className="h-12 w-12 rounded-full p-0 border-2"
              >
                <Check className={`w-5 h-5 ${isWatched ? "text-[#5FD08A]" : ""}`} />
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
                هذا الفيديو التعليمي مصمم خصيصاً للأطفال من سن {video.ageRange} ويقدم محتوى تعليمي ممتع وآمن يساعد على تنمية مهارات الطفل وقيمه الأخلاقية.
              </p>
            </TabsContent>

            <TabsContent value="lessons" className="space-y-4">
              <div className="space-y-3">
                {[
                  "أهمية الصدق في حياتنا اليومية",
                  "كيف يبني الصدق الثقة بين الناس",
                  "عواقب الكذب على العلاقات"
                ].map((lesson, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-[#9C6FFF]/10 to-[#4ECAFF]/10">
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
                  <Button className="w-full h-10 rounded-full" variant="outline">
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
