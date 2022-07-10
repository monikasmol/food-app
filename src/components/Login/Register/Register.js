import { TextField, Button } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../../../helpers/firebaseConfig";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerUser = (data) => {
    if (data.email.includes("@") && data.password1 === data.password2) {
      createUserWithEmailAndPassword(auth, data.email, data.password1)
        .then((userCredentials) => {
          console.log(userCredentials);
        })
        .catch((error) => console.warn(error));
    } else {
      console.log("not ok");
    }
  };

  return (
    <form onSubmit={handleSubmit(registerUser)}>
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
        {...register("password1", { required: true })}
        sx={{ my: ".5rem", dispaly: "block" }}
      />
      <TextField
        align="center"
        variant="outlined"
        type="password"
        placeholder="password"
        {...register("password2", { required: true })}
        sx={{ my: ".5rem", dispaly: "block" }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ display: "block", mx: "auto" }}
      >
        Register
      </Button>
    </form>
  );
};

export default Register;
