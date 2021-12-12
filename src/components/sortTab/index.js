import React, { useState, useEffect, Fragment } from "react";
import { Grid } from "@mui/material";
import { RadioButton } from "./RadioButton";
import { useSelector, useDispatch } from "react-redux";

export default function SortTab() {
  const indexFromRedux = useSelector((state) => state.sortReducer);
  const dispatch = useDispatch();
  const sortTypes = [
    "Price low to high",
    "Price high to low",
    "New to old",
    "Old to new",
  ];
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    if (selectedIndex) {
      dispatch({
        type: `SET_SORT_TYPE`,
        sortTypeIndex: selectedIndex,
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (indexFromRedux !== selectedIndex) {
      setSelectedIndex(indexFromRedux);
    }
  }, [indexFromRedux]);
  const handleChange = (event) => {
    setSelectedIndex(event.target.id);
  };
  return (
    <Fragment>
      <div
        style={{
          margin: 8,
          color: "#697488",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: 13,
        }}
      >
        Sorting
      </div>
      <Grid
        direction="column"
        container
        style={{
          backgroundColor: "#ffffff",
          padding: 24,
          marginBottom: 8,
          width: "fill",
        }}
      >
        {sortTypes.map((data, index) => {
          return (
            <div key={index}>
              <label
                style={{
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: 16,
                  letterSpacing: 0.16,
                  color: "#525252",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <RadioButton
                  style={{ color: "#1ea4ce" }}
                  checked={selectedIndex == index}
                  onChange={handleChange}
                  id={index}
                  inputProps={{ "aria-label": "B" }}
                />
                {data}
              </label>
            </div>
          );
        })}
      </Grid>
    </Fragment>
  );
}
