import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion } from "framer-motion";

interface CardProps {
  icon: SVGAElement | any;
  stackName: string;
  techIcons: string[];
}

export default function StackCard({ icon, stackName, techIcons }: CardProps) {
  return (
    <Card className="sm:min-w-[375px] min-h-[190px] max-w-[350px] motion-preset-rebound-down motion-duration-1000">
      <CardHeader>
        <div className="flex flex-row items-center justify-between w-full">
          <CardTitle className="font-bold text-lg tracking-tight">
            {stackName}
          </CardTitle>
          <motion.div className="flex items-center justify-center bg-(--muted) min-h-12 min-w-12 w-fit rounded-full">
            {icon}
          </motion.div>
        </div>
        <hr className="border-1 border-(--border) w-full rounded-full" />
      </CardHeader>
      <CardContent className="w-full flex justify-baseline mb-2">
        <div className="grid grid-cols-9 justify-baseline gap-2 sm:gap-4 text-2xl sm:text-3xl">
          {techIcons.map((iconClass, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger>
                <motion.i
                  key={idx}
                  className={iconClass}
                  initial={{ opacity: 0, x: -10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                ></motion.i>
              </TooltipTrigger>
              <TooltipContent>
                {iconClass.match(/amazonwebservices/)
                  ? "AWS"
                  : iconClass
                      .match(/devicon-([^-]+)/)?.[1]
                      .split(" ")[0]
                      .replace(/\b\w/g, (c) => c.toUpperCase())}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
