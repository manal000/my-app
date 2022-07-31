import React from 'react'
import React from 'react';
import HeaderManager from '../../components/HeaderManager/HeaderManager.js';

import './Managerseller.css';
import {FiUserPlus} from "react-icons/fi";


const ManagerSeller = () => {
  return (
    <div>
    

    <div>
      <HeaderManager />
      <div className="bg-Client" >

<div className="test" >
 <p className="View"> GERER <b >LES CLIENTS </b></p>
 <input type="text" id="searchClient" placeholder="Search.."></input> 
 
     </div>
     <div id="add"><FiUserPlus size={"30px"} color={"#0873B8"} /></div>
<div className="grid-client">

<CardClientManager />
<CardClientManager />
<CardClientManager />
<CardClientManager />
<CardClientManager />
</div>

</div>


</div>

 </div>    

    
  )
}


export default ManagerSeller;
