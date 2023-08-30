import { Box, Button, useTheme } from '@mui/material'
import { tokens } from '../../../../theme'

import { HashLink } from 'react-router-hash-link';
import './ScrollToPricing.css';

import SportsScoreIcon from '@mui/icons-material/SportsScore';


export default function ScrollToPricing() {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <Box>
            <HashLink smooth to="#pricing">
                <Button sx={{ backgroundColor: colors.grey[100], color: colors.grey[900] }} className="btn btn-1">
                    <SportsScoreIcon />Subscribe now<SportsScoreIcon />
                </Button>
            </HashLink>
        </Box>
    )
}
