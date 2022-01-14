import * as React from 'react';
import "./ButtonComponent.scss"

const ButtonComponent = ({text}) =>  {

  return (
      <div className="button-div">
          <button>{text}</button>
      </div>
  );
}

export default ButtonComponent;
