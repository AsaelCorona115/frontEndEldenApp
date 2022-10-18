import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //deleting user from local storage
    localStorage.removeItem("tarnished");
    //deleting user from AuthContext
    dispatch({ type: "LOGOUT" });
  };

  return logout;
};
