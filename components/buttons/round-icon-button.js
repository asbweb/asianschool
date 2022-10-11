import React from "react";
import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react";

export default function RoundIconButton({ text, children, iconwidth, btnicon }) {
  return (
    <>
      <Button 
        className="round-button-container"
      >
        <div className="round-button-icon-container shadow">
          <Icon icon={btnicon} width={iconwidth} />
        </div>
        <h4 className="round-button-text">
          {children} {text}
        </h4>
      </Button>
    </>
  );
}
