import React from 'react';
import styled from "styled-components";
import WestIcon from '@mui/icons-material/West';
import AuthCode from 'react-auth-code-input';

const OtpGenerate = ({otpValidate, otpHandle}) => {
  return (
    <MainDiv>
        <Title>Enter OTP</Title>
        <Paragraph>A 5-Digit code has been sent to <span style={{color:"#b42597"}}>richard@integreon.com</span></Paragraph>
        <div className="otp">
          <AuthCode inputClassName='input' length={5} onChange={otpHandle}/>
        </div>
        <Button onClick={()=>otpValidate()} >Verify & Login</Button><br />
        <BackButton><WestIcon  style={{fontSize:"medium"}}/>Go back</BackButton>
        <OtpButton>Resend OTP</OtpButton>
    </MainDiv>
  )
}

export default OtpGenerate;

const MainDiv=styled.div`
	margin-top:100px;
  background-color:#f7f7f7;
  margin-right:50px;
	padding: 30px;
	width: 75%;

  .otp {
    margin:30px 35px 20px 45px;
  }
  .input {
    width: 45px;
    height:45px;
    padding: 0px;
    font-size: 24px;
    text-align: center;
    margin: 0 28px 20px 0;
    text-transform: uppercase;
    color: #494949;
    border: 1px solid #d6d6d6;
    border-radius: 4px;
    background-color: #fff;
    background-clip: padding-box;
  }

  .input:focus {
    appearance: none;
    outline: 0;
    box-shadow: 0 0 0 3px rgb(131 192 253 / 50%);
  }
`;

const Title=styled.h1`
	margin-right:275px;
`;

const Button = styled.button`
  box-sizing: border-box;
  color: white;
  height: 45px;
  width: 450px;
  padding: 15px;
  border: 1px solid #757575;
  border-radius: 5px;
  background-color: #b42597;
`;

const Paragraph=styled.p`
  margin-right:25px;
	font-family: aktiv-grotesk, sans-serif;
	font-size: 15px;
	font-weight: bold;
`;
const BackButton=styled.button`
  border: none;
  background-color:#f9f9f9;
  text-decoration:underline;
  margin-right:270px;
	font-size:16px;
  margin-top:10px;
`;
const OtpButton=styled.button`
  border: none;
  background-color:#f9f9f9;
  text-decoration:underline;
	font-size:16px;
  margin-top:10px;
`;