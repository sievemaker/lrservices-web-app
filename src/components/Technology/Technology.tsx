import React, {FC} from 'react';
import {CardContent, Chip, Typography} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import ShareIcon from "@mui/icons-material/Share";
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {saveAs} from "file-saver";

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
