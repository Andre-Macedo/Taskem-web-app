import React from "react";

function App() {

  const list = ["aodd", "kfoaf", "faf", "dkf", "kfmf"]

  return (
    <div>
      <h1>Meu primeiro react</h1>
      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
