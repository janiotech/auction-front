"use client";
import Flickity from "react-flickity-component";
import Image from "next/image";
import banner_1 from "@/ui/assets/banner_1.jpg";
import banner_2 from "@/ui/assets/banner_2.jpg";
import banner_3 from "@/ui/assets/banner_3.jpg";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: true,
};

export default function Carousel() {
  return (
    <section className="w-full h-auto max-h-96 flex justify-center items-center overflow-hidden ">
      <Flickity
        className={"w-full h-auto max-h-96 outline-none"}
        elementType={"div"}
        options={flickityOptions}
        disableImagesLoaded={true}
        reloadOnUpdate
        static
      >
        <Image
          width={1920}
          height={500}
          alt="banner 1"
          className="w-full max-h-96 object-fill"
          src={banner_1}
          priority={true}
        />
        <Image width={1920} height={500} alt="banner 2" className="w-full max-h-96" src={banner_2} priority={true} />
        <Image width={1920} height={500} alt="banner 3" className="w-full max-h-96 " src={banner_3} priority={true} />
      </Flickity>
    </section>
  );
}
