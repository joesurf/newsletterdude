import React from 'react'
import SenjaEmbed from '../../../UI/SenjaEmbed/SenjaEmbed'
import { Box, Grid } from '@mui/material'


const TESTIMONIALS = [
    {
        id: "388c2ea0-3631-4c18-ae6e-f15fcf86b475",
    },
    {
        id: "496015e7-985b-4a74-b034-a908d800f255",
    },
]


function Testimonials() {

  return (
    <Grid container spacing={2}>
        {TESTIMONIALS.map((testimonial, i) => {
            return (
                <Grid key={i} item xs={12} md={6} lg={4}>
                    <Box display="flex" justifyContent="center">
                        <SenjaEmbed id={testimonial.id} width="90%" />
                    </Box>
                </Grid>
            )
        })}
    </Grid>
  )
}

export default Testimonials