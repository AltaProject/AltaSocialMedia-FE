import React from "react";
import "../styles/index.css";
export default function Input(props) {
  return (
    <div>
      <input className="text-center w-64 bg-white h-9" type={props.text} placeholder={props.placeholder} />
    </div>
  );
}
