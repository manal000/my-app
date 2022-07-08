import React from 'react';
import "./Checkout.css";
import { IoIosArrowBack } from "react-icons/io";
import CardOrder from '../../components/CardOrder/CardOrder';

const Checkout = () => {
  return (
    <div className='bgCheckout'>
      <div className="test" >
  <div>
 <h1 id="checkout"> <b>CHECKOUT</b></h1>
  
 </div>
 
 <input type="text" id="searchProduit" placeholder="Search.."></input> 

</div>

<div id="grid-oders">
  
</div>

<div id="grid-resume">
  
</div>
    </div>
  )
}

export default Checkout
