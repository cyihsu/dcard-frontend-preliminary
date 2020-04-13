import React from "react";
import ModalBackground from "./ModalBackground";
import ModalForeground from "./ModalForeground";

export default function () {
  return (
    <React.Fragment>
      <ModalForeground />
      <ModalBackground />
    </React.Fragment>
  );
}
