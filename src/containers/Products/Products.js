import React from 'react'
import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
const Products = () => {
  return (
    <div>
       <div className="bg-Client" >

<div className="test" >
  <div>
 <h1 id="gerer"> GENERER <b >LA COMMANDE </b></h1>
 <h2 id="pour">Pour <b className="client">nomClient</b></h2>
 </div>
 
 <input type="text" id="searchProduit" placeholder="Search.."></input> 


  
</div>
<ProductCard />
    </div>
    </div>
  )
}

export default Products
