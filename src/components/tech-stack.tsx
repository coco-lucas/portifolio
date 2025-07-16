import { Code, Database, Server, ToolCase } from "lucide-react";
import StackCard from "./ui/stack-card";
import { useTranslation } from "react-i18next";

export default function TechStack(){
  const {t} = useTranslation();

  return (
    <div className='grid grid-cols-2 gap-4 justify-items-center'>
      <StackCard
        icon={<Code />}
        stackName={t("stack-1")}
        techIcons={[
          "devicon-javascript-plain colored",
          "devicon-typescript-plain colored",
          "devicon-react-original colored",
          "devicon-nextjs-plain dark:colored",
          "devicon-tailwindcss-original colored",
          "devicon-html5-plain colored",
          "devicon-css3-plain colored",
        ]}
      />
      <StackCard
        icon={<Server />}
        stackName={t("stack-2")}
        techIcons={[
          "devicon-nodejs-plain colored",
          "devicon-redis-plain colored",
          "devicon-java-plain colored",
          "devicon-spring-original colored"
        ]}
      />
      <StackCard
        icon={<Database />}
        stackName={t("stack-3")}
        techIcons={[
          "devicon-postgresql-plain colored",
          "devicon-mongodb-plain colored",
          "devicon-mariadb-original light:colored"
        ]}
      />
      <StackCard
        icon={<ToolCase />}
        stackName={t("stack-4")}
        techIcons={[
          "devicon-git-plain colored",
          "devicon-github-original light:colored",
          "devicon-docker-plain colored"
        ]}
      />
    </div>
  );
}