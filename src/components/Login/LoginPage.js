import { Button, Card, CardActions, Typography } from "@mui/material";
import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Card sx={{ maxWidth: 345, mb: 10, mx: "auto", mt: "5rem" }}>
      <LoginForm />
      <Typography gutterBottom variant="h5" component="div">
        Don't have an account yet? Register now!
      </Typography>
      <CardActions>
        <Link style={{ textDecoration: "none" }} to="/register">
          <Button size="small">Register</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default LoginPage;
