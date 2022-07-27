import React from "react";
import "../styles/index.css";
import Input from "../components/Input";
export default function HomePage() {
  return (
    <div className="text-center mt-7">
      <h1 className="text-3xl font-bold text-center fc-bluepm">Sign Up</h1>
      <div className="mt-4">
        <Input placeholder="Name" />
      </div>
      <div className="mt-4">
        <Input placeholder="Username" />
      </div>
      <div className="mt-4">
        <Input placeholder="Number Phone" />
      </div>
      <div className="mt-4">
        <Input placeholder="Email" />
      </div>
      <div className="mt-4">
        <Input text="password" placeholder="Password" />
      </div>
      <div className="mt-4">
        <Input placeholder="Address" />
      </div>
    </div>
  );
}
