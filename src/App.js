import "./App.css";
import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { faArrowLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import ElementsContext from "./components/Context";
import { fetchData } from "./AlmostCRUD";
import { Provider } from "react-redux";
import store from "./components/redux/Store";

library.add(faShoppingCart, faArrowLeft);

function App() {
  const [source, setSource] = useState([]);

  useEffect(() => {
    fetchData().then((data) => setSource(data));
  }, []);

  return (
    <div className="App">
      <ElementsContext.Provider value={{ source, setSource }}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </ElementsContext.Provider>
    </div>
  );
}

export default App;
