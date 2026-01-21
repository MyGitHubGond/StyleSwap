import { Routes, Route } from "react-router-dom";
import MainDashboard from "./pages/MainDashboard";
import SuperAdminDashboard from "./pages/superAdmin/SuperAdminDashboard";
import ShopDashboard from "./pages/shopAdmin/ShopDashboard";
import MembershipDashboard from "./pages/membershipAdmin/MembershipDashboard";
import OrderDashboard from "./pages/orderAdmin/OrderDashboard";
import UserDashboard from "./pages/user/UserDashboard";
import GuestPage from "./pages/guest/GuestPage";
import SettingsDashboard from "./pages/settings/SettingsDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />
      <Route path="/super-admin" element={<SuperAdminDashboard />} />
      <Route path="/shop-admin" element={<ShopDashboard />} />
      <Route path="/membership-admin" element={<MembershipDashboard />} />
      <Route path="/order-admin" element={<OrderDashboard />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/guest" element={<GuestPage />} />
      <Route path="/settings" element={<SettingsDashboard />} />
    </Routes>
  );
}































