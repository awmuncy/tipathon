import React from 'react';
import AddItemOnBill from './AddItemOnBill.jsx';
import Totals from './Totals.jsx';

function BillCalculator(props) {

  var [myItemsOnBill, setMyItemsOnBill] = React.useState(localStorage.getItem('thebill') ? JSON.parse(localStorage.getItem('thebill')) : []);

  function addToBill(item) {
    myItemsOnBill.push(item);

    console.log("THE ITEM:", myItemsOnBill);

    setMyItemsOnBill(myItemsOnBill.slice());
  }

  function removeFromBill(item) {
    myItemsOnBill.splice(item, 1);
    setMyItemsOnBill(myItemsOnBill.slice());
  }

  function saveIt() {
    localStorage.setItem('thebill', JSON.stringify(myItemsOnBill));
  }
  saveIt();

  return (<div className="bill-calculator">
    <h1>Calculate Your Bill</h1>
    <AddItemOnBill doTheAdd={addToBill} />


    <ListItems remove={removeFromBill} items={myItemsOnBill} />



    <Totals items={myItemsOnBill} />

    <button onClick={() => {
      if (confirm("Ya sure?")) {
        localStorage.removeItem('thebill');
        setMyItemsOnBill([]);
      }

    }}>Clear All</button>
  </div >);
}

function ListItems(props) {
  return (<ul>
    {props.items.map((item, key) => {
      return <li key={item.text}>{item.person} - {item.text} : {item.amount} <button onClick={() => props.remove(key)}>Get rid of it</button></li>;
    })}
  </ul>)
}

export default BillCalculator;
