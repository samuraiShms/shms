import React, { useState, useEffect } from "react"
const ProfileStatusWithHooks = (props) => {
	const [editMode, setEditMode] = useState(false)
	const [status, setStatus] = useState(props.status)
	const setActiveEditMode = () => {
		setEditMode(true)
	}
	const setDisabledEditMode = (status) => {
		props.updateStatusThunkCreator(status)
		setEditMode(false)
	}
	useEffect(() => {
		setStatus(props.status)
	}, [props.status])
	return <>

		<h2 className="profile-status__title">Status</h2>
		{
			props.statusProccess
				? <div className="loader loader-placement"><img src="/src/img/loader.gif" alt="load..." /></div>
				: (editMode === false ? <div>
					<button onClick={event => {
						props.userId == props.myId && setActiveEditMode()
						event.preventDefault()
					}} className="profile-status__button _btn">
						{props.userId == props.myId ? (props.status ? props.status + ' click to change' : 'click to change status') : props.status}
					</button>
				</div> :
					<div>
						<input autoFocus={true} placeholder="Change Status" onChange={e => {
							setStatus(e.currentTarget.value)
						}} onBlur={e => {
							props.userId == props.myId && setDisabledEditMode(status)
						}} type="text" className="profile-status__input _input" value={status} />
					</div>)

		}

	</>

}

export default ProfileStatusWithHooks
