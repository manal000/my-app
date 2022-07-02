// src/App.js


import "./App.css";
import Login from "./containers/Login/Login";
import Header from "./containers/Header/Header";
import Client from "./containers/Client/Client";
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div >
      <header className="App-header">
<Header />
   
<Login />
      </header>
    
    </div>



  );
}

export default App;