import React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styled from "styled-components";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkIcon from '@mui/icons-material/Work';
import { Link } from "react-router-dom";
// import Navbar from "./NavBar";

const SideNavbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [width, setWidth] = useState("4%");
  const data = [
    {
      name: "Dashbord",
      redirect: "/dashboard",
      icon:<DashboardOutlinedIcon  sx={{ color: "white" }} />
    },
    {
      name: "Team Management",
      redirect: "/teammanagement",
      icon:<WorkIcon sx={{ color: "white" }} />
    },
  ];
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setWidth(collapsed ? "13%" : "4%");
    console.log("collapsed", collapsed);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: width,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            color: "white",
            backgroundColor: "#1c1c24",
            transition: "0.5s",
            width: width,
            boxSizing: "border-box",
            display: "block",
            marginTop: "10vh",
            height: "90vh",
            // overflow: "hidden",
          },
        }}
        variant="persistent"
        anchor="left"
        open={true}
      >
        <List>
          <nav>
            {data.map((res,index) => (
              <Link to={res.redirect} key={res.name}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {res.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={res.name}
                      sx={{
                        color: "white",
                        textDecoration: "none",
                        textDecorationStyle: "none",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </nav>
        </List>

        <DrawerHeader>
          <IconButton onClick={toggleCollapsed}>
            {collapsed ? (
              <KeyboardDoubleArrowRightIcon sx={{ color: "white" }} />
            ) : (
              <KeyboardDoubleArrowLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
      </Drawer>
    </div>
  );
};

export default SideNavbar;

const DrawerHeader = styled.div`
  position: absolute;
  width: fit-content;
  right: 0;
  bottom: 60px;
  background-color: #3a364d;
`;

