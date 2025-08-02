import { BadgeCheckIcon, Calendar, CircleEllipsis, Github, Link } from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { getLanguageColor } from "../../lib/utils";
import ProjectCarousel, { type CarouselProps } from "./carousel";

export interface ProjectProps {
  title: string;
  date?: string;
  isFinished: boolean;
  pcImg: CarouselProps["pcImg"];
  mobileImg: CarouselProps["mobileImg"];
  alt: CarouselProps["alt"];
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
  pcImg,
  mobileImg,
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
            <h2 className="text-2xl font-extrabold">{title}</h2>
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
        {/*TODO: Add images and fallback images*/}
        {/* <img src={img} alt={alt} className="rounded-xl" tabIndex={3} /> */}
        <ProjectCarousel pcImg={pcImg} mobileImg={mobileImg} alt={alt} />
        <CardDescription className="text-base" tabIndex={4}>{description}</CardDescription>
      </CardHeader>
      <CardContent tabIndex={5}>
        <h4>{t("project.stack")}:</h4>
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
          <CardAction className="flex flex-col sm:flex-row items-center self-end gap-1 sm:gap-2">
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
