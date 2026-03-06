import { portfolioData } from "@/lib/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-lg">VV</span>
            <span className="text-muted-foreground text-sm">
              {portfolioData.name}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {currentYear} {portfolioData.name}. Built with care.
          </p>
        </div>
      </div>
    </footer>
  );
}
