import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import  tick  from "../../assets/png/tick.png";

const RadioStyled = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  borderColor:"#1ea4ce",
  width:24,
  height: 24,
  boxShadow: "inset 0 0 0 2px #dfdee2, inset 0 -2px 0 #dfdee2",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: "#ebf1f5",
  },
}));
//1ea4ce
const RadioStyledChecked = styled(RadioStyled)({
  borderColor:"#1ea4ce",
  backgroundColor: "#ffffff",
  backgroundImage: `url(${tick})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition: "center",
  boxShadow:"inset 0 0 0 2px #1ea4ce, inset 0 -2px 0 #1ea4ce",
  "&:before": {
    display: "block",
    width: 24,
    height: 24,
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#fefefe",
  },
});

// Inspired by blueprintjs
export function RadioButton(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<RadioStyledChecked />}
      icon={<RadioStyled />}
      {...props}
    />
  );
}
