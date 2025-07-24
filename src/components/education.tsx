import { Award, GraduationCap } from "lucide-react";
import EducationCard from "./ui/cards/education-card";
import { Separator } from "./ui/separator";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="items-center">
      <div className="flex flex-row gap-1 justify-center sm:justify-start items-center">
        <div className="bg-muted flex items-center justify-center rounded-full p-1">
          <GraduationCap size={28} />
        </div>
        <h4 className="text-lg">
          {t("education_university")}
        </h4>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <EducationCard
          title={t("education_university-1-title")}
          corporation="UNIFESO - Centro Universitário Serra dos Órgãos"
          corporationURL="https://www.unifeso.edu.br/"
          type="university"
          year={2027}
        />
      </div>

      <div className="flex flex-row sm:gap-1 items-center justify-center sm:justify-end w-full">
        <Separator orientation="horizontal" className="flex-1/2 hidden sm:block" />
        <div className="bg-muted flex items-center justify-center rounded-full p-1">
          <Award size={28} />
        </div>
        <h4 className="text-lg font-semibold">{t("education_certification")}</h4>
      </div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        <EducationCard
          title={t("education_certification-1-title")}
          corporation="SERRATEC - Parque Tecnológico da Região Serrana"
          corporationURL="https://serratec.org/"
          type="certification"
          hours="770h"
          year={2024}
          credentialURL="https://view.pok.tech/c/6791eff0-1b09-416b-8324-33fa08343c51"
        />
        <EducationCard
          title={t("education_certification-2-title")}
          corporation="Alura - ONE"
          corporationURL="https://www.alura.com.br/"
          type="certification"
          hours="70h"
          year={2025}
          credentialURL="https://cursos.alura.com.br/degree/certificate/60dd2fb1-53af-4efa-b46d-109572d7d76e"
        />
        <EducationCard
          title={t("education_certification-3-title")}
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