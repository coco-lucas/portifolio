import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCarousel, { type CarouselProps } from "./carousel";

import { motion } from "framer-motion";

export default function ProjectTabs({
  pcImg = [],
  mobileImg = [],
  alt,
}: CarouselProps) {
  const mobileDisabled = mobileImg.length === 0;
  const pcDisabled = pcImg.length === 0;
  const defaultTab = pcDisabled ? "mobile" : "pc";
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="relative">
        <TabsTrigger disabled={pcDisabled} value="pc" className="relative z-10">
          {activeTab === "pc" && (
            <motion.span
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-md border border-input shadow-sm"
              initial={{ backgroundColor: "transparent" }}
              animate={{ backgroundColor: "var(--tabs-active-bg)" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.4,
                backgroundColor: { delay: 0.2, duration: 0.2 },
              }}
            />
          )}
          <span className="relative z-10">PC</span>
        </TabsTrigger>
        <TabsTrigger
          disabled={mobileDisabled}
          value="mobile"
          className="relative z-10"
        >
          {activeTab === "mobile" && (
            <motion.span
              layoutId="tab-indicator"
              className="absolute inset-0 rounded-md border border-input shadow-sm"
              initial={{ backgroundColor: "transparent" }}
              animate={{ backgroundColor: "var(--tabs-active-bg)" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.4,
                backgroundColor: { delay: 0.2, duration: 0.2 },
              }}
            />
          )}
          <span className="relative z-10">Mobile</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="pc" className="mt-0">
        <ProjectCarousel pcImg={pcImg} alt={alt} type="pc" />
      </TabsContent>
      <TabsContent value="mobile" className="mt-0">
        <ProjectCarousel mobileImg={mobileImg} alt={alt} type="mobile" />
      </TabsContent>
    </Tabs>
  );
}
