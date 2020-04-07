import React, { useState } from "react";

export default function Box(props) {
  const [value, setValue] = useState(null);

  const changeText = (e) => {
    if (props.wins) return;
    console.log("Is Changing");
    if (value) return;
    setValue(props.currentVal);
    props.setThis(props.value);
  };

  return (
    <div
      className="box"
      onClick={changeText}
      style={{ color: value === "X" ? "red" : "blue" }}
    >
      {value}
    </div>
  );
}
