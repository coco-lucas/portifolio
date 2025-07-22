import { Link } from "lucide-react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";

type typeProps = "University" | "Course";

interface CardProps {
  title: string;
  university: string;
  type: typeProps;
  graduationYear: number;
  credentialURL?: string;
}

export default function EducationCard({ title, university, type, graduationYear, credentialURL }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-bold">{title}</CardTitle>
        <p className="font-medium text-muted-foreground">{university}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row-reverse justify-between items-center">
          <p className="italic text-sm text-muted-foreground">
            {type === "University" ? "Graduation:" : ""} {graduationYear}
          </p>
          {credentialURL && (
            <a href={credentialURL} target="_blank">
              <Button
                variant="link"
                className="text-s cursor-pointer p-0 h-auto group flex items-center gap-1"
              >
                View Credential
                <span className="transition-opacity opacity-0 group-hover:opacity-100">
                  <Link className="size-3" />
                </span>
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  )
}