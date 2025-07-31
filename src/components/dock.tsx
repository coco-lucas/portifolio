import { BookOpenText, FolderCode, House, Inbox, MailOpenIcon } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";
import { Button } from "./ui/button";
import LanguageChanger from "./language-changer";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function Dock() {
  const icons = [
    { icon: <House />, key: "about-me", hover: "About Me" },
    { icon: <FolderCode />, key: "projects", hover: "Projects" },
    { icon: <BookOpenText />, key: "education", hover: "Education" },
    { icon: <MailOpenIcon />, key: "contact", hover: "Contact" },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-md border border-solid border-(--border) p-3 sm:px-6 py-1 sm:py-2 rounded-full motion-preset-focus-lg motion-delay-500">
      <ul className="flex flex-row justify-center items-center list-none m-0 p-0">
        <div className="flex flex-row group/icon-dock">
          {icons.map(({ icon, key, hover }, idx, arr) => (
            <li
              key={key}
              className={`
            transition-all duration-200
            ${idx !== arr.length - 1 ? "mr-2 sm:mr-4" : ""}
            group/icon-dock
            `}
            >
              <Tooltip>
                <TooltipTrigger>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      <a href={`/#${key}`}></a>
                    }}
                    className="
                    transition-all duration-300 ease-in-out
                    dark:hover:bg-transparent hover:bg-transparent
                    hover:scale-150
                    hover:mx-3
                    "
                  >
                    {icon}
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="opacity-0 sm:opacity-100 transition-opacity duration-300 ease-in-out">
                  <p>{hover}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
        </div>
        <Separator orientation="vertical" className="mx-1 sm:mx-4" />
        <li><ThemeToggle /></li>
        <li><LanguageChanger /></li>
      </ul>
    </div >
  )
}