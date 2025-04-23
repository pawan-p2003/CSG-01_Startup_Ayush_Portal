import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  DollarSign,
  Briefcase,
  FileText,
  LogOut,
  User,
} from "lucide-react";

const Funding = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

        {/* Sidebar Content */}
        <div className="mt-8 flex flex-col justify-between h-full">
          <nav className="space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <User />
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
            <Link
              to="/fundingsub"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <Briefcase />
              {isSidebarOpen && <span>Funds & Status</span>}
            </Link>
            <Link
              to="/applications"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <FileText />
              {isSidebarOpen && <span>Applications</span>}
            </Link>
          </nav>
          <button className="flex items-center gap-2 text-white hover:text-[#C3BABA] transition mb-6">
            <LogOut size={20} />
            {isSidebarOpen && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden text-[#736F72] text-3xl"
        >
          <Menu />
        </button>

        <div className="bg-[#C3BABA] p-6 rounded-xl shadow-md text-white mt-4">
          <h1 className="text-3xl font-bold">Funding Opportunities</h1>
          <p className="mt-2">
            Explore and apply for funding to grow your startup 🚀
          </p>
        </div>

        {/* Funding Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Seed Funding",
              amount: "$100,000",
              description: "Early-stage funding for startups.",
            },
            {
              title: "Venture Capital",
              amount: "$500,000",
              description: "Series A funding for scaling startups.",
            },
            {
              title: "Government Grants",
              amount: "$50,000",
              description: "Non-equity grants for innovative startups.",
            },
          ].map((fund, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-[#736F72]">
                {fund.title}
              </h3>
              <p className="text-lg text-[#9A8F97] font-bold">{fund.amount}</p>
              <p className="text-sm text-[#736F72] mt-2">{fund.description}</p>
              <button className="mt-4 bg-[#9A8F97] text-white px-4 py-2 rounded-lg hover:bg-[#736F72] transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Funding;
