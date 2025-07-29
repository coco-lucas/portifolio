import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { AlertCircle, CheckCheckIcon, CloudAlert, OctagonAlert } from "lucide-react";


//TODO: Rewatch the video about forms && make the code not verify every input change

const ContactSchema = z.object({
  name: z.string().nonempty({
    message: "Name is required.",
  }).min(2, {
    message: "The name must be at least 2 characters.",
  }),
  email: z.string().nonempty({
    message: "Email is required.",
  }).email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().nonempty({
    message: "Please select a subject.",
  }),
  otherSubject: z.string().optional(),
  message: z.string().nonempty({
    message: "Message is required.",
  }).min(10, {
    message: "The message must have at least 10 characters.",
  }),
});

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [err, setErr] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const submissionLimit = 2;
  const errorLimit = 4;

  const getTotalSubmissionCount = () => {
    const cookieMatch = document.cookie.match(/(?:^|;\s*)totalSubmissions=(\d+)/);
    return cookieMatch ? parseInt(cookieMatch[1], 10) : 0;
  };

  const incrementTotalSubmissionCount = () => {
    const currentCount = getTotalSubmissionCount();
    const newCount = currentCount + 1;
    document.cookie = `totalSubmissions=${newCount}; path=/; max-age=88000`;
  };

  const totalSubmissions = getTotalSubmissionCount();
  const isDisabled = (errorCount >= errorLimit || totalSubmissions >= submissionLimit);

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
    console.log("Form submitted", data);

    if (totalSubmissions >= 5) {
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
        console.log("Email sent successfully", res);
        form.reset();
        setIsSubmitted(true);

        setErr(false);
        incrementTotalSubmissionCount();

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Error sending email", err);
        setErr(true);
        setErrorCount(errorCount + 1);
        console.error("Error count incremented:", errorCount + 1);
      })
  }

  return (
    <>
      {isSubmitted && (
        <div className="rounded-xl absolute inset-0 z-10 flex items-center justify-center bg-background/90 backdrop-blur-xs">
          <Card className="min-w-80 sm:min-w-fit mx-4 animate-in fade-in-0 zoom-in-95 duration-300">
            <CardContent className="text-center">
              <div>
                <CheckCheckIcon className="mx-auto size-12 text-green-500" />
              </div>
              <h3 className="text-lg text-center font-semibold mb-1">Message Sent Successfully!</h3>
              <p className="text-sm text-muted-foreground">
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6 sm:space-y-4">
            <FormField
              control={form.control}
              name="name"
              disabled={isDisabled}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} disabled={isDisabled} />
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
                    <Input placeholder="Your Email" type="email" {...field} disabled={isDisabled} />
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
                <FormItem className={form.watch("subject") === "other" ? "text-ring" : "text-foreground"}>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value} disabled={isDisabled}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="project">Project Collaboration</SelectItem>
                        <SelectItem value="job">Job Role</SelectItem>
                        <SelectItem value="inquiry">General Inquiry</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("subject") === "other" && (
              <FormField
                control={form.control}
                name="otherSubject"
                disabled={isDisabled}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Specify custom subject" {...field} disabled={isDisabled} />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your Message" {...field} disabled={isDisabled} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {err && !isDisabled && (
            <div className="flex flex-row gap-1 text-destructive text-xs sm:text-sm text-center justify-center">
              <OctagonAlert className="size-4 sm:size-5" />
              <p>Error sending e-mail. Please try again.</p>
            </div>
          )}
          {errorCount >= errorLimit && (
            <div className="flex flex-col items-center text-destructive text-sm text-center justify-center">
              <div className="flex flex-row gap-1">
                <CloudAlert className="size-5" />
                <p className="font-semibold">Error connecting to the server.</p>
              </div>
              <p>Please, refresh the page and try again.</p>
              <div className="mt-4 text-xs">
                <p>If you need to reach me, contact me at:</p>
                <a href="mailto:dev.lucascoco@gmail.com" className="underline">dev.lucascoco@gmail.com</a>
              </div>
            </div>
          )}
          {getTotalSubmissionCount() >= submissionLimit && (
            <div className="flex flex-col items-center text-chart-3 text-sm text-center justify-center">
              <div className="flex flex-row gap-1 mb-2">
                <AlertCircle className="size-5" />
                <p className="font-semibold">Submission limit reached.</p>
              </div>
              <p>You have reached the maximum number of submissions allowed.</p>
              <p>Please contact me directly at:</p>
              <a href="mailto:dev.lucascoco@gmail.com" className="underline">dev.lucascoco@gmail.com</a>
            </div>
          )}
          <Button
            type="submit"
            disabled={isDisabled}
            className="w-full cursor-pointer"
          >
            Send Message
          </Button>
          {/*TODO: Add Captcha*/}
        </form>
      </Form>
    </>
  )
}