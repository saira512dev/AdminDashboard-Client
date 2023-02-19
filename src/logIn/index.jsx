import React from 'react'
import FlexBetween from "../components/FlexBetween";
import Header from "../components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";


import { themeSettings } from '../theme';

function Dashboard() {

  const theme = useTheme()
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  

  return (
    <Box m="1.5rem 2.5rem" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }}>
        <Box >
        <Header title="Log In" subtitle="Login to your dashboard" />
        
        </Box>
      
          

    </Box>
  )
}

export default Dashboard