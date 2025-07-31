import { useTranslation } from "react-i18next";
import ProjectCard from "./ui/cards/project-card";

export default function () {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full items-center sm:items-start justify-center sm:justify-start">
      <ProjectCard
        title="Terê Verde"
        date="06/2025"
        isFinished
        imageURL="https://picsum.photos/800/300"
        alt="Terê Verde Project Image"
        description={t("project_description")}
        badge={["React", "JavaScript", "HTML", "CSS", "Next.js"]}
        deployURL="https://tere-verde.vercel.app"
        githubURL="https://github.com/miguelMFR/tere-verde"
      />
      <ProjectCard
        title="Another Project"
        isFinished={false}
        imageURL="https://picsum.photos/800/300?random=1"
        alt="Another Project Image"
        description={t("project_description")}
        badge={["TypeScript", "Node.js", "SpringBoot", "PostgreSQL", "Express"]}
        githubURL="https://github.com/coco-lucas"
      />
    </div >
  );
}
