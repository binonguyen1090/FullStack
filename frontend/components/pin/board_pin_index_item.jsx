import React from "react";
import { Link } from "react-router-dom";

export default class BoardPinIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger

    const { pin } = this.props;
    return (
      <div className="user_pins_box">
        <img className="user_pin_item" src={pin.photoUrl} />
      </div>
    );
  }
}
