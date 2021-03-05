import { AUTH_SERVICE } from "../../services/auth/AuthServices";

export const updateState = (data) => (dispatch) => {
  dispatch({ type: "UPDATE", data });
};
export const isLoggedIn = () => async (dispatch) => {
  try {
    const { data } = await AUTH_SERVICE.isLoggedIn();
    if (data?.user) {
      dispatch({ type: "UPDATE", data: { ...data, loggedIn: true } });
    }
  } catch (err) {
    console.error(err);
  }
};
