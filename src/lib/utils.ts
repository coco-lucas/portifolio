import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const languageColors: Record<string, string> = {
  // Frontend
  JavaScript: "bg-yellow-400",
  TypeScript: "bg-blue-600",
  React: "bg-cyan-400",
  "Next.js": "bg-black",
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  Tailwind: "bg-cyan-500",

  // Backend
  "Node.js": "bg-green-600",
  Java: "bg-orange-600",
  SpringBoot: "bg-green-600",

  // Databases
  PostgreSQL: "bg-blue-700",
  MongoDB: "bg-green-700",

  // Tools
  Docker: "bg-blue-600",
  Git: "bg-orange-600",
  RabbitMQ: "bg-orange-600",
};

export function getLanguageColor(language: string): string | null {
  if (languageColors[language]) {
    return `hover:${languageColors[language]} hover:text-white transition-colors duration-300`;
  }
  return null;
}
