import React from "react";

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
  currentForum: string;
}

const initState: UIStates = {
  listScrolled: false,
  toggleModal: false,
  currentForum: "",
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
  if (process.env.NODE_ENV === "development") {
    console.log(action);
  }
  switch (action.type) {
    case "USER_NOT_AT_TOP":
      return {
        ...state,
        listScrolled: true,
      };
    case "USER_AT_TOP":
      return {
        ...state,
        listScrolled: false,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        toggleModal: false,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        toggleModal: true,
      };
    case "SET_CURRENT_FORUM":
      if (action.payload !== undefined) {
        return {
          ...state,
          currentForum: action.payload.value as string,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
