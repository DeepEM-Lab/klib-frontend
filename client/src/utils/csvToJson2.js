import { line } from "@antv/g2plot";
import axios from "axios"

const fileToJson = (/** @type string*/ name, /** @type string*/ str) => {
    // console.log(name);

    let ending = name.split(".")[1];
    let data = []
    let temp_element = "";
    let temp_edge = "";
    let temp_data = "";
    if (ending == "csv") {
        let lines = str.split('\n')
        console.log(lines);
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]) {
                /**@type{{element: string, edge: string, data: string}} */

                let lineObj = {}
                let line = lines[i].split(',')
                if (line.length == 4){
                    temp_element = line[0];
                    temp_edge = line[1] + ',' + line[2];
                    temp_edge = temp_edge.slice(1, -1);
                    temp_data = line[3];
                    temp_data = temp_data.split("\r")[0];
                }
                else{
                    temp_element = line[0];
                    temp_edge = line[1];
                    temp_data = line[2];
                    temp_data = temp_data.split("\r")[0];
                }
                lineObj['element'] = temp_element
                lineObj['edge'] = temp_edge
                lineObj['data'] = temp_data
                data.push(lineObj)
            }
        }
    }

    return data
}



export default fileToJson;