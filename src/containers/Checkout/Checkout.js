import React from 'react';
import "./Checkout.css";
import { IoIosArrowBack } from "react-icons/io";
import{BiSelectMultiple} from "react-icons/bi";
import CardOrder from '../../components/CardOrder/CardOrder';
import {IoArrowBackCircleOutline} from "react-icons/io5";
import HeaderClient from '../../components/HeaderClient/HeaderClient';


const Checkout = () => {
  return (
    <div>
      <HeaderClient />
    <div className='bgCheckout'>
      <div className="test" >
  <div>
 <h1 id="checkout"> <b>CHECKOUT</b></h1>
 <h3 id="continuez"> <IoArrowBackCircleOutline id="back"/> Continuez l'achat </h3>
 

 </div>



</div>

<div className="grid-orders">

  <div className='orderProduct'>
  <CardOrder />
  <CardOrder />
  <CardOrder />
  <CardOrder />
  </div>

<div className='orderTotal'>
  <label><div id="total">Total</div></label>
  <label><div id="Prixx">prix total</div></label>
  <input type="button" className="valider" value="valider"></input>


</div>

 
</div>
</div>
</div>
   
  )
}

export default Checkout
