import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { 
  ArrowRight, ArrowLeft, Volume2, VolumeX, 
  Heart, BookmarkPlus, Type
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { stories } from "../data/sampleData";
import { motion, AnimatePresence } from "motion/react";

interface StoryReaderPageProps {
  storyId?: number;
  onNavigate: (page: string) => void;
}

export function StoryReaderPage({ storyId = 1, onNavigate }: StoryReaderPageProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [fontSize, setFontSize] = useState("normal");
  
  const story = stories.find(s => s.id === storyId) || stories[0];

  const pages = [
    {
      text: "في يوم من الأيام، كان هناك أرنب صغير يعيش في الغابة الجميلة.",
      image: story.cover
    },
    {
      text: "كان الأرنب خجولاً ولكنه كان يحلم بأن يصبح شجاعاً مثل الأسد.",
      image: "https://images.unsplash.com/photo-1684859634430-3fb8d390e119?w=400"
    },
    {
      text: "في أحد الأيام، وجد طائراً صغيراً سقط من عشه ويحتاج للمساعدة.",
      image: "https://images.unsplash.com/photo-1757361414781-dfa67c106aa6?w=400"
    },
    {
      text: "تجاوز الأرنب خوفه وساعد الطائر الصغير بشجاعة كبيرة.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400"
    }
  ];

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const fontSizeClass = {
    small: "text-lg",
    normal: "text-xl md:text-2xl",
    large: "text-2xl md:text-3xl"
  }[fontSize];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEF9F5] to-[#FFE8F0]">
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm z-40">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <Button
            variant="ghost"
            onClick={() => onNavigate("stories")}
            className="h-11 rounded-full"
          >
            <ArrowRight className="w-5 h-5 ml-2" />
            <span>العودة</span>
          </Button>

          <div className="flex-1 text-center">
            <h3 className="line-clamp-1">{story.title}</h3>
            <p className="text-sm text-muted-foreground">
              صفحة {currentPage + 1} من {pages.length}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={() => {
                const sizes = ["small", "normal", "large"];
                const currentIndex = sizes.indexOf(fontSize);
                setFontSize(sizes[(currentIndex + 1) % sizes.length]);
              }}
              className="h-11 w-11 rounded-full p-0"
            >
              <Type className="w-5 h-5" />
            </Button>

            <Button
              variant="ghost"
              onClick={() => setIsFavorite(!isFavorite)}
              className="h-11 w-11 rounded-full p-0"
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-current text-[#FF6B9D]" : ""}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Story Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="border-0 shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] md:aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <ImageWithFallback
                  src={pages[currentPage].image}
                  alt={`صفحة ${currentPage + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Audio Control */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 left-4 w-14 h-14 rounded-full bg-white/95 shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {isPlaying ? (
                    <VolumeX className="w-6 h-6 text-[#9C6FFF]" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-[#9C6FFF]" />
                  )}
                </button>

                {/* Page indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
                  {currentPage + 1} / {pages.length}
                </div>
              </div>

              {/* Text Content */}
              <div className="p-8 md:p-12">
                <p className={`${fontSizeClass} leading-relaxed text-center`}>
                  {pages[currentPage].text}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="p-6 border-t border-border flex items-center justify-between gap-4">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="h-14 px-8 rounded-full"
              variant="outline"
            >
              <ArrowRight className="w-5 h-5 ml-2" />
              <span>السابق</span>
            </Button>

            {/* Page Dots */}
            <div className="flex items-center gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentPage
                      ? "w-8 bg-[#9C6FFF]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={handleNextPage}
              disabled={currentPage === pages.length - 1}
              className="h-14 px-8 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] hover:opacity-90"
            >
              <span>التالي</span>
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </div>
        </Card>

        {/* Story Info */}
        <Card className="mt-6 p-6 border-0 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center">
              <Volume2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h4>يروي القصة: {story.narrator}</h4>
              <p className="text-sm text-muted-foreground">{story.duration}</p>
            </div>
            <Button variant="outline" className="h-11 rounded-full">
              <BookmarkPlus className="w-5 h-5 ml-2" />
              <span>حفظ</span>
            </Button>
          </div>

          <p className="text-muted-foreground">
            {story.description}
          </p>
        </Card>
      </div>
    </div>
  );
}
