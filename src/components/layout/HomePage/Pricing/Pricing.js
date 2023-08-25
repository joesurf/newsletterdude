import { Box, Button, useTheme } from '@mui/material'
import { tokens } from '../../../../theme'


export default function GhostEmbeddablePricingButton() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const handleSubmit = (event) => {
        event.preventDefault();

        window.location.replace("https://blog.newsletterdude.com/#/portal/signup")
    }

    return (
        <Box>
            <Button onClick={handleSubmit} sx={{ backgroundColor: colors.grey[100], color: colors.grey[900] }}>
                Join the newsletter community
            </Button>
        </Box>
    )
}
