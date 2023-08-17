import React, { useState } from "react";
import { styled } from "styled-components";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import Profileimg from './Images/profileIcon.png'

function ProfileImage() {
  const [imageSrc, setImageSrc] = useState(Profileimg);
  const imageHandler = (e) => {
    if (e.target.files) {
      const imageUrl = URL.createObjectURL(e.target.files[0]);
      setImageSrc(imageUrl);
    }
  };

  return (
    <MainDiv>
      <ImageDiv>
        <StyledImage src={imageSrc} />
        <SubDiv>
          <Upload
            type="file"
            onChange={(e) => {
              imageHandler(e);
            }}
            accept="image/png, image/jpeg"
          />
          <StyledIcon fontSize="15px" />
        </SubDiv>
      </ImageDiv>
    </MainDiv>
  );
}

export default ProfileImage;
const MainDiv = styled.div`
  display: flex;
  height: fit-content;
  justify-content: center;
`;
const ImageDiv = styled.div`
  width: fit-content;
  height: 100px;
  border-radius: 100%;
  overflow: hidden;
`;
const StyledImage = styled.img`
  position: relative;
  height: 100px;
  width: 100px;
  bottom: 0;
`;
const SubDiv = styled.div`
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(10px, -40px);
`;
const Upload = styled.input`
  position: relative;
  width: 25px;
  height: 25px;
  left: 20px;
  top: 5px;
  z-index: 2;
  border-radius: 100%;
  opacity: 0;
`;
const StyledIcon = styled(CameraAltOutlinedIcon)`
  position: absolute;
  padding: 3px;
  color: #a0a2a5;
  border-radius: 100%;
  background-color: white;
  transform: translate(18px,-0px);
`;
