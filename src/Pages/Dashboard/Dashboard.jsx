import { NavLink, Outlet, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/useAuth";

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
   const { signOutUser } = UseAuth();
   const navigate = useNavigate();
   return (
      <div className="min-h-screen bg-gray-50">
         {/* Sidebar (icons-only on mobile, expanded on md+) */}
         <aside className="fixed inset-y-0 left-0 w-16 md:w-64 bg-white border-r shadow-sm z-20">
            {/* Brand (only show on md+) */}
            <div className="h-16 hidden md:flex items-center justify-center border-b">
               <h2 className="text-xl font-semibold text-gray-700">Admin Panel</h2>
            </div>

            {/* Nav */}
            <nav className="h-full md:h-[calc(100vh-64px)] overflow-y-auto">
               <ul className="py-3 space-y-1">
                  {dashboardLinks.map((link) => (
                     <li key={link.path}>
                        <NavLink
                           to={link.name === "Logout" ? "#" : link.path}
                           title={link.name}            // desktop tooltip
                           aria-label={link.name}       // a11y for icon-only
                           className={({ isActive }) =>
                              `group mx-2 flex items-center gap-3 rounded-lg px-3 py-2 transition-colors
                    ${isActive
                                 ? "bg-orange-100 text-orange-700"
                                 : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"}`
                           }
                        >
                           <span className="text-2xl w-8 text-center">{link.icon}</span>
                           <span className="hidden md:inline truncate" onClick={() => link.name === "Logout" && signOutUser(navigate)}>{link.name}</span>
                        </NavLink>
                     </li>
                  ))}
               </ul>
            </nav>
         </aside>

         {/* Main content (offset by sidebar width) */}
         <main className="pl-16 md:pl-64">
            <div className="p-4 md:p-6">
               <div className="bg-white rounded-xl shadow p-4 md:p-6 min-h-[80vh]">
                  <Outlet />
               </div>
            </div>
         </main>
      </div>
   );
};

export default Dashboard;
