import React, { useState } from "react";
import moment from "moment";
import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";
import { myUTC, toFixedDecs } from "../../services/helperFunctions/MyHelpers";
import MyDropdown from "./MyDropdown";
// import EditTransaction from "./EditTransaction";
// import M from "materialize-css";
import MyModal from "./MyModal";

export const Transactions = ({ transactions, setTransactions }) => {
  // const [modalId, setModalId] = useState(null);

  const deleteTransaction = async (id) => {
    await AUTH_TRANSACTIONS.deleteTransaction(id);
    setTransactions(
      transactions.filter(
        (transaction) => transaction._id.toString() !== id.toString()
      )
    );
  };

  // const handleEditSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await AUTH_TRANSACTIONS.updateTransaction(id, form);
  //     handleTransactionUpdate(data.transaction);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleTransactionUpdate = (updatedTransaction) => {
    const editTransactions = transactions.map((tr) =>
      tr._id === updatedTransaction._id ? updatedTransaction : tr
    );
    setTransactions(editTransactions);
  };
  // const toggleEditForm = (e) => {
  //   // const res = document
  //   //   .getElementById("edit-transaction")
  //   //   .classList.toggle("scale-out");
  // };

  return (
    <>
      <h5>Transactions</h5>
      <hr />
      {/* <MyModal handleTransactionUpdate={handleTransactionUpdate} /> */}
      {/* <EditTransaction handleTransactionUpdate={handleTransactionUpdate} /> */}

      <ul className="transactions">
        {transactions.length
          ? transactions.map((transaction, index) => (
              <React.Fragment key={transaction._id}>
                {/* <MyModal
                  id={transaction._id}
                  transaction={transaction}
                  handleTransactionUpdate={handleTransactionUpdate}
                /> */}

                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <label
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    htmlFor={`TextInput-${transaction._id}`}
                  >
                    <span className="black-text darken-4">
                      {transaction.name}
                    </span>

                    <span>
                      {moment(transaction.createdAt)
                        .utc(myUTC)
                        .format("MMM Do YYYY, h:mm a")}
                    </span>
                    <span
                      className={
                        transaction.amount > 0 ? "green-text" : "red-text"
                      }
                    >
                      {`${transaction.amount > 0 ? "+" : "-"}$${toFixedDecs(
                        transaction.amount
                      )}`}
                    </span>
                  </label>
                  <MyDropdown
                    transaction={transaction}
                    // onClick={() => setModalId(transaction._id)}
                    deleteTransaction={() => deleteTransaction(transaction._id)}
                    id={transaction._id}
                  />
                </div>
              </React.Fragment>
            ))
          : "You have no transactions"}
      </ul>
    </>
  );
};
