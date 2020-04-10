import React from "react";

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = React.useState(window.pageYOffset);

  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // Avoiding Memory leaks
  return [scrollPos];
};

export default useScrollPosition;
