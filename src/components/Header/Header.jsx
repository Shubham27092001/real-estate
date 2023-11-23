import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header() {
  return (
    <div className="Container">
      <div className="Name">
        <h1>Real Estate</h1>
      </div>

      <form className="form">
        <input type="text" placeholder="Search..." className="search" />
        <button className="button">
          <FaSearch />
        </button>
      </form>
      <div className="AboutSignUpSignIn">
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="/about">
          <ul>About</ul>
        </Link>
        <Link to="/sign-in">
          {" "}
          <ul>SignIn</ul>
        </Link>
      </div>
    </div>
  );
}
