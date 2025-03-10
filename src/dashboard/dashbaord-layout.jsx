import React from "react";
import { useAuth } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";
import { roleBasedNav } from "../routers/route";
import { Link } from "react-router-dom";
import { 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  Package, 
  CircleDollarSign, 
  Settings, 
  Menu, 
  Bell, 
  Search 
} from "lucide-react";

const DashboardLayout = () => {
  const { user } = useAuth();

  if (!user.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const role = user.role;
  const navItems = roleBasedNav[role]?.navMain || [];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden md:block">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-600">Wear Hue 🌈</h1>
        </div>
        <nav className="mt-4">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.items ? (
                <div className="group">
                  <button className="flex items-center gap-3 px-6 py-3 w-full text-left text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    <item.icon size={20} />
                    <span>{item.title}</span>
                  </button>
                  <div className="hidden group-hover:block pl-8">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.url}
                        className="block py-2 px-4 text-gray-600 hover:text-purple-600"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.url}
                  className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden">
              <Menu size={24} />
            </button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={24} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;