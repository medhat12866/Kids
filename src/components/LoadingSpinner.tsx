import { motion } from "motion/react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({ size = "md" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className={`${sizeClasses[size]} rounded-full bg-linear-to-r from-[#FF6B9D] via-[#9C6FFF] to-[#4ECAFF]`}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: {
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          maskImage: "radial-gradient(circle, transparent 40%, black 40%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 40%, black 40%)",
        }}
      />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-muted-foreground">جاري التحميل...</p>
      </div>
    </div>
  );
}
