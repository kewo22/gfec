import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../page.module.css";
import LinkCards from "../components/link-cards";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <section className="mb-20 lg:mt-10">
      <div className={`${styles.imageContainer} mb-10`}>
        <Image
          src="/about-banner.jpg"
          alt="Illustration"
          fill
          priority
          className={`opacity-100 sm:opacity-100 ${styles.image} ${styles.aboutBannerImage}`}
        />
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5">
        Who We Are?
        {/* <span className="hidden sm:inline text-primary">
          &nbsp;Gordon Foreign Educational Consultancy
        </span> */}
        {/* <span className="sm:hidden text-primary">&nbsp;GEFC</span> */}
      </h1>

      <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify mb-10 px-10 lg:px-24 xl:px-52">
        We believe that access to quality education is a fundamental right, and
        we&apos;re proud to be part of a community of organizations that share
        this vision. <br /> <br /> As a leading overseas educational
        consultation service provider in Sri Lanka, we understand the importance
        of providing reliable and comprehensive guidance to students who are
        looking to pursue higher education abroad. We recognize that studying
        overseas can be a daunting prospect, with numerous challenges and
        uncertainties that can make the process overwhelming. <br /> <br /> At
        GFEC we&apos;re driven by a passion for education and a commitment to
        ensuring that every student has access to the best possible
        opportunities to achieve their goals. We&apos;re proud to be a leading
        overseas educational consultation service provider in Sri Lanka, and
        we&apos;re committed to continuing to provide exceptional guidance and
        support to students for years to come.
      </p>

      <div className="flex flex-col sm:flex-row sm:gap-5 mb-10 px-10 lg:px-24 xl:px-52">
        <div className="bg-primary p-5 mb-5 sm:mb-0 rounded-md sm:flex-grow shadow-lg shadow-yellow-500/50">
          <h1 className="text-2xl font-bold leading-normal tracking-tight text-center text-white mb-2">
            Our Vision
          </h1>
          <p className="font-light text-base leading-8 tracking-tight text-white text-center">
            Our Vision is to be a market leader and most reliable organization
            in International Education Consultation Services in Sri Lanka.
          </p>
        </div>
        <div className="bg-primary p-5 rounded-md sm:flex-grow shadow-lg shadow-yellow-500/50">
          <h1 className="text-2xl font-bold leading-normal tracking-tight text-center text-white mb-2">
            Our Mission
          </h1>
          <p className="font-light text-base leading-8 tracking-tight text-white text-center">
            Our Mission is to provide accurate information, professional service
            and maintain the highest level success rate in international
            education student enrollments.
          </p>
        </div>
      </div>

      <div className="px-10">
        <p className="text-base xl:text-xl font-bold leading-normal tracking-tight text-center text-gray-900 mb-5 px-0 sm:px-24 md:px-48 lg:px-96">
          We are committed to providing the best possible service to our clients
          by following the following principles.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 lg:gap-0">
          <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify sm:text-center lg:mx-10">
            Provide accurate information so that you can make informed decisions
            about your education needs
          </p>
          <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify sm:text-center lg:mx-10 border-0 sm:border-l-2 sm:border-r-2 border-l-primary border-r-primary px-0 sm:px-2 lg:px-10">
            Provide professional service by providing clear, concise and
            accurate information on every aspect of your study abroad
            experience.
          </p>
          <p className="font-light text-base leading-8 tracking-tight text-gray-900 text-justify sm:text-center lg:mx-10">
            Maintain the highest level of success rate by providing quality
            service and support for all our students throughout their study
            abroad experience.
          </p>
        </div>
      </div>
    </section>
  );
}
