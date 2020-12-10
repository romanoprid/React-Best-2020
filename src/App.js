import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import ElementsContext from "./components/Context";
import { fetchData } from "./AlmostCRUD";



function App() {
  const [source, setSource] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setSource(data));
  }, []);

  return (
    <div className="App">
      <ElementsContext.Provider value={{ source, setSource }}>
        <Navigation />
      </ElementsContext.Provider>
    </div>
  );
}

export default App;
