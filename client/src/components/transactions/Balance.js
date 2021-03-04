import React from "react";

export const Balance = ({ balance }) => {
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance" className={`money ${balance > 0 ? "plus" : "minus"}`}>
        {`${balance}`}
      </h1>
    </>
  );
};
