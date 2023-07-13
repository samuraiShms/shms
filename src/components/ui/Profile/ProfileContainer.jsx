import React from "react";
import Profile from "./Profile.jsx";
import { connect } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { setUserProfile, setUserProfileThunkCreator, changeStatus, getStatusThunkCreator, updateStatusThunkCreator } from "../../../redux/reducers/profileReducer.jsx";
import redirectToLogin from "../../../HighOrderComponents/redirectToLogin.jsx";
import { compose } from "redux";
import { getInitilize } from "../../../redux/reducers/profileReducer.jsx";
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return (
			<Component
				{...props}
				location={location}
				params={params}
				navigate={navigate}
			/>
		);
	}

	return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.setUserProfileThunkCreator(this.props.params.userId)
	}
	render() {
		return (
			<Profile {...this.props} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		currentProfile: state.profile.currentProfile,
		statusText: state.profile.statusText,
		statusProccess: state.profile.statusProccess,
		myId: state.auth.id,
		initilize: getInitilize(state)
	}
}


export default compose(connect(mapStateToProps, { setUserProfile, setUserProfileThunkCreator, changeStatus, getStatusThunkCreator, updateStatusThunkCreator }), withRouter, redirectToLogin)(ProfileContainer)


