import { Grid } from "@mui/material";
import React, { Fragment } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
const CheckedButton = styled(Button)(() => ({
  color: "#ffffff",
  backgroundColor: "#1ea4ce",
  "&:hover": {
    backgroundColor: "#147594",
  },
  height: 30,
  textTransform: "lowercase",
  padding: 10,
}));

const OpenerButton = styled(Button)(() => ({
  color: "#ffffff",
  backgroundColor: "#bebad9",
  "&:hover": {
    backgroundColor: "#147594",
  },
  height: 30,
  textTransform: "lowercase",
  padding: 10,
}));

const UncheckedButton = styled(Button)(() => ({
  color: "#1ea4ce",
  backgroundColor: "#f4f3fc",
  "&:hover": {
    backgroundColor: "#dfdee9",
  },
  height: 30,
  padding: 10,
  textTransform: "lowercase",
}));
export default function ItemTypeButtons({ setChartOpen, setFilterOpen }) {
  const dispatch = useDispatch();
  const itemType = useSelector((state) => state.itemTypeReducer);
  const handleClickChartOpen = () => {
    setChartOpen(true);
  };

  const handleClickFilterOpen = () => {
    setFilterOpen(true);
  };
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Fragment>
      <p
        style={{
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 20,
          lineHeight: 2,
          margin: 0,
          marginBottom: 8,
          letterSpacing: 0.25,
          color: "#6F6F6F",
        }}
      >
        Products
      </p>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        direction="row"
      >
        {itemType === "mug" ? (
          <div>
            <CheckedButton style={{ margin: 8, marginLeft: 0 }}>
              mug
            </CheckedButton>
            <UncheckedButton
              onClick={() => dispatch({ type: "CHANGE_ITEM_TYPE" })}
            >
              shirt
            </UncheckedButton>
          </div>
        ) : (
          <div>
            <UncheckedButton
              style={{ margin: 8, marginLeft: 0 }}
              onClick={() => dispatch({ type: "CHANGE_ITEM_TYPE" })}
            >
              mug
            </UncheckedButton>
            <CheckedButton>shirt</CheckedButton>
          </div>
        )}
        {isSmall? (<Grid item>
          <OpenerButton
            style={{ margin: 8, marginLeft: 0 }}
            onClick={handleClickFilterOpen}
          >
            Filters
          </OpenerButton>
          <OpenerButton onClick={handleClickChartOpen}>Cart</OpenerButton>
        </Grid>):(<Grid item></Grid>)}
        
      </Grid>
    </Fragment>
  );
}
