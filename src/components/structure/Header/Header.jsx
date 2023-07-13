import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className='header'>
			<div className='header__container _container'>
				<div className="header__body">
					{props.isAuth ? <NavLink to={`/profile/${props.id}`} className="header__logo">{props.login}</NavLink> : <NavLink to={"/login"} className='header__login'>Login</NavLink>}
					{props.isAuth && <div onClick={props.removeAuthThunkCreator} className="header__leave">
						Leave out your account
					</div>}
				</div>
			</div>
		</header>
	)
}


export default Header;