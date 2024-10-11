import React, { useState } from "react";
import ProfileReactComponentWrapper from "./ProfileReactComponentWrapper";
import ProfileAngularComponentWrapper from "./ProfileAngularComponentWrapper";

export default function App() {
  const initialUser = {
    name: "Mr Smith",
    email: "mr.smith@example.com",
  };
  const [user, setUser] = useState(initialUser);

  const handleReactComponentEvent = (user) => {
    setUser(user);
  };

  const handleAngularComponentEvent = (user) => {
    setUser({ name: "", email: "" });
  };
  return (
    <div className="main">
      <h1>React Host App</h1>
      <ProfileAngularComponentWrapper
        user={user}
        onAngularComponentEvent={handleAngularComponentEvent}
      />
      <ProfileReactComponentWrapper
        user={user}
        onReactComponentEvent={handleReactComponentEvent}
      />
    </div>
  );
}
