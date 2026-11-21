
import { useState } from "react";
import "./App.css";

function BookSlip({ onAdd, message, setMessage }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [copies, setCopies] = useState("0");

  function handleAdd() {
    if (copies.trim() === "") {
      setMessage("Please enter the number of copies.");
      return;
    }

    const newBook = {
      title,
      price,
      copies: Number(copies)
    };

    onAdd(newBook);

    setTitle("");
    setPrice("");
    setCopies("");
    setMessage("");
  }

  return (
    <section className="card form-card">
      <div className="card-heading">
        <div>
          <h2>Add New Book</h2>
          <p>Enter the details of your book below.</p>
        </div>
        <span className="heading-icon">＋</span>
      </div>

      <div className="form-group">
        <label htmlFor="book-title">Book Title</label>
        <input
          id="book-title"
          type="text"
          placeholder="e.g. The Great Gatsby"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book-price">Book Price</label>
        <input
          id="book-price"
          type="number"
          placeholder="Enter book price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="book-copies">Number of Copies</label>
        <input
          id="book-copies"
          type="number"
          min="0"
          placeholder="Enter number of copies"
          value={copies}
          onChange={(e) => setCopies(e.target.value)}
        />
      </div>

      <button className="add-button" onClick={handleAdd}>
        <span>＋</span> Add Book
      </button>

      {message && <p className="error-message">{message}</p>}
    </section>
  );
}

function BookList({ books }) {
  return (
    <section className="card list-card">
      <div className="card-heading">
        <div>
          <h2>Book Collection</h2>
          <p>Manage and view your added books.</p>
        </div>
        <span className="heading-icon">▤</span>
      </div>

      {books.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">▤</div>
          <h3>No books added yet</h3>
          <p>Your books will appear here after you add them.</p>
        </div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Book Title</th>
                <th>Price</th>
                <th>Copies</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="book-title">{book.title || "Untitled"}</td>
                  <td>{book.price}</td>
                  <td>
                    <span className="copies-badge">
                      {book.copies}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function App() {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState("");

  function addBook(newBook) {
    setBooks([...books, newBook]);
  }

  const totalCopies = books.reduce(
    (total, book) => total + book.copies,
    0
  );

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-icon">B</div>
            <div>
              <h1>Your Place</h1>
              <p>BOOK MANAGEMENT SYSTEM</p>
            </div>
          </div>

          <span className="header-tag">BOOK SLIP</span>
        </div>
      </header>

      <main className="main-content">
        <section className="welcome-section">
          <div>
            <p className="eyebrow">YOUR PERSONAL LIBRARY</p>
            <h2>Welcome to Your Library!</h2>
            <p className="welcome-description">
              Organize your collection and keep track of your books.
            </p>
          </div>
        </section>

        <section className="dashboard">
          <div className="stat-card">
            <div className="stat-icon blue-icon">▤</div>
            <div>
              <p>Total Books</p>
              <h2>{books.length}</h2>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple-icon">▣</div>
            <div>
              <p>Total Copies</p>
              <h2>{totalCopies}</h2>
            </div>
          </div>
        </section>

        <div className="content-grid">
          <BookSlip
            onAdd={addBook}
            message={message}
            setMessage={setMessage}
          />

          <BookList books={books} />
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 Your Place. All rights reserved.</p>
        <p>Roll No: 247251</p>
      </footer>
    </div>
  );
}

export default App;
