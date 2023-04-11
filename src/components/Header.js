import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>The Open News</h1>
        <p>
          Welcome to our news app, where we bring you the latest and most
          important news stories from around the world.
          <br />
          Our mission is to inform, educate and empower our users with the
          latest news and events happening in their communities and around the
          globe. We believe in the power of information to drive change, inspire
          action, and foster understanding.
          <br />
          <br />
        </p>
      </div>
      <div className="header-image">
        <img
          src="https://www.exchange4media.com/news-photo/102109-TVChannels.jpg"
          alt="header"
        />
      </div>
    </header>
  );
};

export default Header;
