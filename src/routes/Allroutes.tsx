import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Layout from "../components/common/Layout";
import AccountPage from "../pages/Accounts/AccountPage";

const Allroutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/*" element={<p> Page not found </p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Allroutes;
