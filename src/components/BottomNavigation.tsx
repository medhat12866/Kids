import { Home, Library, Gamepad2, Heart, User } from "lucide-react";

interface BottomNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNavigation({
  currentPage,
  onNavigate,
}: BottomNavigationProps) {
  const navItems = [
    { id: "home", label: "الرئيسية", icon: Home },
    { id: "videos", label: "المكتبة", icon: Library },
    { id: "games", label: "ألعاب", icon: Gamepad2 },
    { id: "favorites", label: "المفضلة", icon: Heart },
    { id: "profile", label: "الملف", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg md:hidden z-50">
      <div className="flex items-center justify-around h-20 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[60px] h-16 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-linear-to-br from-[#FF6B9D]/10 to-[#9C6FFF]/10"
                  : "hover:bg-gray-50"
              }`}
            >
              <Icon
                className={`w-6 h-6 transition-colors ${
                  isActive ? "text-[#9C6FFF]" : "text-gray-500"
                }`}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-[#9C6FFF]" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
