import { Box, Button, useTheme } from '@mui/material'
import { tokens } from '../../../../theme'

import { HashLink } from 'react-router-hash-link';


export default function ScrollToPricing() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <HashLink smooth to="#pricing">
                <Button sx={{ backgroundColor: colors.grey[100], color: colors.grey[900] }}>
                    Subscribe to the newsletter
                </Button>
            </HashLink>
        </Box>
    )
}
