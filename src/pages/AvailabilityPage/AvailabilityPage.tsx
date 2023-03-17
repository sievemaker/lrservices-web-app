import React, {FC} from 'react';
import styles from './AvailabilityPage.module.scss';
import AppBarComponent from "../../components/AppBarComponent/AppBarComponent";
import {Outlet} from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import LinkedInLink from "../../components/LinkedInLink/LinkedInLink";
import Box from "@mui/material/Box";
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from "@mui/material/Typography";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonth";
import {TwitterTimelineEmbed} from "react-twitter-embed";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {Grid} from "@mui/material";

interface AvailabilityPageProps {
}

const AvailabilityPage: FC<AvailabilityPageProps> = () => {
    const availableFrom = dayjs('2023-07-01');
    const [value, setValue] = React.useState<Dayjs | null>(availableFrom);
    const ItemCard = styled(Card)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 0,
        boxShadow: 'none',
    }));
    return (
        <ItemCard>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    <CalendarMonthOutlinedIcon/> AVAILABILITY
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Presumably not available before:
                    <Box sx={{ mx: 'auto', width: 400, pb: 2, my: 3}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                open={false}
                                disabled={true}
                                label="Available starting from:"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </Box>
                </Typography>
            </CardContent>
        </ItemCard>
    );
}

export default AvailabilityPage;
