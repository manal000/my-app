import React from 'react'
import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import HeaderProdcuts from '../../components/HeaderProducts/HeaderProducts.js';
const Products = () => {
  return (
    <div> 
      <HeaderProdcuts />
       <div className="bg-Client" >

<div className="test" >
  <div>
 <h1 id="gerer"> GENERER <b >LA COMMANDE </b></h1>
 <h2 id="pour">Pour <b className="client">nomClient</b></h2>
 </div>
 
 <input type="text" className="searchProduit" placeholder="Search.."></input> 


  
</div>

<div className="grid-products">
  
<div id='grid-item'><ProductCard /></div>
<div id='grid-item'><ProductCard /></div>
<div id='grid-item'><ProductCard /></div>
<div id='grid-item'><ProductCard /></div>
<div id='grid-item'><ProductCard /></div>
<div id='grid-item'><ProductCard /></div>


</div>
</div>

    
    </div>
  )
}

export default Products
