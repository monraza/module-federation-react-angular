import React, { useEffect } from "react";
// import { createCustomElement } from "@angular/elements";

export const ProfileAngularComponentWrapper = ({ user, onUserUpdate }) => {
  useEffect(() => {
    // Dynamically import the Angular component
    import("angularApp/ProfileComponent");
  }, []);

  return (
    <div className="container">
      <app-profile-component></app-profile-component>
    </div>
  );
};

export default ProfileAngularComponentWrapper;
