import {Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import React, { FC } from 'react';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

interface CareerProfileBoxProps {}

const CareerProfileBox: FC<CareerProfileBoxProps> = () => (
    <Card variant="outlined">
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <Diversity3Icon /> COMPANY PROFILE
            </Typography>
            <Typography variant="body1" color="text.secondary">
                We deliver high quality E2E solutions. Mainly with Spring Boot,
                React and Angular.
            </Typography>
            <Typography variant="body1" color="text.secondary">
                We love to use TDD, Functional Programming Style and Clean Code Principles.
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Our philosophy is...
            </Typography>
            <Typography variant="body1" color="text.secondary">
                <VolunteerActivismIcon />
            </Typography>
            <Typography variant="body1" color="text.secondary">
                ... do what you love.
            </Typography>
        </CardContent>
    </Card>
);

export default CareerProfileBox;
