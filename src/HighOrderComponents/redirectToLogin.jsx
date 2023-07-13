import { Navigate } from "react-router-dom"
import { connect } from "react-redux"
import { getIsAuthSuper } from "../redux/reducers/authReducer"
let mapStateToProps = (state) => {
	return {
		isAuth: getIsAuthSuper(state)
	}
}
const redirectToLogin = (Component) => {

	const ContainerComponent = (props) => {
		if (props.isAuth == false) {
			return <Navigate to='/login' />
		} else {
			return <Component {...props} />
		}
	}
	const connectedComponent = connect(mapStateToProps, {})(ContainerComponent)

	return connectedComponent
}

export default redirectToLogin


// минимизированный high order component 
 
// const redirect = (Component) => {
// 	const container = (props) => {
// 		if (props.isAuth === true) {
// 			return <Component {...props} />
// 		} else {
// 			return <Navigate to={'/login'} />
// 		}
// 	}
// 	const connected = connect(mapStateToProps, {})(container)
// 	return connected
// }