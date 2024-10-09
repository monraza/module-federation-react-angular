import React, { useEffect } from "react";

export const ProfileAngularComponentWrapper = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import the Angular component
      import("angularApp/ProfileComponent");
    }
  }, []);

  // if (typeof window === "undefined") {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="container">
      <app-profile-component></app-profile-component>
    </div>
  );
};

export default ProfileAngularComponentWrapper;
