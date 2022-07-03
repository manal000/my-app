import "./Client.css";
import React from "react";
import Card from "../Card/Card.js";


function Client() {
  return (
    
    <div className="bg-Client" >

    <div className="test" test>
     <p className="View"> AFFICHER <b className="client">CLIENT </b></p>
     <input type="text" id="search" placeholder="Search.."></input> 
     
         </div>
<div className="grid-client">

<Card />
<Card />
<Card />
<Card />
<Card />


</div>


</div>

         







       
      

     
   
  );
}

export default Client;