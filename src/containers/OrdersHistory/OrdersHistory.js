import React from 'react'
import HeaderOrdersHistory from '../../components/HeaderOrdersHistory/HeaderOrdersHistory';
import OrdersHistoryCard from '../../components/OrdersHistoryCard/OrdersHistoryCard';
import './OrdersHistory.css';
const OrdersHistory = () => {
  return (
    <div>
        <HeaderOrdersHistory/>
         <div className="bg-historique" >
      <div>
 <h1 id="historique"> HISTORIQUE <b >DES COMMANDES </b></h1>
 <h2 id="pour">Pour <b className="client">nomClient</b></h2>
 </div> 
<br></br>
 <div className='grid-historique1'>
<div id='new'>
    <h2 id='newO'>Nouvelle commande</h2>

<div className="grid-OrdersH">
    <div id="grid-itemO"><OrdersHistoryCard/></div>
    <div id="grid-itemO"><OrdersHistoryCard/></div>
    <div id="grid-itemO"><OrdersHistoryCard/></div>
    </div>
    </div>
<div id='old'>
    <h2 id='oldO'>Commandes anciennes</h2></div>

    <div className="grid-OrdersH">

    <div id="grid-itemO"><OrdersHistoryCard/></div>
    <div id="grid-itemO"><OrdersHistoryCard/></div>
    <div id="grid-itemO"><OrdersHistoryCard/></div>
    </div>
 </div>
    </div>
    </div>
  )
}

export default OrdersHistory
