import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AUTH_SERVICE } from "../../services/auth/AuthServices";

export default function Signup({ setUser }) {
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
      setUser(data.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h2>Signup</h2>
      <Link to="/login">Go to Login</Link>
      <form onSubmit={handleSignupSubmit}>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleSignupInputs}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleSignupInputs}
          />
        </label>
        <label>
          First Name
          <input
            type="firstName"
            name="firstName"
            placeholder="First name"
            value={form.firstName}
            onChange={handleSignupInputs}
          />
        </label>
        <label>
          Last Name
          <input
            type="lastName"
            name="lastName"
            placeholder="Last name"
            value={form.lastName}
            onChange={handleSignupInputs}
          />
        </label>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
