import React from "react";
import { Grid } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as footer } from "../../assets/svg/footer.svg";


export default function Footer() {
  return (
    <Grid item style={{width:"100%",height:"5vh",backgroundColor:"#fafafa"}}>
      <SvgIcon
        style={{ width: "206", height: "14", position: "absolute",backgroundColor:"#fafafa",left:0,right:0,margin:"auto"}}
        viewBox="0 0 206 14"
        component={footer}
      />
    </Grid>
  );
}
