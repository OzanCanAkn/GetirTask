import "./header.css";
import React from "react";
import { ReactComponent as logo } from "../../assets/svg/logo.svg";
import { ReactComponent as lock } from "../../assets/svg/lock.svg";
import { Grid } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
function Basket() {
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
      <b style={{ color: "white" }}>₺ 15.45</b>
    </Grid>
  );
}

export default function Header() {
  return (
    <Grid id="container">
      <SvgIcon
        style={{ width: "142", height: "7vh" ,position:"absolute"}}
        viewBox="0 0 142 41"
        component={logo}
      />
      <Grid columns={24} alignItems="center" justifyContent="flex-end" container>
        <Basket></Basket>
      </Grid>
    </Grid>
  );
}
