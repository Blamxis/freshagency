import { useTranslation } from "react-i18next";

const LegalNotice = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
              {t("legalNotice.title", "Mentions Légales")}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mt-4">
              {t(
                "legalNotice.subtitle",
                "Les informations légales relatives à notre site et nos services."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 border border-blue-500 hover:border-blue-300 transition-colors">
            <div className="space-y-12">
              {/* Editor Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("legalNotice.editorTitle", "Éditeur du Site")}
                </h2>
                <p className="text-muted-foreground">
                  <strong>Nom :</strong> Fresh Agency
                  <br />
                  <strong>Forme juridique :</strong> SASU au capital de 100 €
                  <br />
                  <strong>RCS :</strong> 927 746 859
                  <br />
                  <strong>Adresse :</strong> 3 Rue Claude Debussy, 91000
                  Evry-Courcouronnes, France
                  <br />
                  <strong>Email :</strong>{" "}
                  <a
                    href="mailto:fresh.agency@hotmail.com"
                    className="text-blue-600 underline"
                  >
                    fresh.agency@hotmail.com
                  </a>
                  <br />
                  <strong>Téléphone :</strong> +33 1 XX XX XX XX
                </p>
              </div>

              {/* Hosting Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("legalNotice.hostingTitle", "Hébergement")}
                </h2>
                <p className="text-muted-foreground">
                  Ce site est hébergé par :
                  <br />
                  <strong>Hostinger International Ltd.</strong>
                  <br />
                  61 Lordou Vironos Street, 6023 Larnaca, Chypre
                  <br />
                  <strong>Site web :</strong>{" "}
                  <a
                    href="https://www.hostinger.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    www.hostinger.fr
                  </a>
                  <br />
                  <strong>Support :</strong>{" "}
                  <a
                    href="https://www.hostinger.fr/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Contactez Hostinger
                  </a>
                </p>
              </div>

              {/* Data Protection */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t(
                    "legalNotice.dataProtectionTitle",
                    "Protection des Données Personnelles"
                  )}
                </h2>
                <p className="text-muted-foreground">
                  Conformément au RGPD, vos données personnelles sont utilisées
                  uniquement dans le cadre de nos services.
                  <br />
                  <strong>Vos droits :</strong> droit d'accès, de rectification,
                  d'opposition et de suppression.
                  <br />
                  <strong>Contact :</strong>{" "}
                  <a
                    href="mailto:fresh.agency@hotmail.com"
                    className="text-blue-600 underline"
                  >
                    fresh.agency@hotmail.com
                  </a>
                </p>
              </div>

              {/* Cookie Policy */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("legalNotice.cookiePolicyTitle", "Politique de Cookies")}
                </h2>
                <p className="text-muted-foreground">
                  Ce site utilise des cookies pour améliorer votre expérience
                  utilisateur et analyser les performances du site. Vous pouvez
                  gérer vos préférences via les paramètres de votre navigateur.
                  <br />
                  Pour en savoir plus, consultez notre{" "}
                  <a
                    href="/cookies"
                    className="text-blue-600 underline"
                  >
                    Politique de Cookies
                  </a>
                  .
                </p>
              </div>

              {/* Copyright Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  {t("legalNotice.copyrightTitle", "Propriété Intellectuelle")}
                </h2>
                <p className="text-muted-foreground">
                  Tous les contenus de ce site (textes, images, vidéos, etc.)
                  sont la propriété exclusive de Fresh Agency. Toute
                  reproduction non autorisée est strictement interdite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t(
              "legalNotice.ctaTitle",
              "Besoin de plus d'informations ?"
            )}
          </h2>
          <a
            href="mailto:fresh.agency@hotmail.com"
            className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors"
          >
            {t("legalNotice.ctaButton", "Contactez-nous")}
          </a>
        </div>
      </section>
    </div>
  );
};

export default LegalNotice;
