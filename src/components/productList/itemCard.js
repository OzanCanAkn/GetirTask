import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import placeHolder from "../../assets/png/placeHolder.png";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
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
  const dispatch = useDispatch();
  const chartItems = useSelector((state) => state.chartReducer);
  const dataChange = useSelector((state) => state.dataReducer);
  const [disabled, setDisabled] = useState(false);
  const [count, setCount] = useState(0);

  //find index of item in the char list
  const findIndex = (chartItems, item) => {
    var i = -1;
    chartItems?.forEach((element, index) => {
      console.log(element.slug, item.slug);
      if (element.slug === item.slug) {
        i = index;
        setCount(element.count);
      }
    });
    return i;
  };

  //add to chart
  const handleClick = () => {
    dispatch({ type: "ADD_ITEM", item: item });
    setDisabled(true);
  };

  // set added or not to chart list
  useEffect(() => {
    console.log("chartItems", chartItems);
    if (chartItems.length > 0 && disabled) {
      if (findIndex(chartItems, item) === -1) {
        setDisabled(false);
      }
    } else if (chartItems.length > 0 && !disabled) {
      if (findIndex(chartItems, item) != -1) {
        setDisabled(true);
      }
    } else if (chartItems.length === 0) {
      setDisabled(false);
    }
  }, [chartItems, dataChange]);

  return (
    <Grid item xs={6} md={4} lg={3} direction="column">
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
        style={{ height: "100%", flex: "1" }}
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
            minHeight: "3rem",
          }}
        >
          {item.name}
        </p>
        <ColorButton
          disabled={disabled}
          onClick={handleClick}
          variant="contained"
        >
          {disabled ? `Added ${count}Pcs` : "Add"}
        </ColorButton>
      </Grid>
    </Grid>
  );
}
