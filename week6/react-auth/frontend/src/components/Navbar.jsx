import { Link } from "react-router-dom";

function Navbar({ setIsAuthenticated, isAuthenticated }) {
  const handleClick = () => {
    // remove user from storage
    localStorage.removeItem("user");
    setIsAuthenticated(false);
  };

  return (
    <nav>
      {isAuthenticated && (
        <div>
          <Link to="/">Home</Link>
          <span>Welcome, {JSON.parse(localStorage.getItem("user"))?.email}</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

