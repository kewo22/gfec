import React from "react";
import Container from "../_components/layouts/container";
import SectionTitle from "../_components/section-title";
import Image from "next/image";
import { Typography } from "@/app/_components/ui/typography";
import { COUNTRIES } from "../_constants/countries.constants";

export default function Destination() {
  return (
    <section className="bg-slate-100">
      <Container className="relative mx-5 xl:mx-auto py-20">
        <SectionTitle title="Ready to Travel the World ?" />
        <div className="flex flex-row">
          <div className="flex-[0_0_300px] bg-slate-300">
            <ul className="countries-details">
              {COUNTRIES.map((country, i) => {
                return (
                  <li
                    className="active flex flex-row justify-between bg-slate-200 h-24"
                    key={i}
                  >
                    <Typography className="country-name relative grid place-items-center pl-5 font-bold">
                      {country.country}
                    </Typography>
                    <div
                      className={`bg-${country.flagBg}-flag bg-center bg-cover h-14 w-14 rounded-full my-auto mr-5`}
                    ></div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex-grow">wqdwq</div>
        </div>
      </Container>
    </section>
  );
}
