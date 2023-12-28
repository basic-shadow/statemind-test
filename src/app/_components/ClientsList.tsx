"use client";
import { LoadingIndicator } from "@/components/LoadingIndicator/LoadingIndicator";
import { useFetchData } from "@/hooks/useFetchData";
import Link from "next/link";

export const ClientsList = () => {
  const { data, loading } = useFetchData();

  return (
    <div className="grid place-items-center">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">
        Clients List
      </h1>
      {loading && (
        <div>
          <LoadingIndicator />
        </div>
      )}
      <div className="grid grid-cols-4 gap-4">
        {data.map((client) => (
          <Link
            href={`${client.client}`}
            key={client.client}
            className="bg-white shadow rounded-lg p-6 my-4"
          >
            <div className="font-bold text-xl mb-2">{client.client}</div>
            <div className="text-gray-700">{client.tvl}</div>
            <div className="text-gray-700">{client.loc}</div>
            <div className="text-gray-700">{client.reports}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
