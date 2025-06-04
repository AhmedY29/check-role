import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

function SignUp() {
  const [formDate, setFormDate] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormDate({ ...formDate, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (formDate.password != formDate.confirmPassword) {
      toast.error("Password Does match");
      return;
    }

    axios
      .post("https://683fedf95b39a8039a56248c.mockapi.io/users", {
        email: formDate.email,
        username: formDate.username,
        password: formDate.password,
        role: "client",
      })
      .then(() => {
        navigate("/"), toast.success("SignUp");
      });
  };
  return (
    <section className="signup-section flex justify-center items-center w-full">
      <div className="signup-content my-10 w-[85%] lg:w-[50%]">
        <form
          onSubmit={handleSignUp}
          className="flex flex-col gap-2 p-2 rounded-xl border-1 border-black/40"
        >
          <div className="form-group flex flex-col">
            <label htmlFor="username">Name</label>
            <input
              required
              className="border p-1 px-3"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your name"
              value={formDate.username}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              required
              className="border p-1 px-3"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              value={formDate.email}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              required
              className="border p-1 px-3"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your password"
              minLength={6}
              value={formDate.password}
              onChange={handleChangeInput}
            />
          </div>
          <div className="form-group flex flex-col">
            <label htmlFor="confirmPassword">Re-enter Password</label>
            <input
              required
              className="border p-1 px-3"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter Your Re-enter password"
              minLength={6}
              value={formDate.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>

          <div className="form-group flex gap-2">
            <input type="checkbox" id="agreement" name="agreement" required />
            <label htmlFor="agreement">I agree</label>
          </div>
          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-md cursor-pointer uppercase"
          >
            Sign Up
          </button>
          <h1>
            Create an Account{" "}
            <Link className="text-blue-400 hover:underline" to={"/signin"}>
              Sign in
            </Link>
          </h1>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
