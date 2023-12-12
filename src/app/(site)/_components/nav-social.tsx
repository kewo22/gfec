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

  const onFbClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100089486356607", "_blank");
  };

  const onInstagramClick = () => {
    window.open("https://instagram.com/gfe_consultancy?igshid=MTk0NTkyODZkYg==", "_blank");
  };

  const onInClick = () => {
    window.open("https://www.linkedin.com/company/gordon-foreign-education-consultancy-pvt-ltd/", "_blank");
  };

  return (
    <div className={wrapperClass}>
      <button
        className="flex items-center justify-center relative transition-all sm-btn"
        onClick={onFbClick}
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" className={iconClass} />
      </button>
      <button
        className="flex items-center justify-center relative transition-all sm-btn"
        onClick={onInstagramClick}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" className={iconClass} />
      </button>
      <button
        className="flex items-center justify-center relative transition-all sm-btn"
        onClick={onInClick}
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" className={iconClass} />
      </button>
    </div>
  );
}
