import '@/styles/global.css';
import { NextUIProvider } from "@nextui-org/react";
import {useRouter} from 'next/router';
import GoogleAnalytics from '@/components/GoogleAnalytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <GoogleAnalytics/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
