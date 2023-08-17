import React, { useState } from "react";
import styled from "styled-components";
import OtpGenerate from "./OtpGenerate";
import FormUnit from "./FormUnit";
import backgroundImage from "./Images/img2.jpg";
import EmpImage from "./Images/hero-image.png";
import CornerImage1 from "./Images/BackSquare.png";
import CornerImage2 from "./Images/corner.png";
import { useNavigate } from "react-router-dom";
//  import ValidatingOtp from './ValidatingOtp';
//import Logobar from './Logobar';

const LoginPage = ({ visibleHandle }) => {
  const [stepOne, setStepOne] = useState(0);
  const [values, setValues] = useState({ email: "", password: "" });
  const [result, setResult] = useState("");
  const Navigate = useNavigate();

  const otpHandle = (res) => { 
    setResult(res);
  };

  const loginVerification = () => {
    setStepOne(1);
  };
  const emailChange = (e) => {
    setValues({ ...values, email: e.target.value });
  };
  const passwordChange = (e) => {
    setValues({ ...values, password: e.target.value });
  };
  const handleSubmit = () => {
    if (values.email === "guru@gmail.com" && values.password === "1234") {
      loginVerification();
    } else {
      alert("invalid email or password");
    }
  };
  const otpVerification = () => {
    if (result.length === "undefined" || result.length === 0) {
      alert("Enter OTP");
    } else if (result === "12345") {
      //alert("user logged in")
      Navigate("/profile");
      visibleHandle(true);
    } else {
      alert("invalid otp");
    }
  };
  return (
    <MainDiv>
      <LeftDiv>
        <Image src={EmpImage} alt="front image" />
        <SquareImg src={CornerImage1} alt="square image" />
        <SquareImg
          style={{ "z-index": "3" }}
          src={CornerImage2}
          alt="corner image"
        />
        <Paragraph>
          "Integreon's expertise and willingness to innovate allows me to
          deliver increased efficiency to my key internal clients, our
          attorneys, so they can focus on higher-value work."
        </Paragraph>
      </LeftDiv>
      <div style={{ width: "100%" }}>
        {stepOne === 0 ? (
          <FormUnit
            LoginSubmit={handleSubmit}
            emailChange={emailChange}
            passwordChange={passwordChange}
          />
        ) : (
          <OtpGenerate otpValidate={otpVerification} otpHandle={otpHandle} />
        )}
      </div>
    </MainDiv>
  );
};

export default LoginPage;

const MainDiv = styled.div`
  height: 90vh;
  width: 100%;
  background: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: right;
  background-color: #f7f7f7;
  display: flex;
`;

const LeftDiv = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
`;

const Image = styled.img`
  position: relative;
  padding-top: 30px;
  display: block;
  width: 75%;
  z-index: 2;
`;
const SquareImg = styled.img`
  position: absolute;
  top: 0;
  margin-top: 80px;
  left: 0;
  margin-left: 250px;
  height: 300px;
`;

const Paragraph = styled.p`
  text-overflow: wrap;
  font-family: aktiv-grotesk, sans-serif;
  font-size: 17px;
  width: 78%;
  text-align: left;
  padding-left: 30px;
`;
