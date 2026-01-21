import Sidebar from "../../components/Sidebar";

const menu = [
  "Dashboard",
  "Create Admin",
  "Assign Roles",
  "Shop Admin Control",
  "Membership Control",
  "System Settings",
  "Reports",
];

export default function SuperAdminDashboard() {
  return (
    <div className="flex">
      <Sidebar menu={menu} />

      <div className="p-6 flex-1">
        <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
      </div>
    </div>
  );
}
