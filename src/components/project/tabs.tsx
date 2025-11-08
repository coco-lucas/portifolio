import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCarousel, { type CarouselProps } from "./carousel";

export default function ProjectTabs({ pcImg = [], mobileImg = [], alt }: CarouselProps) {
  const mobileDisabled = mobileImg.length === 0;
  const pcDisabled = pcImg.length === 0;

  return (
    <Tabs defaultValue="pc">
      <TabsList>
        <TabsTrigger disabled={pcDisabled} value="pc" className="data-[state=active]:motion-preset-slide-left motion-duration-300">PC</TabsTrigger>
        <TabsTrigger disabled={mobileDisabled} value="mobile" className="data-[state=active]:motion-preset-slide-right motion-duration-300">Mobile</TabsTrigger>
      </TabsList>
      <TabsContent value="pc">
        <ProjectCarousel pcImg={pcImg} alt={alt} type="pc" />
      </TabsContent>
      <TabsContent value="mobile">
        <ProjectCarousel mobileImg={mobileImg} alt={alt} type="mobile" />
      </TabsContent>
    </Tabs>
  );
}