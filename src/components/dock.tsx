import { FolderCode, House } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";
import { Button } from "./ui/button";
import LanguageChanger from "./language-changer";
import { Separator } from "./ui/separator";

export default function Dock() {

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-md border border-solid border-(--border) px-6 py-1 rounded-full">
      <ul className="flex flex-row gap-4 justify-center items-center list-none m-0 p-0">
        <li>
          <Button variant="ghost" size="icon">
            <House/>
          </Button>
        </li>
        <li>
          <Button variant="ghost" size="icon">
            <FolderCode/>
          </Button>
        </li>
        <Separator orientation="vertical"/>
        
        <li><ThemeToggle/></li>
        <li><LanguageChanger/></li>
      </ul>
    </div>
  )
}