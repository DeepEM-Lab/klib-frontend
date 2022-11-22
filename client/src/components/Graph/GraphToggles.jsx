import { Checkbox, FormControlLabel, List, ListItem, ListItemText, Switch } from "@mui/material"




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

    return (
        <List sx={{
            height: "25vh",
            overflowY: "scroll",
            overflowX: "hidden",
        }} >
            {
                labels.map((label, i) => (
                    <ListItem
                        key={i}
                        disablePadding
                        secondaryAction={
                            <Switch
                                disabled={loading}
                                checked={lines[i] === true}
                                onChange={(e) => showLine(i, e.target.checked)}
                            />
                        }
                    >
                        <ListItemText primary={label} />
                    </ListItem>

                ))
            }

        </List>
    )
}

export default GraphToggles