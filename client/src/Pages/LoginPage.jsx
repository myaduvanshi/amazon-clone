import React from "react";
import amazonImg from "./Image/amazonImg.png";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <>
      <div className="flex justify-center">
        <img
          className="
        w-24 
        "
          src={amazonImg}
          alt=""
        />
        <span className="mt-2">.in</span>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          className="
    border border-solid
    w-1/3 p-4 my-4 rounded-lg border-gray-300
    "
        >
          <p className="w-full text-3xl py-2">Sign in</p>
          <label
            htmlFor="name"
            className="py-1 
        text-xs font-bold
        "
          >
            Email
          </label>
          <input
            className="
        border border-gray-400 rounded-md h-8 px-2 w-full
        "
            type="email"
            placeholder=""
          />
          <label
            htmlFor="name"
            className="py-1 
        text-xs font-bold
        "
          >
            Password
          </label>
          <input
            className="
        border border-gray-400 rounded-md h-8 px-2 w-full
        "
            type="password"
            required
            placeholder=""
          />

          <button
            className="bg-[#FFD814]
        w-full my-4 p-1 rounded-md
        "
          >
            Continue
          </button>
          <div className="flex text-sm">
            <p className="mx-1">New to Amazon? </p>
            <Link
              to="/register"
              className="
text-sky-500
hover:text-orange-500
hover:underline-offset-1 hover:underline
"
            >
              {" "}
              Create your Amazon account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
