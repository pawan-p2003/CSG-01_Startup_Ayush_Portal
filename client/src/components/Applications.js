import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  DollarSign,
  LogOut,
  Filter,
  CheckCircle,
  XCircle,
  Clock,
} from "lucide-react";

const applications = [
  { id: 1, title: "Startup Seed Grant", status: "Pending" },
  { id: 2, title: "Growth Accelerator Fund", status: "Approved" },
  { id: 3, title: "Innovation Challenge Grant", status: "Rejected" },
];

const Applications = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filteredApps =
    filter === "All"
      ? applications
      : applications.filter((app) => app.status === filter);

  return (
    <div className="min-h-screen flex bg-[#E9E3E6]">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 bg-[#736F72] text-white p-6 transition-all duration-300 ease-in-out md:relative ${
          isSidebarOpen ? "w-64" : "w-16"
        } ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 right-[-40px] text-white bg-[#736F72] p-2 rounded-full shadow-md md:block hidden"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
        <nav className="mt-6 flex flex-col space-y-4">
          <Link
            to="/dashboard"
            className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
          >
            <User />
            {isSidebarOpen && <span>Dashboard</span>}
          </Link>
          <Link
            to="/funding"
            className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
          >
            <DollarSign />
            {isSidebarOpen && <span>Funding</span>}
          </Link>
        </nav>
        <button className="flex items-center gap-2 text-white hover:text-[#C3BABA] transition absolute bottom-6">
          <LogOut size={20} />
          {isSidebarOpen && <span>Logout</span>}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-[#736F72] text-3xl"
        >
          <Menu />
        </button>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-[#736F72]">
            Funding Applications
          </h1>
          <p className="mt-2 text-[#9A8F97]">
            Track your submitted funding applications and their statuses.
          </p>

          {/* Filter */}
          <div className="mt-4 flex items-center space-x-4">
            <Filter className="text-[#736F72]" />
            {["All", "Pending", "Approved", "Rejected"].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-3 py-1 rounded-lg ${
                  filter === status
                    ? "bg-[#C3BABA] text-white"
                    : "bg-gray-200 text-[#736F72]"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          {/* Applications List */}
          <div className="mt-6 space-y-4">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className="bg-[#E9E3E6] p-4 rounded-lg flex justify-between items-center shadow"
              >
                <h2 className="text-lg font-semibold text-[#736F72]">
                  {app.title}
                </h2>
                <span className="flex items-center gap-2 text-[#9A8F97]">
                  {app.status === "Approved" && (
                    <CheckCircle className="text-green-500" />
                  )}
                  {app.status === "Rejected" && (
                    <XCircle className="text-red-500" />
                  )}
                  {app.status === "Pending" && (
                    <Clock className="text-yellow-500" />
                  )}
                  {app.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Applications;
