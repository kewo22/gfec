"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PromoPopUp() {

  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true)
      document.body.classList.add('!overflow-hidden');
      document.querySelector("#ad-img")?.classList.replace('scale-0', 'scale-1')
    }, 1000);
  }, [])

  const onCloseAd = () => {
    document.querySelector("#ad-img")?.classList.replace('scale-1', 'scale-0')
    setTimeout(() => {
      setIsShow(false)
      document.body.classList.remove('!overflow-hidden')
    }, 500);
  }

  if (isShow) {
    return (
      <div className="fixed top-0 right-0 w-full h-full z-50 flex items-center justify-center bg-[#000000a1]">
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
      </div>
    );
  }

}
