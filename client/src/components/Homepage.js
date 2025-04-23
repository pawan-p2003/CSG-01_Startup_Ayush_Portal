import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-[#E9E3E6] text-[#2a198a] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#C3BABA] to-transparent opacity-40"></div>
        <h1 className="text-6xl font-extrabold text-[#736F72] relative z-10">
          Empowering AYUSH Startups
        </h1>
        <p className="mt-6 text-lg text-[#9A8F97] max-w-2xl relative z-10">
          Connect with investors, incubators, and mentors to bring your AYUSH
          startup to life.
        </p>
        <div className="flex space-x-4 mt-8">
          {/* Updated to include Login Button */}
          <Link
            to="/login"
            className="px-8 py-4 bg-[#C3BABA] text-white rounded-full text-lg font-semibold shadow-lg hover:bg-[#B2B2B2] transition-all relative z-10"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#B2B2B2] text-white px-6">
        <h2 className="text-5xl font-semibold text-center">
          Why Join Startup AYUSH?
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Mentorship & Guidance",
              desc: "Get expert insights from experienced mentors in the AYUSH domain.",
            },
            {
              title: "Funding Opportunities",
              desc: "Access grants, investors, and government funding programs.",
            },
            {
              title: "Global Community",
              desc: "Network with startups, investors, and AYUSH experts worldwide.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-[#736F72] rounded-2xl shadow-xl hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-[#E9E3E6]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 text-center bg-[#E9E3E6] px-6">
        <h2 className="text-5xl font-bold text-[#736F72]">
          What Our Community Says
        </h2>
        <div className="mt-12 flex flex-col md:flex-row gap-8 justify-center max-w-5xl mx-auto">
          {[
            "Amazing platform for AYUSH startups!",
            "Helped me connect with great mentors!",
            "Incredible funding opportunities!",
          ].map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg max-w-sm"
            >
              <p className="text-[#9A8F97]">“{quote}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 text-center">
        <h2 className="text-5xl font-bold text-[#736F72]">
          Join the AYUSH Startup Revolution
        </h2>
        <div className="flex space-x-4 mt-8 justify-center">
          <Link
            to="/login"
            className="px-8 py-4 bg-[#9A8F97] text-white rounded-full text-lg font-semibold shadow-lg hover:bg-[#736F72] transition-all"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#736F72] text-white text-center py-8">
        <p>&copy; 2025 Startup AYUSH. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
