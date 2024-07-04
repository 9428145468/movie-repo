import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

interface CarouselImageProps {
  href: string;
  src: string;
  alt: string;
}

const CarouselImage: React.FC<CarouselImageProps> = ({ href, src, alt }) => (
  <CarouselItem>
    <Link href={href}>
      <img src={src} alt={alt} className="w-full h-[307px] rounded-xl" />
    </Link>
  </CarouselItem>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-stone-950">
      <Navbar />
      <main className="container mx-auto px-4 py-10 text-stone-400">
        <Carousel className="main-carousel">
          <CarouselContent>
            <CarouselImage
              href="/dynamicMoviePage"
              src="/images/1717080055549_playcardweb.jpeg"
              alt="Movie Image 1"
            />
            <CarouselImage
              href="/dynamicMoviePage"
              src="/images/1717596921298_humare1240x300.jpeg"
              alt="Movie Image 2"
            />
            <CarouselImage
              href="/dynamicMoviePage"
              src="/images/1718009496414_summerweb1240x300.jpeg"
              alt="Movie Image 3"
            />
            <CarouselImage
              href="/dynamicMoviePage"
              src="/images/1717080055549_playcardweb.jpeg"
              alt="Movie Image 4"
            />
            <CarouselImage
              href="/dynamicMoviePage"
              src="/images/1717596921298_humare1240x300.jpeg"
              alt="Movie Image 5"
            />
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex justify-start items-baseline">
          <h2 className="text-3xl text-stone-300 hover:text-teal-300 font-bold mt-10 mb-6 items-center">
            <Link href="/moviesList">Current Movies</Link>
          </h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {["1", "2", "3", "4", "5", "6"].map((num) => (
              <CarouselItem key={`movie-${num}`} className="basis-1/5">
                <Link href="/dynamicMoviePage">
                  <img
                    src={`/images/${num}.jpeg`}
                    alt={`Movie Image ${num}`}
                    className="rounded"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="relative w-full h-0" style={{ paddingBottom: "9%" }}>
          <Image
            src="/images/ad.jpeg"
            alt="Advertisement"
            className="absolute top-0 left-0 w-full h-full rounded-[30px] object-cover pt-4 pr-4 pl-4 pb-4 mt-2 mb-2"
            layout="fill"
          />
        </div>

        <div className="flex justify-start items-baseline">
          <h2 className="text-3xl text-stone-300 hover:text-teal-300 font-bold mt-10 mb-6 items-center">
            <Link href="/eventsList">Events</Link>
          </h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {["e1", "e2", "e3", "e4", "e5", "e6"].map((num) => (
              <CarouselItem key={`event-${num}`} className="basis-1/5">
                <Link href="/dynamicEventPage">
                  <img
                    src={`/images/${num}.jpeg`}
                    alt={`Event Image ${num}`}
                    className="rounded"
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
