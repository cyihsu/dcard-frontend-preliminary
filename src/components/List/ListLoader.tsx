import React from "react";
import {
  ListElementWrapperStyle,
  ListElementInnerStyle,
} from "./ListElementStyles";
import Loader from "../Loader";

const ListLoader = () => (
  <ListElementWrapperStyle>
    <ListElementInnerStyle>
      <Loader height={83} />
    </ListElementInnerStyle>
  </ListElementWrapperStyle>
);

export default ListLoader;
