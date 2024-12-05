// src/pages/PrivacyPolicy.tsx
import { FC } from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                            {t("privacyPolicy.title", "Politique de Confidentialité")}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl mt-4">
                            {t(
                                "privacyPolicy.subtitle",
                                "Comprendre comment nous protégeons vos informations personnelles."
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Information */}
            <section className="py-12 sm:py-16 lg:py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 border border-blue-500 hover:border-blue-300 transition-colors">
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("privacyPolicy.introductionTitle", "Introduction")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "privacyPolicy.introductionText",
                                        "Cette politique de confidentialité explique comment nous recueillons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre site."
                                    )}
                                </p>
                            </div>

                            {/* Data Collection */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("privacyPolicy.dataCollectionTitle", "Collecte des Données")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "privacyPolicy.dataCollectionText",
                                        "Nous recueillons des informations lorsque vous vous inscrivez sur notre site, passez une commande ou interagissez avec nous. Les informations collectées peuvent inclure votre nom, adresse e-mail, numéro de téléphone, et adresse postale."
                                    )}
                                </p>
                            </div>

                            {/* Use of Data */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("privacyPolicy.useOfDataTitle", "Utilisation des Données")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "privacyPolicy.useOfDataText",
                                        "Nous utilisons les informations que nous collectons pour vous fournir nos services, traiter vos transactions, et améliorer notre site. Vos données ne seront pas vendues ou partagées avec des tiers sans votre consentement."
                                    )}
                                </p>
                            </div>

                            {/* Data Protection */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("privacyPolicy.dataProtectionTitle", "Protection des Données")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "privacyPolicy.dataProtectionText",
                                        "Nous prenons des mesures de sécurité appropriées pour protéger vos informations contre toute divulgation non autorisée. Nous utilisons des protocoles sécurisés pour garantir la sécurité de vos données."
                                    )}
                                </p>
                            </div>

                            {/* User Rights */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("privacyPolicy.userRightsTitle", "Droits des Utilisateurs")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "privacyPolicy.userRightsText",
                                        "Vous avez le droit de demander l'accès à vos données personnelles, de les corriger ou de les supprimer. Pour exercer vos droits, vous pouvez nous contacter à l'adresse e-mail indiquée ci-dessous."
                                    )}
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("privacyPolicy.contactTitle", "Contact")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "privacyPolicy.contactText",
                                        "Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à l'adresse :"
                                    )}
                                    <br />
                                    <a
                                        href="mailto:fresh.agency@hotmail.com"
                                        className="text-blue-600 underline"
                                    >
                                        fresh.agency@hotmail.com
                                    </a>
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
                        {t("privacyPolicy.ctaTitle", "Avez-vous des questions ?")}
                    </h2>
                    <a
                        href="mailto:fresh.agency@hotmail.com"
                        className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors"
                    >
                        {t("privacyPolicy.ctaButton", "Contactez-nous")}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
