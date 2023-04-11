import React from "react";
import { Link } from "react-router-dom";

const SideCard = ({ data }) => {
  return (
    <article className="article">
      <h2 className="article-title article-title--medium">
        <Link to="/" className="article-link">
          {data.display_title}
        </Link>
      </h2>
      <div className="article-excerpt">
        <img src={data?.multimedia?.src} alt="media" />
        <p>{data?.summary_short}</p>
        <div
          style={{ textAlign: "right", fontSize: "14px", marginTop: "-1rem" }}
        >
          <small>
            <b>{data?.byline}</b>
          </small>
          <br />
          <small>{data?.publication_date}</small>
        </div>
      </div>
    </article>
  );
};

export default SideCard;
