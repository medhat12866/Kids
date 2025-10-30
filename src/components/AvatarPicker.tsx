import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const avatarOptions = [
  { id: 1, emoji: "🦁", color: "from-[#FFB84D] to-[#FF8B67]", name: "أسد" },
  { id: 2, emoji: "🐰", color: "from-[#FF6B9D] to-[#FF8B67]", name: "أرنب" },
  { id: 3, emoji: "🐻", color: "from-[#9C6FFF] to-[#B991FF]", name: "دب" },
  { id: 4, emoji: "🦊", color: "from-[#FF8B67] to-[#FFB84D]", name: "ثعلب" },
  { id: 5, emoji: "🐼", color: "from-[#4ECAFF] to-[#5FD08A]", name: "باندا" },
  { id: 6, emoji: "🐨", color: "from-[#B991FF] to-[#9C6FFF]", name: "كوالا" },
  { id: 7, emoji: "🦄", color: "from-[#FF6B9D] to-[#9C6FFF]", name: "يونيكورن" },
  { id: 8, emoji: "🐸", color: "from-[#5FD08A] to-[#4ECAFF]", name: "ضفدع" }
];

interface AvatarPickerProps {
  selectedId?: number;
  onSelect: (id: number) => void;
}

export function AvatarPicker({ selectedId = 1, onSelect }: AvatarPickerProps) {
  const [selected, setSelected] = useState(selectedId);

  const handleSelect = (id: number) => {
    setSelected(id);
    onSelect(id);
  };

  return (
    <Card className="border-0 shadow-lg p-6">
      <h3 className="mb-6">اختر صورتك الشخصية</h3>
      
      <div className="grid grid-cols-4 gap-4">
        {avatarOptions.map((avatar) => (
          <motion.button
            key={avatar.id}
            onClick={() => handleSelect(avatar.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div 
              className={`aspect-square rounded-2xl bg-gradient-to-br ${avatar.color} flex items-center justify-center text-4xl transition-all ${
                selected === avatar.id 
                  ? "ring-4 ring-[#9C6FFF] ring-offset-2" 
                  : "hover:shadow-lg"
              }`}
            >
              {avatar.emoji}
              
              {selected === avatar.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#9C6FFF] flex items-center justify-center shadow-lg"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
              )}
            </div>
            <p className="text-xs text-center mt-2 text-muted-foreground">
              {avatar.name}
            </p>
          </motion.button>
        ))}
      </div>

      <Button 
        className="w-full h-12 rounded-full bg-gradient-to-r from-[#9C6FFF] to-[#4ECAFF] hover:opacity-90 mt-6"
      >
        حفظ الصورة
      </Button>
    </Card>
  );
}
