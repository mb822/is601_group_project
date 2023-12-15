import Link from 'next/link';
import Head from 'next/head';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>FitFarm - The Ultimate Whole Food Sources</title>
        <meta name="description" content="Saddle up for a wild ride with FitFarm's Eggceleent eggs, the outlaw of nutritional treasures. These bad boys in blue shells are the renegades of the coop, delivering a powerful punch of essential nutrients straight from free-spirited, naturally-raised hens. Unleash the untamed goodness and make every meal an adventure with these outlaw eggs." />
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
