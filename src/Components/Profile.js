import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import "../App.css";
import styled from "styled-components";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import PhoneNumberInput from "./PhoneNumberInput";
import SideNavbar from "./SideNavbar";
// import NavigationBar from './NavigationBar';

const Profile = () => {
  const [toggle, setToggle] = useState(true);
  const mode = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <Wrapper>
      <div className="sidebar_div">
        <SideNavbar />
      </div>

      <div className="page-content">
        {/* <ProfileSetting>Profile Setting</ProfileSetting> */}
        <div className="para_text">
          <p className="para_text">Profile Setting</p>
        </div>

        <SubDiv>
          <h2 className="header-text">Profile Info</h2>
          <Form>
            <LabelInput>
              <Input type="text" placeholder="Denis" />
              <Label for="fname">First name</Label>
            </LabelInput>
            {/* <InputField/> */}
            <LabelInput>
              <Input type="text" placeholder="Richie" />
              <Label for="fname">Last name</Label>
            </LabelInput>
            <div>
              <ProfileImage />
            </div>
            <LabelInput>
              <Input type="text" placeholder="admin" />
              <Label for="fname">Role</Label>
            </LabelInput>
            <LabelInput>
              <Input type="text" placeholder="admin@integreon.com" />
              <Label for="fname">Email Address</Label>
            </LabelInput>
            <LabelInput>
              <SelectInput name="work-location">
                <option value="">select Work-Location</option>
                <option value="">India</option>
                <option value="">England</option>
                <option value="">USA</option>
              </SelectInput>
              <Label for="fname">Work Location </Label>
            </LabelInput>

            <LabelInput>
              <PhoneNumberInput />
              <Label for="fname">Mobile Number</Label>
            </LabelInput>
            <LabelInput>
              <SelectInput name="Time-zone">
                <option value="">select Time-Zone</option>
                <option value="">Asia-kolkata</option>
                <option value="">Asia-kolkata</option>
                <option value="">Asia-kolkata</option>
              </SelectInput>
              <Label for="fname">Time Zone</Label>
              <p style={{ fontSize: "13px", fontWeight: "600" }}>
                Adjust for saving daylight automatically <br />
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={mode}
                >
                  {toggle ? <ToggleOnIcon /> : <ToggleOffIcon />}
                </button>
              </p>
            </LabelInput>
            <div>
              {/* <WorkLabel htmlFor="">Work Hours</WorkLabel> */}
              {/* <StartLable htmlFor="">Start Time</StartLable> */}
              <TimeLabelInput name="Start-Time">
                <option value="">Start time</option>
                <option value="">09:30 AM</option>
                <option value="">10:00 AM</option>
                <option value="">10:30 AM</option>
                {/* <TimeLabel>start time</TimeLabel> */}
              </TimeLabelInput>
              &nbsp;&nbsp;
              {/* <EndLable htmlFor="">End Time</EndLable> */}
              <TimeLabelInput name="End_time">
                <option value="">End time</option>
                <option value="">06:30 PM</option>
                <option value="">07:00 PM</option>
                <option value="">07:30 PM</option>
                {/* <TimeLabel>end time</TimeLabel> */}
              </TimeLabelInput>
            </div>
            {/* 3rd line code */}
            <p></p>
            <p></p>
            <Button>Update</Button>
          </Form>
        </SubDiv>
      </div>
    </Wrapper>
  );
};

export default Profile;
const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;

  .sidebar_div {
    width: 4%;
    height: 90vh;
    background-color: yellow;
  }

  .page-content {
    width: 96%;
    height: 90vh;
    background-color: #f9f8fe;
  }

  .para_div {
    width: 96%;
    height: 5vh;
  }

  .para_text {
    padding: 2px 10px;
  }

  .header-text {
    /* margin: 10px 10px */
  }
`;

const SubDiv = styled.div`
  margin: 0px 20px 10px 20px;
  padding: 0px 80px;
  border-radius: 5px;
  background-color: #ffffff;
  /* background-color: green; */
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 0px;
  align-items: center;
  justify-items: center;
  padding: 40px 0;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  padding: 0 10px;
  border: 1px solid #dedede;
  border-radius: 3px;
`;
const SelectInput = styled.select`
  height: 34px;
  width: 100%;
  border: 1px solid #dedede;
  border-radius: 3px;
  padding: 0 10px;
`;

const LabelInput = styled.div`
  height: 30px;
  width: 260px;
  position: relative;
`;
const Label = styled.label`
  position: absolute;
  left: 10px;
  top: -10px;
  background-color: #ffffff;
  padding: 0 2px;
  z-index: 1;
  color: darkgray;
  font-size:13px;
`;

const Button = styled.button`
  padding: 8px 15px;
  background-color: #89d9d8;
  color: white;
  border: 1px solid #89d9d8;
  border-radius: 5px;
`;

const TimeLabelInput = styled.select`
  height: 32px;
  width: 132px;
  border: 1px solid #dedede;
  border-radius: 3px;
`;

// const TimeLabel = styled.label`
//   position: absolute;
//   left: 0px;
//   top: 12px;
//   background-color: #ffffff;
//   padding: 0, 2px;
//   z-index: 1;
//   color: darkgray;
// `;

// const WorkLabel = styled.label`
//   position: absolute;
//   bottom: 205px;
//   right: 285px;
//   color: darkgray;
// `;

// const StartLable = styled.label`
//   position: absolute;
//   bottom: 176px;
//   right: 295px;
//   color: darkgray;
//   background-color: #ffffff;
// `;
// const EndLable = styled.label`
//   position: absolute;
//   bottom: 176px;
//   right: 160px;
//   color: darkgray;
//   background-color: #ffffff;
// `;
