import React from "react";

function Gap(props) {
  return (
    <div
      className="gap"
      style={{
        height: props.height || "20rem"
      }}
    />
  );
}

export default Gap;
