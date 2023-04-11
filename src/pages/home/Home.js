import React, { useEffect, useState } from "react";
import NewsCard from "../../components/NewsCard";
import "./main.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  const [content, setContent] = useState(null);

  const fetchNews = async () => {
    try {
      // Times Newswire API
      const response = await fetch(
        "https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=AG0YmjIthQ6x99FNvc14CE8KQf6H3jKA",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.results);
      setContent(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <main className="responsive-wrapper">
      <Header />
      <div className="page-title">
        <h1>Times Newswire</h1>
      </div>
      <div className="magazine-layout">
        <div className="magazine-column">
          <div className="main-container">
            {content &&
              content.map((data) => {
                return <NewsCard key={data.url} data={data} />;
              })}
          </div>
        </div>
        <div className="magazine-column">
          <Sidebar count="12" />
        </div>
      </div>
    </main>
  );
};

export default Home;
//
// "homepage": "https://azhar-azzy.github.io/News",
