import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: 'Fresh',
      role: t('about.team.roles.founder'),
      image: '/images/fresh.jpg',
    },
    {
      name: 'GDS_ATH',
      role: t('about.team.roles.manager'),
      image: '/images/gds.jpg',
    },
    {
      name: 'Loann',
      role: t('about.team.roles.manager'),
      image: '/images/loann.jpg',
    },
    {
      name: '⭐P-STAR⭐',
      role: t('about.team.roles.manager'),
      image: '/images/pstar.jpg',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('about.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('about.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">{t('about.story.title')}</h2>
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p className="text-justify">{t('about.story.content1')}</p>
              <p className="text-justify">{t('about.story.content2')}</p>
              <p className="text-justify">{t('about.story.content3')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-muted-foreground">{t('about.team.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 mx-auto">
                  {/* Circle Container */}
                  <div className="w-48 h-48 rounded-full overflow-hidden mx-auto bg-accent border-2 border-transparent group-hover:border-tiktok-blue transition-colors duration-300">
                    {/* Ensure image fills the circle */}
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;