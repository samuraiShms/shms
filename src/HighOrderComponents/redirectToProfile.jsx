import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const mapStateToProps = (state) => {
	return {
		id: state.auth.id
	}
}
const redirectToProfile = (Component) => {

	const containerComponent = (props) => {
		if (props.id) {
			return <Navigate to={`/profile/${props.id}`} />
		} else {
			return <Component {...props} />

		}
	}

	return connect(mapStateToProps, null)(containerComponent)
}

export default redirectToProfile