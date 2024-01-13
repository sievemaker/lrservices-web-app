import React, { FC } from 'react';
import styles from './Impressum.module.scss';
import {Grid, Link, Typography} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {saveAs} from "file-saver";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

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
            <ConnectWithoutContactIcon/> KONTAKT
        </Typography>
        <Grid container spacing={1}>
            <ItemGrid item xs={14}>
                <Item>
                    <Typography variant="body1" color="text.primary">
                        softinnotec Lukasz Rzeszotarski
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        USt-IdNr. PL9562082060
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        softinnotec@outlook.com
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        +48 795 710 483
                    </Typography>
                    <Item>
                        <Typography variant="body1" color="text.secondary">
                            <Button variant="contained" href="tel:+48795710483" endIcon={<PhoneForwardedIcon/>}>
                                Anruf
                            </Button>
                        </Typography>
                    </Item>
                    <Item>
                        <Typography variant="body1" color="text.secondary">
                            <Button variant="contained" href="mailto:softinnotec@outlook.com" endIcon={<SendIcon/>}>
                                E-Mail Senden
                            </Button>
                        </Typography>
                    </Item>
                    <Item>
                        <Typography variant="body1" color="text.secondary">
                            <Button variant="outlined" target="_blank" href="https://aplikacja.ceidg.gov.pl/ceidg/ceidg.public.ui/SearchDetails.aspx?Id=04dc73f8-13c9-45fb-8656-ed4690054b8b" endIcon={<BusinessIcon/>}>
                                Impressum
                            </Button>
                        </Typography>
                    </Item>
                </Item>
            </ItemGrid>
        </Grid>
    </div>)
};

export default Impressum;
