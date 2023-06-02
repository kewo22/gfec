import React from "react";

export default function About() {
  return (
    <section className="mb-20 mx-7 sm:mx-12 lg:mx-24 xl:mx-40">
      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
        About Gordon Foreign Educational Consultancy
        {/* <span className="hidden sm:inline text-primary">
          &nbsp;Gordon Foreign Educational Consultancy
        </span> */}
        {/* <span className="sm:hidden text-primary">&nbsp;GEFC</span> */}
      </h1>

      <div className="xl:flex xl:gap-8">
        <div className="mb-4 xl:mb-0 xl:w-1/2 flex items-center">
          <video autoPlay={true} controls={true} src="https://gfce.s3.amazonaws.com/vid.mp4" width="100%" />
          {/* <video autoPlay={true} controls={true} src="/vid.mp4" width="100%" /> */}
        </div>

        <div className="xl:xl:w-1/2">
          <p className="mb-4 font-light text-base leading-8 tracking-tight text-gray-900 text-justify bg-white h-full p-10 flex items-center justify-center">
            We understand that the prospect of higher education can be daunting,
            but with our help, you can confidently navigate the college and
            university landscape. Our counselors have years of experience
            working with students just like you, and they have the knowledge and
            expertise to help you identify your strengths, interests, and career
            goals.
          </p>

          {/* <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify">
            Boomerang International Educational Services is registered with the
            Office of Consumer and Business Affairs of South Australia, and is
            run as ASIC registered Company in Australia. The company is well
            aware of the Education Services for Overseas Students Act 2000 and
            the obligations of the providers in respect to the requirements of
            the act. Our values are Honesty, Good Communication and Good Service
            to Students.
          </p> */}
        </div>
      </div>
    </section>
  );
}
