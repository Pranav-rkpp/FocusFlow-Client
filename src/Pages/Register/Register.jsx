import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiRequest } from "../../services/api";
import { API_BASE_URL } from "../../constants/constant";

export const Register = () => {
  const navigate = useNavigate("");
  const [user, setUser] = useState({ userName: "", password: "" });

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      //   if (!response.ok) throw Error("Please Check the app");
      if (!response) {
        return;
      }
      toast.success("Successfully Registered");
      navigate("/");
    } catch (err) {
      console.err(err.stack);
    }
  };

  return (
    <div className="register">
      <h1 className="register-title">Register</h1>
      <form className="register-form" onSubmit={(e) => handleRegisterSubmit(e)}>
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
      <div className="login-link">
        <Link to="/">Login</Link>
      </div>
    </div>
  );
};
