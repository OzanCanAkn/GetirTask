import { Grid } from "@mui/material";
import React,{useState} from "react";

export default function Chart() {
  const [items, setItems] = useState([
    { name: "perfect mug", price: "15.23", count: 3 },
    { name: "perfect mug", price: "15.23", count: 3 },
    { name: "perfect mug", price: "15.23", count: 3 },
  ]);

  return(
      <Grid xs={3}>
        asd
      </Grid>
  )
}
