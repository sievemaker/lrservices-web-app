import React, { FC } from 'react';
import AppBarComponent from "../AppBarComponent/AppBarComponent";
import {Outlet} from "react-router-dom";
import {useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Unstable_Grid2";
import CompanyData from "../CompanyData/CompanyData";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MySnackBar from "../MySnackBar/MySnackBar";
import BottomNavigationComponent from "../BottomNavigationComponent/BottomNavigationComponent";

interface LayoutProps {}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Layout: FC<LayoutProps> = () => {
    const theme = useTheme();
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
    return (
    <div className="App">
        <AppBarComponent isLargeScreen={largeScreen}/>
        <Grid container spacing={2} direction={largeScreen ? "row" : "column"}>
            <Grid xs={largeScreen ? 6 : 12}>
                <Item> <Outlet />
                </Item>
            </Grid>
            <Grid xs={largeScreen ? 6 : 12}>
                <Item> <CompanyData />
                </Item>
            </Grid>
        </Grid>
    </div>
)};

export default Layout;
