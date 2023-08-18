import React, { useState, useEffect } from 'react';
import { TextField, Autocomplete, Divider } from '@mui/material'

import { fetchdata } from './FetchData';

import FilterList from './FilterList';


function SearchList() {
    const [input, setInput] = useState('')
    const [list, setList] = useState([]);

    const handleInput = (e) => {
        console.log(e.target.value)
        setInput(e.target.value.toLowerCase())
    }

    useEffect(() => {
        fetchdata()
          .then(res => setList(res))
    }, [])

  return (
    <div>
        <Autocomplete
            disablePortal
            id="search-bar"
            options={list.sort((a, b) => 0.5 - Math.random()).map(item => item.title)}
            renderInput={(params) => 
                <TextField {...params}
                    label="Find a challenge"
                    onSelect={handleInput}
                    sx={{
                        width: "100%",
                        margin: '10px auto',
                    }} 
                    size="small"
                />
            }
        />
        <Divider />
        <FilterList searchstring={input} list={list} />
    </div>
  )
}

export default SearchList