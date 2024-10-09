"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/_components/ui/button";

export default function PromoPopUp() {
  const router = useRouter();

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
      document.body.classList.add('!overflow-hidden');
      setTimeout(() => {
        document.querySelector("#ad-img")?.classList.replace('scale-0', 'scale-1')
        document.querySelector(".ad-btn")?.classList.replace('scale-0', 'scale-1')
      }, 500);
    }, 1000);
  }, [])

  const onCloseAd = () => {
    document.querySelector("#ad-img")?.classList.replace('scale-1', 'scale-0')
    document.querySelector(".ad-btn")?.classList.replace('scale-1', 'scale-0')
    setTimeout(() => {
      setIsShow(false)
      document.body.classList.remove('!overflow-hidden')
    }, 500);
  }

  const onRegisterClick = () => {
    document.querySelector("#ad-img")?.classList.replace('scale-1', 'scale-0')
    document.querySelector(".ad-btn")?.classList.replace('scale-1', 'scale-0')
    setTimeout(() => {
      setIsShow(false)
      document.body.classList.remove('!overflow-hidden')
    }, 500);
    router.push('/open-day-register', { scroll: true })
  }

  if (isShow) {
    return (
      <div className="fixed top-0 right-0 w-full h-full z-50 flex flex-col items-center justify-center gap-2 bg-[#000000a1]">
        <button className="absolute top-2 right-2 bg-white h-10 w-10 rounded-full p-2">
          <FontAwesomeIcon
            icon={faClose}
            size="1x"
            className="text-black cursor-pointer hover:text-secondary"
            onClick={() => onCloseAd()}
          />
        </button>
        <Image
          src="/ad-img.webp"
          alt="ad-img"
          width="0"
          height="0"
          sizes="100vw"
          priority
          className="w-[calc(100%-10%)] md:w-[calc(100%-40%)] lg:w-[calc(100%-55%)] scale-0 transition-all ease-in-out duration-500"
          id="ad-img"
        />

        <Button
          text="Click to register"
          size="md"
          customClass="w-fit bg-white text-secondary scale-0 transition-all ease-in-out duration-500 ad-btn" 
          onClick={() => {
            onRegisterClick();
          }}
        />

        {/* <button className="bg-white p-5 text-primary rounded" onClick={() => onRegisterClick()}>
          Click to register
        </button> */}
      </div>
    );
  }

}
