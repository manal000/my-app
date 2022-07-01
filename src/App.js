// src/App.js


import "./App.css";
import Login from "./Login";
import Header from "./Header";
import Client from "./Client";
import { useMediaQuery } from 'react-responsive';

function App() {
  return (
    <div >
      <header className="App-header">
<Header />
   
<Client />
      </header>
    
    </div>



  );
}

export default App;