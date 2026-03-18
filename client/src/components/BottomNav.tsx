import { useLocation } from "wouter";
import { Home, ShoppingBag, Gift, User, CreditCard } from "lucide-react";

export default function BottomNav() {
  const [location, setLocation] = useLocation();

  const isActive = (path: string) => location === path;

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/marketplace", icon: ShoppingBag, label: "Deals" },
    { path: "/rewards", icon: Gift, label: "Rewards" },
    { path: "/cards", icon: CreditCard, label: "Cards" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <>
      {/* Navigation Tiles */}
      <nav className="fixed bottom-0 left-0 right-0 bg-transparent px-3 py-4">
        <div className="flex justify-center gap-2 max-w-md mx-auto flex-wrap">
          {navItems.map(({ path, icon: Icon, label }) => (
            <button
              key={path}
              onClick={() => setLocation(path)}
              className={`flex flex-col items-center justify-center w-20 h-20 rounded-2xl transition-all duration-300 ${
                isActive(path)
                  ? "neumorphic-pressed bg-primary/10"
                  : "neumorphic hover:shadow-lg"
              }`}
              title={label}
            >
              <Icon
                size={24}
                className={`transition-colors duration-300 ${
                  isActive(path) ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span
                className={`text-xs mt-1 font-medium transition-colors duration-300 ${
                  isActive(path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-end justify-center pb-28 pointer-events-none">
        <div className="neumorphic-pressed px-4 py-2 text-center">
          <p className="text-xs text-muted-foreground">
            © 2020 CreamSale • Developed by Foxampy
          </p>
        </div>
      </footer>
    </>
  );
}
