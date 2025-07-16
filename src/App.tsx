import { useTranslation } from 'react-i18next';
import './App.css'
import Dock from './components/dock'
import { ThemeProvider } from './components/theme-provider'
import LucasCoco from "./assets/lucas-coco-ai.png"

import TechStack from './components/tech-stack';

const h3 = "text-3xl font-bold text-start my-5";

export default function App() {
  const {t} = useTranslation();

  return (
    <ThemeProvider>
      <header className='flex flex-row justify-items-start'>
        <div className='mr-10 flex-1'>
          <nav>
            <h1 className='text-6xl font-bold tracking-tighter text-left' id='header'>Lucas Coco</h1>
          </nav>
          <h2 className='text-sm tracking-tighter font-light'>Full Stack Developer | Java | React | JavaScript | Node.js | Next.js</h2>
          <p className='mt-2 text-xl font-medium'>{t("about-me")}</p>
        </div>
        <img src={LucasCoco} alt='Lucas Coco' className='rounded-full w-40 h-40'/>
      </header>
      <main>
        <nav className='my-15'>
          <h3 className={h3} id='my-stack'>{t("stack-title")}:</h3>
          <TechStack />
        </nav>
        <nav className='my-15'>
          <h3 className={h3} id='projects'>Projects:</h3>
          <p className='text-lg font-light'></p>
          <ul className='list-disc pl-5'>
            <li>{t("project-1")}</li>
            <li>{t("project-2")}</li>
            <li>{t("project-3")}</li>
          </ul>
        </nav>
      </main>
      <Dock/>
    </ThemeProvider>
  )
}