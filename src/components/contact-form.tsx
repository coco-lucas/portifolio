import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";



const ContactSchema = () => {
  return z.object({
    name: z.string().min(2, {
      message: "The name must be at least 2 characters.",
    }),
    email: z.email({
      message: "Please enter a valid email address.",
    }),
    subject: z.string().nonempty,
    message: z.string().min(10, {
      message: "The message must have at least 10 characters.",
    }),
  });
}

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactSchema().extend({
      otherSubject: z.string().optional(),
    })),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      otherSubject: "",
      message: "",
    },
  })

  const onSubmit = (data: z.infer<ReturnType<typeof ContactSchema>>) => {
    console.log("Form submitted", data);

    const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

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
        toast.success("Email sent successfully!", { description: "Thank you for reaching out! I will get back to you as soon as possible." });
      })
      .catch((err) => {
        console.error("Error sending email", err);
        toast.error("There was an error sending your message. Please try again later.", {
          descriptionClassName: "!text-muted-foreground",
          description: "If the problem persists, please contact me on my socials.",
        });
      })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
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
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Other Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="Specify other subject" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your Message" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" variant="default" className="w-full cursor-pointer" >
          Send Message
        </Button>
        {/*TODO: Add Captcha*/}
      </form>
    </Form>
  )
}