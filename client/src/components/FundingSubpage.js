import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  DollarSign,
  LogOut,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

const fundingOpportunities = [
  {
    title: "Startup Seed Grant",
    amount: "$50,000",
    eligibility: "Early-stage startups with MVP",
  },
  {
    title: "Growth Accelerator Fund",
    amount: "$100,000",
    eligibility: "Startups with proven revenue model",
  },
  {
    title: "Innovation Challenge Grant",
    amount: "$75,000",
    eligibility: "Tech-based startups with a unique solution",
  },
];

const FundingSubpage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [eligibility, setEligibility] = useState("");
  const [status, setStatus] = useState("Application Pending");

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

        <div className="mt-8">
          <h2 className={`text-2xl font-bold ${!isSidebarOpen && "hidden"}`}>
            Funding
          </h2>
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
            <button className="flex items-center space-x-2 hover:text-[#C3BABA] transition">
              <LogOut size={20} />
              {isSidebarOpen && <span>Logout</span>}
            </button>
          </nav>
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

        <h1 className="text-3xl font-bold text-[#736F72]">
          Funding Opportunities
        </h1>
        <p className="text-[#9A8F97] mt-2">
          Explore funding options available for your startup.
        </p>

        {/* Funding List */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {fundingOpportunities.map((fund, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-[#736F72]">
                {fund.title}
              </h2>
              <p className="text-[#9A8F97] mt-1">Amount: {fund.amount}</p>
              <p className="text-[#9A8F97]">Eligibility: {fund.eligibility}</p>
              <button className="mt-3 bg-[#C3BABA] text-white px-4 py-2 rounded-md hover:bg-[#9A8F97]">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Eligibility Checker */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#736F72]">
            Check Your Eligibility
          </h2>
          <input
            type="text"
            placeholder="Enter startup stage (e.g., early-stage)"
            className="mt-2 w-full p-2 border rounded"
            onChange={(e) => setEligibility(e.target.value)}
          />
          <p className="mt-2 text-[#9A8F97]">
            {eligibility.toLowerCase().includes("early")
              ? "Eligible for Seed Grant."
              : "Check specific funding criteria above."}
          </p>
        </div>

        {/* Application Progress */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#736F72]">
            Funding Application Status
          </h2>
          <div className="mt-2 flex items-center text-[#9A8F97]">
            <CheckCircle className="text-green-500" />
            <span className="ml-2">{status}</span>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-[#736F72]">FAQs</h2>
          <details className="mt-4 border-b py-2">
            <summary className="flex items-center justify-between text-[#9A8F97] cursor-pointer">
              How long does approval take?
              <ChevronRight className="w-5 h-5" />
            </summary>
            <p className="mt-2 text-[#9A8F97]">
              Usually 4-6 weeks after submission.
            </p>
          </details>
          <details className="mt-4 border-b py-2">
            <summary className="flex items-center justify-between text-[#9A8F97] cursor-pointer">
              Can I apply for multiple funds?
              <ChevronRight className="w-5 h-5" />
            </summary>
            <p className="mt-2 text-[#9A8F97]">
              Yes, but you can only receive one at a time.
            </p>
          </details>
        </div>
      </main>
    </div>
  );
};

export default FundingSubpage;
