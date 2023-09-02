import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react'
import { Grid, Box, Typography, Paper, useTheme, Divider, Tooltip } from '@mui/material'
import { tokens } from '../../../theme'

// import ConfirmDialog from '../../UI/ConfirmDialog/ConfirmDialog'
import ImageGrid from '../../UI/ImageGrid/ImageGrid';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


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
        window.open(case_study.article_link, '_blank')
  
        if (!infoOpen) setInfoOpen(true)
    }
  
    // const handleClose = () => {
    //   setInfoOpen(false);
    // }  

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth)
        } 
    
        window.addEventListener('resize', handleResize)
      }, [])

  return (
    <Grid 
        onClick={handleSubmit} 
        item xs={12} 
        sx={{
            "&:hover": { cursor: "pointer" }
        }}
    >
        <Item>
            <Box display="flex" flexDirection={windowWidth > RESPONSIVE_WIDTH ? "row" : "column"}>
                <Box 
                    width={windowWidth > RESPONSIVE_WIDTH ? "40%" : "100%"} 
                    display="flex" 
                    alignItems="center" 
                    justifyContent={windowWidth > RESPONSIVE_WIDTH ? "" : "center"}
                >
                    <Box width="20%">
                        {case_study.image_id 
                        ? <ImageGrid 
                            src={`${process.env.REACT_APP_SUPABASE_URL}/storage/v1/object/public/NewsletterDude/${case_study.image_id}`} 
                            maxWidth="50px"
                            width="40px"
                        />
                        : <QuestionMarkIcon fontSize="large" />}
                    </Box>
                    <Box width="80%">
                        <Typography variant="h4" sx={{ color: colors.grey[100], mx: "10px", textAlign: "left" }}>
                            {case_study.title}
                            <Tooltip title="Values are estimated. Click to visit the website." placement="top-end">
                                <InfoOutlinedIcon fontSize="small" onClick={() => { window.open(case_study.website_link, '_blank', 'noreferrer') }} />
                            </Tooltip>
                        </Typography>
                    </Box>
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
        {/* <ConfirmDialog
            open={infoOpen}
            onClose={handleClose}
            link={case_study.article_link}
        >
            <Box width="500px" height="500px">
                <iframe 
                    src={case_study.website_link}
                    title="W3Schools Free Online Web Tutorials"
                    style={{ height: "500px", width: "500px" }}
                />
            </Box>
        </ConfirmDialog> */}
    </Grid>
  )
}

export default ListCard