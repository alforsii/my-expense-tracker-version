import React, { useEffect, useState } from "react";
import M from "materialize-css";

import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";

export default function MyModal({ id, transaction, handleTransactionUpdate }) {
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals, {});
  });
  const [form, setForm] = useState({
    name: transaction.name,
    amount: transaction.amount,
  });

  //   Cleanup on unmount
  useEffect(() => {
    return () => {
      setForm({
        email: "",
        password: "",
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
      const { data } = await AUTH_TRANSACTIONS.updateTransaction(id, form);
      handleTransactionUpdate(data.transaction);
      M.Modal.getInstance(document.getElementById(`modal${id}`)).close();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form id={`modal${id}`} className="modal" onSubmit={handleEditSubmit}>
      {/* <!-- Modal Structure --> */}
      <div className="container">
        <div className="modal-content">
          <h4>Edit transaction</h4>
          <div className="divider"></div>
          <div className="row">
            <div className="input-field s12">
              <input
                id={`name${id}`}
                className="validate"
                type="text"
                name="name"
                value={form.name}
                onChange={handleEditInputs}
                autoFocus={true}
              />
              <label htmlFor={`name${id}`}>Name</label>
            </div>
            <div className="input-field s12">
              <input
                type="text"
                id={`amount${id}`}
                className="validate"
                name="amount"
                value={form.amount}
                onChange={handleEditInputs}
              />
              <label htmlFor={`amount${id}`}>Amount</label>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button className="modal-close waves-effect waves-green btn-flat">
          Cancel
        </button>
        <button type="submit" className="waves-effect waves-green btn-flat">
          Done
        </button>
      </div>
    </form>
  );
}
