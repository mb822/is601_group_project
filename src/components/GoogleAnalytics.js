import Script, { ScriptProps } from "next/script";
import {usePathname, useSearchParams} from 'next/navigation';
import {useState, useEffect} from 'react';
import {pageview} from '@/utils/ga4.js';
import CookieConsent, { Cookies, getCookieConsentValue } from "react-cookie-consent";

const GoogleAnalytics = () => {
  const [cookieConsent, setCookieConsent] = useState(getCookieConsentValue('FitFarmCookieConsent') || false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log( cookieConsent ? 'cc granted' : 'cc denied');
    window.gtag('consent', 'update', {
      'analytics_storage': cookieConsent ? 'granted' : 'denied'
    });
  },[cookieConsent]);

  useEffect(() => {
    console.log("navigation occured");
    const url = pathname + searchParams.toString();
    pageview('G-PWLN5LZHSX', url);
  },[pathname, searchParams]);

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
        id="ga-s1"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PWLN5LZHSX"
      />
      <Script
        id="ga-s2"
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
