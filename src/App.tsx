import { useTranslation } from "react-i18next";
import Dock from "./components/dock";
import { ThemeProvider } from "./components/theme-provider";
import LucasCoco from "./assets/lucas-coco-ai.png";

import TechStack from "./components/tech-stack";
import Projects from "./components/projects";
import Education from "./components/education";
import ContactForm from "./components/contact-form";

export default function App() {
  const { t } = useTranslation();






  return (
    <ThemeProvider>
      <div className="max-w-3xl mx-auto mt-30">
        <header className="flex flex-row justify-center">
          <div className="mr-10 flex-1">
            <nav className="mt-0">
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
            {/*TODO:Make the projects be inside a carousel*/}
          </nav>
          <nav>
            <h3 id="education">{t("education")}:</h3>
          </nav>
          <Education />

          <nav className="flex flex-col items-center justify-center mt-30 mb-10">
            <h2 className="text-2xl font-medium">Have a project idea or are interested in my services?</h2>
            <p className="mt-1.5 font-bold text-3xl">Contact me!</p>
            <ContactForm />
          </nav>
        </main>
        <footer className="text-sm border-t border-muted py-4 justify-between">
          <div className="flex flex-row justify-between items-center">
            <p>© 2025 Lucas Coco - All Rights Reserved</p>
            <p>linkedin</p>
          </div>
        </footer>
        <Dock />
      </div>
    </ThemeProvider>
  );
}
