import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid } from "@mui/material";

export default function Counter({ item }) {
  return (
    <Grid
      container
      item
      xs={7}
      alignItems="center"
      justifyContent="flex-end"
      direction="row"
    >
      <IconButton color="primary" item>
        <RemoveIcon />
      </IconButton>
      <div
        style={{
          backgroundColor: "#1EA4CE",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
        }}
        item
      >
        <p style={{ color: "#ffffff", textAlign: "center", margin: "auto" }}>
          {item.count}
        </p>
      </div>
      <IconButton color="primary" item>
        <AddIcon />
      </IconButton>
    </Grid>
  );
}
