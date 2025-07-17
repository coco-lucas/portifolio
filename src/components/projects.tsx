import { useTranslation } from "react-i18next";
import ProjectCard from "./ui/project-card";

export default function(){
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 w-full">
      <ProjectCard
        title="Terê Verde"
        isFinished
        imageURL="https://picsum.photos/800/300"
        alt="Terê Verde Project Image"
        description={t("project_description")}
        badge={["React", "JavaScript", "HTML", "CSS"]}
        githubURL="https://github.com/miguelMFR/tere-verde"
      />
      <ProjectCard
        title="Another Project"
        isFinished={false}
        imageURL="https://picsum.photos/800/300?random=1"
        alt="Another Project Image"
        description={t("project_description")}
        badge={["TypeScript", "Node.js", "Express"]}
        githubURL="https://github.com/coco-lucas"
      />
    </div>
  );
}