import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

function App() {

    const theme = createTheme({
        palette: {
            primary: {
                main: '#009193'
            },
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontSize: 16,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
