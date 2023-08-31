import { Box, Grid } from '@mui/material'
import { useState, useEffect } from 'react';

import ListCard from './ListCard';


function CaseStudies({ newsletterdata, searchstring, category }) {
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(
            newsletterdata     
                .filter((element) => {
                    if (category === '') {
                        return element;
                    }
                    else {
                        return element.category.includes((category))
                    }
                })
                .filter((element) => {
                    if (searchstring === '') {
                        return element;
                    }
                    else {
                        return element.title.toLowerCase().includes(searchstring)
                    }
                })
        )
    }, [newsletterdata, category, searchstring])

  return (
    <Box>
        <Grid container spacing={2}>
            {filteredList.map((case_study, i) => {
                return (
                    <ListCard key={i} case_study={case_study} />
                )
            })}
        </Grid>
    </Box>
  )
}

export default CaseStudies 