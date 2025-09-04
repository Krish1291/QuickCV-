import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/login");
  };

  return (
    <div className=" font-bold text-center min-h-screen bg-cover bg-center px-6 py-20 flex flex-col justify-center items-center">
      <p className="text-6xl md:text-7xl text-blue-600 mb-8 animate-fade-in-down">
        Create Your Resume in Just a Few Clicks
      </p>

      <p className="text-xl md:text-2xl text-gray-700 mb-12 animate-fade-in">
        Build, customize, and preview your resume effortlessly — all in one
        place
      </p>

      <button
        onClick={handleGetStarted}
        className="font-bold bg-blue-600 p-4 text-white rounded hover:bg-blue-700 transition animate-bounce pl-10 pr-10"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
