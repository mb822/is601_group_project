
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";

const About = () => {
  return (
    <section id="about">
      <div>
        <h1>About</h1>
        <div>
          <Card>
            <CardBody>
              <Image             
                width="100%"
                height="100%"
                alt="FitFarm Crew"
                src="/images/fitfarm_crew.png"
              />
            </CardBody>
            <CardFooter>
              <h2>Operational Crew</h2>
              <p>“Come check out the outlaw way. Rebel against the standard”</p>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image
                width="100%"
                height="100%"
                alt="FitFarm Chickens"
                src="/images/fitfarm_chickens.png"
              />
            </CardBody>
            <CardFooter>
              <h2>Production Crew</h2>
              <p>“We are the best chickens we don’t let anyone get between the Gains!”</p>
            </CardFooter>
          </Card>
          <Card>
            <CardBody>
              <Image
                width="100%"
                height="100%"
                alt="FitFarm Outlaw Crew"
                src="/images/fitfarm_outlaw_crew.png"
              />
            </CardBody>
            <CardFooter>
              <h2>Outlaw Crew</h2>
              <p>“Howdy! come visit the crew at the Farm. Join the rebllious way”</p>
            </CardFooter>
          </Card>

        </div>
      </div>
    </section>
  );
}

export default About;
