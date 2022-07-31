import React from 'react';
import'./HeaderManager.css';
import { FiLogOut } from "react-icons/fi";
import {TbShoppingCartPlus} from "react-icons/tb";
import {FiUsers} from "react-icons/fi";
const HeaderManager = () => {
  return (
    
      
        <div className="bgHeader">
           
<img src="/Logo2.png" class="Logo2" ></img>
<FiUsers className="user"/>
<TbShoppingCartPlus className="cartManager" />          
<FiLogOut className="logout" />
          

    </div>
  )
}

export default HeaderManager;
