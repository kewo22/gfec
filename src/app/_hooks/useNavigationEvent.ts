"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const useNavigationEvent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const url = useMemo(() => {
    return pathname + searchParams.toString();
  }, [pathname, searchParams]);

  return { url };
};

export default useNavigationEvent;
