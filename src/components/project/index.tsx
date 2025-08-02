import { useTranslation } from "react-i18next";
import ProjectCard from "./card";

import tereVerdePcHome from "../../assets/projects/tere-verde/pc/home.png";
import tereVerdePcEventos from "../../assets/projects/tere-verde/pc/eventos.png";
import tereVerdeSaibaMais from "../../assets/projects/tere-verde/pc/saiba-mais-trilhas.png";
import tereVerdeTrilhas from "../../assets/projects/tere-verde/pc/trilhas.png";
import tereVerdeFiltroBio from "../../assets/projects/tere-verde/pc/filtro-bio.png";
import tereVerdeVLibrasHome from "../../assets/projects/tere-verde/pc/vlibras-home.png";

import tereVerdeMobileHome from "../../assets/projects/tere-verde/mobile/home.png";
import tereVerdeMobileEventos from "../../assets/projects/tere-verde/mobile/eventos.png";
import tereVerdeMobileNavBar from "../../assets/projects/tere-verde/mobile/navbar.png";

export default function () {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full items-center sm:items-start justify-center sm:justify-start">
      {/*TODO:Add a image zoom*/}
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
        alt="Terê Verde Project Images"
        description={t("project.tere-verde.description")}
        badge={["React", "JavaScript", "HTML", "CSS", "Next.js"]}
        githubURL="https://github.com/miguelMFR/tere-verde"
      />
      <ProjectCard
        title="Another Project"
        isFinished={false}
        pcImg={[
          "https://picsum.photos/700/360?random=1"
        ]}
        mobileImg={[
          "https://picsum.photos/270/550?random=2"
        ]}
        alt="Another Project Images"
        description="This is a mock project, don't mind it. - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        badge={["TypeScript", "Node.js", "SpringBoot", "PostgreSQL", "Express"]}
        githubURL="https://github.com/coco-lucas"
      />
    </div >
  );
}
