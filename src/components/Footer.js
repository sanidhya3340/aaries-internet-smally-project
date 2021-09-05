import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center font-semibold text-gray-700 mt-16 pb-16">
      <div className="flex">
        <Link to="/privacy">Privacy Policy </Link>  | Terms and Conditions
      </div>
      <div>(c) Smally 2021. All Rights Reserved</div>
    </div>
  );
}
