import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#FF6B9D] via-[#9C6FFF] to-[#4ECAFF] p-8 md:p-12 lg:p-16">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center text-center gap-6 lg:gap-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 0],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="relative z-10"
          >
            <Sparkles
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-white"
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Animated circles around icon */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full"
              style={{
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                x: [
                  "-50%",
                  `${Math.cos((i * Math.PI) / 2) * 60 - 50}%`,
                  "-50%",
                ],
                y: [
                  "-50%",
                  `${Math.sin((i * Math.PI) / 2) * 60 - 50}%`,
                  "-50%",
                ],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white max-w-2xl"
        >
          مرحباً بك في منصتنا
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-white/90 max-w-xl"
        >
          رحلة تعليمية ممتعة مليئة بالقصص والألعاب والأنشطة المصممة خصيصاً
          للأطفال من سن 6 إلى 10 سنوات
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-[#9C6FFF] hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-10 rounded-full"
          >
            <span>ابدأ الآن</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
