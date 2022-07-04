import "./Header.css";
import { FiLogOut } from "react-icons/fi";

function Header(){
    return(
        <div className="bgHeader">
           <img src="/Logo2.png" class="Logo2" ></img>
           <FiLogOut className="logout" />
        </div>
    )
}
export default Header;