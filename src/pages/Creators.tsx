import React from 'react';
import { Star, TrendingUp, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Creators = () => {
  const { t } = useTranslation();

  const creators = [
    {
      name: 'Sophie Martin',
      category: t('creators.categories.lifestyle'),
      followers: '2.5M',
      engagement: '8.2%',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      recentWork: ['Fashion Week Coverage', 'Summer Collection Launch', 'Sustainable Fashion Series']
    },
    {
      name: 'Lucas Dubois',
      category: t('creators.categories.tech'),
      followers: '1.8M',
      engagement: '7.5%',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      recentWork: ['Gaming Hardware Reviews', 'Tech News Updates', 'Gaming Championships']
    },
    {
      name: 'Emma Bernard',
      category: t('creators.categories.dance'),
      followers: '3.2M',
      engagement: '9.1%',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      recentWork: ['Dance Challenges', 'Music Festival Coverage', 'Choreography Tutorials']
    },
    {
      name: 'Thomas Laurent',
      category: t('creators.categories.food'),
      followers: '1.5M',
      engagement: '8.8%',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      recentWork: ['Quick Recipe Series', 'Restaurant Reviews', 'Cooking Tips & Tricks']
    },
    {
      name: 'Marie Chen',
      category: t('creators.categories.beauty'),
      followers: '2.1M',
      engagement: '7.9%',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      recentWork: ['Skincare Routines', 'Makeup Tutorials', 'Product Reviews']
    },
    {
      name: 'Alex Moreau',
      category: t('creators.categories.fitness'),
      followers: '1.9M',
      engagement: '8.5%',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      recentWork: ['Home Workouts', 'Nutrition Tips', 'Wellness Challenges']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('creators.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('creators.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center p-6 bg-card rounded-xl border border-border">
              <Star className="h-10 w-10 text-tiktok-red mr-4" />
              <div>
                <div className="text-2xl font-bold text-foreground">95%</div>
                <div className="text-muted-foreground">{t('creators.stats.successRate')}</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-xl border border-border">
              <Users className="h-10 w-10 text-tiktok-blue mr-4" />
              <div>
                <div className="text-2xl font-bold text-foreground">50M+</div>
                <div className="text-muted-foreground">{t('creators.stats.followers')}</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-6 bg-card rounded-xl border border-border">
              <TrendingUp className="h-10 w-10 text-tiktok-red mr-4" />
              <div>
                <div className="text-2xl font-bold text-foreground">8.5%</div>
                <div className="text-muted-foreground">{t('creators.stats.engagement')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creators Grid */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creators.map((creator, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{creator.name}</h3>
                    <p className="text-white/90">{creator.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Followers</div>
                      <div className="font-semibold text-tiktok-red">{creator.followers}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Engagement</div>
                      <div className="font-semibold text-tiktok-blue">{creator.engagement}</div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{t('creators.recentWork')}</div>
                    <ul className="space-y-1">
                      {creator.recentWork.map((work, workIndex) => (
                        <li key={workIndex} className="text-sm text-foreground flex items-center">
                          <span className="w-2 h-2 bg-tiktok-red rounded-full mr-2" />
                          {work}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Creators;