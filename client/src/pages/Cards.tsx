import { Plus, CreditCard, Trash2, Eye, EyeOff, Shield, Percent, Gift, Wallet } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Cards() {
  const [showCardNumbers, setShowCardNumbers] = useState<{ [key: string]: boolean }>({});

  const loyaltyCards = [
    {
      id: 1,
      name: "Amazon Prime",
      type: "loyalty",
      number: "•••• •••• •••• 4242",
      balance: 2450,
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
      benefits: "Free shipping, 2% cashback",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      name: "eBay Plus",
      type: "loyalty",
      number: "•••• •••• •••• 5555",
      balance: 1200,
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
      benefits: "Exclusive deals, priority support",
      color: "from-red-500 to-red-700",
    },
    {
      id: 3,
      name: "Visa Rewards",
      type: "bank",
      number: "•••• •••• •••• 1234",
      balance: 5420.50,
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg",
      benefits: "1.5% cashback on all purchases",
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 4,
      name: "Mastercard Elite",
      type: "bank",
      number: "•••• •••• •••• 6789",
      balance: 8932.75,
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
      benefits: "2% cashback, travel rewards",
      color: "from-red-600 to-orange-600",
    },
  ];

  const cardBenefits = [
    { icon: Shield, label: "Bank-level encryption", color: "text-green-600" },
    { icon: Percent, label: "Auto-apply best cashback", color: "text-primary" },
    { icon: Gift, label: "Exclusive rewards", color: "text-amber-600" },
    { icon: Wallet, label: "All cards in one place", color: "text-blue-600" },
  ];

  const toggleCardNumber = (id: string) => {
    setShowCardNumbers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-border px-4 py-6">
        <h1
          className="text-2xl font-light text-foreground mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Cards & Loyalty
        </h1>
        <p className="text-sm text-muted-foreground">
          Connect your cards for automatic best offers
        </p>
      </div>

      {/* How It Works */}
      <div className="px-4 py-6">
        <div className="neumorphic-card p-5 mb-6">
          <h2
            className="text-lg font-light text-foreground mb-4 text-center"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Smart Card Analysis
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                num: "1",
                title: "Connect Your Cards",
                desc: "Add loyalty cards, bank cards, and discount cards",
              },
              {
                num: "2",
                title: "AI Analysis",
                desc: "Our AI analyzes all your cards for each product",
              },
              {
                num: "3",
                title: "Best Offer",
                desc: "Shows which card gives maximum savings",
              },
            ].map((step) => (
              <div key={step.num} className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full gradient-button flex items-center justify-center text-sm font-bold">
                  {step.num}
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{step.title}</p>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Benefits */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {cardBenefits.map((benefit) => (
            <div key={benefit.label} className="neumorphic p-3 rounded-lg flex items-center gap-2">
              <benefit.icon className={`icon-monochrome ${benefit.color}`} size={18} />
              <span className="text-xs text-foreground">{benefit.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Connected Cards */}
      <div className="px-4 py-6">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-lg font-light text-foreground"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your Cards
          </h2>
          <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm">
            <Plus size={18} />
            Add Card
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {loyaltyCards.map((card) => (
            <div
              key={card.id}
              className="neumorphic-card p-4 transition-all"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-2">
                    <img src={card.logo} alt={card.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-sm">
                      {card.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {card.type === "bank" ? "Bank Card" : "Loyalty Card"}
                    </p>
                  </div>
                </div>
                <button className="text-destructive hover:text-destructive/80 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Card Number */}
              <div className="neumorphic-pressed rounded-lg p-3 mb-3 flex items-center justify-between">
                <span className="text-sm font-mono text-foreground">
                  {showCardNumbers[`card-${card.id}`] ? card.number : "•••• •••• •••• ••••"}
                </span>
                <button
                  onClick={() => toggleCardNumber(`card-${card.id}`)}
                  className="icon-monochrome hover:text-foreground transition-colors"
                >
                  {showCardNumbers[`card-${card.id}`] ? (
                    <EyeOff size={16} />
                  ) : (
                    <Eye size={16} />
                  )}
                </button>
              </div>

              {/* Card Info */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="neumorphic-pressed rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Balance/Points</p>
                  <p className="font-bold text-foreground">
                    {card.type === "bank" ? "$" : ""}
                    {card.balance.toLocaleString()}
                  </p>
                </div>
                <div className="neumorphic-pressed rounded-lg p-3">
                  <p className="text-xs text-muted-foreground mb-1">Benefits</p>
                  <p className="text-xs font-medium text-foreground">
                    {card.benefits}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full bg-success"></div>
                <span className="text-muted-foreground">Active & Synced</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best Offers Matching */}
      <div className="px-4 py-6 border-t border-border">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Recommended Offers
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="neumorphic-card p-4 border-2 border-primary">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-foreground text-sm">
                Premium Wireless Headphones
              </h3>
              <span className="text-xs gradient-badge">
                Best Match
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Use Mastercard Elite for maximum savings
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs mb-3">
              <div className="neumorphic-pressed rounded-lg p-2">
                <p className="text-muted-foreground">Price</p>
                <p className="font-bold text-foreground">$164.99</p>
              </div>
              <div className="neumorphic-pressed rounded-lg p-2">
                <p className="text-muted-foreground">Card Benefit</p>
                <p className="font-bold text-foreground">+2% back</p>
              </div>
              <div className="neumorphic-pressed rounded-lg p-2">
                <p className="text-muted-foreground">You Pay</p>
                <p className="font-bold text-success">$161.69</p>
              </div>
            </div>
            <button className="w-full text-xs gradient-button py-2">
              Buy with Mastercard
            </button>
          </div>

          <div className="neumorphic-card p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-foreground text-sm">
                Smart Watch Pro
              </h3>
              <span className="text-xs neumorphic-pressed px-2 py-1">
                Good Match
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Use Amazon Prime for free shipping + cashback
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs mb-3">
              <div className="neumorphic-pressed rounded-lg p-2">
                <p className="text-muted-foreground">Price</p>
                <p className="font-bold text-foreground">$229.99</p>
              </div>
              <div className="neumorphic-pressed rounded-lg p-2">
                <p className="text-muted-foreground">Card Benefit</p>
                <p className="font-bold text-foreground">+2% back</p>
              </div>
              <div className="neumorphic-pressed rounded-lg p-2">
                <p className="text-muted-foreground">You Pay</p>
                <p className="font-bold text-success">$225.39</p>
              </div>
            </div>
            <button className="w-full text-xs neumorphic-btn py-2">
              Buy with Amazon Prime
            </button>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="px-4 py-6">
        <div className="neumorphic-pressed rounded-lg p-4 text-xs">
          <p className="font-medium text-foreground mb-2 flex items-center gap-2">
            <Shield className="icon-monochrome" size={14} />
            Your Data is Secure
          </p>
          <p className="text-muted-foreground">
            We use bank-level encryption. Card numbers are never stored on our servers. All data is encrypted end-to-end.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
