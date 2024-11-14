import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Slogan */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-6 w-6 text-tiktok-red" />
              <span className="font-bold text-xl gradient-text">FreshAgency</span>
            </div>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t('footer.slogan')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-tiktok-red transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/join" className="text-muted-foreground hover:text-tiktok-red transition-colors">
                  {t('nav.joinUs')}
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-tiktok-red transition-colors">
                  {t('nav.faq')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-tiktok-red transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">{t('footer.contact.title')}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.tiktok.com/@fresh.agency?lang=fr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-muted-foreground hover:text-tiktok-red transition-colors"
                >
                  <svg 
                    className="h-5 w-5 mr-2" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-1.119-1.198-1.531-2.62-1.644-3.338h.004c-.1-.659-.085-.953-.085-.953L16.01 0h-3.958l-.006 18.209c0 .952-.704 1.791-1.64 1.791-1.033 0-1.755-.839-1.755-1.791 0-.952.722-1.791 1.755-1.791.175 0 .343.026.506.073V12.73a5.416 5.416 0 0 0-.506-.024c-2.986 0-5.402 2.42-5.402 5.409s2.416 5.409 5.402 5.409c2.985 0 5.402-2.42 5.402-5.409V9.384c1.18.812 2.578 1.258 4.076 1.258V6.883c-1.67-.002-3.115-.871-3.885-2.179V5.56h.004a6.097 6.097 0 0 0 3.881 2.179V5.562z"/>
                  </svg>
                  @fresh.agency
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/33768141479" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center text-muted-foreground hover:text-tiktok-red transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  07 68 14 14 79
                </a>
              </li>
              <li>
                <a 
                  href="mailto:fresh.agency@hotmail.com" 
                  className="flex items-center text-muted-foreground hover:text-tiktok-red transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  fresh.agency@hotmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-8 border-t border-border text-center text-sm sm:text-base text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} FreshAgency. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;