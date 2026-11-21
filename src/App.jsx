
import { useState } from "react";

function BookSlip() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [copies,setCopies] = useState(0);

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

      <button>Add</button>

    </div>
  );
}

function App() {
  return (
    <div>

      <header style={{
        backgroundColor: "blue",
        color: "white",
        padding: "20px"
      }}>
        <h1>Your Place</h1>
      </header>

      <BookSlip />

      <div>
        <h2>Book List</h2>
      </div>

      <div>
        <h3>Copies: 0</h3>
      </div>

      <footer>
        <p>Roll No: 247251</p>
      </footer>

    </div>
  );
}

export default App;
