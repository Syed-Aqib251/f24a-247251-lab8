function BookSlip(){
  return(
    <div>
      <h2>
        Book Slip
      </h2>
      <label>Title:</label>
      <input type="text"/>
      <br/>
      <br/>
      <label>Coppies:</label>
      <input type="text" defaultValue="0"/>
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
        <h3>Coppies: 0</h3>
      </div>
      <footer>
        <p>Roll No: 247251</p>
      </footer>
    </div>
  );
}

export default App;