import React, {FC} from 'react';
import {Avatar, CardContent, Chip, Typography} from "@mui/material";
import HubIcon from '@mui/icons-material/Hub';
import avatar from "../../public/IMG_1233.jpg"
import Stack from "@mui/material/Stack";
interface TechnologyProps {
}

const Technology: FC<TechnologyProps> = () => (
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <HubIcon/> Arbeitsweise
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
            Ich bin bei der Entwicklung von komplexen und hoch verfügbaren Systemen
            tätig. Zu meinen Aufgaben gehören selbstständige Umsetzung fachlicher und
            technischer Anforderungen, die
            Durchführung von Maßnahmen zur Qualitätssicherung während und nach
            Abschluss der Entwicklung (Code Review etc.) sowie Anpassungen im Frontend.
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
            <Avatar alt="Lukasz Rzeszotarski" src={avatar} sx={{ width: 56, height: 56, margin: "auto" }} />
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            LUKASZ RZESZOTARSKI
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
            Freelancer & Full-Stack Entwickler
        </Typography>
    </CardContent>
);

export default Technology;
