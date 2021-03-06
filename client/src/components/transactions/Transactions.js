import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";
import {
  MyMoment,
  toFixedDecs,
} from "../../services/helperFunctions/MyHelpers";
import MyDropdown from "./MyDropdown";
import { Divider } from "react-materialize";

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
      <Divider />

      <ul className="transactions">
        {transactions.length
          ? transactions.map((transaction) => (
              <div key={transaction._id}>
                <label
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                  htmlFor={`TextInput-${transaction._id}`}
                >
                  <i className="black-text darken-4">{transaction.name}</i>

                  <i>
                    {MyMoment(transaction.createdAt, "MMM Do YYYY, h:mm a")}
                  </i>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      minWidth: 80,
                    }}
                  >
                    <MyDropdown
                      transaction={transaction}
                      deleteTransaction={() =>
                        deleteTransaction(transaction._id)
                      }
                      id={transaction._id}
                    />
                    <span
                      className={
                        transaction.amount > 0 ? "green-text" : "red-text"
                      }
                    >
                      {`${transaction.amount > 0 ? "+" : "-"}$${toFixedDecs(
                        transaction.amount
                      )}`}
                    </span>
                  </div>
                </label>
              </div>
            ))
          : "You have no transactions"}
      </ul>
    </>
  );
};
