import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import MainTransactions from "./components/transactions/MainTransactions";
import { AUTH_SERVICE } from "./services/auth/AuthServices";

function App() {
  const [user, setUser] = useState(null);

  const isLoggedIn = async () => {
    const { data } = await AUTH_SERVICE.isLoggedIn();
    if (data?.user) {
      setUser(data.user);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div>
      <Switch>
        <Route
          path="/login"
          exact
          render={(props) =>
            !user ? (
              <Login {...props} setUser={setUser} />
            ) : (
              <Redirect to="/transactions" />
            )
          }
        />
        <Route
          path="/signup"
          exact
          render={(props) =>
            !user ? (
              <Signup {...props} setUser={setUser} />
            ) : (
              <Redirect to="/transactions" />
            )
          }
        />
        <Route
          path="/transactions"
          exact
          render={(props) =>
            user ? (
              <MainTransactions {...props} user={user} setUser={setUser} />
            ) : (
              <Redirect to="/signup" />
            )
          }
        />
      </Switch>
    </div>
  );
}

export default App;
