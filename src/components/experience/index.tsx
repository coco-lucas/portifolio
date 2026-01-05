import { BriefcaseBusiness } from "lucide-react";
import ExperienceCard, { type ExperienceCardProps } from "./card";

export default function Experience() {
  const ExperienceData: ExperienceCardProps[] = [
    {
      companyName: "Noclaf Tech",
      companyUrl: "https://noclaftech.com",
      list: [
        {
          profession: "Quality Assurance",
          description: [
            "Developed and maintained web applications using React and TypeScript.",
            "Developed React components and hooks for reusable UI elements.",
          ],
          startDate: "Aug. 2025",
          endDate: "Nov. 2025",
        },
        {
          profession: "Software Engineer Intern",
          description: [
            "Developed and maintained web applications using React and TypeScript.",
          ],
          startDate: "Nov. 2025 (1.5 week)",
        },
        {
          profession: "Web developer Junior",
          description: [
            "Developed and maintained web applications using React and TypeScript.",
          ],
          startDate: "Nov. 2025",
          endDate: "Present",
        },
      ],
    },
    {
      companyName: "Teste 123",
      list: [
        {
          profession: "Web developer Junior",
          description: [
            "Developed and maintained web applications using React and TypeScript.",
          ],
          startDate: "Nov. 2025",
          endDate: "Present",
        },
      ],
    },
  ];

  return (
    <div>
      <div className="mt-15 flex flex-row items-center justify-start gap-1">
        <h3>Experience</h3>
        <BriefcaseBusiness size={30} />
      </div>
      <div className="space-y-4">
        {ExperienceData.map((experience) => (
          <ExperienceCard key={experience.companyName} {...experience} />
        ))}
      </div>
    </div>
  );
}
