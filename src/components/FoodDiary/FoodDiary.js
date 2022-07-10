import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import FoodTable from "../FoodTable/FoodTable";
import axios from "axios";

const FoodDiary = () => {
  // const [keyword, setKeyword] = useState("");

  // const [weight, setWeight] = useState("");

  const [foodList, setFoodList] = useState([]);

  // console.log({ stateKeyword: keyword, stateWeight: weight, foodList });

  return (
    <>
      <Typography
        variant="h2"
        gutterBottom
        component="h2"
        align="center"
        sx={{ fontFamily: "Roboto" }}
      >
        Food Diary
      </Typography>
      <FoodForm setFoodList={setFoodList}  />
      <FoodTable foodList={foodList} />
    </>
  );
};

export default FoodDiary;
