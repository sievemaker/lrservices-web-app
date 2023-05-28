import React, {FC} from 'react';
import styles from './MySnackBar.module.scss';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Typography from "@mui/material/Typography";
import LinkedInLink from "../LinkedInLink/LinkedInLink";
import SendIcon from "@mui/icons-material/Send";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface MySnackBarProps {
}

const MySnackBar: FC<MySnackBarProps> = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{width: '100%'}}>
                    <Typography variant="body1">
                        The best way to contact with us is sending an email <Button variant="contained" href="lukasz.rzeszotarski.services@outlook.com" endIcon={<SendIcon/>}>
                        Send Email
                    </Button>
                    </Typography>
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default MySnackBar;
