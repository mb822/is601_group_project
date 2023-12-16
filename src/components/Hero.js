import React from "react";
import {Button, Link} from "@nextui-org/react";
import Image from 'next/legacy/image';

const Hero = () => {
  return (
    <section className="flex w-full h-auto justify-center relative h-screen">
      <Image
        src="/images/fitfarm_farmer.png"
        alt="FitFarm Farmer"
        layout="fill"
        objectFit="cover"
        quality={100}
        objectFit="cover"
        className="bg-right"
      />
      <div className="w-full max-w-[1024px] px-6">
        <h1 className="text-8xl w-[700px] relative mt-[150px]">
          Wanna know my secret?
        </h1>
        <h3 className="w-[405px] text-3xl relative mt-[45px]">
          I signed up! You can do so to get 50% off my first order
        </h3>
        <Button
          radius="12px"
          className="bg-fitfarm-green mt-[80px] text-xl"
          href="https://mailchi.mp/2575586a1ceb/fitfarm-outlaw-club"
          as={Link}
        >
          Come Get the Gains!
        </Button>
      </div>
    </section>
  )
}

export default Hero;
