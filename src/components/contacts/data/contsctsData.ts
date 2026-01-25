import { AiOutlineMail, AiOutlineGithub, AiOutlineEnvironment } from "react-icons/ai";
import { SlSocialLinkedin } from "react-icons/sl";

export type ContactItem = {
  id: string;
  label: string;
  value: string;
  href: string;
  Icon?: React.ComponentType; 
};

export const CONTACTS: ContactItem[] = [
  { id: "email", 
    label: "Email", 
    value: "alexgush06@gmail.com", 
    href: "mailto:alexgush06@gmail.com", 
    Icon: AiOutlineMail 
},

  { id: "linkedin", 
    label: "LinkedIn", 
    value: "alex-gutman", 
    href: "https://www.linkedin.com/in/alexander-gutman-824b57387/", 
    Icon: SlSocialLinkedin
},

  { id: "location", 
    label: "Location", 
    value: "Petah Tikva, Israel", 
    href: "https://maps.google.com/?q=Petah+Tikva", 
    Icon: AiOutlineEnvironment 
},

  { id: "github", 
    label: "GitHub", 
    value: "sashagutman", 
    href: "https://github.com/sashagutman", 
    Icon: AiOutlineGithub },
];
