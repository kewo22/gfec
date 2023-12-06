import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@/app/_components/ui/typography";

export default function Loader() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-5">
      <FontAwesomeIcon icon={faSpinner} size="3x" spin />
      <Typography variant="h5">Fetching Data</Typography>
    </div>
  );
}
