import { Box, Button, Typography, useTheme } from '@mui/material'
import { tokens } from '../../../theme';

import { HashLink } from 'react-router-hash-link';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';


export default function CommunityJoinButton() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <HashLink>
                <Button
                    onClick={() => {window.open("https://blog.newsletterdude.com/#/portal/signup/free", "_blank")}} 
                    sx={{ backgroundColor: colors.grey[100], color: colors.grey[900] }}
                    className="btn btn-1"
                >
                    <PeopleOutlineIcon /><Typography variant="h5" paddingX="10px">Join the newsletter community waitlist</Typography><PeopleOutlineIcon />
                </Button>
            </HashLink>
        </Box>
    )
}
