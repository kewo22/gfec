import React from "react";

import ContainerNew from "./layouts/container-new";
import { Typography } from "../../_components/ui/typography";
import SectionTitle from "./section-title";

import SummaryCounter from "./summary-counter";

export default function SummaryCounterGroup() {

  return (
    <ContainerNew className="h-auto py-10 flex flex-col justify-center">

      <div className="w-full flex justify-between items-center flex-col xl:flex-row gap-10">
        <div className="w-full sm:w-[560px] text-justify flex flex-col gap-2 px-2 py-4">
          <Typography variant="h3" className="text-primary text-center xl:text-left">Providing best visa services since 2021</Typography>
          <Typography variant="p" className="text-justify">We understand that the prospect of higher education can be daunting, but with our help, you can confidently navigate the college and university landscape. Our counselors have years of experience working with students just like you, and they have the knowledge and expertise to help you identify your strengths, interests, and career goals.</Typography>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="text-center">
            <SummaryCounter maxCount={8} className='text-8xl sm:text-9xl' />
            <Typography variant="h5">Countries</Typography>
          </div>
          <div className="text-center">
            <SummaryCounter maxCount={12} className='text-8xl sm:text-9xl' />
            <Typography variant="h5">Universities</Typography>
          </div>
          <div className="text-center">
            <SummaryCounter maxCount={80} className='text-8xl sm:text-9xl' />
            <Typography variant="h5">Courses</Typography>
          </div>
          <div className="text-center">
            <SummaryCounter maxCount={20} className='text-8xl sm:text-9xl' />
            <Typography variant="h5">Students</Typography>
          </div>
        </div>
      </div>

    </ContainerNew>
  );
}
