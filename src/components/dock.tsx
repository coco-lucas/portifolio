import { BookOpenText, FolderCode, House, Inbox } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";
import { Button } from "./ui/button";
import LanguageChanger from "./language-changer";
import { Separator } from "./ui/separator";

export default function Dock() {

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-md border border-solid border-(--border) px-6 py-1 rounded-full">
      <ul className="flex flex-row justify-center items-center list-none m-0 p-0 group/icon-dock">
        {[
          { icon: <House />, key: "house" },
          { icon: <FolderCode />, key: "folder" },
          { icon: <BookOpenText />, key: "book" },
          { icon: <Inbox />, key: "inbox" },
        ].map(({ icon, key }, idx, arr) => (
          <li
            key={key}
            className={`
              transition-all duration-200
              ${idx !== arr.length - 1 ? "mr-4" : ""}
              group/icon-dock
            `}
          >
            <Button
              variant="ghost"
              size="icon"
              className={`
                transition-transform duration-200
                group-hover/icon-dock:scale-102
                hover:scale-110
                focus-visible:scale-110
                focus-visible:ring-2 focus-visible:ring-(--ring)
                focus-visible:ring-offset-2 focus-visible:ring-offset-(--background)
                focus-visible:outline-none
                focus-visible:rounded-full
              `}
            >
              {icon}
            </Button>
          </li>
        ))}
        <Separator orientation="vertical" className="mx-2" />
        <li><ThemeToggle /></li>
        <li><LanguageChanger /></li>
      </ul>
    </div >
  )
}