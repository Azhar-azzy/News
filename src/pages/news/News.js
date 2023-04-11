import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="news-page">
      <article className="article">
        <figure className="article-img">
          <img
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="News"
          />
        </figure>
        <div className="article-content">
          <h2 className="article-title article-title--medium">
            <Link to="/news/detail/:id" className="article-link">
              How 7 Lines of Code Turned Into a $36 Billion Empire
            </Link>
          </h2>
          <div className="article-excerpt">
            <p>
              Yeah, it's safe to say these guys have a great sense of humor,
              which isn't really suprising for us considering their seemingly
              absurd solution to online payments. Instead of chasing 1000-hour
              programming contracts to build clunky payments solutions for each
              individual client, the Collison...
            </p>
          </div>
          <div className="article-author">
            <div className="article-author-img">
              <img
                src="https://assets.codepen.io/285131/author-2.png"
                alt="author"
              />
            </div>
            <div className="article-author-info">
              <dl>
                <dt>James Robert</dt>
                <dd>Editor</dd>
              </dl>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default News;
