import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export interface CarouselProps {
  pcImg: string | string[];
  mobileImg: string | string[];
  alt: string;
}

export default function ProjectCarousel({ pcImg, mobileImg, alt }: CarouselProps) {
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
      <Tabs defaultValue="pc">
        <TabsList>
          <TabsTrigger value="pc">PC</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>
        <TabsContent value="pc">
          {pcImg.length === 1 ? (
            <img src={pcImg[0]} alt={alt} className="rounded-xl" tabIndex={1} />
          ) : (
            <Carousel setApi={setApi}>
              <CarouselContent>
                {Array.from({ length: pcImg.length }).map((_, index) => (
                  <CarouselItem>
                    <div className="p-1">
                      <img src={pcImg[index]} alt={alt} className="rounded-xl" tabIndex={3} />
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
        </TabsContent>
        <TabsContent value="mobile">
          {mobileImg.length === 1 ? (
            <img src={mobileImg[0]} alt={alt} className="rounded-xl" tabIndex={1} />
          ) : (
            <Carousel setApi={setApi}>
              <CarouselContent>
                {Array.from({ length: mobileImg.length }).map((_, index) => (
                  <CarouselItem>
                    <div className="p-1">
                      <img src={mobileImg[index]} alt={alt} className="rounded-xl" tabIndex={3} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex items-center justify-between">
                <CarouselPrevious />
                <CarouselNext />
                <span className="flex justify-center text-sm text-muted-foreground">
                  {current} / {count}
                </span>

              </div>
            </Carousel>
          )}
        </TabsContent>
      </Tabs>
    </>
  )
}