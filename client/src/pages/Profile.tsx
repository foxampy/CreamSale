import { LogOut, ChevronRight, Settings, HelpCircle, Shield, Bell, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import MenuButton from "@/components/MenuButton";

export default function Profile() {
  return (
    <div className="min-h-screen bg-background pb-40">
      {/* Menu Button */}
      <MenuButton />

      {/* User Profile Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-border px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 neumorphic rounded-full flex items-center justify-center text-3xl">
            👤
          </div>
          <div className="flex-1">
            <h1
              className="text-2xl font-light text-foreground"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Foxampy
            </h1>
            <p className="text-sm text-muted-foreground">Member since 2020</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">foxampy@creamsale.com</p>
      </div>

      {/* Quick Stats */}
      <div className="px-4 py-6 grid grid-cols-3 gap-3">
        <div className="bg-white border border-border rounded-lg p-4 text-center hover:shadow-md transition-all">
          <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Georgia, serif" }}>
            $427.50
          </div>
          <div className="text-xs text-muted-foreground">Total Saved</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center hover:shadow-md transition-all">
          <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Georgia, serif" }}>
            4,100
          </div>
          <div className="text-xs text-muted-foreground">Loyalty Points</div>
        </div>
        <div className="bg-white border border-border rounded-lg p-4 text-center hover:shadow-md transition-all">
          <div className="text-3xl font-bold text-primary mb-1" style={{ fontFamily: "Georgia, serif" }}>
            18
          </div>
          <div className="text-xs text-muted-foreground">Referrals</div>
        </div>
      </div>

      {/* Account Management */}
      <div className="px-4 py-6 border-t border-border">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Account
        </h2>

        <div className="space-y-2">
          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="text-left">
              <h3 className="font-medium text-foreground text-sm">Personal Information</h3>
              <p className="text-xs text-muted-foreground">Name, email, phone number</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>

          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="text-left">
              <h3 className="font-medium text-foreground text-sm">Addresses</h3>
              <p className="text-xs text-muted-foreground">Manage delivery addresses</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>

          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="text-left">
              <h3 className="font-medium text-foreground text-sm">Payment Methods</h3>
              <p className="text-xs text-muted-foreground">Cards and wallets</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>

          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="text-left">
              <h3 className="font-medium text-foreground text-sm">Purchase History</h3>
              <p className="text-xs text-muted-foreground">View past orders and savings</p>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Settings */}
      <div className="px-4 py-6 border-t border-border">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Settings
        </h2>

        <div className="space-y-2">
          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <Bell className="text-primary" size={20} />
              <div className="text-left">
                <h3 className="font-medium text-foreground text-sm">Notifications</h3>
                <p className="text-xs text-muted-foreground">Alerts and updates</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>

          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <Shield className="text-primary" size={20} />
              <div className="text-left">
                <h3 className="font-medium text-foreground text-sm">Security</h3>
                <p className="text-xs text-muted-foreground">Password, 2FA, privacy</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>

          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <Zap className="text-primary" size={20} />
              <div className="text-left">
                <h3 className="font-medium text-foreground text-sm">Preferences</h3>
                <p className="text-xs text-muted-foreground">Language, currency, theme</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Support */}
      <div className="px-4 py-6 border-t border-border">
        <h2
          className="text-lg font-light text-foreground mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Support
        </h2>

        <div className="space-y-2">
          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <HelpCircle className="text-primary" size={20} />
              <div className="text-left">
                <h3 className="font-medium text-foreground text-sm">Help Center</h3>
                <p className="text-xs text-muted-foreground">FAQs and guides</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>

          <button className="w-full bg-white border border-border rounded-lg p-4 flex items-center justify-between hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
              <Settings className="text-primary" size={20} />
              <div className="text-left">
                <h3 className="font-medium text-foreground text-sm">Contact Us</h3>
                <p className="text-xs text-muted-foreground">Email, chat, or phone</p>
              </div>
            </div>
            <ChevronRight size={18} className="text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* About */}
      <div className="px-4 py-6 border-t border-border">
        <div className="bg-white border border-border rounded-lg p-6 text-center">
          <h3
            className="font-light text-2xl text-foreground mb-2"
            style={{ fontFamily: "Georgia, serif" }}
          >
            CreamSale
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Find the best deals across all marketplaces
          </p>
          <div className="text-xs text-muted-foreground space-y-1 mb-4">
            <p>Version 2.0.0</p>
            <p>© 2020 CreamSale Inc.</p>
            <p>Developed by Foxampy</p>
            <p>Portfolio Demo</p>
          </div>
          <div className="flex gap-2 justify-center text-xs mb-6">
            <button className="text-primary hover:underline">Terms</button>
            <span className="text-border">•</span>
            <button className="text-primary hover:underline">Privacy</button>
            <span className="text-border">•</span>
            <button className="text-primary hover:underline">Contact</button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-4 py-6 pb-24">
        <button className="w-full bg-destructive text-destructive-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>

      <Footer />
    </div>
  );
}
