import * as React from "react";
import { styled } from "@mui/material/styles";
import tickWhite from "../../assets/png/tickWhite.png";
import { Checkbox } from "@mui/material";

const BoxStyled = styled("span")(({ theme }) => ({
  borderColor: "#1ea4ce",
  width: 24,
  height: 24,
  marginLeft: 8,
  boxShadow: "0 1px 7px rgb(90,60,160,.5)",
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
const BoxStyledChecked = styled(BoxStyled)({
  boxShadow: "0 1px 7px rgb(90,60,160,.5)",

  backgroundColor: "#1ea4ce",
  "&:before": {
    display: "block",
    width: 24,
    height: 24,
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#198eb3",
  },
  backgroundImage: `url(${tickWhite})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  "&:before": {
    display: "block",
    width: 24,
    height: 24,
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#198eb3",
  },
});

export function StyledCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BoxStyledChecked />}
      icon={<BoxStyled />}
      {...props}
    />
  );
}
