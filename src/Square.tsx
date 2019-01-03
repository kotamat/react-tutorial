import React from "react";
interface SquareProps {
  value?: string | number;
  onClick: Function;
}
export class Square extends React.Component<SquareProps> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
