import { Moon, Sun } from "lucide-react"

import { Button } from "../ui/button"
import { useTheme } from "../../lib/theme-provider"

export function ThemeToggle() {
  const currentTheme = useTheme().theme
  const { setTheme } = useTheme()

  const handleThemeChange = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleThemeChange}>
      <Sun className="scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}