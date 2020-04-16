import React from "react";
export function useKeyPressed(targetKey: string) {
  const [keyPressed, setKeyPressed] = React.useState(false);

  React.useEffect(() => {
    const upHandler = ({ key }: any) => {
      key === targetKey && setKeyPressed(false);
    };

    const downHandler = ({ key }: any) => {
      key === targetKey && setKeyPressed(true);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}
