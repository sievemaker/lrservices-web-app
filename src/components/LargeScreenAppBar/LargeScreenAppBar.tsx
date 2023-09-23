import React, {FC, useEffect, useState} from 'react';
import styles from './LargeScreenAppBar.module.scss';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BusinessIcon from "@mui/icons-material/Business";
import {Button, Fade, Slide} from "@mui/material";
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
            setTimeout(() => setIsIn(true), 100)

        }
        window.addEventListener('resize', handleResize)

        setTimeout(() => setIsIn(true), 100)
        return () => document.removeEventListener('resize', handleResize);
    }, []);

    return (<Box sx={{flexGrow: 1}}>
        <Box sx={{flexGrow: 1, height: containerRef?.current?.scrollHeight.valueOf()}} ref={containerRef}>
            <Slide in={isIn} timeout={{enter: 1000, exit: 100}}>
                <img src={process.env.PUBLIC_URL + "/banner_large.png"} width="35%"/>
            </Slide>
        </Box>
    </Box>)

};

export default LargeScreenAppBar;
