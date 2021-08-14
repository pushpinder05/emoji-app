import "./styles.css";

var userName = prompt("Give me you username!");

export default function App() {
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue" }}>Welcome {userName}</h1>
    </div>
  );
}
