import React from 'react';
import ReactDom from 'react-dom';
import Home from './components/app';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<Home />, container);