import React from "react";
import "./App.css";
import {
  ProductList,
  Header,
  CheckboxGroup,
  SortTab,
  Chart,
  Footer,
} from "./components";
import { Grid } from "@mui/material";
const items = require("./constants/items.json");
const companiesList = require("./constants/companies.json");
function App() {
  return (
    <div style={{ backgroundColor: "#fafafa",marginBottom:30 }}>
      <Header></Header>
      <Grid style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "7vh" }}>
        <Grid xs={12} container>
          <Grid xs={3} style={{ paddingRight: 16 }} item id="filtersContainer">
            <SortTab></SortTab>
            <CheckboxGroup groupType="brand"></CheckboxGroup>
            <CheckboxGroup groupType="tag"></CheckboxGroup>
          </Grid>
          <ProductList
            items={items}
            companiesList={companiesList}
          ></ProductList>
          <Chart item xs={3}></Chart>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}

export default App;
