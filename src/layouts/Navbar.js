import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/show-books" className="nav-link">
        My Task
      </Link>
      <Link to="/add-book" className="nav-link">
        Add  Task
      </Link>
      <Link to="/add-book" className="nav-link">
        About 
      </Link>
      <Link to="/add-book" className="nav-link">
       Completed Task 
      </Link>
    </nav>
  );
};

export default Navbar;
