"use client";

import { SocialIcon } from 'react-social-icons';

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
        <SocialIcon url="https://facebook.com" onClick={(event) => event.preventDefault()} />
      </button>
      <button
        className="flex items-center justify-center relative transition-all sm-btn"
        onClick={onInstagramClick}
      >
        <SocialIcon url="https://instagram.com" onClick={(event) => event.preventDefault()} />

      </button>
      <button
        className="flex items-center justify-center relative transition-all sm-btn"
        onClick={onInClick}
      >
        <SocialIcon url="https://linkedin.com" onClick={(event) => event.preventDefault()} />
      </button>
    </div>
  );
}
