import { Card, CardActionArea, Typography } from "@mui/material"
import { green, orange, pink } from "@mui/material/colors"


const ElementColors = new Map([
    ["metal", orange[200]],
    ["metalloid", pink[100]],
    ["nonmetal", green[200]]
])

//TODO: Hover zoom animation
let ElementButton = (
/**
@type {{
    atomicNumber: number;
    atomicMass: number;
    elementName: string;
    elementSymbol: string;
    elementType: string; //ElementTypes
}}
*/ props) => {
    let { atomicNumber, atomicMass, elementName, elementSymbol, elementType } = props

    return (
        <Card sx={{
            width: "100%",
            aspectRatio: "1",
            borderRadius: 0,
            border: "0.1vw solid",
            borderColor: "green",
            backgroundColor: ElementColors.get(elementType)
        }}>
            <CardActionArea sx={{ py: "0.2vw", px: "0.2vw" }}>
                <Typography color="black" fontSize="0.6vw" lineHeight="0.6vw">
                    {atomicNumber}
                </Typography>
                <Typography color="black" fontSize="2vw" lineHeight="2vw" textAlign="center">
                    {elementSymbol}
                </Typography>
                <Typography color="black" fontSize="0.6vw" lineHeight="0.6vw" textAlign="center" >
                    [{atomicMass}]
                </Typography>
                <Typography color="black" fontSize="0.5vw" lineHeight="0.5vw" textAlign="center">
                    {elementName}
                </Typography>
            </CardActionArea>
        </Card >
    )
}
export default ElementButton