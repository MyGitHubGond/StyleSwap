



import { useState } from "react";

export default function Sidebar({ menu }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="md:hidden p-3" onClick={() => setOpen(!open)}>
        ☰
      </button>

      <div className={`bg-gray-800 text-white p-4 h-full fixed md:static 
            top-0 left-0 transition-all duration-300
            ${open ? "w-56" : "w-0 md:w-56"} overflow-hidden`}
      >
        <ul>
          {menu.map((m, i) => (
            <li key={i} className="mb-3 hover:text-yellow-300 cursor-pointer">
              {m}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
















