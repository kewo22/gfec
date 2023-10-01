import { Typography } from "@/app/_components/ui/typography";
import Image from "next/image";
import React from "react";

export default function Aus() {
  return (
    <div className="">
      <div className="bg-aus-banner bg-center bg-cover w-full h-60"></div>

      <div className="p-10">
        <div className="mb-3 block sm:flex items-center">
          <Typography className="h5">CIM</Typography>
          <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
          <Typography className="">
            CANTERBURY INSTITUTE OF MANAGEMENT
          </Typography>
        </div>

        <ul className="!list-disc !list-outside mb-3 px-4 text-left">
          <li>
            <Typography>Master of Business Administration</Typography>
          </li>
          <li>
            <Typography>Bachelor of Business </Typography>
            <Typography variant="small">
              (Accounting, Hospitality Management, Information systems &
              Management)
            </Typography>
          </li>
          <li>
            <Typography>
              Master of Information and Communications Technology
            </Typography>
          </li>
        </ul>

        <Typography className="text-left font-bold">
          Work permit after degree / masters 2 - 4 years.
        </Typography>

        <Typography className="text-left font-bold">
          Intake Now On - July 2023/Jan 2024
        </Typography>

        <Typography className="text-left">
          Choose a program that excites and motivates you, where you will gain
          the knowledge, industry connections and real-world experience needed
          to create the career you want.
          <br />
          <br />
          Canterbury Institute of Management (CIM) encourages the involvement of
          students in its decision-making and strategic planning on
          student-related matters, through student representation on committees
          and advisory groups. Canterbury Institute of Management Student
          Association (CIMSA) is the official student representative body that
          supports student advocacy and sovereignty.
          <br />
          <br />
          At CIMSA, we recognize that personal wellbeing is important for
          students to progress academically with a positive approach to their
          education and campus experience. We are committed to ensuring that all
          students are supported to have a positive student experience whilst
          studying at CIM. It is our aim to bring all students closer together
          and offers a supporting network for them. If students are feeling that
          they need support at any time, or if a personal problem arises that
          affects their studies at CIM, CIMSA could arranged to offer
          individualized advice. CIM Office Bearers represent CIM&apos;s student
          body of diverse range of cultures and age.
          <br />
          <br />
          CIMSA&apos;s role is vital because it ensures the line of
          communication between CIM governing bodies and its student body. CIMSA
          Office Bearers ensure that student views are considered when decisions
          are made about academic matters and other key areas of the student
          experience at CIM. This process gives CIM students the forum to voice
          their views and gives CIM governing bodies valuable feedback from the
          people who matter the most - our students. CIM is continually striving
          to improve the experience of its students. CIMSA Office Bearers will
          be at the forefront of communicating the opinions of the student body.
        </Typography>

        <br />
        <br />

        <Typography className="text-left">
          Registered with Australia&apos;s independent national quality
          assurance and regulatory agency for higher education TEQSA
          <br />
          <br />
          <Typography className="font-bold">
            TEQSA Provider ID: PRV14258
          </Typography>
          <br />
          <br />
          Member of Independent Tertiary Education Council Australia (ITECA) is
          the peak body representing independent providers in the higher
          education and vocational education.
          <br />
          <br />
          <Typography className="text-left font-bold">
            ITECA Membership ID: 215159
          </Typography>
          <Typography className="text-left font-bold">
            CRICOS Provider Code: 03809A
          </Typography>
        </Typography>

        <br />
        <br />

        <div>
          <Typography className="font-bold text-left">Accreditation</Typography>
          <ul className="text-left !list-disc !list-outside mb-3 px-4">
            <li>
              <Typography>
                Tertiary Education Quality and Standards Agency (TEQSA)
              </Typography>
            </li>
            <li>
              <Typography>Australia Qualification Framework (AQF)</Typography>
            </li>
            <li>
              <Typography>
                Independent Tertiary Education Council Australia (ITECA)
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
