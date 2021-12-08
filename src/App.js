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
import DataHandler from "./scripts/dataHandler";
const items = require("./constants/items.json");
const companiesList = require("./constants/companies.json");
function App() {
  DataHandler({items:items,companies:companiesList})
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
          <ProductList
            items={items}
            companiesList={companiesList}
          ></ProductList>
          <Chart item xs={3}></Chart>
        </Grid>
        <Footer></Footer>
      </Grid>
    </div>
  );
}

export default App;
