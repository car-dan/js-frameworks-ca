import React from "react";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="container">
      <Heading content="Login" />
      <LoginForm />
    </div>
  );
}
