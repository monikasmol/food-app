import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../../helpers/firebaseConfig";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signIn = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredentials) => {
        console.log(userCredentials);
      })
      .catch((error) => console.warn(error));
  };

  return (
    <form onSubmit={handleSubmit(signIn)}>
      <TextField
        align="center"
        variant="outlined"
        type="email"
        placeholder="email"
        {...register("email", { required: true })}
        sx={{ my: ".5rem", display: "block" }}
      />

      <TextField
        align="center"
        variant="outlined"
        type="password"
        placeholder="password"
        {...register("password", { required: true })}
        sx={{ my: ".5rem", display: "block" }}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        Log in
      </Button>
    </form>
  );
};

export default LoginForm;
