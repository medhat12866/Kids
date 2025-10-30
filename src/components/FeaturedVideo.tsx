import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Play, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function FeaturedVideo() {
  return (
    <section className="py-6 px-4">
      <h2 className="mb-6">الفيديو المميز</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="relative aspect-video bg-gradient-to-br from-[#9C6FFF]/20 to-[#4ECAFF]/20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1565373086464-c8af0d586c0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYxNzQ3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="فيديو تعليمي للأطفال"
              className="w-full h-full object-cover"
            />
            
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-[#FF6B9D] mr-1" fill="currentColor" />
              </motion.button>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <h3>رحلة إلى عالم الحروف العربية</h3>
            
            <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>6-8 سنوات</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>15 دقيقة</span>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              تعلم الحروف العربية بطريقة ممتعة وتفاعلية مع الأصدقاء المرحين
            </p>
            
            <Button className="w-full h-12 rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#9C6FFF] hover:opacity-90 transition-opacity">
              <span>مشاهدة الآن</span>
            </Button>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
