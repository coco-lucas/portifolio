import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const LANGUAGE_LABELS: Record<string, string>={
  en: "English",
  pt: "Português",
  es: "Español"
}  

export default function LanguageChanger (){
  const { i18n } = useTranslation();
  const currentLocale = i18n.language || "en";

  const handleChange = (lang : string) => {
    if (lang === currentLocale) return;

    
    
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `NEXT_LOCALE=${lang}; expires=${date.toUTCString()}; path=/`;
    i18n.changeLanguage(lang);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost" size="icon" value={currentLocale}>
          <Languages/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-24">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={currentLocale} onValueChange={handleChange}>
          {Object.keys(LANGUAGE_LABELS).map((lang) => (
            <DropdownMenuRadioItem key={lang} value={lang}>
              {LANGUAGE_LABELS[lang]}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}