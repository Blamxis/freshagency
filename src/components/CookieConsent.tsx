import { useState } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    document.cookie = "cookieConsent=true; path=/;";
  };

  const handleDecline = () => {
    setIsVisible(false);
    document.cookie = "cookieConsent=false; path=/;";
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-icon">🍪</div>
      <div className="cookie-message">
        <p>
          Nous utilisons des cookies pour améliorer votre expérience. En
          continuant, vous acceptez notre utilisation des cookies.
        </p>
      </div>
      <button onClick={handleAccept} className="cookie-button accept">
        J'accepte
      </button>
      <button onClick={handleDecline} className="cookie-button decline">
        Je refuse
      </button>
    </div>
  );
};

export default CookieConsent;
