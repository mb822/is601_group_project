import { NextUIProvider } from "@nextui-org/react";
import {useRouter} from 'next/router';
import CookieConsent from 'react-cookie-consent';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="FitFarmCookieConsent"
        expires={365}
      >
        This website uses cookies to enhance your experience. By clicking "Accept," you agree to the use of cookies on this site. We use cookies to analyze website traffic, personalize content, and serve targeted advertisements. You can learn more about our use of cookies and manage your preferences in our [Privacy Policy].
      </CookieConsent>
      <GoogleAnalytics/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
