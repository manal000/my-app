import "./HeaderOrdersHistory.css";
import { FiLogOut } from "react-icons/fi";

import {AiOutlineProfile} from  "react-icons/ai";

function HeaderOrdersHistory(){
    return(
        <div>
       

        <div className="bgHeader">
           <img src="/Logo2.png" class="Logo2" ></img>
        <AiOutlineProfile className="clients"></AiOutlineProfile>  
<FiLogOut className="logout" />
          
    </div>
    </div>
  )
}

export default HeaderOrdersHistory;
