import { Search, Camera, Zap, TrendingUp, Gift, Shield, ShoppingCart, Tag, Users, CreditCard, Percent, Sparkles, ChevronRight, Star, Clock, Flame, Globe } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Hot Products CreamSale 2020 with real Unsplash images
const hotProducts = [
  {
    id: 1,
    name: "Apple AirPods Pro",
    originalPrice: 249.99,
    salePrice: 189.99,
    discount: 24,
    coins: 1899,
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=400&h=400&fit=crop",
    badges: ["HOT", "5% Cashback"],
  },
  {
    id: 2,
    name: "Sony PlayStation 5",
    originalPrice: 549.99,
    salePrice: 449.99,
    discount: 18,
    coins: 4499,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    badges: ["TOP", "0% APR"],
  },
  {
    id: 3,
    name: "Dyson V15 Detect",
    originalPrice: 749.99,
    salePrice: 599.99,
    discount: 20,
    coins: 5999,
    image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
    badges: ["-20%", "3000₿ Bonus"],
  },
  {
    id: 4,
    name: "MacBook Air M2",
    originalPrice: 1299.99,
    salePrice: 1049.99,
    discount: 19,
    coins: 10499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
    badges: ["HOT", "8% Cashback"],
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    originalPrice: 1199.99,
    salePrice: 949.99,
    discount: 21,
    coins: 9499,
    image: "https://images.unsplash.com/photo-1678685888221-cda180f3f048?w=400&h=400&fit=crop",
    badges: ["TOP", "Trade-in"],
  },
  {
    id: 6,
    name: "Samsung QLED 65\"",
    originalPrice: 1499.99,
    salePrice: 1199.99,
    discount: 20,
    coins: 11999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    badges: ["-$300", "Bonuses"],
  },
];

// Seller filters
const sellerFilters = [
  { id: "original", label: "original-store", icon: Shield, color: "text-emerald-600" },
  { id: "reseller", label: "licensed-reseller", icon: Shield, color: "text-blue-600" },
  { id: "trusted", label: "trusted-stores", icon: Star, color: "text-amber-600" },
  { id: "unknown", label: "unknown-seller", icon: Users, color: "text-gray-500" },
];

// Savings types
const savingsTypes = [
  { id: "discount", label: "site-discount", icon: Tag, value: "up to 30%" },
  { id: "cashback", label: "cashback", icon: Percent, value: "up to 15%" },
  { id: "referral", label: "referral", icon: Users, value: "up to 10%" },
  { id: "promocode", label: "promocode", icon: Gift, value: "up to 20%" },
  { id: "card", label: "bank-card", icon: CreditCard, value: "up to 12%" },
  { id: "loyalty", label: "loyalty-card", icon: Star, value: "up to 8%" },
  { id: "coins", label: "coins", icon: Sparkles, value: "up to 5%" },
];

export default function Home() {
  const { t, language, setLanguage } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["original", "reseller", "trusted"]);
  const [activeStep, setActiveStep] = useState(0);

  const toggleFilter = (id: string) => {
    setSelectedFilters(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const steps = [
    {
      number: "01",
      title: "enter-product",
      description: "enter-product-desc",
      icon: Search,
      color: "from-amber-400 to-amber-500",
    },
    {
      number: "02",
      title: "run-algorithm",
      description: "run-algorithm-desc",
      icon: Zap,
      color: "from-amber-500 to-amber-600",
    },
    {
      number: "03",
      title: "buy-smart",
      description: "buy-smart-desc",
      icon: ShoppingCart,
      color: "from-amber-600 to-amber-700",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLanguage(language === "en" ? "ru" : "en")}
          className="neumorphic-btn p-3 flex items-center gap-2"
        >
          <Globe className="icon-monochrome" size={18} />
          <span className="text-xs font-semibold uppercase">{language}</span>
        </button>
      </div>

      {/* Hero Section - Marketing Funnel */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-transparent" />
        
        <div className="relative px-4 pt-12 pb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1
              className="text-4xl md:text-5xl font-light text-primary mb-2 tracking-wide"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {t("creamsale")}
            </h1>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              {t("smart-shopping")}
            </p>
          </motion.div>

          {/* Main CTA - 3 Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-xl md:text-2xl font-light text-center text-foreground mb-2">
              {t("find-any-product")}
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8 max-w-lg mx-auto">
              {t("comprehensive-analysis")}
            </p>

            {/* Steps - Desktop: horizontal, Mobile: vertical */}
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onClick={() => setActiveStep(index)}
                  className={`neumorphic-card p-5 cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "neumorphic-pressed" : ""
                  }`}
                >
                  <div className="flex md:flex-col items-center md:items-start gap-4">
                    <div className={`neumorphic-icon w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color} flex-shrink-0`}>
                      <step.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">STEP {step.number}</span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground mt-1">{t(step.title)}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{t(step.description)}</p>
                    </div>
                    <ChevronRight className={`icon-monochrome transition-transform duration-300 hidden md:block ${
                      activeStep === index ? "rotate-90" : ""
                    }`} size={20} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="neumorphic-card p-2 mb-8 max-w-2xl mx-auto"
          >
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-3">
                <Search className="icon-monochrome" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t("search-placeholder")}
                  className="neumorphic-input flex-1 py-3 text-sm"
                />
              </div>
              <button className="neumorphic-btn p-3 hidden sm:block" title="Search by photo">
                <Camera className="icon-monochrome" size={20} />
              </button>
              <button className="gradient-button px-5 py-3 text-sm font-medium">
                {t("search")}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seller Filters */}
      <section className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Shield className="icon-monochrome" size={16} />
            {t("seller-sources")}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sellerFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`neumorphic p-3 rounded-lg transition-all duration-300 ${
                  selectedFilters.includes(filter.id)
                    ? "neumorphic-pressed"
                    : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <filter.icon className={`icon-monochrome ${filter.color}`} size={18} />
                  <span className="text-xs font-medium text-foreground text-left">{t(filter.label)}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Savings Types - Comprehensive Analysis */}
      <section className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neumorphic-card p-5"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="icon-monochrome" size={18} />
              {t("comprehensive-savings")}
            </h3>
            <span className="gradient-badge">{t("max-benefit")}</span>
          </div>
          
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            {t("savings-info")}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {savingsTypes.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ scale: 1.05 }}
                className="neumorphic-pressed p-3 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <type.icon className="icon-monochrome" size={14} />
                  <span className="text-xs font-medium text-foreground">{t(type.label)}</span>
                </div>
                <span className="text-xs text-primary font-semibold">{type.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hot Products - CreamSale 2020 */}
      <section className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg md:text-xl font-light text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
              <Flame className="text-primary" size={20} />
              {t("hot-products")}
            </h3>
            <span className="text-xs text-muted-foreground">{t("creamsale-2020")}</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {hotProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.03 }}
                className="neumorphic-card p-4"
              >
                {/* Badges */}
                <div className="flex gap-1 mb-3 flex-wrap">
                  {product.badges.map((badge) => (
                    <span key={badge} className="gradient-badge text-[10px] px-2 py-0.5">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Product Image */}
                <div className="neumorphic-pressed w-full aspect-square rounded-lg overflow-hidden mb-3 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <h4 className="text-sm font-medium text-foreground mb-2 line-clamp-2 min-h-[2.5rem]">
                  {product.name}
                </h4>

                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-sm font-bold text-primary">
                    ${product.salePrice.toFixed(2)}
                  </span>
                </div>

                {/* Discount & Coins */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-success">
                    -{product.discount}%
                  </span>
                  <div className="flex items-center gap-1">
                    <Sparkles className="text-primary" size={12} />
                    <span className="text-xs font-medium text-primary">
                      +{product.coins.toLocaleString()} ₿
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="neumorphic-btn w-full mt-3 py-2 text-xs font-medium">
                  {t("buy-now")}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="neumorphic-card p-5 max-w-3xl mx-auto"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4 text-center">
            {t("why-creamsale")}
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: Zap, title: "instant-savings", desc: "instant-savings-desc" },
              { icon: Shield, title: "verified-sellers", desc: "verified-sellers-desc" },
              { icon: Gift, title: "bonus-program", desc: "bonus-program-desc" },
              { icon: Clock, title: "time-saving", desc: "time-saving-desc" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <div className="neumorphic-icon p-2 flex-shrink-0">
                  <feature.icon className="icon-monochrome" size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{t(feature.title)}</h4>
                  <p className="text-xs text-muted-foreground">{t(feature.desc)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="neumorphic-card p-6 text-center max-w-md mx-auto"
        >
          <h3 className="text-base font-semibold text-foreground mb-2">
            {t("start-saving")}
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            {t("join-users")}
          </p>
          <button className="gradient-button w-full py-3 text-sm font-medium">
            {t("run-analysis")}
          </button>
        </motion.div>
      </section>
    </div>
  );
}
