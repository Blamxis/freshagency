import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { joinFormSchema } from "../utils/validation";
import ImageModal from '../components/ImageModal';

const JoinUs = () => {
  const { t } = useTranslation();
  const [formType, setFormType] = useState<"creator" | "brand">("creator");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const creatorBenefits = t("join.benefits.creator.items", {
    returnObjects: true,
  }) as string[];
  const brandBenefits = t("join.benefits.brand.items", {
    returnObjects: true,
  }) as string[];
  const agencySteps = t("join.agencyCode.steps", {
    returnObjects: true,
  }) as string[];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

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
            formType,
            _subject: `Nouvelle candidature - ${formType === "creator" ? "Créateur" : "Marque"}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error("Erreur de validation:", error);
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
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${formType === "creator"
                  ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                  : "bg-card text-foreground hover:bg-blue-500"
                  } border border-border`}
                onClick={() => setFormType("creator")}
              >
                Créateur
              </button>
              <button
                className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${formType === "brand"
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
                  {(formType === "creator"
                    ? creatorBenefits
                    : brandBenefits
                  ).map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-tiktok-blue mr-3 flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Agency Code Steps */}
            {formType === "creator" && (
              <div className="mb-12">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-center mb-8">
                    Étapes pour le code agence
                  </h2>
                  <div className="bg-card rounded-xl p-8 border border-border">
                    <div className="space-y-8">
                      {agencySteps.map((step, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row items-start gap-6 relative"
                        >
                          <div className="flex items-center sm:items-start gap-4 w-full">
                            <div className="relative flex flex-col items-center">
                              <div className="w-10 h-10 bg-gradient-to-r from-tiktok-blue to-tiktok-blue text-black rounded-full flex items-center justify-center font-bold z-10">
                                {index + 1}
                              </div>
                              {index !== agencySteps.length - 1 && (
                                <div className="absolute top-10 left-1/2 w-px h-24 sm:h-32 bg-gradient-to-b from-tiktok-red/50 to-transparent -translate-x-1/2" />
                              )}
                            </div>

                            {/* Step Content */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <p className="text-foreground text-lg flex-1">
                                  {step}
                                </p>
                                <div className="w-full sm:w-48 h-auto flex-shrink-0">
                                  <button
                                    onClick={() =>
                                      setSelectedImage(
                                        `/images/step${index + 1}.png`
                                      )
                                    }
                                    className="w-full group relative"
                                  >
                                    <img
                                      src={`/images/step${index + 1}.png`}
                                      alt={`Étape ${index + 1}`}
                                      className="w-full rounded-lg border border-border shadow-sm group-hover:border-tiktok-red/50 transition-colors"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-lg transition-colors flex items-center justify-center">
                                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        Agrandir
                                      </span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Image Modal */}
            <ImageModal
              isOpen={!!selectedImage}
              imageUrl={selectedImage || ""}
              onClose={() => setSelectedImage(null)}
            />

            {/* Application Form */}
            <form
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
                        htmlFor="pseudoTikTok"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Pseudo TikTok
                      </label>
                      <input
                        type="text"
                        id="pseudoTikTok"
                        name="pseudoTikTok"
                        placeholder="Votre pseudo TikTok"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="parrain"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Parrain
                      </label>
                      <input
                        type="text"
                        id="parrain"
                        name="parrain"
                        placeholder="Pseudo de votre parrain"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="codeAgence"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Code Agence
                      </label>
                      <input
                        type="text"
                        id="codeAgence"
                        name="codeAgence"
                        placeholder="Entrez votre code agence"
                        className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                        required
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
                      required
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
                    placeholder="Écrivez votre message ici..."
                    className="w-full px-4 py-2 border border-border rounded-md focus:outline-none focus:ring focus:ring-blue-400 text-black"
                    required
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
