import React from "react";
import Loader from "../Loader";
import { ModalInner } from "./ModalStyles";

const ModalLoader = () => (
  <ModalInner>
    <Loader height={120} />
  </ModalInner>
);

export default ModalLoader;
