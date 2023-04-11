import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Book from "../../components/Book";
import Sidebar from "../../components/Sidebar";

const Books = () => {
  const [books, setBooks] = useState(null);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AG0YmjIthQ6x99FNvc14CE8KQf6H3jKA",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      console.log(data.results.books);
      setBooks(data.results.books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="responsive-wrapper">
      <Header />
      <div className="page-title">
        <h1>Latest Books</h1>
      </div>
      <div className="magazine-layout">
        <div className="magazine-column">
          <div className="main-container">
            {books &&
              books.map((book) => {
                return <Book key={book.rank} book={book} />;
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

export default Books;
