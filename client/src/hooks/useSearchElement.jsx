import axios from "axios";
import { useQuery } from "react-query";
import useSourceData from "./useSourceData";

// added hook for searching feature
const useSearchElement = (/**@type string */ element) => {
    const dataFolder = `${process.env.PUBLIC_URL}/data/`;
    const regex = new RegExp(`^.*${element}.*\.csv$`);

    // getting all files names in one directory
    let queryObj = useQuery(
        ["fetch-source-files", element],
        async () => {
            const res = await axios.get(dataFolder);
        }
    );

    return queryObj;
};


export default useSearchElement;