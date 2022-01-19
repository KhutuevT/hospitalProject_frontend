import * as React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = ({ text, onClick }) => {
  
  return (
    <div className="button-div">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default ButtonComponent;
