import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

type NavSocialProps = {
  iconClass?: string;
  wrapperClass: string;
};

export default function NavSocial(props: NavSocialProps) {
  const { wrapperClass, iconClass = "text-white" } = props;
  return (
    <div className={wrapperClass}>
      <button className="flex items-center justify-center relative transition-all sm-btn">
        <FontAwesomeIcon icon={faFacebook} size="2x" className={iconClass} />
      </button>
      <button className="flex items-center justify-center relative transition-all sm-btn">
        <FontAwesomeIcon icon={faInstagram} size="2x" className={iconClass} />
      </button>
      <button className="flex items-center justify-center relative transition-all sm-btn">
        <FontAwesomeIcon icon={faLinkedin} size="2x" className={iconClass} />
      </button>
    </div>
  );
}
