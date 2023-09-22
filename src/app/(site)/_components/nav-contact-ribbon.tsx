import React from "react";

import { Typography } from "@/app/_components/ui/typography";

export default function NavContactRibbon() {
  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  return (
    <section className="hidden sm:flex justify-between bg-secondary py-1 px-2">
      <div className="flex items-center">
        {emails?.map((mail, i) => {
          return (
            <div className="flex flex-row items-center" key={i}>
              <a href={`tel:${mail}`}>
                <Typography
                  variant="small"
                  className="text-white hover:text-primary hover:underline transition-all"
                >
                  {mail}
                </Typography>
              </a>
              {i !== emails.length - 1 && (
                <span className="mx-2 text-white">|</span>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center">
        {phoneNos?.map((phone, i) => {
          return (
            <div className="flex flex-row items-center" key={i}>
              <a href={`tel:${phone}`}>
                <Typography
                  variant="small"
                  className="text-white hover:text-primary hover:underline transition-all"
                >
                  {phone}
                </Typography>
              </a>
              {i !== phoneNos.length - 1 && (
                <span className="mx-2 text-white">|</span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
