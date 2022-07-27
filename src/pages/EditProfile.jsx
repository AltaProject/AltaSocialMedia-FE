import React from "react";
import { ButtonLarge } from "../components/Button";

export default function EditProfile() {
  return (
    <div className="bg-screen">
      <div>
        <h2 className="text-center text-bluepm text-3xl font-bold">
          Edit Profile
        </h2>
      </div>
      <div className="text-center">
        <ButtonLarge label="Save Updates" />
      </div>
    </div>
  );
}
