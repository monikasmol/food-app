import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import FoodForm from "../FoodForm/FoodForm";
import FoodTable from "../FoodTable/FoodTable";
import axios from "axios";
import { auth, db } from "../../helpers/firebaseConfig";
import { ref, onValue } from "firebase/database";

const FoodDiary = () => {
  // const [keyword, setKeyword] = useState("");

  // const [weight, setWeight] = useState("");

  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    if (auth.currentUser) {
      const dbRef = ref(db, "food/" + auth.currentUser.uid);
      return onValue(dbRef, (snapshot) => {
        console.log(snapshot.val());
        const foods = !!snapshot.val()
          ? Object.entries(snapshot.val()).map((foodArray) => foodArray[1])
          : [];
        setFoodList(foods);
      });
    }
  }, [auth.currentUser]);

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
      <FoodForm />
      <FoodTable foodList={foodList} />
    </>
  );
};

export default FoodDiary;
