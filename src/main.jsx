import './assets/styles/global.css';
import store from './redux/redux-store.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './components/screens/App/App.jsx';
//import Router from '/src/services/Router.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<MainApp />,
)




//rerenderTree()
//store.subscribe(rerenderTree)

// store.subscribe(() => {
// 	rerenderTree(store.getState())
// })