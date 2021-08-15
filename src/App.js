import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter);
  }

  return (
    <div className="App">
      <h1>inside out!!!</h1>
      <button onClick={likeClickHandler}> Like Me! </button> {likeCounter}
    </div>
  );
}
