import React, { useContext, useState } from "react";
import "../styles/index.css";
import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../utils/context";

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [numberPhone, setNumberPhone] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, setToken } = useContext(TokenContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name,
      username,
      email,
      password,
      numberPhone,
    };

    axios
      .post("https://postme.site/register", body)
      .then((response) => {
        console.log(response);
        const { token } = response.data;
        localStorage.setItem("token", token);
        setToken(token);
        alert("Sign Up Sucess");
        navigate("/login");
      })
      .catch((error) => {
        alert("Sign Up failed");
      })
      .finally(() => {});
  };

  return (
    <>
      <div className="bg-screen h-screen">
        <h2 className="pt-6 pb-4 md:pb-4 text-center text-bluepm text-3xl lg:text-4xl font-bold">
          Sign Up
        </h2>

        <form
          className="mb-7 mt-10 text-center flex flex-col gap-5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input
            type="text"
            placeholder="Update your name"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="text"
            placeholder="Update your username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="tel"
            placeholder="Update your number phone"
            onChange={(e) => setNumberPhone(e.target.value)}
          />

          <Input
            type="email"
            placeholder="Update your email"
            onChange={(e) => setEmail(e.target.valuer)}
          />

          <Input
            type="password"
            placeholder="Update your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <ButtonLarge label="Create Account" />
        </form>

        <p className="text-center text-blackpm mt-4 lg:text-xl">
          Have an account?
          <Link to="/login">
            <button className="ml-1 hover:text-green-900 text-blue-800">
              Log In
            </button>
          </Link>
        </p>
      </div>
    </>
  );
}
