import { useTranslation } from "react-i18next";
import Dock from "./components/dock";
import { ThemeProvider } from "./components/theme-provider";
import LucasCoco from "./assets/lucas-coco-ai.png";

import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import Education from "./components/education";
import { Card, CardContent } from "./components/ui/card";
import { Instagram } from "lucide-react";
import SocialCard from "./components/ui/cards/social-card";
import ObserverProvider from "./lib/observer-provider";
import GitHubStats from "./components/github-stats";

export default function App() {
  const { t } = useTranslation();

  const socialItems = [
    { icon: <i className="devicon-linkedin-plain" />, name: "Linkedin", link: "https://www.linkedin.com/in/coco-lucas/" },
    { icon: <Instagram className="size-4 sm:size-5" />, name: "Instagram", link: "https://www.instagram.com/lucas.coco_/" },
    { icon: <i className="devicon-twitter-plain !dark:colored" />, name: "Twitter", link: "https://www.x.com/lucauxs" },
    { icon: <i className="devicon-behance-plain" />, name: "Behance", link: "https://behance.net/coco-lucas" }
  ];

  return (
    <ObserverProvider>
      <ThemeProvider>

        <div className="max-w-sm sm:max-w-3xl mx-auto mt-15 sm:mt-30">
          <header className="flex flex-col sm:flex-row justify-center motion-preset-blur-down motion-duration-1000">
            <div className="sm:mr-10 flex-1">
              <nav id="about-me" className="mt-0">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col items-start self-center justify-start sm:items-start sm:justify-start">
                    <h1 className="text-5xl sm:text-8xl font-bold tracking-tighter text-start -ml-1 sm:-ml-2" id="header">
                      Lucas Coco
                    </h1>
                    <h2 className="text-sm tracking-tighter font-bold text-(--muted-foreground)">
                      Full Stack Developer | Java | SpringBoot | JavaScript | TypeScript
                      | React | Next.js
                    </h2>
                  </div>
                  <img
                    src={LucasCoco}
                    alt="Lucas Coco"
                    className="rounded-full w-24 h-24 md:w-36 md:h-36"
                  />
                </div>
              </nav>
              <p className="mt-4 text-base max-w-prose font-normal text-start">{t("about-me")}</p>
            </div>

          </header>
          <main>
            <nav>
              <h3 id="my-stack">{t("stack")}:</h3>
              <TechStack />
            </nav>
            <nav>
              <h3 id="projects">{t("project")}:</h3>
              <GitHubStats />
              <Projects />
              {/*TODO:Make the projects be inside a carousel in mobile view && make a Load More button in pc view*/}
            </nav>

            <div id="education">
              <Education />
            </div>

            {/*TODO: Translate all of the texts belllow this:*/}
            <nav id="contact" className="flex flex-col items-center justify-center sm:mt-30 mb-10 intersect:motion-preset-blur-up intersect:motion-duration-1500">
              <h2 className="w-70 sm:w-fit text-xl sm:text-2xl text-center sm:text-start font-medium">{t("contact.subtext")}?</h2>
              <p className="mt-1 font-bold text-2xl sm:text-3xl">{t("contact.title")}!</p>
              <Card className="sm:min-w-20 sm:w-150 mt-4">
                <CardContent className="flex flex-col items-center gap-2">
                  <SocialCard items={socialItems} />
                </CardContent>
              </Card>
            </nav>
          </main>
          <footer className="text-sm text-muted-foreground border-t border-muted py-4 mb-15 sm:mb-5">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-2 text-foreground intersect:motion-preset-blur-right intersect:motion-duration-1000 motion-delay-300">
                <p>2025</p>
                <p>•</p>
                <p>©Lucas Coco</p>
              </div>
              <div className="flex flex-row justify-evenly gap-4 intersect:motion-preset-blur-left intersect:motion-duration-1000 motion-delay-300">
                <a href="https://www.x.com/lucauxs">Twitter</a>
                <a href="https://www.github.com/coco-lucas/">GitHub</a>
              </div>
            </div>
          </footer>
          <Dock />
        </div>
      </ThemeProvider >
    </ObserverProvider>
  );
}
