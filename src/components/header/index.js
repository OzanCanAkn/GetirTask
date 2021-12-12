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
      style={{ backgroundColor: "#147594", height: "7vh" }}
      alignItems="center"
      justifyContent="center"
      xs={5}
      md={3}
    >
      <SvgIcon
        viewBox="0 0 14 18"
        style={{ paddingLeft: 8, paddingRight: "1rem" }}
        component={lock}
      />
      <b style={{ color: "white" }}>₺ {`${total ? total : "0.00"}`}</b>
    </Grid>
  );
}

export default function Header() {
  return (
    <Grid
      style={{
        width: "100%",
        height: "7vh",
        paddingLeft: "5vw",
        paddingRight: "5vw",
        marginBottom: "3vh",
        backgroundColor: "#1ea4ce",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
