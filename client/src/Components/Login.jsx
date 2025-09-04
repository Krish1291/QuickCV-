import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: true,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://quickcv-backend-yrh8.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // ✅ cookie send/receive
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log(data.message);
        navigate("/builder"); // ✅ redirect to ResumeBuilder
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="login" data-aos="flip-right">
     
        <img src="login1.png" id="loginImg" alt="Login" data-aos="flip-left" />
      
      <div className="mainContent">
        <h1 className="sign" data-aos="zoom-in">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" id="submit">
            Sign In
          </button>
          <br />
          <p>
            New here?{" "}
            <span>
              <a
                onClick={() => navigate("/register")}
                style={{ cursor: "pointer" }}
              >
                Create an Account
              </a>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
