import { AppBar, Toolbar, Grid, Typography, IconButton, useTheme, Menu, MenuItem, Button } from "@mui/material"
import { LightMode, NightsStay } from "@mui/icons-material"
import { Link } from "react-router-dom"




const menu = [
    { name: "Home", path: "/" },
    { name: "Page1", path: "/" },
    { name: "Page2", path: "/" },
    { name: "Page3", path: "/" },
]

const NavigationBar = (
/**
@type {{
    toggleDarkMode: () => void;
}}
*/ props) => {
    let { toggleDarkMode } = props
    const theme = useTheme()

    return (
        <AppBar color="transparent" sx={{ backgroundColor: "background.default" }}>
            <Toolbar>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Grid container spacing={3} alignItems="center">
                            <Grid item>
                                <Typography component={Link} to="/" display="block" color="primary" variant="h5" noWrap sx={{ fontWeight: "medium" }}>
                                    DeepEm Klib
                                </Typography>
                            </Grid>
                            <Grid item width="2rem"/>
                            {menu.map((page, i) => (
                                <Grid item key={i}>
                                    <Button component={Link} to={page.path} color="secondary">{page.name}</Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={toggleDarkMode} size="large">
                            {
                                theme.palette.mode === "dark" ? (
                                    <LightMode fontSize="small" />
                                ) : (
                                    <NightsStay fontSize="small" />
                                )
                            }
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavigationBar