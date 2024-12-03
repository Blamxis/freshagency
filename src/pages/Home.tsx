import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRight, 
  Shield, 
  DollarSign, 
  UserCog,
  Calculator,
  Users2,
  Trophy,
  Gamepad2,
  PaintBucket,
  LineChart,
  Star,
  BadgeCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TypewriterText from '../components/TypewriterText';

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

interface Streamer {
  name: string;
  tiktok: string;
  tiktokUrl: string;
  image: string;
  description: string;
  games: string[];
  certified?: boolean;
}

const Home = () => {
  const { t } = useTranslation();

  const services: Service[] = [
    {
      icon: Shield,
      title: t('home.services.items.0.title'),
      description: t('home.services.items.0.description')
    },
    {
      icon: DollarSign,
      title: t('home.services.items.1.title'),
      description: t('home.services.items.1.description')
    },
    {
      icon: UserCog,
      title: t('home.services.items.2.title'),
      description: t('home.services.items.2.description')
    },
    {
      icon: Calculator,
      title: t('home.services.items.3.title'),
      description: t('home.services.items.3.description')
    },
    {
      icon: Users2,
      title: t('home.services.items.4.title'),
      description: t('home.services.items.4.description')
    },
    {
      icon: Trophy,
      title: t('home.services.items.5.title'),
      description: t('home.services.items.5.description')
    },
    {
      icon: Gamepad2,
      title: t('home.services.items.6.title'),
      description: t('home.services.items.6.description')
    },
    {
      icon: PaintBucket,
      title: t('home.services.items.7.title'),
      description: t('home.services.items.7.description')
    },
    {
      icon: LineChart,
      title: t('home.services.items.8.title'),
      description: t('home.services.items.8.description')
    }
  ];

  const certifiedStreamers: Streamer[] = [
    {
      name: 'Fresh Spam',
      tiktok: '@fresh_spam',
      tiktokUrl: 'https://www.tiktok.com/@fresh_spam?lang=fr',
      image: '/public/images/freshpp.jpeg',
      description: t('home.certifiedStreamers.freshSpam.description'),
      games: ['Minecraft', 'Live Interactif'],
      certified: true
    },
    {
      name: 'Blyk',
      tiktok: '@blyk0_0',
      tiktokUrl: 'https://www.tiktok.com/@blyk0_0?lang=fr',
      image: '/public/images/blykpp.jpeg',
      description: t('home.certifiedStreamers.blyk0.description'),
      games: ['Minecraft', 'GTA V', 'Fortnite', 'Live Interactif'],
      certified: true
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <TypewriterText 
                prefix={t('home.hero.title.prefix')}
                words={t('home.hero.title.words', { returnObjects: true }) as string[]}
                speed={150}
                deleteSpeed={75}
                delayBetweenWords={3000}
                className="inline-block"
              />
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-white/90 max-w-3xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/join"
                className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors"
              >
                {t('home.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('home.services.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t('home.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-tiktok-red/50 transition-colors"
              >
                <service.icon className="h-8 w-8 text-tiktok-red mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('home.eligibility.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t('home.eligibility.subtitle')}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl p-6 sm:p-8 border border-border">
              <ul className="space-y-4">
                {(t('home.eligibility.criteria', { returnObjects: true }) as string[]).map((criterion, index) => (
                  <li key={index} className="flex items-center text-foreground">
                    <Star className="h-5 w-5 text-tiktok-red mr-3 flex-shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certified Streamers */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              {t('home.certifiedStreamers.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              {t('home.certifiedStreamers.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {certifiedStreamers.map((streamer, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-tiktok-red/50 transition-colors"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={streamer.image}
                    alt={streamer.name}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {streamer.name}
                      </h3>
                      {streamer.certified && (
                        <BadgeCheck className="h-5 w-5 text-tiktok-blue ml-2" />
                      )}
                    </div>
                    <a
                      href={streamer.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tiktok-red hover:text-tiktok-blue transition-colors"
                    >
                      {streamer.tiktok}
                    </a>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {streamer.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {streamer.games.map((game, gameIndex) => (
                      <span
                        key={gameIndex}
                        className="px-3 py-1 bg-accent rounded-full text-sm text-foreground"
                      >
                        {game}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('home.cta.title')}
          </h2>
          <Link
            to="/join"
            className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors"
          >
            {t('home.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;