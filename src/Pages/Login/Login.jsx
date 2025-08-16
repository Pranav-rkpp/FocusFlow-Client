import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiRequest } from "../../services/api.js";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../../constants/constant.js";

const Login = () => {
  const navigate = useNavigate("");
  const [user, setUser] = useState({ userName: "", password: "" });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest(`${API_BASE_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      // if (!response.ok) throw Error("Please Check the app");
      if (!response) {
        return;
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      toast.success("Successfully Logged In");
      navigate("/dashboard");
    } catch (err) {
      console.error(err.stack);
    }
  };

  return (
    <div className="login">
      <h1 className="login-title">Login</h1>
      <form className="login-form" onSubmit={(e) => handleLoginSubmit(e)}>
        <div className="field">
          <label htmlFor="userName">Username : </label>
          <input
            type="text"
            name="userName"
            placeholder="Enter Username"
            id="userName"
            value={user.userName}
            onChange={(e) => handleUserChange(e)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id="password"
            value={user.password}
            onChange={(e) => handleUserChange(e)}
            required
          />
        </div>
        <input type="submit" className="submit-btn" />
      </form>
      <div className="register-link">
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default Login;
