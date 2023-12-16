import React from "react";
import {Button, Link} from "@nextui-org/react";
import Image from 'next/legacy/image';

const Hero = () => {
  return (
    <section>
      <Image
        src="/images/fitfarm_farmer.png"
        alt="FitFarm Farmer"
        layout="fill"
      />
      <div>
        <h1>
          Wanna know my secret?
        </h1>
        <h3>
          I signed up! You can do so to get 50% off my first order
        </h3>
        <Button
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
