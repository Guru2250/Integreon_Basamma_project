import React from 'react';
import SideNavbar from './SideNavbar';
import styled from "styled-components";

const Dashboard = () => {
  return (
    <Wrapper>
    <div className="sidebar_div">
      <SideNavbar />
    </div> 
    <div className="page-content">
      <Content>
      <p className='para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Ullam sit praesentium deleniti, optio corrupti odit incidunt quo sint,
        nesciunt reprehenderit, ipsam aspernatur consequatur veniam autem. Totam 
        repellat, quas quis tempore eligendi corporis corrupti modi officiis sit 
        explicabo? Ducimus, dolorum, officiis assumenda corrupti suscipit sint quia
        laudantium cumque accusantium impedit fugiat?
      </p>
      </Content>
    </div>
  </Wrapper>
  )
}

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
`;

const Content = styled.div`
  .para {
    margin: 10px;
    font-size: 15px;
    font-family: sans-serif;
  }
`;

export default Dashboard;