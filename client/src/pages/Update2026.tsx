import { BookOpen, TrendingUp, Shield, Zap, Coins, Users, CreditCard, Percent, Tag, Gift, Star, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Database, Lock, Globe, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const stackingLayers = [
  { id: 1, name: "Скидка на сайте", icon: Tag, value: "до 30%", color: "text-red-600" },
  { id: 2, name: "Кэшбэк-портал", icon: Percent, value: "до 15%", color: "text-green-600" },
  { id: 3, name: "Реферальная программа", icon: Users, value: "до 10%", color: "text-blue-600" },
  { id: 4, name: "Промокод", icon: Gift, value: "до 20%", color: "text-purple-600" },
  { id: 5, name: "Скидка по банковской карте", icon: CreditCard, value: "до 12%", color: "text-amber-600" },
  { id: 6, name: "Карта лояльности", icon: Star, value: "до 8%", color: "text-pink-600" },
  { id: 7, name: "CreamSale Coins", icon: Coins, value: "до 5%", color: "text-primary" },
];

const apiSources = [
  { name: "Amazon SP-API", cost: "$1,400/год", status: "Платный с 2026", legal: true },
  { name: "eBay Browse API", cost: "Бесплатно (5K/day)", status: "Доступен", legal: true },
  { name: "AliExpress Affiliate", cost: "Бесплатно", status: "Партнёрка", legal: true },
  { name: "Walmart Marketplace", cost: "Бесплатно", status: "Партнёры", legal: true },
  { name: "Target Product API", cost: "Бесплатно", status: "Ограничен", legal: true },
  { name: "Best Buy Developer", cost: "Бесплатно (5K/day)", status: "Доступен", legal: true },
];

const competitors = [
  { name: "Rakuten", users: "17 млн", feature: "Пассивный кэшбэк", payout: "PayPal, чек" },
  { name: "Honey", users: "17 млн", feature: "Авто-промокоды", payout: "PayPal" },
  { name: "Ibotta", users: "10 млн", feature: "Продукты, чеки", payout: "PayPal, карты" },
  { name: "Fetch Rewards", users: "8 млн", feature: "Любые чеки", payout: "Gift cards" },
  { name: "Swagbucks", users: "7 млн", feature: "Опросы + покупки", payout: "PayPal, карты" },
];

const legalStatus = [
  { status: "allowed", icon: CheckCircle2, text: "Официальные API", color: "text-green-600" },
  { status: "allowed", icon: CheckCircle2, text: "Партнёрские сети (CJ, Rakuten)", color: "text-green-600" },
  { status: "allowed", icon: CheckCircle2, text: "Пользовательский краудсорсинг", color: "text-green-600" },
  { status: "gray", icon: AlertTriangle, text: "Прокси-ротация", color: "text-amber-600" },
  { status: "gray", icon: AlertTriangle, text: "Браузерная автоматизация", color: "text-amber-600" },
  { status: "forbidden", icon: XCircle, text: "Обход CAPTCHA", color: "text-red-600" },
  { status: "forbidden", icon: XCircle, text: "Фейковые аккаунты", color: "text-red-600" },
];

export default function Update2026() {
  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Header */}
      <section className="px-4 pt-8 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="neumorphic-icon w-16 h-16 rounded-full mx-auto mb-4 bg-gradient-to-br from-primary to-primary-dark">
            <BookOpen className="text-white" size={28} />
          </div>
          <h1 className="text-3xl font-light text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>
            CreamSale: Обновление 2026
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Исследование возможностей программы для максимальной экономии
          </p>
        </motion.div>
      </section>

      {/* Section 1: Stacking */}
      <section className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="neumorphic-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="neumorphic-icon p-2">
              <TrendingUp className="icon-monochrome" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              1. Складываются ли все виды экономии?
            </h2>
          </div>

          <div className="neumorphic-pressed p-4 mb-4">
            <p className="text-sm text-foreground text-center font-medium">
              ✅ ДА — Полное комбинирование возможно
            </p>
          </div>

          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            Согласно исследованию 2025-2026 годов, максимальный стеккинг включает 7 слоёв экономии,
            которые можно комбинировать одновременно для достижения общей экономии до 75%+.
          </p>

          {/* Stacking Layers */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {stackingLayers.map((layer) => (
              <motion.div
                key={layer.id}
                whileHover={{ scale: 1.02 }}
                className="neumorphic p-3 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <layer.icon className={`icon-monochrome ${layer.color}`} size={14} />
                  <span className="text-xs font-medium text-foreground">{layer.name}</span>
                </div>
                <span className="text-xs text-primary font-semibold">{layer.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Example */}
          <div className="neumorphic-pressed p-4">
            <h3 className="text-xs font-semibold text-foreground mb-2">Пример реального стекинга:</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Apple AirPods Pro</span>
                <span className="text-foreground">$249.99</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Скидка на сайте (20%)</span>
                <span>-$50.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Кэшбэк-портал (6%)</span>
                <span>-$12.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Реферальный код (6%)</span>
                <span>-$15.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Промокод нового пользователя (8%)</span>
                <span>-$20.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Кэшбэк банковской карты (5%)</span>
                <span>-$7.65</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Карта лояльности</span>
                <span>-$10.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>CreamSale Coins (5%)</span>
                <span>-$12.35</span>
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span className="text-foreground">ИТОГО</span>
                  <span className="text-primary">$122.99</span>
                </div>
                <div className="flex justify-between text-xs text-success">
                  <span>Экономия</span>
                  <span>$127.00 (51%)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 2: API & Data Collection */}
      <section className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="neumorphic-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="neumorphic-icon p-2">
              <Database className="icon-monochrome" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              2. Сбор данных: API и парсинг
            </h2>
          </div>

          {/* API Table */}
          <div className="space-y-2 mb-4">
            {apiSources.map((api) => (
              <div key={api.name} className="neumorphic p-3 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Globe className="icon-monochrome" size={16} />
                    <span className="text-xs font-medium text-foreground">{api.name}</span>
                  </div>
                  <span className="text-xs text-primary font-semibold">{api.cost}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted-foreground">{api.status}</span>
                  {api.legal && (
                    <CheckCircle2 className="text-green-600" size={14} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Anti-scraping */}
          <div className="neumorphic-pressed p-4">
            <h3 className="text-xs font-semibold text-foreground mb-3 flex items-center gap-2">
              <Lock className="icon-monochrome" size={14} />
              Анти-скрапинг меры и обход
            </h3>
            
            <div className="space-y-2">
              {legalStatus.map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className={`${item.color}`} size={14} />
                  <span className="text-xs text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture */}
          <div className="neumorphic p-4 mt-4">
            <h3 className="text-xs font-semibold text-foreground mb-3">Гибридная архитектура сбора:</h3>
            <div className="space-y-2 text-xs">
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">1.</span> Официальные API (приоритет)
              </div>
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">2.</span> Пользовательский краудсорсинг
              </div>
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">3.</span> Браузерное расширение
              </div>
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">4.</span> Прямые интеграции
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 3: Competitors */}
      <section className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="neumorphic-card p-5"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="neumorphic-icon p-2">
              <BarChart3 className="icon-monochrome" size={20} />
            </div>
            <h2 className="text-lg font-semibold text-foreground">
              3. Конкуренты и рынок 2026
            </h2>
          </div>

          {/* Market Stats */}
          <div className="neumorphic-pressed p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">$15.8 млрд</p>
                <p className="text-xs text-muted-foreground">Объём рынка (2025)</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">$28.4 млрд</p>
                <p className="text-xs text-muted-foreground">Прогноз (2030)</p>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-xs text-muted-foreground">CAGR: <span className="text-primary font-semibold">12.4%</span></p>
              <p className="text-xs text-muted-foreground">Пользователей в США: <span className="text-primary font-semibold">89 млн</span></p>
            </div>
          </div>

          {/* Competitors Table */}
          <div className="space-y-2 mb-4">
            {competitors.map((comp) => (
              <div key={comp.name} className="neumorphic p-3 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-foreground">{comp.name}</span>
                  <span className="text-xs text-primary font-semibold">{comp.users}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{comp.feature}</span>
                  <span className="text-xs text-muted-foreground">{comp.payout}</span>
                </div>
              </div>
            ))}
          </div>

          {/* CreamSale USP */}
          <div className="gradient-button p-4">
            <h3 className="text-sm font-semibold text-white mb-3 text-center">
              Уникальное позиционирование CreamSale
            </h3>
            <div className="space-y-2 text-xs text-white/90">
              <div className="flex items-start gap-2">
                <Zap size={14} className="mt-0.5" />
                <span><strong>3 КЛИКА ДО ПОКУПКИ:</strong> Введи → Запусти → Купи</span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp size={14} className="mt-0.5" />
                <span><strong>КОМПЛЕКСНЫЙ АНАЛИЗ:</strong> 7 слоёв экономии + 50+ маркетплейсов</span>
              </div>
              <div className="flex items-start gap-2">
                <Shield size={14} className="mt-0.5" />
                <span><strong>УМНЫЙ АЛГОРИТМ:</strong> Авто-применение всех скидок</span>
              </div>
              <div className="flex items-start gap-2">
                <Coins size={14} className="mt-0.5" />
                <span><strong>CREAMSALE COINS:</strong> До 100% оплаты бонусами</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Section 4: Trends */}
      <section className="px-4 py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="neumorphic-card p-5"
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">
            4. Рыночные тренды 2026
          </h2>

          <div className="space-y-3">
            {[
              { icon: TrendingUp, text: "Инфляция и экономия — 73% покупателей ищут активные скидки", trend: "positive" },
              { icon: Users, text: "Усталость от приложений — хотят 1 решение вместо 5-7", trend: "opportunity" },
              { icon: Zap, text: "Автоматизация — спрос на «пассивную экономию»", trend: "positive" },
              { icon: Database, text: "AI-оптимизация — персонализированные рекомендации", trend: "positive" },
            ].map((item) => (
              <div key={item.text} className="neumorphic p-3 rounded-lg flex items-start gap-3">
                <item.icon className="icon-monochrome mt-0.5" size={18} />
                <span className="text-xs text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Problems vs Solution */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="neumorphic-pressed p-3">
              <h3 className="text-xs font-semibold text-destructive mb-2">Проблемы</h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• 5-7 приложений</li>
                <li>• Ручной ввод</li>
                <li>• Нет гарантии</li>
                <li>• Потеря времени</li>
              </ul>
            </div>
            <div className="neumorphic p-3">
              <h3 className="text-xs font-semibold text-success mb-2">Решение</h3>
              <ul className="space-y-1 text-xs text-foreground">
                <li>• Одно приложение</li>
                <li>• Автоматизация</li>
                <li>• Гарантия лучшей</li>
                <li>• 3 клика</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="neumorphic-card p-6 text-center"
        >
          <h3 className="text-base font-semibold text-foreground mb-2">
            Готовы начать экономить по-новому?
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            Присоединяйтесь к CreamSale — умному шопингу будущего
          </p>
          <button className="gradient-button w-full py-3 text-sm font-medium flex items-center justify-center gap-2">
            Запустить анализ
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
