const initialState = {
  user: null,
  loggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  console.log(
    "🚀 ~ file: authReducer.js ~ line 8 ~ authReducer ~ action.type",
    action.type
  );
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
