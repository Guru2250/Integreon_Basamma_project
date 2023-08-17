import React from 'react';
import styled from "styled-components";
import WestIcon from '@mui/icons-material/West';
import OtpInput from 'react-otp-input';

const ValidatingOtp = ({otpValidate, otpHandle , otp}) => {
// const[otp,setOtp]=useState('')
const Style = {
    height:"40px",
    width:"35px",
    padding:"25px",
    margin:"30px 10px 30px 20px",
    borderradius:"5px",
    fontSize: "25px"
}
  
  return (
    <MainDiv>
        <Title>Enter OTP</Title>
        <Paragraph>A 5-Digit code has been sent to <span style={{color:"#b42597"}}>richard@integreon.com</span></Paragraph>
        {/* <Input type="text" name='id1' pattern='0-9' maxLength={1} onChange={(e)=>{otpHandle(e)}} />
        <Input type="text" name='id2' pattern='0-9' maxLength={1} onChange={(e)=>{otpHandle(e)}} />
        <Input type="text" name='id3' pattern='0-9' maxLength={1} onChange={(e)=>{otpHandle(e)}} />
        <Input type="text" name='id4' pattern='0-9' maxLength={1} onChange={(e)=>{otpHandle(e)}} />
        <Input type="text" name='id5' pattern='0-9' maxLength={1} onChange={(e)=>{otpHandle(e)}} /><br /> */}
        <OtpInput
      value={otp}
      onChange={(event)=>{otpHandle(event)}}
      numInputs={5}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
      inputStyle={Style}
      
    />
      
    
        <Button onClick={()=>otpValidate()}>Verify & Login</Button><br />
        <BackButton><WestIcon  style={{fontSize:"medium"}}/>Go back</BackButton>
        <OtpButton>Resend OTP</OtpButton>
    </MainDiv>
  )
}

export default ValidatingOtp;

const MainDiv=styled.div`
	margin-top:100px;
  background-color:#f7f7f7;
  margin-right:50px;
	padding: 30px;
	width: 75%;
`;

const Title=styled.h1`
	margin-right:275px;
`;

// const Input=styled.input`
//   height:30px;
//   width:30px;
//   margin:20px;
//   padding: 10px;
//   border: 1px solid #757575;
//   border-radius: 5px;
//   font-size: 25px;
//   text-align:center;
// `;

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
