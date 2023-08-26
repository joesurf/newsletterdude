import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Stack from '@mui/material/Stack';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../../theme';

import logo from "../../../assets/NewsletterDudeLogo.png";


function RatingAvatar({ testimonials }) {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [averageRating, setAverageRating] = useState(5)

  useEffect(() => {
      const calculateAverageRating = (testimonials) => {
      const ratings = testimonials.map((testimonial) => testimonial.rating).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
      },0);
      return ratings / testimonials.length;
    }
    if (testimonials.length !== 0) {
      setAverageRating(calculateAverageRating(testimonials));
    }
  }, [testimonials])

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      {testimonials.length !== 0 ?
        <Box sx={{ display: "flex", flexDirection: "row", margin: "auto" }}>
            <AvatarGroup max={4} sx={{ marginRight: "10px" }}>
                {testimonials.map((item, i) => {
                return (
                    <Avatar
                      key={i}
                      alt={item.name} 
                      src={logo}
                      sx={{
                          width: 15,
                          height: 15,
                          backgroundColor: colors.grey[500]
                      }}
                    />
                )})}
            </AvatarGroup>
            <Stack spacing={-1}>
                <Typography variant="body2" sx={{ color: "#5B8FB9", margin: "auto", textAlign: "left" }}>
                {Array(5)
                  .fill(0)
                  .fill(1, 0, averageRating % 5 === 0 ? averageRating : averageRating % 5)
                  .fill(averageRating % 1 > 0.25 ? (averageRating % 1 < 0.75 ? 0.5: 1) : 0, averageRating % 5, averageRating % 5 + 1)
                  .map((item, i) => {
                    return (
                      <span key={i}>
                      {item === 1 ? <StarIcon sx={{ width: 15, height: 15, color: colors.grey[500] }} /> 
                      : item === 0.5 ? <StarHalfIcon sx={{ width: 15, height: 15, color: colors.grey[500] }} /> 
                      : <StarOutlineIcon sx={{ width: 15, height: 15, color: colors.grey[500] }} />}
                      </span>
                    )
                })
                }
                </Typography>
                <Typography variant="body2" sx={{ color: colors.grey[500], margin: "auto", textAlign: "left", fontSize: 10 }}>
                  from {testimonials.length} reviews
                </Typography>
            </Stack>
        </Box>
        : 
        <Typography variant="body2" sx={{ color: "white", margin: "auto", textAlign: "left", fontSize: 10 }}>
          no reviews yet
        </Typography>}
    </Box>
  )
}

export default RatingAvatar