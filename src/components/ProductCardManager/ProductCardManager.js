import React from 'react'
import DeleteBttn from '../DeleteBttn/DeleteBttn';
import ModifyButton from '../ModifyButton/ModifyButton';
import './ProductCardManager.css';
const ProductCardManager = () => {
  return (
    
       <div>
      <div class="grid-productM">
        <div id="product1">  <img src="/product1.webp" class="product1M" ></img> </div>
        <div id="nameProductM"><b>COCA COLA ZERO</b> </div>
        <div id="descriptionProductM"><b>25cl</b></div>
    <div id='ModifyM'><ModifyButton></ModifyButton></div>
       
        <div id="priceM">4.49 DH</div>
        <div id="deleteM"><DeleteBttn/></div>
    <div id='manage-stockM'></div>
    
      </div>
    </div>

  )
}

export default ProductCardManager;
