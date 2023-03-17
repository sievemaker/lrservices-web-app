import React from 'react';
import './App.css';
import {Alert, ScopedCssBaseline, useTheme} from "@mui/material";
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CareerProfileBox from "./components/CareerProfileBox/CareerProfileBox";
import ExperienencesBox from "./components/ExperienencesBox/ExperienencesBox";
import AppBarComponent from "./components/AppBarComponent/AppBarComponent";
import CompanyData from "./components/CompanyData/CompanyData";
import useMediaQuery from '@mui/material/useMediaQuery';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import AvailabilityPage from "./pages/AvailabilityPage/AvailabilityPage";
import Contact from "./components/Contact/Contact";
import PricingPage from "./pages/PricingPage/PricingPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="availability" element={<AvailabilityPage />} />
                    <Route path="pricing" element={<PricingPage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
