import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Key, LogOut } from "lucide-react";

const Profilepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Passionate entrepreneur looking to scale innovative ideas.",
    profilePic: "https://via.placeholder.com/100",
  });

  const [tempProfileData, setTempProfileData] = useState(profileData);

  const handleSave = () => {
    setIsModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  const confirmChanges = () => {
    setProfileData(tempProfileData);
    setIsConfirmModalOpen(false);
  };

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [passwordData, setPasswordData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handlePasswordChange = () => {
    if (!passwordData.newPassword || !passwordData.confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    setIsPasswordModalOpen(false);
    setIsSuccessModalOpen(true);
  };

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
            Profile
          </h2>
          <nav className="mt-6 flex flex-col space-y-4">
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <User />
              {isSidebarOpen && <span>Dashboard</span>}
            </Link>
            <button
              onClick={() => setIsPasswordModalOpen(true)}
              className="flex items-center space-x-2 hover:text-[#C3BABA] transition"
            >
              <Key />
              {isSidebarOpen && <span>Change Password</span>}
            </button>
          </nav>
          <button className="flex items-center gap-2 text-white hover:text-[#C3BABA] transition absolute bottom-6">
            <LogOut size={20} />
            {isSidebarOpen && <span>Logout</span>}
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
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h1 className="text-3xl font-bold text-[#736F72]">Profile</h1>
          <div className="mt-4 flex flex-col items-center">
            <img
              src={profileData.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-[#C3BABA]"
            />
            <h2 className="text-xl font-semibold mt-2">{profileData.name}</h2>
            <p className="text-[#9A8F97]">{profileData.email}</p>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#736F72]">About</h3>
            <p className="text-[#9A8F97] mt-2">{profileData.bio}</p>
          </div>
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#C3BABA] text-white px-4 py-2 rounded-md hover:bg-[#9A8F97]"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </main>
      {/* Change Password Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-[#736F72]">
              Change Password
            </h2>
            <div className="mt-4">
              <label className="block text-[#736F72]">New Password</label>
              <input
                type="password"
                className="mt-2 w-full border p-2 rounded"
                value={passwordData.newPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    newPassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <label className="block text-[#736F72]">
                Re-enter New Password
              </label>
              <input
                type="password"
                className="mt-2 w-full border p-2 rounded"
                value={passwordData.confirmPassword}
                onChange={(e) =>
                  setPasswordData({
                    ...passwordData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="mt-6 flex space-x-4">
              <button
                onClick={handlePasswordChange}
                className="bg-[#C3BABA] text-white px-4 py-2 rounded-md hover:bg-[#9A8F97]"
              >
                Submit
              </button>
              <button
                onClick={() => setIsPasswordModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Success Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-[#736F72]">Success</h2>
            <p className="mt-4 text-[#736F72]">
              Password changed successfully!
            </p>
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsSuccessModalOpen(false)}
                className="bg-[#C3BABA] text-white px-4 py-2 rounded-md hover:bg-[#9A8F97]"
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold text-[#736F72]">Edit Profile</h2>
            <div className="mt-4">
              <label className="block text-[#736F72]">Profile Picture</label>
              <input
                type="file"
                className="mt-2 w-full border p-2 rounded"
                onChange={(e) =>
                  setTempProfileData({
                    ...tempProfileData,
                    profilePic: URL.createObjectURL(e.target.files[0]),
                  })
                }
              />
            </div>
            <div className="mt-4">
              <label className="block text-[#736F72]">Name</label>
              <input
                type="text"
                className="mt-2 w-full border p-2 rounded"
                value={tempProfileData.name}
                onChange={(e) =>
                  setTempProfileData({
                    ...tempProfileData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <label className="block text-[#736F72]">Email</label>
              <input
                type="email"
                className="mt-2 w-full border p-2 rounded"
                value={tempProfileData.email}
                onChange={(e) =>
                  setTempProfileData({
                    ...tempProfileData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-4">
              <label className="block text-[#736F72]">Bio</label>
              <textarea
                className="mt-2 w-full border p-2 rounded"
                value={tempProfileData.bio}
                onChange={(e) =>
                  setTempProfileData({
                    ...tempProfileData,
                    bio: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-6 flex space-x-4">
              <button
                onClick={handleSave}
                className="bg-[#C3BABA] text-white px-4 py-2 rounded-md hover:bg-[#9A8F97]"
              >
                Save
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <p className="text-lg text-[#736F72]">
              Are you sure you want to save these changes?
            </p>
            <div className="mt-6 flex space-x-4 justify-center">
              <button
                onClick={confirmChanges}
                className="bg-[#C3BABA] text-white px-4 py-2 rounded-md hover:bg-[#9A8F97]"
              >
                Yes
              </button>
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profilepage;
