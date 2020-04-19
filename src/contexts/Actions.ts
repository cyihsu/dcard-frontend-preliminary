export const scrolledAction = (state: any, hasScrolled: boolean) => {
  return {
    ...state,
    listScrolled: hasScrolled,
  };
};

export const modalAction = (state: any, toggleState: boolean) => {
  return {
    ...state,
    toggleModal: toggleState,
  };
};
