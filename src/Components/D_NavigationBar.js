import React from 'react';
import styled from 'styled-components';
import { Link,BrowserRouter } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Dashboard from './Dashboard';

const NavigationBar = () => {
  return (
    <nav >
    <LogoDiv>
        
        <BrowserRouter>
        <Link to="/profile"><ProfileIcon/></Link>
        <Link to="/notification"><Notification/></Link>
        </BrowserRouter>
        
        <Logo src="./Images/logo.png" alt="" />
    </LogoDiv>
    </nav>
  )
}

export default NavigationBar;

const LogoDiv=styled.div`
  background-color: #282f36d8;
  height: 10vh;
  width: 100%;
  display: flex;
  /* background-color:red; */
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
