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
          <Button variant="secondary" className="items-center w-full text-lg sm:text-xl h-10 sm:h-12 mb-1 sm:mb-2 justify-center rounded-xl cursor-pointer">
            <Mail className="size-6" /> Email me
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
      <motion.h3
        className="text-lg sm:text-xl font-normal -mb-2 mt-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        Or connect with me on
      </motion.h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="gap-2">
          {col1.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              <Button className="items-center text-sm sm:text-base w-full sm:min-w-45 h-8 sm:h-10 mt-2 rounded-sm cursor-pointer" variant="secondary">
                {item.icon}
                {item.name}
              </Button>
            </a>
          ))}
        </div>
        <div className="gap-2">
          {col2.map((item) => (
            <a href={item.link} target="_blank" key={item.name}>
              <Button className="items-center text-sm sm:text-base w-full sm:min-w-45 h-8 sm:h-10 mt-2 rounded-sm cursor-pointer" variant="secondary">
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