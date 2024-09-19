import React from "react";

function Button(props) {

  return (
    <>
      <button
        onClick={() => {
          props.handleClick(props.value);
        }}
      >
        {props.btnName}
      </button>
    </>
  );
}

export default Button;
