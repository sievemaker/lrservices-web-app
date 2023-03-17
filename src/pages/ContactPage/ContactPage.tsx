import React, {FC} from 'react';
import {Link, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonth';
import PaidIcon from '@mui/icons-material/Paid';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import Box from "@mui/material/Box";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LinkedInLink from "../../components/LinkedInLink/LinkedInLink";

interface ContactPageProps {
}

const ContactPage: FC<ContactPageProps> = () => (
    <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <ConnectWithoutContactIcon/> HOW TO GET IN TOUCH?
            </Typography>
            <Typography variant="body1" color="text.secondary">
                The best way to contact is sending a direct message on <LinkedInLink /> platform.
                It would be also the fastest way to be informed about
                <Box sx={{ mx: 'auto', width: 400, pb: 2 }}>…
                    <List sx={{bgcolor: 'background.paper'}}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <CalendarMonthOutlinedIcon color="error"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Availability" secondary="March 1, 2022"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <PaidIcon color="warning"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Pricing" secondary="On request"/>
                        </ListItem>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <LibraryAddCheckIcon color="success"/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Skills" secondary="Java, Spring Boot, React, Angular, much more..."/>
                        </ListItem>
                    </List>
                </Box>
                ... and answer other questions you might have.
            </Typography>
        </CardContent>
    </Card>
);

export default ContactPage;
