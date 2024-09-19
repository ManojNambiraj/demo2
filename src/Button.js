import React from "react";
// import "./Button.css"

function Button(props) {
  // console.log("props--->", );

  return (
    <>
      <button style={{ backgroundColor: props.btnColor }} className="demoBTN">
        {props.itemName}
      </button>
    </>
  );
}

export default Button;
