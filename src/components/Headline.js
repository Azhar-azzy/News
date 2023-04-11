import React from "react";
import { Link } from "react-router-dom";

const Headline = ({ data }) => {
  return (
    <article className="article">
      <figure className="article-img">
        <img
          src={data.multimedia[0].url}
          alt="Ho"
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
            {data.section[0].toUpperCase()}
          </div>
          <div className="article-author-info">
            <dl>
              <dt>
                {data.section + " "}
                <small>{data.subsection}</small>
              </dt>
              <small>{data.byline}</small>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Headline;
