/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import DcardLogo from "../../assets/logo.svg";
import { UIContext } from "../../contexts/UIContext";
import { NavWrapper, NavInnerWrapper } from "./NavStyles";

function Nav() {
  const { state, dispatch } = React.useContext(UIContext);
  return (
    <nav css={NavWrapper(state.listScrolled || state.toggleModal)}>
      <div css={NavInnerWrapper}>
        <div style={{ height: "100%" }}>
          <img
            src={DcardLogo}
            alt="Dcard"
            onClick={() => {
              dispatch({
                type: "SET_CURRENT_FORUM",
                payload: { attr: "forum", value: "" },
              });
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
