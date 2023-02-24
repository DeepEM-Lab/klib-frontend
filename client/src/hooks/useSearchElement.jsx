import axios from "axios";
import { useQuery } from "react-query";
import useSourceData from "./useSourceData";
import fileToJson  from "../utils/csvToJson";
import { DataArray } from "@mui/icons-material";


// added hook for searching feature
const useSearchElement = (/**@type string */ element) => {
    const dataFiles = `${process.env.PUBLIC_URL}/search/fileindexes.txt`;

    // only matching element symbols for now...
    const regex = new RegExp(`^${element}`);

    // getting all files names in one directory
    let queryObj = useQuery(
        ["fetch-source-files", element],
        async () => {
            let /**@type string[] */ matches = [];
            // getting filenames for all existing files
            const res = await axios.get(dataFiles);
            const fileNames = res.data.split("\n");
            

            // matching all files that contain certain element
            fileNames.forEach( (/**@type string */ file) => {
                if (file.match(regex) != null)
                    matches.push(file);
            });

            // wait on all promises to be handled to get final data we need
            const data = await Promise.all( matches.map( async (file) => {
                    let result = await axios.get(`${process.env.PUBLIC_URL}/data/${file}`);
                    return fileToJson(file, result.data);
            }) );
            
            const result = [matches, data];
            // console.log(result);
            
            return result;
        }
    );

    return queryObj;
};


export default useSearchElement;