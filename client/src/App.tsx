import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";
import Marketplace from "./pages/Marketplace";
import Rewards from "./pages/Rewards";
import Cards from "./pages/Cards";
import Profile from "./pages/Profile";
import Update2026 from "./pages/Update2026";
import BottomNav from "./components/BottomNav";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 pb-40">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/marketplace"} component={Marketplace} />
          <Route path={"/rewards"} component={Rewards} />
          <Route path={"/cards"} component={Cards} />
          <Route path={"/profile"} component={Profile} />
          <Route path={"/update-2026"} component={Update2026} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </div>
      <BottomNav />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
