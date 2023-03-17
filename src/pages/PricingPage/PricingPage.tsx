import React, { FC } from 'react';
import styles from './PricingPage.module.scss';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Typography} from "@mui/material";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LinkedInLink from "../../components/LinkedInLink/LinkedInLink";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonth";
import ListItemText from "@mui/material/ListItemText";
import PaidIcon from "@mui/icons-material/Paid";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TimerIcon from '@mui/icons-material/Timer';
import TimelineContent from "@mui/lab/TimelineContent";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import BuildIcon from '@mui/icons-material/Build';
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface PricingPageProps {}

const PricingPage: FC<PricingPageProps> = () => (
    <Card>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                <PaidIcon/> PRICING STRATEGY
            </Typography>
            <Typography variant="body1" color="text.secondary">
                We do not have any fixed hourly rate. How much you pay depends on many factors and is always discussed with
                you to find out the satisfying price. Contact with us, after we get more details about the project
                we will be able to give you an estimated price.

                While contacting provide us with answers to the following questions...
                <Box sx={{ mx: 'auto', width: 400, pb: 2 }}>…
                    <Timeline position="alternate">
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot color="success">
                                    <CalendarMonthOutlinedIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Start
                                </Typography>
                                <Typography>When the project begins?</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot>
                                    <TimerIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Duration
                                </Typography>
                                <Typography>For how long it is planned?</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot color="success">
                                    <BuildIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Skills
                                </Typography>
                                <Typography>What languages, frameworks, tech stack, etc. you need?</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot color="error">
                                    <LocationOnIcon/>
                                </TimelineDot>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Location
                                </Typography>
                                <Typography>Is this remote or on site project?</Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineConnector/>
                                <TimelineDot>
                                    <PaidIcon/>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{py: '12px', px: 2}}>
                                <Typography variant="h6" component="span">
                                    Hourly Rate
                                </Typography>
                                <Typography>What is your expected price?</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
                We are looking forward to hearing from you.
            </Typography>
        </CardContent>
    </Card>
);

export default PricingPage;
