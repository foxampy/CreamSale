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
    <nav className="fixed bottom-2 left-0 right-0 bg-transparent px-2 py-2 z-50">
      <div className="flex justify-center gap-1 max-w-md mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => (
          <button
            key={path}
            onClick={() => setLocation(path)}
            className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 ${
              isActive(path)
                ? "neumorphic-pressed bg-primary/10"
                : "neumorphic hover:shadow-lg"
            }`}
            title={t(label)}
          >
            <Icon
              size={18}
              className={`transition-colors duration-300 ${
                isActive(path) ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span
              className={`text-[9px] mt-0.5 font-medium transition-colors duration-300 ${
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
