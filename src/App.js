// src/App.js


import "./App.css";
import Login from "./containers/Login/Login";
import Header from "./components/Header/Header.js";
import Client from "./containers/Client/Client.js";
import Products from "./containers/Products/Products";

import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div >
      <header className="App-header">
<Header />
<Products />
      </header>
    
    </div>



  );
}

export default App;