import React from 'react';
import ReactDOM from 'react-dom';
import Freeman from './Freeman';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Freeman />, div);
  ReactDOM.unmountComponentAtNode(div);
});
