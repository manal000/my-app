import React from 'react';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div>
      <div className='grid-product'>
        <div>  <img src="/product1.webp" class="product1" ></img> </div>
        <div className='nameProduct'>coca cola zero</div>
        <input id="qte" type="number" min="0"  max="100"></input>
        <div className='descriptionProduct'>25cl</div>
        <div className='price'>4.49 DH</div>
        <input type="submit" onclick="myFunction()" id="button-add-cart" value ="Ajouter au panier" ></input>
    
      </div>
    </div>
  )
}

export default ProductCard;
