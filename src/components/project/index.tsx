import { useTranslation } from "react-i18next";
import ProjectCard from "./card";
import tereverde from "../../assets/projects/tere-verde/tere-verde-home.png";

export default function () {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full items-center sm:items-start justify-center sm:justify-start">
      {/*Add a image zoom*/}
      <ProjectCard
        title="Terê Verde"
        date="06/2025"
        isFinished
        imageURL={tereverde}
        alt="Terê Verde Project Image"
        description={t("project.tere-verde.description")}
        badge={["React", "JavaScript", "HTML", "CSS", "Next.js"]}
        githubURL="https://github.com/miguelMFR/tere-verde"
      />
      <ProjectCard
        title="Another Project"
        isFinished={false}
        imageURL="https://picsum.photos/800/300?random=1"
        alt="Another Project Image"
        description="This is a mock project, don't mind it. - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        badge={["TypeScript", "Node.js", "SpringBoot", "PostgreSQL", "Express"]}
        githubURL="https://github.com/coco-lucas"
      />
    </div >
  );
}
