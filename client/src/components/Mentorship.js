import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";

const mentors = [
  {
    name: "Dr. Ayesha Patel",
    expertise: "Business Strategy",
    contact: "ayesha@email.com",
  },
  {
    name: "John Carter",
    expertise: "Marketing & Growth",
    contact: "john@email.com",
  },
  {
    name: "Sophia Lin",
    expertise: "Product Development",
    contact: "sophia@email.com",
  },
  {
    name: "Raj Mehta",
    expertise: "Funding & Investment",
    contact: "raj@email.com",
  },
];

const Mentorship = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            Mentorship
          </h2>
          <nav className="mt-6 flex flex-col space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <User />
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
          </nav>
        </div>
        {/* Logout Button */}
        <button className="absolute bottom-6 left-6 flex items-center gap-2 text-white hover:text-[#C3BABA] transition">
          <LogOut size={20} />
          {isSidebarOpen && <span>Logout</span>}
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

        <h1 className="text-3xl font-bold text-[#736F72]">Find a Mentor</h1>
        <p className="text-[#9A8F97] mt-2">
          Connect with experienced mentors to guide your startup journey.
        </p>

        {/* Search Bar */}
        <div className="mt-6 flex items-center bg-white p-3 rounded-lg shadow-md w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search mentors by name or expertise..."
            className="ml-3 outline-none flex-1 text-[#736F72]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Mentor List */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <User className="text-[#736F72] w-10 h-10" />
                <div>
                  <h2 className="text-xl font-semibold text-[#736F72]">
                    {mentor.name}
                  </h2>
                  <p className="text-[#9A8F97]">{mentor.expertise}</p>
                </div>
              </div>
              <a
                href={`mailto:${mentor.contact}`}
                className="mt-4 flex items-center text-[#C3BABA] hover:text-[#9A8F97] transition"
              >
                Contact Mentor
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mentorship;
