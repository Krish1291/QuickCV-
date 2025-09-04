import "./Register.css"; // same css use kar rahe hai
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(""); // ✅ new field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const handleRegister = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://quickcv-backend-yrh8.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", 
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        console.log(data.message);
        navigate("/login"); 
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="register" data-aos="flip-left">
      <img src="register.png" id="loginImg" alt="Login" data-aos="flip-right" />

      <form onSubmit={handleSubmit} data-aos="zoom-in">
        <h1>Create Account</h1>
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" onClick={handleRegister}>
          Register
        </button>

        <p>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", color: "#4f8ef7" }}
          >
            Sign In
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
