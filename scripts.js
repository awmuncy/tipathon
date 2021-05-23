import React from 'react';
import ReactDOM from 'react-dom';
import BillCalculator from './BillCalculator.jsx';

window.addEventListener('DOMContentLoaded', (event) => {
  let el = document.querySelector('#app');

  ReactDOM.render(<BillCalculator text="I'm passed in" />, el);
});
