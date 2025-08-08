import { BadgeCheckIcon, Calendar, ChevronDown, ChevronUp, CircleEllipsis, Github, Link } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { getLanguageColor } from "../../lib/utils";
import { type CarouselProps } from "./carousel";
import ProjectTabs from "./tabs";

export interface ProjectProps {
  isExpandedFromParent?: boolean;
  title: string;
  date?: string;
  isFinished: boolean;
  pcImg: CarouselProps["pcImg"];
  mobileImg?: CarouselProps["mobileImg"];
  description: string;
  badge: string[];
  badgeClassname?: string;
  deployURL?: string;
  githubURL?: string;
}

export default function ProjectCard({
  isExpandedFromParent,
  title,
  date,
  isFinished,
  pcImg,
  mobileImg,
  description,
  badge,
  deployURL,
  githubURL,
}: ProjectProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const maxCharacters = 150;
  const isTooLong = description.length > maxCharacters;

  const getBadgeClassName = (language: string): string => {
    const color = getLanguageColor(language);
    return `${color} cursor-default`;
  };

  return (
    <Card className="intersect:motion-preset-blur-up intersect:motion-duration-1000 w-full">
      <CardHeader>
        {date &&
          <div className="flex items-center justify-start">
            <p className="flex gap-0.5 text-xs font-normal text-ring items-center" tabIndex={1}>
              <Calendar size={14} />
              {date}
            </p>
          </div>}
        <div className="flex flex-row justify-between items-center" tabIndex={2}  >
          <CardTitle className="flex flex-col">
            <h2 className="text-2xl font-extrabold">
              {window.innerWidth < 640 && (!isExpanded || !isExpandedFromParent) && title.length > 15
                ? `${title.substring(0, 15)}...`
                : title}
            </h2>
          </CardTitle>
          {isFinished ? (
            <Badge className="bg-(--chart-2) pointer-events-none">
              <BadgeCheckIcon />
              {t("project.status.finished")}
            </Badge>
          ) : (
            <Badge className="bg-(--chart-3) pointer-events-none">
              <CircleEllipsis />
              {t("project.status.on-going")}
            </Badge>
          )}
        </div>
        <ProjectTabs pcImg={pcImg} mobileImg={mobileImg} alt={`${title} Project Images`} />

        <h4>{t("project.stack")}:</h4>
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
      </CardHeader>
      <CardContent tabIndex={5}>
        <CardDescription onClick={() => {
          if (window.innerWidth < 640 && isExpanded) {
            setIsExpanded(!isExpanded);
          }
        }}
          className="text-base"
          tabIndex={4}
        >
          {isTooLong && !isExpanded
            ? description.substring(0, maxCharacters) + "..."
            : description
          }
          {isTooLong && (
            <Button
              variant="link"
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-1 cursor-pointer h-0 text-primary underline sm:no-underline font-medium inline-flex items-center gap-0"
            >
              {isExpanded ? (
                <div className="hidden sm:flex flex-row">
                  {t("project.see-less")} <ChevronUp className="size-4 mt-0.5" />
                </div>
              ) : (
                <>
                  {t("project.see-more")} <ChevronDown className="size-4 mt-0.5" />
                </>
              )}
            </Button>
          )}
        </CardDescription>

        <div className="flex flex-row justify-end items-center">
          <CardAction className="flex flex-row items-center self-end mt-1 gap-1 sm:gap-2">
            <a href={deployURL} target="_blank">
              {deployURL && (
                <Button variant="outline" className="cursor-pointer rounded-xl">
                  <Link />
                </Button>
              )}
            </a>
            <a href={githubURL} target="_blank">
              <Button variant="outline" className="cursor-pointer rounded-xl">
                <Github />
              </Button>
            </a>
          </CardAction>
        </div>
      </CardContent>
    </Card >
  );
}
