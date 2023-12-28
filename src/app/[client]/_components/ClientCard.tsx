"use client";
import { LoadingIndicator } from "@/components/LoadingIndicator/LoadingIndicator";
import { useFetchClient } from "@/hooks/useFetchClient";
import { Audit } from "@/interfaces/data_dto";
import Link from "next/link";

export function ClientCard({ client }: { client: string }) {
  const { data, loading } = useFetchClient(client);

  return (
    <div className="flex">
      {loading && <LoadingIndicator />}

      {data && (
        <div className="bg-white shadow rounded-lg p-6 h-min">
          <div className="flex justify-between gap-4 mb-4">
            <p>Client</p>
            <h1 className="font-bold text-xl">{data.client}</h1>
          </div>
          <div className="flex justify-between gap-4 mb-2">
            <p>Tvl</p>
            <h2 className="text-gray-700">{data.tvl}</h2>
          </div>
          <div className="flex justify-between gap-4 mb-2">
            <p>Loc</p>
            <h2 className="text-gray-700">{data.loc}</h2>
          </div>
          <div className="flex justify-between gap-4 mb-2 border-b pb-4">
            <p>Reports</p>
            <h2 className="text-gray-700">{data.reports}</h2>
          </div>
          {data.audits.map((audit: Audit, index: number) => (
            <div key={index} className="mt-4">
              <h3 className="font-bold">{audit.audit_name}</h3>
              <p>
                {audit.start_date} - {audit.end_date}
              </p>
              <p>LOC: {audit.details.loc}</p>
              <p>Critical: {audit.details.critical_cnt}</p>
              <p>High: {audit.details.high_cnt}</p>
              <p>Medium: {audit.details.medium_cnt}</p>
            </div>
          ))}
        </div>
      )}

      {data && (
        <Link
          href={`${client}/project`}
          className="text-blue text-sm underline ml-4"
        >
          Write a feedback
        </Link>
      )}
    </div>
  );
}
