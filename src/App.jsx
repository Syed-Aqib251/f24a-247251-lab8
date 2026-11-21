import { useState } from "react";

function BookSlip(){
  const[title,setTitle]=useState("");
  return(
    <div>

      <h2> Book Slip </h2>
      
      <label>Title:</label>
      
      <input 
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />

      <br/><br/>

      <label>price: </label>
      <input type="text"/>

      <br/>
      <br/>

      <label>Coppies:</label>
      <input type="text" defaultValue="0"/>

      <br/><br/>
      <button>Add</button>
    </div>
  );
}
function App(){
  return(
    <div>
      
      <header style={{
        backgroundColor: "blue",
        color:"white",
        padding:"20px"
      }}>
        <h1>Your Place</h1>
      </header>

      <BookSlip/>

      <div>
        <h2>Book List</h2> 
      </div>

      <div>
        <h3>Coppies: 0</h3>
      </div>
      
      <footer>
        <p>Roll No: 247251</p>
      </footer>
    </div>
  );
}

export default App;