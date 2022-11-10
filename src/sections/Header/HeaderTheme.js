import { ThemeProvider, createTheme } from "@mui/material";
import { StrictMode } from "react";

const theme = createTheme({
    palette: {
        primary: {
            main: "#ffc529",
            dark: "#feb74c",
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

root.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>
);