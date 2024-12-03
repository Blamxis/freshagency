import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactFormSchema } from '../utils/validation';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const validatedData = contactFormSchema.parse(data);

      setIsSubmitted(true);

      const response = await fetch('https://formsubmit.co/ajax/fresh.agency@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...validatedData,
          _subject: `Nouveau message de contact - ${validatedData.subject}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error('Erreur côté serveur:', await response.text());
      }
    } catch (error) {
      console.error('Erreur de validation:', error);
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.info.email.title'),
      details: t('contact.info.email.details'),
      description: t('contact.info.email.description'),
    },
    {
      icon: Phone,
      title: t('contact.info.phone.title'),
      details: t('contact.info.phone.details'),
      description: t('contact.info.phone.description'),
    },
    {
      icon: () => (
        <img
          src="/images/tiktok.webp"
          alt="TikTok"
          className="h-16 w-16 mx-auto text-blue-500 filter brightness-0 saturate-100 hue-rotate-[220deg]"
          style={{
            filter: "brightness(0) saturate(100%) hue-rotate(220deg)",
          }}
        />
      ),
      title: 'TikTok',
      details: (
        <a
          href="https://www.tiktok.com/@fresh.agency?lang=fr"
          className="text-white hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          @fresh.agency
        </a>
      ),
      description: 'Suivez-nous sur TikTok pour découvrir nos services.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('contact.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <div key={index} className="text-center p-8 bg-card rounded-xl border border-border hover:border-blue-500 transition-colors">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-blue-500" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-foreground font-medium mb-1">{item.details}</p>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-accent">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-card shadow-xl rounded-xl p-8 border border-border"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              {t('contact.form.title')}
            </h2>

            {isSubmitted && (
              <div className="mb-6 p-4 bg-blue-100 border border-blue-200 rounded-md flex items-center text-blue-700">
                <CheckCircle className="h-5 w-5 mr-2" />
                Message envoyé avec succès !
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.firstName')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                  {t('contact.form.lastName')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.doe@example.com"
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="tiktok" className="block text-sm font-medium text-foreground mb-2">
                {t('contact.form.tiktok')}
              </label>
              <input
                type="text"
                id="tiktok"
                name="tiktok"
                placeholder="@votre_compte"
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                {t('contact.form.subject.label')}
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">{t('contact.form.subject.select')}</option>
                <option value="join">{t('contact.form.subject.join')}</option>
                <option value="partnership">{t('contact.form.subject.partnership')}</option>
                <option value="support">{t('contact.form.subject.support')}</option>
                <option value="other">{t('contact.form.subject.other')}</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder={t('contact.form.message')}
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {isSubmitting ? 'Envoi en cours...' : t('contact.form.submit')}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
