import { Checkbox, FormControlLabel, List, ListItem, ListItemText, Switch, Grid, Button } from "@mui/material"
import generateZip from "../../hooks/generateZip";

let labels = ["BaMnO3", "CaMnO3", "Cubic-SrMnO3", "Hex-SMO", "Hex-YMnO3", "LaMnO3"]
let labelState = new Map();
for (let j = 0; j < labels.length; j++) {
    if (j < 3) {
        labelState.set(j, true);
    } else {
        labelState.set(j, false);
    }
}

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


    const changeLabelState = (/**@type{number}*/ x, /**@type{boolean}*/y) => {
        labelState.set(x, y)
    }

    return (
        <>
            <Grid>
                <Button onClick={(e) => generateZip(labelState)}>click to download</Button>
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
                            onChange={(e) => { showLine(i, e.target.checked); changeLabelState(i, e.target.checked) }} />}
                    >
                        <ListItemText primary={label} />
                    </ListItem>

                ))}

            </List>
        </>
    )
}

export default GraphToggles