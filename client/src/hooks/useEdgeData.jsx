import axios from "axios";
import { useQuery } from "react-query";
import csvToJson2 from "../utils/csvToJson2";

const useEdgeData = (/**@type string*/ fileName) => {
  const { isLoading, isError, data, error } = useQuery(
    ["fetch-csv-data", fileName],
    async () => {
      const response = await axios.get(
        `${process.env.PUBLIC_URL}/data/${fileName}`
      );
      
      const jsonData = csvToJson2(fileName, response.data);
    //   console.log(jsonData);
      const arrayData = Object.values(jsonData);
      return arrayData;
    }
  );

  return { isLoading, isError, data, error };
};

export default useEdgeData;
