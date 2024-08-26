"use client";
import Flickity from "react-flickity-component";
import Image from "next/image";
import Google from "@/ui/assets/quemsomos/google.jpg";

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  initialIndex: 0,
  autoPlay: true,
};

const clientes = [
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
  {
    name: "Rafael Bispo",
    paragraph: "Um lugar confiavel para comprar veiculos",
  },
];

export default function Carousel() {
  return (
    <section className="w-full h-auto max-h-96 flex justify-center items-center overflow-hidden py-8">
      <Flickity
        className={"w-full h-auto max-h-96 outline-none"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={true}
        reloadOnUpdate
        static
      >
        {clientes.map((item, index) => (
          <div className="w-96 h-36 flex items-center justify-center bg-white rounded-2xl p-4 m-3" key={index}>
            <Image src={Google} alt="google" className="w-16 h-16 mx-4" />
            <div className="w-4/5 flex items-start justify-center flex-col">
              <p className="text-black font-sans text-lg text-left font-bold">{item.name}</p>
              <p className="text-gray font-sans text-lg pt-1 text-left">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
}
