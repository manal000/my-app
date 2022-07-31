// src/App.js


import "./App.css";
import Login from "./containers/Login/Login";
import Client from "./containers/Client/Client.js";
import Products from "./containers/Products/Products";
import Checkout from "./containers/Checkout/Checkout";
import { useMediaQuery } from 'react-responsive';
import ManagerClient from "./containers/ManagerClient/ManagerClient";
import ProductsManager from "./containers/ProductsManager/ProductsManager";
import OrdersHistory from "./containers/OrdersHistory/OrdersHistory";
import ManagerSeller from "./containers/ManagerSeller/ManagerSeller";


function App() {
  return (

    <div >
      <header className="App-header">


<ManagerSeller/>

      </header>
    
    </div>
 
  );
}

export default App;