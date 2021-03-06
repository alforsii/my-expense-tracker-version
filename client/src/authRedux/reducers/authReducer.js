const initialState = {
  user: null,
  loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE":
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};
