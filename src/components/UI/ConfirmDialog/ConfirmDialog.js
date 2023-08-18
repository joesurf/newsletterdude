import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
} from "@mui/material";

const ConfirmDialog = (props) => {
    const { onClose, open, children } = props;


    const handleClose = () => {
        onClose()
    };


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
        <DialogActions>
            <Button onClick={handleClose}>Close</Button>
        </DialogActions>
        </Dialog>
    );
};
export default ConfirmDialog;
