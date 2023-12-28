"use client";
import { DataDto } from "@/interfaces/data_dto";
import { notifyInfo, notifySuccess } from "@/lib/toast/toastHelper";
import seedData from "@/server/data.json";
import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataDto[]>([]);

  const fetchData = async () => {
    notifyInfo("Loading data...");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setData(seedData);
    setLoading(false);
    notifySuccess("Data loaded!");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
};
