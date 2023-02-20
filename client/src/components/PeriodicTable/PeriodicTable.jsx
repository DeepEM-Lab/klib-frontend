import { Grid } from "@mui/material"
import { allElements } from "./ElementInfo"
import ElementButton from "./ElementButton"


const PeriodicTable = () => {

    return (
        <Grid container width="100%" spacing={0} columns={18} justifyContent="center" alignContent="center">
            {
                allElements.map((e, i) => (
                    <Grid item key={i} xs={1}>
                        {e ? (
                            <ElementButton
                                atomicNumber={e.atomicNumber}
                                atomicMass={e.atomicMass}
                                elementName={e.elementName}
                                elementType={e.elementType}
                                elementSymbol={e.elementSymbol}
                            />
                        ) : (<></>)
                        }
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default PeriodicTable