import { useTranslation } from "react-i18next";
import ProjectCard from "./card";

import { useState } from "react";
import { Button } from "../ui/button";
import { CircleMinus, CirclePlus } from "lucide-react";

export default function () {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  const generalUrl = import.meta.env.VITE_ASSETS_URL + "projects/";

  const tereVerde = generalUrl + "tere-verde/";
  const orange = generalUrl + "orange/";

  return (
    <div className="flex flex-col gap-4 w-full items-center sm:items-start justify-center sm:justify-start">
      <ProjectCard
        title="Terê Verde"
        date="06/2025"
        isFinished
        pcImg={[
          tereVerde + "pc/home.png",
          tereVerde + "pc/vlibras-home.png",
          tereVerde + "pc/eventos.png",
          tereVerde + "pc/saiba-mais-trilhas.png",
          tereVerde + "pc/trilhas.png",
          tereVerde + "pc/filtro-bio.png",
        ]}
        mobileImg={[
          tereVerde + "mobile/home.png",
          tereVerde + "mobile/navbar.png",
          tereVerde + "mobile/eventos.png",
        ]}
        description={t("project.tere-verde.description")}
        badge={["React", "JavaScript", "HTML", "CSS", "JSON-Server"]}
        githubURL="https://github.com/miguelMFR/tere-verde"
      />

      <div className="w-full mb-10 relative">
        <div
          className={`transition-all duration-500 ease-in-out ${!isExpanded ? "max-h-54 overflow-hidden" : ""}`}
        >
          {!isExpanded && (
            <div className="absolute bottom-0 left-0 right-0 h-54 bg-gradient-to-t from-background to-transparent z-10" />
          )}

          <ProjectCard
            isExpandedFromParent={isExpanded}
            title="The Orange Experience HUB Portal"
            date="12/2024"
            isFinished={true}
            pcImg={[
              orange + "home.jpeg",
              orange + "svps.jpeg",
              orange + "services.jpeg",
            ]}
            description={t("project.orange-hub.description")}
            badge={["Java", "SpringBoot", "React", "TypeScript", "CSS"]}
            deployURL="https://www.linkedin.com/posts/elyn-beatriz-v-959381150_ontem-conclu%C3%ADmos-a-%C3%BAltima-etapa-da-resid%C3%AAncia-activity-7275949641450311680-zb16/"
          />
        </div>

        {!isExpanded && (
          <div className="absolute mt-5 left-0 right-0 flex justify-center pb-2 z-20">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(true)}
              className="cursor-pointer font-normal text-sm sm:text-base"
            >
              <CirclePlus />
              {t("project.view-more")}
            </Button>
          </div>
        )}
      </div>
      {isExpanded && (
        <Button
          variant="outline"
          onClick={() => {
            setIsExpanded(false);
          }}
          className="-mt-5 cursor-pointer self-center font-normal text-sm sm:text-base"
        >
          <CircleMinus />
          {t("project.view-less")}
        </Button>
      )}
    </div>
  );
}
