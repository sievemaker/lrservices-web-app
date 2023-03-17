import React, {FC} from 'react';
import styles from './SmallScreenAppBar.module.scss';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import BusinessIcon from "@mui/icons-material/Business";
import {Button, Link, Menu, MenuItem} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";

interface SmallScreenAppBarProps {
}

const SmallScreenAppBar: FC<SmallScreenAppBarProps> = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={handleOpenUserMenu}
                >
                    <MenuIcon/>
                    <Button component={RouterLink} to="/" variant="contained" disableElevation>
                        <Typography variant="body2">
                            LR Services
                        </Typography>
                    </Button>

                </IconButton>
            </Toolbar>
            <img src={"banner_small.png"} />
        </AppBar>)
    ;
}

export default SmallScreenAppBar;
