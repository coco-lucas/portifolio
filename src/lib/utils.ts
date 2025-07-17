import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const languageColors: Record<string, string> = {
  // Frontend
  JavaScript: "hover:bg-yellow-400 text-black",
  TypeScript: "bg-blue-600 text-white",
  React: "bg-cyan-400 text-black",
  "Next.js": "bg-black text-white",
  HTML: "bg-orange-500 text-white",
  CSS: "bg-blue-500 text-white",
  Tailwind: "bg-cyan-500 text-white",

  // Backend
  "Node.js": "bg-green-600 text-white",
  Java: "bg-orange-600 text-white",
  Spring: "bg-green-600 text-white",

  // Databases
  PostgreSQL: "bg-blue-700 text-white",
  MongoDB: "bg-green-700 text-white",

  // Tools
  Docker: "bg-blue-600 text-white",
  Git: "bg-orange-600 text-white",
  RabbitMQ: "bg-orange-600 text-white",
};

export function getLanguageColor(language: string): string | null {
  if (languageColors[language]) {
    return languageColors[language];
  }
  return null;
}
