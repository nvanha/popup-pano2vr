import React from "react";
import { Button } from "react-bootstrap";

const ButtonCustom = ({ children, onClick, type, classCustom }) => {
  return (
    <Button
      className={`btn-custom ${type === "primary" ? "primary" : "secondary"} ${
        classCustom || ""
      }`}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </Button>
  );
};

export default ButtonCustom;
