import React from "react";
export default function ChartTotal({total}) {
  
  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#1EA4CE",
        width: "fit-content",
        height: "fit-content",
        marginTop:10,
        padding:"20px 30px",
        display: "flex",
        alignItems: "center",
        border: "solid 3px #1EA4CE",
      }}
      item
    >
      <p style={{ color: "#1EA4CE", textAlign: "center", margin: "auto" }}>
        {total}
      </p>
    </div>
  );
}
