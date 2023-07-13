import { Navigate } from "react-router-dom"

const UserButton = (props) => {

	return (Number(props.followingInProgress[0]) != Number(props.user.id)) || !props.followingInProgress[1] ? (!props.user.followed ?
		<button onClick={e => {
			if (!Number(props.followingInProgress[0])) {
				props.follow(props.user.id)
			}
			e.preventDefault()
		}} className="user__button _btn">follow</button>

		: <button onClick={e => {
			if (!Number(props.followingInProgress[0])) {
				props.unfollow(props.user.id)
			}
			e.preventDefault()
		}} className="user__button _btn">Unfollow</button>) : <div className="loader loader-placement"><img src="/src/img/loader.gif" alt="load..." /></div>

}

export default UserButton