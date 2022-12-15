import React from "react";
import "./comp.css";

export function Comp(props) {
  const { movie } = props;
  return (
    <div className="parent-movie">
      <div className="main-movie">
        <div>{movie}</div>
      </div>
    </div>
  );
}
