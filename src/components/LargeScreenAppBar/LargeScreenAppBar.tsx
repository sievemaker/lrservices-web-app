import React, {FC, useEffect, useState} from 'react';
import styles from './LargeScreenAppBar.module.scss';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BusinessIcon from "@mui/icons-material/Business";
import {Button, Container, Fade, MenuItem, Slide} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";

interface LargeScreenAppBarProps {

}

const LargeScreenAppBar: FC<LargeScreenAppBarProps> = () => {
    const containerRef = React.useRef<HTMLElement>(null);

    const [isIn, setIsIn] = useState(false)

    useEffect(() => {
        function handleResize() {
            setIsIn(false);
            setTimeout(() => setIsIn(true), 300)

        }
        window.addEventListener('resize', handleResize)

        setTimeout(() => setIsIn(true), 300)
        return () => document.removeEventListener('resize', handleResize);
    }, []);

    return (<Box sx={{flexGrow: 1}}>
        <AppBar position="static" sx={{backgroundColor:'#000000'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={process.env.PUBLIC_URL + "/softinnotec.png"} width="20%"/>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Komplexität beherrschen, Qualität garantieren.
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
        <Box sx={{flexGrow: 1, minHeight: containerRef?.current?.scrollHeight.valueOf(), background: 'linear-gradient(to right bottom, #000000, #0B0B0B)'}} ref={containerRef}>
            <Slide in={isIn} timeout={{enter: 1000, exit: 100}}>
                <img src={process.env.PUBLIC_URL + "/banner_large.png"} width="35%"/>
            </Slide>
        </Box>
    </Box>)

};

export default LargeScreenAppBar;
