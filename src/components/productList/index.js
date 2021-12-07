import "./productList.css";
import React, { useState } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./itemCard";
import ItemTypeButtons from "./itemTypeButtons";
import PaginationTab from "./pagination";
export default function ProductList({ items, companiesList }) {
  console.log(items, companiesList);
  return (
    <Grid item xs={6} container>
      <ItemTypeButtons></ItemTypeButtons>

      <Grid
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
          marginTop: 30,
          padding: 15,
        }}
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
      <PaginationTab></PaginationTab>
    </Grid>
  );
}
