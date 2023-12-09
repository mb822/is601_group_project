import Script, { ScriptProps } from "next/script";
import {useState, useEffect} from 'react';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

const GoogleAnalytics = () => {
  const [cookieConsent, setCookieConsent] = useState(getCookieConsentValue('FitFarmCookieConsent') || false);

    useEffect(() => {
    console.log( cookieConsent ? 'granted' : 'denied');
    window.gtag('consent', 'update', {
      'analytics_storage': cookieConsent ? 'granted' : 'denied'
    });
  },[cookieConsent]);

  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="FitFarmCookieConsent"
        expires={365}
        onAccept={() => {setCookieConsent(true)}}
        onDecline={() => {setCookieConsent(false)}}
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
