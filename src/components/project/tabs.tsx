import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCarousel, { type CarouselProps } from "./carousel";

export default function ProjectTabs({ pcImg = [], mobileImg = [], alt }: CarouselProps, { hasPcImg = true, hasMobileImg = true }: { hasPcImg?: boolean; hasMobileImg?: boolean }) {

  return (
    <Tabs defaultValue="pc">
      <TabsList>
        <TabsTrigger disabled={!hasPcImg} value="pc">PC</TabsTrigger>
        <TabsTrigger disabled={!hasMobileImg} value="mobile">Mobile</TabsTrigger>
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