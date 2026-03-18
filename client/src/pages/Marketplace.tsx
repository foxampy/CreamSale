import { Search, Camera, Filter, Star } from "lucide-react";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Marketplace groups with real logo URLs (using reliable CDNs)
  const marketplaceGroups = {
    "Price Competitors": [
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg", color: "from-orange-400 to-orange-600" },
      { name: "eBay", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg", color: "from-red-400 to-red-600" },
      { name: "AliExpress", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bc/AliExpress_logo.svg", color: "from-red-500 to-red-700" },
      { name: "Wish", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Wish_logo.svg", color: "from-pink-400 to-pink-600" },
      { name: "Alibaba", logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/Alibaba.com_Logo.svg", color: "from-orange-400 to-orange-600" },
    ],
    "Regional Marketplaces": [
      { name: "Taobao", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Taobao_logo.svg", color: "from-orange-400 to-orange-600" },
      { name: "Lazada", logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/Lazada_logo.svg", color: "from-cyan-400 to-cyan-600" },
      { name: "Shopee", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee_logo.svg", color: "from-orange-500 to-orange-700" },
      { name: "Tokopedia", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Tokopedia_Logo.svg", color: "from-green-400 to-green-600" },
    ],
    "Official Stores": [
      { name: "Apple Store", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", color: "from-gray-400 to-gray-600" },
      { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg", color: "from-blue-500 to-blue-700" },
      { name: "Nike", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", color: "from-gray-800 to-black" },
      { name: "Sony", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg", color: "from-gray-600 to-gray-800" },
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
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1603351154351-5cf99bc70e67?w=300&h=300&fit=crop",
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
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-lg border-b border-border z-10">
        <div className="px-4 py-4">
          <h1
            className="text-2xl font-light text-foreground mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Marketplace
          </h1>

          {/* Search & Photo Search */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 neumorphic-input flex items-center gap-2">
              <Search size={18} className="icon-monochrome" />
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground neumorphic-input"
              />
            </div>
            <button className="neumorphic-btn p-2" title="Search by photo">
              <Camera className="icon-monochrome" size={18} />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="neumorphic-btn p-2"
              title="Filters"
            >
              <Filter className="icon-monochrome" size={18} />
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
              <button className="neumorphic px-3 py-2 text-foreground hover:neumorphic-pressed transition-all">
                Price: Low to High
              </button>
              <button className="neumorphic px-3 py-2 text-foreground hover:neumorphic-pressed transition-all">
                Rating: High to Low
              </button>
              <button className="neumorphic px-3 py-2 text-foreground hover:neumorphic-pressed transition-all">
                Most Savings
              </button>
              <button className="neumorphic px-3 py-2 text-foreground hover:neumorphic-pressed transition-all">
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
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3">
              {marketplaces.map((mp) => (
                <button
                  key={mp.name}
                  onClick={() => setSelectedCategory(selectedCategory === mp.name ? null : mp.name)}
                  className={`neumorphic-card p-2 md:p-3 flex flex-col items-center justify-center gap-1 md:gap-2 transition-all ${
                    selectedCategory === mp.name
                      ? "neumorphic-pressed"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-white flex items-center justify-center p-1 md:p-2">
                    <img src={mp.logo} alt={mp.name} className="w-full h-full object-contain" />
                  </div>
                  <p className="text-[10px] md:text-xs font-medium text-foreground text-center line-clamp-1">{mp.name}</p>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="neumorphic-card p-3 md:p-4 transition-all cursor-pointer hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="neumorphic-pressed w-full aspect-square rounded-lg overflow-hidden mb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Header */}
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-foreground text-xs md:text-sm mb-1 truncate">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 text-[10px] md:text-xs">
                    <span className="text-muted-foreground truncate">{product.marketplace}</span>
                    <span className="flex items-center gap-0.5 flex-shrink-0">
                      <Star size={10} className="fill-primary text-primary" />
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mb-2">
                <p className="text-[10px] text-muted-foreground line-through">
                  ${product.original.toFixed(2)}
                </p>
                <p className="text-base md:text-lg font-bold text-primary">
                  ${product.final.toFixed(2)}
                </p>
              </div>

              {/* Savings Breakdown */}
              <div className="grid grid-cols-3 gap-1 mb-2 text-[10px]">
                <div className="neumorphic-pressed p-1 rounded text-center">
                  <p className="text-muted-foreground text-[9px]">Disc</p>
                  <p className="font-medium text-foreground">-${product.discount}</p>
                </div>
                <div className="neumorphic-pressed p-1 rounded text-center">
                  <p className="text-muted-foreground text-[9px]">Ref</p>
                  <p className="font-medium text-foreground">-${product.referral}</p>
                </div>
                <div className="neumorphic-pressed p-1 rounded text-center">
                  <p className="text-muted-foreground text-[9px]">Bonus</p>
                  <p className="font-medium text-foreground">-${product.bonus}</p>
                </div>
              </div>

              {/* Savings Badge */}
              <div className="flex items-center justify-between">
                <div className="text-[10px] text-success font-medium">
                  -{((product.savings / product.original) * 100).toFixed(0)}%
                </div>
                <button className="text-[10px] gradient-button px-2 py-1 rounded">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
