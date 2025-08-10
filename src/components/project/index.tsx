import { useTranslation } from "react-i18next";
import ProjectCard from "./card";

import tereVerdePcHome from "../../assets/projects/tere-verde/pc/home.png";
import tereVerdePcEventos from "../../assets/projects/tere-verde/pc/eventos.png";
import tereVerdeSaibaMais from "../../assets/projects/tere-verde/pc/saiba-mais-trilhas.png";
import tereVerdeTrilhas from "../../assets/projects/tere-verde/pc/trilhas.png";
import tereVerdeFiltroBio from "../../assets/projects/tere-verde/pc/filtro-bio.png";
import tereVerdeVLibrasHome from "../../assets/projects/tere-verde/pc/vlibras-home.png";

import orangeHome from "../../assets/projects/orangeHUB/home.jpeg";
import orangeServices from "../../assets/projects/orangeHUB/services.jpeg";
import orangeSvps from "../../assets/projects/orangeHUB/svps.jpeg";

import tereVerdeMobileHome from "../../assets/projects/tere-verde/mobile/home.png";
import tereVerdeMobileEventos from "../../assets/projects/tere-verde/mobile/eventos.png";
import tereVerdeMobileNavBar from "../../assets/projects/tere-verde/mobile/navbar.png";
import { useState } from "react";
import { Button } from "../ui/button";
import { CircleMinus, CirclePlus } from "lucide-react";

export default function () {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-4 w-full items-center sm:items-start justify-center sm:justify-start">
      <ProjectCard
        title="Terê Verde"
        date="06/2025"
        isFinished
        pcImg={[
          tereVerdePcHome,
          tereVerdeVLibrasHome,
          tereVerdePcEventos,
          tereVerdeSaibaMais,
          tereVerdeTrilhas,
          tereVerdeFiltroBio,
        ]}
        mobileImg={[
          tereVerdeMobileHome,
          tereVerdeMobileNavBar,
          tereVerdeMobileEventos,
        ]}
        description={t("project.tere-verde.description")}
        badge={["React", "JavaScript", "HTML", "CSS", "JSON-Server"]}
        githubURL="https://github.com/miguelMFR/tere-verde"
      />

      <div className="w-full mb-10 relative">
        <div className={`transition-all duration-500 ease-in-out ${!isExpanded ? "max-h-54 overflow-hidden" : ""}`}>
          {!isExpanded && <div className="absolute bottom-0 left-0 right-0 h-54 bg-gradient-to-t from-background to-transparent z-10" />}

          <ProjectCard
            isExpandedFromParent={isExpanded}
            title="The Orange Experience HUB Portal"
            date="12/2024"
            isFinished={true}
            pcImg={[
              orangeHome,
              orangeSvps,
              orangeServices,
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
          <CircleMinus />{t("project.view-less")}
        </Button>
      )}
    </div>
  );
}
