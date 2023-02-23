import React from 'react';
import { useState } from "react";
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
  TextField,
} from "@mui/material";

import { themeSettings } from '../theme';

const Login = () => {
// States for registration
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const theme = useTheme()
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box m="1.5rem 2rem" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }}>
        <Box  pt="2rem" sx={{
            backgroundColor: theme.palette.background.alt,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0.2rem"
        }}>
        <Header title="WELCOME" subtitle="Sign In to your dashboard" />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'theme.palette.secondary' }}>
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
                  onChange={handleEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  variant="filled"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                 onChange={handlePassword}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  variant="filled"
                />
              </Grid>
            </Grid>
            <Button
              //onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: theme.palette.primary.main}}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        </Box>
    </Box>
  )
}

export default Login