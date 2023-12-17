import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Link, Image} from "@nextui-org/react";
import {FacebookLogo, TwitterLogo, InstagramLogo, ThreadsLogo, WhatsAppLogo} from '@/components/SocialLogos';

const Social = () => {
  return (
    <section id="social" className="flex w-full justify-center relative bg-fitfarm-green h-fit">
      <div className="w-full flex flex-col">
        <div className="w-full max-w-[1024px] px-6 self-center">
          <h1 className="text-6xl mt-[50px]">Testimonials</h1>
        </div>
        <div className="flex justify-center">
          <h2 className="text-3xl text-fitfarm-yellow translate-y-[-45px] translate-x-[200px]">#ChooseFitFarm</h2>
        </div>
        <div className="flex flex-row gap-x-16 px-[40px] items-start justify-between mt-[70px]">
          <Card className="w-[400px] p-3">
            <CardHeader className="flex gap-3 p-0">
              <Image
                alt="nextui logo"
                height={34}
                radius="sm"
                src="/images/profile_picture.png"
                width={34}
              />
              <div className="flex flex-col">
                <p className="text-md">naataaloooo</p>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <p>Eggcellent eggs ARE MY FAVORITE! 🤤</p>
            </CardBody>
          </Card>
          <Card className="w-[400px] p-3 translate-y-[-30px]">
            <CardHeader className="flex gap-3 p-0">
              <Image
                alt="nextui logo"
                height={34}
                radius="sm"
                src="/images/profile_picture.png"
                width={34}
              />
              <div className="flex flex-col">
                <p className="text-md">_vody</p>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <p>Eggcelent eggs are very tasty and nutritious!</p>
            </CardBody>
          </Card>
          <h2 className="text-3xl text-fitfarm-yellow">#TasteTheGains</h2>
        </div>
        <div className="flex flex-row justify-between px-[40px] items-end">
          <h2 className="text-3xl text-fitfarm-yellow">#PowerfullYolks</h2>
          <Card className="w-[400px] p-3">
            <CardHeader className="flex gap-3 p-0">
              <Image
                alt="nextui logo"
                height={34}
                radius="sm"
                src="/images/profile_picture.png"
                width={34}
              />
              <div className="flex flex-col">
                <p className="text-md">thephotografoodie</p>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <p>Yolks are unmatched 🙌</p>
            </CardBody>
          </Card>
        </div>
        <div className="flex justify-center p-10">
          <h1 className="justify-self-center text-6xl">“The Ultimate Whole Food Sources”</h1>
        </div>
        <div className="flex flex-row gap-x-16 items-center content-center justify-between px-6">
          <Card className="w-[400px] p-3">
            <CardHeader className="flex gap-3 p-0">
              <Image
                alt="nextui logo"
                height={34}
                radius="sm"
                src="/images/profile_picture.png"
                width={34}
              />
              <div className="flex flex-col">
                <p className="text-md">brekkyattiffanys</p>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <p>Obsessing over the color what 😍</p>
            </CardBody>
          </Card>
          <div className="flex flex-col">
            <h2 className="text-3xl text-fitfarm-yellow">#TasteTheDifference</h2>
            <Card className="w-[400px] p-3 mt-[50px]">
              <CardHeader className="flex gap-3 p-0">
                <Image
                  alt="nextui logo"
                  height={34}
                  radius="sm"
                  src="/images/profile_picture.png"
                  width={34}
                />
                <div className="flex flex-col">
                  <p className="text-md">danibo26</p>
                </div>
              </CardHeader>
              <CardBody className="p-0">
                <p>SIMPLY THE BEST 😍😍 So rich!</p>
              </CardBody>
            </Card>
          </div>
          <Card className="w-[400px] p-3">
            <CardHeader className="flex gap-3 p-0">
              <Image
                alt="nextui logo"
                height={34}
                radius="sm"
                src="/images/profile_picture.png"
                width={34}
              />
              <div className="flex flex-col">
                <p className="text-md">more_than_aprettyflex</p>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <p>YESSS🔥🔥🔥😍😍 I LOVE THE VIBRANT  COLOR!</p>
            </CardBody>
          </Card>
        </div>
        <div className="flex flex-row gap-x-16 p-10 justify-between px-20">
          <h2 className="text-3xl text-fitfarm-yellow">#FeedtheBeasts</h2>
          <div className="flex flex-col">
            <h2 className="text-3xl text-center">Share with friends for a chance to win free eggs</h2>
            <div className="flex justify-evenly mt-[30px]">
            <Link
              isExternal
              showAnchorIcon
              href="https://www.facebook.com/"
              anchorIcon={<FacebookLogo/>}
            />
            <Link
              isExternal
              showAnchorIcon
              href="https://twitter.com/"
              anchorIcon={<TwitterLogo/>}
            />
            <Link
              isExternal
              showAnchorIcon
              href="https://www.instagram.com/"
              anchorIcon={<InstagramLogo/>}
            />
            <Link
              isExternal
              showAnchorIcon
              href="https://www.threads.net/"
              anchorIcon={<ThreadsLogo/>}
            />
            <Link
              isExternal
              showAnchorIcon
              href="https://www.whatsapp.com/"
              anchorIcon={<WhatsAppLogo/>}
            />
            </div>
          </div>
          <h2 className="text-3xl text-fitfarm-yellow">#ChoosetheGains</h2>
        </div>
      </div>
    </section>
  ); 
}

export default Social;
