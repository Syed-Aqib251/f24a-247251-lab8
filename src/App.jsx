
import { useState } from "react";

function BookSlip({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [copies, setCopies] = useState("0");

  function handleAdd() {
    const newBook = {
      title: title,
      price: price,
      copies: Number(copies)
    };

    onAdd(newBook);

    setTitle("");
    setPrice("");
    setCopies("");
  }

  return (
    <div>
      <h2>Book Slip</h2>

      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <label>Price:</label>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <label>Copies:</label>
      <input
        type="text"
        value={copies}
        onChange={(e) => setCopies(e.target.value)}
      />

      <br /><br />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

// Task 7: Book List in a separate function
function BookList({ books }) {
  return (
    <div>
      <h2>Book List</h2>

      {books.map((book, index) => (
        <p key={index}>
          {book.title} {book.price} {book.copies}
        </p>
      ))}
    </div>
  );
}

function App() {
  const [books, setBooks] = useState([]);

  function addBook(newBook) {
    setBooks([...books, newBook]);
  }

  const totalCopies = books.reduce(
    (total, book) => total + book.copies,
    0
  );

  return (
    <div>
      <header style={{
        backgroundColor: "blue",
        color: "white",
        padding: "20px"
      }}>
        <h1>Your Place</h1>
      </header>

      <BookSlip onAdd={addBook} />

      {/* Task 7: Call BookList component */}
      <BookList books={books} />

      <h3>Copies: {totalCopies}</h3>

      <footer>
        <p>Roll No: 247251</p>
      </footer>
    </div>
  );
}

export default App;
