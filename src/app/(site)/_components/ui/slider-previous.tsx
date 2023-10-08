import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function PrevIcon(props: any) {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronRight}
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
