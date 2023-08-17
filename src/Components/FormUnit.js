import React from "react";
import styled from "styled-components";

const FormUnit = ({LoginSubmit, passwordChange,emailChange}) => {
 
  
  return (
    <FormDiv>
      <StyledForm>
        <FormLegend>Hello,WelCome</FormLegend>
        <Input type="email" name="email" placeholder="Enter Email" onChange={(e)=>{emailChange(e)}}/>
        <Input type="password" name="password" placeholder="Enter Password"  onChange={(e)=>{passwordChange(e)}} />
        <Button onClick={()=>LoginSubmit()}>Login</Button>
      </StyledForm>
    </FormDiv>
  );
};

export default FormUnit;


const FormLegend = styled.legend`
  text-align: left;
  width: fit-content;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 20px;
`;

const FormDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 45px 10px;
  margin: 10px !important;
  background-color: #f9f9f9;
`;
const Input = styled.input`
  box-sizing: border-box;
  height: 45px;
  padding: 15px;
  border: 1px solid #757575;
  border-radius: 5px;
  margin-bottom: 30px;
`;
const Button = styled.button`
  box-sizing: border-box;
  color: white;
  height: 45px;
  padding: 15px;
  border: 1px solid #757575;
  border-radius: 5px;
  background-color: #b42597;
`;
