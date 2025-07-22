import { useTranslation } from "react-i18next";
import Dock from "./components/dock";
import { ThemeProvider } from "./components/theme-provider";
import LucasCoco from "./assets/lucas-coco-ai.png";

import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import { Separator } from "./components/ui/separator";
import { Award, GraduationCap } from "lucide-react";
import EducationCard from "./components/ui/cards/education-card";

export default function App() {
  const { t } = useTranslation();

  return (
    <ThemeProvider>
      <div className="max-w-3xl mx-auto mt-30">
        <header className="flex flex-row justify-center">
          <div className="mr-10 flex-1">
            <nav className="my-0">
              <h1 className="text-6xl font-bold tracking-tighter text-left" id="header">
                Lucas Coco
              </h1>
            </nav>
            <h2 className="text-sm tracking-tighter font-medium text-(--muted-foreground)">
              Full Stack Developer | Java | SpringBoot | JavaScript | TypeScript
              | React | Next.js
            </h2>
            <p className="mt-2 text-md font-semibold">{t("about-me")}</p>
          </div>
          <img
            src={LucasCoco}
            alt="Lucas Coco"
            className="rounded-full w-40 h-40"
          />
        </header>
        <main>
          <nav>
            <h3 id="my-stack">{t("stack")}:</h3>
            <TechStack />
          </nav>
          <nav>
            <h3 id="projects">{t("project")}:</h3>
            <Projects />
          </nav>
          <nav>
            <h3 id="education">Education</h3>
          </nav>

          <div className="w-full flex flex-col lg:flex-row gap-12 items-start">
            <div className="relative flex-1 lg:w-[40%]">
              <div className="flex flex-row gap-1 items-center">
                <div className="bg-muted flex items-center justify-center rounded-full p-1">
                  <GraduationCap size={28} />
                </div>
                <h4 className="text-lg ">
                  Formal Education
                </h4>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <EducationCard
                  title="Bachelor of Science in Computer Science"
                  university="University of Example"
                  type="University"
                  graduationYear={2020}
                />
              </div>
            </div>
            <Separator orientation="vertical" className="mt-25 h-50!" />
            <div className="flex-1 lg:w-[60%]">
              <div className="flex flex-row gap-1 items-center">
                <div className="bg-muted flex items-center justify-center rounded-full p-1">
                  <Award size={28} />
                </div>
                <h4 className="text-lg font-semibold">Certifications</h4>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                <EducationCard
                  title="Certified Java Developer"
                  university="Oracle"
                  type="Course"
                  graduationYear={2022}
                  credentialURL="https://google.com"
                />
                <EducationCard
                  title="React.js Fundamentals"
                  university="Online Learning Platform"
                  type="Course"
                  graduationYear={2023}
                />
              </div>
            </div>
          </div>

        </main>
        <footer>
          <h3 id="contact">Contact</h3>
        </footer>
        <Dock />
      </div>
    </ThemeProvider>
  );
}
