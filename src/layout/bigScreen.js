import React from "react";
import {
  ProductList,
  Header,
  CheckboxGroup,
  SortTab,
  Chart,
  Footer,
} from "../components";
import { Grid } from "@mui/material";
export default function BigScreen() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Header></Header>
      <Grid style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "7vh" }}>
        <Grid container>
          <Grid xs={3} style={{ paddingRight: 16 }} item id="filtersContainer">
            <SortTab></SortTab>
            <CheckboxGroup groupType="brand"></CheckboxGroup>
            <CheckboxGroup groupType="tag"></CheckboxGroup>
          </Grid>
          <ProductList></ProductList>
          <Chart item xs={3}></Chart>
        </Grid>
        <Footer></Footer>
      </Grid>
    </div>
  );
}
