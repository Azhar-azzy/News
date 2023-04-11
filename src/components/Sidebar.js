import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import SideCard from "./SideCard";

const Sidebar = ({ count }) => {
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("reviews"))
  );

  const fetchNews = async () => {
    try {
      // Times Newswire API
      const response = await fetch(
        "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=AG0YmjIthQ6x99FNvc14CE8KQf6H3jKA",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.results);
      localStorage.setItem("reviews", JSON.stringify(data.results));
      setContent(data.results.slice(0, count));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (content) console.log(content);
    else fetchNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="sidebar">
      {Array.isArray(content) &&
        content.map((data) => {
          return <SideCard key={data.headline} data={data} />;
        })}
    </div>
  );
};

export default Sidebar;
