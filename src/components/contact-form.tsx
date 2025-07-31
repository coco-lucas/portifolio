import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AlertCircle, CloudAlert, OctagonAlert } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

//TODO: Rewatch the video about forms && make the code not verify every input change

export default function ContactForm({ isSubmitted }: { isSubmitted: (value: boolean) => void }) {
  const { t } = useTranslation();
  const contactEmail = import.meta.env.VITE_EMAILJS_CONTACT_EMAIL || "null";

  const [err, setErr] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const submissionLimit = 2;
  const errorLimit = 4;

  const selectOptions = [
    { key: "project", value: "Project Collaboration", label: t("contact.form.subject-options.project") },
    { key: "job", value: "Job Role", label: t("contact.form.subject-options.job") },
    { key: "inquiry", value: "General Inquiry", label: t("contact.form.subject-options.inquiry") },
    { key: "other", value: "Other", label: t("contact.form.subject-options.other") },
  ];

  const getTotalSubmissionCount = () => {
    const cookieMatch = document.cookie.match(/(?:^|;\s*)totalSubmissions=(\d+)/);
    return cookieMatch ? parseInt(cookieMatch[1], 10) : 0;
  };

  const incrementTotalSubmissionCount = () => {
    const currentCount = getTotalSubmissionCount();
    const newCount = currentCount + 1;
    document.cookie = `totalSubmissions=${newCount}; path=/; max-age=88000; httpOnly=true`;
  };

  const isDisabled = (errorCount >= errorLimit || getTotalSubmissionCount() >= submissionLimit);

  const ContactSchema = z.object({
    name: z
      .string()
      .nonempty({
        message: t("contact.form.errors.input.name.required"),
      })
      .min(2, {
        message: t("contact.form.errors.input.name.min-length"),
      }),
    email: z
      .string()
      .nonempty({
        message: t("contact.form.errors.input.email.required"),
      })
      .email({
        message: t("contact.form.errors.input.email.invalid"),
      }),
    subject: z.string().nonempty({
      message: t("contact.form.errors.input.subject.required"),
    }),
    otherSubject: z.string().optional(),
    message: z
      .string()
      .nonempty({
        message: t("contact.form.errors.input.message.required"),
      })
      .min(10, {
        message: t("contact.form.errors.input.message.min-length"),
      }),
  });

  const form = useForm({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      otherSubject: "",
      message: "",
    },
  })

  const onSubmit = (data: z.infer<typeof ContactSchema>) => {
    if (getTotalSubmissionCount() >= 5) {
      console.log("Submission limit reached");
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    { data.otherSubject && (data.subject = data.otherSubject) };

    const templateParams = {
      subject: data.subject,
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_name: "Lucas C.",
    }


    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        form.reset();
        isSubmitted(true);

        setErr(false);
        incrementTotalSubmissionCount();

        setTimeout(() => {
          isSubmitted(false);
        }, 3000);
      })
      .catch((err) => {
        setErr(true);
        setErrorCount(errorCount + 1);
      })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-6 sm:space-y-4">
          <FormField
            control={form.control}
            name="name"
            disabled={isDisabled}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.name")}</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.name-placeholder")} {...field} disabled={isDisabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            disabled={isDisabled}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder={t("contact.form.email-placeholder")} type="email" {...field} disabled={isDisabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            disabled={isDisabled}
            render={({ field }) => (
              <FormItem className={form.watch("subject") === "Other" ? "text-ring" : "text-foreground"}>
                <FormLabel>{t("contact.form.subject")}</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value} disabled={isDisabled}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder={t("contact.form.subject-placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      {selectOptions.map((option) => (
                        <SelectItem key={option.key} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {form.watch("subject") === "Other" && (
            <FormField
              control={form.control}
              name="otherSubject"
              disabled={isDisabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("contact.form.custom.label")}</FormLabel>
                  <FormControl>
                    <Input placeholder={t("contact.form.custom.placeholder")} {...field} disabled={isDisabled} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="message"
            disabled={isDisabled}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t("contact.form.message")}</FormLabel>
                <FormControl>
                  <Textarea placeholder={t("contact.form.message-placeholder")} {...field} disabled={isDisabled} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {err && !isDisabled && (
          <div className="flex flex-row gap-1 text-destructive text-xs sm:text-sm text-center justify-center">
            <OctagonAlert className="size-4 sm:size-5" />
            <p>{t("contact.form.errors.send")}.</p>
          </div>
        )}
        {errorCount >= errorLimit && (
          <div className="flex flex-col items-center text-destructive text-sm text-center justify-center">
            <div className="flex flex-row gap-1">
              <CloudAlert className="size-5" />
              <p className="font-semibold">{t("contact.form.errors.server.title")}.</p>
            </div>
            <p>{t("contact.form.errors.server.desc")}.</p>
            <div className="mt-4 text-xs">
              <p>{t("contact.form.errors.server.contact")}:</p>
              <a href="mailto:dev.lucascoco@gmail.com" className="underline">{contactEmail}</a>
            </div>
          </div>
        )}
        {getTotalSubmissionCount() >= submissionLimit && (
          <div className="flex flex-col items-center text-chart-3 text-sm text-center justify-center">
            <div className="flex flex-row gap-1 mb-2">
              <AlertCircle className="size-5" />
              <p className="font-semibold">{t("contact.form.errors.limit.title")}.</p>
            </div>
            <p>{t("contact.form.errors.limit.desc")}.</p>
            <p>{t("contact.form.errors.limit.contact")}:</p>
            <a href="mailto:dev.lucascoco@gmail.com" className="underline">{contactEmail}</a>
          </div>
        )}
        <Button
          type="submit"
          disabled={isDisabled}
          className="w-full cursor-pointer"
          variant="secondary"
        >
          {t("contact.form.submit.button")}
        </Button>
        {/*TODO: Add Captcha*/}
      </form>
    </Form>
  )
}