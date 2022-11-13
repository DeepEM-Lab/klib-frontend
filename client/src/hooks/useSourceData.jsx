import axios from "axios"
import { useQuery } from "react-query"
import csvToJson  from "../utils/csvToJson"


const useSourceData = (/**@type string*/ fileName) => {

    let queryObj = useQuery(
        ["fetch-source-data", fileName],
        async () => {
            let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileName}`)
            return csvToJson(res.data)
        }
    )

    return queryObj
}

export default useSourceData