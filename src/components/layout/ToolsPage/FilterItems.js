import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material';
import { ItemCard } from './ItemCard';

export default function FilterItems({searchstring, list, category, type}) {


    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(
            list
                .filter((element) => {
                    if (type === '') {
                        return element;
                    }
                    else {
                        return element.type.toLowerCase() === type
                    }
                })        
                .filter((element) => {
                    if (category === '') {
                        return element;
                    }
                    else {
                        return element.category.toLowerCase() === category
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
    }, [list, type, category, searchstring])

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
                        <ItemCard 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            type={item.type}
                            category={item.category}
                        />
                    );
                })}
            </Grid>
        </Box>
    )
}
