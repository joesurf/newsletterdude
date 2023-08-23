import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Divider } from '@mui/material'
import Button from '@mui/material/Button';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


import { fetchdata, fetchcategory, fetchtype } from './FetchData';

import FilterItems from './FilterItems';


function SearchSection() {

    const [input, setInput] = useState('')
    const [category, setCategory] = useState("");
    const [categories, setCategories] = useState([]);
    const [type, setType] = useState('');
    const [types, setTypes] = useState([]);
    const [list, setList] = useState([]);

    const [anchorCategory, setAnchorCategory] = useState(null);
    const [anchorType, setAnchorType] = useState(null);
    
    const openCategory = Boolean(anchorCategory);
    const openType = Boolean(anchorType);


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

    const handleTypeClick = (event) => {
        setAnchorType(event.currentTarget);
      };

    const handleTypeClose = () => {
        setAnchorType(null);
      };

    const handleTypeValue = (e) => {
        setAnchorType(null);
        setType(e.target.innerText.toLowerCase())
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

        const fetchTypes = async () => {    
            fetchtype()
                .then(res => setTypes(res))
        }
        fetchTypes()
    }, [])

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
        <Button
            id="basic-button"
            aria-controls={openType ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openType ? 'true' : undefined}
            onClick={handleTypeClick}
        >
            {type ? type : "Type"}
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorType}
            open={openType}
            onClose={handleTypeClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            {types
                .sort(function (a, b) {
                    if (a.type < b.type) {
                        return -1;
                    }
                    if (a.type > b.type) {
                        return 1;
                    }
                        return 0;
                    })
                .map((item, i) => {
                    return <MenuItem key={i} onClick={handleTypeValue} value={item.type}>{capitalizeFirstLetter(item.type)}</MenuItem>
            })}
        </Menu>
        <Divider />
        <FilterItems searchstring={input} list={list} category={category} type={type} />
    </div>
  )
}

export default SearchSection