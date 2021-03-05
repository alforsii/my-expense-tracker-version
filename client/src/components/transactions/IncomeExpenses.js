import React from "react";

export const IncomeExpenses = ({ income, expense }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h5>Income</h5>
        <p className="green-text">+${income}</p>
      </div>
      <div>
        <h5>Expense</h5>
        <p className="red-text">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
};
