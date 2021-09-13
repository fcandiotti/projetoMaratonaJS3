import React  from "react";

const App = () => {
  return ( 
  <div className="container">
    <div className="valid-keys">
      <span className="matched">fer</span>
      <span className="remainder">nando</span>
    </div>
    <div className="typed-keys">asdferasdf</div>
    <div className="completed-words">
      <ol>
        <li>cidade</li>
        <li>carro</li>
        <li>profissional</li>
      </ol>
    </div>
  </div>
  );
};


export default App;