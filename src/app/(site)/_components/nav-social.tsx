"use client";

import { Facebook, Instagram, Linkedin, type LucideIcon } from "lucide-react";

type NavSocialProps = {
  iconClass?: string;
  wrapperClass: string;
  variant?: "outline" | "solid";
};

const SOCIALS: { name: string; url: string; icon: LucideIcon }[] = [
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=100089486356607", icon: Facebook },
  { name: "Instagram", url: "https://instagram.com/gfe_consultancy?igshid=MTk0NTkyODZkYg==", icon: Instagram },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/gordon-foreign-education-consultancy-pvt-ltd/",
    icon: Linkedin,
  },
];

export default function NavSocial(props: NavSocialProps) {
  const { wrapperClass, iconClass = "text-exam-ink", variant = "outline" } = props;

  if (variant === "solid") {
    return (
      <div className={wrapperClass}>
        {SOCIALS.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GFEC on ${social.name}`}
            className="group flex items-center justify-center w-12 h-12 rounded-full bg-exam-ink transition-all duration-300 hover:bg-exam-gold hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-8px_rgba(201,151,46,0.5)]"
          >
            <social.icon
              size={19}
              strokeWidth={1.75}
              className="text-exam-gold transition-colors duration-300 group-hover:text-exam-ink"
            />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={wrapperClass}>
      {SOCIALS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GFEC on ${social.name}`}
          className={`group flex items-center justify-center w-9 h-9 rounded-full border border-current/20 transition-colors duration-300 hover:border-exam-gold ${iconClass}`}
        >
          <social.icon
            size={15}
            strokeWidth={1.75}
            className="transition-colors duration-300 group-hover:text-exam-gold"
          />
        </a>
      ))}
    </div>
  );
}
