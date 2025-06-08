export const isUserAuthenticated = () => {
  return JSON.parse(localStorage.getItem("isAuthenticated") || "false");
};
