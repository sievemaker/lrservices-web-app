import React, {FC} from 'react';
import {Avatar, CardContent, Chip, Typography} from "@mui/material";
import HubIcon from '@mui/icons-material/Hub';
import avatar from "../../public/IMG_1233.jpg"
import Stack from "@mui/material/Stack";
import ActiveAvatar from "../ActiveAvatar/ActiveAvatar";
interface TechnologyProps {
}

const Technology: FC<TechnologyProps> = () => (
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <HubIcon/> Arbeitsweise
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
            Wir sind ein spezialisiertes Unternehmen in der Full-Stack-Entwicklung von hochkomplexen und hochverfügbaren Systemen. Unser Fokus liegt auf der eigenständigen Umsetzung sowohl fachlicher als auch technischer Anforderungen. Wir garantieren Qualität durch umfassende Maßnahmen zur Qualitätssicherung während des Entwicklungsprozesses sowie im Anschluss, einschließlich Code-Reviews und anderen bewährten Verfahren.
        </Typography>
        <Typography gutterBottom variant="body2" component="div">
            <ActiveAvatar />
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            LUKASZ RZESZOTARSKI
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
            Firmeninhaber und Full-Stack-Entwickler
        </Typography>
    </CardContent>
);

export default Technology;
