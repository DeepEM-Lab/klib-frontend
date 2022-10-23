import { Container, Toolbar } from "@mui/material"
import { createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { blue, green, lightBlue, red, teal } from '@mui/material/colors';
import { useState } from 'react';
import NavigationBar from "./NavigationBar"


const PageParent = (/** 
@type {{ 
    children: NonNullable<React.ReactNode>; 
    fullHeight?: boolean;
    minWidth?: number | string;
}} 
**/ props) => {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    let [darkMode, setDarkMode] = useState(() => {
        let dark_mode = localStorage.getItem("dark_mode")
        switch (dark_mode) {
            case "true":
                return true
            case "false":
                return false
            default:
                return prefersDarkMode
        }
    })

    const theme = createTheme({
        palette: {
            primary: {
                main: teal[500]
            },
            secondary: {
                main: blue[600]
            },
            error: red,
            success: green,
            info: lightBlue,
            mode: darkMode ? "dark" : "light",
        },
        typography: {
            fontFamily: "Rubik",
            fontSize: 16,
            fontWeightLight: 300,
            fontWeightRegular: 500,
            fontWeightMedium: 700,
            fontWeightBold: 900,
        },
    })

    let toggleDarkMode = () => {
        localStorage.setItem("dark_mode", !darkMode ? "true" : "false")
        setDarkMode(!darkMode)
    }

    let { children, fullHeight = false, minWidth = "0rem" } = props

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth={false} style={fullHeight ? { minWidth: minWidth, height: "100%" } : { minWidth: minWidth }}>
                <NavigationBar toggleDarkMode={toggleDarkMode} />
                <Toolbar />
                {children}
            </Container >
        </ThemeProvider>
    )

}

export default PageParent