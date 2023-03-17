import React, { FC } from 'react';
import styles from './ExperienencesBox.module.scss';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import ExperienencesTimeline from "../ExperienencesTimeline/ExperienencesTimeline";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Grid from "@mui/material/Unstable_Grid2";
import CareerProfileBox from "../CareerProfileBox/CareerProfileBox";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BusinessCard from "../BusinessCard/BusinessCard";
interface ExperienencesBoxProps {}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ExperienencesBox: FC<ExperienencesBoxProps> = () => (
    <Card variant="outlined">
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <PeopleAltIcon /> TEAM
            </Typography>
            <Typography variant="body2" color="text.secondary">
                <BusinessCard />
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
);

export default ExperienencesBox;
