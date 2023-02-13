import { line } from "@antv/g2plot";
import axios from "axios"

const fileToJson = (/** @type string*/ name, /** @type string*/ str) => {
    // console.log(name);

    let ending = name.split(".")[1];
    let data = []
    if (ending == "csv") {
        let lines = str.split('\n')
        for (let i = 0; i < lines.length; i++) {
            if (lines[i]) {
                /**@type{{x: number, y: number, name: string}} */
                let lineObj = {}
                let line = lines[i].split(',')
                lineObj['x'] = Number(line[0])
                lineObj['y'] = Number(line[1])
                lineObj['name'] = name
                data.push(lineObj)
            }
        }
    }
    else if (ending == "txt") {
        let lines = str.split("\n");
        for (let i = 0; i < lines.length; ++i) {
            if (lines[i]) {
                let lineObj = {};
                let coord = lines[i].split(", ");
                lineObj["x"] = Number(coord[0]);
                lineObj["y"] = Number(coord[1]);
                lineObj["name"] = name;
                data.push(lineObj);
            }
        }
    }

    return data
}



export default fileToJson;