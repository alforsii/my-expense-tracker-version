import React from "react";
import { toFixedDecs } from "../../services/helperFunctions/MyHelpers";

export const Balance = ({ balance }) => {
  return (
    <>
      <h6>Your Balance</h6>
      <h5 id="balance" className={`${balance > 0 ? "green-text" : "red-text"}`}>
        {`${balance > 0 ? "+" : "-"}`}${toFixedDecs(balance)}
      </h5>
    </>
  );
};
