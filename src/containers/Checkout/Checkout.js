import React from 'react';
import "./Checkout.css";
import { IoIosArrowBack } from "react-icons/io";
import{BiSelectMultiple} from "react-icons/bi";
import CardOrder from '../../components/CardOrder/CardOrder';

const Checkout = () => {
  return (
    <div className='bgCheckout'>
      <div className="test" >
  <div>
 <h1 id="checkout"> <b>CHECKOUT</b></h1>

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
  <div id="total">Total</div>
  <div id="Prixx">100DH</div>
  <input type="button" className="valider" value="valider"></input>


</div>

 
</div>

</div>
   
  )
}

export default Checkout
