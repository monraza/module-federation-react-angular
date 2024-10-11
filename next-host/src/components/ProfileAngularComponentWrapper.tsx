import React, { useEffect, useRef } from "react";

export interface IUser {
  name: string;
  email: string;
}

export interface ProfileAngularComponentWrapperProps {
  user: IUser;
  onAngularComponentEvent: (user: IUser) => void;
}

export const ProfileAngularComponentWrapper: React.FC<
  ProfileAngularComponentWrapperProps
> = ({ user, onAngularComponentEvent }) => {
  const angularComponentRef = useRef(null);
  console.log("Log: ProfileAngularComponentWrapper", { user });
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("angularApp/ProfileComponent")
        .then(() => {
          if (angularComponentRef.current) {
            angularComponentRef.current.removeEventListener(
              "onReset",
              (event) => onAngularComponentEvent(event.detail.user),
              true
            );
            angularComponentRef.current.addEventListener(
              "onReset",
              (event) => onAngularComponentEvent(event.detail.user),
              true
            );
          }
        })
        .catch(() =>
          console.error(
            "Error: Couldn't load ProfileComponent from Angular Remote"
          )
        );
    }
  }, []);

  useEffect(() => {
    if (angularComponentRef.current) {
      angularComponentRef.current.user = user;
    }
  }, [user]);

  return (
    <div className="container">
      <app-profile-component ref={angularComponentRef}></app-profile-component>
    </div>
  );
};

export default ProfileAngularComponentWrapper;
