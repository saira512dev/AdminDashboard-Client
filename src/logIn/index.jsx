import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../components/FlexBetween";
import Header from "../components/Header";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from '@mui/material/Alert';
// import API_URL from '../config/config'

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

import { themeSettings } from "../theme";

const Login = () => {
  const navigate = useNavigate();

  // States for registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const user = {
    email,
    password,
  };

  console.log(user);
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (email === "" || password === "") {
    //   setError(true);
    //   setErrorMessage("Please fill all the fields");
    //   return;
    // } else {
    //   const response = await fetch(`${API_URL}/login`, {
    //     method: "POST",
    //     withCredentials: true,
    //     credentials: 'include',
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(user),
    //   });
    //   const data = await response.json();
    //   console.log(data);
    //   if (data.error) {
    //     setError(true);
    //     setErrorMessage(data.error);
    //   } else {
    //     setError(false);
    //     console.log("loggedIn");
    //     localStorage.setItem("VoloLoggedIn", true);
    //     localStorage.setItem("VoloUser", JSON.stringify(data));
    //     navigate("/dashboard");
    //   }
    // }
  }

  const DisplayErrorMessage = () => {
    return (

       error ?  <Alert severity="error">{errorMessage}</Alert> : ""
    );
  };
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      m="1.5rem 2rem"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <DisplayErrorMessage />
      <Box
        pt="2rem"
        sx={{
          backgroundColor: theme.palette.background.alt,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0.2rem",
        }}
      >
        <Header title="WELCOME" subtitle="Sign In to your dashboard" />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "theme.palette.secondary" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            m="1rem"
            component="form"
            noValidate
            //onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputProps={{
                    autoComplete: "new-email",
                    form: {
                      autoComplete: "off",
                    },
                  }}
                  onChange={handleEmail}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
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
                />
              </Grid>
            </Grid>
            <Button
              //onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, p: "0.5rem 0", background: theme.palette.primary[400],
                "&:hover": { backgroundColor: theme.palette.primary[300]} 
                  }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
