// @ts-ignore
import { VictoryChart, VictoryTooltip, createContainer, VictoryLine, VictoryScatter, VictoryZoomContainer, VictoryAxis, VictoryLegend, VictoryTheme } from "victory"
import { useTheme, Grid } from "@mui/material"
import { useMemo, useState } from "react"
import GraphToggles from "./GraphToggles"

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

    return { x: [minX, maxX], y: [minY - 0.5, maxY + 0.5 * dataSets.length +5] }
}

const Graph = (
/** 
@type {{
    dataSets: {x: number, y: number}[][],
    dataLabels: string[]
}}
*/ props) => {
    const { dataSets, dataLabels } = props
    const allDomains = useMemo(() => getDomain(dataSets), [dataSets])
    const theme = useTheme()
    //set maximum rendering points
    const maxPoints = Math.ceil(2000 / dataSets.length)
    const darkMode = theme.palette.mode === "dark"

    let [domain, setDomain] = useState([-20, 50])
    let [lines, setLines] = useState(Array(dataSets.length).fill(true, 0, Math.ceil(dataSets.length / 2)))
    let [animating, setAnimating] = useState(lines)

    const getData = (/**@type{{x: number, y: number}[]}*/ data) => {
        const startIndex = data.findIndex((d) => d.x >= domain[0]);
        const endIndex = data.findIndex((d) => d.x > domain[1]);
        
        let filtered = data.slice(startIndex > 0 ? startIndex - 1 : 0, endIndex !== -1 ? endIndex + 1 : data.length);
        if (filtered.length > maxPoints) {
            const k = Math.pow(2, Math.ceil(Math.log2(filtered.length / maxPoints)));
            filtered = filtered.filter((d, i) => ((i % k) === 0));
        }

        //add first and last data point
        if (filtered[0].x !== data[0].x) {
            filtered.push(data[0])
        }
        if (filtered[filtered.length - 1].x !== data[data.length - 1].x) {
            filtered.push(data[data.length - 1])
        }

        return filtered
    }

    const getY = () =>{
        let count = 0
        lines.forEach((d)=>{
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
            </Grid>
            <Grid item xs={10} sx={{ border: "1px solid", borderRadius: "20px" }}>
                <VictoryChart
                    height={500 + getY()*100}
                    width={1280}
                    // @ts-ignore
                    domain={{x: [-5, 40], y: [0, 0.65+getY()*0.4]}}

                    containerComponent={
                        <VictoryZoomContainer
                            minimumZoom={{ x: 0.1 }}
                            allowZoom={true}
                            // @ts-ignore
                            onZoomDomainChange={(domain) => setDomain(domain.x)}
                            events={{
                                //Prevent zoom when animating
                                onWheelCapture: (e) => { 
                                    if (lines.some((v, i) => lines[i] === true ? animating[i] : false)){
                                        e.stopPropagation() 
                                    }
                                }
                            }}
                        />
                    }
                >
                    {[
                        dataSets.map((d, i) => (
                            lines[i] && <VictoryLine
                                animate={animating[i] ? {
                                    duration: 0,
                                    onLoad: { duration: 1000 },
                                    //Set to false to prevent replaying animation while zooming
                                    onEnd: () => {
                                        let newAnimating = [...animating]
                                        newAnimating[i] = false
                                        setAnimating(newAnimating)
                                    }
                                } : false}
                                key={i}
                                style={{
                                    data: { stroke: lineColors[i], strokeWidth: 2.3333}
                                }}
                                data={getData(d)}
                                interpolation="catmullRom"
                                y={(data) => data.y + 0.4 * i}
                            />
                        )),
                        // dataSets.map((d, i) => (
                        //     lines[i] && <VictoryScatter
                        //         size={6}
                        //         key={i}
                        //         data={getData(d)}
                        //         labels={({ datum }) => `${datum.x.toFixed(3)}, ${datum.y.toFixed(3)}`}
                        //         labelComponent={<VictoryTooltip
                        //             dy={-16}
                        //             flyoutStyle={{
                        //                 fill: "white",
                        //                 fillOpacity: "0.9",
                        //                 stroke: theme.palette.secondary.main
                        //             }}
                        //             flyoutWidth={120}
                        //             style={[{ fill: "black", fontSize: 16, fontFamily: theme.typography.fontFamily }]}
                        //         />}
                        //         y={(data) => data.y + 0.5 * i}
                        //         style={{
                        //             data: { fill: lineColors[i] }
                        //         }}
                        //     />
                        // ))
                    ]}

                    <VictoryAxis
                        crossAxis={false}
                        offsetY={50}
                        style={{
                            axis: { stroke: "gray" },
                            tickLabels: { fontSize: 18, fill: darkMode ? "white" : "black" }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        crossAxis={false}
                        offsetX={50}
                        tickValues={[null]}
                        label="FJJBJSJFJDJS"
                        style={{
                            axis: { stroke: "gray" },
                            tickLabels: { fontSize: 18, fill: darkMode ? "white" : "black" }
                        }}
                    />
                    <VictoryLegend x={1000} y={0}
                        orientation="horizontal"
                        itemsPerRow={2}
                        title={"Elements"}
                        centerTitle
                        style={{
                            border: { stroke: darkMode ? "white" : "black" },
                            title: { fontSize: 18, fill: darkMode ? "white" : "black" },
                            data: { fill: "blue" },
                            labels: { fill: darkMode ? "white" : "navy", fontSize: 16 },
                        }}
                        data={dataLabels.map((title, i) => ({
                            name: title,
                            symbol: { fill: lineColors[i] }
                        })).filter((d,i)=>lines[i])}
                        borderPadding={10}
                    />
                </VictoryChart>
            </Grid>
        </Grid>
    )
}

export default Graph