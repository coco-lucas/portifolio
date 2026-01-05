import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "../../lib/utils";

export interface ExperienceCardProps {
  companyName: string;
  companyUrl?: string;
  list: {
    profession: string;
    description: string[];
    startDate: string;
    endDate?: string;
  }[];
}

export default function ExperienceCard({
  companyName,
  companyUrl,
  list,
}: ExperienceCardProps) {
  return (
    <Card className="border-none shadow-none bg-transparent p-0">
      <CardHeader className="px-2 sm:px-4">
        <CardTitle className="font-semibold text-lg">
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(companyUrl ? "hover:underline" : "")}
          >
            {companyName}
          </a>
        </CardTitle>
        <CardDescription>
          <div className="space-y-2 ml-2 sm:ml-4">
            {list.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex flex-row justify-between items-start w-full">
                  <span className="font-medium text-foreground">
                    {item.profession}
                  </span>
                  <span className="text-muted-foreground text-sm font-normal whitespace-nowrap">
                    {item.endDate
                      ? `${item.startDate} - ${item.endDate}`
                      : item.startDate}
                  </span>
                </div>
                {item.description.map((desc, descIndex) => (
                  <p
                    key={descIndex}
                    className="text-muted-foreground text-sm font-normal"
                  >
                    <span className="mr-2">−</span>
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
