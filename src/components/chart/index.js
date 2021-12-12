import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Counter from "./counter";
import ChartTotal from "./chartTotal";
import { useSelector } from "react-redux";
export default function Chart() {
  const items = useSelector((state) => state.chartReducer);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let addition = 0;
    items.map((item) => {
      addition = addition + item.price * item.count;
    });
    setTotal(Math.round(addition * 100) / 100);
  }, [items]);
  return (
    <Grid xs={12} md={3} item style={{ paddingLeft: 12 }}>
      <Grid
        style={{
          backgroundColor: "#ffffff",
          border: "5px #1EA4CE solid",
          borderRadius: 3,
          maxHeight: 500,
          overflow: "scroll",
        }}
      >
        <Grid style={{ marginLeft: 20, marginRight: 20 }}>
          {items.length === 0 ? (
            <p
              style={{
                paddingBottom: 20,
                textAlign: "center",
                borderBottom: "1px solid #f6f6f6",
              }}
            >
              Your Cart is Empty
            </p>
          ) : (
            <></>
          )}
          {items.map((item, key) => {//renders all items in chart
            return (
              <Grid
                item
                container
                key={key}
                direction="row"
                alignItems="space-between"
                style={{ borderBottom: "1px solid #f6f6f6" }}
              >
                <Grid item lg={5} md={12} xs={5}>
                  <p
                    style={{
                      fontFamily: "Open Sans",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      fontSize: 14,
                      lineHeight: 1.4,
                      letterSpacing: 0.16,
                      color: "#191919",
                    }}
                  >
                    {item.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "Open Sans",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: 14,
                      lineHeight: 1.4,
                      letterSpacing: 0.16,
                      color: "#1EA4CE",
                    }}
                  >
                    ₺ {item.price}
                  </p>
                </Grid>
                <Counter item={item}></Counter>
              </Grid>
            );
          })}
          <Grid xs={12} container justifyContent="flex-end">
            <ChartTotal item total={total}></ChartTotal>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
