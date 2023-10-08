import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function NextIcon(props: any) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      size="2x"
      className={className}
      style={{
        ...style,
        display: "block",
        background: "none",
        color: "white",
      }}
      onClick={onClick}
    />
  );
}
