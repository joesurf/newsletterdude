import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import {
    Box,    
    Dialog,
    DialogActions,
    DialogContent,
    Button,
    useTheme
} from "@mui/material";
import { tokens } from "../../../theme";

const ConfirmDialog = (props) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

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
            <span style={{ color: colors.grey[100] }}>
                {link ? 
                    <Box display="flex" alignItems="center">Read the article<KeyboardDoubleArrowRightIcon sx={{ color: colors.grey[100] }} /></Box> 
                    : "Writing in progress..."}
            </span>
            </Button>
        </DialogActions>
        <DialogActions>
            <Button autoFocus onClick={handleClose}><span style={{ color: colors.grey[100] }}>Close</span></Button>
        </DialogActions>
        </Box>
        </Dialog>
    );
};
export default ConfirmDialog;
