"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Bars3Icon, PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";

import MobileNavigation from "./mobile-nav-bar";
import { CountriesRoute, NavItems } from "./constants/nav-items.constants";
import { Dropdown, Modal } from "flowbite-react";
import useNavigationEvent from "./hooks/useNavigationEvent";
import GetInTouch from "./components/get-in-touch";

export default function Navigation() {
  const router = useRouter();
  const { url } = useNavigationEvent();
  const plainRoute = url.split("/")[1];

  const emails = (process.env.EMAILS as unknown as string)?.split(",") || [];
  const phoneNos = (process.env.PHONE as unknown as string)?.split(",") || [];

  const [mobileNavPositionClass, setMobileNavPositionClass] =
    useState("left-full");

  const [isModelOpen, setIsModelOpen] = useState(false);

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
    const mailEL = document.querySelector('#main'); // app/page.tsx
    const getInTouchEl = mailEL?.querySelector("#get-in-touch");

    if (mailEL && getInTouchEl) {
      getInTouchEl?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      setIsModelOpen(true);
    }
  };

  const onModelClose = () => {
    setIsModelOpen(false);
  };

  const onLogoClick = () => {
    router.push("/");
  };

  return (
    <>
      <nav
        id="main-nav"
        className="relative bg-white flex sm:flex-col w-full border-b-2 border-b-primary"
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
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Gordon-Foreign-Educational-Consultancy-Pvt-Ltd/100089486356607/"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-base text-white icon-facebook"></span>
                  </span>
                </a>

                <a
                  target="_blank"
                  href="https://instagram.com/gfe_consultancy?igshid=MzRlODBiNWFlZA=="
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-base text-white icon-instagram"></span>
                  </span>
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/gordon-foreign-education-consultancy-pvt-ltd/"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 p-2 rounded-xl bg-primary flex items-center justify-center">
                    <span className="text-base text-white icon-linkedln"></span>
                  </span>
                </a>
              </div>
            </section>

            <div className="hidden sm:flex flex-row">
              {NavItems.map((item, i) => {
                return (
                  <div key={i} className="flex items-center justify-center">
                    {item.type === "link" && (
                      <Link
                        key={item.text}
                        className={`${
                          item.class
                        } transition-all ease-in-out border-b-2 ${
                          plainRoute === item.route
                            ? "border-primary"
                            : "border-transparent"
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

      <Modal id="get-in-touch-model" show={isModelOpen} onClose={() => onModelClose()}>
        <Modal.Header className="flex items-center">
          <h1 className="font-bold">Get in touch</h1>
          <p className="font-light text-sm text-gray-900">
            Thank you for your interest in our organization and the services we
            offer. We would be more than happy to arrange a FREE information
            session for you.
          </p>
        </Modal.Header>
        <Modal.Body>
          <GetInTouch isOpenInModel={true} />
        </Modal.Body>
        {/* <Modal.Footer>
          <button>I accept</button>
          <button>Decline</button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
