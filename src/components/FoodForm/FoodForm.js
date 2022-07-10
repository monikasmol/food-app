import React, { useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import { auth, db } from "../../helpers/firebaseConfig";
import { ref, push } from "firebase/database";

const FoodForm = (props) => {
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (inputValue) {
      axios
        .get(
          `https://api.edamam.com/auto-complete?app_id=aeec473f&app_key=365a042ada8f7bb4ade83cae444e6e30&q=${inputValue}`
        )
        .then((response) => {
          setOptions(response.data);
          console.log(response);
        });
    }
  }, [inputValue]);

  const submitHandler = (data) => {
    const dbRef = ref(db, "food/" + auth.currentUser.uid);
    axios
      .get(
        `https://api.edamam.com/api/food-database/v2/parser?app_id=aeec473f&app_key=365a042ada8f7bb4ade83cae444e6e30&ingr=${data.keyword}`
      )
      .then((response) => {
        const nutrients = response.data.parsed[0].food.nutrients;

        const image = response.data.parsed[0].food.image;

        push(dbRef, {
          name: `${data.keyword} (${data.weight}g)`,
          calories: (nutrients.ENERC_KCAL / 100) * data.weight,
          proteins: (nutrients.PROCNT / 100) * data.weight,
          fat: (nutrients.FAT / 100) * data.weight,
          carbs: (nutrients.CHOCDF / 100) * data.weight,
          fibers: (nutrients.FIBTG / 100) * data.weight,
          image: image,
        });

        console.log(response.data.parsed[0].food.nutrients);
      })
      .catch((error) => console.warn(error));
    console.log(data);
  };

  console.log(inputValue);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        marigin="normal"
        sx={{ width: 300, mx: "auto", mb: "1rem" }}
        inputValue={inputValue}
        onInputChange={(_, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            fullWidth
            {...params}
            {...register("keyword", { required: true })}
            label="food name"
          />
        )}
      />
      <TextField
        type="number"
        id="outlined-basic"
        label="how much?"
        variant="outlined"
        sx={{ mb: "1rem" }}
        InputProps={{
          endAdornment: <InputAdornment position="start">g</InputAdornment>,
        }}
        {...register("weight", { required: true })}
      />
      <Button
        variant="contained"
        type="submit"
        sx={{ display: "block", mx: "auto" }}
      >
        ADD
      </Button>
    </form>
  );
};

export default FoodForm;
