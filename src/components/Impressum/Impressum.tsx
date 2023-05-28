import React, { FC } from 'react';
import styles from './Impressum.module.scss';
import {Grid, Link, Typography} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {saveAs} from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

interface ImpressumProps {}

const Impressum: FC<ImpressumProps> = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 0,
        boxShadow: 'none',
    }));
    const ItemGrid = styled(Grid)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        border: 0
    }));
    return (<div className={styles.Impressum} data-testid="Impressum">
        <Typography gutterBottom variant="h5" component="div">
            <BusinessIcon/> COMPANY DATA
        </Typography>
        <Grid container spacing={2}>
            <ItemGrid item xs={7}>
                <Item>
                    <Typography variant="body1" color="text.secondary">
                        Łukasz Rzeszotarski Services
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        LR Services
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        VAT-Id: PL9562082060
                    </Typography>
                </Item>
            </ItemGrid>
            <ItemGrid item xs={5}>
                <Item>
                    <Typography variant="body1" color="text.secondary">
                        <Button variant="contained" href="mailto:lukasz.rzeszotarski.services@outlook.com" endIcon={<SendIcon/>}>
                            Send Email
                        </Button>
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="body1" color="text.secondary">
                        <Button variant="contained" href="https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=04dc73f8-13c9-45fb-8656-ed4690054b8b" endIcon={<BusinessIcon/>}>
                            Impressum
                        </Button>
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="body1" color="text.secondary">
                        <Button
                            onClick={() => {
                                fetch(process.env.PUBLIC_URL + '/cv.pdf').then(response => {
                                    response.blob().then(blob => saveAs(blob, "Lukasz-Rzeszotarski-Resume.pdf"))
                                })
                            }}
                            variant="contained"
                            endIcon={<FileDownloadIcon/>}
                        >Resume</Button>
                    </Typography>
                </Item>
            </ItemGrid>
        </Grid>
    </div>)
};

export default Impressum;
