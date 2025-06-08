import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/Shop/ShopPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Layout from "../components/common/Layout";
import LoginPage from "../pages/Login/LoginPage";
import AccountPage from "../pages/Account/AccountPage";
import { isUserAuthenticated } from "../utils/auth";

const PrivateRoutes = () => {
  return isUserAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

const PublicRoutes = () => {
  return isUserAuthenticated() ? <Navigate to="/" /> : <Outlet />;
};

const Allroutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:slug" element={<ProductDetail />} />
            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/account" element={<AccountPage />} />
            </Route>
            <Route path="/*" element={<p> Page not found </p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Allroutes;
