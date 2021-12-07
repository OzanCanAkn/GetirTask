import React, { useState, useEffect } from "react";
import "./checkboxGroup.css";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TextField, Grid } from "@mui/material";

export default function CheckboxGroup({ groupType }) {
  //groupType is definition of this component whether brands or tags | string
  const [array, setArray] = useState({
    All: true,
    "coca-cola": false,
    ferrari: false,
    mercedes: false,
    dominos: false,
    "e-corp": false,
  });
  const [name, setName] = useState();
  useEffect(() => {
    console.log(array);
  }, [array]);

  //handle checkbox change
  const handleChange = (event) => {
    setArray({
      ...array,
      [event.target.name]: event.target.checked,
    });
  };
  //handle given text change
  const handleTextChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div
        style={{
          margin: 8,
          color: "#697488",
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: 13,
        }}
      >{`${groupType[0].toUpperCase() + groupType.substring(1)}s`}</div>
      <Grid
        direction="column"
        style={{
          backgroundColor: "#ffffff",
          padding: 24,
          paddingBottom: 16,
          marginBottom: 10,
        }}
        container
        justifyContent="flex-start"
      >
        <TextField
          id="outlined-field"
          label={`Search ${groupType}`}
          value={name}
          onChange={handleTextChange}
          style={{ color: "#e0e0e0", marginBottom: 16 }}
        />
        <FormControl
          style={{ height: 166, overflow: "scroll" }}
          component="fieldset"
          variant="standard"
        >
          <FormGroup>
            {Object.keys(array).map((field, key) => {
              if (name?.length > 0) {
                if (field.toLowerCase().includes(name.toLowerCase())) {
                  return (
                    <FormControlLabel
                      key={key}
                      style={{
                        fontFamily: "Open Sans",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: 16,
                        display: "flex",
                        alignItems: "center",
                        textAlign:"left"
                      }}
                      disableTypography
                      control={
                        <Checkbox
                          checked={array[field]}
                          onChange={handleChange}
                          name={field}
                        />
                      }
                      label={field}
                    />
                  );
                }
              } else {
                return (
                  <FormControlLabel
                    style={{
                      fontFamily: "Open Sans",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 16,
                      display: "flex",
                      alignItems: "center",
                      textAlign:"left"
                    }}
                    disableTypography
                    key={key}
                    control={
                      <Checkbox
                        checked={array[field]}
                        onChange={handleChange}
                        name={field}
                      />
                    }
                    label={field}
                  />
                );
              }
            })}
          </FormGroup>
        </FormControl>
      </Grid>
    </div>
  );
}
