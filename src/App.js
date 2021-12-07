import React from "react";
import "./App.css";
import {
  ProductList,
  Header,
  CheckboxGroup,
  SortTab,
  Chart,
} from "./components";
import { Grid } from "@mui/material";
const items = require("./constants/items.json");
const companiesList = require("./constants/companies.json");
function App() {
  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Header></Header>
      <Grid style={{ marginLeft: "5vw", marginRight: "5vw",marginTop:"7vh" }}>
        <Grid xs={12} spacing={1} container>
          <Grid xs={3} item id="filtersContainer">
            <SortTab></SortTab>
            <CheckboxGroup groupType="brand"></CheckboxGroup>
            <CheckboxGroup groupType="tag"></CheckboxGroup>
          </Grid>
          <ProductList
            items={items}
            companiesList={companiesList}
          ></ProductList>
          <Chart></Chart>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
