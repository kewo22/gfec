"use client";

import React, { useState } from "react";

import useSWR from "swr";

import { ResolveBaseUrl, Fetcher } from "@/app/utils/common";
import { ApplicationFormModel } from "@/app/_interfaces/application-form";
import { ApiResponse } from "@/app/_interfaces/response";

import { DataGrid } from "./DataGrid";
import Loader from "../../_components/Loader";
import { Typography } from "@/app/_components/ui/typography";
import Details from "./Details";

export default function Application() {
  const baseUrl = ResolveBaseUrl(process.env.NEXT_PUBLIC_VERCEL_ENV!);

  const [application, setApplication] = useState<ApplicationFormModel | null>(
    null
  );

  const { data, isLoading } = useSWR<ApiResponse<ApplicationFormModel[]>>(
    `${baseUrl}/api/application`,
    Fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const onViewRow = (row: ApplicationFormModel) => {
    console.log("🚀 ~ file: page.tsx:28 ~ onViewRow ~ row:", row);
    setApplication(row);
  };

  if (isLoading) {
    return <Loader />;
  }

  const _data: ApplicationFormModel[] = data?.data.concat(
    data.data
  ) as ApplicationFormModel[];

  return (
    <div className="p-5 h-full overflow-hidden flex flex-col">
      <Typography variant="h3" className="text-slate-700 flex-auto">
        Applications
      </Typography>
      <div className="h-full overflow-hidden flex flex-row gap-5">
        <div className="max-w-6xl flex-grow overflow-hidden">
          {data && <DataGrid data={_data} onViewRow={onViewRow} />}
        </div>
        <div className="bg-slate-50 border border-slate-300 rounded-lg flex-grow m-5 p-5 h-full overflow-hidden">
          <Details row={application} />
        </div>
      </div>
    </div>
  );
}
