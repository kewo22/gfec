import React from "react";

import Image from "next/image";

export default function NoData() {
  return (
    <div className="max-h-[500px] min-h-[500px] overflow-x-hidden overflow-y-auto">
      <div className="w-full h-[500px] flex flex-col items-center justify-center">
        <Image
          src="/no-info.svg"
          alt="Next.js Logo"
          width={180}
          height={70}
          priority
        />
        <h1 className="text-base font-bold mt-10">No information yet</h1>
      </div>
    </div>
  );
}
