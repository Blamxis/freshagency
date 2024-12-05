import { FC } from "react";
import { useTranslation } from "react-i18next";

const CookiePolicy: FC = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-300 to-blue-700 text-white py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
                            {t("cookiePolicy.title", "Politique des Cookies")}
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl mt-4">
                            {t(
                                "cookiePolicy.subtitle",
                                "Découvrez comment et pourquoi nous utilisons des cookies sur notre site."
                            )}
                        </p>
                    </div>
                </div>
            </section>

            {/* Cookie Information */}
            <section className="py-12 sm:py-16 lg:py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-card rounded-xl shadow-lg p-6 sm:p-8 border border-blue-500 hover:border-blue-300 transition-colors">
                        <div className="space-y-12">
                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("cookiePolicy.introductionTitle", "Introduction")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "cookiePolicy.introductionText",
                                        "Cette politique explique ce que sont les cookies, comment nous les utilisons, et comment vous pouvez les gérer."
                                    )}
                                </p>
                            </div>

                            {/* What are Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("cookiePolicy.whatAreCookiesTitle", "Qu'est-ce qu'un Cookie ?")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "cookiePolicy.whatAreCookiesText",
                                        "Un cookie est un petit fichier stocké sur votre appareil lorsque vous visitez un site web. Il permet de reconnaître votre appareil et de personnaliser votre expérience."
                                    )}
                                </p>
                            </div>

                            {/* Why We Use Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("cookiePolicy.whyUseCookiesTitle", "Pourquoi utilisons-nous des Cookies ?")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "cookiePolicy.whyUseCookiesText",
                                        "Nous utilisons des cookies pour améliorer votre expérience, analyser le trafic, et vous proposer des contenus adaptés."
                                    )}
                                </p>
                            </div>

                            {/* Types of Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("cookiePolicy.typesOfCookiesTitle", "Types de Cookies")}
                                </h2>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                                    <li>
                                        {t("cookiePolicy.typesEssential", "Cookies Essentiels : nécessaires au fonctionnement du site.")}
                                    </li>
                                    <li>
                                        {t("cookiePolicy.typesAnalytics", "Cookies d'Analyse : utilisés pour collecter des données sur l'utilisation du site.")}
                                    </li>
                                    <li>
                                        {t("cookiePolicy.typesMarketing", "Cookies Marketing : pour vous proposer des publicités adaptées.")}
                                    </li>
                                </ul>
                            </div>

                            {/* Manage Cookies */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("cookiePolicy.manageCookiesTitle", "Gérer vos Cookies")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "cookiePolicy.manageCookiesText",
                                        "Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur ou en utilisant les options disponibles sur notre site."
                                    )}
                                </p>
                            </div>

                            {/* Contact */}
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-4">
                                    {t("cookiePolicy.contactTitle", "Contact")}
                                </h2>
                                <p className="text-muted-foreground">
                                    {t(
                                        "cookiePolicy.contactText",
                                        "Pour toute question concernant notre utilisation des cookies, contactez-nous à :"
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
                        {t("cookiePolicy.ctaTitle", "Besoin d'aide avec vos cookies ?")}
                    </h2>
                    <a
                        href="mailto:fresh.agency@hotmail.com"
                        className="inline-flex items-center px-6 sm:px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/20 hover:bg-black/30 backdrop-blur-sm transition-colors"
                    >
                        {t("cookiePolicy.ctaButton", "Contactez-nous")}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default CookiePolicy;
