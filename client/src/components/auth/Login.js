import React, { useEffect, useState } from "react";
import { AUTH_SERVICE } from "../../services/auth/AuthServices";

export default function Login({ updateState, setShowForm }) {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  //   Cleanup on unmount
  useEffect(() => {
    return () => {
      setForm({
        email: "",
        password: "",
      });
    };
  }, []);

  const handleLoginInputs = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await AUTH_SERVICE.login(form);
      updateState({ user: data.user, loggedIn: true });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <div className="card-panel z-depth-5 ">
            <div className="row">
              <div className="input-field col s12 m10 offset-m1">
                <h4>Login</h4>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="email"
                  className="validate"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleLoginInputs}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12 m10 offset-m1">
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleLoginInputs}
                  className="validate"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="col s8 offset-s2">
                <button type="submit" className="btn blue">
                  Login
                </button>
                <span>Not registered yet?</span>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowForm(false)}
                  className="red-text"
                >
                  {" Signup"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
