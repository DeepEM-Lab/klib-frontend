import axios from "axios"
import { useQuery } from "react-query"
import csvToJson  from "../utils/csvToJson"


const useSourceData = (/**@type string*/ fileName) => {
    // create regular express
    

    let queryObj = useQuery(
        ["fetch-source-data", fileName],
        async () => {
            let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileName}`)
            return csvToJson(fileName, res.data)
        }
    )

    return queryObj
}

export default useSourceData