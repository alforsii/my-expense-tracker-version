import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthSignIn({ updateState }) {
  const [showForm, setShowForm] = useState(true);
  const toggleSignIn = (e) => {
    document.getElementById("sign-in").classList.toggle("scale-out");
  };
  return (
    <div>
      <button onClick={toggleSignIn} className="btn blue">
        SignIn
      </button>

      <div id="sign-in" className="scale-transition ">
        {showForm ? (
          <Login setShowForm={setShowForm} updateState={updateState} />
        ) : (
          <Signup setShowForm={setShowForm} updateState={updateState} />
        )}
      </div>
    </div>
  );
}
