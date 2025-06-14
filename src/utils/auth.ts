export const isUserAuthenticated = () => {
  return JSON.parse(localStorage.getItem("isAuthenticated") || "false");
};

export const actualPrice = (totalPrice: number, discountedPercent: number) => {
  const discountPrice = (discountedPercent / 100) * totalPrice;
  const price = totalPrice - discountPrice;

  return price.toFixed(2);
};
