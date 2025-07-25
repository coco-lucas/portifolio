import { useTranslation } from "react-i18next";
import ProjectCard from "./ui/cards/project-card";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Code, GitGraph, Github } from "lucide-react";
import { Badge } from "./ui/badge";

export default function () {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 w-full items-center sm:items-start justify-center sm:justify-start">
      <Card>
        <CardHeader className="flex flex-col items-center sm:items-start sm:flex-row justify-between gap-4 sm:gap-2">
          <CardTitle className="flex flex-col sm:flex-row gap-1 sm:gap-2 items-center text-center sm:text-start">
            <div className="flex items-center justify-center bg-muted min-w-10 min-h-10 w-fit rounded-full">
              <Github size={30} />
            </div>
            <div className="flex flex-col justify-between h-full sm:ml-2">
              <p>GitHub Stat's</p>
              <a
                href="https://github.com/coco-lucas"
                target="_blank"
                className="text-sm text-(--muted-foreground) hover:text-(--primary)"
              >
                @coco-lucas
              </a>
            </div>
          </CardTitle>{/* TODO:Maybe change this to a badge */}
          <div className="flex flex-row items-center self-center gap-2 text-sm">
            <Badge variant={"secondary"} className="cursor-default text-sm min-h-7 min-w-38 max-w-38">
              <div className="flex flex-row items-center gap-1">
                <Code className="size-4" />25 Repos
              </div>
            </Badge>
            <Badge variant={"secondary"} className="cursor-default text-sm min-h-7 min-w-38 max-w-38">
              <div>
                <GitGraph className="size-4" />
              </div>
              <div className="flex flex-row items-center gap-0.5">
                152 Commits <span className="text-[10px] font-bold text-muted-foreground/75 mt-1.5 hidden sm:block">2025</span>
              </div>
            </Badge>
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
