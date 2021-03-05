import React, { useState } from "react";

import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";

export const AddTransaction = ({ transactions, setTransactions }) => {
  const [form, setForm] = useState({
    name: "",
    amount: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addTransaction = async (e) => {
    e.preventDefault();
    const { data } = await AUTH_TRANSACTIONS.addTransaction({
      name: form.name,
      amount: form.amount * 1,
    });
    setTransactions([data.transaction, ...transactions]);
    setForm({ name: "", amount: "" });
  };
  return (
    <>
      <h5>Add new transaction</h5>
      <form id="form" onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name..."
            value={form.name}
            onChange={onChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount..."
            value={form.amount}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn bg-purple">
          Add transaction
        </button>
      </form>
    </>
  );
};
