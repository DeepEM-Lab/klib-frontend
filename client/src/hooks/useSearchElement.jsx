import axios from "axios";
import { useQuery } from "react-query";
import useSourceData from "./useSourceData";
import csvToJson  from "../utils/csvToJson";
import { DataArray } from "@mui/icons-material";


// added hook for searching feature
const useSearchElement = (/**@type string */ element) => {
    const dataFiles = `${process.env.PUBLIC_URL}/search/fileindexes.txt`;

    const readData = async (/**@type string*/ fileName) => {
        // create regular express
        let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileName}`);
        return csvToJson(fileName, res.data);
    }

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

            // TODO: test for sending request --> for Ba and Fe

            const data = await Promise.all( matches.map( async (file) => {
                    let result = await axios.get(`${process.env.PUBLIC_URL}/data/${file}`);
                    return csvToJson(file, result.data);
            }) );
            
            console.log(data);
            
            return data;
        }
    );

    return queryObj;
};


export default useSearchElement;