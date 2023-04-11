import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";
import Sidebar from "../../components/Sidebar";

const Business = () => {
  const [content, setContent] = useState(null);

  const fetchNews = async () => {
    try {
      // Times Newswire API : Business
      const response = await fetch(
        "https://api.nytimes.com/svc/news/v3/content/all/business.json?api-key=AG0YmjIthQ6x99FNvc14CE8KQf6H3jKA",
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
        <h1>Times Newswire Business</h1>
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

export default Business;
