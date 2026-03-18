import { Copy, Share2, TrendingUp, Gift, Zap } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Rewards() {
  const [copied, setCopied] = useState(false);
  const referralCode = "CREAMSALE2020";

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Sample purchase with breakdown
  const samplePurchase = {
    product: "Premium Wireless Headphones",
    original: 199.99,
    baseDiscount: 20,
    referralCashback: 10,
    bonusProgram: 5,
    final: 164.99,
    savings: 35,
  };

  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-border px-4 py-6">
        <h1
          className="text-2xl font-light text-foreground mb-2"
          style={{ fontFamily: "Georgia, serif" }}
        >
          My Savings
        </h1>
        <p className="text-sm text-muted-foreground">
          Track your rewards and cashback
        </p>
      </div>

      {/* Savings Summary */}
      <div className="px-4 py-6 bg-white border-b border-border">
        <h2
          className="text-lg font-light text-foreground mb-4 text-center"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Your Savings
        </h2>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-muted rounded p-4 text-center">
            <p className="text-2xl font-bold text-primary mb-1">$427.50</p>
            <p className="text-xs text-muted-foreground">Total Saved</p>
          </div>
          <div className="bg-muted rounded p-4 text-center">
            <p className="text-2xl font-bold text-primary mb-1">12</p>
            <p className="text-xs text-muted-foreground">Purchases</p>
          </div>
          <div className="bg-muted rounded p-4 text-center">
            <p className="text-2xl font-bold text-primary mb-1">35.6%</p>
            <p className="text-xs text-muted-foreground">Avg Savings</p>
          </div>
        </div>
      </div>

      {/* Discount Breakdown Example */}
      <div className="px-4 py-6 bg-white border-b border-border">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          How Savings Work
        </h2>

        <div className="bg-muted rounded-lg p-4 mb-4">
          <h3 className="font-medium text-foreground text-sm mb-3">
            {samplePurchase.product}
          </h3>

          {/* Price Breakdown */}
          <div className="space-y-3 mb-4">
            {/* Original Price */}
            <div className="flex justify-between items-center pb-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Original Price</span>
              <span className="font-medium text-foreground">
                ${samplePurchase.original.toFixed(2)}
              </span>
            </div>

            {/* Base Discount */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-foreground">Base Discount</p>
                  <p className="text-xs text-muted-foreground">
                    Direct marketplace deals & promotions
                  </p>
                </div>
                <span className="text-sm font-bold text-success">
                  -${samplePurchase.baseDiscount}
                </span>
              </div>
              <div className="w-full bg-white rounded h-2">
                <div
                  className="bg-success h-full rounded"
                  style={{
                    width: `${(samplePurchase.baseDiscount / samplePurchase.original) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Referral Cashback */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-foreground">Referral Cashback</p>
                  <p className="text-xs text-muted-foreground">
                    Rewards from your referral network
                  </p>
                </div>
                <span className="text-sm font-bold text-success">
                  -${samplePurchase.referralCashback}
                </span>
              </div>
              <div className="w-full bg-white rounded h-2">
                <div
                  className="bg-success h-full rounded"
                  style={{
                    width: `${(samplePurchase.referralCashback / samplePurchase.original) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Bonus Program */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-foreground">Bonus Program</p>
                  <p className="text-xs text-muted-foreground">
                    Loyalty rewards & special offers
                  </p>
                </div>
                <span className="text-sm font-bold text-success">
                  -${samplePurchase.bonusProgram}
                </span>
              </div>
              <div className="w-full bg-white rounded h-2">
                <div
                  className="bg-success h-full rounded"
                  style={{
                    width: `${(samplePurchase.bonusProgram / samplePurchase.original) * 100}%`,
                  }}
                />
              </div>
            </div>

            {/* Final Price */}
            <div className="flex justify-between items-center pt-3 border-t-2 border-primary">
              <span className="text-sm font-bold text-foreground">Your Price</span>
              <span className="text-xl font-bold text-primary">
                ${samplePurchase.final.toFixed(2)}
              </span>
            </div>

            {/* Total Savings */}
            <div className="bg-success/10 rounded p-3 mt-4">
              <p className="text-xs text-muted-foreground mb-1">Total Savings</p>
              <p className="text-lg font-bold text-success">
                ${samplePurchase.savings.toFixed(2)} (
                {((samplePurchase.savings / samplePurchase.original) * 100).toFixed(1)}%)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Referral Program */}
      <div className="px-4 py-6 bg-white border-b border-border">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Referral Program
        </h2>

        <div className="bg-muted rounded-lg p-4 mb-4">
          <p className="text-xs text-muted-foreground text-center mb-3">
            Your Referral Code
          </p>
          <div className="bg-white rounded p-3 mb-4 text-center border-2 border-primary">
            <p className="text-2xl font-bold text-primary" style={{ fontFamily: "Georgia, serif" }}>
              {referralCode}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              onClick={copyCode}
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-colors text-sm"
            >
              <Copy size={14} />
              {copied ? "Copied!" : "Copy"}
            </button>
            <button className="flex items-center justify-center gap-2 bg-muted text-foreground py-2 rounded hover:bg-border transition-colors text-sm">
              <Share2 size={14} />
              Share
            </button>
          </div>

          <div className="bg-white rounded p-3 text-xs text-muted-foreground space-y-2">
            <p className="font-medium text-foreground">How it works:</p>
            <ul className="space-y-1">
              <li>✓ Friends get 10% bonus on first order</li>
              <li>✓ You earn 5% from their purchases</li>
              <li>✓ Unlimited earning potential</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-border rounded-lg p-4">
          <h3 className="font-medium text-foreground mb-4">Your Referrals</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <div>
                <p className="text-sm font-medium text-foreground">Active Referrals</p>
                <p className="text-xs text-muted-foreground">Friends using your code</p>
              </div>
              <p className="text-2xl font-bold text-primary">18</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <div>
                <p className="text-sm font-medium text-foreground">Referral Earnings</p>
                <p className="text-xs text-muted-foreground">This month</p>
              </div>
              <p className="text-2xl font-bold text-primary">$127.50</p>
            </div>
            <div className="flex justify-between items-center p-3 bg-muted rounded">
              <div>
                <p className="text-sm font-medium text-foreground">Total Earned</p>
                <p className="text-xs text-muted-foreground">All time</p>
              </div>
              <p className="text-2xl font-bold text-primary">$892.30</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Programs */}
      <div className="px-4 py-6">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Bonus Programs
        </h2>

        <div className="space-y-3">
          <div className="bg-white border border-border rounded-lg p-4 flex items-start gap-3">
            <Zap className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-foreground text-sm">Flash Deals</h3>
              <p className="text-xs text-muted-foreground">
                Extra 20% cashback on selected items daily
              </p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-4 flex items-start gap-3">
            <Gift className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-foreground text-sm">Birthday Bonus</h3>
              <p className="text-xs text-muted-foreground">
                Get 25% extra cashback on your birthday month
              </p>
            </div>
          </div>

          <div className="bg-white border border-border rounded-lg p-4 flex items-start gap-3">
            <TrendingUp className="text-primary flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="font-medium text-foreground text-sm">Seasonal Campaigns</h3>
              <p className="text-xs text-muted-foreground">
                Participate in seasonal events for exclusive rewards
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
