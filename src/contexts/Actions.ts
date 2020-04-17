export const scrolledAction = (state: any, hasScrolled: boolean) => {
  return {
    ...state,
    listScrolled: hasScrolled,
  };
};

export const modalAction = (state: any, toggleID: number) => {
  return {
    ...state,
    toggleModal: toggleID !== 0,
    currentPost: toggleID,
  };
};
