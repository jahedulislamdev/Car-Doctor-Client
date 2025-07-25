import { NavLink, Outlet } from "react-router-dom";

const dashboardLinks = [
   { name: "Dashboard", path: "/dashboard", icon: "🏠" },
   { name: "Orders", path: "/dashboard/orders", icon: "🛒" },
   { name: "Services", path: "/dashboard/services", icon: "🛠️" },
   { name: "Add Service", path: "/dashboard/add-services", icon: "➕" },
   { name: "Users", path: "/dashboard/users", icon: "👥" },
   { name: "Reviews", path: "/dashboard/reviews", icon: "⭐" },
   { name: "Payments", path: "/dashboard/payments", icon: "💳" },
   { name: "Reports", path: "/dashboard/reports", icon: "📊" },
   { name: "Messages", path: "/dashboard/messages", icon: "💬" },
   { name: "Settings", path: "/dashboard/settings", icon: "⚙️" },
   { name: "Notifications", path: "/dashboard/notifications", icon: "🔔" },
   { name: "Categories", path: "/dashboard/categories", icon: "📂" },
   { name: "Add Admin", path: "/dashboard/add-admin", icon: "🧑‍💼" },
   { name: "Support Tickets", path: "/dashboard/tickets", icon: "🎫" },
   { name: "Logout", path: "/logout", icon: "🚪" },
];

const Dashboard = () => {
   return (
      <div className="min-h-screen flex bg-gray-50 py-2">
         {/* Sidebar */}
         <aside className=" bg-white text-black shadow-lg md:p-4 space-y-2 max-h-[105vh] scrollbar-none overflow-auto rounded-b-lg">
            <ul className="menu space-y-1">
               {dashboardLinks.map((link, index) => (
                  <li key={index}>
                     <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                           `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${isActive
                              ? "bg-orange-100 text-black"
                              : "hover:bg-orange-50"
                           }`
                        }
                     >
                        <span className="text-lg">{link.icon}</span>
                        <span className="hidden md:inline">{link.name}</span>
                     </NavLink>
                  </li>
               ))}
            </ul>
         </aside>

         {/* Main Content */}
         <main className="flex-1 px-3">
            <div className="bg-white rounded-lg shadow p-4 min-h-[80vh]">
               <Outlet />
            </div>
         </main>
      </div>
   );
};

export default Dashboard;
