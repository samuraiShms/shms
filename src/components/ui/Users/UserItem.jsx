import { NavLink } from "react-router-dom"
import UserButton from "./UserButton"
const UserItem = (props) => {

	return (
		<div key={props.user.id} className="user">
			<div className="user__body">
				<div className="user__info">
					<NavLink to={`/profile/${props.user.id}`} className="user__name">
						{props.user.name}
					</NavLink>
					<div className="user__description">
						{props.user.status}
					</div>
				</div>
				<div className="user__location">
					<div className="user__location-label">
						Location
					</div>
					<div className="user__location-items">
						<div className="user__location-item">
							<span>City</span>
							<div className="user__location-filter">

							</div>
							{"props.user.location.city"}
						</div>
						<div className="user__location-item">
							<span>Street</span>
							<div className="user__location-filter">

							</div>
							{"props.user.location.street"}
						</div>
					</div>
				</div>
			</div>
			<UserButton followingInProgress={props.followingInProgress} user={props.user} follow={props.follow} unfollow={props.unfollow} />
		</div>
	)
}

export default UserItem