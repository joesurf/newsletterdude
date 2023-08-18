import React from 'react';
import { Box } from '@mui/material';

import Introduction from '../components/layout/ChallengePage/Introduction';
import SearchList from '../components/layout/ChallengePage/SearchList';
 

function ChallengePage() {
  return (
    <Box>
        <Introduction />
        <SearchList />
    </Box>
  )
}

export default ChallengePage