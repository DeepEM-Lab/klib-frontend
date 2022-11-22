import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, List, ListItem } from "@mui/material";

import PageParent from "../structures/PageParent";
import useSourceData from "../hooks/useSourceData";
import Graph from "../components/Graph/Graph";
import { ElementInfo } from "../components/PeriodicTable/ElementInfo";
import JSZip from  'jszip';
import axios from "axios"
//import $ from 'jquery';
import { saveAs } from 'file-saver';

const generateZip = async () => {
    var zip = new JSZip();
    let fileName = "BaMnO3.csv";
    let res = await axios.get(`${process.env.PUBLIC_URL}/data/${fileName}`)
    zip.file("data.csv", res.data);
    
    //var img = zip.folder("images");
    
    zip.generateAsync({type:"blob"}).then(function(content) {
        saveAs(content, "example.zip");
    });
    }


function ElementPage() {
    const navigate = useNavigate();
    const params = useParams()
    const element = params['element'] ? params['element'].toLocaleLowerCase() : "hydrogen"
    // @ts-ignore
    const { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = ElementInfo[element];
    let dataLabels = ["BaMnO3", "CaMnO3", "Cubic-SrMnO3", "Hex-SMO", "Hex-YMnO3", "LaMnO3"]

    let BaMnO3 = useSourceData("BaMnO3.csv")
    let CaMnO3 = useSourceData("CaMnO3.csv")
    let Cubic_SrMnO3 = useSourceData("Cubic-SrMnO3.csv")
    let Hex_SMO = useSourceData("Hex-SMO.csv")
    let Hex_YMnO3 = useSourceData("Hex-YMnO3.csv")
    let LaMnO3 = useSourceData("LaMnO3.csv")

    let queryObjs = [BaMnO3, CaMnO3, Cubic_SrMnO3, Hex_SMO, Hex_YMnO3, LaMnO3]

    let success = queryObjs.every(e => e.isSuccess)

    let data = queryObjs.map(e => e.data ?? [])

    

    return (
        <PageParent>
            <Box m="1rem 0 0 1rem">
                <Button style={{ height: 20 }} onClick={() => navigate("/", { replace: true })}>back</Button>
            </Box>
            <Grid container rowSpacing={2} mt={2}>
                <Grid item xs={10}>
                    {success && <Graph dataSets={data} dataLabels={dataLabels} />}
                </Grid>
                <Grid item xs={10}>
                <Button id="data_uri" onClick={generateZip}>click to download</Button>
                </Grid>
                <Grid item xs={2}>
                    <List sx={{ml:"1rem"}}>
                        <ListItem disablePadding>Atomic Number: {atomicNumber}</ListItem>
                        <ListItem disablePadding>Atomic Mass: {atomicMass}</ListItem>
                        <ListItem disablePadding>Name: {elementName}</ListItem>
                        <ListItem disablePadding>Symbol: {elementSymbol}</ListItem>
                        <ListItem disablePadding>Type: {elementType}</ListItem>
                    </List>
                </Grid>
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
                </Grid>
            </Grid>
        </PageParent>
    )
}


export default ElementPage;