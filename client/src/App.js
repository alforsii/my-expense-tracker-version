import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { isLoggedIn, updateState } from "./authRedux/actions/authActions";
import AuthSignIn from "./components/auth/AuthSignIn";
import EditTransaction from "./components/transactions/EditTransaction";

import MainTransactions from "./components/transactions/MainTransactions";

function App({ loggedIn, isLoggedIn, user, updateState }) {
  useEffect(() => {
    isLoggedIn();
    return () => {
      updateState({ user: null, loggedIn: false });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Switch>
        <Route
          path="/transactions"
          exact
          render={(props) =>
            loggedIn ? (
              <MainTransactions
                {...props}
                user={user}
                updateState={updateState}
              />
            ) : (
              <Redirect to="/login" />
            )
          }
        />
        <Route
          path="/login"
          exact
          render={(props) =>
            !loggedIn ? (
              <>
                <AuthSignIn {...props} updateState={updateState} />
              </>
            ) : (
              <Redirect to="/transactions" />
            )
          }
        />

        <Route
          path="/transaction/edit/:id"
          exact
          render={(props) => (
            <EditTransaction {...props} user={user} updateState={updateState} />
          )}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    loggedIn: state.authReducer.loggedIn,
  };
};
const mapDispatchToProps = (dispatch) => ({
  isLoggedIn: () => dispatch(isLoggedIn()),
  updateState: (data) => dispatch(updateState(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
