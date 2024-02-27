import React, {FC, useEffect, useState} from 'react';
import styles from './SmallScreenAppBar.module.scss';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BusinessIcon from "@mui/icons-material/Business";
import {Button, Container, Link, Menu, MenuItem, Slide} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";

interface SmallScreenAppBarProps {
}

const SmallScreenAppBar: FC<SmallScreenAppBarProps> = () => {

    const containerRef = React.useRef<HTMLElement>(null);

    const [isIn, setIsIn] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsIn(true), 300);
    }, []);

    return (
        <Box sx={{minHeight: containerRef?.current?.scrollHeight?.valueOf(), overflow: 'hidden'}} ref={containerRef}>
            <AppBar position="static" sx={{backgroundColor:'#000000'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img src={process.env.PUBLIC_URL + "/softinnotec.png"} width="20%"/>
                        <Typography variant="body2" component="div" sx={{
                            mr: 2,
                            fontFamily: 'monospace',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1
                        }}>

                        Komplexität beherrschen, Qualität garantieren.
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box sx={{
                flexGrow: 1,
                minHeight: containerRef?.current?.scrollHeight.valueOf(),
                background: 'linear-gradient(to right bottom, #000000, #0B0B0B)'
            }} ref={containerRef}>

                <Slide in={isIn} timeout={{enter: 1000, exit: 100}}>
                    <img src={process.env.PUBLIC_URL + "/banner_large.png"} width="80%"/>
                </Slide>

            </Box>
        </Box>)
    ;
}

export default SmallScreenAppBar;
