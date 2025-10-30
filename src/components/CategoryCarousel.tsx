import { Video, BookOpen, Gamepad2, Palette } from "lucide-react";
import { motion } from "motion/react";

const categories = [
  {
    id: 1,
    name: "فيديوهات",
    icon: Video,
    color: "from-[#FF6B9D] to-[#FF8B67]",
    bgColor: "bg-gradient-to-br from-[#FF6B9D]/10 to-[#FF8B67]/10",
  },
  {
    id: 2,
    name: "قصص",
    icon: BookOpen,
    color: "from-[#9C6FFF] to-[#B991FF]",
    bgColor: "bg-gradient-to-br from-[#9C6FFF]/10 to-[#B991FF]/10",
  },
  {
    id: 3,
    name: "ألعاب",
    icon: Gamepad2,
    color: "from-[#4ECAFF] to-[#5FD08A]",
    bgColor: "bg-gradient-to-br from-[#4ECAFF]/10 to-[#5FD08A]/10",
  },
  {
    id: 4,
    name: "أنشطة",
    icon: Palette,
    color: "from-[#FFB84D] to-[#FF8B67]",
    bgColor: "bg-gradient-to-br from-[#FFB84D]/10 to-[#FF8B67]/10",
  },
];

export function CategoryCarousel() {
  return (
    <section className="py-6">
      <h2 className="mb-6 px-4">اختر ما يناسبك</h2>

      <div className="flex gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide snap-x snap-mandatory">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 snap-start flex flex-col items-center justify-center gap-3 ${category.bgColor} rounded-2xl p-6 min-w-[140px] h-[140px] md:min-w-40 md:h-40 border-2 border-transparent hover:border-white shadow-md hover:shadow-lg transition-all duration-300`}
            >
              <div
                className={`p-3 rounded-2xl bg-linear-to-br ${category.color}`}
              >
                <Icon
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                  strokeWidth={2}
                />
              </div>
              <span className="text-foreground">{category.name}</span>
            </motion.button>
          );
        })}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
