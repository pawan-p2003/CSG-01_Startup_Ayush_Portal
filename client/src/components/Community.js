import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut, Users } from "lucide-react";

const Community = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy discussion topics (replace with backend data later)
  const discussions = [
    { title: "💬 How to secure funding for a new startup?" },
    { title: "🔍 Best practices for scaling a tech company." },
    { title: "🚀 Networking strategies for early-stage founders." },
    { title: "📈 Market research techniques for entrepreneurs." },
    { title: "🛠️ Tools every startup should use." },
  ];

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
        {/* Toggle Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute top-4 right-[-40px] text-white bg-[#736F72] p-2 rounded-full shadow-md md:block hidden"
        >
          {isSidebarOpen ? <X /> : <Menu />}
        </button>

        {/* Sidebar Content */}
        <div className="mt-8">
          <h2 className={`text-2xl font-bold ${!isSidebarOpen && "hidden"}`}>
            Community
          </h2>
          <nav className="mt-6 flex flex-col space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <Users />
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
          </nav>
          <button className="flex items-center gap-2 text-white hover:text-[#C3BABA] transition mt-4">
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-[#736F72]">
          Community Discussions
        </h1>
        <p className="text-[#9A8F97] mt-2">
          Join discussions, ask questions, and share insights.
        </p>

        {/* Discussion Section */}
        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#736F72]">
            Recent Discussions
          </h2>
          <ul className="mt-4 space-y-3 text-[#9A8F97]">
            {discussions.map((discussion, index) => (
              <li key={index}>{discussion.title}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Community;
