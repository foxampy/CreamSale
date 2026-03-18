import { BookOpen, TrendingUp, Shield, Zap, Coins, Users, CreditCard, Percent, Tag, Gift, Star, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Database, Lock, Globe, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const stackingLayers = [
  { id: 1, name: "site-discount", icon: Tag, value: "up to 30%", color: "text-red-600" },
  { id: 2, name: "cashback", icon: Percent, value: "up to 15%", color: "text-green-600" },
  { id: 3, name: "referral", icon: Users, value: "up to 10%", color: "text-blue-600" },
  { id: 4, name: "promocode", icon: Gift, value: "up to 20%", color: "text-purple-600" },
  { id: 5, name: "bank-card", icon: CreditCard, value: "up to 12%", color: "text-amber-600" },
  { id: 6, name: "loyalty-card", icon: Star, value: "up to 8%", color: "text-pink-600" },
  { id: 7, name: "coins", icon: Coins, value: "up to 5%", color: "text-primary" },
];

const apiSources = [
  { name: "Amazon SP-API", cost: "$1,400/year", status: "Paid from 2026", legal: true },
  { name: "eBay Browse API", cost: "Free (5K/day)", status: "Available", legal: true },
  { name: "AliExpress Affiliate", cost: "Free", status: "Partnership", legal: true },
  { name: "Walmart Marketplace", cost: "Free", status: "Partners", legal: true },
  { name: "Target Product API", cost: "Free", status: "Limited", legal: true },
  { name: "Best Buy Developer", cost: "Free (5K/day)", status: "Available", legal: true },
];

const competitors = [
  { name: "Rakuten", users: "17M", feature: "Passive cashback", payout: "PayPal, check" },
  { name: "Honey", users: "17M", feature: "Auto-promocodes", payout: "PayPal" },
  { name: "Ibotta", users: "10M", feature: "Groceries, receipts", payout: "PayPal, cards" },
  { name: "Fetch Rewards", users: "8M", feature: "Any receipts", payout: "Gift cards" },
  { name: "Swagbucks", users: "7M", feature: "Surveys + shopping", payout: "PayPal, cards" },
];

const legalStatus = [
  { status: "allowed", icon: CheckCircle2, text: "Official APIs", color: "text-green-600" },
  { status: "allowed", icon: CheckCircle2, text: "Partner networks (CJ, Rakuten)", color: "text-green-600" },
  { status: "allowed", icon: CheckCircle2, text: "User crowdsourcing", color: "text-green-600" },
  { status: "gray", icon: AlertTriangle, text: "Proxy rotation", color: "text-amber-600" },
  { status: "gray", icon: AlertTriangle, text: "Browser automation", color: "text-amber-600" },
  { status: "forbidden", icon: XCircle, text: "CAPTCHA bypass", color: "text-red-600" },
  { status: "forbidden", icon: XCircle, text: "Fake accounts", color: "text-red-600" },
];

export default function Update2026() {
  const { t } = useLanguage();

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
          <h1 className="text-2xl md:text-3xl font-light text-foreground mb-2" style={{ fontFamily: "Georgia, serif" }}>
            {t("update-2026-title")}
          </h1>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            {t("update-2026-subtitle")}
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
              {t("stacking-question")}
            </h2>
          </div>

          <div className="neumorphic-pressed p-4 mb-4">
            <p className="text-sm text-foreground text-center font-medium">
              {t("stacking-yes")}
            </p>
          </div>

          <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
            {t("stacking-info")}
          </p>

          {/* Stacking Layers */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
            {stackingLayers.map((layer) => (
              <motion.div
                key={layer.id}
                whileHover={{ scale: 1.02 }}
                className="neumorphic p-3 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <layer.icon className={`icon-monochrome ${layer.color}`} size={14} />
                  <span className="text-xs font-medium text-foreground">{t(layer.name)}</span>
                </div>
                <span className="text-xs text-primary font-semibold">{layer.value}</span>
              </motion.div>
            ))}
          </div>

          {/* Example */}
          <div className="neumorphic-pressed p-4">
            <h3 className="text-xs font-semibold text-foreground mb-2">{t("stacking-example")}</h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Apple AirPods Pro</span>
                <span className="text-foreground">$249.99</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Site Discount (20%)</span>
                <span>-$50.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Cashback Portal (6%)</span>
                <span>-$12.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Referral Code (6%)</span>
                <span>-$15.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>New User Promocode (8%)</span>
                <span>-$20.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Bank Card Cashback (5%)</span>
                <span>-$7.65</span>
              </div>
              <div className="flex justify-between text-success">
                <span>Loyalty Card</span>
                <span>-$10.00</span>
              </div>
              <div className="flex justify-between text-success">
                <span>CreamSale Coins (5%)</span>
                <span>-$12.35</span>
              </div>
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span className="text-foreground">TOTAL</span>
                  <span className="text-primary">$122.99</span>
                </div>
                <div className="flex justify-between text-xs text-success">
                  <span>Savings</span>
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
              {t("data-collection")}
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
              {t("anti-scraping")}
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
            <h3 className="text-xs font-semibold text-foreground mb-3">{t("hybrid-architecture")}</h3>
            <div className="space-y-2 text-xs">
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">1.</span> {t("official-api")}
              </div>
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">2.</span> {t("crowdsourcing")}
              </div>
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">3.</span> {t("browser-extension")}
              </div>
              <div className="neumorphic-pressed p-2">
                <span className="text-muted-foreground">4.</span> {t("direct-integrations")}
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
              {t("competitors")}
            </h2>
          </div>

          {/* Market Stats */}
          <div className="neumorphic-pressed p-4 mb-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">$15.8B</p>
                <p className="text-xs text-muted-foreground">{t("market-size")}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">$28.4B</p>
                <p className="text-xs text-muted-foreground">{t("forecast")}</p>
              </div>
            </div>
            <div className="text-center mt-3">
              <p className="text-xs text-muted-foreground">CAGR: <span className="text-primary font-semibold">12.4%</span></p>
              <p className="text-xs text-muted-foreground">{t("us-users")}: <span className="text-primary font-semibold">89M</span></p>
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
              {t("creamsale-usp")}
            </h3>
            <div className="space-y-2 text-xs text-white/90">
              <div className="flex items-start gap-2">
                <Zap size={14} className="mt-0.5" />
                <span><strong>{t("three-clicks")}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <TrendingUp size={14} className="mt-0.5" />
                <span><strong>{t("comprehensive-analysis-2")}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <Shield size={14} className="mt-0.5" />
                <span><strong>{t("smart-algorithm")}</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <Coins size={14} className="mt-0.5" />
                <span><strong>{t("creamsale-coins")}</strong></span>
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
            {t("market-trends")}
          </h2>

          <div className="space-y-3">
            {[
              { icon: TrendingUp, text: "inflation", trend: "positive" },
              { icon: Users, text: "app-fatigue", trend: "opportunity" },
              { icon: Zap, text: "automation", trend: "positive" },
              { icon: Database, text: "ai-optimization", trend: "positive" },
            ].map((item) => (
              <div key={item.text} className="neumorphic p-3 rounded-lg flex items-start gap-3">
                <item.icon className="icon-monochrome mt-0.5" size={18} />
                <span className="text-xs text-foreground">{t(item.text)}</span>
              </div>
            ))}
          </div>

          {/* Problems vs Solution */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="neumorphic-pressed p-3">
              <h3 className="text-xs font-semibold text-destructive mb-2">{t("problems")}</h3>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>{t("problem-1")}</li>
                <li>{t("problem-2")}</li>
                <li>{t("problem-3")}</li>
                <li>{t("problem-4")}</li>
              </ul>
            </div>
            <div className="neumorphic p-3">
              <h3 className="text-xs font-semibold text-success mb-2">{t("solution")}</h3>
              <ul className="space-y-1 text-xs text-foreground">
                <li>{t("solution-1")}</li>
                <li>{t("solution-2")}</li>
                <li>{t("solution-3")}</li>
                <li>{t("solution-4")}</li>
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
          className="neumorphic-card p-6 text-center max-w-md mx-auto"
        >
          <h3 className="text-base font-semibold text-foreground mb-2">
            {t("ready-to-start")}
          </h3>
          <p className="text-xs text-muted-foreground mb-4">
            {t("join-creamsale")}
          </p>
          <button className="gradient-button w-full py-3 text-sm font-medium flex items-center justify-center gap-2">
            {t("run-analysis")}
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}
