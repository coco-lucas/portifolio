import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "./ui/card";
import { CheckCheckIcon } from "lucide-react";
import ContactForm from "./contact-form";

export default function Contact() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <>
      {isSubmitted && (
        <div className="rounded-xl absolute inset-0 z-10 flex items-center justify-center bg-background/90 backdrop-blur-xs">
          <Card className="min-w-80 sm:min-w-fit mx-4 animate-in fade-in-0 zoom-in-95 duration-300">
            <CardContent className="text-center">
              <div>
                <CheckCheckIcon className="mx-auto size-12 text-green-500" />
              </div>
              <h3 className="text-lg text-center font-semibold mb-1">{t("contact.form.submit.success")}!</h3>
              <p className="text-sm text-muted-foreground">
                {t("contact.form.submit.thanks")}.
              </p>
            </CardContent>
          </Card>
        </div>
      )}
      <ContactForm isSubmitted={setIsSubmitted} />
    </>
  )
}