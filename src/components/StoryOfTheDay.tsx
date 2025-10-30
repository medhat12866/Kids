import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { BookOpen, Volume2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";

export function StoryOfTheDay() {
  const [mode, setMode] = useState<"read" | "listen">("read");

  return (
    <section className="py-6 px-4">
      <h2 className="mb-6">قصة اليوم</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border-0 shadow-lg">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative aspect-[4/3] md:aspect-auto bg-gradient-to-br from-[#FFB84D]/20 to-[#FF8B67]/20">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1684859634430-3fb8d390e119?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGtpZHMlMjBib29rc3xlbnwxfHx8fDE3NjE3NTg4NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="قصة الأرنب الصغير"
                className="w-full h-full object-cover"
              />
              
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-[#FFB84D] text-white px-4 py-2 rounded-full shadow-lg">
                <span>جديد</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 space-y-4 flex flex-col">
              <div className="space-y-3 flex-1">
                <h3>الأرنب الصغير وحديقة الورود</h3>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>يروي القصة: أحمد السعيد</span>
                </div>
                
                <p className="text-muted-foreground">
                  قصة جميلة عن الصداقة والتعاون بين الأصدقاء في الحديقة الملونة
                </p>
              </div>
              
              {/* Toggle Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={() => setMode("read")}
                  className={`flex-1 h-12 rounded-full transition-all ${
                    mode === "read"
                      ? "bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <BookOpen className="w-5 h-5 ml-2" />
                  <span>اقرأ الآن</span>
                </Button>
                
                <Button
                  onClick={() => setMode("listen")}
                  className={`flex-1 h-12 rounded-full transition-all ${
                    mode === "listen"
                      ? "bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Volume2 className="w-5 h-5 ml-2" />
                  <span>استمع الآن</span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
