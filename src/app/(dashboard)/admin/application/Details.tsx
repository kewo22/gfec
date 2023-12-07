import { Typography } from "@/app/_components/ui/typography";
import { ApplicationFormModel } from "@/app/_interfaces/application-form";
import React from "react";

interface DetailsProps {
  row: ApplicationFormModel | null;
}

export default function Details(props: DetailsProps) {
  const { row } = props;

  if (!row) {
    return <>NO DATA</>;
  }

  return (
    <section>
      <div className="flex flex-col gap-3">
        <Typography>O/L Results</Typography>
        <div className="flex flex-row justify-between">
          <Typography variant="label">School</Typography>
          <Typography variant="label">
            {row.olSchool || <> &#9866; </>}
          </Typography>
        </div>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Year / Type</Typography>
          <Typography variant="label">
            {row.olYear || <> &#9866; </>} /
            {row.olType || <> &#9866; </>}
          </Typography>
        </div>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Mathematics / English</Typography>
          <Typography variant="label">
            {row.olMathematics || <> &#9866; </>} /
            {row.olEnglish || <> &#9866; </>}
          </Typography>
        </div>
        <div className="">

        </div>
      </div>
    </section>
  );
}
