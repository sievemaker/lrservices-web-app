import React, {FC} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import Typography from "@mui/material/Typography";
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

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info" sx={{width: '100%'}}
                       action={
                           <Button variant="contained" href="mailto:lukasz.rzeszotarski.services@outlook.com" endIcon={<SendIcon/>}>
                               Send Email
                           </Button>
                       }>
                    <Typography variant="body1">
                        The best way to contact with us is sending an email
                    </Typography>
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default MySnackBar;
