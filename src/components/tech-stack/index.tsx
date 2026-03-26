import { Code, Database, Server, ToolCase } from "lucide-react";
import StackCard from "./card";
import { useTranslation } from "react-i18next";

export default function TechStack() {
  const { t } = useTranslation();

  const stack = [
    {
      type: "front",
      icon: <Code />,
      stackName: t("stack_front"),
      techIcons: [
        "devicon-javascript-plain colored",
        "devicon-typescript-plain colored",
        "devicon-html5-plain colored",
        "devicon-css3-plain colored",
        "devicon-react-original colored",
        "devicon-nextjs-plain dark:colored",
        "devicon-tailwindcss-original colored",
        "devicon-vitejs-plain colored",
        "devicon-zustand-plain colored",
        "devicon-bun-plain",
        "devicon-framermotion-original",
      ],
    },
    {
      type: "back",
      icon: <Server />,
      stackName: t("stack_back"),
      techIcons: [
        "devicon-java-plain colored",
        "devicon-spring-original colored",
        "devicon-nodejs-plain colored",
        "devicon-python-plain",
      ],
    },
    {
      type: "db",
      icon: <Database />,
      stackName: t("stack_db"),
      techIcons: [
        "devicon-postgresql-plain colored",
        "devicon-mongodb-plain-wordmark colored",
        "devicon-mariadb-original light:colored",
      ],
    },
    {
      type: "tools",
      icon: <ToolCase />,
      stackName: t("stack_tools"),
      techIcons: [
        "devicon-git-plain colored",
        "devicon-amazonwebservices-plain-wordmark colored",
        "devicon-azure-plain colored",
        "devicon-docker-plain colored",
        "devicon-rabbitmq-original colored",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
      {stack.map((stack) => (
        <StackCard
          key={stack.type}
          icon={stack.icon}
          stackName={stack.stackName}
          techIcons={stack.techIcons}
        />
      ))}
    </div>
  );
}
