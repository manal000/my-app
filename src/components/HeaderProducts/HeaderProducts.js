import "./HeaderProducts.css";
import { FiLogOut } from "react-icons/fi";
import { FiShoppingCart } from "react-icons/fi";


import Login from "../../containers/Login/Login";



function HeaderProducts(){
    return(
 
        <div className="bgHeader">
           <img src="/Logo2.png" class="Logo2" ></img>
        
<FiLogOut className="logout" />
<FiShoppingCart  className="cart" />
    
        </div>
      
    )
}
export default HeaderProducts;