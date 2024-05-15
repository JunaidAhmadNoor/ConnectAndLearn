import React from "react";
import TutorSideBar from "./TutorSideBar";
import TutorUpperBar from "./TutorUpperBar";

const TutorAppLayout = ({ children }) => {
  // Receive children as a prop
  return (
    <>
      <TutorUpperBar />
      
      <TutorSideBar>
        
      </TutorSideBar>
    
      {children} {/* Render children here */}
    </>
  );
};

export default TutorAppLayout;
