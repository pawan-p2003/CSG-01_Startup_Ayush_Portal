import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  DollarSign,
  Users,
  MessageSquare,
  LogOut,
} from "lucide-react"; // Icons

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#E9E3E6]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 flex flex-col justify-between bg-[#736F72] text-white p-6 transition-all duration-300 ease-in-out md:relative ${
          isSidebarOpen ? "w-64" : "w-16"
        } ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Top Section (Title + Toggle Button) */}
        <div>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-4 right-[-40px] text-white bg-[#736F72] p-2 rounded-full shadow-md md:block hidden"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 text-white text-2xl"
          >
            ✖
          </button>

          {/* Sidebar Content */}
          <h2
            className={`text-2xl font-bold mt-8 ${!isSidebarOpen && "hidden"}`}
          >
            Dashboard
          </h2>
          <nav className="mt-6 flex flex-col space-y-4">
            <Link
              to="/profile"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <User />
              {isSidebarOpen && <span>Profile</span>}
            </Link>
            <Link
              to="/funding"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <DollarSign />
              {isSidebarOpen && <span>Funding</span>}
            </Link>
            <Link
              to="/mentors"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <Users />
              {isSidebarOpen && <span>Mentorship</span>}
            </Link>
            <Link
              to="/community"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <MessageSquare />
              {isSidebarOpen && <span>Community</span>}
            </Link>
          </nav>
        </div>

        {/* Logout Button at Bottom */}
        <button className="flex items-center gap-2 text-white hover:text-[#C3BABA] transition mt-auto">
          <LogOut size={20} />
          {isSidebarOpen && <span>Log Out</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Menu Button (Mobile) */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-[#736F72] text-3xl"
        >
          <Menu />
        </button>

        {/* Welcome Banner */}
        <div className="bg-[#C3BABA] p-6 rounded-xl shadow-md text-white mt-4">
          <h1 className="text-3xl font-bold">Welcome, Founder!</h1>
          <p className="mt-2">Let’s scale your startup 🚀</p>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Funding Raised",
              value: "$50,000",
              color: "bg-[#9A8F97]",
            },
            { title: "Mentors Connected", value: "8", color: "bg-[#B2B2B2]" },
            { title: "Pending Tasks", value: "3", color: "bg-[#736F72]" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl text-white shadow-md ${stat.color}`}
            >
              <h3 className="text-lg">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#736F72]">
            Recent Activity
          </h2>
          <ul className="mt-4 space-y-3 text-[#9A8F97]">
            <li>✅ You received a new funding offer.</li>
            <li>👥 Connected with 2 new mentors.</li>
            <li>📌 Scheduled a pitch event.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
