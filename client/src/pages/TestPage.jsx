// import { useEffect, useState } from 'react';
// import Papa from 'papaparse';

// function TestPage () {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/data/BaMnO3.csv');
//         if (response.ok) {
//           const csvData = await response.text();
//           const parsedData = Papa.parse(csvData, { header: false }).data;
//           setData(parsedData);
//         } else {
//           throw new Error('Error fetching data');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {data ? (
//         <div>
//           <h2>Data:</h2>
//           <ul>
//             {data.map((row, index) => (
//               <li key={index}>{JSON.stringify(row)}</li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }
// export default TestPage   
// @ts-ignore
import { Button, Grid, Switch } from "@mui/material"
import { useEffect, useState } from "react"
import { G2, Line } from '@ant-design/plots';
import { useParams } from "react-router-dom";
// import GraphToggles from "./GraphToggles";
// import { ElementInfo } from "../PeriodicTable/ElementInfo";
import ZoomByAxis from "../components/Graph/ZoomByAxis";
import { useNavigate } from "react-router-dom"

import PageParent from "../structures/PageParent";
import useSearchElement from "../hooks/useSearchElement";
import { ElementInfo } from "../components/PeriodicTable/ElementInfo";


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

    let [isExpanded, setIsExpanded] = useState(false)
    //default show all lines. If AllDataSets have length of 6, then lines will be [true, true, true, true, true, true]
    // let [linesOn, setLinesOn] = useState(Array(AllDataSets.length).fill(true, 0, AllDataSets.length / 2))

    const dataSets = AllDataSets.filter((_, i) => true)

    let dataUnpacked = unpackDataSets(dataSets)
    if (isExpanded) {//Expand datasets, shifting each line up.
        dataUnpacked = []
        for (let i = 0; i < dataSets.length; i++) {
            for (let data of dataSets[i]) {
                dataUnpacked.push({ ...data, y: data.y + i * 0.4, _y: data.y })
            }
        }
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/form`);
    };

    return (
        <Grid container>
            
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

// export default Graph

// import { useEffect, useState } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import PageParent from "../structures/PageParent";
// import useSearchElement from "../hooks/useSearchElement";
// import { ElementInfo } from "../components/PeriodicTable/ElementInfo";
// import Graph from "../components/Graph/Graph";

function TestPage () {
  const navigate = useNavigate();
  // const params = useParams()
  const element = 'BaMnO3'
  // const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = ElementInfo[element];
  let matchedSubstances = useSearchElement(element);
  let researchResult = matchedSubstances.isSuccess;
  let returnedData = matchedSubstances.data ?? [];
  let /** @type{x: Number, y: Number, name: string}[][] */ data = returnedData.length !== 0 ? returnedData[1] : [];
  let /** @type string[] */ dataLabels = returnedData.length !== 0 ? returnedData[0] : [];

  return (
    <PageParent>
      <div>
      {researchResult && <Graph dataSets={data} dataLabels={dataLabels} />}
      </div>
      {/* <div>

        <ul>
          {data.map((row, index) => (
            <li key={index}>{JSON.stringify(row)}</li>
          ))}
          {data.map((row) => (
            <li>{JSON.stringify(row)}</li>
          ))}
        </ul>
      </div> */}
    </PageParent>
  );
}

export default TestPage