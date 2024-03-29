import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Divider, Box } from '@mui/material'
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { fetchdata, fetchcategory } from './FetchData';

import FilterItems from './FilterItems';
import { useSearchParams } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';

// TODO: Fix two-word category

function SearchSection() {
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
            fetchdata()
                .then(res => setList(res))
                .then(await new Promise(r => setTimeout(r, 1000)))
        }
        fetchContent()

        const fetchCategories = async () => {    
            fetchcategory()
                .then(res => setCategories(res))
        }
        fetchCategories()
    }, [])

    useEffect(() => {
        if (queryParameters.get("tool")) setInput(queryParameters.get("tool"))
    }, [queryParameters])

  return (
    <div>
        <Autocomplete
            disablePortal
            id="search-bar"
            options={(Array.isArray(list) ? list : [])
                .map(item => item.title)}
            renderInput={(params) => 
                <TextField {...params}
                    label="Find a tool"
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
            {(Array.isArray(categories) ? categories : [])
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
        <FilterItems searchstring={input} list={list} category={category} />
    </div>
  )
}

export default SearchSection