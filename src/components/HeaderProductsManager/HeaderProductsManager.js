import React from 'react'
import './HeaderProductsManager.css';
import { FiLogOut } from "react-icons/fi";


const HeaderProductsManager = () => {
  return (
    <div className="bgHeader">
    <img src="/Logo2.png" class="Logo2" ></img>
   
<FiLogOut className="logout" />
      
    </div>
  )
}

export default HeaderProductsManager;
