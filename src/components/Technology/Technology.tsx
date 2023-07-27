import React, {FC} from 'react';
import {CardContent, Chip, Typography} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

interface TechnologyProps {
}

const Technology: FC<TechnologyProps> = () => (
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <BusinessIcon/> TECHNOLOGY
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            <Chip label="Java"/>
            <Chip label="Spring"/>
            <Chip label="Spring Boot"/>
            <Chip label="React"/>
            <Chip label="Kubernetes"/>
            <Chip label="Docker"/>
        </Typography>
        <Typography gutterBottom variant="h5" component="div">


        </Typography>
    </CardContent>
);

export default Technology;
