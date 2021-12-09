import "./header.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as logo } from "../../assets/svg/logo.svg";
import { ReactComponent as lock } from "../../assets/svg/lock.svg";
import { Grid } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";

function Basket() {
  const items = useSelector((state) => state.chartReducer);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let addition = 0;
    items.map((item) => {
      addition = addition + item.price * item.count;
    });
    setTotal(Math.round(addition * 100) / 100);
  }, [items]);

  return (
    <Grid
      direction="row"
      container
      item
      id="basketContainer"
      alignItems="center"
      justifyContent="center"
      xs={3}
    >
      <SvgIcon id="lock" viewBox="0 0 14 18" component={lock} />
      <b style={{ color: "white" }}>₺ {`${total ? total : "0.00"}`}</b>
    </Grid>
  );
}

export default function Header() {
  return (
    <Grid id="container">
      <SvgIcon
        style={{ width: "142", height: "7vh", position: "absolute" }}
        viewBox="0 0 142 41"
        component={logo}
      />
      <Grid
        columns={24}
        alignItems="center"
        justifyContent="flex-end"
        container
      >
        <Basket></Basket>
      </Grid>
    </Grid>
  );
}
