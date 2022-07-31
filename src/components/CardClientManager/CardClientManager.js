import React from 'react';
import Products from '../../containers/Products/Products';
import DeleteBttn from '../DeleteBttn/DeleteBttn';
import ModifyButton from '../ModifyButton/ModifyButton.js';


import './CardClientManager.css';





const CardClientManager = () => {
  return (
    <div>

      <div className="cardClient" >
     

            
 <div className="grid-card" > 

    <div id="name">
    BENNAN manal 
    </div>

  <div id="id">
  <span>12345665</span>
    </div>

<div id="other"></div>
    < div id="address">
    address
     </div> 

    <div id="tel">
    tel
    </div>

    <div id="other" className='gridbtn'>
    <div id="mod"><ModifyButton/> </div>  
    <div id="del"><DeleteBttn /></div>
</div>


      <select id="reviewAction">
    <option className="noOrder"></option>
   <option className='orderDone'></option>
  <option className='enCours'></option>
  
      </select>
    
</div>

</div>
    </div>
  )
}

export default CardClientManager
