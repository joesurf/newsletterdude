import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Divider, Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useSearchParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

import CaseStudies from './CaseStudies';
import { fetchnewslettercategory, fetchnewsletterdata } from './FetchCaseStudies';


// TODO: Fix two-word category

function CaseStudiesSection() {
    const [queryParameters] = useSearchParams()

    const [input, setInput] = useState('')
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [list, setList] = useState([]);

    const [anchorCategory, setAnchorCategory] = useState(null);
    
    const openCategory = Boolean(anchorCategory);


    const handleInput = (e) => {
        setInput(e.target.value.toLowerCase())
    }

    const handleCategoryClick = (event) => {
      setAnchorCategory(event.currentTarget);
    };

    const handleCategoryClose = () => {
      setAnchorCategory(null);
    };

    const handleCategoryValue = (e) => {
        setAnchorCategory(null);
        setCategory(e.target.innerText)
    };

    useEffect(() => {
        const fetchContent = async () => {    
            fetchnewsletterdata()
                .then(res => setList(res))
                .then(await new Promise(r => setTimeout(r, 1000)))
        }
        fetchContent()

        const fetchCategories = async () => {    
            fetchnewslettercategory()
                .then(res => setCategories(res))
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        if (queryParameters.get("newsletter")) setInput(queryParameters.get("newsletter"))
    }, [queryParameters])

  return (
    <Box>
        <Box
            sx={{
                mt: { xs: "4rem", md: "4rem" },
                mb: "20px",
                mx: "auto",
                textAlign: "center",
                width: { xs: "90%", sm: "80%" },
            }}
        >      
            <Typography
                variant="h2"
                sx={{
                fontWeight: "bold",
                maxWidth: "1400px",
                mx: "auto",
                }}
            >
                Based on the world's most successful newsletters
            </Typography>

            <Typography
                variant="h4"
                sx={{ my: "2rem", maxWidth: "1000px", mx: "auto" }}
            >
                Learn from the best by taking what they did right and investigating what 
                could have been done better 
            </Typography>
        </Box>
        <Autocomplete
            disablePortal
            id="search-bar"
            options={list.map(item => item.title)}
            renderInput={(params) => 
                <TextField {...params}
                    label="Find a newsletter"
                    onSelect={handleInput}
                    sx={{
                        width: "100%",
                        margin: '10px auto',
                    }} 
                    size="small"
                />
            }
        />
        <Box display="flex" textAlign="center" alignItems="center">
            <Button
                id="basic-button"
                aria-controls={openCategory ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openCategory ? 'true' : undefined}
                onClick={handleCategoryClick}
            >
                {category ? category : "Category"}
            </Button>
            {category 
                    ? <CloseIcon onClick={() => { setCategory("") }} sx={{ 
                        "&:hover": { color: "red", cursor: "pointer" },
                     }} />
                    : <></>}
        </Box>
        <Menu
            id="basic-menu"
            anchorEl={anchorCategory}
            open={openCategory}
            onClose={handleCategoryClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {categories
                .sort(function (a, b) {
                    if (a < b) {
                        return -1;
                    }
                    if (a > b) {
                        return 1;
                    }
                        return 0;
                    })
                .map((item, i) => {
                    return <MenuItem key={i} onClick={handleCategoryValue} value={item}>{item}</MenuItem>
            })}
        </Menu>
        <Divider />
        <CaseStudies newsletterdata={list} searchstring={input} category={category} />
    </Box>
  )
}

export default CaseStudiesSection