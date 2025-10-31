import React from "react";

import {
  LayoutDashboard,
  Video,
  BookOpen,
  Users,
  BarChart3,
  Settings,
  MessageCircle,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

interface DashboardSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onNavigate: (page: string) => void;
}

const menuItems = [
  { id: "overview", label: "نظرة عامة", icon: LayoutDashboard },
  { id: "videos", label: "إدارة الفيديوهات", icon: Video },
  { id: "lessons", label: "إدارة الدروس", icon: BookOpen },
  { id: "users", label: "إدارة المستخدمين", icon: Users },
  { id: "reports", label: "التقارير والإحصائيات", icon: BarChart3 },
  { id: "settings", label: "الإعدادات", icon: Settings },
  { id: "support", label: "الدعم", icon: MessageCircle },
];

export function DashboardSidebar({
  isOpen,
  onToggle,
  activeSection,
  onSectionChange,
}: DashboardSidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 right-0 h-screen bg-white z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
          w-72 lg:w-64 border-l border-gray-200 flex flex-col
        `}
        style={{ direction: "rtl" }}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <span className="text-white">🌙</span>
            </div>
            <div>
              <h2 className="text-lg">منصة التعليم</h2>
              <p className="text-xs text-gray-500">لوحة التحكم</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSectionChange(item.id);
                      if (window.innerWidth < 1024) {
                        onToggle();
                      }
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200
                      ${
                        isActive
                          ? "bg-gradient-to-l from-purple-100 to-pink-100 text-purple-700"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="h-5 w-5 flex-shrink-0" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
