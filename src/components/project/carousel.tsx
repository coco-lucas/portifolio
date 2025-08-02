import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../ui/carousel";
import "react-medium-image-zoom/dist/styles.css";
import Image from "../ui/image";

export interface CarouselProps {
  pcImg?: string | string[];
  mobileImg?: string | string[];
  alt: string;
  type?: "pc" | "mobile";
}

export default function ProjectCarousel({ pcImg = [], mobileImg = [], alt, type }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);


  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {pcImg.length === 1 || mobileImg.length === 1 ? (
        <Image src={type === "pc" ? pcImg[0] : mobileImg[0]} alt={alt} tabIndex={1} />
      ) : (
        <Carousel setApi={setApi}>
          <CarouselContent>
            {Array.from({ length: type === "pc" ? pcImg.length : mobileImg.length }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1 flex justify-center items-center text-center">
                  {type === "pc" ? (
                    <Image src={pcImg[index]} alt={alt} tabIndex={3} />
                  ) : (
                    <Image src={mobileImg[index]} alt={alt} className="max-h-[580px] sm:max-h-96" tabIndex={3} />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex flex-row items-center mt-5 justify-between">
            <div className="flex items-center gap-2 justify-start">
              <CarouselPrevious />
              <CarouselNext />

            </div>
            <span className="text-sm text-muted-foreground self-start">
              {current} / {count}
            </span>

          </div>
        </Carousel>
      )}
    </>
  )
}