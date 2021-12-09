import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { ReactComponent as prev } from "../../assets/svg/prev.svg";
import { ReactComponent as next } from "../../assets/svg/next.svg";

export default function PaginationTab({ count, setPagination }) {
  //count=page count,
  //setPagination setting pagination for productList.js's state
  const handleChange = (event, value) => {
    setPagination(value);
  };
  return (
    <Grid
      container
      style={{ marginBottom: 50, marginTop: 50 }}
      alignItems="center"
      justifyContent="center"
      sx={{
        color: "white",
      }}
    >
      <Pagination
        boundaryCount={2}
        count={count}
        color="primary"
        shape="rounded"
        onChange={handleChange}
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
