import { Checkbox, FormControlLabel, List, ListItem, ListItemText, Switch, Grid, Button } from "@mui/material"
import generateZip from "../../hooks/generateZip";
import { useState } from "react"

let labels = ["BaMnO3", "CaMnO3", "Cubic-SrMnO3", "Hex-SMO", "Hex-YMnO3", "LaMnO3"]

let initialLabelState = [true,true,true,false,false,false]

const GraphToggles = (
/**
@type {{
    labels: string[]
    lines: boolean[]
    loading: boolean
    showLine: (index: number, show: boolean) => void
}}
*/ props) => {
    let { labels, lines, loading, showLine } = props

    const [labelStates, setLabelStates] = useState(initialLabelState)

    function handleChangeLabelState(/**@type number*/index, /**@type{boolean}*/y) {
            const nextLabelStates = labelStates.map((c, i) => {
                if (i === index) {
                return y;
                } else {
                return c;
                }
            });
            setLabelStates(nextLabelStates)
    }

    return (
        <><Grid>
            <Button onClick={(e) => generateZip(labelStates)}>click to download</Button>
        </Grid>
        <List sx={{
            height: "80vh",
            overflowY: "auto",
            overflowX: "hidden",
        }}>
                {labels.map((label, i) => (
                    <ListItem
                        key={i}
                        disablePadding
                        secondaryAction={<Switch
                            disabled={loading}
                            checked={lines[i] === true}
                            onChange={(e) => {showLine(i, e.target.checked); handleChangeLabelState(i, e.target.checked) }} />}
                    >
                        <ListItemText primary={label} />
                    </ListItem>

                ))}

            </List></>
    )
}

export default GraphToggles