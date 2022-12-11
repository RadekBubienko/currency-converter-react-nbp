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

        const allArray  = response.data;

        setRatesData({
          state: "succes",
          rates: allArray[0].rates,
          date: allArray[0].effectiveDate,
          table: allArray[0].table,
          no: allArray[0].no,
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