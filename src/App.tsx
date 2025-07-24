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
      <div className="max-w-[350px] sm:max-w-3xl mx-auto mt-15 sm:mt-30">
        <header className="flex flex-col sm:flex-row justify-center">
          <div className="sm:mr-10 flex-1">
            <nav className="mt-0">
              <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start self-center justify-start sm:items-start sm:justify-start">
                  <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter self-start" id="header">
                    Lucas Coco
                  </h1>
                  <h2 className="text-xs sm:text-sm tracking-tighter font-medium text-(--muted-foreground)">
                    Full Stack Developer | Java | SpringBoot | JavaScript | TypeScript
                    | React | Next.js
                  </h2>
                </div>
                <img
                  src={LucasCoco}
                  alt="Lucas Coco"
                  className="rounded-full w-40 h-40"
                />
              </div>
            </nav>
            <p className="mt-2 text-sm sm:text-lg text-center sm:text-start text-muted-foreground font-semibold">{t("about-me")}</p>
          </div>

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

          <nav className="flex flex-col items-center justify-center sm:mt-30 mb-10">
            <h2 className="text-xl sm:text-2xl text-center sm:text-start font-medium">Have a project idea or are interested in my services?</h2>
            <p className="mt-1.5 font-bold text-2xl sm:text-3xl">Contact me!</p>
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
