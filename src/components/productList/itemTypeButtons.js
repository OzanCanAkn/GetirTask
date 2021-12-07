import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { padding } from "@mui/system";

const CheckedButton = styled(Button)(() => ({
  color: "#ffffff",
  backgroundColor: "#1ea4ce",
  "&:hover": {
    backgroundColor: "#147594",
  },
  height: 30,
  textTransform: "capitalize",
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
  textTransform: "capitalize"
}));
export default function ItemTypeButtons() {
  const [checked, setChecked] = useState("mug");
  return (
    <Grid>
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
      <Grid>
        {checked == "mug" ? (
          <div>
            <CheckedButton style={{ margin: 8, marginLeft: 0 }}>
              mug
            </CheckedButton>
            <UncheckedButton onClick={() => setChecked("shirt")}>
              shirt
            </UncheckedButton>
          </div>
        ) : (
          <div>
            <UncheckedButton
              style={{ margin: 8, marginLeft: 0 }}
              onClick={() => setChecked("mug")}
            >
              mug
            </UncheckedButton>
            <CheckedButton>shirt</CheckedButton>
          </div>
        )}
      </Grid>
    </Grid>
  );
}