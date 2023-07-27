import React, { FC } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BusinessIcon from "@mui/icons-material/Business";

interface BottomNavigationComponentProps {}

const BottomNavigationComponent: FC<BottomNavigationComponentProps> = () =>{
    const [value, setValue] = React.useState(0);

    const handleClick = () => {
        window.location.replace("https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=04dc73f8-13c9-45fb-8656-ed4690054b8b")
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
