import "./Header.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";


function Header(){
    return(
        <div className="bgHeader">
           <img src="/Logo2.png" class="Logo2" ></img>
           <FiLogOut className="logout" />
           <AiOutlineShoppingCart  className="cart" />

        </div>
    )
}
export default Header;