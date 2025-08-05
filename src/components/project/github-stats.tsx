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
          <p>My Repos:</p>
          <a
            href="https://github.com/coco-lucas"
            target="_blank"
            className="text-sm text-(--muted-foreground) hover:text-(--primary)"
          >
            @coco-lucas
          </a>
        </div>
      </div>
    </div>
  );
}