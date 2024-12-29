import React, { useState, useRef, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { z } from "zod";

// Validation Schema
const joinFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  tiktok: z.string().optional(),
  agencyCode: z.string().optional(),
  referral: z.string().optional(), // Parrain n'est pas obligatoire
  investissement: z.string().optional(),
  message: z.string().max(1000).optional(), // Message n'est pas obligatoire
  formType: z.enum(["creator", "brand"]),
});

const JoinUs = () => {
  const { t } = useTranslation();
  const [formType, setFormType] = useState<"creator" | "brand">("creator");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000); // Hide after 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [isSubmitted]);

  const creatorBenefits = t("join.benefits.creator.items", {
    returnObjects: true,
  }) as string[];
  const brandBenefits = t("join.benefits.brand.items", {
    returnObjects: true,
  }) as string[];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.formType = formType;

    try {
      const validatedData = joinFormSchema.parse(data);

      const response = await fetch(
        "https://formsubmit.co/ajax/fresh.agency@hotmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...validatedData,
            _subject: `Nouvelle candidature - ${
              formType === "creator" ? "Créateur" : "Marque"
            }`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        if (formRef.current) {
          formRef.current.reset(); // Reset form fields
        }
      } else {
        console.error("Erreur côté serveur :", await response.text());
      }
    } catch (error) {
      console.error("Erreur de validation :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("join.hero.title")}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t("join.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Form Type Selection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-4 mb-12">
              <button
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  formType === "creator"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                    : "bg-card text-foreground hover:bg-blue-500"
                } border border-border`}
                onClick={() => setFormType("creator")}
              >
                Créateur
              </button>
              <button
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
                  formType === "brand"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                    : "bg-card text-foreground hover:bg-blue-500"
                } border border-border`}
                onClick={() => setFormType("brand")}
              >
                Marque
              </button>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                {t(`join.benefits.${formType}.title`)}
              </h2>
              <div className="bg-card rounded-xl p-8 border border-border">
                <ul className="space-y-4">
                  {(formType === "creator" ? creatorBenefits : brandBenefits).map(
                    (benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* Application Form */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-card shadow-xl rounded-xl p-8 border border-border"
            >
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-md flex items-center text-green-700">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Candidature envoyée avec succès !
                </div>
              )}

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Votre prénom"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Votre nom"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="votre.email@example.com"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                    required
                  />
                </div>

                {formType === "creator" && (
                  <>
                    <div>
                      <label
                        htmlFor="tiktok"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Pseudo TikTok
                      </label>
                      <input
                        type="text"
                        id="tiktok"
                        name="tiktok"
                        placeholder="votre_compte"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="referral"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Parrain
                      </label>
                      <input
                        type="text"
                        id="referral"
                        name="referral"
                        placeholder="Votre parrain (optionnel)"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="agencyCode"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Code Agence
                      </label>
                      <input
                        type="text"
                        id="agencyCode"
                        name="agencyCode"
                        placeholder="Entrez votre code agence"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                      />
                    </div>
                  </>
                )}

                {formType === "brand" && (
                  <div>
                    <label
                      htmlFor="investissement"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Investissement
                    </label>
                    <select
                      id="investissement"
                      name="investissement"
                      className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                    >
                      <option value="">Sélectionnez un montant</option>
                      <option value="0-500">0 € - 500 €</option>
                      <option value="500-1000">500 € - 1000 €</option>
                      <option value="1000-5000">1000 € - 5000 €</option>
                      <option value="5000-10000">5000 € - 10000 €</option>
                      <option value="10000-20000">10000 € - 20000 €</option>
                      <option value="20000-30000">20000 € - 30000 €</option>
                      <option value="30000-40000">30000 € - 40000 €</option>
                      <option value="40000-50000">40000 € - 50000 €</option>
                    </select>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Écrivez votre message ici... (optionnel)"
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-md hover:bg-blue-600 transition duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Soumettre"}
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