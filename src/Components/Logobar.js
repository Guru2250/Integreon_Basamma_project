import React from 'react';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Logobar = ({visible}) => {
  return (
    <nav >
    <LogoDiv>
        {visible && <> <Notification/> <div><ProfileIcon/></div> </> }
        <Logo src="./Images/logo.png" alt="" /> 
    </LogoDiv>
    </nav>
  )
}

export default Logobar;

const LogoDiv=styled.div`
  background-color: #282f36;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Logo=styled.img`
  height: 39.65px;
  width: 130px;
  object-fit: contain;
  width: fit-content;
  display: block;
  padding-left: 10vw;
`;

const ProfileIcon=styled(AccountCircleIcon)`
position:absolute;
color: white;
top:20px;
right:30px;

`;
const Notification=styled(NotificationsIcon)`
position:absolute;
color: white;
top:20px;
right:70px;
`
