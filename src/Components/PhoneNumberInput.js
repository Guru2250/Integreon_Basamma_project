import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneNumberInput() {
  const [num, setNum] = useState("");

  const inputStyle = {
    // width: "350px",
    // height: "39px",
    height: "34px",
    width: "265px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "10px",
    paddingLeft: "45px",
  };
  const flagStyle = {
    height: "15px",
    border: "none",
    margin: "10px 5px",
    backgroundColor: "transparent",
  };

  return (
    <div style={{ width: "350px" }}>
      <PhoneInput
        country={"in"}
        value={num}
        onChange={(num) => setNum(num)}
        placeholder="Mobile Number"
        inputProps={{
          style: inputStyle,
        }}
        buttonStyle={flagStyle}
      />
    </div>
  );
}

export default PhoneNumberInput;
