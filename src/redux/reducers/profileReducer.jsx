import { usersAPI } from './../../api/api';
import { profileAPI } from './../../api/api';
import { followAPI } from './../../api/api';
let initialState = {

	postsData: [
		{
			"id": 1,
			"From": 'Kirill',
			"Message": 'Lorem'
		},
		{
			"id": 2,
			"From": 'Kirill2',
			"Message": 'Lorem'
		},
		{
			"id": 3,
			"From": 'Kirill3',
			"Message": 'Lorem'
		},
	],
	currentProfile: null,
	statusText: '',
	statusProccess: false,
	initilize: false,
}

const profileReducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state)
	switch (action.type) {
		case 'ADD-NEW-POST':
			let newPost = {
				"id": stateCopy.postsData.length + 1,
				"From": action.name,
				"Message": action.text
			}
			if (newPost.From && newPost.Message) {
				if (newPost.From.length > 0 && newPost.Message.length > 0) {
					stateCopy.postsData.push(newPost)
				}
			}
			return { ...state, postsData: stateCopy.postsData }
		case 'SET-USER-PROFILE':
			return { ...state, currentProfile: { ...action.currentProfile, followed: action.followed }, initilize: action.status }
		case 'CHANGE-STATUS':
			return { ...state, statusText: action.text }
		case 'SET-STATUS':
			return { ...state, statusText: action.status }
		case 'TOGGLE-STATUS-PROCESS':
			return { ...state, statusProccess: action.value }
		default:
			return stateCopy;
	}


}
export const changeStatus = (text) => {
	return {
		'type': 'CHANGE-STATUS',
		'text': text
	}
}
export const setStatus = (status) => {
	return {
		'type': 'SET-STATUS',
		status
	}
}
export const setUserProfile = (currentProfile, status, followed) => {
	return {
		'type': 'SET-USER-PROFILE',
		currentProfile,
		status,
		followed
	}
}
export const getFollowStatus = async (id) => {
	const response = await followAPI.getFollowStatus(id)
	return response.data
}

export const addNewPost = (name, text) => {
	return {
		'type': 'ADD-NEW-POST',
		name,
		text
	}
}
export const toggleStatusProcess = (value) => {
	return {
		type: 'TOGGLE-STATUS-PROCESS',
		value
	}
}


// Thunks

export const getStatusThunkCreator = (userId) => {
	return (dispatch) => {
		if (userId) {
			dispatch(toggleStatusProcess(true))
			profileAPI.getStatus(userId).then(response => {
				dispatch(setStatus(response.data ? response.data : 'status not specified'))
				dispatch(toggleStatusProcess(false))
			})
		}
	}
}

export const updateStatusThunkCreator = (status) => {
	return (dispatch) => {
		dispatch(toggleStatusProcess(true))
		profileAPI.updateStatus(status).then(response => {
			dispatch(setStatus(status))
			dispatch(toggleStatusProcess(false))
		})
	}
}
export const setUserProfileThunkCreator = (userId) => {
	return async (dispatch) => {
		dispatch(setUserProfile(null, false))
		const response = await usersAPI.setProfileAPI(userId);
		let profile = response.data
		if (!profile) {
			profile = {
				name: 'profile is not defined',
				followed: '',
			}
		}
		dispatch(getStatusThunkCreator(userId))
		getFollowStatus(userId).then(followed => {
			dispatch(setUserProfile(profile, true, followed))
		})
	}
}


export const getInitilize = (state) => {
	return state.profile.initilize
}

export default profileReducer;