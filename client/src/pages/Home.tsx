import { Search, Camera, Zap, TrendingUp, Gift, Shield, ShoppingCart, Tag, Users, CreditCard, Percent, Sparkles, ChevronRight, Star, Clock, Flame } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

// Горячие товары CreamSale 2020
const hotProducts = [
  {
    id: 1,
    name: "Apple AirPods Pro",
    originalPrice: 24999,
    salePrice: 18999,
    discount: 24,
    coins: 1899,
    image: "🎧",
    badges: ["ХИТ", "Кэшбэк 5%"],
  },
  {
    id: 2,
    name: "Sony PlayStation 5",
    originalPrice: 54999,
    salePrice: 44999,
    discount: 18,
    coins: 4499,
    image: "🎮",
    badges: ["ТОП", "Рассрочка 0%"],
  },
  {
    id: 3,
    name: "Dyson V15 Detect",
    originalPrice: 74999,
    salePrice: 59999,
    discount: 20,
    coins: 5999,
    image: "🧹",
    badges: ["-20%", "Бонус 3000₿"],
  },
  {
    id: 4,
    name: "MacBook Air M2",
    originalPrice: 129999,
    salePrice: 104999,
    discount: 19,
    coins: 10499,
    image: "💻",
    badges: ["ХИТ", "Кэшбэк 8%"],
  },
  {
    id: 5,
    name: "iPhone 14 Pro",
    originalPrice: 119999,
    salePrice: 94999,
    discount: 21,
    coins: 9499,
    image: "📱",
    badges: ["TOP", "Trade-in"],
  },
  {
    id: 6,
    name: "Samsung QLED 65\"",
    originalPrice: 149999,
    salePrice: 119999,
    discount: 20,
    coins: 11999,
    image: "📺",
    badges: ["-30К", "Бонусы"],
  },
];

// Фильтры продавцов
const sellerFilters = [
  { id: "original", label: "Оригинальный магазин", icon: Shield, color: "text-emerald-600" },
  { id: "reseller", label: "Реселлер с лицензией", icon: Shield, color: "text-blue-600" },
  { id: "trusted", label: "Доверенные магазины", icon: Star, color: "text-amber-600" },
  { id: "unknown", label: "Неизвестный продавец", icon: Users, color: "text-gray-500" },
];

// Типы экономии
const savingsTypes = [
  { id: "discount", label: "Скидка на сайте", icon: Tag, value: "до 30%" },
  { id: "cashback", label: "Кэшбэк", icon: Percent, value: "до 15%" },
  { id: "referral", label: "Реферальная программа", icon: Users, value: "до 10%" },
  { id: "promocode", label: "Промокод", icon: Gift, value: "до 20%" },
  { id: "card", label: "Скидка по банковской карте", icon: CreditCard, value: "до 12%" },
  { id: "loyalty", label: "Карта лояльности", icon: Star, value: "до 8%" },
  { id: "coins", label: "CreamSale Coins", icon: Sparkles, value: "до 5%" },
];

export default function Home() {
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
      title: "Введи товар",
      description: "Выбери в каталоге, введи вручную или сфотографируй",
      icon: Search,
      color: "from-gray-400 to-gray-500",
    },
    {
      number: "02",
      title: "Запусти алгоритм",
      description: "Умный анализ всех площадок и комбинаций скидок",
      icon: Zap,
      color: "from-gray-500 to-gray-600",
    },
    {
      number: "03",
      title: "Купи выгодно",
      description: "Программа сама настроит скидки и закажет товар",
      icon: ShoppingCart,
      color: "from-gray-600 to-gray-700",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Hero Section - Marketing Funnel */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-transparent" />
        
        <div className="relative px-4 pt-8 pb-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1
              className="text-4xl font-light text-primary mb-2 tracking-wide"
              style={{ fontFamily: "Georgia, serif" }}
            >
              CreamSale
            </h1>
            <p className="text-sm text-muted-foreground">
              Умный шопинг с максимальной экономией
            </p>
          </motion.div>

          {/* Main CTA - 3 Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <h2 className="text-xl font-light text-center text-foreground mb-2">
              Найди и купи любой товар за 3 клика
            </h2>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Комплексный анализ интернета + автоматическая настройка всех скидок
            </p>

            {/* Steps */}
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onClick={() => setActiveStep(index)}
                  className={`neumorphic-card p-5 cursor-pointer transition-all duration-300 ${
                    activeStep === index ? "neumorphic-pressed" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`neumorphic-icon w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br ${step.color}`}>
                      <step.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">ШАГ {step.number}</span>
                      </div>
                      <h3 className="text-base font-semibold text-foreground mt-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                    </div>
                    <ChevronRight className={`icon-monochrome transition-transform duration-300 ${
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
            className="neumorphic-card p-2 mb-8"
          >
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-3">
                <Search className="icon-monochrome" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Что хотите найти сегодня?"
                  className="neumorphic-input flex-1 py-3 text-sm"
                />
              </div>
              <button className="neumorphic-btn p-3" title="Поиск по фото">
                <Camera className="icon-monochrome" size={20} />
              </button>
              <button className="gradient-button px-5 py-3 text-sm font-medium">
                Найти
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
            Источники товаров
          </h3>
          <div className="grid grid-cols-2 gap-3">
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
                  <span className="text-xs font-medium text-foreground text-left">{filter.label}</span>
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
              Комплексный анализ экономии
            </h3>
            <span className="gradient-badge">до 75% выгоды</span>
          </div>
          
          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Экономия происходит за счет глубинного анализа интернета и сбора данных о ценах на всех доступных площадках.
            Система автоматически комбинирует все доступные способы экономии для максимальной выгоды.
          </p>

          <div className="grid grid-cols-2 gap-2">
            {savingsTypes.map((type) => (
              <motion.div
                key={type.id}
                whileHover={{ scale: 1.02 }}
                className="neumorphic-pressed p-3 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <type.icon className="icon-monochrome" size={14} />
                  <span className="text-xs font-medium text-foreground">{type.label}</span>
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
            <h3 className="text-lg font-light text-foreground flex items-center gap-2" style={{ fontFamily: "Georgia, serif" }}>
              <Flame className="text-primary" size={20} />
              Топ горячих товаров
            </h3>
            <span className="text-xs text-muted-foreground">CreamSale 2020</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {hotProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
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
                <div className="neumorphic-pressed w-full aspect-square rounded-lg flex items-center justify-center mb-3 text-4xl">
                  {product.image}
                </div>

                {/* Product Info */}
                <h4 className="text-sm font-medium text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h4>

                {/* Price */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs text-muted-foreground line-through">
                    {product.originalPrice.toLocaleString()} ₽
                  </span>
                  <span className="text-sm font-bold text-primary">
                    {product.salePrice.toLocaleString()} ₽
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
                  Купить в 1 клик
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
          className="neumorphic-card p-5"
        >
          <h3 className="text-sm font-semibold text-foreground mb-4 text-center">
            Почему CreamSale?
          </h3>

          <div className="space-y-3">
            {[
              { icon: Zap, title: "Мгновенная экономия", desc: "Все скидки применяются автоматически" },
              { icon: Shield, title: "Проверенные продавцы", desc: "Только лицензированные партнёры" },
              { icon: Gift, title: "Бонусная программа", desc: "Накапливайте Coins и оплачивайте до 100%" },
              { icon: Clock, title: "Экономия времени", desc: "Не нужно искать скидки вручную" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <div className="neumorphic-icon p-2">
                  <feature.icon className="icon-monochrome" size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
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
          className="neumorphic-card p-6 text-center"
        >
          <h3 className="text-base font-semibold text-foreground mb-2">
            Начните экономить прямо сейчас
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Присоединяйтесь к тысячам довольных пользователей
          </p>
          <button className="gradient-button w-full py-3 text-sm font-medium">
            Запустить анализ
          </button>
        </motion.div>
      </section>
    </div>
  );
}
