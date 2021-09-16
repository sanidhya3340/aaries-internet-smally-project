import React, { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { useTitle } from "../hooks/title";

export default function LoginPage() {
  useTitle("Sign Up to Smally");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mt-20 mx-8 md:mx-16">
      <Link to="/">
        <img src="/assets/navbar/Smally-name.png" alt="" className="w-32" />
      </Link>
      <div className="mt-6 font-bold text-gray-700 text-5xl">Login !</div>
      <form
        action=""
        className="mt-8 flex flex-col w-full sm:w-4/5 md:3/5 lg:w-2/5"
      >
        <input
          type="text"
          placeholder="Email Address"
          className="mt-4 px-4 py-6 focus:outline-none border border-gray-500 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="mt-4 px-4 py-6 focus:outline-none border border-gray-500 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.value)}
        />
        <button className="font-bold text-white bg-red-text rounded-lg px-12 py-4 mt-8">
          Sign in
        </button>
      </form>
      <div className="text-gray-500 font-semibold flex mt-4">
        I am a new user,{" "}
        <Link to="/signup" className="text-red-text font-semibold">
          Sign up.
        </Link>
      </div>
      <Footer />
    </div>
  );
}
