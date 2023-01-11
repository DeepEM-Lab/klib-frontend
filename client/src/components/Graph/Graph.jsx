// @ts-ignore
import { VictoryChart, VictoryTooltip, createContainer, VictoryLine, VictoryScatter, VictoryZoomContainer, VictoryAxis, VictoryLegend, VictoryTheme } from "victory"
import { useTheme, Grid, Box, Button, List, ListItem, Select, MenuItem, FormHelperText, FormControl, InputLabel, Chip } from "@mui/material"
import { useMemo, useState } from "react"
import { Line } from '@ant-design/plots';
import { useNavigate, useParams } from "react-router-dom";
import GraphToggles from "./GraphToggles";
import { ElementInfo } from "../PeriodicTable/ElementInfo";


const lineColors = [
    "#FF8888",
    "#B6E2A1",
    "#DFC43F",
    "#98A8F8",
    "#FFA1CF",
    "#35AAFF",
    "#AEBE1C",
    "#A7BEDC",
    "#2EB4DC",
    "#CD3E8C",
    "#7854FE",
    "#9DD6DF",
    "#98D444",
]

const getDomain = (/** @type{{x: number, y: number}[][]}*/ dataSets) => {
    let minX = Number.POSITIVE_INFINITY
    let maxX = Number.NEGATIVE_INFINITY
    let minY = Number.POSITIVE_INFINITY
    let maxY = Number.NEGATIVE_INFINITY
    dataSets.forEach((dataSet) => {
        dataSet.forEach((data) => {
            if (data.x < minX) minX = data.x
            if (data.x > maxX) maxX = data.x
            if (data.y < minY) minY = data.y
            if (data.y > maxY) maxY = data.y
        })
    })

    return { x: [minX, maxX], y: [minY - 0.5, maxY + 0.5 * dataSets.length + 5] }
}

const Graph = (
/** 
@type {{
    dataSets: {x: number, y: number}[][],
    dataLabels: string[]
}}
*/ props) => {

    const params = useParams()

    const element = params['element'] ? params['element'].toLocaleLowerCase() : "hydrogen"
    // @ts-ignore
    const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = ElementInfo[element];
    const [selected, setSelected] = useState(["HideInfo"]);
    const [isShow, setIsShow] = useState(false);
    const selectionChangeHandler = (event) => {
        setSelected(event.target.value);
        if (event.target.value === "ShowInfo") {
            setIsShow(true);
        }
        else {
            setIsShow(false);
        }

    };

    const { dataSets, dataLabels } = props
    const theme = useTheme()
    const darkMode = theme.palette.mode === "dark"

    const data = [...dataSets[0],...dataSets[1],...dataSets[2],...dataSets[3],...dataSets[4],...dataSets[5]].sort((a, b)=>a["x"]-b["x"])

    console.log(data)
    let [domain, setDomain] = useState([-20, 50])
    let [lines, setLines] = useState(Array(dataSets.length).fill(true, 0, Math.ceil(dataSets.length / 2)))
    let [animating, setAnimating] = useState(lines)

    function isWheelDown(event) {
        event.gEvent.preventDefault();
        return event.gEvent.originalEvent.deltaY > 0;
      }

    const getY = () => {
        let count = 0
        lines.forEach((d) => {
            count += d ? 1 : 0
        })
        return count
    }
    return (
        <Grid container>
            <Grid item xs={2}>
                <GraphToggles
                    labels={dataLabels}
                    lines={lines}
                    loading={animating.some((v) => v)}
                    //only show toggled lines.
                    showLine={(i, s) => {
                        let newAnimating = [...animating]
                        let newLines = [...lines]
                        newAnimating[i] = s
                        newLines[i] = s
                        setAnimating(newAnimating)
                        setLines(newLines)
                    }}
                />
                <FormControl style={{ marginTop: 10, marginLeft: 0 }}>
                    <Select
                        value={selected}
                        onChange={selectionChangeHandler}
                    >
                        <MenuItem value={'HideInfo'}>HideInfo</MenuItem>
                        <MenuItem value={'ShowInfo'}>ShowInfo</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={8} sx={{ border: "1px solid", borderRadius: "20px" }}>
                <Line interactions={[{type: "view-zoom",  cfg: {
  start: [
    {
      trigger: 'plot:mousewheel',
      isEnable(context) {
        return isWheelDown(context.event);
      },
      action: 'scale-zoom:zoomOut',
      throttle: { wait: 100, leading: true, trailing: false },
    },
    {
      trigger: 'plot:mousewheel',
      isEnable(context) {
        return !isWheelDown(context.event);
      },
      action: 'scale-zoom:zoomIn',
      throttle: { wait: 100, leading: true, trailing: false },
    },
  ],
}}, 
                
                
                
                
                
                
                
                {type: "tooltip", cfg: {start: [{ trigger: 'plot:mousedown', action: 'scale-translate:start' }],
  end: [{ trigger: 'plot:mouseup', action: 'scale-translate:end' }],

processing: [{trigger: 'plot:mousemove', action: ['scale-translate:translate'], throttle: { wait: 10, leading: true, trailing: false }}]

}}]} data={data} xField="x" yField="y" seriesField="name"
                smooth={false}
                 xAxis={{type:"linear",  tickInterval: 2, label:{formatter: (text)=>parseInt(text).toString()}}}
                tooltip={{
                    formatter: (datum) => {
                        return { name: datum.name, value: `${parseFloat(datum.x).toFixed(4)}, ${parseFloat(datum.y).toFixed(4)}` };
                    },
                    showTitle: false
                }}
                
                />

            </Grid>
            {isShow ?
                <Grid item xs={2}>
                    <List sx={{ ml: "1rem" }}>
                        <ListItem disablePadding>Atomic Number: {atomicNumber}</ListItem>
                        <ListItem disablePadding>Atomic Mass: {atomicMass}</ListItem>
                        <ListItem disablePadding>Name: {elementName}</ListItem>
                        <ListItem disablePadding>Symbol: {elementSymbol}</ListItem>
                        <ListItem disablePadding>Type: {elementType}</ListItem>
                    </List>
                </Grid> : null
            }
            {isShow ?
                <Grid item xs={12}>
                    <Box>
                        <List>
                            <ListItem>equipment 1</ListItem>
                            <ListItem>equipment 2</ListItem>
                            <ListItem>equipment 3</ListItem>
                        </List>
                    </Box>
                    <Box>
                        about section: source data...
                    </Box>
                </Grid> : null
            }

        </Grid>
    )
}

export default Graph