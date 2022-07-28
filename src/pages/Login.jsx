import React from "react";
import logo from "../image/ori.png";
import Input from "../components/Input";
import { ButtonLarge } from "../components/Button";

export default function Login() {
  return (
    <>
      <div className="bg-screen h-screen ">
        <div
          className="pt-20 mx-auto w-9/12 xxs:w-8/12 xs:w-7/12
         sm:w-3/5 md:w-6/12 lg:w-5/12 xl:w-5/12 flex justify-between items-center"
        >
          <h2 className="text-bluepm text-xl xxs:text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-bold">
            Log In to
          </h2>
          <img
            className=" w-28 xxs:w-32 xs:w-36 sm:w-52 md:w-56 lg:w-60 xl:w-72"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="mb-7 mt-10 text-center">
          <Input type="text" placeholder="Phone, email, or username" />
        </div>
        <div className="mb-7 text-center">
          <Input type="password" placeholder="Password" />
        </div>
        <div className="mt-20 text-center">
          <ButtonLarge label="Login In" />
        </div>
        <p className="text-center text-blackpm mt-7 lg:text-xl">
          Dont't have an account?
          <button className="ml-1 hover:text-green-900 text-blue-800">
            Sign Up
          </button>
        </p>
      </div>
    </>
  );
}
