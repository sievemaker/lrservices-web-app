import React, {FC} from 'react';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TechnologyPage from "../TechnologyPage/TechnologyPage";

interface MainPageProps {
}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const MainPage: FC<MainPageProps> = () => {
        return (
            <TechnologyPage />
        )
    }
;

export default MainPage;
