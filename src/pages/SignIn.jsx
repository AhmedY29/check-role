import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

function SignIn() {
  const [formDate, setFormDate] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [users, setUsers] = useState();

  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormDate({ ...formDate, [name]: value });
  };

  useEffect(() => {
    axios
      .get("https://683fedf95b39a8039a56248c.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    let user = users.find(
      (user) =>
        user.email == formDate.email && user.password == formDate.password
    );
    if (!user) {
      toast.error("email or password invalid");
      return;
    }

    localStorage.setItem(
      "UserName-Account",
      JSON.stringify({
        email: formDate.email,
        username: user.username,
        role: user.role,
      })
    );
    navigate("/");
    toast.success("Login successfully");
  };
  return (
    <section className="signin-section flex justify-center items-center w-full">
      <div className="signin-content my-10 w-[85%] lg:w-[50%]">
        <form
          onSubmit={handleSignIn}
          className="flex flex-col gap-2 p-2 rounded-xl border-1 border-black/40"
        >
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

          <button
            type="submit"
            className="bg-blue-400 p-2 rounded-md cursor-pointer uppercase"
          >
            Sign In
          </button>
          <h1>
            Create an Account{" "}
            <Link className="text-blue-400 hover:underline" to={"/signup"}>
              Sign up
            </Link>
          </h1>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
