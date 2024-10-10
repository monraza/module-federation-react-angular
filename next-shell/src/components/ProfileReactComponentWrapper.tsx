import React, { lazy, useState, useEffect } from "react";

export interface IUser {
  name: string;
  email: string;
}

export interface IProfileProps {
  name: string;
  email: string;
  onClick: (user: IUser) => void;
}

export interface ProfileReactComponentWrapperProps {
  user: IUser;
  onReactComponentEvent: (user: IUser) => void;
}

export const ProfileReactComponentWrapper: React.FC<
  ProfileReactComponentWrapperProps
> = ({ user, onReactComponentEvent }) => {
  console.log("Log: ProfileReactComponentWrapper", { user });

  const [Component, setComponent] = useState<React.LazyExoticComponent<
    React.ComponentType<IProfileProps>
  > | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(
        lazy(() =>
          import("profile_user/ProfileReactComponent").catch(() => null)
        )
      );
    }
  }, [user]);

  const handleSubmit = (user: IUser) => {
    onReactComponentEvent(user);
  };

  return (
    <div className="container">
      {Component && (
        <Component name={user.name} email={user.email} onClick={handleSubmit} />
      )}
    </div>
  );
};

export default ProfileReactComponentWrapper;
