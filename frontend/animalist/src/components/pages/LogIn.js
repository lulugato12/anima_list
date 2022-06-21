import React from "react";
import { SignIn } from "../misc/auth";

const LogIn = () => {
  console.log("Login");
  return (
    <>
      <section className="content-container">
        <SignIn />
      </section>
    </>
  );
};

export default LogIn;
