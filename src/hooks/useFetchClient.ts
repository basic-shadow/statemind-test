"use client";
import { DataDto } from "@/interfaces/data_dto";
import {
  notifyError,
  notifyInfo,
  notifySuccess,
} from "@/lib/toast/toastHelper";
import seedData from "@/server/data.json";
import { useEffect, useState } from "react";

export const useFetchClient = (client: string) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataDto | null>(null);

  const fetchData = async () => {
    notifyInfo("Loading data...");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const clientData: DataDto | undefined = seedData.find(
      (d) => d.client === client
    );
    if (clientData) {
      setData(clientData);
      notifySuccess("Data loaded!");
    } else {
      notifyError("Client not found!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};
