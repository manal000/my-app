import React from 'react';
import HeaderManager from '../../components/HeaderManager/HeaderManager.js';
import CardClientManager from '../../components/CardClientManager/CardClientManager.js';
import './ManagerClient.css';

const ManagerClient = () => {
  return (
    <div>
      <HeaderManager />
      <div className="bg-Client" >

<div className="test" >
 <p className="View"> GERER <b >LES CLIENTS </b></p>
 <input type="text" id="searchClient" placeholder="Search.."></input> 
 
     </div>
<div className="grid-client">

<CardClientManager />
<CardClientManager />
<CardClientManager />
<CardClientManager />
<CardClientManager />
</div>

</div>


</div>

     

    
  )
}

export default ManagerClient;
