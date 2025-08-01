import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface CardProps {
  icon: SVGAElement | any;
  stackName: string;
  techIcons: string[];
}

export default function StackCard({ icon, stackName, techIcons }: CardProps) {
  return (
    <Card className="sm:min-w-[375px] min-h-[190px] max-w-[350px] motion-preset-rebound-down motion-duration-1000">
      <CardHeader>
        <div className="flex items-center justify-center bg-(--muted) min-h-12 min-w-12 w-fit rounded-full">
          {icon}
        </div>
        <CardTitle className="font-bold text-lg tracking-tight">{stackName}</CardTitle>
        <hr className="border-1 border-(--border) w-full rounded-full" />
      </CardHeader>
      <CardContent className="w-full flex justify-baseline mb-2">
        <div className="flex flex-row justify-baseline gap-2 sm:gap-4 text-2xl sm:text-3xl">
          {techIcons.map((iconClass, idx) => (
            <i key={idx} className={iconClass}></i>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
