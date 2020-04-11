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
}

const initState: UIStates = {
  listScrolled: false,
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
    default:
      return state;
  }
};
