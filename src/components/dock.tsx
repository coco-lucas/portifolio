import { House } from "lucide-react";
import { ThemeToggle } from "./theme-toogle";
import { Button } from "./ui/button";
import LanguageChanger from "./language-changer";

export default function Dock() {

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 backdrop-blur-md border border-solid border-(--border) px-6 py-1 rounded-4xl">
      <ul className="flex flex-row gap-4 justify-center items-center list-none m-0 p-0">
        <li>
          <Button variant="ghost" size="icon">
            <House/>
          </Button>
        </li>
        <li><ThemeToggle/></li>
        <li><LanguageChanger/></li>
        {/* <li className="flex items-center justify-center"><LanguageChanger/></li> */}
      </ul>
    </div>
  )
}