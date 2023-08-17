import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhNumberInput = ({value,setPhNo}) => {
  const inputStyle = {
    height: "34px",
    width: "105%",
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
    <div>
      <div style={{ width: "350px" }}>
        <PhoneInput
          country={"in"}
          value={value}
          onChange={(value) =>setPhNo (value)}
          placeholder="Mobile Number"
          inputProps={{
            style: inputStyle,
          }}
          buttonStyle={flagStyle}
        />
      </div>
    </div>
  );
};

export default PhNumberInput;
