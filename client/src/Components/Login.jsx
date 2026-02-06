import "./Login.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2500, once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log(data.message);
        navigate("/builder");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Network error. Try again.");
    }
  };

  return (
    <div className="login" data-aos="flip-right">
      <img src="login1.png" id="loginImg" alt="Login" data-aos="flip-left" />
      <div className="mainContent">
        <h1 className="sign" data-aos="zoom-in">Sign In</h1>
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
          <button type="submit" id="submit">Sign In</button>
          {error && <p className="error">{error}</p>}
          <p>
            New here?{" "}
            <span onClick={() => navigate("/register")} style={{ cursor: "pointer", color: "#4f8ef7" }}>
              Create an Account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
