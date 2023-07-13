import { reduxForm } from "redux-form"
import LoginForm from "./LoginForm"
import { connect } from "react-redux"
import './Login.css'
import { setAuthThunkCreator } from "../../../redux/reducers/authReducer"
import redirectToProfile from "../../../HighOrderComponents/redirectToProfile"
import { compose } from "redux"
const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
	const submitData = (formData) => {
		props.setAuthThunkCreator(formData.email, formData.password, (formData.rememberMe ? formData.rememberMe : false))
	}
	return (
		<>
			<div className="login">
				<h2 className="form-login__title">
					Login
				</h2>
				<LoginReduxForm onSubmit={submitData} />
			</div>

		</>
	)

}
let mapStateToProps = (state) => {
	return {

	}
}
let mapDispatchToProps = {
	setAuthThunkCreator
}
export default compose(connect(mapStateToProps, mapDispatchToProps), redirectToProfile)(Login)