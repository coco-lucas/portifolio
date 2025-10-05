import { ThemeProvider } from "./lib/theme-provider";
import { Analytics } from "@vercel/analytics/next"
import ObserverProvider from "./lib/observer-provider";
import Home from "./pages/home";

export default function App() {

  return (
    <ObserverProvider>
      <ThemeProvider>
        <Home />
        <Analytics />
      </ThemeProvider >
    </ObserverProvider>
  );
}
