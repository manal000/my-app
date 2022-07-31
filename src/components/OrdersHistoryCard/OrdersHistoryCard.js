import React from 'react';
import './OrdersHistoryCard.css';

const OrdersHistoryCard = () => {
  return (
    <div>
        <div class="cardHistorique">
      <div className='grid-cardH'>
        <p id="OId">OrderId</p>
        <p id="dateO">--/--/----</p>


<p id="totalO">Total</p>
<p id="prixO">prix</p>
<div id="other"> </div>
<div id="OrderState"><button id="envoyer">Envoyer</button></div>

      </div>
  
    
      </div>
    </div>
  )
}

export default OrdersHistoryCard;
