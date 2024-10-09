import "zone.js";
import { ProfileReactComponentWrapper } from "./ProfileReactComponentWrapper";
import { ProfileAngularComponentWrapper } from "./ProfileAngularComponentWrapper";
import React from "react";
import { createRoot } from "react-dom/client";

const user = {
  user: "Adam",
  email: "fsdagda@bdfshd.com",
  onClick: () => {},
};

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <div>React Shell App</div>
    <ProfileAngularComponentWrapper />
    <ProfileReactComponentWrapper />
  </>
);
