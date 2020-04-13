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
  currentPost: number;
}

const initState: UIStates = {
  listScrolled: false,
  toggleModal: false,
  currentForum: "",
  currentPost: 0,
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
        currentPost: 0,
      };
    case "OPEN_MODAL":
      if (action.payload !== undefined) {
        return {
          ...state,
          toggleModal: true,
          currentPost: parseInt(action.payload.value as string, 10),
        };
      } else {
        return state;
      }
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
