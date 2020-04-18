import React from "react";
import Loader from "../Loader";
import { ModalInner } from "./ModalStyles";

const ModalLoader = () => (
  <ModalInner>
    <div style={{ padding: "2rem" }}>
      <Loader height={120} />
    </div>
  </ModalInner>
);

export default ModalLoader;
