import React from "react";
import SideBar from "./SideNavBar";
import UpperBar from "./UpperBar";
import { Flex } from "antd";

const AppLayout = ({ children }) => {
  // Receive children as a prop
  return (
    <>
      <UpperBar />
      
      <SideBar>
        
      </SideBar>
    
      {children} {/* Render children here */}
    </>
  );
};

export default AppLayout;
