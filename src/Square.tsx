import React, { FunctionComponent } from "react";
interface SquareProps {
  value?: string | number;
  onClick: Function;
}
const Square: FunctionComponent<SquareProps> = props => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
