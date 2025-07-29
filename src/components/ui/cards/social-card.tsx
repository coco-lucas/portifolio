import type { JSX } from "react";
import { Button } from "../button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../dialog";
import ContactForm from "../../contact-form";


interface SocialCardProps {
  items: { icon: JSX.Element; name: string; link: string }[];
}

export default function SocialCard({ items }: SocialCardProps) {
  const col1 = items.slice(0, 2);
  const col2 = items.slice(2, 4);

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="items-center w-full text-base sm:text-lg h-10 sm:h-12 mb-2 justify-center rounded-xl cursor-pointer">
            <Mail className="size-5" /> Send email
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Send me a message!</DialogTitle>
          <DialogDescription>
            Fill out the form below to get in touch with me.
          </DialogDescription>
          <ContactForm />
        </DialogContent>
      </Dialog>
      <div className="grid grid-cols-2 gap-4">
        <div className="gap-2">
          {col1.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              <Button className="items-center text-base sm:text-lg w-full sm:min-w-45 h-10 sm:h-12 mb-2 rounded-xl cursor-pointer" variant="secondary">
                {item.icon}
                {item.name}
              </Button>
            </a>
          ))}
        </div>
        <div className="gap-2">
          {col2.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              <Button className="items-center text-base sm:text-lg w-full sm:min-w-45 h-10 sm:h-12 mb-2 rounded-xl cursor-pointer" variant="secondary">
                {item.icon}
                {item.name}
              </Button>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}