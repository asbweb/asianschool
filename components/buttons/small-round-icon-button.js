import React from "react";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";

export default function SmallRoundIconButton({ children, iconwidth, btnicon }) {
  return (
    <>
      <Button 
        className="small-round-button-container"
      >
        <div className="small-round-button-icon-container shadow">
          <Icon icon={btnicon} width={iconwidth} />
        </div> 
        <h6 className="small-round-button-text">
          {children} 
        </h6>
      </Button>
    </>
  );
}
