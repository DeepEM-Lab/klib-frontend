import { Box, Grid, Paper, Typography } from "@mui/material"
import PageParent from "../structures/PageParent"

const HomePage = () => {

    return (
        <PageParent>
            <Grid container py="2vw" spacing="1vw" display="flex" justifyContent="center" alignContent="center" >
                <Grid item xs={10}>
                    <Paper elevation={5} sx={{ padding: "1vw" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae proin sagittis nisl rhoncus mattis. Vulputate eu scelerisque felis imperdiet.
                    </Paper>
                </Grid>
            </Grid>
        </PageParent>
    )

}

export default HomePage