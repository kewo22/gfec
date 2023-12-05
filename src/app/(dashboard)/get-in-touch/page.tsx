"use client"
import { ResolveBaseUrl } from "@/app/utils/common";
import useSWR from "swr";

interface UserDetails {
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GetInTouch() {
  const privacyBasePolicyUrl = ResolveBaseUrl(
    process.env.NEXT_PUBLIC_VERCEL_ENV!
  );

  const { data, isLoading } = useSWR(
    `${privacyBasePolicyUrl}/api/getInTouch`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  if (isLoading) {
    return <>LOADING...</>
  }

  return <div className="max-w-2xl mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Data Table</h1>
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">FirstName</th>
          <th className="py-2 px-4 border-b">LastName</th>
          <th className="py-2 px-4 border-b">Email</th>
          <th className="py-2 px-4 border-b">Address</th>
        </tr>
      </thead>
      <tbody>
        {data.data.map((item: any) => (
          <tr key={item.id}>
            <td className="py-2 px-4 border-b">{item.firstName}</td>
            <td className="py-2 px-4 border-b">{item.lastName}</td>
            <td className="py-2 px-4 border-b">{item.email}</td>
            <td className="py-2 px-4 border-b">{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    ;
}
