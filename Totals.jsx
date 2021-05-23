import React from 'react';

export default ({ items }) => {
  var tax = 1.07;
  var tip = 1.20;
  var totalAdditions = tip * tax;

  var subtotal = items.reduce((accumulator, currentValue) => {
    return accumulator + parseFloat(currentValue.amount);
  }, 0);

  var total = subtotal * totalAdditions;

  var attributions = {};

  items.forEach(item => {
    attributions[item.person] = attributions[item.person] ? attributions[item.person] + parseFloat(item.amount) : 0 + parseFloat(item.amount);
  });


  console.log(attributions);



  return (
    <>
      <div>Subtotal: {subtotal}</div>
      <div>Total: {total}</div>
      <ul className="final-for-each">
        {Object.entries(attributions).map(([person, amount]) => {
          return (<li>
            <h2>{person}</h2>
                Subtotal: {amount}
            <hr />
                Total: {amount * totalAdditions}
          </li>)
        })}
      </ul>
    </>
  );

};
