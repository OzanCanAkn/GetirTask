import "./productList.css";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./itemCard";

export default function ProductList({ items, companiesList }) {
  console.log(items, companiesList);
  return (
    <Grid
      spacing={2}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 30,
        padding: 10,
      }}
      container
      xs={6}
    >
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
      <ItemCard price="15.43" name="Perfect Ultra Awesome Mug"></ItemCard>
    </Grid>
  );
}
