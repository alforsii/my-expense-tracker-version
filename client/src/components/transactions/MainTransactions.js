import { useEffect, useState } from "react";
import { AddTransaction } from "./AddTransaction";
import { Balance } from "./Balance";
import { Transactions } from "./Transactions";
import { IncomeExpenses } from "./IncomeExpenses";
import { AUTH_TRANSACTIONS } from "../../services/transactions/AuthTransactions";
import { AUTH_SERVICE } from "../../services/auth/AuthServices";

export default function MainTransactions({ user, setUser, history }) {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    checkUpdate();
    // eslint-disable-next-line
  }, [transactions]);

  // Cleanup
  useEffect(() => {
    return () => {
      setUser(null);
      setTransactions([]);
      setExpense(0);
      setIncome(0);
    };
    // eslint-disable-next-line
  }, []);

  const getTransactions = async () => {
    try {
      const transactionsFromDB = await AUTH_TRANSACTIONS.getTransactions();

      // console.log("🚀  transactionsFromDB", transactionsFromDB);
      setTransactions(transactionsFromDB.data.transactions);
    } catch (err) {
      console.log(err);
    }
  };
  const checkUpdate = () => {
    const income = transactions
      .filter((tr) => tr.amount > 0)
      .reduce((acc, val) => acc + val.amount, 0);
    const expense = transactions
      .filter((tr) => tr.amount < 0)
      .reduce((acc, val) => acc + val.amount, 0);
    setIncome(income);
    setExpense(expense);
  };

  const handleLogout = async () => {
    try {
      await AUTH_SERVICE.logout();
      history.push("/signup");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h2>
          <span style={{ color: "purple" }}>
            {user.firstName} {user.lastName}'s
          </span>{" "}
          Expense tracker
        </h2>
        <Balance balance={income + expense} />

        <IncomeExpenses income={income} expense={expense} />

        <Transactions
          transactions={transactions}
          setTransactions={setTransactions}
        />
      </div>
      <div>
        <button onClick={() => handleLogout()}>Logout</button>
        <AddTransaction
          setTransactions={setTransactions}
          transactions={transactions}
        />
      </div>
    </div>
  );
}
