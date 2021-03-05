import React, { useEffect, useState } from "react";
import { AUTH_SERVICE } from "../../services/auth/AuthServices";

export default function Signup({ updateState, setShowForm }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  //   Cleanup on unmount
  useEffect(() => {
    return () => {
      setForm({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
    };
  }, []);

  const handleSignupInputs = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await AUTH_SERVICE.signup(form);
      updateState({ user: data.user, loggedIn: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSignupSubmit}>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel z-depth-5 ">
            <div className="row">
              <div className="input-field col s12 m10 offset-m1">
                <h4>Signup</h4>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="firstName"
                  className="validate"
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleSignupInputs}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="lastName"
                  className="validate"
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleSignupInputs}
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="email"
                  className="validate"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleSignupInputs}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="password"
                  className="validate"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleSignupInputs}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s8 offset-s2">
                <button type="submit" className="btn red">
                  Submit
                </button>
                <span>Already registered?</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowForm(true)}
                  className="blue-text"
                >
                  {" Login"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
