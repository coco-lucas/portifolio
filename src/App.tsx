import { useTranslation } from 'react-i18next';
import './App.css'
import Dock from './components/dock'
import { ThemeProvider } from './components/theme-provider'
import LucasCoco from "./assets/lucas-coco-ai.png"

import TechStack from './components/tech-stack';
import Projects from './components/projects';

export default function App() {
  const {t} = useTranslation();

  return (
    <ThemeProvider>
      <header className='flex flex-row justify-items-start'>
        <div className='mr-10 flex-1'>
          <nav>
            <h1 className='text-6xl font-bold tracking-tighter text-left' id='header'>Lucas Coco</h1>
          </nav>
          <h2 className='text-sm tracking-tighter font-medium text-(--muted-foreground)'>Full Stack Developer | Java  | SpringBoot | JavaScript | TypeScript | React | Next.js</h2>
          <p className='mt-2 text-xl font-medium'>{t("about-me")}</p>
        </div>
        <img src={LucasCoco} alt='Lucas Coco' className='rounded-full w-40 h-40'/>
      </header>
      <main>
        <nav className='my-15'>
          <h3 id='my-stack'>{t("stack")}:</h3>
          <TechStack />
        </nav>
        <nav className='my-15'>
          <h3 id='projects'>{t("project")}:</h3>
          <Projects />
          
        </nav>
      </main>
      <Dock/>
    </ThemeProvider>
  )
}