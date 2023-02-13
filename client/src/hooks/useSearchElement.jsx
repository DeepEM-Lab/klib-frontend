import axios from "axios";
import { useQuery } from "react-query";
import useSourceData from "./useSourceData";
import csvToJson  from "../utils/csvToJson";
import { DataArray } from "@mui/icons-material";

// added hook for searching feature
const useSearchElement = (/**@type string */ element) => {
    const dataFolder = `${process.env.PUBLIC_URL}/search/fakefiles.txt`;

    // only matching element symbols for now...
    const regex = new RegExp(`^${element}`);

    // getting all files names in one directory
    let queryObj = useQuery(
        ["fetch-source-files", element],
        async () => {
            let /**@type string[] */ matches = [];
            // getting filenames for all existing files
            const res = await axios.get(dataFolder);
            const fileNames = res.data.split("\r\n");

            // matching all files that contain certain element
            fileNames.forEach( (/**@type string */ file) => {
                if (file.match(regex) != null)
                    matches.push(file);
            });

            // TODO: test for sending request
            // const data = matches.map( async (fileName) => {
            //     let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileName}`);
            //     return csvToJson(fileName, res.data);
            // });

            // FIXME: invalid calls for hooks
            // const data = matches.map((name) => useSourceData(name));
            
            return matches;
        }
    );

    return queryObj;
};


export default useSearchElement;