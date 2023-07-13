import { Field } from "redux-form"
import { Input } from "../../common/controls"
import { maxLengthCreator, required } from "../../../uitls/validators/validators"
const maxLength12 = maxLengthCreator(12)
const maxLength100 = maxLengthCreator(100)
const LoginForm = (props) => {
	return <form onSubmit={props.handleSubmit} className="login__form form-login">
		<div className="form-login__item">
			<Field validate={[required, maxLength100]} component={Input} type="text" name="email" placeholder="E-mail" className="form-login__input _input" />
		</div>
		<div className="form-login__item">
			<Field validate={[required, maxLength12]} component={Input} type="text" name="password" placeholder="password" className="form-login__input _input" />
		</div>

		<div className="form-login__checkbox">
			<Field component={"input"} name="rememberMe" type="checkbox" />
			<label className="form-login__label">
				Remember me
			</label>
		</div>
		{props.error && <div className="error">
			{props.error}
		</div>}
		<div className="form-login__button">
			<button className="_btn">
				Submit
			</button>
		</div>
	</form>
}

export default LoginForm