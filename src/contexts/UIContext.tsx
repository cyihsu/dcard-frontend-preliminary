import React from "react";
import { scrolledAction, modalAction } from "./Actions";

interface UIActions {
  type: string;
  payload?: {
    attr: string;
    value: number | string;
  };
}

interface UIStates {
  listScrolled: boolean;
  toggleModal: boolean;
}

const initState: UIStates = {
  listScrolled: false,
  toggleModal: false,
};

export const UIContext = React.createContext<{
  state: UIStates;
  dispatch: React.Dispatch<UIActions>;
}>({
  state: initState,
  dispatch: () => {},
});

export const UIContextProvider: React.FC = (Props) => {
  const [state, dispatch] = React.useReducer(UIReducer, initState);
  return (
    <UIContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {Props.children}
    </UIContext.Provider>
  );
};

const UIReducer: React.Reducer<UIStates, UIActions> = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "USER_NOT_AT_TOP":
      return scrolledAction(state, true);
    case "USER_AT_TOP":
      return scrolledAction(state, false);
    case "CLOSE_MODAL":
      return modalAction(state, false);
    case "OPEN_MODAL":
      return modalAction(state, true);
    default:
      return state;
  }
};
