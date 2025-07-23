import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from "@emailjs/browser";

import { Card, CardContent } from "./ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";



const ContactSchema = () => {
  return z.object({
    name: z.string().min(2, {
      message: "The name must be at least 2 characters.",
    }),
    email: z.email({
      message: "Please enter a valid email address.",
    }),
    subject: z.string(),
    message: z.string().min(10, {
      message: "The message must have at least 10 characters.",
    }),
  });
}

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(ContactSchema()),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (data: z.infer<ReturnType<typeof ContactSchema>>) => {
    console.log("Form submitted", data);



    // const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    // const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    // const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const serviceId = "service_xnjnoif"
    const templateId = "template_epodv7j"
    const publicKey = "tZK_400PusKWZziD7"

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      console.error("Service ID:", serviceId);
      console.error("Template ID:", templateId);
      console.error("Public Key:", publicKey);
      return;
    }

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
      })
      .catch((err) => {
        console.error("Error sending email", err);
        console.error("Service ID:", serviceId);
        console.error("Template ID:", templateId);
        console.error("Public Key:", publicKey);
      });
  }

  return (
    <Card className="mt-4 border-none max-w-150 min-w-130">
      <CardContent>
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
                      <Input placeholder="Your Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}