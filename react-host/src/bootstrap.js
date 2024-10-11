import "zone.js";
import { ProfileReactComponentWrapper } from "./ProfileReactComponentWrapper";
import { ProfileAngularComponentWrapper } from "./ProfileAngularComponentWrapper";
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const user = {
  user: "Adam",
  email: "fsdagda@bdfshd.com",
  onClick: () => {},
};

const root = createRoot(document.getElementById("root"));
root.render(
  <div class="main">
    <h1>React Shell App</h1>
    <ProfileAngularComponentWrapper />
    <ProfileReactComponentWrapper />
  </div>
);
