"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Bars3Icon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";

import MobileNavigation from "./mobile-nav-bar";
import { CountriesRoute, NavItems } from "./constants/nav-items.constants";
import { Dropdown } from "flowbite-react";
import useNavigationEvent from "./hooks/useNavigationEvent";

export default function Navigation() {
  const router = useRouter();
  const { url } = useNavigationEvent();
  const plainRoute = url.split("/")[1];

  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  const [mobileNavPositionClass, setMobileNavPositionClass] =
    useState("left-full");

  const onMenuClick = () => {
    const body = document.querySelector("body");
    body!.style.overflow = "hidden";
    setMobileNavPositionClass("left-0");
  };

  const onCloseMenu = () => {
    const body = document.querySelector("body");
    body!.style.overflow = "auto";
    setMobileNavPositionClass("left-full");
  };

  const onRequestCallbackClick = () => {
    const getInTouchEl = document.querySelector("#get-in-touch");
    getInTouchEl?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const onLogoClick = () => {
    router.push("/");
  };

  return (
    <>
      <nav
        id="main-nav"
        className="relative bg-white flex sm:flex-col w-full border-b-2"
      >
        <div className="hidden sm:flex justify-between bg-primary text-accent py-1 pl-1 lg:pl-5 lg:pr-3">
          <div>
            {emails?.map((mail, i) => {
              return (
                <div key={i} className="inline">
                  <a
                    className="text-xs lg:text-sm font-light text-white"
                    href={`tel:${mail}`}
                  >
                    {mail} &nbsp;
                  </a>
                </div>
              );
            })}
          </div>

          <div>
            {phoneNos?.map((phone, i) => {
              return (
                <div key={i} className="inline">
                  <a
                    className="text-xs lg:text-sm font-light text-white"
                    href={`tel:${phone}`}
                  >
                    {phone} &nbsp;
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center sm:justify-between w-full px-5 lg:px-20 xl:px-36">
          <div role="button" onClick={onLogoClick}>
            <Image
              src="/GFEC-Trans.png"
              alt="Next.js Logo"
              width={170}
              height={120}
              priority
              className=""
            />
          </div>
          <div className="flex flex-col items-end">
            <section className="hidden sm:flex mb-3">
              <div className="flex items-center">
                <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-base text-white icon-facebook"></span>
                </span>
                <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-base text-white icon-instagram"></span>
                </span>
                <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-base text-white icon-linkedln"></span>
                </span>
              </div>
            </section>

            <div className="hidden sm:flex flex-row">
              {NavItems.map((item, i) => {
                return (
                  <div key={i} className="flex items-center justify-center">
                    {item.type === "link" && (
                      <Link
                        key={item.text}
                        className={`${item.class} transition-all ease-in-out ${
                          plainRoute === item.route
                            ? "border-b-4 border-primary"
                            : "border-b-4 border-transparent"
                        } `}
                        href={item.route}
                        onClick={onCloseMenu}
                      >
                        {item.text}
                      </Link>
                    )}
                    {/* {item.type === "popover" && (
                    <Dropdown
                      key={i}
                      label={item.text}
                      inline={true}
                      arrowIcon={false}
                    >
                      {CountriesRoute.map((country, i) => {
                        return (
                          <Dropdown.Item key={i}>
                            <Link href={country.route}>{country.country}</Link>
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown>
                  )} */}
                  </div>
                );
              })}

              <div
                className="bg-primary ml-5 px-5 py-2 rounded-lg text-white flex items-center text-sm"
                role="button"
                onClick={onRequestCallbackClick}
              >
                <PhoneArrowDownLeftIcon className="h-4 w-4 text-white mr-3" />
                Request a callback
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <PhoneArrowDownLeftIcon
            className="h-6 w-6 mr-5 ml-auto sm:hidden"
            role="button"
            onClick={onRequestCallbackClick}
          />
          <Bars3Icon
            onClick={onMenuClick}
            className="h-10 w-10 sm:hidden mr-5"
          />
        </div>
      </nav>
      <MobileNavigation
        mobileNavPositionClass={mobileNavPositionClass}
        onCloseMenu={onCloseMenu}
      />
    </>
  );
}
