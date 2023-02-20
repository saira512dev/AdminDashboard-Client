import React from 'react'
import FlexBetween from "../components/FlexBetween";
import Header from "../components/Header";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Link,
  Grid,
  TextField
} from "@mui/material";


import { themeSettings } from '../theme';

function Dashboard() {

  const theme = useTheme()
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  

  return (
    <Box m="1.5rem 2rem" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }}>
        <Box  sx={{
            backgroundColor: theme.palette.background.alt,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
        <Header title="SIGN IN" subtitle="Sign In to your dashboard" />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box m="1rem" component="form" noValidate 
          //onSubmit={handleSubmit} 
          sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  //onChange={handleEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 // onChange={handlePassword}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              //onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        </Box>
      
          

    </Box>
  )
}

export default Dashboard