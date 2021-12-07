import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Counter from "./counter";
import ChartTotal from "./chartTotal";
export default function Chart() {
  const [items, setItems] = useState([
    { name: "perfect mug", price: 15.83, count: 1 },
    { name: "perfect table", price: 15.23, count: 2 },
  ]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let addition = 0;
    items.map((item) => {
      addition = addition + item.price;
    });
    setTotal(Math.round(addition * 100) / 100);
  }, [items]);
  return (
    <Grid
      style={{
        backgroundColor: "#ffffff",
        border: "5px #1EA4CE solid",
        borderRadius: 3,
        maxHeight: 300,
        overflow: "scroll",
      }}
      xs={3}
    >
      <Grid style={{ marginLeft: 20, marginRight: 20 }}>
        {items.map((item, key) => {
          return (
            <Grid
              item
              container
              key={key}
              direction="row"
              alignItems="space-between"
              style={{ borderBottom: "1px solid #f6f6f6" }}
            >
              <Grid item xs={5}>
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
  );
}
