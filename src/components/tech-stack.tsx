import { Code, Database, Server, ToolCase } from "lucide-react";
import StackCard from "./ui/stack-card";
import { useTranslation } from "react-i18next";

export default function TechStack() {
  const { t } = useTranslation();

  return (
    <div className='grid grid-cols-2 gap-4 justify-items-center'>
      <StackCard
        icon={<Code />}
        stackName={t("stack_front")}
        techIcons={[
          "devicon-javascript-plain colored",
          "devicon-typescript-plain colored",
          "devicon-html5-plain colored",
          "devicon-css3-plain colored",
          "devicon-react-original colored",
          "devicon-nextjs-plain dark:colored",
          "devicon-tailwindcss-original colored",
        ]}
      />
      <StackCard
        icon={<Server />}
        stackName={t("stack_back")}
        techIcons={[
          "devicon-nodejs-plain colored",
          "devicon-redis-plain colored",
          "devicon-java-plain colored",
          "devicon-spring-original colored"
        ]}
      />
      <StackCard
        icon={<Database />}
        stackName={t("stack_db")}
        techIcons={[
          "devicon-postgresql-plain colored",
          "devicon-mongodb-plain colored",
          "devicon-mariadb-original light:colored"
        ]}
      />
      <StackCard
        icon={<ToolCase />}
        stackName={t("stack_tools")}
        techIcons={[
          "devicon-git-plain colored",
          "devicon-github-original light:colored",
          "devicon-docker-plain colored",
          "devicon-rabbitmq-original colored",
        ]}
      />
    </div>
  );
}