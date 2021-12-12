import React, { useState, useEffect, Fragment } from "react";
import "./checkboxGroup.css";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledCheckbox } from "./styledCheckbox";
import { TextField, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
export default function BrandsCheckbox() {
  //groupType is definition of this component whether brands or tags | string
  const itemType = useSelector((state) => state.itemTypeReducer);
  const array = useSelector((state) => state[`brandsReducer`]);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [checkedList, setCheckedList] = useState([]);
  useEffect(() => {
    if (checkedList?.length > 0) {
      handleChangeAll();
    }
  }, [itemType]);
  const handleChangeAll = () => {
    setCheckedList([]);
    dispatch({
      type: `SET_CHECKED_BRANDS`,
      checked: [],
    });
  };
  //handle checkbox change
  const handleChange = (event) => {
    if (array?.checked?.length > 0) {
      if (array.checked.includes(event.target.name)) {
        var index = array.checked.indexOf(event.target.name);
        if (array.checked.length === 1) {
          setCheckedList([]);
          dispatch({
            type: `SET_CHECKED_BRANDS`,
            checked: [],
          });
        } else {
          var arr = array.checked;
          arr.splice(index, 1);
          setCheckedList(arr);
          dispatch({
            type: `SET_CHECKED_BRANDS`,
            checked: arr,
          });
        }
      } else {
        setCheckedList([...array.checked, event.target.name]);
        dispatch({
          type: `SET_CHECKED_BRANDS`,
          checked: [...array.checked, event.target.name],
        });
      }
    } else {
      setCheckedList([event.target.name]);
      dispatch({
        type: `SET_CHECKED_BRANDS`,
        checked: [event.target.name],
      });
    }
  };
  //handle given text change
  const handleTextChange = (event) => {
    setName(event.target.value);
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
      >{`Brands`}</div>
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
          label={`Search brand`}
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
            <FormControlLabel
              style={{
                fontFamily: "Open Sans",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: 16,
                letterSpacing: 0.16,
                color: "#525252",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
              }}
              disableTypography
              control={
                <StyledCheckbox
                  checked={checkedList?.length < 1}
                  onChange={handleChangeAll}
                  name={"All"}
                />
              }
              label={"All"}
            />
            {array.mug.length === 0 ? (
              <Box sx={{ width: 100 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
              </Box>
            ) : (
              <>
                {Object.keys(array[itemType]).length > 0 ? (
                  Object.keys(array[itemType]).map((field, key) => {
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
                              letterSpacing: 0.16,
                              color: "#525252",
                              display: "flex",
                              alignItems: "center",
                              textAlign: "left",
                            }}
                            disableTypography
                            control={
                              <StyledCheckbox
                                checked={checkedList?.includes(field) ? 1 : 0}
                                onChange={handleChange}
                                name={field}
                              />
                            }
                            label={`${array[itemType][field].name} (${array[itemType][field].count})`}
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
                            letterSpacing: 0.16,
                            color: "#525252",
                            display: "flex",
                            alignItems: "center",
                            textAlign: "left",
                          }}
                          disableTypography
                          key={key}
                          control={
                            <StyledCheckbox
                              checked={checkedList?.includes(field) ? 1 : 0}
                              onChange={handleChange}
                              name={field}
                            />
                          }
                          label={`${array[itemType][field].name} (${array[itemType][field].count})`}
                        />
                      );
                    }
                  })
                ) : (
                  <></>
                )}
              </>
            )}
          </FormGroup>
        </FormControl>
      </Grid>
    </Fragment>
  );
}
