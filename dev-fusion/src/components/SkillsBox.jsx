import { Grid2, Typography } from '@mui/material'
import React from 'react'

const SkillsBox = ({img, title,progress }) => {
  return (
    <Grid2>
        <img  src={img}/>
        <Typography>
            {title}
        </Typography>
    </Grid2>
)
}

export default SkillsBox