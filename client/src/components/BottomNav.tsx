import { useLocation } from "wouter";
import { Home, ShoppingBag, Gift, User, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BottomNav() {
  const [location, setLocation] = useLocation();
  const { t } = useLanguage();

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/", icon: Home, label: "nav-home" },
    { path: "/marketplace", icon: ShoppingBag, label: "nav-deals" },
    { path: "/rewards", icon: Gift, label: "nav-savings" },
    { path: "/cards", icon: CreditCard, label: "nav-cards" },
    { path: "/profile", icon: User, label: "nav-profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-transparent px-3 py-4 z-50">
      <div className="flex justify-center gap-2 max-w-md mx-auto flex-wrap">
        {navItems.map(({ path, icon: Icon, label }) => (
          <button
            key={path}
            onClick={() => setLocation(path)}
            className={`flex flex-col items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl transition-all duration-300 ${
              isActive(path)
                ? "neumorphic-pressed bg-primary/10"
                : "neumorphic hover:shadow-lg"
            }`}
            title={t(label)}
          >
            <Icon
              size={20}
              className={`transition-colors duration-300 ${
                isActive(path) ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span
              className={`text-[10px] md:text-xs mt-1 font-medium transition-colors duration-300 ${
                isActive(path) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t(label)}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
