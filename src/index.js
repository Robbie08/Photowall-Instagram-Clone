import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'


// will render our code to the browser by passing main inside of BrowserRouter
ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
