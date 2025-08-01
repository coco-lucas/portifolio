import { Code, GitGraph, Github } from "lucide-react";
import { Badge } from "../ui/badge";

export default function GitHubStats() {
  const repositories = 25;
  const commits = 470;

  return (

    <div className="flex flex-col items-center gap-2 intersect:motion-preset-blur-up intersect:motion-duration-1000 mb-5">
      <div className="flex flex-row items-center justify-center sm:w-fit">
        <Github size={30} />
        <div className="flex flex-col justify-between h-full sm:ml-2 font-semibold text-center">
          <p>GitHub Stat's</p>
          <a
            href="https://github.com/coco-lucas"
            target="_blank"
            className="text-sm text-(--muted-foreground) hover:text-(--primary)"
          >
            @coco-lucas
          </a>
        </div>
      </div>

      <div className="flex flex-row self-center gap-2 text-sm">
        <Badge variant={"secondary"} className="cursor-default sm:text-sm min-h-7 min-w-30 sm:min-w-38 max-w-30 sm:max-w-38">
          <div className="flex flex-row items-center gap-1">
            <Code className="size-4" />{repositories} Repos
          </div>
        </Badge>
        <Badge variant={"secondary"} className="cursor-default sm:text-sm min-h-7 min-w-30 sm:min-w-38 max-w-30 sm:max-w-38">
          <div>
            <GitGraph className="size-4" />
          </div>
          <div className="flex flex-row items-center gap-0.5">
            {commits} Commits <span className="text-[10px] font-bold text-muted-foreground/75 mt-1.5 hidden sm:block">2025</span>
          </div>
        </Badge>
      </div>
    </div>
  );
}