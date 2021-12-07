import "./productList.css";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./itemCard";

export default function ProductList({ items, companiesList }) {
  console.log(items, companiesList);
  return (
    <Grid
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 30,
        padding: 15,
      }}
      item
      xs={6}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
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
    </Grid>
  );
}
