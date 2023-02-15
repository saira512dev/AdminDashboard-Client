import React from 'react'
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from './FlexBetween'; 

const StatBox = ({ title, value, increase, icon, description}) => {
    const theme = useTheme();

  return (
    <Box gridColumn="span 2"
     gridRow="span 1"
     display="flex"
     flexDirection="column"
     justifyContent="space-between"
     p="1.25rem 1rem"
     flex="1 1 100%"
     backgroundColor={theme.palette.background.alt}
     borderRadius="0.55rem">
        <FlexBetween>
            <Typography variant="h6" sx={{color: theme.palette.secondary[100]}} >
                {title}
            </Typography>
            {icon}
        </FlexBetween>
        <Typography variant="h3" sx={{color: theme.palette.secondary[200]}} 
         fontWeight="600">
                {value}
        </Typography>
        <FlexBetween gap="1rem">
            <Typography fontStyle="italic" 
            variant="h5" sx={{color: theme.palette.secondary.light}} 
            >
                {increase}
            </Typography>
            <Typography>{description}</Typography>
        </FlexBetween>
    </Box>
  )
}

export default StatBox