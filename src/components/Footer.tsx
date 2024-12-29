import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FaTiktok } from 'react-icons/fa'; // Importation du logo TikTok

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-12 text-center">
          {/* Logo et slogan */}
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <img
                src="/images/logofreshagency.png"
                alt="Fresh Agency Logo"
                className="h-12 sm:h-16 w-auto"
              />
              <span className="font-bold text-xl gradient-text">FreshAgency</span>
            </div>
            <p className="text-muted-foreground">
              {t('footer.slogan', 'Empowering creators to reach new heights in the digital world.')}
            </p>
          </div>

          {/* Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {/* Liens rapides */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                {t('footer.quickLinks', 'Quick Links')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link to="/join" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    {t('nav.joinUs')}
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    {t('nav.faq')}
                  </Link>
                </li>
                <li>
                  <Link to="/mentions-legales" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    {t('nav.legalNotice')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                {t('footer.contact.title', 'Restons en contact')}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:fresh.agency@hotmail.com"
                    className="flex items-center justify-center sm:justify-start text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    fresh.agency@hotmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/33768131479"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    07 68 13 14 79
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@fresh.agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center sm:justify-start text-muted-foreground hover:text-blue-500 transition-colors"
                  >
                    <FaTiktok className="h-5 w-5 mr-2" />
                    @FreshAgency
                  </a>
                </li>
              </ul>
            </div>

            {/* Politique */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-foreground">{t('footer.policies', 'Our Policies')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy-policy" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    {t('footer.privacy', 'Privacy Policy')}
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-muted-foreground hover:text-blue-500 transition-colors">
                    {t('footer.cookies', 'Cookie Policy')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FreshAgency. {t('footer.rights', 'All rights reserved.')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
