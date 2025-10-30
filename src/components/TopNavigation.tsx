import { Home, Library, Gamepad2, Heart, User, Users, Menu } from "lucide-react";
import { Button } from "./ui/button";

interface TopNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function TopNavigation({ currentPage, onNavigate }: TopNavigationProps) {
  const navItems = [
    { id: "home", label: "الرئيسية", icon: Home },
    { id: "videos", label: "المكتبة", icon: Library },
    { id: "games", label: "الألعاب", icon: Gamepad2 },
    { id: "activities", label: "الأنشطة", icon: Menu },
    { id: "favorites", label: "المفضلة", icon: Heart }
  ];

  return (
    <nav className="hidden md:block sticky top-0 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm z-50">
      <div className="max-w-[1280px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B9D] to-[#9C6FFF] flex items-center justify-center">
              <span className="text-white text-xl">🌟</span>
            </div>
            <div>
              <h3 className="text-[#9C6FFF]">منصة التعليم</h3>
              <p className="text-xs text-muted-foreground">للأطفال من 6-10 سنوات</p>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <Button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  variant={isActive ? "default" : "ghost"}
                  className={`h-11 px-6 rounded-full ${
                    isActive 
                      ? "bg-gradient-to-r from-[#FF6B9D] to-[#9C6FFF] text-white hover:opacity-90" 
                      : ""
                  }`}
                >
                  <Icon className="w-5 h-5 ml-2" />
                  <span>{item.label}</span>
                </Button>
              );
            })}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button
              onClick={() => onNavigate("parent-dashboard")}
              variant="outline"
              className="h-11 px-6 rounded-full border-2"
            >
              <Users className="w-5 h-5 ml-2" />
              <span>لوحة الأهل</span>
            </Button>
            
            <Button
              onClick={() => onNavigate("profile")}
              variant="ghost"
              className="h-11 w-11 rounded-full p-0"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFB84D] to-[#FF8B67] flex items-center justify-center text-white">
                <User className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
