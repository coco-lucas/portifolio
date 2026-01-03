import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCarousel, { type CarouselProps } from "./carousel";

export default function ProjectTabs({
  pcImg = [],
  mobileImg = [],
  alt,
}: CarouselProps) {
  const mobileDisabled = mobileImg.length === 0;
  const pcDisabled = pcImg.length === 0;

  return (
    <Tabs defaultValue="pc">
      <TabsList>
        <TabsTrigger
          disabled={pcDisabled}
          value="pc"
          className="data-[state=active]:motion-preset-blur-left motion-duration-400"
        >
          PC
        </TabsTrigger>
        <TabsTrigger
          disabled={mobileDisabled}
          value="mobile"
          className="data-[state=active]:motion-preset-blur-right motion-duration-400"
        >
          Mobile
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="pc"
        className="data-[state=active]:motion-preset-blur-left motion-duration-400"
      >
        <ProjectCarousel pcImg={pcImg} alt={alt} type="pc" />
      </TabsContent>
      <TabsContent
        value="mobile"
        className=" data-[state=active]:motion-preset-blur-right motion-duration-400"
      >
        <ProjectCarousel mobileImg={mobileImg} alt={alt} type="mobile" />
      </TabsContent>
    </Tabs>
  );
}
