import "./Client.css";
import React from "react";
import CardClient from "../../components/CardClient/CardClient.js";
import HeaderClient from "../../components/HeaderClient/HeaderClient";

function Client() {
  return (
    <div>
    <HeaderClient />
    <div className="bg-Client" >

    <div className="test" test>
     <p className="View"> AFFICHER <b >CLIENT </b></p>
     <input type="text" id="searchClient" placeholder="Search.."></input> 
     
         </div>
<div className="grid-client">

<CardClient />
<CardClient />
<CardClient />
<CardClient />
<CardClient />
<CardClient />
<CardClient />


</div>
</div>


</div>

         







       
      

     
   
  );
}

export default Client;