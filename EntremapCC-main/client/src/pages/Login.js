import React from "react";
import { Button, Grid, Box } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { ReactComponent as GoogleIcon } from "../resources/google-icon.svg";
import { isMobile } from '../utils/util';

function Login() {
  const { search } = useLocation()
  const query = queryString.parse(search);

  const GoogleSignIn = () => {
    if (process.env.NODE_ENV === "production") {
      window.open(`/api/auth/google?redirectUrl=${query.redirectUrl || ''}`, "_self");
    } else {
      window.open(`http://localhost:5000/api/auth/google?redirectUrl=${query.redirectUrl || ''}`, "_self");
    }
  };
  const LinkedInSignIn = () => {
    if (process.env.NODE_ENV === "production") {
      window.open(`/api/auth/linkedin?redirectUrl=${query.redirectUrl || ''}`, "_self");
    } else {
      window.open(`http://localhost:5000/api/auth/linkedin?redirectUrl=${query.redirectUrl || ''}`, "_self");
    }
  };

  return (
    <div
      style={{
        backgroundColor: isMobile ? '#3dae81' : "#f8f8f8",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          maxWidth: "350px",
        }}
      >
        <Box boxShadow={1} px={8} py={4} bgcolor="#ffffff" style={{}}>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <Button
                variant="contained"
                p={3}
                fullWidth={true}
                style={{ justifyContent: "left", backgroundColor: "#fff" }}
                startIcon={<GoogleIcon />}
                onClick={GoogleSignIn}
              >
                Sign in with Google
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                p={3}
                startIcon={<LinkedInIcon />}
                fullWidth={true}
                style={{
                  justifyContent: "left",
                  backgroundColor: "#2867B2",
                  color: "#FFF",
                }}
                onClick={LinkedInSignIn}
              >
                Sign in with LinkedIn
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Login;
