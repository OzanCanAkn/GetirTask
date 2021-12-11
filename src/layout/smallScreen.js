import React, { useState } from "react";
import {
  ProductList,
  Header,
  CheckboxGroup,
  SortTab,
  Chart,
  Footer,
} from "../components";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
export default function SmallScreen() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [chartOpen, setChartOpen] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));


  const handleChartClose = () => {
    setChartOpen(false);
  };

  const handleFilterClose = () => {
    setFilterOpen(false);
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <Header></Header>
      <Grid style={{ marginLeft: "5vw", marginRight: "5vw", marginTop: "7vh" }}>
        <Grid container>
          <ProductList setFilterOpen={setFilterOpen} setChartOpen={setChartOpen}></ProductList>
        </Grid>
        <Footer></Footer>
      </Grid>
      <Dialog
        fullScreen={fullScreen}
        open={filterOpen}
        onClose={handleFilterClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <Grid style={{ paddingRight: 16 }} item id="filtersContainer">
              <SortTab></SortTab>
              <CheckboxGroup groupType="brand"></CheckboxGroup>
              <CheckboxGroup groupType="tag"></CheckboxGroup>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleFilterClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        fullScreen={fullScreen}
        open={chartOpen}
        aria-labelledby="responsive-chart-dialog-title"
      >
        <DialogContent>
          <DialogContentText>
            <Grid>
              <Chart style={{ width: "100%" }} xs={12} item></Chart>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleChartClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
