import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import Table from './Table';
import App from './Api';

// finally, we actually render our HelloWorld app to a root
ReactDOM.render(<HelloWorld />, document.getElementById('root'));

// Lifecycle is the order in which methods are called in React. 
// Mounting refers to an item being inserted into the DOM