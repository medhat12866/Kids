import { Trophy, Star, Award, Zap } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";

interface RewardBadgeProps {
  type: "xp" | "trophy" | "star" | "achievement";
  value?: number;
  label?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
}

export function RewardBadge({
  type,
  value,
  label,
  size = "md",
  animated = false,
}: RewardBadgeProps) {
  const icons = {
    xp: Zap,
    trophy: Trophy,
    star: Star,
    achievement: Award,
  };

  const colors = {
    xp: "from-[#FFB84D] to-[#FF8B67]",
    trophy: "from-[#FF6B9D] to-[#FF8B67]",
    star: "from-[#FFB84D] to-[#FFD700]",
    achievement: "from-[#9C6FFF] to-[#4ECAFF]",
  };

  const sizes = {
    sm: { icon: "w-4 h-4", container: "w-8 h-8", text: "text-sm" },
    md: { icon: "w-5 h-5", container: "w-10 h-10", text: "text-base" },
    lg: { icon: "w-6 h-6", container: "w-12 h-12", text: "text-lg" },
  };

  const Icon = icons[type];
  const color = colors[type];
  const { icon, container, text } = sizes[size];

  const content = (
    <Badge
      className={`gap-2 pr-2 pl-3 h-9 bg-linear-to-r ${color} text-white border-0 hover:opacity-90`}
    >
      <div
        className={`${container} rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center`}
      >
        <Icon className={icon} />
      </div>
      <span className={text}>
        {value ? `+${value}` : ""} {label || type.toUpperCase()}
      </span>
    </Badge>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
