import React from 'react';
import { connect } from 'react-redux';
import { authToProfile, removeAuthThunkCreator } from '../../../redux/reducers/authReducer';
import Header from './Header';
import { getIsAuthSuper } from '../../../redux/reducers/authReducer';
class HeaderContainer extends React.Component {
	componentDidMount() {
	}

	render() {
		return <Header  {...this.props} />
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: getIsAuthSuper(state),
		login: state.auth.login,
		id: state.auth.id
	}
}
export default connect(mapStateToProps, {
	authToProfile,
	removeAuthThunkCreator
})(HeaderContainer)