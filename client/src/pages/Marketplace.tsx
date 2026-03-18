import { Search, Camera, Filter, Star } from "lucide-react";
import { useState } from "react";

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Marketplace groups
  const marketplaceGroups = {
    "Price Competitors": [
      { name: "Amazon", icon: "🛒", color: "from-orange-400 to-orange-600" },
      { name: "eBay", icon: "🏷️", color: "from-red-400 to-red-600" },
      { name: "AliExpress", icon: "🌍", color: "from-red-500 to-red-700" },
      { name: "Wish", icon: "✨", color: "from-pink-400 to-pink-600" },
      { name: "Alibaba", icon: "🏭", color: "from-yellow-400 to-yellow-600" },
    ],
    "Regional Marketplaces": [
      { name: "Taobao", icon: "🇨🇳", color: "from-blue-400 to-blue-600" },
      { name: "Lazada", icon: "🇸🇪", color: "from-cyan-400 to-cyan-600" },
      { name: "Shopee", icon: "🛍️", color: "from-pink-500 to-pink-700" },
      { name: "Tokopedia", icon: "🇮🇩", color: "from-green-400 to-green-600" },
    ],
    "Official Stores": [
      { name: "Apple Store", icon: "🍎", color: "from-gray-400 to-gray-600" },
      { name: "Samsung", icon: "📱", color: "from-blue-500 to-blue-700" },
      { name: "Nike", icon: "👟", color: "from-black to-gray-700" },
      { name: "Sony", icon: "🎮", color: "from-blue-600 to-blue-800" },
    ],
  };

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      original: 199.99,
      discount: 20,
      referral: 10,
      bonus: 5,
      final: 164.99,
      rating: 4.8,
      marketplace: "Amazon",
      savings: 35,
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      original: 299.99,
      discount: 45,
      referral: 15,
      bonus: 10,
      final: 229.99,
      rating: 4.6,
      marketplace: "eBay",
      savings: 70,
    },
    {
      id: 3,
      name: "USB-C Fast Charger",
      original: 49.99,
      discount: 8,
      referral: 3,
      bonus: 2,
      final: 36.99,
      rating: 4.7,
      marketplace: "AliExpress",
      savings: 13,
    },
    {
      id: 4,
      name: "Phone Case Premium",
      original: 29.99,
      discount: 5,
      referral: 2,
      bonus: 1,
      final: 21.99,
      rating: 4.5,
      marketplace: "Wish",
      savings: 8,
    },
    {
      id: 5,
      name: "Portable Speaker",
      original: 79.99,
      discount: 12,
      referral: 5,
      bonus: 3,
      final: 59.99,
      rating: 4.4,
      marketplace: "Alibaba",
      savings: 20,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-border z-10">
        <div className="px-4 py-4">
          <h1
            className="text-2xl font-light text-foreground mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Marketplace
          </h1>

          {/* Search & Photo Search */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 bg-input rounded px-3 py-2 flex items-center gap-2 border border-border">
              <Search size={18} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground"
              />
            </div>
            <button className="bg-primary text-primary-foreground p-2 rounded hover:bg-primary/90 transition-colors" title="Search by photo">
              <Camera size={18} />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="bg-muted text-foreground p-2 rounded hover:bg-border transition-colors"
              title="Filters"
            >
              <Filter size={18} />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <button className="bg-muted rounded px-3 py-2 text-foreground hover:bg-border transition-colors">
                Price: Low to High
              </button>
              <button className="bg-muted rounded px-3 py-2 text-foreground hover:bg-border transition-colors">
                Rating: High to Low
              </button>
              <button className="bg-muted rounded px-3 py-2 text-foreground hover:bg-border transition-colors">
                Most Savings
              </button>
              <button className="bg-muted rounded px-3 py-2 text-foreground hover:bg-border transition-colors">
                Fast Shipping
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Marketplace Groups */}
      <div className="px-4 py-6">
        {Object.entries(marketplaceGroups).map(([groupName, marketplaces]) => (
          <div key={groupName} className="mb-8">
            <h2 className="text-sm font-medium text-foreground mb-3 text-muted-foreground uppercase tracking-wide">
              {groupName}
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {marketplaces.map((mp) => (
                <button
                  key={mp.name}
                  onClick={() => setSelectedCategory(selectedCategory === mp.name ? null : mp.name)}
                  className={`neumorphic p-3 text-center transition-all ${
                    selectedCategory === mp.name
                      ? "neumorphic-pressed"
                      : ""
                  }`}
                >
                  <div className="text-2xl mb-2">{mp.icon}</div>
                  <p className="text-xs font-medium text-foreground">{mp.name}</p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div className="px-4 py-6 border-t border-border">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
          Featured Deals
        </h2>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="neumorphic p-4 transition-all cursor-pointer hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-medium text-foreground text-sm mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-muted-foreground">{product.marketplace}</span>
                    <span className="flex items-center gap-0.5">
                      <Star size={12} className="fill-primary text-primary" />
                      {product.rating}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground line-through">
                    ${product.original.toFixed(2)}
                  </p>
                  <p className="text-lg font-bold text-primary">
                    ${product.final.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Savings Breakdown */}
              <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                <div className="bg-muted rounded p-2">
                  <p className="text-muted-foreground">Discount</p>
                  <p className="font-medium text-foreground">-${product.discount}</p>
                </div>
                <div className="bg-muted rounded p-2">
                  <p className="text-muted-foreground">Referral</p>
                  <p className="font-medium text-foreground">-${product.referral}</p>
                </div>
                <div className="bg-muted rounded p-2">
                  <p className="text-muted-foreground">Bonus</p>
                  <p className="font-medium text-foreground">-${product.bonus}</p>
                </div>
              </div>

              {/* Savings Badge */}
              <div className="flex items-center justify-between">
                <div className="text-xs text-success font-medium">
                  Save ${product.savings.toFixed(2)} ({((product.savings / product.original) * 100).toFixed(0)}%)
                </div>
                <button className="text-xs bg-primary text-primary-foreground px-3 py-1 rounded hover:bg-primary/90 transition-colors">
                  View Deal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
