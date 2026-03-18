import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "en" | "ru";

interface Translations {
  [key: string]: {
    en: string;
    ru: string;
  };
}

const translations: Translations = {
  // Home page
  "creamsale": { en: "CreamSale", ru: "CreamSale" },
  "smart-shopping": { en: "Smart Shopping with Maximum Savings", ru: "Умный шопинг с максимальной экономией" },
  "find-any-product": { en: "Find & Buy Any Product in 3 Clicks", ru: "Найди и купи любой товар за 3 клика" },
  "comprehensive-analysis": { en: "Comprehensive internet analysis + automatic discount setup", ru: "Комплексный анализ интернета + автоматическая настройка скидок" },
  "step": { en: "Step", ru: "Шаг" },
  "enter-product": { en: "Enter Product", ru: "Введи товар" },
  "enter-product-desc": { en: "Choose from catalog, type manually, or take a photo", ru: "Выбери в каталоге, введи вручную или сфотографируй" },
  "run-algorithm": { en: "Run Algorithm", ru: "Запусти алгоритм" },
  "run-algorithm-desc": { en: "Smart analysis of all platforms and discount combinations", ru: "Умный анализ всех площадок и комбинаций скидок" },
  "buy-smart": { en: "Buy Smart", ru: "Купи выгодно" },
  "buy-smart-desc": { en: "Program auto-configures discounts and orders the product", ru: "Программа сама настроит скидки и закажет товар" },
  "search-placeholder": { en: "What are you looking for today?", ru: "Что хотите найти сегодня?" },
  "search": { en: "Search", ru: "Найти" },
  "seller-sources": { en: "Seller Sources", ru: "Источники товаров" },
  "original-store": { en: "Original Store", ru: "Оригинальный магазин" },
  "licensed-reseller": { en: "Licensed Reseller", ru: "Реселлер с лицензией" },
  "trusted-stores": { en: "Trusted Stores", ru: "Доверенные магазины" },
  "unknown-seller": { en: "Unknown Seller", ru: "Неизвестный продавец" },
  "comprehensive-savings": { en: "Comprehensive Savings Analysis", ru: "Комплексный анализ экономии" },
  "savings-info": { en: "Savings come from deep internet analysis and price data collection across all available platforms. The system automatically combines all available saving methods for maximum benefit.", ru: "Экономия происходит за счет глубинного анализа интернета и сбора данных о ценах на всех доступных площадках. Система автоматически комбинирует все доступные способы экономии для максимальной выгоды." },
  "max-benefit": { en: "up to 75% benefit", ru: "до 75% выгоды" },
  "site-discount": { en: "Site Discount", ru: "Скидка на сайте" },
  "cashback": { en: "Cashback", ru: "Кэшбэк" },
  "referral": { en: "Referral Program", ru: "Реферальная программа" },
  "promocode": { en: "Promocode", ru: "Промокод" },
  "bank-card": { en: "Bank Card Discount", ru: "Скидка по банковской карте" },
  "loyalty-card": { en: "Loyalty Card", ru: "Карта лояльности" },
  "coins": { en: "CreamSale Coins", ru: "CreamSale Coins" },
  "hot-products": { en: "Hot Products", ru: "Топ горячих товаров" },
  "creamsale-2020": { en: "CreamSale 2020", ru: "CreamSale 2020" },
  "buy-now": { en: "Buy Now", ru: "Купить сейчас" },
  "why-creamsale": { en: "Why CreamSale?", ru: "Почему CreamSale?" },
  "instant-savings": { en: "Instant Savings", ru: "Мгновенная экономия" },
  "instant-savings-desc": { en: "All discounts applied automatically", ru: "Все скидки применяются автоматически" },
  "verified-sellers": { en: "Verified Sellers", ru: "Проверенные продавцы" },
  "verified-sellers-desc": { en: "Only licensed partners", ru: "Только лицензированные партнёры" },
  "bonus-program": { en: "Bonus Program", ru: "Бонусная программа" },
  "bonus-program-desc": { en: "Accumulate Coins and pay up to 100%", ru: "Накапливайте Coins и оплачивайте до 100%" },
  "time-saving": { en: "Time Saving", ru: "Экономия времени" },
  "time-saving-desc": { en: "No need to search for discounts manually", ru: "Не нужно искать скидки вручную" },
  "start-saving": { en: "Start Saving Now", ru: "Начните экономить прямо сейчас" },
  "join-users": { en: "Join thousands of satisfied users", ru: "Присоединяйтесь к тысячам довольных пользователей" },
  "run-analysis": { en: "Run Analysis", ru: "Запустить анализ" },
  // Footer
  "footer-text": { en: "© 2020 CreamSale • Developed by Foxampy", ru: "© 2020 CreamSale • Разработано Foxampy" },
  // Navigation
  "nav-home": { en: "Home", ru: "Главная" },
  "nav-deals": { en: "Deals", ru: "Скидки" },
  "nav-rewards": { en: "Rewards", ru: "Награды" },
  "nav-cards": { en: "Cards", ru: "Карты" },
  "nav-profile": { en: "Profile", ru: "Профиль" },
  // Update 2026 page
  "update-2026-title": { en: "CreamSale: 2026 Update", ru: "CreamSale: Обновление 2026" },
  "update-2026-subtitle": { en: "Research on program capabilities for maximum savings", ru: "Исследование возможностей программы для максимальной экономии" },
  "stacking-question": { en: "1. Do all types of savings stack?", ru: "1. Складываются ли все виды экономии?" },
  "stacking-yes": { en: "YES — Full combination is possible", ru: "ДА — Полное комбинирование возможно" },
  "stacking-info": { en: "According to 2025-2026 research, maximum stacking includes 7 layers of savings that can be combined simultaneously to achieve total savings of up to 75%+.", ru: "Согласно исследованию 2025-2026 годов, максимальный стеккинг включает 7 слоёв экономии, которые можно комбинировать одновременно для достижения общей экономии до 75%+." },
  "stacking-example": { en: "Real Stacking Example:", ru: "Пример реального стекинга:" },
  "data-collection": { en: "2. Data Collection: API & Scraping", ru: "2. Сбор данных: API и парсинг" },
  "anti-scraping": { en: "Anti-Scraping Measures & Workarounds", ru: "Анти-скрапинг меры и обход" },
  "hybrid-architecture": { en: "Hybrid Data Collection Architecture:", ru: "Гибридная архитектура сбора:" },
  "official-api": { en: "Official APIs (priority)", ru: "Официальные API (приоритет)" },
  "crowdsourcing": { en: "User crowdsourcing", ru: "Пользовательский краудсорсинг" },
  "browser-extension": { en: "Browser extension", ru: "Браузерное расширение" },
  "direct-integrations": { en: "Direct integrations", ru: "Прямые интеграции" },
  "competitors": { en: "3. Competitors & Market 2026", ru: "3. Конкуренты и рынок 2026" },
  "market-size": { en: "Market Size (2025)", ru: "Объём рынка (2025)" },
  "forecast": { en: "Forecast (2030)", ru: "Прогноз (2030)" },
  "us-users": { en: "Users in USA", ru: "Пользователей в США" },
  "creamsale-usp": { en: "CreamSale Unique Position", ru: "Уникальное позиционирование CreamSale" },
  "three-clicks": { en: "3 CLICKS TO BUY: Enter → Run → Buy", ru: "3 КЛИКА ДО ПОКУПКИ: Введи → Запусти → Купи" },
  "comprehensive-analysis-2": { en: "COMPREHENSIVE ANALYSIS: 7 savings layers + 50+ marketplaces", ru: "КОМПЛЕКСНЫЙ АНАЛИЗ: 7 слоёв экономии + 50+ маркетплейсов" },
  "smart-algorithm": { en: "SMART ALGORITHM: Auto-apply all discounts", ru: "УМНЫЙ АЛГОРИТМ: Авто-применение всех скидок" },
  "creamsale-coins": { en: "CREAMSALE COINS: Up to 100% bonus payment", ru: "CREAMSALE COINS: До 100% оплаты бонусами" },
  "market-trends": { en: "4. Market Trends 2026", ru: "4. Рыночные тренды 2026" },
  "inflation": { en: "Inflation & savings — 73% of buyers seek active discounts", ru: "Инфляция и экономия — 73% покупателей ищут активные скидки" },
  "app-fatigue": { en: "App fatigue — want 1 solution instead of 5-7", ru: "Усталость от приложений — хотят 1 решение вместо 5-7" },
  "automation": { en: "Automation — demand for 'passive savings'", ru: "Автоматизация — спрос на «пассивную экономию»" },
  "ai-optimization": { en: "AI optimization — personalized recommendations", ru: "AI-оптимизация — персонализированные рекомендации" },
  "problems": { en: "Problems", ru: "Проблемы" },
  "solution": { en: "Solution", ru: "Решение" },
  "problem-1": { en: "• 5-7 apps needed", ru: "• Нужно 5-7 приложений" },
  "problem-2": { en: "• Manual input", ru: "• Ручной ввод" },
  "problem-3": { en: "• No guarantee", ru: "• Нет гарантии" },
  "problem-4": { en: "• Time wasted", ru: "• Потеря времени" },
  "solution-1": { en: "• One app", ru: "• Одно приложение" },
  "solution-2": { en: "• Automation", ru: "• Автоматизация" },
  "solution-3": { en: "• Best deal guarantee", ru: "• Гарантия лучшей" },
  "solution-4": { en: "• 3 clicks", ru: "• 3 клика" },
  "ready-to-start": { en: "Ready to start saving in a new way?", ru: "Готовы начать экономить по-новому?" },
  "join-creamsale": { en: "Join CreamSale — the future of smart shopping", ru: "Присоединяйтесь к CreamSale — умному шопингу будущего" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("creamsale-language", lang);
  }, []);

  const t = useCallback((key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
