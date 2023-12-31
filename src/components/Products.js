
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button, Chip} from "@nextui-org/react";

const Products = () => {
  return (
    <section id="products" className="flex w-full h-auto justify-center relative h-screen bg-fitfarm-green">
      <div className="w-full max-w-[1024px] px-6">
        <h1 className="text-6xl mt-[50px]">Our Products</h1>
        <div className="grid grid-cols-2 gap-4 mt-[50px] mx-20">
          <Card
            className="bg-white col-span-2"
            shadow="sm"
          >
            <CardBody className="p-0">
              <div className="grid grid-cols-12 justify-center gap-x-5 mr-5">
                <div className="relative col-span-5">
                  <Image
                    alt="FitFarm Eggcelent Eggs Quad"
                    className="object-cover rounded-none"
                    height={300}
                    shadow="md"
                    src="/images/fitfarm_eggcelent_eggs_quad.png"
                    width="100%"
                  />
                </div>

                <div className="col-span-7 mt-4">
                  <h2 className="text-2xl">Eggcellent Eggs</h2>
                  <p className="text-xs mt-4">Saddle up for a taste of the wild with our Blue Araucana Chicken Eggs—all-natural outlaws of nutrition, laid by pasture-raised renegades. These bold, blue-shelled gems pack a punch, delivering unrivaled nutritional bounty straight from the untamed range. Fuel your journey with eggs as bold and free as the wild frontier.</p>
                  <div className="grid grid-cols-2 mt-6">
                    <Chip color="primary" variant="dot" size="md">Pasture-Raised Hens</Chip>
                    <Chip color="primary" variant="dot" size="md">Unrivaled Nutrition</Chip>
                  </div>
                  <div className="grid grid-cols-2 mt-3">
                    <Chip color="primary" variant="dot" size="md">Non-GMO</Chip>
                    <Chip color="primary" variant="dot" size="md">2x More Protein</Chip>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card isFooterBlurred isDisabled  className="w-full h-[300px] col-span-1">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h2 className="text-2xl">Protein Powder</h2>
            </CardHeader>
            <Image
              removeWrapper
              alt="FitFarm Protein Powder"
              className="z-0 w-full h-full object-cover"
              src="/images/fitfarm_protein_powder.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10">
              <div>
                <p className="text-tiny">Available soon.</p>
              </div>
            </CardFooter>
          </Card>
          <Card isFooterBlurred isDisabled className="w-full h-[300px] col-span-1">
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <h2 className="text-2xl">Protein Packed Pancakes</h2>
            </CardHeader>
            <Image
              removeWrapper
              alt="FitFarm Pancakes"
              className="z-0 w-full h-full object-cover"
              src="/images/fitfarm_protein_pancakes.png"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10">
              <div>
                <p className="text-tiny">Available soon.</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Products;
