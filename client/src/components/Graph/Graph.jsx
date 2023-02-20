// @ts-ignore
import { G2, Line } from '@ant-design/plots';
import { Grid, Switch } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ElementInfo } from "../PeriodicTable/ElementInfo";
import GraphToggles from "./GraphToggles";
import ZoomByAxis from "./ZoomByAxis";

const dragCfg = {
    start: [{ trigger: 'plot:mousedown', action: 'scale-translate:start' }],
    end: [{ trigger: 'plot:mouseup', action: 'scale-translate:end' }],
    processing: [{ trigger: 'plot:mousemove', action: ['scale-translate:translate'], throttle: { wait: 50, leading: true, trailing: false }, }]
}

const zoomCfg = {
    start: [
        {
            trigger: 'plot:mousewheel',
            isEnable(/**@type any*/ c) { return isWheelDown(c.event) },
            action: 'zoom-by-axis:zoomOutX',
            throttle: { wait: 50, leading: true, trailing: false },
        },
        {
            trigger: 'plot:mousewheel',
            isEnable(/**@type any*/ c) { return !isWheelDown(c.event) },
            action: 'zoom-by-axis:zoomInX',
            throttle: { wait: 50, leading: true, trailing: false },
        },
    ],
}
G2.registerAction("zoom-by-axis", ZoomByAxis)
G2.registerInteraction("drag", dragCfg)
G2.registerInteraction("zoom", zoomCfg)

const unpackDataSets = (/**@type {{x: number, y: number, name: string}[][]}*/dataSets) => {
    let unpacked = [];
    for (let dataSet of dataSets) for (let data of dataSet) unpacked.push({ ...data, _y: data.y })
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
    const { dataSets: AllDataSets, dataLabels } = props
    const params = useParams()
    const element = params['element'] ? params['element'].toLocaleLowerCase() : "hydrogen"
    // @ts-ignore
    const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = ElementInfo[element]

    useEffect(() => {
        document.getElementsByTagName('canvas')[0].addEventListener('mousewheel', function (event) {
            event.preventDefault();
        }, false);
    }, [])
    

    let dataUnpacked = unpackDataSets(dataSets)
    if (isExpanded) {//Expand datasets, shifting each line up.
        dataUnpacked = []
        for (let i = 0; i < dataSets.length; i++) {
            for (let data of dataSets[i]) {
                dataUnpacked.push({ ...data, y: data.y + i * 0.4, _y: data.y })
            }
        }
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
            <Grid item xs={8} sx={{ height: isExpanded ? "700px" : "400px", border: "1px solid", borderRadius: "20px", padding: "20px" }}>
                <Line
                    data={dataUnpacked}
                    xField="x"
                    yField="y"
                    seriesField="name"
                    smooth={false}
                    xAxis={{
                        type: "linear", tickInterval: 2,
                        label: { formatter: (text) => parseInt(text).toString() },
                        grid: { line: { style: { lineWidth: 0 } } }
                    }}
                    yAxis={{ grid: { line: { style: { lineWidth: 0 } } }, label: { formatter: (text) => "" } }}
                    interactions={[{ type: "zoom" }, { type: "drag" }]}
                    tooltip={{
                        customItems:(dataArr)=>{
                            dataArr = dataArr.sort((a, b)=>b.data.y - a.data.y)
                            // @ts-ignore
                            dataArr.forEach((d)=>{d.value = `${parseFloat(d.data.x).toFixed(4)}, ${parseFloat(d.data._y).toFixed(4)}`})
                            return dataArr;
                        }
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default Graph