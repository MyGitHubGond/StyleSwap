
import RoleCard from "../components/RoleCard";

const roles = [
  { title: "Super Admin", path: "/super-admin", icon: "🛡️" },
  { title: "Shop Admin", path: "/shop-admin", icon: "🏬" },
  { title: "Membership Admin", path: "/membership-admin", icon: "🎫" },
  { title: "Order Admin", path: "/order-admin", icon: "📦" },
  { title: "Normal User", path: "/user", icon: "👤" },
  { title: "Guest User", path: "/guest", icon: "🌐" },
  { title: "Settings", path: "/settings", icon: "⚙️" },
];

export default function MainDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      {roles.map((r, index) => (
        <RoleCard key={index} title={r.title} path={r.path} icon={r.icon} />
      ))}
    </div>
  );
}













