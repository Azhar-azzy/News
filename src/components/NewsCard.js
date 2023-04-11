import React from "react";
import { Link } from "react-router-dom";
// import "./NewsCard.css";

const NewsCard = ({ data }) => {
  return (
    <article className="article">
      <figure className="article-img">
        <img
          src={
            data?.multimedia?.[2]?.url
              ? data.multimedia[2].url
              : "https://kine-merelbeke.be/wp-content/uploads/2018/03/img-placeholder.jpg"
          }
          alt="Article"
          style={{ width: "300px", maxWidth: "300px" }}
        />
      </figure>
      <div className="article-content">
        <h2 className="article-title article-title--medium">
          <Link to="/news/detail/:id" className="article-link">
            {data.title}
          </Link>
        </h2>
        <div className="article-excerpt">
          <p>{data.abstract}</p>
        </div>
        <div className="article-author">
          <div className="article-author-img">
            <img src={data.thumbnail_standard} alt="author" />
          </div>
          <div className="article-author-info">
            <dl>
              <dt>{data.source}</dt>
              <small>{data.byline}</small>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
