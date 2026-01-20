// // src/components/Sidebar.jsx
// import { useState } from "react";
// import {
//   FiHome,
//   FiShoppingBag,
//   FiUsers,
//   FiSettings,
//   FiMenu,
//   FiUserCheck,
//   FiShield,
//   FiKey,
//   FiLock,
//   FiStopCircle,
//   FiShoppingCart,
//   FiUser,
//   FiPackage
// } from "react-icons/fi";
// import "./Sidebar.css";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   return (
//     <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       <div className="sidebar-top">
//         <h2 className="logo">{collapsed ? "DB" : "Dashboard"}</h2>
//         <FiMenu
//           className="toggle-btn"
//           onClick={() => setCollapsed(!collapsed)}
//         />
//       </div>

//       <ul className="superadmin">
//         <li className="menu-item active">
//           < FiKey/>
//           <span>Supper Admin</span>
//         </li>
//         </ul>
//         {/* supper admin */}

//         <ul className="admin">
//         <li className="menu-item active">
//           < FiUserCheck/>
//           <span> Admin</span>
//         </li>
//         </ul>

//         {/* admin */}

//         <ul className="shoapdmin">
//         <li className="menu-item active">
//           < FiShoppingBag/>
//           <span>Shoap Admin</span>
//         </li>
//         </ul>
     
// {/* shoap admin */}


//  <ul className="customer">
//         <li className="menu-item active">
//           < FiUsers/>
//           <span>Customers</span>
//         </li>
//      {/* customer */}


// {/*  Guest */}
//  <ul className="guestMode">
//         <li className="menu-item active">
//           < FiUser/>
//           <span>Guest_Login</span>
//         </li>

// </ul>

// {/* Order Manage */}
//          <ul className="ordermanager">
//         <li className="menu-item active">
//           < FiShoppingCart />
//           <span>Order Manager</span>
//         </li>


// </ul>

 
//         <li className="menu-item">
//           <FiSettings />
//           <span>Settings</span>
//         </li>
//       </ul>
//     </aside>
//   );
// }


















import {
  FiKey,
  FiUserCheck,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiShoppingCart,
  FiSettings,
  FiMenu
} from "react-icons/fi";

import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      {/* Hamburger */}
      <div className="hamburger">
        <FiMenu />
      </div>

      <div className="sidebar">
        <h2>
          Welcome to StyleSwap
        </h2>

        <button className="active">
          <FiKey className="icon" /> Supper Admin
        </button>

        <button>
          <FiUserCheck className="icon" /> Admin
        </button>

        <button>
          <FiShoppingBag className="icon" /> Shoap Admin
        </button>

        <button>
          <FiUsers className="icon" /> Customers
        </button>

        <button>
          <FiUser className="icon" /> Guest_Login
        </button>

        <button className="order">
          <FiShoppingCart className="icon" /> Order Manager
        </button>

        {/* SETTINGS ICON ONLY */}
        <div className="settings-icon">
          <FiSettings />
        </div>
      </div>
    </>
  );
}

export default Sidebar;

