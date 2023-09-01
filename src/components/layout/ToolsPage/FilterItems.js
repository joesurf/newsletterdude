import React, { useEffect, useState } from 'react'
import { Grid, Box } from '@mui/material';
import { ItemCard } from './ItemCard';

export default function FilterItems({searchstring, list, category}) {
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(
            (Array.isArray(list) ? list : [])     
                .filter((element) => {
                    if (category === '') {
                        return element;
                    }
                    else {
                        return element.newsletter_category.includes((category))
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
                .filter((element) => {
                    return element.published;
                })
        )
    }, [list, category, searchstring])

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
                            image_id={item.image_id}
                            article_link={item.article_link}
                            newsletter_category={item.newsletter_category}
                        />
                    );
                })}
            </Grid>
        </Box>
    )
}
