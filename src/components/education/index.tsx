import { Award, GraduationCap } from "lucide-react";
import EducationCard from "./card";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="items-center">
      <div className="mt-15 flex flex-row items-center justify-start gap-1">
        <h3 className="flex items-center">
          {t("education.graduation.title")}
        </h3>
        <GraduationCap size={30} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center intersect:motion-preset-blur-right intersect:motion-duration-1000 motion-delay-200">
        <EducationCard
          title={t("education.graduation.1")}
          corporation="UNIFESO - Centro Universitário Serra dos Órgãos"
          corporationURL="https://www.unifeso.edu.br/"
          type="university"
          year={2028}
        />
      </div>

      <div className="flex flex-row sm:gap-1 items-center justify-start sm:justify-end w-full">
        <h3>{t("education.certificate.title")}</h3>
        <Award size={30} />
        <Separator orientation="horizontal" className="flex-1/2 hidden sm:block" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center intersect:motion-preset-blur-left intersect:motion-duration-1000 intersect:motion-delay-300">
        <EducationCard
          title={t("education.certificate.1")}
          corporation="SERRATEC - Parque Tecnológico da Região Serrana"
          corporationURL="https://serratec.org/"
          type="certification"
          hours="770h"
          year={2024}
          credentialURL="https://view.pok.tech/c/6791eff0-1b09-416b-8324-33fa08343c51"
        />
        <EducationCard
          title={t("education.certificate.2")}
          corporation="Alura - ONE"
          corporationURL="https://www.alura.com.br/"
          type="certification"
          hours="70h"
          year={2025}
          credentialURL="https://cursos.alura.com.br/degree/certificate/60dd2fb1-53af-4efa-b46d-109572d7d76e"
        />
        <EducationCard
          title={t("education.certificate.3")}
          corporation="EF SET"
          corporationURL="https://www.efset.org/"
          type="certification"
          year={2025}
          credentialURL="https://cert.efset.org/mWdqkq"
        />
      </div>
    </div>
  )
}