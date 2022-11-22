import axios from "axios"
import { useQuery } from "react-query"
import csvToJson  from "../utils/csvToJson"


const useSourceData = (/**@type string*/ fileName) => {
    const dataFolder = `${process.env.PUBLIC_URL}/data/`;
    const regex = new RegExp(`${fileName}`);
    // console.log(fileName);

    const getFiles = async () => {
        let res = await axios.get(dataFolder);
        // console.log(res.data);
        const allFiles = res.data;
        let files = [];
        for (var i = 0; i < allFiles.length; ++i) {
            if ( allFiles[i].match(regex) ) {
                files.push(allFiles[i]);
            }
        }

        return files;
    };

    const processFile = async (/**@type [string]*/files) => {
        var datas = [];
        for (var i = 0; i < files.length; ++i) {
            let res = await axios.get(`${process.env.PUBLIC_URL}/data/${files[i]}`);
            datas.push( csvToJson(res.data) );
        }
        console.log("");
        return datas;
    };


    let queryObj = useQuery(
        ["fetch-source-data", fileName],
        async () => {
            let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileName}`)
            const files = await getFiles();

            console.log(files);
            console.log("run once");

            return csvToJson(res.data)
        }
    )



    return queryObj
}

export default useSourceData