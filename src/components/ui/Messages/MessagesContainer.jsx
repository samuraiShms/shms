import './Messages.css';
import Messages from './Messages';
import { connect } from 'react-redux';
import { messagesActionsCreators } from '../../../redux/reducers/messagesReducer';
import redirectToLogin from '../../../HighOrderComponents/redirectToLogin';
import { compose } from 'redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
const withRouter = (Component) => {
	const container = (props) => {
		const params = useParams()
		const navigate = useNavigate()
		const location = useLocation()
		return <Component {...props} params={params} location={location} navigate={navigate} />
	}
	return container
}
let mapStateToProps = (state) => {
	return {
		messages: state.messages,
	}
}

const MessagesContainer = compose(connect(mapStateToProps,
	{
		addNewMessage: messagesActionsCreators.addNewMessage
	}), withRouter, redirectToLogin)(Messages)

export default MessagesContainer;