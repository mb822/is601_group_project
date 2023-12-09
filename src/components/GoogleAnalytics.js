import Script, { ScriptProps } from "next/script";
import CookieConsent from "react-cookie-consent";

const GoogleAnalytics = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="FitFarmCookieConsent"
        expires={365}
      >
        This website uses cookies to enhance your experience.
      </CookieConsent>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PWLN5LZHSX"
      />
      <Script
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('consent', 'default', {
            'analytics_storage': 'denied'
          });

          gtag('config', 'G-PWLN5LZHSX');
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics;
