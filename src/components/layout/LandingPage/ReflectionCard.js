import React from 'react';
import { Typography } from '@mui/material';


function ReflectionCard(props) {
    const supabaseDateToJsDate = (supabaseDate) => {
        const dates = {
            "01": "Jan",
            "02": "Feb",
            "03": "Mar",
            "04": "Apr",
            "05": "May",
            "06": "Jun",
            "07": "Jul",
            "08": "Aug",
            "09": "Sep",
            "10": "Oct",
            "11": "Nov",
            "12": "Dec",
            
        }

        const day = `${supabaseDate.slice(8, 10)}`
        const date = `${supabaseDate.slice(5, 7)}`
        const year = `${supabaseDate.slice(0, 4)}`
        return `
            ${day.slice(0, 1) === '0' ? day.slice(1, 2) : day}
            ${dates[date]} 
            ${year}
        `
    }

  return (
    <div style={{ width: "100%" }}>
        <Typography variant="h6"><b>{props.title}</b></Typography>
        <Typography variant="caption"><i>Written on: {supabaseDateToJsDate(props.created_at)}</i></Typography>
        <div>
            <Typography variant="body2">
                {props.description} 
            </Typography>
            <br />
        </div>
    </div>
  )
}

export default ReflectionCard