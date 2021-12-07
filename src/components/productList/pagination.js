import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { ReactComponent as prev } from "../../assets/svg/prev.svg";
import { ReactComponent as next } from "../../assets/svg/next.svg";

export default function PaginationTab() {
  return (
    <Grid
      container
      style={{ marginBottom: 50,marginTop:50 }}
      alignItems="center"
      justifyContent="center"
    >
      <Pagination
        boundaryCount={4}
        count={10}
        color="primary"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: prev, next: next }}
            {...item}
          />
        )}
      />
    </Grid>
  );
}
