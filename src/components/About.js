import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

const About = () => {
  return (
    <section id="about" className="flex w-full h-auto justify-center relative h-screen bg-fitfarm-midnight">
      <div className="w-full max-w-[1024px] px-6">
        <h1 className="text-6xl mt-[50px] text-white">About</h1>
        <div className="grid grid-cols-3 gap-8 mt-[60px]">
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="none"              
                width="100%"
                height="100%"
                alt="FitFarm Crew"
                src="/images/fitfarm_crew.png"
                className="w-full object-cover h-[140px] h-full"
              />
            </CardBody>
            <CardFooter className="justify-between flex flex-col bg-fitfarm-green p-8">
              <h2 className="text-white text-xl">Operational Crew</h2>
              <p className="text-white text-xs pt-6">“Come check out the outlaw way. Rebel against the standard”</p>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="none"
                width="100%"
                height="100%"
                alt="FitFarm Chickens"
                src="/images/fitfarm_chickens.png"
                className="w-full object-cover h-[140px] h-full"
              />
            </CardBody>
            <CardFooter className="justify-between flex flex-col bg-fitfarm-green p-8">
              <h2 className="text-white text-xl">Production Crew</h2>
              <p className="text-white text-xs pt-6">“We are the best chickens we don’t let anyone get between the Gains!”</p>
            </CardFooter>
          </Card>
          <Card>
            <CardBody className="overflow-visible p-0">
              <Image
                radius="none"
                width="100%"
                height="100%"
                alt="FitFarm Outlaw Crew"
                src="/images/fitfarm_outlaw_crew.png"
                className="w-full object-cover h-[140px] h-full"
              />
            </CardBody>
            <CardFooter className="justify-between flex flex-col bg-fitfarm-green p-8">
              <h2 className="text-white text-xl">Outlaw Crew</h2>
              <p className="text-white text-xs pt-6">“Howdy! come visit the crew at the Farm. Join the rebllious way ”</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;
