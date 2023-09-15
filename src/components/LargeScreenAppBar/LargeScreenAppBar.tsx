import React, { FC } from 'react';
import styles from './LargeScreenAppBar.module.scss';
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BusinessIcon from "@mui/icons-material/Business";
import {Button} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";

interface LargeScreenAppBarProps {}

const LargeScreenAppBar: FC<LargeScreenAppBarProps> = () => (
    <Box sx={{flexGrow: 1}}>
        <img src={process.env.PUBLIC_URL + "/banner_large.png"} width="35%" />
    </Box>
);

export default LargeScreenAppBar;
