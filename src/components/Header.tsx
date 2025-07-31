import { Button } from "@/components/ui/button";
import { Menu, User, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="flex items-center space-x-2">
              <div className="rounded-lg bg-gradient-to-r from-primary to-secondary p-2">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="hidden font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent sm:inline-block">
                CareerAI
              </span>
            </div>
          </a>
          <nav className="flex items-center gap-6 text-sm">
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#features"
            >
              Features
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#templates"
            >
              Templates
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/about"
            >
              About
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="/contact"
            >
              Contact
            </a>
            <a
              className="transition-colors hover:text-foreground/80 text-foreground/60"
              href="#pricing"
            >
              Pricing
            </a>
          </nav>
        </div>
        <Button variant="ghost" size="icon" className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="hidden lg:inline-block">
            </div>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="/auth/login">Sign In</a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="/auth/signup">Get Started</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;