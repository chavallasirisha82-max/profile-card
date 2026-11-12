import "./App.css";
function App() {
  const yourName = "Shirisha";
  const yourAim = "Become independent and Succesfull";
  const description =
    "I am a very good girl";
  const funFact =
    "i love to explore something new ";
    

  return (
    <div className="card">
      <h1>{yourName}</h1>

      <h2>{yourAim}</h2>

      <p>{description}</p>

      <p>{funFact}</p>
    </div>
  );
}

export default App;