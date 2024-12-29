import { useThemeContext } from '../context/ThemeContext';

const LegalNotice = () => {
    const { theme } = useThemeContext(); // Accès au thème via le contexte

    return (
        <div
            className={`py-12 px-4 sm:px-6 lg:px-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
                }`}
        >
            <div
                className={`max-w-3xl mx-auto shadow-lg rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                    }`}
            >
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold mb-8">Mentions Légales</h1>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Informations Légales</h2>
                        <p className="mb-4">
                            Le présent site est la propriété de la société Fresh Agency, SASU au capital social de 100 €uros,
                            inscrite au registre du commerce et des sociétés de Paris sous le numéro SIREN 927 746 859.
                        </p>
                        <p className="mb-4">
                            <strong>Siège social :</strong><br />
                            3 Rue Claude Debussy<br />
                            91000 Evry-Courcouronnes
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Accès au Site Internet</h2>
                        <p>
                            L'utilisateur reconnaît disposer de la compétence et des moyens nécessaires pour utiliser et accéder à ce site.
                            Le site est accessible 24 heures sur 24 et 7 jours sur 7, sauf cas de force majeure ou difficultés techniques.
                        </p>
                    </section>
                    <section className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Protection des Données Personnelles</h2>
                        <p>
                            Les messages envoyés sur le réseau internet peuvent être interceptés. Ne divulguez pas d'informations personnelles inutiles ou sensibles.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LegalNotice;
