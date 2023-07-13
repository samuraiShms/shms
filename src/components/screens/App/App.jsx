//Хуки
//import { useCallback, useEffect, useMemo, useState } from 'react';
import HeaderContainer from "../../structure/Header/HeaderContainer";
import Footer from '../../structure/Footer/Footer';
import Page from '../../structure/Page/Page';
import SidebarContainer from "../../structure/Sidebar/SidebarContainer";
import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { initilizingApp } from '../../../redux/reducers/appReducer.jsx'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import store from "../../../redux/redux-store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
//===============================================================================================================================================================================================================================================================================================
const withRouter = (Component) => {
	const container = (props) => {
		const params = useParams()
		const navigate = useNavigate()
		const location = useLocation()
		return <Component {...props} params={params} location={location} navigate={navigate} />
	}
	return container
}
const App = (props) => {
	useEffect(() => {
		props.initilizingApp()
	}, [])
	if (!props.initilize) {
		return <div className="loader">
			<img src="/src/img/loader.gif" alt="load..." />
		</div>
	}
	return (
		<div>
			<HeaderContainer />
			<div className="content">
				<div>
					<SidebarContainer />
					<Page />
				</div>
			</div>
			<Footer />
		</div>
	)
}
const mapDispatchToProps = {
	initilizingApp
}
const mapStateToProps = (state) => {
	return {
		initilize: state.app.initilize
	}
}

const AppContainer = compose(connect(mapStateToProps, mapDispatchToProps))(App)

const MainApp = (props) => {
	return <React.StrictMode>
		<BrowserRouter >
			<Provider store={store}>
				<AppContainer /> {/* state={store.getState()} dispatch={store.dispatch.bind(store)} */}
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
}

export default MainApp