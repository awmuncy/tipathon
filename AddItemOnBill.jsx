import React, { useState } from 'react';


function AddItemOnBill(props) {
  var [myText, setMyText] = useState("Item to add to bill");
  var [theMoney, setTheMoney] = useState(0);
  var [thePerson, setThePerson] = useState("Guy");
  function doSubmit(e) {
    e.preventDefault();
    props.doTheAdd({ text: myText, amount: theMoney, person: thePerson });
  }

  return (
    <form onSubmit={doSubmit}>
      <input type="text" value={myText} onChange={e => {
        setMyText(e.target.value);
      }} />
      <input type="number" value={theMoney} onChange={e => { setTheMoney(e.target.value) }} />
      <input type="text" value={thePerson} onChange={e => { setThePerson(e.target.value) }} />
      <button>Add</button>
    </form >);
}

export default AddItemOnBill;
