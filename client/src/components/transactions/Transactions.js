import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";

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
      <h3>Transactions</h3>
      <ul id="list" className="list">
        {transactions.length
          ? transactions.map((transaction) => (
              <li
                key={transaction._id}
                className={transaction.amount > 0 ? "plus" : "minus"}
              >
                {transaction.name} <span>{transaction.amount}</span>
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
