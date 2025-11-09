"use client";
import { Typography } from "@/app/_components/ui/typography";
import { Fetcher, ResolveBaseUrl } from "@/app/utils/common";
import { useState } from "react";
import useSWR from "swr";
import { DataGrid } from "./DataGrid";
import { GetInTouchResponse } from "@/app/_interfaces/get-in-touch";
import Loader from "../../_components/Loader";



export default function GetInTouch() {
  const baseUrl = ResolveBaseUrl(process.env.NEXT_PUBLIC_VERCEL_ENV!);

  const { data, isLoading, mutate: mutateGetInTouch } = useSWR<{ data: GetInTouchResponse[] }>(
    `${baseUrl}/api/getInTouch`,
    Fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (isLoading) {
    return <Loader />;
  }
  if (!data || !data.data.length) {
    return <>No Data Available</>;
  }


  const deleteRow = async (row: GetInTouchResponse) => {
    try {
      const response = await fetch(`${baseUrl}/api/getInTouch/${row._id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete');
      }
      // Optimistic update with bound mutate
      mutateGetInTouch(
        (currentData) => ({
          ...currentData!,
          data: currentData!.data!.filter((item) => item._id !== row._id)
        }),
        false
      );
      mutateGetInTouch();
    } catch (error) {
      mutateGetInTouch();
    } finally {
      // 
    }
  }

  return (
    <div className="p-5 h-full overflow-hidden flex flex-col">
      <Typography variant="h3" className="text-slate-700 flex-auto">
        Get In Touch Submissions
      </Typography>
      <div className="h-full overflow-hidden flex flex-row gap-5">
        {data && <DataGrid data={data.data} deleteRow={deleteRow} />}
      </div>
    </div>
  );
}
