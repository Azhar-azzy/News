import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Headline from "../../components/Headline";
import Sidebar from "../../components/Sidebar";

const Headlines = () => {
  const [headlines, setHeadlines] = useState(null);

  const fetchHeadlines = async () => {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=AG0YmjIthQ6x99FNvc14CE8KQf6H3jKA",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.results);
      setHeadlines(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeadlines();
  }, []);

  return (
    <main className="responsive-wrapper">
      <Header />
      <div className="page-title">
        <h1>Latest Headlines</h1>
      </div>
      <div className="magazine-layout">
        <div className="magazine-column">
          <div className="main-container">
            {headlines &&
              headlines.map((data) => {
                return <Headline key={data.url} data={data} />;
              })}
          </div>
        </div>
        <div className="magazine-column">
          <Sidebar count="15" />
        </div>
      </div>
    </main>
  );
};

export default Headlines;
