import { Plus, CreditCard, Trash2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Cards() {
  const [showCardNumbers, setShowCardNumbers] = useState<{ [key: string]: boolean }>({});

  const loyaltyCards = [
    {
      id: 1,
      name: "Amazon Prime",
      type: "loyalty",
      number: "•••• •••• •••• 4242",
      balance: 2450,
      icon: "🛒",
      benefits: "Free shipping, 2% cashback",
    },
    {
      id: 2,
      name: "eBay Plus",
      type: "loyalty",
      number: "•••• •••• •••• 5555",
      balance: 1200,
      icon: "🏷️",
      benefits: "Exclusive deals, priority support",
    },
    {
      id: 3,
      name: "Visa Rewards",
      type: "bank",
      number: "•••• •••• •••• 1234",
      balance: 5420.50,
      icon: "💳",
      benefits: "1.5% cashback on all purchases",
    },
    {
      id: 4,
      name: "Mastercard Elite",
      type: "bank",
      number: "•••• •••• •••• 6789",
      balance: 8932.75,
      icon: "💳",
      benefits: "2% cashback, travel rewards",
    },
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
      <div className="bg-white border-b border-border px-4 py-6">
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
      <div className="px-4 py-6 bg-white border-b border-border">
        <h2
          className="text-lg font-light text-foreground mb-4 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Smart Card Analysis
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              1
            </div>
            <div>
              <p className="font-medium text-foreground">Connect Your Cards</p>
              <p className="text-xs text-muted-foreground">
                Add loyalty cards, bank cards, and discount cards
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              2
            </div>
            <div>
              <p className="font-medium text-foreground">AI Analysis</p>
              <p className="text-xs text-muted-foreground">
                Our AI analyzes all your cards for each product
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              3
            </div>
            <div>
              <p className="font-medium text-foreground">Best Offer</p>
              <p className="text-xs text-muted-foreground">
                Shows which card gives maximum savings
              </p>
            </div>
          </div>
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

        <div className="space-y-4">
          {loyaltyCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-border rounded-lg p-4 hover:shadow-md transition-all"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{card.icon}</div>
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
              <div className="bg-muted rounded p-3 mb-3 flex items-center justify-between">
                <span className="text-sm font-mono text-foreground">
                  {showCardNumbers[`card-${card.id}`] ? card.number : "•••• •••• •••• ••••"}
                </span>
                <button
                  onClick={() => toggleCardNumber(`card-${card.id}`)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
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
                <div className="bg-muted rounded p-3">
                  <p className="text-xs text-muted-foreground mb-1">Balance/Points</p>
                  <p className="font-bold text-foreground">
                    {card.type === "bank" ? "$" : ""}
                    {card.balance.toLocaleString()}
                  </p>
                </div>
                <div className="bg-muted rounded p-3">
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

        <div className="space-y-3">
          <div className="bg-white border-2 border-primary rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-foreground text-sm">
                Premium Wireless Headphones
              </h3>
              <span className="text-xs bg-success text-success px-2 py-1 rounded">
                Best Match
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Use Mastercard Elite for maximum savings
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs mb-3">
              <div className="bg-muted rounded p-2">
                <p className="text-muted-foreground">Price</p>
                <p className="font-bold text-foreground">$164.99</p>
              </div>
              <div className="bg-muted rounded p-2">
                <p className="text-muted-foreground">Card Benefit</p>
                <p className="font-bold text-foreground">+2% back</p>
              </div>
              <div className="bg-muted rounded p-2">
                <p className="text-muted-foreground">You Pay</p>
                <p className="font-bold text-success">$161.69</p>
              </div>
            </div>
            <button className="w-full text-xs bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors">
              Buy with Mastercard
            </button>
          </div>

          <div className="bg-white border border-border rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-foreground text-sm">
                Smart Watch Pro
              </h3>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                Good Match
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Use Amazon Prime for free shipping + cashback
            </p>
            <div className="grid grid-cols-3 gap-2 text-xs mb-3">
              <div className="bg-muted rounded p-2">
                <p className="text-muted-foreground">Price</p>
                <p className="font-bold text-foreground">$229.99</p>
              </div>
              <div className="bg-muted rounded p-2">
                <p className="text-muted-foreground">Card Benefit</p>
                <p className="font-bold text-foreground">+2% back</p>
              </div>
              <div className="bg-muted rounded p-2">
                <p className="text-muted-foreground">You Pay</p>
                <p className="font-bold text-success">$225.39</p>
              </div>
            </div>
            <button className="w-full text-xs bg-muted text-foreground py-2 rounded hover:bg-border transition-colors">
              Buy with Amazon Prime
            </button>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="px-4 py-6 bg-white border-t border-border">
        <div className="bg-muted rounded-lg p-4 text-xs">
          <p className="font-medium text-foreground mb-2">🔒 Your Data is Secure</p>
          <p className="text-muted-foreground">
            We use bank-level encryption. Card numbers are never stored on our servers. All data is encrypted end-to-end.
          </p>
        </div>
      </div>
    </div>
  );
}
