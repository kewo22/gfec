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
    <section className="h-full overflow-auto p-3">
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
            {row.olYear || <> &#9866; </>} / {row.olType || <> &#9866; </>}
          </Typography>
        </div>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Mathematics / English</Typography>
          <Typography variant="label" className="capitalize">
            {row.olMathematics || <> &#9866; </>} / &nbsp;
            {row.olEnglish || <> &#9866; </>}
          </Typography>
        </div>
        <div className="grid grid-cols-5">
          <div className="text-center border">A</div>
          <div className="text-center border">B</div>
          <div className="text-center border">C</div>
          <div className="text-center border">S</div>
          <div className="text-center border">W</div>
          <div className="text-center border">
            {row.olResultA || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.olResultB || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.olResultC || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.olResultS || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.olResultW || <> &#9866; </>}
          </div>
        </div>
      </div>

      <hr className="border border-slate-500 my-8" />

      <div className="flex flex-col gap-3">
        <Typography>A/L Results</Typography>
        <div className="flex flex-row justify-between">
          <Typography variant="label">School</Typography>
          <Typography variant="label">
            {row.alSchool || <> &#9866; </>}
          </Typography>
        </div>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Year / Type</Typography>
          <Typography variant="label">
            {row.alYear || <> &#9866; </>} / {row.alType || <> &#9866; </>}
          </Typography>
        </div>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Mathematics / English</Typography>
          <Typography variant="label" className="capitalize">
            {row.alMathematics || <> &#9866; </>} / &nbsp;
            {row.alEnglish || <> &#9866; </>}
          </Typography>
        </div>
        <div className="grid grid-cols-5">
          <div className="text-center border">A</div>
          <div className="text-center border">B</div>
          <div className="text-center border">C</div>
          <div className="text-center border">S</div>
          <div className="text-center border">W</div>
          <div className="text-center border">
            {row.alResultA || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.alResultB || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.alResultC || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.alResultS || <> &#9866; </>}
          </div>
          <div className="text-center border">
            {row.alResultW || <> &#9866; </>}
          </div>
        </div>
      </div>

      <hr className="border border-slate-500 my-8" />

      <div className="flex flex-col gap-3">
        <Typography>Degree</Typography>

        <div className="flex flex-row justify-between">
          <Typography variant="label">Year</Typography>
          <Typography variant="label">
            {row.yearOfCompletion || <> &#9866; </>}
          </Typography>
        </div>

        <div className="flex flex-row justify-between">
          <Typography variant="label">Affiliated University</Typography>
          <Typography variant="label">
            {row.affiliatedUniversity || <> &#9866; </>}
          </Typography>
        </div>

        <div className="flex flex-row justify-between">
          <Typography variant="label">Stream</Typography>
          <Typography variant="label">
            {row.stream || <> &#9866; </>}
          </Typography>
        </div>

        <div className="flex flex-row justify-between">
          <Typography variant="label">GPA / Class</Typography>
          <Typography variant="label">
            {row.gpa || <> &#9866; </>} / {row.class || <> &#9866; </>}
          </Typography>
        </div>
      </div>

      <hr className="border border-slate-500 my-8" />

      <div className="flex flex-col gap-3">
        <Typography>Preferences</Typography>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Study Area</Typography>
          <ul className="list-disc">
            {row.studyArea?.map((studyArea, i) => {
              if (studyArea)
                return (
                  <li key={`study-area-${i}`}>
                    <Typography variant="label">{studyArea}</Typography>
                  </li>
                );
            })}
          </ul>
        </div>
        <div className="flex flex-row justify-between">
          <Typography variant="label">Country</Typography>
          <Typography variant="label">
            {row.country || <> &#9866; </>}
          </Typography>
        </div>
      </div>
    </section>
  );
}
