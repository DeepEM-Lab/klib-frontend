// @ts-ignore
import { useTheme, Grid, Box, List, ListItem, Select, MenuItem, FormControl, Switch } from "@mui/material"
import { useState } from "react"
import { Line } from '@ant-design/plots';
import { useParams } from "react-router-dom";
import GraphToggles from "./GraphToggles";
import { ElementInfo } from "../PeriodicTable/ElementInfo";

const unpackDataSets = (/**@type {{x: number, y: number, name: string}[][]}*/dataSets) => {
    let unpacked = [];
    for (let dataSet of dataSets) for (let data of dataSet) unpacked.push(data)
    return unpacked.sort((a, b) => a["x"] - b["x"])
}

const isWheelDown = (/**@type any*/ event) => {
    event.gEvent.preventDefault();
    return event.gEvent.originalEvent.deltaY < 0;
}


//Graph Component
const Graph = (
/** 
@type {{
    dataSets: {x: number, y: number, name: string}[][],
    dataLabels: string[]
}}
*/ props) => {
    const {dataSets: AllDataSets, dataLabels } = props
    const params = useParams()
    const element = params['element'] ? params['element'].toLocaleLowerCase() : "hydrogen"
    // @ts-ignore
    const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = ElementInfo[element]

    let [isExpanded, setIsExpanded] = useState(false)
    //default show all lines. If AllDataSets have length of 6, then lines will be [true, true, true, true, true, true]
    let [linesOn, setLinesOn] = useState(Array(AllDataSets.length).fill(true, 0, AllDataSets.length / 2))
    
    const dataSets = AllDataSets.filter((_, i)=>linesOn[i])

    let dataUnpacked = unpackDataSets(dataSets)
    if(isExpanded){//Expand datasets, shifting each line up.
        let arr = []
        for(let i = 0; i < dataSets.length; i++){
            for (let data of dataSets[i]){
                arr.push({...data, y: data.y+i*0.4})
            }
        }
        dataUnpacked = arr.sort((a, b) => a["x"] - b["x"])
    }

    const tooltipCfg = {
        start: [{trigger: 'plot:mousedown',action: 'scale-translate:start'}],
        end: [{trigger: 'plot:mouseup',action: 'scale-translate:end'}],
        processing: [{ trigger: 'plot:mousemove', action: ['scale-translate:translate']}]
    }

    const viewzoomCfg= {
        start: [
            {
                trigger: 'plot:mousewheel',
                isEnable(/**@type any*/ c) {return isWheelDown(c.event)},
                action: 'scale-zoom:zoomOut',
                throttle: { wait: 100, leading: true, trailing: false },
            },
            {
                trigger: 'plot:mousewheel',
                isEnable(/**@type any*/ c) {return !isWheelDown(c.event)},
                action: 'scale-zoom:zoomIn',
                throttle: { wait: 100, leading: true, trailing: false },
            },
        ],
    }

    return (
        <Grid container>
            <Grid item xs={2}>
                <GraphToggles
                    labels={dataLabels}
                    lines={linesOn}
                    //only show toggled lines.
                    showLine={(i, s) => {
                        let newLinesOn = [...linesOn]
                        newLinesOn[i] = s
                        setLinesOn(newLinesOn)
                    }}
                />
                Expand
                <Switch
                    disabled={false}
                    onChange={() => setIsExpanded(!isExpanded)}//set line expansion
                />

            </Grid>
            <Grid item xs={8} sx={{ height: isExpanded ? "700px" : "400px", border: "1px solid", borderRadius: "20px" }}>
                <Line
                    data={dataUnpacked}
                    xField="x"
                    yField="y"
                    seriesField="name"
                    smooth={false}
                    xAxis={{ type: "linear", tickInterval: 2, label: { formatter: (text) => parseInt(text).toString() } }}
                    interactions={[{type: "view-zoom", cfg: viewzoomCfg}, { type: "element-active", cfg: tooltipCfg}]}
                    tooltip={{
                        formatter: (datum) => {
                            return { name: datum.name, value: `${parseFloat(datum.x).toFixed(4)}, ${parseFloat(datum.y).toFixed(4)}` };
                        },
                        showTitle: false
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Graph