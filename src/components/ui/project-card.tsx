import { BadgeCheckIcon, Calendar, CircleEllipsis, Github, Link, Unlink } from "lucide-react";
import { Badge } from "./badge";
import {
  Card,
  CardAction,
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
  date?: string;
  isFinished: boolean;
  imageURL: string;
  alt: string;
  description: string;
  badge: string[];
  badgeClassname?: string;
  deployURL?: string;
  githubURL?: string;
}

export default function ProjectCard({
  title,
  date,
  isFinished,
  imageURL,
  alt,
  description,
  badge,
  deployURL,
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
        {date &&
          <div className="flex items-center justify-start">
            <p className="flex gap-0.5 text-xs font-semibold text-(--ring) items-center" tabIndex={1}>
              <Calendar size={14} />
              {date}
            </p>
          </div>}
        <div className="flex flex-row justify-between items-center" tabIndex={2}  >
          <CardTitle className="flex flex-col">
            <h2 className="text-2xl font-extrabold">{title}</h2>
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
        <img src={imageURL} alt={alt} className="rounded-xl" tabIndex={3} />
        <CardDescription className="text-md" tabIndex={4}>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis voluptas vero fugit reprehenderit, possimus error architecto ex excepturi laborum perferendis magni repudiandae laudantium maxime. Repellendus quos fuga distinctio corporis?</CardDescription>
      </CardHeader>
      <CardContent tabIndex={5}>
        <h4>{t("project_stack")}:</h4>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-2" tabIndex={6}>
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
          <CardAction className="flex flex-row gap-2">
            <a href={deployURL} target="_blank">
              {deployURL ? (
                <Button variant="outline" className="cursor-pointer">
                  <Link />
                </Button>
              ) : (
                <Button variant="link" className="cursor-not-allowed">
                  <Unlink />
                </Button>
              )}
            </a>
            <a href={githubURL} target="_blank">
              <Button variant="outline" className="cursor-pointer">
                <Github />
              </Button>
            </a>
          </CardAction>
        </div>
      </CardContent>
    </Card >
  );
}
