import React, { useEffect, useState } from "react";
import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";

export default function EditTransaction({ history }) {
  const transaction = history?.location?.state?.transaction;
  const [form, setForm] = useState({
    name: transaction?.name,
    amount: transaction?.amount,
  });

  //   Cleanup on unmount
  useEffect(() => {
    return () => {
      setForm({
        name: "",
        amount: "",
      });
    };
  }, []);

  const handleEditInputs = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await AUTH_TRANSACTIONS.updateTransaction(transaction?._id, form);
      history.push("/transactions");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form id="edit-transaction" onSubmit={handleEditSubmit}>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel z-depth-5 ">
            <div className="row">
              <div className="input-field col s12 m10 offset-m1">
                <h5>Update/Edit Transaction</h5>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="name"
                  className="validate"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleEditInputs}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="amount"
                  type="number"
                  name="amount"
                  value={form.amount}
                  onChange={handleEditInputs}
                  className="validate"
                />
                <label htmlFor="amount">Amount</label>
              </div>
              <div className="col s8 offset-s2">
                <button type="submit" className="btn blue">
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
