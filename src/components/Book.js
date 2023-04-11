import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <article className="article">
      <figure className="article-img">
        <img
          src={book.book_image}
          alt="Ho"
          style={{ width: "200px", maxWidth: "200px" }}
        />
      </figure>
      <div className="article-content">
        <h2 className="article-title article-title--medium">
          <Link to="/news/detail/:id" className="article-link">
            {book.title}
          </Link>
        </h2>
        <div className="article-excerpt">
          <p>{book.description}</p>
        </div>
        <div className="article-author">
          <div className="article-author-img">{book.rank}</div>
          <div className="article-author-info">
            <dl>
              <dt>{book.author}</dt>
              <small>{book.publisher}</small>
            </dl>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Book;
