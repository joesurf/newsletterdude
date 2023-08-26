import { Box, Button, useTheme } from '@mui/material'
import { tokens } from '../../../theme';

import { HashLink } from 'react-router-hash-link';


export default function CommunityJoinButton() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <HashLink>
                <Button
                    onClick={() => {window.open("https://blog.newsletterdude.com/#/portal/signup/free", "_blank")}} 
                    sx={{ backgroundColor: colors.grey[100], color: colors.grey[900] }}
                >
                    Join the newsletter community waitlist
                </Button>
            </HashLink>
        </Box>
    )
}
