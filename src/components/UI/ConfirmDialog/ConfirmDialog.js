import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import {
Box,    
Dialog,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";

const ConfirmDialog = (props) => {
    const { onClose, open, children, link } = props;

    const handleClose = () => {
        onClose()
    };

    const redirectToBlog = () => {
        if (link) window.open(link, "_blank", "noreferrer")
    }


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogContent>
            {children}
        </DialogContent>
        <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <DialogActions>
            <Button disabled={link ? false : true} autoFocus onClick={redirectToBlog}>
                {link ? "Read the article" : "Writing in progress..."}
                <KeyboardDoubleArrowRightIcon />
            </Button>
        </DialogActions>
        <DialogActions>
            <Button autoFocus onClick={handleClose}>Close</Button>
        </DialogActions>
        </Box>
        </Dialog>
    );
};
export default ConfirmDialog;
