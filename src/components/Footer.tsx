import { Heart } from "lucide-react";

export function Footer() {
  const links = [
    { id: 1, label: "عن المنصة", href: "#about" },
    { id: 2, label: "اتصل بنا", href: "#contact" },
    { id: 3, label: "سياسة الخصوصية", href: "#privacy" },
  ];

  return (
    <footer className="mt-12 py-8 px-4 bg-linear-to-br from-[#F8F9FA] to-[#E9ECEF] rounded-t-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="text-muted-foreground hover:text-[#9C6FFF] transition-colors duration-300 min-h-11 flex items-center"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-6" />

        {/* Copyright */}
        <div className="text-center text-muted-foreground space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span>صُنع بكل</span>
            <Heart className="w-4 h-4 text-[#FF6B9D] fill-current" />
            <span>للأطفال</span>
          </div>
          <p>© 2025 منصة التعليم للأطفال. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
