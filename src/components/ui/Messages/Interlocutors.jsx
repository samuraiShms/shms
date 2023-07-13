import { NavLink } from "react-router-dom"

const Interlocutors = (props) => {
	const path = '/messages/' + props.interlocutor.id
	return (
		<div className="messages__interlocutor">
			<NavLink className='messages__link' to={path}>{props.interlocutor.text}</NavLink>
		</div>
	)
}

export default Interlocutors