import Link from 'next/link';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>FitFarm - The Ultimate Whole Food Sources</title>
      </Head>
      <h1>
        Welcome to FitFarm!
      </h1>
      <h4>
        Home of the Eggcelent Eggs.
      </h4>
      <Link href="/products/eggcelent-eggs">Eggcelent Eggs product page</Link>
    </>
  );
}
