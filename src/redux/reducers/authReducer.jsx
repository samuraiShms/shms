import { stopSubmit } from "redux-form"
import { usersAPI } from "../../api/api"
import { createSelector } from "reselect"

let initialState = {
	login: null,
	email: null,
	id: null,
	isAuth: false,
}
const authReducer = (state = initialState, action) => {
	let stateCopy = Object.assign({}, state)
	switch (action.type) {
		case 'AUTH-TO-PROFILE':
			return {
				...state,
				isAuth: action.isAuth,
				...action.data
			}
		default:
			return stateCopy
	}
}

export default authReducer




export const authToProfile = (login, email, id, isAuth) => {
	return {
		'type': 'AUTH-TO-PROFILE',
		'data': {
			login,
			email,
			id,
		},
		isAuth
	}
}


// thunks
export const getDataLoginThunkCreator = () => {
	return (dispatch) => {
		return usersAPI.getDataLogin().then(response => {
			if (response.data.resultCode == 0) {
				dispatch(authToProfile(response.data.data.login, response.data.data.email, response.data.data.id, true))
			}
		})
	}
}

export const setAuthThunkCreator = (email, password, rememberMe) => {
	return (dispatch) => {
		// let action = stopSubmit('login', { _error: 'Email or password is wrong' })
		// dispatch(action)
		//usersAPI.captcha().then(captcha => {
		usersAPI.setDataLogin(email, password, rememberMe).then(response => {
			if (response.data.resultCode === 0) {
				dispatch(getDataLoginThunkCreator())
			} else {
				if (response.data.messages.length) {
					dispatch(stopSubmit('login', { _error: response.data.messages }))
				} else {
					dispatch(stopSubmit('login', { _error: "Some error" }))
				}
			}
		})
		//})

	}
}




export const removeAuthThunkCreator = () => {
	return (dispatch) => {
		usersAPI.removeDataLogin().then(response => {
			dispatch(authToProfile(null, null, null, false))
		})
	}
}

// Selectors 

const getIsAuth = (state) => {
	return state.auth.isAuth
}


export const getIsAuthSuper = createSelector(getIsAuth, (isAuth) => {
	return isAuth
})