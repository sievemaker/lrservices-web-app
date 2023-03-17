import React, { FC } from 'react';
import styles from './BottomNavigationComponent.module.scss';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from "@mui/icons-material/Business";
import { Link } from 'react-router-dom';
import Snackbar from "@mui/material/Snackbar";
import {Alert} from "@mui/material";
import Impressum from "../Impressum/Impressum";


interface BottomNavigationComponentProps {}

const BottomNavigationComponent: FC<BottomNavigationComponentProps> = () =>{
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        window.location.replace("https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=04dc73f8-13c9-45fb-8656-ed4690054b8b")
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Box sx={{p: 8}}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Impressum" icon={<BusinessIcon />} onClick={handleClick}/>
            {/* eslint-disable-next-line react/jsx-no-undef */}
        </BottomNavigation>
        </Box>
    );
}

export default BottomNavigationComponent;
