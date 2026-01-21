import { Link } from "react-router-dom";

export default function RoleCard({ title, path, icon }) {
  return (
    <Link to={path}>
      <div className="p-6 rounded-xl shadow-lg bg-white hover:bg-blue-100 cursor-pointer text-center transition">
        <div className="text-5xl mb-3">{icon}</div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}











