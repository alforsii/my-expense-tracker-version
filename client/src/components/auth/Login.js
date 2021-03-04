import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AUTH_SERVICE } from "../../services/auth/AuthServices";

export default function Login({ setUser }) {
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
      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <Link to="/signup">Go to signup</Link>
      <form onSubmit={handleLoginSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleLoginInputs}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleLoginInputs}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
