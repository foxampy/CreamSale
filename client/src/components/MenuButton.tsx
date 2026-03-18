import { Menu, X, Home, ShoppingBag, Gift, CreditCard, User, BookOpen } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const menuItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/marketplace", icon: ShoppingBag, label: "Deals" },
    { path: "/rewards", icon: Gift, label: "My Savings" },
    { path: "/cards", icon: CreditCard, label: "Cards" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/update-2026", icon: BookOpen, label: "Research 2026" },
  ];

  const isActive = (path: string) => location === path;

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-20 left-4 z-40 neumorphic-btn p-3 md:hidden"
        aria-label="Open menu"
      >
        <Menu className="icon-monochrome" size={20} />
      </button>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-72 neumorphic-card z-50 overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <h2
                    className="text-xl font-light text-foreground"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    CreamSale
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="neumorphic-btn p-2"
                    aria-label="Close menu"
                  >
                    <X className="icon-monochrome" size={20} />
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Smart Shopping
                </p>
              </div>

              {/* Menu Items */}
              <nav className="p-4 space-y-2">
                {menuItems.map(({ path, icon: Icon, label }) => (
                  <button
                    key={path}
                    onClick={() => {
                      setLocation(path);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(path)
                        ? "neumorphic-pressed bg-primary/10"
                        : "neumorphic hover:shadow-lg"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`transition-colors ${
                        isActive(path) ? "text-primary" : "icon-monochrome"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        isActive(path) ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {label}
                    </span>
                    {isActive(path) && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-primary" />
                    )}
                  </button>
                ))}
              </nav>

              {/* Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  © 2020 CreamSale
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
