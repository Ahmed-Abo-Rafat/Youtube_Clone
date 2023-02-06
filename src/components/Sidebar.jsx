import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

const Sidebar = ({slectedCategory ,setSlectedCategory}) => {
  return (
    <Stack
      direction='row'
      sx={{
        overflow: "auto",
        height: {sx: 'auto', md: '95%'},
        flexDirection: {md: "column"}
      }}
    >
        {categories.map((category) => (
            <button
               className='category-btn'
               onClick={() => setSlectedCategory(category.name)}
               style={{
                backgroundColor: category.name === slectedCategory && "#FC1503",
                color: "White"
               }}
               key={category.name}
            >
                <span style={{color: category.name === slectedCategory ? 'white' : 'red', marginRight: '15px'}}>
                    {category.icon}
                </span>
                <span style={{opacity: category.name === slectedCategory ? "1" : "0.8"}}>
                    {category.name}
                </span>
            </button>
        ))}

    </Stack>
  )
}

export default Sidebar