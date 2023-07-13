import PostsContainer from "../Posts/PostsContainer.jsx";
import ProfileInfo from "./ProfileInfo.jsx";
import React, { useCallback } from "react";
const Profile = (props) => {

	if (!props.initilize) {
		return <div className="loader"><img src="/src/img/loader.gif" alt="load..." /></div>
	}

	return (
		<div className="profile" >
			<ProfileInfo statusProccess={props.statusProccess}
				userId={props.params.userId}
				updateStatusThunkCreator={props.updateStatusThunkCreator}
				currentProfile={props.currentProfile} changeStatus={props.changeStatus}
				statusText={props.statusText}
				myId={props.myId} />
			<PostsContainer />
		</div>
	)

}

export default Profile