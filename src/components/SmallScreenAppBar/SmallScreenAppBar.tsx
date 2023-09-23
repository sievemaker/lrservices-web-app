import React, {FC, useEffect, useState} from 'react';
import styles from './SmallScreenAppBar.module.scss';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BusinessIcon from "@mui/icons-material/Business";
import {Button, Link, Menu, MenuItem, Slide} from "@mui/material";
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
        function handleResize() {
            setIsIn(false);
            setTimeout(() => setIsIn(true), 100)

        }
        window.addEventListener('resize', handleResize)

        setTimeout(() => setIsIn(true), 100)
        return () => document.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Box sx={{height: containerRef?.current?.scrollHeight.valueOf(), overflow: 'hidden'}} ref={containerRef}>
            <Slide in={isIn} timeout={{enter: 1000, exit: 100}}>
            <img src={process.env.PUBLIC_URL + "/banner_large.png"} width="80%"/>

            </Slide>
        </Box>)
    ;
}

export default SmallScreenAppBar;
