import React, { lazy, useState, useEffect, FunctionComponent } from "react";

export interface IUser {
  name: string;
  email: string;
}

export interface IProfileProps {
  name: string;
  email: string;
}

export const ProfileReactComponentWrapper = () => {
  const [Component, setComponent] = useState<React.LazyExoticComponent<
    React.ComponentType<any>
  > | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setComponent(
        lazy(() =>
          import("profile_user/ProfileReactComponent").catch(() => null)
        )
      );
    }
  }, []);

  return <div className="container">{Component && <Component />}</div>;
};

export default ProfileReactComponentWrapper;
