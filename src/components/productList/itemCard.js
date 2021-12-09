import { Grid } from "@mui/material";
import React from "react";
import placeHolder from "../../assets/png/placeHolder.png";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)(() => ({
  color: "#ffffff",
  backgroundColor: "#1ea4ce",
  "&:hover": {
    backgroundColor: "#1ea4ce",
  },
  textTransform: "capitalize",
  height: 22,
}));
export default function ItemCard({ item }) {
  //prop is a item from items.json
  return (
    <Grid
      item
      xs={6}
      md={4}
      lg={3}
      direction="column"
    >
      <div
        item
        xs="6"
        style={{
          padding: 16,
          border: "2px solid #f3f0fe",
          borderRadius: 16,
        }}
      >
        <img
          style={{
            width: "100%",
          }}
          src={placeHolder}
        ></img>
      </div>
      <Grid
        xs="6"
        item
        container
        direction="column"
        style={{ height: "100%",flex:"1" }}
        alignItems="space-between"
        justifyContent="space-between"
      >
        <p
          style={{
            fontFamily: "Helvetica",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: 14,
            color: "#1EA4CE",
            margin: 8,
          }}
        >
          ₺ {item.price}
        </p>
        <p
          style={{
            fontFamily: "Open Sans",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: 14,
            lineHeight: 1.6,
            color: " #191919",
            margin: 7,
            minHeight:"3rem"
          }}
        >
          {item.name}
        </p>
        <ColorButton variant="contained">Add</ColorButton>
      </Grid>
    </Grid>
  );
}
