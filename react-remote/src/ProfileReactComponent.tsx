import React, { FunctionComponent, useEffect } from "react";

import "./profile-style.css";

export interface IUser {
  name: string;
  email: string;
}

export interface IProfileProps {
  name: string;
  email: string;
  onClick: (IUser) => void;
}

export const ProfileReactComponent: FunctionComponent<IProfileProps> = (
  props: IProfileProps
) => {
  const [state, setState] = React.useState({ ...props });

  console.log("Log: ProfileReactComponent", { props, state });

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setState((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  useEffect(() => {
    setState({ ...props });
  }, [props]);

  const updateCurrentUser = () => {
    props.onClick({ name: state.name, email: state.email });
  };

  return (
    <div className="profile-container">
      <span className="component-tag">React</span>
      <div style={{ display: "flex", paddingTop: "10px" }}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </div>
        <button onClick={updateCurrentUser}>Submit</button>
      </div>
    </div>
  );
};

export default ProfileReactComponent;
