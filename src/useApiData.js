import axios from "axios";
import { useEffect, useState } from "react";

export const useApiData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.nbp.pl/api/exchangerates/tables/a/?format=json");

        const { table, rates, effectiveDate, no } = response.data;

        setRatesData({
          state: "succes",
          table,
          rates,
          effectiveDate,
          no
        });
      } catch (error) {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getData, 1000);
  }, []);

  return ratesData;
};