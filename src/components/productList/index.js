import "./productList.css";
import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ItemCard from "./itemCard";
import ItemTypeButtons from "./itemTypeButtons";
import PaginationTab from "./pagination";
import { useSelector } from "react-redux";

export default function ProductList() {
  const [pagination, setPagination] = useState(1);
  const items = useSelector((state) => state.dataReducer);
  useEffect(() => {
    if (pagination != 1) {
      setPagination(1);
    }
  }, [items]);
  return (
    <Grid
      item
      xs={6}
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      container
    >
      <ItemTypeButtons></ItemTypeButtons>
      <Grid
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 10,
          marginTop: 30,
          padding: 15,
          width: "100%",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {items.slice((pagination - 1) * 16, pagination * 16).map((item) => {
            return <ItemCard item={item}></ItemCard>;
          })}
        </Grid>
      </Grid>
      <PaginationTab
        count={Math.ceil(items.length / 16)}
        setPagination={setPagination}
      ></PaginationTab>
    </Grid>
  );
}
