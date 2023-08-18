import React from 'react';
import { Grid, Box } from '@mui/material';
import ListCard from './ListCard';


function FilterList({searchstring, list}) {
    const filteredList = list.filter((element) => {
        if (searchstring === '') {
            return element;
        }
        else {
            return element.title.toLowerCase().includes(searchstring)
        }
    })
    
    return (
        <Box>
            <Grid 
                container 
                alignItems="center"
                // justifyContent="space-between"                
                sx={{ margin: 0, mt: "1rem" }}
                columns={13}
            >
                {filteredList
                    .sort((a, b) => a.title.localeCompare(b.title))
                    .map((item) => {
                    return (
                        <ListCard
                            key={item.id}
                            title={item.title}
                            author={item.author}
                            image={item.image}
                            recommendation={item.recommendation}
                            description={item.description}
                            current={item.current}
                            category={item.category}
                            graphdata={item.graphdata}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
}

export default FilterList