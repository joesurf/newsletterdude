import React from 'react'
import { Grid, Box } from '@mui/material';
import ReflectionCard from './ReflectionCard';


export default function ReflectionsList({ list }) {

    return (
        <Box>
            <Grid 
                container 
                alignItems="center"
                sx={{ margin: 0, mt: "1rem" }}
                columns={13}
            >
                {list
                    .sort((a, b) => b.created_at.localeCompare(a.created_at))
                    .map((item) => {
                    return (
                        <ReflectionCard 
                            key={item.id}
                            title={item.title}
                            created_at={item.created_at}
                            description={item.description}
                        />
                    );
                })}
            </Grid>
        </Box>
    )
}
