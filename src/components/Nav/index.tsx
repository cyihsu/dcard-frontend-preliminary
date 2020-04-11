import React from "react";

import DcardLogo from "../../logo.svg";
import { UIContext } from "../../contexts/UIContext";

function Nav() {
  const { state } = React.useContext(UIContext);
  const validToTransform: boolean =
    window.matchMedia("(min-width: 1000px)").matches && state.listScrolled;
  return (
    <nav
      style={{
        zIndex: 10,
        backgroundColor: validToTransform
          ? "transparent"
          : "var(--dcard-corp-color)",
        height: "64px",
        top: "0",
        width: "100%",
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        transition: "300ms all",
      }}
    >
      <div
        style={{
          width: "var(--global-outer-width)",
        }}
      >
        <img
          src={DcardLogo}
          alt="Dcard"
          style={{
            height: "100%",
            padding: "1.1rem",
            filter: validToTransform
              ? "var(--svg-white)"
              : "var(--svg-colored)",
          }}
        />
      </div>
    </nav>
  );
}

export default Nav;
