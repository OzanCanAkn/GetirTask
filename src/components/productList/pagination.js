import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Grid } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import { ReactComponent as prev } from "../../assets/svg/prev.svg";
import { ReactComponent as next } from "../../assets/svg/next.svg";
import { useSelector, useDispatch } from "react-redux";
export default function PaginationTab({}) {
  //count=page count,
  //setPagination setting pagination for productList.js's state
  //pagination is initial page number
  const [totalPagination, setTotalPagination] = useState(1);
  const pageData = useSelector((state) => state.pageReducer);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch({
      type: "SET_INIT_PAGE",
      init: value,
    });
  };

  useEffect(() => {
    if (totalPagination !== pageData.total) {
      setTotalPagination(pageData.total);
    }
  }, [pageData]);

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
        boundaryCount={4}
        siblingCount={0}
        count={totalPagination}
        color="primary"
        shape="rounded"
        size="small"
        onChange={handleChange}
        page={pageData.init}
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
