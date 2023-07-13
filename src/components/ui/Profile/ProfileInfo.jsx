import { Navigate } from "react-router-dom"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks"
const ProfileInfo = (props) => {

	if (!props.currentProfile) {
		return <Navigate to={'/login'} />
	} else {
		return (<div className="profile__body">
			<div className="profile__image">
				<img src={props.currentProfile.photos.large ? props.currentProfile.photos.large : '/src/img/user.png'} alt="logo" />
			</div>
			<div className="profile__name">
				{props.currentProfile.aboutMe} <br />
				{props.currentProfile.fullName}
			</div>
			<div className="profile__description">
				{props.currentProfile.userId !== props.myId ? `Follow: ${props.currentProfile.followed ? 'true' : 'false'}` : <p>My profile</p>}
			</div>
			<div className="profile__status profile-status">
				<ProfileStatusWithHooks myId={props.myId} statusProccess={props.statusProccess} updateStatusThunkCreator={props.updateStatusThunkCreator} userId={props.userId} status={props.statusText} changeStatus={props.changeStatus} />
			</div>

			<div className="profile__find">
				{props.currentProfile.lookingForAJob ? <p>Yes, i find a job</p> : <p>No, i find't a job</p>}
			</div>
		</div>)
	}
}

export default ProfileInfo