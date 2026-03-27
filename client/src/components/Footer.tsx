import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-4 py-4 mt-4">
      <div className="max-w-md mx-auto">
        <div className="neumorphic-pressed rounded-xl p-4 text-center">
          <p className="text-[10px] text-muted-foreground mb-2">
            © 2018 CreamSale
          </p>
          <button
            onClick={() => window.open("https://t.me/foxampy", "_blank")}
            className="neumorphic-btn inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-medium"
          >
            By Foxampy
            <ExternalLink size={10} />
          </button>
        </div>
      </div>
    </footer>
  );
}
