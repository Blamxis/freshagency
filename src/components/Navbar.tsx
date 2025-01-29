import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.joinUs"), path: "/join" },
    { name: t("nav.faq"), path: "/faq" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md border-b border-border fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <img src="/images/logofreshagency.png" alt="Fresh Agency Logo" className="h-12 sm:h-16 w-auto" />
              <span className="hidden md:inline font-bold text-lg sm:text-xl gradient-text">FreshAgency</span>
            </Link>
          </div>

          {/* Desktop Menu with Language & Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="text-foreground hover:text-tiktok-blue px-3 py-2 rounded-md text-sm font-medium transition-colors">
                {item.name}
              </Link>
            ))}
            <div className="relative">
              <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-tiktok-blue focus:outline-none flex items-center space-x-2">
                🌍 <span>{i18n.language.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-md shadow-lg">
                  <button onClick={() => changeLanguage('fr')} className="block w-full px-4 py-2 text-left hover:bg-accent">Français</button>
                  <button onClick={() => changeLanguage('en')} className="block w-full px-4 py-2 text-left hover:bg-accent">English</button>
                  <button onClick={() => changeLanguage('es')} className="block w-full px-4 py-2 text-left hover:bg-accent">Español</button>
                  <button onClick={() => changeLanguage('it')} className="block w-full px-4 py-2 text-left hover:bg-accent">Italiano</button>
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button with Language & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-tiktok-blue focus:outline-none" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
            <div className="relative">
              <button onClick={() => setLangMenuOpen(!langMenuOpen)} className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-tiktok-blue focus:outline-none flex items-center space-x-2">
                🌍 <span>{i18n.language.toUpperCase()}</span>
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-md shadow-lg">
                  <button onClick={() => changeLanguage('fr')} className="block w-full px-4 py-2 text-left hover:bg-accent">Français</button>
                  <button onClick={() => changeLanguage('en')} className="block w-full px-4 py-2 text-left hover:bg-accent">English</button>
                  <button onClick={() => changeLanguage('es')} className="block w-full px-4 py-2 text-left hover:bg-accent">Español</button>
                  <button onClick={() => changeLanguage('it')} className="block w-full px-4 py-2 text-left hover:bg-accent">Italiano</button>
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden transition-all duration-300 ease-in-out bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-tiktok-red hover:bg-accent" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
