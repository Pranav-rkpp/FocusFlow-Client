import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear token
    toast.success("Successfully Logged Out");
    navigate("/"); // redirect to login
  };

  const { title } = props;
  return (
    <>
      {/* Logout button */}
      <div className="logout-btn">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <header className="header">
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default Header;
