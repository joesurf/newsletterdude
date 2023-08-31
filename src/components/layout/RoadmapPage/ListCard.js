import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react'
import { Grid, Box, Typography, Paper, useTheme, Divider } from '@mui/material'
import { tokens } from '../../../theme'

import ConfirmDialog from '../../UI/ConfirmDialog/ConfirmDialog'
// import ImageGrid from '../../UI/ImageGrid/ImageGrid';


const RESPONSIVE_WIDTH = 600

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


function ListCard({ case_study }) {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const [infoOpen, setInfoOpen] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
  
        if (!infoOpen) setInfoOpen(true)
    }
  
    const handleClose = () => {
      setInfoOpen(false);
    }  

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth)
        } 
    
        window.addEventListener('resize', handleResize)
      }, [])

  return (
    <Grid onClick={handleSubmit} item xs={12} sx={{
        "&:hover": { cursor: "pointer" }
    }}>
        <Item>
            <Box display="flex" flexDirection={windowWidth > RESPONSIVE_WIDTH ? "row" : "column"}>
                <Box 
                    width={windowWidth > RESPONSIVE_WIDTH ? "40%" : "100%"} 
                    display="flex" 
                    alignItems="center" 
                    justifyContent={windowWidth > RESPONSIVE_WIDTH ? "" : "center"}
                >
                    {/* <ImageGrid src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/Newsletter/${case_study.image_id}`} maxWidth="50px" /> */}
                    <Typography variant="h4" sx={{ color: colors.grey[100] }}>
                        {case_study.title}
                    </Typography>
                </Box>
                {windowWidth > RESPONSIVE_WIDTH ? <></> : <Divider variant="middle" sx={{ my: "10px" }} />}
                <Box width={windowWidth > RESPONSIVE_WIDTH ? "60%" : "100%"} display="flex" flexDirection="row" justifyContent="space-around">
                    {case_study.data.map((data, i) => {
                        return (
                            <Box key={i} display="flex" justifyContent="center" flexDirection="column">
                                <Typography variant="h5" sx={{ color: colors.grey[100] }}>
                                    {data.value}
                                </Typography>                                                
                                <Typography variant="h6" sx={{ color: colors.grey[500] }}>
                                    {data.header}
                                </Typography>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </Item>
        <ConfirmDialog
            open={infoOpen}
            onClose={handleClose}
            link={case_study.article_link}
        >
            <Box>
                <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    {case_study.title}
                </Typography>
                <Typography variant="h6">
                    {case_study.description}
                </Typography>
                <Typography variant="h5" fontWeight="bold" mt="10px">
                    Steps Involved
                </Typography>
                <Typography variant="h5" mt="10px" fontWeight="bold">
                    Relevant tools
                </Typography>
            </Box>
        </ConfirmDialog>
    </Grid>
  )
}

export default ListCard