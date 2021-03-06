import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";
import {
  MyMoment,
  toFixedDecs,
} from "../../services/helperFunctions/MyHelpers";
import MyDropdown from "./MyDropdown";

export const Transactions = ({ transactions, setTransactions }) => {
  const deleteTransaction = async (id) => {
    await AUTH_TRANSACTIONS.deleteTransaction(id);
    setTransactions(
      transactions.filter(
        (transaction) => transaction._id.toString() !== id.toString()
      )
    );
  };

  return (
    <>
      <h5>Transactions</h5>
      <hr />

      <ul className="transactions">
        {transactions.length
          ? transactions.map((transaction) => (
              <div
                key={transaction._id}
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
                    {MyMoment(transaction.createdAt, "MMM Do YYYY, h:mm a")}
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
                  deleteTransaction={() => deleteTransaction(transaction._id)}
                  id={transaction._id}
                />
              </div>
            ))
          : "You have no transactions"}
      </ul>
    </>
  );
};
