import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import { Typography } from "@mui/material";

const FoodTable = (props) => {
  const sum = props.foodList.reduce(
    (previous, current) => {
      return {
        calories: previous.calories + current.calories,
        proteins: previous.proteins + current.proteins,
        fat: previous.fat + current.fat,
        carbs: previous.carbs + current.carbs,
        fibers: previous.fibers + current.fibers,
      };
    },
    { calories: 0, proteins: 0, fat: 0, carbs: 0, fibers: 0 }
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Food name</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Fibers&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.foodList.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell sx={{display: "flex", alignItems:"center"}}>
                <img
                  src={row.image}
                  width={70}
                  height={70}
                  style={{ marginRight: "2rem" }}
                  alt=""
                />
                <Typography
                  
                >
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="right">{row.calories.toFixed(2)}</TableCell>
              <TableCell align="right">{row.proteins.toFixed(2)}</TableCell>
              <TableCell align="right">{row.fat.toFixed(2)}</TableCell>
              <TableCell align="right">{row.carbs.toFixed(2)}</TableCell>
              <TableCell align="right">{row.fibers.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell component="th" scope="row">
              Total
            </TableCell>
            <TableCell align="right">{sum.calories.toFixed(2)}</TableCell>
            <TableCell align="right">{sum.proteins.toFixed(2)}</TableCell>
            <TableCell align="right">{sum.fat.toFixed(2)}</TableCell>
            <TableCell align="right">{sum.carbs.toFixed(2)}</TableCell>
            <TableCell align="right">{sum.fibers.toFixed(2)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default FoodTable;
