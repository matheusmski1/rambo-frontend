import React from "react";
import "./InputPassword.css";

export default function Input({ label, fieldValue, handleChange }) {
  return (
    <div className="input">
      <input type="password" id="password" />
      <span className="barra"></span>
      <label>{label}</label>
    </div>
  );
}
