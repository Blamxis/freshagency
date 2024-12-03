import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = t('faq.questions', { returnObjects: true }) as FaqItem[];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('faq.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('faq.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:border-tiktok-blue/50 transition-colors duration-300"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent/50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-foreground">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-tiktok-blue" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-tiktok-blue" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 text-muted-foreground border-t border-border whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('faq.stillHaveQuestions.title')}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('faq.stillHaveQuestions.subtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gradient-to-r from-tiktok-blue to-tiktok-blue hover:opacity-90 transition-opacity"
          >
            {t('faq.stillHaveQuestions.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Faq;
