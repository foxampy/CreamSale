import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 py-8 mt-8">
      <div className="max-w-md mx-auto">
        <div className="neumorphic-pressed rounded-xl p-6 text-center">
          <p className="text-xs text-muted-foreground mb-3">
            © 2020 CreamSale
          </p>
          <button
            onClick={() => window.open("https://foxampy.vercel.app", "_blank")}
            className="neumorphic-btn inline-flex items-center gap-2 px-4 py-2 text-xs font-medium"
          >
            By Foxampy
            <ExternalLink size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
