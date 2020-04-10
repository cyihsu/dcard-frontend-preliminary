import React from "react";
import DcardLogo from "../../logo.svg";
import useScrollPosition from "../../hooks/useScrollPosition";

function Nav() {
  const [scrollPos] = useScrollPosition();

  return (
    <nav
      style={{
        zIndex: 0,
        backgroundColor: scrollPos > 0 ? "transparent" : "#006AA6",
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
          width: "1100px",
        }}
      >
        <div
          style={{
            height: "100%",
            padding: "1.1rem",
          }}
        >
          <img
            src={DcardLogo}
            style={{
              height: "100%",
              filter:
                scrollPos > 0
                  ? "invert(21%) sepia(68%) saturate(3161%) hue-rotate(185deg) brightness(98%) contrast(102%)"
                  : "invert(100%) sepia(100%) saturate(1%) hue-rotate(352deg) brightness(102%) contrast(102%)",
            }}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
