import Link from 'next/link';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Social from '@/components/Social';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>FitFarm - The Ultimate Whole Food Sources</title>
        <meta name="description" content="Saddle up for a wild ride with FitFarm's Eggceleent eggs, the outlaw of nutritional treasures. These bad boys in blue shells are the renegades of the coop, delivering a powerful punch of essential nutrients straight from free-spirited, naturally-raised hens. Unleash the untamed goodness and make every meal an adventure with these outlaw eggs." />
        <meta name="keywords" content="araucana chicken, shell eggs, eggs, ultimate food source" />
      </Head>
      <NavBar/>
      <Hero/>
      <Products/>
      <About/>
      <Social/>
    </>
  );
}
