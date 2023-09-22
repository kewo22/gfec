"use client";

import { useLayoutEffect, useState } from "react";

const useNavigationHeight = () => {
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    const navigationBar = document.querySelector("#main-nav");
    setHeight(navigationBar!.clientHeight);
  }, []);

  return { height };
};

export default useNavigationHeight;
