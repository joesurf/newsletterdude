import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Divider } from '@mui/material'
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { fetchdata, fetchcategory } from './FetchData';

import FilterItems from './FilterItems';
import { useSearchParams } from 'react-router-dom';


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
        setCategory(e.target.innerText.toLowerCase())
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

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

  return (
    <div>
        <Autocomplete
            disablePortal
            id="search-bar"
            options={list.map(item => item.title)}
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
        <Button
            id="basic-button"
            aria-controls={openCategory ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openCategory ? 'true' : undefined}
            onClick={handleCategoryClick}
        >
            {category ? category : "Category"}
        </Button>
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
                    if (a.category < b.category) {
                        return -1;
                    }
                    if (a.category > b.category) {
                        return 1;
                    }
                        return 0;
                    })
                .map((item, i) => {
                    return <MenuItem key={i} onClick={handleCategoryValue} value={item.category}>{capitalizeFirstLetter(item.category)}</MenuItem>
            })}
        </Menu>
        <Divider />
        <FilterItems searchstring={input} list={list} category={category} />
    </div>
  )
}

export default SearchSection