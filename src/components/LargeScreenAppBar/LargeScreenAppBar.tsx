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
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <BusinessIcon />
                    <Button component={RouterLink} to="/" variant="contained" disableElevation>
                        <Typography variant="body2">
                            LR Services
                        </Typography>
                    </Button>

                </IconButton>
            </Toolbar>
            <img src={process.env.PUBLIC_URL + "/banner_large.png"} />
        </AppBar>
    </Box>
);

export default LargeScreenAppBar;
