import React, { useState } from 'react'
import { fetchdata } from './FetchData';
import ReflectionsList from './ReflectionsList';
import { Button, AppBar, Toolbar, Typography } from '@mui/material';
import FounderNotes from './FounderNotes';
import CategoryInfo from './CategoryInfo';
import Loader from '../../UI/Loader/Loader';


function Reflections() {
    const [list, setList] = useState([]);
    const [category, setCategory] = useState("")
    const [showNotes, setShowNotes] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const updateContent = async (e) => {
      setIsLoading(true)

      setShowNotes(false)
      setCategory(e.currentTarget.value)

      fetchdata(e.currentTarget.value)
        .then(res => setList(res))
        .then(await new Promise(r => setTimeout(r, 1000)))
        .then(setIsLoading(false))
    }

  return (
    <div>
        <AppBar position="static" sx={{ backgroundColor: "rgba(0, 0, 0, 0)", width: "100%", display: "flex" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button onClick={updateContent} value="thedude" sx={{ padding: "15px" }}>TheDude</Button>
                    <Button onClick={updateContent} value="notiondude" sx={{ padding: "15px" }}>NotionDude</Button>
                    <Button onClick={updateContent} value="newsletterdude" sx={{ padding: "15px" }}>NewsletterDude</Button>
                    <Button onClick={updateContent} value="the100club" sx={{ padding: "15px" }}>The100Club</Button>
                    <Button onClick={updateContent} value="thoughtsofadude" sx={{ padding: "15px" }}>Thoughts</Button>
                </Typography>
            </Toolbar>
        </AppBar>
        { showNotes && <FounderNotes /> }
        <CategoryInfo category={category} />

        {isLoading ? <Loader />
          : <ReflectionsList list={list} />
        }
    </div>
  )
}

export default Reflections