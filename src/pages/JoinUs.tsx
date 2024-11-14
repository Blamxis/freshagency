import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { joinFormSchema } from '../utils/validation';

const JoinUs = () => {
  const { t } = useTranslation();
  const [formType, setFormType] = useState<'creator' | 'brand'>('creator');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const creatorBenefits = t('join.benefits.creator.items', { returnObjects: true }) as string[];
  const brandBenefits = t('join.benefits.brand.items', { returnObjects: true }) as string[];
  const agencySteps = t('join.agencyCode.steps', { returnObjects: true }) as string[];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const validatedData = joinFormSchema.parse(data);
      
      const response = await fetch('https://formsubmit.co/ajax/fresh.agency@hotmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...validatedData,
          formType,
          _subject: `Nouvelle candidature - ${formType === 'creator' ? 'Créateur' : 'Marque'}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Erreur de validation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('join.hero.title')}</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('join.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Form Type Selection */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-4 mb-12">
              <button
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  formType === 'creator'
                    ? 'bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white shadow-lg'
                    : 'bg-card text-foreground hover:border-tiktok-red/50'
                } border border-border`}
                onClick={() => setFormType('creator')}
              >
                {t('join.options.creator')}
              </button>
              <button
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  formType === 'brand'
                    ? 'bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white shadow-lg'
                    : 'bg-card text-foreground hover:border-tiktok-red/50'
                } border border-border`}
                onClick={() => setFormType('brand')}
              >
                {t('join.options.brand')}
              </button>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t(`join.benefits.${formType}.title`)}
              </h2>
              <div className="bg-card rounded-xl p-8 border border-border">
                <ul className="space-y-4">
                  {(formType === 'creator' ? creatorBenefits : brandBenefits).map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-tiktok-red mr-3 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Agency Code Steps */}
            {formType === 'creator' && (
              <div className="mb-12">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">{t('join.agencyCode.title')}</h2>
                  <div className="bg-card rounded-xl p-8 border border-border">
                    <div className="space-y-6">
                      {agencySteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-tiktok-red text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-foreground text-lg">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="bg-card shadow-xl rounded-xl p-8 border border-border">
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-md flex items-center text-green-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Candidature envoyée avec succès !
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      {t('join.form.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      {t('join.form.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t('join.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                    required
                  />
                </div>

                {formType === 'creator' ? (
                  <>
                    <div>
                      <label htmlFor="tiktok" className="block text-sm font-medium text-foreground mb-2">
                        {t('join.form.tiktok')}
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        placeholder="@"
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="agencyCode" className="block text-sm font-medium text-foreground mb-2">
                        {t('join.form.agencyCode')}
                      </label>
                      <input
                        type="text"
                        id="agencyCode"
                        name="agencyCode"
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="referral" className="block text-sm font-medium text-foreground mb-2">
                        {t('join.form.referral')}
                      </label>
                      <input
                        type="text"
                        id="referral"
                        name="referral"
                        placeholder="@"
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        {t('join.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                        {t('join.form.budget')}
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                        required
                      >
                        <option>{t('join.form.budgetRanges.select')}</option>
                        <option>{t('join.form.budgetRanges.range1')}</option>
                        <option>{t('join.form.budgetRanges.range2')}</option>
                        <option>{t('join.form.budgetRanges.range3')}</option>
                        <option>{t('join.form.budgetRanges.range4')}</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    {t(`join.form.about.${formType}`)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-2 bg-background border border-border rounded-md focus:ring-2 focus:ring-tiktok-red focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-tiktok-red to-tiktok-blue text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center group disabled:opacity-50"
                >
                  {isSubmitting ? 'Envoi en cours...' : t('join.form.submit')}
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;