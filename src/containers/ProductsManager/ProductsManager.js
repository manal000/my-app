import React from 'react'
import HeaderProductsManager from '../../components/HeaderProductsManager/HeaderProductsManager.js';
import ProductCardManager from '../../components/ProductCardManager/ProductCardManager.js';
import "./ProductsManager.css";
import {FiPlusCircle} from "react-icons/fi";
const ProductsManager = () => {
  return (
   
      <div> 
  <HeaderProductsManager />
       <div className="bg-Client" >

<div className="test" >
  <div>
 <h1 id="gererManager"> GESTION <b >DU STOCK </b></h1>

 </div>
 
 <input type="text" className="searchProduitManager" placeholder="Search.."></input>  
</div>
<FiPlusCircle id="addM" size={"30px"} color={"#0873B8"}/>

<div className="grid-productsM">
  
<div id='grid-itemM'><ProductCardManager /></div>

<div id='grid-itemM'><ProductCardManager /></div>
<div id='grid-itemM'><ProductCardManager /></div>
<div id='grid-itemM'><ProductCardManager /></div>
<div id='grid-itemM'><ProductCardManager /></div>
<div id='grid-itemM'><ProductCardManager /></div>

</div>
</div>
    </div>
  )
}

export default ProductsManager;
