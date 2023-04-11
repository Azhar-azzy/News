import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

// $(".menu-toggle").click(function () {
//   $(".nav").toggleClass("mobile-nav");
//   $(this).toggleClass("is-active");
// });

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);
  const search = function () {
    setSearchActive((status) => !status);
    // $(".nav").toggleClass("search");
    // $(".nav").toggleClass("no-search"));
    // $(".search-input").toggleClass("search-active");
  };

  return (
    <div className="navigation-bar">
      <div className="page-wrapper">
        <div className="nav-wrapper">
          <nav className="navbar">
            <img
              src="https://opennews.org/media/img/open-news-2017.png"
              alt="Company Logo"
            />
            <div className="menu-toggle" id="mobile-menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className={`nav ${searchActive ? "search" : "no-search"}`}>
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/headlines">Headlines</Link>
              </li>
              <li className="nav-item">
                <Link to="/books">Books</Link>
              </li>
              <li className="nav-item">
                <Link to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link to="/world">World</Link>
              </li>
              <img
                src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-5.png"
                alt="search"
                className="fas fa-search"
                id="search-icon"
                onClick={search}
              />

              <input
                className={`search-input ${
                  searchActive ? "search-active" : ""
                }`}
                type="text"
                placeholder="Search.."
              />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
