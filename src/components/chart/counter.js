import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Counter({ item }) {
  //a item from basket
  //this component is - + signs and a displays for item count
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch({
      type: `INCREASE_ITEM_COUNT`,
      item: item,
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: `DECREASE_ITEM_COUNT`,
      item: item,
    });
  };
  return (
    <Grid
      container
      item
      alignItems="center"
      justifyContent="flex-end"
      direction="row"
      md={12}
      xs={7}
      lg={7}
    >
      <IconButton onClick={handleDecrease} color="primary" item>
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
      <IconButton onClick={handleIncrease} color="primary" item>
        <AddIcon />
      </IconButton>
    </Grid>
  );
}
