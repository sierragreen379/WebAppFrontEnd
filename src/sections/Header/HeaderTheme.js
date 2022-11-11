// Not currently used, just here for experimenting

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./HeaderTheme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export default function App() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#ffc529",
                dark: "feb74c",
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
                <Header />
            </ThemeProvider>
        </StrictMode>
    );
}