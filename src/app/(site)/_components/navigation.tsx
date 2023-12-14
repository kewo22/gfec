"use client";

import React, { useRef } from "react";

import Image from "next/image";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavLinks from "./nav-links";
import NavContactRibbon from "./nav-contact-ribbon";
import NavSocial from "./nav-social";
import NavActions from "./nav-actions";
import MobileNav from "./mobile-nav";
import { Typography } from "@/app/_components/ui/typography";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import GetInTouchForm, { GetInTouchFormHandle } from "./get-in-touch-form";
import { Modal } from "@/app/_components/ui/modal";

import gfecTrans from "../../../../public/comp/GFEC-Trans.png";

export default function Navigation() {
  const modalRef = useRef(null);
  const getInTouchFormRef = useRef<GetInTouchFormHandle | null>(null);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "nav-slider",
  };

  const onOpenModel = () => {
    if (modalRef && modalRef.current) {
      (modalRef.current as HTMLDialogElement).showModal();
    }
  };

  const Items = () => {
    return (
      <>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-[90%] max-w-[1000px] flex flex-col gap-10">
          <div className="min-h-[160px]">
            <Image
              src={gfecTrans}
              alt="GFEC-Trans-mobile-lg"
              width={210}
              height={160}
              priority
              className="!hidden lg:!block mx-auto"
            />
            <Image
              src={gfecTrans}
              alt="GFEC-Trans-mobile-sm"
              width={170}
              height={140}
              priority
              className="!block lg:!hidden mx-auto"
            />
          </div>

          <NavLinks />

          <div className="relative mx-5 lg:mx-0 flex-grow">
            <Image
              src="/comp/arrow-shape.webp"
              alt="arrow-shape-anim"
              width={222}
              height={92}
              priority
              className="!hidden lg:!block absolute left-[38%] top-[-5%] animate-bounce"
            />

            <Typography
              variant="xl"
              className="text-white !leading-[3.5rem] lg:!leading-[5.5rem]"
            >
              Considering <br /> Studying Abroad ?
            </Typography>

            <div className="flex flex-col lg:flex-row items-start justify-start gap-5 my-10">
              <div className="flex flex-row gap-2 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className="text-secondary"
                />
                <Typography variant="h5" className="text-white font-normal">
                  Free Consultation
                </Typography>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className="text-secondary"
                />
                <Typography variant="h5" className="text-white font-normal">
                  Relocate in 45 Days
                </Typography>
              </div>

              <div className="flex flex-row gap-2 items-center justify-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  size="lg"
                  className="text-secondary"
                />
                <Typography variant="h5" className="text-white font-normal">
                  Relocate in 45 Days
                </Typography>
              </div>
            </div>

            <NavActions openModel={onOpenModel} />
          </div>

          <NavSocial wrapperClass="flex flex-row gap-8 items-center justify-start mx-5 lg:mx-0" />
        </div>
      </>
    );
  };

  const onCloseModal = () => {
    if (getInTouchFormRef && getInTouchFormRef.current)
      getInTouchFormRef.current.resetForm();
  };

  return (
    <nav
      className={`min-h-[900px] h-[900px] flex flex-col items-center relative`}
      id="main-nav"
      ref={ref}
    >
      <section className="w-full h-auto">
        <NavContactRibbon />
      </section>

      <Slider {...settings}>
        <div className="bg-home-banner-1 bg-center bg-cover w-full min-h-[900px] h-[900px] banner-img">
          <Items />
        </div>
        <div className="bg-home-banner-2 bg-center bg-cover w-full min-h-[900px] h-[900px] banner-img">
          <Items />
        </div>
      </Slider>

      <MobileNav isMainNavInView={inView} />

      <Modal onClose={onCloseModal} ref={modalRef}>
        <Typography variant="h3" className="my-5 mx-auto text-center">
          Get in Touch
        </Typography>
        <GetInTouchForm ref={getInTouchFormRef} />
      </Modal>
    </nav>
  );
}
