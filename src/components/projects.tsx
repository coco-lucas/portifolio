import { useTranslation } from "react-i18next";
import ProjectCard from "./ui/project-card";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, GitGraph, Github } from "lucide-react";

export default function () {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full">
      <Card>
        <CardHeader className="flex flex-row justify-between gap-2">
          <CardTitle className="flex flex-row gap-2 items-center">
            <div className="flex items-center justify-center bg-muted min-w-10 min-h-10 w-fit rounded-full">
              <Github size={30} />
            </div>
            <div className="flex flex-col justify-between h-full ml-2">
              <p>GitHub Stat's</p>
              <a
                href="https://github.com/coco-lucas"
                target="_blank"
                className="text-sm text-(--muted-foreground) hover:text-(--primary)"
              >
                @coco-lucas
              </a>
            </div>
          </CardTitle>
          <div className="flex flex-row self-center gap-2 text-sm">
            <div className="flex items-center gap-1 justify-center bg-(--muted) min-h-8 w-fit rounded-2xl px-2">
              <Code size={18} />
              <p className="text-md font-bold">25</p>
              Repos
            </div>
            <div className="flex items-center gap-1 justify-center bg-(--muted) min-h-8 w-fit rounded-2xl px-2">
              <GitGraph size={18} />
              <p className="text-md font-bold">152</p>
              Commits
              <div className="text-[10px] font-bold text-ring mt-1.5">/2025</div>
            </div>
          </div>
        </CardHeader>
      </Card>

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
    </div>
  );
}
