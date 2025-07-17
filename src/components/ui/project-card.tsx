import { BadgeCheckIcon, CircleEllipsis, Github, Loader } from "lucide-react";
import { Badge } from "./badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { useTranslation } from "react-i18next";
import { Button } from "./button";
import { getLanguageColor } from "../../lib/utils";

export interface ProjectProps {
  title: string;
  isFinished: boolean;
  imageURL: string;
  alt: string;
  description: string;
  badge: string[];
  badgeClassname?: string;
  githubURL?: string;
}

export default function ProjectCard({
  title,
  isFinished,
  imageURL,
  alt,
  description,
  badge,
  githubURL,
}: ProjectProps) {
  const { t } = useTranslation();

  const getBadgeClassName = (language: string): string => {
    const color = getLanguageColor(language);
    return `${color} cursor-default`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row justify-between items-center">
          <CardTitle className="text-center text-2xl font-extrabold">
            {title}
          </CardTitle>
          {isFinished ? (
            <Badge className="bg-(--chart-2) pointer-events-none">
              <BadgeCheckIcon />
              {t("project_status-finished")}
            </Badge>
          ) : (
            <Badge className="bg-(--chart-3) pointer-events-none">
              <CircleEllipsis />
              {t("project_status-on-going")}
            </Badge>
          )}
        </div>

        <img src={imageURL} alt={alt} className="rounded-xl" />
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h4>{t("project_stack")}:</h4>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {badge.map((element) => (
              <Badge
                variant="secondary"
                className={getBadgeClassName(element)}
                key={element}
              >
                {element}
              </Badge>
            ))}
          </div>
          <a href={githubURL} target="_blank">
            <Button variant="outline" className="cursor-pointer">
              <Github />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
