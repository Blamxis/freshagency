import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { contactFormSchema } from '../utils/validation';

const Contact = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Référence au formulaire
  const formRef = useRef<HTMLFormElement>(null);

  // Masquer automatiquement le message de confirmation après 3 secondes
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

      // Affichez immédiatement le message
      setIsSubmitted(true);

      // Envoyer la requête
      const response = await fetch('https://formsubmit.co/ajax/gavinetm26@gmail.com', {
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
        // Réinitialiser le formulaire après un envoi réussi
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        console.error('Erreur côté serveur:', await response.text());
      }
    } catch (error) {
      console.error('Erreur de validation:', error);
      setIsSubmitted(false); // Annule la confirmation si une erreur se produit
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
      icon: MapPin,
      title: t('contact.info.office.title'),
      details: t('contact.info.office.details'),
      description: t('contact.info.office.description'),
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white py-20">
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
              <div key={index} className="text-center p-8 bg-card rounded-xl border border-border hover:border-tiktok-red/50 transition-colors">
                <item.icon className="h-12 w-12 text-tiktok-red mx-auto mb-4" />
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
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-md flex items-center text-green-700">
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
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent"
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
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent"
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
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent"
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
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                {t('contact.form.subject.label')}
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent"
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
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 rounded-md text-white bg-gradient-to-r from-tiktok-red to-tiktok-blue hover:opacity-90 transition-opacity disabled:opacity-50"
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
