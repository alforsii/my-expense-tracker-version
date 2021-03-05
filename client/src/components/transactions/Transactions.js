import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";
import moment from "moment";
import { myUTC, toFixedDecs } from "../../services/helperFunctions/MyHelpers";

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
      <ul id="list" className="list transactions">
        {transactions.length
          ? transactions.map((transaction) => (
              <li
                key={transaction._id}
                className={transaction.amount > 0 ? "plus" : "minus"}
              >
                {transaction.name}
                <span>
                  {moment(transaction.createdAt)
                    .utc(myUTC)
                    .format("MMM Do YYYY, h:mm a")}
                </span>
                <span>
                  {transaction.amount > 0 ? "+" : "-"}$
                  {toFixedDecs(transaction.amount)}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTransaction(transaction._id)}
                >
                  x
                </button>
              </li>
            ))
          : "You have no transactions"}
      </ul>
    </>
  );
};
